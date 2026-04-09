import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";
import { pillars } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="About us" breadcrumb="Home | About Us" />

        <section className="fert-section fert-about-page">
          <div className="fert-wrap about-grid">
            <img
              className="about-main-image"
              src="https://www.fertinyc.com/wp-content/uploads/2021/03/1554497-scaled-900x500.jpg"
              alt="Fertinyc team in field"
            />
            <div>
              <h2 className="fert-section-title">A family project that today puts up the name of our country</h2>
              <p className="fert-section-copy left">
                We started a family project that today puts up the name of our country. Today we go from being a small
                family to becoming a family of more than one hundred collaborators who every day give their best to
                bring the sweetest pineapple that exists to your table.
              </p>
            </div>
          </div>

          <div className="fert-wrap fert-pillars">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="fert-pillar">
                {pillar.image ? <img src={pillar.image} alt="" /> : null}
                <h3>{pillar.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
