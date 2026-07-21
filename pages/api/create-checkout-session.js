import { getStripe, PLANS } from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { plan, consent } = req.body || {};

  if (!plan || !PLANS[plan]) return res.status(400).json({ error: 'Invalid plan selected' });
  if (!consent) return res.status(400).json({ error: 'Consent to Terms and Disclaimer is required' });

  const planDetails = PLANS[plan];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const stripe = getStripe();

    const baseParams = {
      payment_method_types: ['card'],
      // No customer_email set — Stripe Checkout will show its own email field
      // and collect it directly on the hosted page.
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    };

    let session;
    if (planDetails.mode === 'subscription') {
      session = await stripe.checkout.sessions.create({
        ...baseParams,
        mode: 'subscription',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              recurring: { interval: 'month' },
              product_data: {
                name: `TherapyPrepped — ${planDetails.label}`,
                description: 'Monthly recurring access to LMHC / NCMHCE case-based study content. Cancel anytime.',
              },
              unit_amount: planDetails.amountCents,
            },
            quantity: 1,
          },
        ],
        // Metadata on the checkout session itself isn't available on later
        // invoice events, so we also attach it to the subscription — the
        // webhook reads it from there for renewals.
        subscription_data: {
          metadata: { plan, track_id: 'ncmhce', consent_accepted: 'true' },
        },
        metadata: { plan, track_id: 'ncmhce', consent_accepted: 'true' },
      });
    } else {
      session = await stripe.checkout.sessions.create({
        ...baseParams,
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `TherapyPrepped — ${planDetails.label}`,
                description: `${planDetails.days}-day access to LMHC / NCMHCE case-based study content`,
              },
              unit_amount: planDetails.amountCents,
            },
            quantity: 1,
          },
        ],
        metadata: { plan, track_id: 'ncmhce', consent_accepted: 'true' },
      });
    }

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    // TEMPORARY: exposing the real error message to debug — remove
    // err.message from the response once fully confirmed working.
    return res.status(500).json({ error: 'Could not start checkout', debug: err.message });
  }
}
