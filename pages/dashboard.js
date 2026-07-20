import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import modulesData from '../data/modules';

const ACCESS_STORAGE_KEY = 'tp_access_email';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [access, setAccess] = useState(null); // null = unknown, false = no access, object = valid
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(ACCESS_STORAGE_KEY) : null;
    if (stored) {
      setEmail(stored);
      checkAccess(stored);
    }
  }, []);

  async function checkAccess(emailToCheck) {
    setChecking(true);
    setError('');
    try {
      const res = await fetch('/api/check-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToCheck }),
      });
      const data = await res.json();
      if (data.valid) {
        setAccess(data);
        window.localStorage.setItem(ACCESS_STORAGE_KEY, emailToCheck);
        loadProgress(emailToCheck);
      } else {
        setAccess(false);
      }
    } catch (e) {
      setError('Could not verify access right now. Please try again.');
    } finally {
      setChecking(false);
    }
  }

  async function loadProgress(emailToCheck) {
    try {
      const res = await fetch(`/api/get-progress?email=${encodeURIComponent(emailToCheck)}`);
      const data = await res.json();
      setProgress(data);
    } catch (e) {
      // non-blocking
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailInput.includes('@')) return;
    setEmail(emailInput);
    checkAccess(emailInput);
  }

  function lessonsCompletedForModule(moduleId) {
    if (!progress) return 0;
    const mod = modulesData.find((m) => m.id === moduleId);
    if (!mod) return 0;
    const lessonIds = mod.lessons.map((l) => l.id);
    return progress.completedLessonIds.filter((id) => lessonIds.includes(id)).length;
  }

  return (
    <div>
      <Head><title>Case Dashboard — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Case dashboard — LMHC / NCMHCE</div>
        <h1 className="hero" style={{ fontSize: 27 }}>Study & practice</h1>

        {access === null && !checking && (
          <div className="card">
            <p style={{ marginTop: 0 }}>Enter the email you used at checkout to access your study plan.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <button className="btn" type="submit">Check access</button>
            </form>
            {error && <p style={{ color: 'var(--miss)', fontSize: 13 }}>{error}</p>}
          </div>
        )}

        {checking && <p>Checking access…</p>}

        {access === false && (
          <div className="card">
            <p style={{ marginTop: 0 }}>
              We couldn't find an active access pass for <strong>{email}</strong>.
            </p>
            <Link href="/pricing" className="btn">See access plans</Link>
          </div>
        )}

        {access && (
          <>
            <div className="banner">
              Access active until {new Date(access.expires_at).toLocaleDateString()} ({access.plan})
            </div>
            <div className="module-grid">
              {modulesData.map((mod) => {
                const completed = lessonsCompletedForModule(mod.id);
                const total = mod.lessons.length;
                const pct = total ? Math.round((completed / total) * 100) : 0;
                return (
                  <Link href={`/modules/${mod.id}`} className="module-card" key={mod.id}>
                    <div className="tag">NCMHCE domain</div>
                    <h3>{mod.title}</h3>
                    <p>{mod.subtitle}</p>
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <p style={{ marginTop: 6, fontSize: 12 }}>{completed}/{total} lessons complete</p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
