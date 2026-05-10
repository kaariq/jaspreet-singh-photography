import React from "react";
import { useParams, Link } from "react-router-dom";
import { ServiceIntro, CTAStrip } from "@/components/InfoSections";
import { IMAGES, NAV } from "@/data";

const COPY = {
  "embroidery-and-handwork": {
    title: "Embroidery & Handwork",
    lead: "Zardosi, resham, sequins, mirror — bespoke handwork crafted by master karigars.",
    image: IMAGES.embroidery,
  },
  "collar-and-cuff-designs": {
    title: "Collar & Cuff Designs",
    lead: "Mandarin, cutaway, French — choose collars and cuffs that define your silhouette.",
    image: IMAGES.men,
  },
  "neckline-and-sleeves": {
    title: "Necklines & Sleeves",
    lead: "Sweetheart, boat, bell, cap — finishing details that personalise every garment.",
    image: IMAGES.women,
  },
  "fabric-customization": {
    title: "Fabric Customization",
    lead: "Choose from premium silks, cottons, wools — or bring your own fabric.",
    image: IMAGES.fabric,
  },
  "fittings-and-alterations": {
    title: "Fittings & Alterations",
    lead: "Precision alterations on existing garments — restore the perfect fit.",
    image: IMAGES.craft,
  },
};

export default function Customize() {
  const { slug } = useParams();
  const customizeNav = NAV.find((n) => n.key === "customize");
  const items = customizeNav?.columns?.[0]?.items || [];

  if (!slug) {
    return (
      <main className="pb-16">
        <ServiceIntro
          eyebrow="— CUSTOMIZE"
          title="Make it unmistakably yours"
          lead="From embroidery to fit — every detail is yours to choose. Pick a service to begin."
        />
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => {
            const c = COPY[it.slug] || { title: it.label, lead: "", image: IMAGES.craft };
            return (
              <Link key={it.slug} to={`/customize/${it.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-rose-pale">
                  <img src={c.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif-display text-xl text-ink mt-3">{it.label}</h3>
                <p className="text-ink/70 text-sm mt-1">{c.lead}</p>
              </Link>
            );
          })}
        </section>
      </main>
    );
  }

  const c = COPY[slug] || { title: slug.replace(/-/g, " "), lead: "Curated detail by Kaariq.", image: IMAGES.craft };
  return (
    <main className="pb-16">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="font-serif tracking-[0.28em] font-medium text-[10px] sm:text-xs text-wine">— CUSTOMIZE</div>
            <h1 className="font-serif-display text-3xl sm:text-5xl text-ink mt-3 leading-tight">{c.title}</h1>
            <p className="text-ink/70 text-sm sm:text-base mt-4 leading-relaxed">{c.lead}</p>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-rose-pale">
            <img src={c.image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <CTAStrip title="Ready to customise?" subtitle="Talk to a stylist who'll guide you through every option." ctaLabel="Book a consultation" to="/booking/book-appointment" />
    </main>
  );
}
