import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SEEN_KEY = 'tp_seen_track_splash';

const TRACKS = [
  { id: 'ncmhce', label: 'NCMHCE', full: 'LMHC / Clinical Mental Health Counseling', status: 'live' },
  { id: 'nce', label: 'NCE', full: 'National Counselor Examination', status: 'soon' },
  { id: 'amftrb', label: 'AMFTRB', full: 'MFT National Examination', status: 'soon' },
  { id: 'aswb', label: 'ASWB', full: 'Clinical Social Work Examination', status: 'soon' },
];

const CYCLE_WORDS = ['NCMHCE', 'NCE', 'AMFTRB MFT', 'ASWB'];

export default function TrackSplash() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState('intro'); // 'intro' | 'select'
  const [cycleIndex, setCycleIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const [comingSoonId, setComingSoonId] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = window.sessionStorage.getItem(SEEN_KEY);
    if (seen) return;
    setVisible(true);

    const cycleTimer = setInterval(() => {
      setCycleIndex((i) => (i + 1) % CYCLE_WORDS.length);
    }, 550);

    const revealTimer = setTimeout(() => {
      clearInterval(cycleTimer);
      setPhase('select');
    }, 2400);

    return () => {
      clearInterval(cycleTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  function dismiss() {
    window.sessionStorage.setItem(SEEN_KEY, '1');
    setClosing(true);
    setTimeout(() => setVisible(false), 350);
  }

  function handleTrackClick(track) {
    if (track.status === 'live') {
      dismiss();
      return;
    }
    setComingSoonId(track.id);
  }

  if (!visible) return null;

  return (
    <div className={`track-splash${closing ? ' track-splash-closing' : ''}`}>
      {phase === 'intro' && (
        <div className="track-splash-intro">
          <div className="eyebrow" style={{ color: '#fff', opacity: 0.7 }}>Getting ready for</div>
          <div className="track-splash-cycle">{CYCLE_WORDS[cycleIndex]}</div>
        </div>
      )}

      {phase === 'select' && (
        <div className="track-splash-select">
          <div className="eyebrow" style={{ color: '#fff', opacity: 0.7 }}>Choose your exam</div>
          <h1 className="track-splash-title">Which licensure track are you studying for?</h1>
          <div className="track-splash-grid">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                className={`track-splash-card${track.status !== 'live' ? ' track-splash-card-soon' : ''}`}
                onClick={() => handleTrackClick(track)}
              >
                <span className="track-splash-card-label">{track.label}</span>
                <span className="track-splash-card-full">{track.full}</span>
                {track.status !== 'live' && comingSoonId === track.id && (
                  <span className="track-splash-soon-badge">Coming soon — check back later</span>
                )}
                {track.status !== 'live' && comingSoonId !== track.id && (
                  <span className="track-splash-soon-badge track-splash-soon-badge-dim">Coming soon</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
