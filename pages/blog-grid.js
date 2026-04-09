import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";

const posts = [
  {
    title: "Pineapple And Beet Smoothie",
    href: "/smoothie/",
    image: "https://www.fertinyc.com/wp-content/uploads/2021/03/smoothie-750x500.jpg"
  },
  {
    title: "Pineapple Pie",
    href: "/postre-de-pina/",
    image: "https://www.fertinyc.com/wp-content/uploads/2021/03/postre-750x500.jpg"
  },
  {
    title: "We help you with your goals",
    href: "/ayuda/",
    image: "https://www.fertinyc.com/wp-content/uploads/2021/03/metas-750x500.jpg"
  }
];

export default function BlogGridPage() {
  return (
    <>
      <Head>
        <title>Blog & Recipes – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Blog & Recipes" breadcrumb="Home | Blog & Recipes" />

        <section className="fert-section">
          <div className="fert-wrap blog-grid">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <a href={post.href}>See more...</a>
              </article>
            ))}
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
