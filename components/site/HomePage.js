import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import { pillars, shared } from "@/data/siteContent";

export default function HomePage() {
  return (
    <div className="fert-page" id="home">
      <main>
        <section className="fert-hero">
          <div className="fert-overlay" />
          <FertHeader transparent />

          <div className="fert-hero-content">
            <h1>
              <span className="line-white">WE REPRESENT</span>
              <span className="line-yellow">THE TRUE TASTE</span>
              <span className="line-yellow">OF PINEAPPLE</span>
            </h1>

            <div className="fert-hero-actions">
              <a className="fert-outline-btn" href="/en/about-us-2/">
                WHAT MAKES US DIFFERENT?
              </a>
              <a className="fert-play-btn" href={shared.youtube} target="_blank" rel="noreferrer" aria-label="Video">
                <span className="triangle" />
              </a>
            </div>
          </div>
        </section>

        <section className="fert-section fert-about">
          <div className="fert-wrap">
            <h2 className="fert-section-title">MORE THAN 20 YEARS</h2>
            <p className="fert-section-copy">
              We started a family project that today puts up the name of our country. Today we go from being a small
              family to becoming a family of more than one hundred collaborators who every day give their best to
              bring the sweetest pineapple that exists to your table. We specialize in the marketing and production of
              pineapple for the export of both Crownless and non-Crown fruit for fresh cut and its derivatives, as well
              as RIPE crown fruit.
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

        <section className="fert-section fert-tour">
          <div className="fert-wrap">
            <h2 className="fert-section-title">OUR TOUR</h2>
            <h3 className="fert-tour-title">COME TO MEET US</h3>
            <p className="fert-section-copy">
              You are all cordially invited to Pital de San Carlos (Costa Rica), to know the cradle from which the
              best pineapple in the world is born.
            </p>
            <p className="fert-sign">- Fertinyc team</p>
            <a className="fert-link-btn" href="/en/contact/">
              For more information contact us
            </a>
          </div>
        </section>
      </main>

      <FertFooter />
    </div>
  );
}
