import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";

export default function SmoothiePostPage() {
  return (
    <>
      <Head>
        <title>Pineapple And Beet Smoothie – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Pineapple And Beet Smoothie" breadcrumb="Home | Blog & Recipes" />

        <section className="fert-section">
          <div className="fert-wrap post-layout">
            <img src="https://www.fertinyc.com/wp-content/uploads/2021/03/smoothie-750x500.jpg" alt="Smoothie" />
            <p className="fert-section-copy left">
              Fresh pineapple and beet smoothie recipe inspired by our tropical flavor profile.
            </p>
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
