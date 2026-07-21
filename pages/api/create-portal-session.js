import { getStripe } from '../../lib/stripe';
import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const supabase = supabaseAdmin();
    const { data, error } = await supabase
      .from('access_passes')
      .select('stripe_customer_id')
      .ilike('email', email)
      .not('stripe_customer_id', 'is', null)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Could not look up subscription', debug: error.message });
    }

    if (!data?.stripe_customer_id) {
      return res.status(404).json({ error: 'No billing account found for this email' });
    }

    const stripe = getStripe();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: data.stripe_customer_id,
      return_url: `${siteUrl}/dashboard`,
    });

    return res.status(200).json({ url: portalSession.url });
  } catch (err) {
    console.error('Billing portal session error:', err);
    return res.status(500).json({ error: 'Could not open billing portal', debug: err.message });
  }
}
