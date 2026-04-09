import Head from "next/head";
import FertHeader from "@/components/site/FertHeader";
import FertFooter from "@/components/site/FertFooter";
import InnerHero from "@/components/site/InnerHero";
import { galleryImages } from "@/data/siteContent";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery – Fertinyc</title>
      </Head>
      <div className="fert-page">
        <FertHeader />
        <InnerHero title="Gallery" breadcrumb="Home | Gallery" />

        <section className="fert-section">
          <div className="fert-wrap gallery-grid">
            {galleryImages.map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </section>

        <FertFooter />
      </div>
    </>
  );
}
