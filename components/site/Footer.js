export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="layout-shell footer-grid">
        <div>
          <p className="footer-brand">FertiNYC</p>
          <p className="footer-copy">We represent the true taste of pineapple.</p>
        </div>
        <div>
          <p className="footer-title">Location</p>
          <p className="footer-copy">Pital, San Carlos</p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p className="footer-copy">(+506) 61969639</p>
          <p className="footer-copy">info@fertinyc.com</p>
        </div>
      </div>
      <div className="layout-shell footer-bottom">
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            Tiktok
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            Youtube
          </a>
        </div>
        <p className="footer-legal">
          © 2021 Fertinyc. Designed and developed by{" "}
          <a href="https://azulmarinocr.com/" target="_blank" rel="noreferrer">
            Azul Marino.
          </a>{" "}
          Todos lo derechos reservados.
        </p>
      </div>
    </footer>
  );
}
