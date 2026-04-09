import Head from "next/head";
import { navigationLinks, pillars } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Fertinyc - we represent the true taste of pineapple</title>
        <meta name="description" content="We represent the true taste of pineapple." />
      </Head>

      <div className="fert-page" id="home">
        <main>
          <section className="fert-hero">
            <div className="fert-overlay" />
            <header className="fert-header">
              <div className="fert-logo-wrap">
                <div className="fert-logo-icon" />
                <div className="fert-logo-copy">
                  <span>Comercializadora</span>
                  <strong>FERTINYC</strong>
                </div>
              </div>

              <nav aria-label="Primary navigation">
                <ul className="fert-nav-list">
                  {navigationLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href}>{item.label.toUpperCase()}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#home">ENGLISH</a>
                  </li>
                </ul>
              </nav>
            </header>

            <div className="fert-hero-content">
              <h1>
                <span className="line-white">WE REPRESENT</span>
                <span className="line-yellow">THE TRUE TASTE</span>
                <span className="line-yellow">OF PINEAPPLE</span>
              </h1>

              <div className="fert-hero-actions">
                <a className="fert-outline-btn" href="#about">
                  WHAT MAKES US DIFFERENT?
                </a>
                <a className="fert-play-btn" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <span className="triangle" />
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="fert-section fert-about">
            <div className="fert-wrap">
              <h2 className="fert-section-title">MORE THAN 20 YEARS</h2>
              <p className="fert-section-copy">
                We started a family project that today puts up the name of our country. Today we go from being a small
                family to becoming a family of more than one hundred collaborators who every day give their best to
                bring the sweetest pineapple that exists to your table. We specialize in the marketing and production
                of pineapple for the export of both Crownless and non-Crown fruit for fresh cut and its derivatives,
                as well as RIPE crown fruit.
              </p>

              <div className="fert-pillars">
                {pillars.map((pillar) => (
                  <article key={pillar.title} className="fert-pillar">
                    {pillar.image ? <img src={pillar.image} alt="" /> : null}
                    <h3>{pillar.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="fert-section fert-tour">
            <div className="fert-wrap">
              <h2 className="fert-section-title">OUR TOUR</h2>
              <h3 className="fert-tour-title">COME TO MEET US</h3>
              <p className="fert-section-copy">
                You are cordially invited to Pital de San Carlos, Costa Rica, to discover where one of the world&apos;s
                best pineapples is born.
              </p>
              <p className="fert-sign">- Fertinyc team</p>
              <a className="fert-link-btn" href="#contact">
                For more information contact us
              </a>
            </div>
          </section>

          <section id="contact" className="fert-section fert-contact">
            <div className="fert-wrap">
              <div className="fert-contact-grid">
                <article>
                  <h4>Location</h4>
                  <p>Pital, San Carlos</p>
                </article>
                <article>
                  <h4>WhatsApp</h4>
                  <p>(+506) 61969639</p>
                </article>
                <article>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@fertinyc.com">info@fertinyc.com</a>
                  </p>
                </article>
              </div>

              <div className="fert-socials" id="blog">
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
          </section>
        </main>
      </div>
    </>
  );
}

