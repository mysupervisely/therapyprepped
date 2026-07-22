import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import modulesData from '../data/modules';
import allFlashcards from '../data/flashcards.json';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const moduleTitleById = Object.fromEntries(modulesData.map((m) => [m.id, m.title]));
const FILTERS = [{ id: 'all', title: 'All Domains' }, ...modulesData.map((m) => ({ id: m.id, title: m.title }))];

export default function Flashcards() {
  const [filter, setFilter] = useState('all');
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState({}); // { [cardId]: true }

  useEffect(() => {
    const base = filter === 'all' ? allFlashcards : allFlashcards.filter((c) => c.module_id === filter);
    setDeck(shuffle(base));
    setIndex(0);
    setFlipped(false);
  }, [filter]);

  function reshuffle() {
    setDeck((d) => shuffle(d));
    setIndex(0);
    setFlipped(false);
  }

  function next() {
    setFlipped(false);
    setIndex((i) => (i + 1) % deck.length);
  }

  function prev() {
    setFlipped(false);
    setIndex((i) => (i - 1 + deck.length) % deck.length);
  }

  function markKnown(isKnown) {
    const card = deck[index];
    if (card) setKnown((k) => ({ ...k, [card.id]: isKnown }));
    next();
  }

  const card = deck[index];
  const knownCount = useMemo(() => Object.values(known).filter(Boolean).length, [known]);
  const reviewedCount = Object.keys(known).length;

  return (
    <div>
      <Head><title>Flashcards — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Quick-recall study mode</div>
        <h1 className="hero" style={{ fontSize: 27 }}>Flashcards</h1>
        <p className="lead" style={{ marginTop: -8 }}>
          {allFlashcards.length} key terms and definitions across all four domains — click a
          card to flip it.
        </p>

        <div className="lesson-nav">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={filter === f.id ? 'active' : ''}
              onClick={() => setFilter(f.id)}
            >
              {f.title}
            </button>
          ))}
        </div>

        {deck.length === 0 ? (
          <p>No flashcards in this domain yet.</p>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span className="mono" style={{ fontSize: 12, color: 'rgba(23,48,45,0.6)' }}>
                CARD {index + 1} OF {deck.length}
              </span>
              <span className="mono" style={{ fontSize: 12, color: 'rgba(23,48,45,0.6)' }}>
                {knownCount}/{reviewedCount} marked known
              </span>
            </div>

            <div
              onClick={() => setFlipped((f) => !f)}
              style={{
                cursor: 'pointer',
                border: '1px solid rgba(23,48,45,0.15)',
                background: flipped ? 'var(--teal-tint)' : 'var(--folder)',
                borderRadius: 14,
                padding: '48px 28px',
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginBottom: 14,
              }}
            >
              <div className="tag" style={{ marginBottom: 10 }}>
                {moduleTitleById[card.module_id]} · {flipped ? 'Definition' : 'Term'}
              </div>
              {!flipped ? (
                <p className="display" style={{ fontSize: 22, margin: 0, color: 'var(--teal-dark)' }}>
                  {card.term}
                </p>
              ) : (
                <p style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>{card.definition}</p>
              )}
              <p style={{ fontSize: 11, color: 'rgba(23,48,45,0.45)', marginTop: 16, marginBottom: 0 }}>
                Click to flip
              </p>
            </div>

            {flipped ? (
              <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <button
                  className="next-btn"
                  style={{ background: 'var(--miss)' }}
                  onClick={() => markKnown(false)}
                >
                  Still learning
                </button>
                <button className="next-btn" onClick={() => markKnown(true)}>
                  I know this
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                <button
                  className="btn-secondary"
                  style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', cursor: 'pointer' }}
                  onClick={prev}
                >
                  Back
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', cursor: 'pointer' }}
                  onClick={next}
                >
                  Skip
                </button>
              </div>
            )}

            <button
              className="btn-secondary"
              style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid var(--teal)', cursor: 'pointer', fontSize: 12 }}
              onClick={reshuffle}
            >
              Shuffle deck
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
