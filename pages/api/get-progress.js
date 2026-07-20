import { supabaseAdmin } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.query;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const supabase = supabaseAdmin();

  const { data: lessonRows, error: lessonErr } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .ilike('email', email);

  const { data: attemptRows, error: attemptErr } = await supabase
    .from('question_attempts')
    .select('question_id, is_correct')
    .ilike('email', email);

  if (lessonErr || attemptErr) {
    console.error(lessonErr || attemptErr);
    return res.status(500).json({ error: 'Could not load progress' });
  }

  return res.status(200).json({
    completedLessonIds: (lessonRows || []).map((r) => r.lesson_id),
    attempts: attemptRows || [],
  });
}
