import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, question_id, chosen_choice_id, is_correct } = req.body || {};
  if (!email || !question_id || !chosen_choice_id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const supabase = supabaseAdmin();
  const { error } = await supabase.from('question_attempts').insert({
    email,
    question_id,
    chosen_choice_id,
    is_correct: !!is_correct,
  });

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not log attempt' });
  }

  return res.status(200).json({ logged: true });
}
