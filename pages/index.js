import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TherapyPrepped — NCMHCE Exam Prep</title>
        <meta
          name="description"
          content="Case-based NCMHCE exam prep. Study the four exam domains and practice with clinical-judgment questions."
        />
      </Head>
      <Nav />
      <div className="hero-photo" />
      <div className="inner">
        <div className="eyebrow">LMHC / NCMHCE prep</div>
        <h1 className="hero">Study like the exam actually works.</h1>
        <p className="lead">
          Four exam domains, taught the way the NCMHCE tests them — through clinical case
          judgment, not flashcards. Study the content, then practice with scenario-based
          questions and instant feedback.
        </p>
        <Link href="/pricing" className="btn">Get access</Link>

        <div className="browser-mock">
          <div className="browser-bar">
            <span>●</span><span>●</span><span>●</span>
            <div className="url">therapyprepped.com/dashboard</div>
          </div>
          <div className="browser-content">
            <div className="card">
              <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: '0 0 6px' }}>
                CASE 1 OF 3 · SCORE 0
              </p>
              <p style={{ fontSize: 14, margin: '0 0 10px' }}>
                A client reports increasing isolation and states they "don't see the point
                anymore." What's the clinician's first priority?
              </p>
              <div className="sample-choice correct">Conduct a risk assessment</div>
              <div className="sample-choice">Schedule a follow-up in two weeks</div>
              <div className="sample-choice">Refer out immediately</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <div className="eyebrow" style={{ marginBottom: 2 }}>01</div>
          <h3 style={{ margin: '0 0 4px', fontSize: 17 }}>Time-boxed access</h3>
          <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: '0 0 16px' }}>
            Choose a 3, 7, 14, or 30-day window that matches your exam date.
          </p>
          <div className="eyebrow" style={{ marginBottom: 2 }}>02</div>
          <h3 style={{ margin: '0 0 4px', fontSize: 17 }}>Case-based, not rote</h3>
          <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: '0 0 16px' }}>
            Every question is a scenario with clinical-judgment answer choices, matched to
            the four NCMHCE domains.
          </p>
          <div className="eyebrow" style={{ marginBottom: 2 }}>03</div>
          <h3 style={{ margin: '0 0 4px', fontSize: 17 }}>No surprises</h3>
          <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: 0 }}>
            Plain-language terms and a disclaimer up front — read before checkout.
          </p>
        </div>

        <div className="banner">
          Supervising interns? <a className="link" href="https://mysupervisely.com" target="_blank" rel="noreferrer">MySupervisely.com</a> connects
          interns with supervisors across LMHC and other licensure tracks.
        </div>
      </div>
      <Footer />
    </div>
  );
}
