import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, track_id } = req.body || {};
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'A valid email is required' });
  if (!track_id) return res.status(400).json({ error: 'track_id is required' });

  const supabase = supabaseAdmin();
  const { error } = await supabase
    .from('waitlist')
    .upsert({ email, track_id }, { onConflict: 'email,track_id' });

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not join waitlist' });
  }

  return res.status(200).json({ joined: true });
}
