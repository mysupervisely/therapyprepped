import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const supabase = supabaseAdmin();
  const { data, error } = await supabase
    .from('access_passes')
    .select('plan, track_id, expires_at')
    .ilike('email', email)
    .gt('expires_at', new Date().toISOString())
    .order('expires_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not check access' });
  }

  if (!data) return res.status(200).json({ valid: false });

  return res.status(200).json({
    valid: true,
    plan: data.plan,
    track_id: data.track_id,
    expires_at: data.expires_at,
  });
}
