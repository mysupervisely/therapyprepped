import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { marked } from 'marked';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import AccessGate from '../../components/AccessGate';
import QuizCard from '../../components/QuizCard';
import { DIAGRAMS_BY_MODULE } from '../../components/DomainDiagrams';
import modulesData from '../../data/modules';
import { supabasePublic } from '../../lib/supabase';

// Local fallback question banks, used if the `questions` table hasn't been
// seeded yet in Supabase (see scripts/seed-lessons.js).
const localQuestionBanks = {
  'assessment-diagnosis': require('../../data/questions/assessment-diagnosis.json'),
  'counseling-psychotherapy': require('../../data/questions/counseling-psychotherapy.json'),
  'admin-consultation-supervision': require('../../data/questions/admin-consultation-supervision.json'),
  'student-client-consultant-needs': require('../../data/questions/student-client-consultant-needs.json'),
};

const ACCESS_STORAGE_KEY = 'tp_access_email';

export async function getStaticPaths() {
  return {
    paths: modulesData.map((m) => ({ params: { slug: m.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const mod = modulesData.find((m) => m.id === params.slug);
  if (!mod) return { notFound: true };

  let questions = localQuestionBanks[params.slug] || [];

  // Prefer live Supabase questions if the table has been seeded — this is
  // what lets the question bank grow past the local seed set over time
  // without a redeploy.
  try {
    const { data, error } = await supabasePublic
      .from('questions')
      .select('id, stem, choices, correct_choice_id, rationale')
      .eq('module_id', params.slug);
    if (!error && data && data.length > 0) {
      questions = data;
    }
  } catch (e) {
    // Supabase not configured yet in this environment — local fallback is fine.
  }

  return {
    props: { mod, questions },
    revalidate: 3600,
  };
}

export default function ModulePage({ mod, questions }) {
  const [activeLessonId, setActiveLessonId] = useState(mod.lessons[0]?.id);
  const [email, setEmail] = useState(null);
  const [completedIds, setCompletedIds] = useState([]);
  const [view, setView] = useState('lesson'); // 'lesson' | 'quiz' | 'visuals'

  useEffect(() => {
    const stored = window.localStorage.getItem(ACCESS_STORAGE_KEY);
    setEmail(stored);
    if (stored) {
      fetch(`/api/get-progress?email=${encodeURIComponent(stored)}`)
        .then((r) => r.json())
        .then((data) => setCompletedIds(data.completedLessonIds || []))
        .catch(() => {});
    }
  }, []);

  const activeLesson = mod.lessons.find((l) => l.id === activeLessonId) || mod.lessons[0];

  async function markComplete(lessonId) {
    if (!email) return;
    setCompletedIds((ids) => (ids.includes(lessonId) ? ids : [...ids, lessonId]));
    try {
      await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lesson_id: lessonId }),
      });
    } catch (e) {
      // non-blocking
    }
  }

  return (
    <div>
      <Head><title>{mod.title} — TherapyPrepped</title></Head>
      <Nav />
      <AccessGate>
      <div className="inner-wide">
        <div className="eyebrow">NCMHCE domain</div>
        <h1 className="hero" style={{ fontSize: 27 }}>{mod.title}</h1>
        <p className="lead" style={{ marginTop: -8 }}>{mod.subtitle}</p>

        <div className="lesson-nav">
          <button className={view === 'lesson' ? 'active' : ''} onClick={() => setView('lesson')}>
            Study
          </button>
          <button className={view === 'quiz' ? 'active' : ''} onClick={() => setView('quiz')}>
            Practice questions ({questions.length})
          </button>
          <button className={view === 'visuals' ? 'active' : ''} onClick={() => setView('visuals')}>
            Visuals
          </button>
        </div>

        {view === 'lesson' && (
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ minWidth: 180 }}>
              {mod.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 4,
                    background: activeLessonId === lesson.id ? 'var(--teal-tint)' : 'transparent',
                    color: activeLessonId === lesson.id ? 'var(--teal-dark)' : 'var(--ink)',
                  }}
                >
                  {completedIds.includes(lesson.id) ? '✓ ' : ''}{lesson.title}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div
                className="lesson-body"
                dangerouslySetInnerHTML={{ __html: marked.parse(activeLesson.content_md) }}
              />
              {email ? (
                <button className="btn" onClick={() => markComplete(activeLesson.id)}>
                  {completedIds.includes(activeLesson.id) ? 'Marked complete ✓' : 'Mark lesson complete'}
                </button>
              ) : (
                <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.6)' }}>
                  <Link href="/dashboard" className="link">Verify your access</Link> to track progress across lessons.
                </p>
              )}
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <QuizCard questions={questions} email={email} />
        )}

        {view === 'visuals' && (
          <div>
            <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.6)', marginBottom: 16 }}>
              Visual references for this domain's most diagram-friendly concepts.
            </p>
            {(DIAGRAMS_BY_MODULE[mod.id] || []).map((Diagram, i) => (
              <Diagram key={i} />
            ))}
            {(DIAGRAMS_BY_MODULE[mod.id] || []).length === 0 && (
              <p>No diagrams for this domain yet.</p>
            )}
          </div>
        )}
      </div>
      </AccessGate>
      <Footer />
    </div>
  );
}
