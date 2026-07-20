// Seeds the `lessons` and `questions` tables in Supabase from local data files.
// Run with: node scripts/seed-lessons.js
// Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment
// (e.g. `source .env.local && node scripts/seed-lessons.js`, or use a tool like `dotenv-cli`).

const { createClient } = require('@supabase/supabase-js');
const modules = require('../data/modules.js').default || require('../data/modules.js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

async function seedLessons() {
  let count = 0;
  for (const mod of modules) {
    for (let i = 0; i < mod.lessons.length; i++) {
      const lesson = mod.lessons[i];
      const { error } = await supabase.from('lessons').upsert({
        id: lesson.id,
        module_id: mod.id,
        title: lesson.title,
        sort_order: i + 1,
        content_md: lesson.content_md,
        is_published: true,
      });
      if (error) {
        console.error(`Failed to seed lesson ${lesson.id}:`, error.message);
      } else {
        count++;
      }
    }
  }
  console.log(`Seeded ${count} lessons.`);
}

async function seedQuestions() {
  const questionsDir = path.join(__dirname, '../data/questions');
  const files = fs.readdirSync(questionsDir).filter((f) => f.endsWith('.json'));
  let count = 0;
  for (const file of files) {
    const questions = JSON.parse(fs.readFileSync(path.join(questionsDir, file), 'utf-8'));
    for (const q of questions) {
      const { error } = await supabase.from('questions').upsert({
        id: q.id.length === 36 ? q.id : undefined, // let DB generate a uuid if the seed id isn't already one
        module_id: q.module_id,
        batch: q.batch,
        stem: q.stem,
        choices: q.choices,
        correct_choice_id: q.correct_choice_id,
        rationale: q.rationale,
      });
      if (error) {
        console.error(`Failed to seed question from ${file}:`, error.message);
      } else {
        count++;
      }
    }
  }
  console.log(`Seeded ${count} questions.`);
}

(async () => {
  await seedLessons();
  await seedQuestions();
  console.log('Done.');
})();
