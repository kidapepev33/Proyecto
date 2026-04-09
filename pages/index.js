import Head from "next/head";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import { pillars } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FertiNYC | The True Taste of Pineapple</title>
        <meta
          name="description"
          content="We represent the true taste of pineapple."
        />
      </Head>

      <div id="home" className="page-wrap">
        <Header />

        <main>
          <section className="hero-section">
            <div className="layout-shell hero-grid">
              <div>
                <p className="eyebrow">FertiNYC</p>
                <h1 className="hero-title">
                  We represent
                  <br />
                  the true taste
                  <br />
                  of pineapple
                </h1>
                <p className="hero-lead">
                  Costa Rican premium pineapple producer.
                </p>
                <div className="hero-actions">
                  <a className="button-solid" href="#about">
                    What makes us different?
                  </a>
                </div>
              </div>

              <aside className="hero-panel" aria-label="Video presentation">
                <p className="panel-title">Video</p>
                <a className="media-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  Open video on YouTube
                </a>
              </aside>
            </div>
          </section>

          <section id="about" className="section-block">
            <div className="layout-shell">
              <p className="eyebrow">MORE THAN 20 YEARS</p>
              <h2 className="section-title">A family project that today puts up the name of our country</h2>
              <p className="section-copy">
                We started a family project that today puts up the name of our country. Today we go from being a small
                family to becoming a family of more than one hundred collaborators who every day give their best to
                bring the sweetest pineapple that exists to your table. We specialize in the marketing and production
                of pineapple for the export of both Crownless and non-Crown fruit for fresh cut and its derivatives,
                as well as RIPE crown fruit.
              </p>
              <div className="cards-grid cards-grid-3 margin-top">
                {pillars.map((pillar) => (
                  <article key={pillar.title} className="content-card pillar-card">
                    {pillar.image ? <img className="pillar-image" src={pillar.image} alt="" /> : null}
                    <h3>{pillar.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="section-block section-soft">
            <div className="layout-shell">
              <p className="eyebrow">Our Tour</p>
              <h2 className="section-title">Come to meet us</h2>
              <p className="section-copy">
                You are cordially invited to Pital de San Carlos, Costa Rica, to discover where one of the world&apos;s
                best pineapples is born.
              </p>
              <p className="tour-sign">- Fertinyc team</p>
            </div>
          </section>

          <section id="blog" className="section-block">
            <div className="layout-shell">
              <p className="eyebrow">Blog & Recipes</p>
              <h2 className="section-title">Fresh ideas and stories around pineapple</h2>
            </div>
          </section>

          <section id="contact" className="section-block contact-section">
            <div className="layout-shell">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="section-title">For more information contact us</h2>
              </div>
              <div className="contact-grid simple-contact">
                <article className="content-card">
                  <h3>Location</h3>
                  <p>Pital, San Carlos</p>
                </article>
                <article className="content-card">
                  <h3>WhatsApp</h3>
                  <p>(+506) 61969639</p>
                </article>
                <article className="content-card">
                  <h3>Email</h3>
                  <p>info@fertinyc.com</p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
