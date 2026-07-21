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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { plan, track_id } = session.metadata || {};
    // Stripe collects the email directly on its hosted checkout page (since we
    // don't pre-fill customer_email), so we read it back from the completed session.
    const email = session.customer_details?.email || session.customer_email;
    const planDetails = PLANS[plan];

    if (!planDetails || !email) {
      console.error('Missing plan or email in session metadata', session.metadata);
      return res.status(200).json({ received: true, warning: 'missing metadata' });
    }

    const startsAt = new Date();
    const expiresAt = new Date(startsAt.getTime() + planDetails.days * 24 * 60 * 60 * 1000);

    const supabase = supabaseAdmin();
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

  return res.status(200).json({ received: true });
}
