export default function InnerHero({ title, breadcrumb }) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-overlay" />
      <div className="fert-wrap inner-hero-content">
        <h1>{title}</h1>
        <p>{breadcrumb}</p>
      </div>
    </section>
  );
}
