import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";

export default function HelpGoalsPostPage() {
  return (
    <>
      <Head>
        <title>We help you with your goals – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="We help you with your goals" breadcrumb="Home | Blog & Recipes" />

        <section className="fert-section">
          <div className="fert-wrap post-layout">
            <img src="https://www.fertinyc.com/wp-content/uploads/2021/03/metas-750x500.jpg" alt="Goals" />
            <p className="fert-section-copy left">
              Pineapple is an ideal fruit for healthy habits with fiber, antioxidants and hydration support.
            </p>
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
