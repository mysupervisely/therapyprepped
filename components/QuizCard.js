import { useState } from 'react';

// questions: [{ id, stem, choices: [{id, text}], correct_choice_id, rationale }]
// email: optional — if provided, attempts are logged via /api/log-attempt
export default function QuizCard({ questions, email }) {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenId, setChosenId] = useState(null);
  const [answered, setAnswered] = useState(false);

  if (!questions || questions.length === 0) {
    return <div className="card">No questions available for this module yet.</div>;
  }

  const q = questions[qIndex];
  const isLast = qIndex === questions.length - 1;

  async function handleAnswer(choiceId) {
    if (answered) return;
    setAnswered(true);
    setChosenId(choiceId);
    const correct = choiceId === q.correct_choice_id;
    if (correct) setScore((s) => s + 1);

    if (email) {
      try {
        await fetch('/api/log-attempt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            question_id: q.id,
            chosen_choice_id: choiceId,
            is_correct: correct,
          }),
        });
      } catch (e) {
        // non-blocking — progress logging failure shouldn't break the quiz
        console.error('Failed to log attempt', e);
      }
    }
  }

  function nextQuestion() {
    setQIndex((i) => Math.min(i + 1, questions.length - 1));
    setAnswered(false);
    setChosenId(null);
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className="mono" style={{ fontSize: 11, color: 'rgba(23,48,45,0.6)' }}>
          CASE {qIndex + 1} OF {questions.length}
        </span>
        <span className="mono" style={{ fontSize: 11, color: 'rgba(23,48,45,0.6)' }}>
          SCORE {score}
        </span>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 14 }}>{q.stem}</p>

      <div>
        {q.choices.map((choice) => {
          let cls = 'quiz-choice';
          if (answered) {
            if (choice.id === q.correct_choice_id) cls += ' correct';
            else if (choice.id === chosenId) cls += ' wrong';
          }
          return (
            <button
              key={choice.id}
              className={cls}
              disabled={answered}
              onClick={() => handleAnswer(choice.id)}
            >
              {choice.text}
            </button>
          );
        })}
      </div>

      {answered && (
        <div>
          <div className={`feedback ${chosenId === q.correct_choice_id ? 'correct-text' : 'wrong-text'}`}>
            {chosenId === q.correct_choice_id ? 'Correct.' : 'Not quite.'}
          </div>
          <div className="rationale">{q.rationale}</div>
          {isLast ? (
            <div style={{ marginTop: 12, fontWeight: 600 }}>
              That's the set — {score}/{questions.length} correct.
            </div>
          ) : (
            <button className="next-btn" onClick={nextQuestion}>Next case</button>
          )}
        </div>
      )}
    </div>
  );
}
