import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <div className="promo-bar">
        Most active associates finish a case set free. <Link href="/pricing">See plans &gt;</Link>
      </div>
      <div className="topnav">
        <Link href="/" className="wordmark display">TherapyPrepped</Link>
        <nav className="navlinks">
          <Link href="/dashboard">Study</Link>
          <Link href="/flashcards">Flashcards</Link>
          <Link href="/practice-exam">Practice Exam</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </>
  );
}
