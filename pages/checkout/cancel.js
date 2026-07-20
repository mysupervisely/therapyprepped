import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function CheckoutCancel() {
  return (
    <div>
      <Head><title>Checkout canceled — TherapyPrepped</title></Head>
      <Nav />
      <div className="inner">
        <div className="eyebrow">Checkout canceled</div>
        <h1 className="hero" style={{ fontSize: 27 }}>No charge was made.</h1>
        <p className="lead">You can pick a plan again whenever you're ready.</p>
        <Link href="/pricing" className="btn">Back to pricing</Link>
      </div>
      <Footer />
    </div>
  );
}
