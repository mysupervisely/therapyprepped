import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const ACCESS_STORAGE_KEY = 'tp_access_email';

export default function CheckoutSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Stripe redirects here with the session_id — but we don't have the
    // email client-side from that alone. The webhook has already recorded
    // access server-side; the dashboard's email-check flow picks it up
    // as soon as the person enters the email they checked out with.
  }, [router.query]);

  return (
    <div>
      <Head><title>You're in — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Payment received</div>
        <h1 className="hero" style={{ fontSize: 27 }}>You're all set.</h1>
        <p className="lead">
          Your access pass is active. Head to your dashboard and enter the email you used at
          checkout to start studying.
        </p>
        <Link href="/dashboard" className="btn">Go to dashboard</Link>
        <p className="note">
          Note: access can take a few seconds to appear after payment while Stripe confirms the
          transaction. If your dashboard says "no active pass," wait a moment and try again.
        </p>
      </div>
      <Footer />
    </div>
  );
}
