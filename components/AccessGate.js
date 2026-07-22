import { useEffect, useState } from 'react';
import Link from 'next/link';

const ACCESS_STORAGE_KEY = 'tp_access_email';

// Wraps any page content and requires a verified, active access pass before
// rendering it. Reuses the same email-check flow already used on /dashboard.
export default function AccessGate({ children }) {
  const [status, setStatus] = useState('idle'); // idle | checking | granted | denied
  const [email, setEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(ACCESS_STORAGE_KEY) : null;
    if (stored) {
      setEmail(stored);
      checkAccess(stored);
    }
  }, []);

  async function checkAccess(emailToCheck) {
    setStatus('checking');
    setError('');
    try {
      const res = await fetch('/api/check-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToCheck }),
      });
      const data = await res.json();
      if (data.valid) {
        window.localStorage.setItem(ACCESS_STORAGE_KEY, emailToCheck);
        setStatus('granted');
      } else if (data.debug) {
        setError('Could not verify access right now — ' + data.debug);
        setStatus('denied');
      } else {
        setStatus('denied');
      }
    } catch (e) {
      setError('Could not verify access right now. Please try again.');
      setStatus('denied');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailInput.includes('@')) return;
    setEmail(emailInput);
    checkAccess(emailInput);
  }

  if (status === 'granted') return <>{children}</>;

  return (
    <div className="inner">
      <div className="card">
        {status !== 'checking' && (
          <>
            <p style={{ marginTop: 0 }}>Enter the email you used at checkout to access this content.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <button className="btn" type="submit">Check access</button>
            </form>
            {status === 'denied' && (
              <>
                <p style={{ color: 'var(--miss)', fontSize: 13 }}>
                  {error || `We couldn't find an active access pass for ${email}.`}
                </p>
                <Link
                  href="/pricing"
                  style={{
                    display: 'inline-block',
                    padding: '10px 18px',
                    borderRadius: 100,
                    border: '1px solid var(--teal)',
                    textDecoration: 'none',
                    color: 'var(--teal)',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  See access plans
                </Link>
              </>
            )}
          </>
        )}
        {status === 'checking' && <p>Checking access…</p>}
      </div>
    </div>
  );
}
