import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";
import { shared } from "@/data/siteContent";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Contact" breadcrumb="Home | Contact" />

        <section className="fert-section">
          <div className="fert-wrap contact-page-grid">
            <div>
              <h2 className="fert-section-title">For more information contact us</h2>
              <p className="fert-section-copy left">
                Location: {shared.location}
                <br />
                WhatsApp: {shared.whatsapp}
                <br />
                Email: <a href={`mailto:${shared.email}`}>{shared.email}</a>
              </p>
            </div>
            <iframe
              title="Fertinyc location"
              src="https://www.google.com/maps?q=Pital%20San%20Carlos%20Costa%20Rica&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
