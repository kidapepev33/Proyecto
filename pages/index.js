import Head from "next/head";
import ContactForm from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import { faqItems, processSteps, serviceCards, testimonials, trustPoints } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FertiNYC | Reproductive Care</title>
        <meta
          name="description"
          content="Comprehensive fertility services in NYC: testing, IUI, IVF and egg freezing with personalized care."
        />
      </Head>

      <div id="top" className="page-wrap">
        <Header />

        <main>
          <section className="hero-section">
            <div className="layout-shell hero-grid">
              <div>
                <p className="eyebrow">Fertility Clinic in New York</p>
                <h1 className="hero-title">Personalized Fertility Care for Every Family Journey</h1>
                <p className="hero-lead">
                  Reproductive specialists, advanced treatment options and clear guidance from your first consultation
                  to your next milestone.
                </p>
                <div className="hero-actions">
                  <a className="button-solid" href="#contact">
                    Start Your Consultation
                  </a>
                  <a className="button-outline" href="#services">
                    Explore Services
                  </a>
                </div>
              </div>

              <aside className="hero-panel" aria-label="Clinic highlights">
                <p className="panel-title">Why patients choose us</p>
                <ul>
                  {trustPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section id="process" className="section-block">
            <div className="layout-shell">
              <p className="eyebrow">Our Process</p>
              <h2 className="section-title">A Clear Plan from Day One</h2>
              <div className="cards-grid cards-grid-3">
                {processSteps.map((step) => (
                  <article key={step.title} className="content-card">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="section-block section-soft">
            <div className="layout-shell">
              <p className="eyebrow">Services</p>
              <h2 className="section-title">Comprehensive Fertility Programs</h2>
              <div className="cards-grid cards-grid-4">
                {serviceCards.map((service) => (
                  <article key={service.title} className="content-card">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="section-block">
            <div className="layout-shell">
              <p className="eyebrow">Patient Stories</p>
              <h2 className="section-title">Trusted by Families Across NYC</h2>
              <div className="cards-grid cards-grid-3">
                {testimonials.map((item) => (
                  <figure key={item.author} className="quote-card">
                    <blockquote>{item.quote}</blockquote>
                    <figcaption>{item.author}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="section-block section-soft">
            <div className="layout-shell">
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Common Questions</h2>
              <div className="faq-stack">
                {faqItems.map((item) => (
                  <article key={item.question} className="faq-item">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section-block contact-section">
            <div className="layout-shell contact-grid">
              <div>
                <p className="eyebrow">Get Started</p>
                <h2 className="section-title">Request Your First Fertility Consultation</h2>
                <p className="section-copy">
                  Share your goals and a coordinator will contact you to help schedule your first appointment.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
