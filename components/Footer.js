export default function Footer() {
  return (
    <footer className="site-footer">
      TherapyPrepped is an independent exam-prep resource. It is not affiliated with the
      Center for Credentialing & Education (CCE) or the NCMHCE. See our{' '}
      <a className="link" href="/disclaimer">Disclaimer</a> and{' '}
      <a className="link" href="/terms">Terms</a>. © {new Date().getFullYear()} TherapyPrepped.
    </footer>
  );
}
