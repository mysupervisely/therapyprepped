import { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PLAN_OPTIONS = [
  { id: '3-day', title: '3-Day Pass', price: '$19.00', note: 'ends automatically after 3 days' },
  { id: '7-day', title: '7-Day Pass', price: '$29.00', note: 'ends automatically after 7 days' },
  { id: '14-day', title: '14-Day Pass', price: '$39.00', note: 'ends automatically after 14 days' },
  { id: '30-day', title: '30-Day Pass', price: '$59.00', note: 'ends automatically after 30 days' },
];

export default function Pricing() {
  const [consent, setConsent] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [error, setError] = useState('');

  const [waitlistTrack, setWaitlistTrack] = useState(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState('');

  async function handleChoosePlan(planId) {
    setError('');
    if (!consent) {
      setError('Please check the consent box first.');
      return;
    }
    setLoadingPlan(planId);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, consent: true }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError((data.error || 'Something went wrong starting checkout.') + (data.debug ? ' — ' + data.debug : ''));
        setLoadingPlan(null);
      }
    } catch (e) {
      setError('Something went wrong starting checkout.');
      setLoadingPlan(null);
    }
  }

  async function handleWaitlistJoin(e) {
    e.preventDefault();
    if (!waitlistEmail.includes('@')) return;
    setWaitlistStatus('loading');
    try {
      const res = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail, track_id: waitlistTrack }),
      });
      if (res.ok) setWaitlistStatus('done');
      else setWaitlistStatus('error');
    } catch (e) {
      setWaitlistStatus('error');
    }
  }

  return (
    <div>
      <Head><title>Pricing — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Access plans</div>
        <h1 className="hero" style={{ fontSize: 27 }}>Pick a window that matches your exam date.</h1>

        {PLAN_OPTIONS.map((plan) => (
          <div className="card" key={plan.id}>
            <p className="plan-title">{plan.title}</p>
            <p className="plan-price">{plan.price} · {plan.note}</p>
            <button
              className="plan-btn"
              disabled={loadingPlan !== null}
              onClick={() => handleChoosePlan(plan.id)}
            >
              {loadingPlan === plan.id ? 'Redirecting to Stripe…' : `Choose ${plan.title.replace(' Pass', '')}`}
            </button>
          </div>
        ))}

        <div className="card" style={{ borderColor: 'var(--teal)', background: 'var(--teal-tint)' }}>
          <p className="plan-title">Monthly Subscription</p>
          <p className="plan-price">$59.00/month · billed automatically, cancel anytime</p>
          <p style={{ fontSize: 12, color: 'rgba(23,48,45,0.65)', margin: '0 0 12px' }}>
            Best for longer study timelines — studying over several months, or even a year out.
            Manage or cancel anytime from your dashboard.
          </p>
          <button
            className="plan-btn"
            disabled={loadingPlan !== null}
            onClick={() => handleChoosePlan('monthly')}
          >
            {loadingPlan === 'monthly' ? 'Redirecting to Stripe…' : 'Start Monthly Subscription'}
          </button>
        </div>

        <p style={{ fontSize: 12, color: 'rgba(23,48,45,0.55)', marginTop: -6 }}>
          You'll enter your email on the next screen at checkout — that's the email your access
          pass will be tied to.
        </p>

        <div className="consent">
          <input
            type="checkbox"
            id="consentBox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor="consentBox">
            I've read and agree to the <a className="link" href="/terms">Terms of Use</a> and{' '}
            <a className="link" href="/disclaimer">Disclaimer</a>.
          </label>
        </div>

        {error && <div style={{ fontSize: 13, color: 'var(--miss)' }}>{error}</div>}

        <div className="banner">
          Finishing up and job hunting? <a className="link" href="https://mysupervisely.com" target="_blank" rel="noreferrer">MySupervisely.com</a> connects
          interns with supervisors and job opportunities across LMHC and other licensure tracks.
        </div>

        <div style={{ marginTop: 40 }}>
          <div className="eyebrow">Coming soon</div>
          <h2 style={{ fontSize: 20 }}>LMFT & LMSW tracks</h2>
          <p style={{ fontSize: 14, color: 'rgba(23,48,45,0.7)' }}>
            We're building out full curricula for these licensure paths. Join the waitlist and
            we'll email you the moment they're live.
          </p>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <button
              className="btn-secondary"
              style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', background: waitlistTrack === 'lmft' ? 'var(--teal-tint)' : 'transparent', cursor: 'pointer' }}
              onClick={() => { setWaitlistTrack('lmft'); setWaitlistStatus(''); }}
            >
              LMFT
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '10px 18px', borderRadius: 100, border: '1px solid var(--teal)', background: waitlistTrack === 'lmsw' ? 'var(--teal-tint)' : 'transparent', cursor: 'pointer' }}
              onClick={() => { setWaitlistTrack('lmsw'); setWaitlistStatus(''); }}
            >
              LMSW
            </button>
          </div>
          {waitlistTrack && waitlistStatus !== 'done' && (
            <form onSubmit={handleWaitlistJoin} style={{ maxWidth: 320 }}>
              <input
                type="email"
                placeholder="you@example.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
              />
              <button className="btn" type="submit" disabled={waitlistStatus === 'loading'}>
                {waitlistStatus === 'loading' ? 'Joining…' : `Join ${waitlistTrack.toUpperCase()} waitlist`}
              </button>
            </form>
          )}
          {waitlistStatus === 'done' && (
            <p style={{ color: 'var(--correct)', fontWeight: 600, fontSize: 14 }}>
              You're on the list — we'll email you when it's ready.
            </p>
          )}
          {waitlistStatus === 'error' && (
            <p style={{ color: 'var(--miss)', fontSize: 14 }}>Something went wrong — please try again.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
