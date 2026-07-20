import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, lesson_id } = req.body || {};
  if (!email || !lesson_id) return res.status(400).json({ error: 'Missing required fields' });

  const supabase = supabaseAdmin();
  const { error } = await supabase
    .from('lesson_progress')
    .upsert({ email, lesson_id }, { onConflict: 'email,lesson_id' });

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not save progress' });
  }

  return res.status(200).json({ saved: true });
}
