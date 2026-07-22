import { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import modulesData from '../data/modules';

const ACCESS_STORAGE_KEY = 'tp_access_email';
const EXAM_LENGTH = 110;

// Pull every question from every module's local question banks (seed + all batches).
const questionFiles = {
  'assessment-diagnosis': [
    require('../data/questions/assessment-diagnosis.json'),
    require('../data/questions/assessment-diagnosis-batch2.json'),
    require('../data/questions/assessment-diagnosis-batch3.json'),
  ],
  'counseling-psychotherapy': [
    require('../data/questions/counseling-psychotherapy.json'),
    require('../data/questions/counseling-psychotherapy-batch2.json'),
    require('../data/questions/counseling-psychotherapy-batch3.json'),
  ],
  'admin-consultation-supervision': [
    require('../data/questions/admin-consultation-supervision.json'),
    require('../data/questions/admin-consultation-supervision-batch2.json'),
    require('../data/questions/admin-consultation-supervision-batch3.json'),
  ],
  'student-client-consultant-needs': [
    require('../data/questions/student-client-consultant-needs.json'),
    require('../data/questions/student-client-consultant-needs-batch2.json'),
    require('../data/questions/student-client-consultant-needs-batch3.json'),
  ],
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Case-study questions (batch: "case-study", ids like "cs-maria-q1",
// "cs-david1-q7") are written as a series where later questions assume the
// clinical picture established earlier — AND a single case is deliberately
// tested across multiple domains, just like the real NCMHCE's simulations.
// So case-groups are built globally across all domains, not per-domain, to
// guarantee a case's questions always stay together and in order. Standalone
// questions (every other batch) are never grouped, even if their ids happen
// to share a prefix.
function caseGroupKey(q) {
  if (q.batch !== 'case-study') return q.id;
  const m = q.id.match(/^(.*)-q\d+$/);
  return m ? m[1] : q.id;
}
function caseQuestionNumber(q) {
  const m = q.id.match(/-q(\d+)$/);
  return m ? parseInt(m[1], 10) : 0;
}

function buildExam() {
  let allQuestions = [];
  for (const files of Object.values(questionFiles)) {
    allQuestions = allQuestions.concat(files.flat());
  }

  const groupsByKey = {};
  allQuestions.forEach((q) => {
    const key = caseGroupKey(q);
    if (!groupsByKey[key]) groupsByKey[key] = [];
    groupsByKey[key].push(q);
  });
  Object.values(groupsByKey).forEach((g) => g.sort((a, b) => caseQuestionNumber(a) - caseQuestionNumber(b)));

  // Shuffle which groups appear and in what order, but never split a
  // group's questions apart from each other.
  const shuffledGroups = shuffle(Object.values(groupsByKey));
  const examQuestions = [];
  for (const g of shuffledGroups) {
    if (examQuestions.length >= EXAM_LENGTH) break;
    examQuestions.push(...g);
  }
  return examQuestions.slice(0, EXAM_LENGTH);
}

const moduleTitleById = Object.fromEntries(modulesData.map((m) => [m.id, m.title]));

export default function PracticeExam() {
  const [email, setEmail] = useState(null);
  const [examQuestions, setExamQuestions] = useState(null);
  const [answers, setAnswers] = useState({}); // { [questionIndex]: choiceId }
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [examNumber, setExamNumber] = useState(null);

  useEffect(() => {
    setEmail(window.localStorage.getItem(ACCESS_STORAGE_KEY));
  }, []);

  function startExam(num) {
    setExamNumber(num);
    setExamQuestions(buildExam());
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
    setStarted(true);
  }

  function selectAnswer(choiceId) {
    setAnswers((prev) => ({ ...prev, [current]: choiceId }));
  }

  async function submitExam() {
    setSubmitted(true);
    if (!email || !examQuestions) return;
    // Log each attempt in the background for progress tracking; non-blocking.
    examQuestions.forEach((q, i) => {
      const chosen = answers[i];
      if (!chosen) return;
      fetch('/api/log-attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          question_id: q.id,
          chosen_choice_id: chosen,
          is_correct: chosen === q.correct_choice_id,
        }),
      }).catch(() => {});
    });
  }

  const results = useMemo(() => {
    if (!submitted || !examQuestions) return null;
    let correct = 0;
    const byDomain = {};
    examQuestions.forEach((q, i) => {
      const isCorrect = answers[i] === q.correct_choice_id;
      if (isCorrect) correct++;
      if (!byDomain[q.module_id]) byDomain[q.module_id] = { correct: 0, total: 0 };
      byDomain[q.module_id].total++;
      if (isCorrect) byDomain[q.module_id].correct++;
    });
    return { correct, total: examQuestions.length, byDomain };
  }, [submitted, examQuestions, answers]);

  return (
    <div>
      <Head><title>Full Practice Exam — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner-wide">
        <div className="eyebrow">Full-length practice exams</div>
        <h1 className="hero" style={{ fontSize: 27 }}>NCMHCE Practice Exams</h1>
        <p className="lead" style={{ marginTop: -8 }}>
          {EXAM_LENGTH} questions per exam, drawn fresh across all four domains every time you
          start. Your score is revealed only at the end, just like test day.
        </p>

        {!started && (
          <div>
            {!email && (
              <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.6)' }}>
                <Link href="/dashboard" className="link">Verify your access</Link> first if you'd
                like your results tracked — you can still take an exam without it.
              </p>
            )}
            {[1, 2, 3].map((num) => (
              <div className="card" key={num}>
                <p className="plan-title" style={{ marginBottom: 4 }}>Practice Exam {num}</p>
                <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.65)', marginBottom: 14 }}>
                  {EXAM_LENGTH} randomized questions across all domains — a fresh set every time
                  you take it.
                </p>
                <button className="btn" onClick={() => startExam(num)}>Start Practice Exam {num}</button>
              </div>
            ))}
          </div>
        )}

        {started && !submitted && examQuestions && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span className="mono" style={{ fontSize: 12, color: 'rgba(23,48,45,0.6)' }}>
                PRACTICE EXAM {examNumber} · QUESTION {current + 1} OF {examQuestions.length}
              </span>
              <span className="mono" style={{ fontSize: 12, color: 'rgba(23,48,45,0.6)' }}>
                {Object.keys(answers).length} answered
              </span>
            </div>
            <div className="progress-bar-track" style={{ marginBottom: 20 }}>
              <div
                className="progress-bar-fill"
                style={{ width: `${((current + 1) / examQuestions.length) * 100}%` }}
              />
            </div>

            <div className="card">
              {current > 0 && caseGroupKey(examQuestions[current]) === caseGroupKey(examQuestions[current - 1]) && (
                <p style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 600, marginTop: 0, marginBottom: 8 }}>
                  ↳ Continuing the same case as the previous question
                </p>
              )}
              <p style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 14 }}>
                {examQuestions[current].stem}
              </p>
              {examQuestions[current].choices.map((choice) => (
                <button
                  key={choice.id}
                  className={`quiz-choice${answers[current] === choice.id ? ' selected-answer' : ''}`}
                  style={
                    answers[current] === choice.id
                      ? { borderColor: 'var(--teal)', background: 'var(--teal-tint)' }
                      : undefined
                  }
                  onClick={() => selectAnswer(choice.id)}
                >
                  {choice.text}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                className="btn-secondary"
                style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', cursor: 'pointer' }}
                disabled={current === 0}
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              >
                Back
              </button>
              {current < examQuestions.length - 1 ? (
                <button
                  className="btn"
                  onClick={() => setCurrent((c) => Math.min(examQuestions.length - 1, c + 1))}
                >
                  Next
                </button>
              ) : (
                <button className="btn" onClick={submitExam}>
                  Submit exam ({Object.keys(answers).length}/{examQuestions.length} answered)
                </button>
              )}
            </div>
          </div>
        )}

        {submitted && results && (
          <div>
            <div className="card">
              <p className="plan-title" style={{ marginBottom: 4 }}>
                Practice Exam {examNumber}: {results.correct} / {results.total} correct ({Math.round((results.correct / results.total) * 100)}%)
              </p>
              <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.65)', marginBottom: 14 }}>
                Breakdown by domain:
              </p>
              {Object.entries(results.byDomain).map(([moduleId, stats]) => (
                <p key={moduleId} style={{ fontSize: 13, margin: '4px 0' }}>
                  {moduleTitleById[moduleId] || moduleId}: {stats.correct}/{stats.total} (
                  {Math.round((stats.correct / stats.total) * 100)}%)
                </p>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <button className="btn" onClick={() => startExam(examNumber)}>Retake Practice Exam {examNumber}</button>
                <button
                  className="btn-secondary"
                  style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', cursor: 'pointer' }}
                  onClick={() => setStarted(false)}
                >
                  Back to exam list
                </button>
              </div>
            </div>

            <h2 style={{ fontSize: 18, marginTop: 30 }}>Review</h2>
            {examQuestions.map((q, i) => {
              const chosen = answers[i];
              const wasCorrect = chosen === q.correct_choice_id;
              return (
                <div className="card" key={q.id}>
                  <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.55)', marginTop: 0 }}>
                    Question {i + 1} · {moduleTitleById[q.module_id] || q.module_id}
                    {i > 0 && caseGroupKey(q) === caseGroupKey(examQuestions[i - 1]) ? ' · continues previous case' : ''}
                  </p>
                  <p style={{ fontSize: 14, marginBottom: 10 }}>{q.stem}</p>
                  {q.choices.map((choice) => {
                    let cls = 'quiz-choice';
                    if (choice.id === q.correct_choice_id) cls += ' correct';
                    else if (choice.id === chosen) cls += ' wrong';
                    return (
                      <div key={choice.id} className={cls} style={{ cursor: 'default' }}>
                        {choice.text}
                        {choice.id === chosen && !wasCorrect ? ' (your answer)' : ''}
                      </div>
                    );
                  })}
                  {!chosen && (
                    <p style={{ fontSize: 13, color: 'var(--miss)', marginTop: 6 }}>
                      You didn't answer this one.
                    </p>
                  )}
                  <p className="rationale">{q.rationale}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
