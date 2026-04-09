import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";

export default function PineapplePiePostPage() {
  return (
    <>
      <Head>
        <title>Pineapple Pie – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Pineapple Pie" breadcrumb="Home | Blog & Recipes" />

        <section className="fert-section">
          <div className="fert-wrap post-layout">
            <img src="https://www.fertinyc.com/wp-content/uploads/2021/03/postre-750x500.jpg" alt="Pineapple pie" />
            <p className="fert-section-copy left">
              Pineapple pie recipe and inspiration from our sweetest harvest.
            </p>
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
