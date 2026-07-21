import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TrackSplash from '../components/TrackSplash';
import DemoQuizCarousel from '../components/DemoQuizCarousel';

export default function Home() {
  return (
    <div>
      <TrackSplash />
      <Head>
        <title>TherapyPrepped — NCMHCE Exam Prep</title>
        <meta
          name="description"
          content="Case-based NCMHCE exam prep. Study the four exam domains and practice with clinical-judgment questions."
        />
      </Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">LMHC / NCMHCE prep</div>
        <h1 className="hero">Study like the exam actually works.</h1>
        <p className="lead">
          Four exam domains, taught the way the NCMHCE tests them — through clinical case
          judgment, not flashcards. Study the content, then practice with scenario-based
          questions and instant feedback.
        </p>
        <Link href="/pricing" className="btn">Get access</Link>

        <div style={{ display: 'flex', gap: 20, marginTop: 24, flexWrap: 'wrap' }}>
          <div>
            <p className="display" style={{ fontSize: 26, margin: 0, color: 'var(--teal-dark)' }}>332+</p>
            <p style={{ fontSize: 12, color: 'rgba(23,48,45,0.65)', margin: 0 }}>practice questions</p>
          </div>
          <div>
            <p className="display" style={{ fontSize: 26, margin: 0, color: 'var(--teal-dark)' }}>4</p>
            <p style={{ fontSize: 12, color: 'rgba(23,48,45,0.65)', margin: 0 }}>NCMHCE exam domains covered</p>
          </div>
          <div>
            <p className="display" style={{ fontSize: 26, margin: 0, color: 'var(--teal-dark)' }}>3</p>
            <p style={{ fontSize: 12, color: 'rgba(23,48,45,0.65)', margin: 0 }}>full-length practice exams<br />(110 questions each)</p>
          </div>
        </div>

        <div className="banner" style={{ marginTop: 20 }}>
          Every plan includes the full curriculum across all 4 domains, all 332+ case-based
          practice questions, and all 3 full-length practice exams — mirroring the real
          NCMHCE's length and format, with scores revealed only at the end.
        </div>

        <div className="browser-mock">
          <div className="browser-bar">
            <span>●</span><span>●</span><span>●</span>
            <div className="url">therapyprepped.com/dashboard</div>
          </div>
          <div className="browser-content">
            <DemoQuizCarousel />
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
          <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: '0 0 16px' }}>
            Plain-language terms and a disclaimer up front — read before checkout.
          </p>
          <div className="eyebrow" style={{ marginBottom: 2 }}>04</div>
          <h3 style={{ margin: '0 0 4px', fontSize: 17 }}>Full exam simulations</h3>
          <p style={{ fontSize: 13, color: 'rgba(23,48,45,0.7)', margin: 0 }}>
            3 full-length practice exams, 110 questions each, drawn across all domains with
            your score revealed only at the end — just like test day.
          </p>
        </div>

        <div className="banner">
          Finishing up and job hunting? <a className="link" href="https://mysupervisely.com" target="_blank" rel="noreferrer">MySupervisely.com</a> connects
          interns with supervisors and job opportunities across LMHC and other licensure tracks.
        </div>
      </div>
      <Footer />
    </div>
  );
}
