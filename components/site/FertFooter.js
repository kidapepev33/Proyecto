import { shared } from "@/data/siteContent";

export default function FertFooter() {
  return (
    <footer className="fert-footer">
      <div className="fert-wrap">
        <img className="fert-footer-logo" src={shared.footerLogo} alt="Fertinyc" />

        <div className="fert-contact-grid">
          <article>
            <h4>Location</h4>
            <p>{shared.location}</p>
          </article>
          <article>
            <h4>WhatsApp</h4>
            <p>{shared.whatsapp}</p>
          </article>
          <article>
            <h4>Email</h4>
            <p>
              <a href={`mailto:${shared.email}`}>{shared.email}</a>
            </p>
          </article>
        </div>

        <div className="fert-socials">
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

        <p className="fert-legal">
          © 2021 Fertinyc. Disenado y desarrollado por{" "}
          <a href="https://azulmarinocr.com/" target="_blank" rel="noreferrer">
            Azul Marino.
          </a>{" "}
          Todos lo derechos reservados.
        </p>
      </div>
    </footer>
  );
}
