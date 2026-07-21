import { useEffect, useState } from 'react';

const EXAMPLES = [
  {
    stem: 'A client reports increasing isolation and states they "don\'t see the point anymore." What\'s the clinician\'s first priority?',
    choices: [
      { text: 'Conduct a risk assessment', correct: true },
      { text: 'Schedule a follow-up in two weeks', correct: false },
      { text: 'Refer out immediately', correct: false },
    ],
  },
  {
    stem: 'A client with a family history of Bipolar Disorder is showing new depressive symptoms. Why is it risky to start an SSRI without screening for mania first?',
    choices: [
      { text: 'It might trigger a manic or hypomanic episode', correct: true },
      { text: 'It is generally ineffective for depression', correct: false },
      { text: 'It always causes significant weight gain', correct: false },
    ],
  },
  {
    stem: 'A counselor receives a subpoena demanding a client\'s full record. The client hasn\'t been told yet. What\'s the appropriate first action?',
    choices: [
      { text: 'Notify the client and consult legal counsel before releasing anything', correct: true },
      { text: 'Comply immediately to avoid a contempt charge', correct: false },
      { text: 'Ignore it until a court order is served', correct: false },
    ],
  },
];

const ADVANCE_MS = 4200;

export default function DemoQuizCarousel() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % EXAMPLES.length);
        setFading(false);
      }, 250);
    }, ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const example = EXAMPLES[index];

  return (
    <div className="card" style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.25s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: 0 }}>
          CASE {index + 1} OF {EXAMPLES.length} · SCORE 0
        </p>
        <div style={{ display: 'flex', gap: 4 }}>
          {EXAMPLES.map((_, i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: i === index ? 'var(--teal)' : 'rgba(23,48,45,0.2)',
              }}
            />
          ))}
        </div>
      </div>
      <p style={{ fontSize: 14, margin: '0 0 10px' }}>{example.stem}</p>
      {example.choices.map((choice, i) => (
        <div key={i} className={`sample-choice${choice.correct ? ' correct' : ''}`}>
          {choice.text}
        </div>
      ))}
    </div>
  );
}
