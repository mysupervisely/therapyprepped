import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Disclaimer() {
  return (
    <div>
      <Head><title>Disclaimer — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Please read before you start studying</div>
        <h1 className="hero" style={{ fontSize: 27 }}>Disclaimer</h1>

        <div className="legal-block">
          <h3>Independent exam-prep resource</h3>
          <p>
            TherapyPrepped is an independent study resource. It is not affiliated with,
            endorsed by, or sponsored by the Center for Credentialing & Education (CCE),
            the National Clinical Mental Health Counseling Examination (NCMHCE), or any
            state licensing board.
          </p>
        </div>
        <div className="legal-block">
          <h3>Study aid, not clinical or legal advice</h3>
          <p>
            Lesson content and case scenarios are designed to help you prepare for exam-style
            clinical reasoning. They are educational material only — not clinical supervision,
            legal advice, or a substitute for your own graduate training, licensure
            coursework, or supervision.
          </p>
        </div>
        <div className="legal-block">
          <h3>Content accuracy</h3>
          <p>
            We work to keep DSM-5-TR criteria, ethical standards, and evidence-based practice
            information accurate and current, but standards, laws, and codes of ethics
            change. Always verify against the current DSM-5-TR, your state's licensing
            statutes, and the current ACA Code of Ethics (or your discipline's equivalent)
            before relying on any single source for practice decisions.
          </p>
        </div>
        <div className="legal-block">
          <h3>Fictional case scenarios</h3>
          <p>
            All client scenarios used in lessons and practice questions are fictional
            composites created for educational purposes. Any resemblance to real individuals
            is coincidental.
          </p>
        </div>
        <div className="legal-block">
          <h3>No outcome guarantee</h3>
          <p>
            Practicing with this material does not guarantee a passing score on the NCMHCE or
            any other exam. Exam performance depends on many factors beyond any single study
            resource.
          </p>
        </div>

        <p className="note">
          This page is a plain-language starting point and has not yet been reviewed by an
          attorney. Have it reviewed before relying on it as your final Disclaimer.
        </p>
      </div>
      <Footer />
    </div>
  );
}
