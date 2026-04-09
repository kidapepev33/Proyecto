import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";
import { products } from "@/data/siteContent";

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Products – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Products" breadcrumb="Home | Products" />

        <section className="fert-section">
          <div className="fert-wrap product-grid">
            {products.map((item) => (
              <article key={item.title} className="product-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href}>See more...</a>
              </article>
            ))}
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
