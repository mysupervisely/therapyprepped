import { getStripe, PLANS } from '../../lib/stripe';
import { supabaseAdmin } from '../../lib/supabase';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Next.js API routes don't include a raw-body helper out of the box when
// bodyParser is disabled, so we read the stream manually. This avoids
// pulling in an extra dependency (e.g. `micro`) just for this one route.
function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  const stripe = getStripe();
  const sig = req.headers['stripe-signature'];
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const supabase = supabaseAdmin();

  // ---- One-time day-pass purchases ----
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Subscription checkouts are handled entirely via invoice.payment_succeeded
    // below (which fires for both the first charge and every renewal), so
    // skip subscription-mode sessions here to avoid a duplicate/incomplete row.
    if (session.mode === 'subscription') {
      return res.status(200).json({ received: true, note: 'subscription handled via invoice.payment_succeeded' });
    }

    const { plan, track_id } = session.metadata || {};
    const email = session.customer_details?.email || session.customer_email;
    const planDetails = PLANS[plan];

    if (!planDetails || !email) {
      console.error('Missing plan or email in session metadata', session.metadata);
      return res.status(200).json({ received: true, warning: 'missing metadata' });
    }

    const startsAt = new Date();
    const expiresAt = new Date(startsAt.getTime() + planDetails.days * 24 * 60 * 60 * 1000);

    const { error } = await supabase.from('access_passes').insert({
      email,
      plan,
      track_id: track_id || 'ncmhce',
      stripe_session_id: session.id,
      stripe_customer_id: session.customer || null,
      amount_cents: planDetails.amountCents,
      starts_at: startsAt.toISOString(),
      expires_at: expiresAt.toISOString(),
      consent_accepted: true,
      consent_accepted_at: startsAt.toISOString(),
    });

    if (error) {
      // Duplicate session_id (webhook retry) is fine to ignore; anything else
      // is a real failure and should be surfaced (500) so it's visible in
      // Stripe's webhook delivery log instead of silently disappearing.
      if (error.code !== '23505') {
        console.error('Failed to record access pass:', error);
        return res.status(500).json({ received: true, error: error.message });
      }
    }
  }

  // ---- Monthly subscription: initial charge AND every renewal ----
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object;
    const subscriptionId = invoice.subscription;

    if (subscriptionId) {
      const email = invoice.customer_email;
      const lineItem = invoice.lines?.data?.[0];
      const periodEndSeconds = lineItem?.period?.end;
      const expiresAt = periodEndSeconds
        ? new Date(periodEndSeconds * 1000)
        : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // fallback: 30 days out
      const startsAt = new Date();

      if (!email) {
        console.error('Missing customer_email on invoice', invoice.id);
        return res.status(200).json({ received: true, warning: 'missing email on invoice' });
      }

      // Upsert by subscription id: update the row if this subscription has
      // been seen before (a renewal), otherwise insert a new one (first charge).
      const { data: existing, error: lookupError } = await supabase
        .from('access_passes')
        .select('id')
        .eq('stripe_subscription_id', subscriptionId)
        .maybeSingle();

      if (lookupError) {
        console.error('Failed to look up existing subscription row:', lookupError);
        return res.status(500).json({ received: true, error: lookupError.message });
      }

      if (existing) {
        const { error: updateError } = await supabase
          .from('access_passes')
          .update({ expires_at: expiresAt.toISOString() })
          .eq('id', existing.id);
        if (updateError) {
          console.error('Failed to extend subscription access:', updateError);
          return res.status(500).json({ received: true, error: updateError.message });
        }
      } else {
        const { error: insertError } = await supabase.from('access_passes').insert({
          email,
          plan: 'monthly',
          track_id: 'ncmhce',
          stripe_subscription_id: subscriptionId,
          stripe_customer_id: invoice.customer || null,
          amount_cents: invoice.amount_paid,
          starts_at: startsAt.toISOString(),
          expires_at: expiresAt.toISOString(),
          consent_accepted: true,
          consent_accepted_at: startsAt.toISOString(),
        });
        if (insertError) {
          console.error('Failed to record new subscription access:', insertError);
          return res.status(500).json({ received: true, error: insertError.message });
        }
      }
    }
  }

  // ---- Monthly subscription: cancellation ----
  // Cuts off access immediately when a subscription is canceled, rather than
  // waiting for the previously-granted period to naturally run out.
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const { error } = await supabase
      .from('access_passes')
      .update({ expires_at: new Date().toISOString() })
      .eq('stripe_subscription_id', subscription.id);
    if (error) {
      console.error('Failed to revoke access on subscription cancellation:', error);
      return res.status(500).json({ received: true, error: error.message });
    }
  }

  return res.status(200).json({ received: true });
}
