import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
export default function Terms() {
  return (
    <div>
      <Head><title>Terms of Use — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Effective when you check out</div>
        <h1 className="hero" style={{ fontSize: 27 }}>Terms of Use</h1>
        <div className="legal-block">
          <h3>Access windows</h3>
          <p>
            Plans grant access to the site's content for the number of days purchased,
            starting immediately at the time of purchase. Access ends automatically at the
            end of the purchased window — it is not paused, extended, or refundable for
            unused time.
          </p>
        </div>
        <div className="legal-block">
          <h3>Account and access method</h3>
          <p>
            Access is granted by email address rather than a traditional account and
            password. Keep the email you used at checkout — it's how the site verifies your
            access window.
          </p>
        </div>
        <div className="legal-block">
          <h3>Single-user access</h3>
          <p>
            Each access pass is licensed to the individual who purchased it and is not
            transferable or shareable. To reflect normal personal use — for example,
            switching between a phone and a laptop — each pass may be used on up to two
            devices. We may reset or revoke access if a pass appears to be shared or used
            beyond this limit.
          </p>
        </div>
        <div className="legal-block">
          <h3>Acceptable use</h3>
          <p>
            Content on this site — including lesson pages, case scenarios, and questions —
            is for your personal exam preparation only. Redistributing, reselling, or
            publishing this content elsewhere is not permitted.
          </p>
        </div>
        <div className="legal-block">
          <h3>No professional relationship</h3>
          <p>
            Using this site does not create a therapist-client, supervisory, or advisory
            relationship of any kind. Case scenarios are fictional composites created for
            practice purposes only and do not describe real clients.
          </p>
        </div>
        <div className="legal-block">
          <h3>No outcome guarantee</h3>
          <p>
            We do not guarantee any exam score, pass result, or licensure outcome. Exam
            content, format, and requirements are set by the relevant licensing body and can
            change; always confirm current requirements with your state board and exam
            administrator.
          </p>
        </div>
        <div className="legal-block">
          <h3>Changes to these terms</h3>
          <p>
            We may update these Terms from time to time. Continued use of the site after an
            update constitutes acceptance of the revised Terms.
          </p>
        </div>
        <div className="legal-block">
          <h3>Contact</h3>
          <p>Questions about these Terms can be sent to support@therapyprepped.com.</p>
        </div>
        <p className="note">
          This page is a plain-language starting point and has not yet been reviewed by an
          attorney. Have it reviewed before relying on it as your final Terms of Use,
          especially given past subscribers signed up before disclosure terms existed.
        </p>
      </div>
      <Footer />
    </div>
  );
}
