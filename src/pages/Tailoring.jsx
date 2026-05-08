import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import {
  ServiceIntro,
  WhatWeOffer,
  Benefits,
  Process,
  FAQ_C,
  CTAStrip,
} from "@/components/InfoSections";
import { NAV, FAQ } from "@/data";

const OFFERINGS = [
  {
    title: "Women's Bespoke",
    desc: "Blouses, kurtas, anarkalis, lehengas and bottoms — cut, draped and embroidered to your measure.",
  },
  {
    title: "Men's Tailoring",
    desc: "Suits, sherwanis, kurta sets, blazers and trousers crafted with hand-finished detailing.",
  },
  {
    title: "Custom Embroidery",
    desc: "Zardozi, aari, thread and sequin work — choose motifs, placement and palette.",
  },
  {
    title: "Fabric Sourcing",
    desc: "Curated silks, linens, cottons and georgettes — or bring your own cloth.",
  },
  {
    title: "Alterations & Repairs",
    desc: "Refit, restyle and restore garments you already love with precision tailoring.",
  },
  {
    title: "Wedding & Trousseau",
    desc: "End-to-end bridal and groom wardrobes with private consultations.",
  },
];

const STEPS = [
  { title: "Consult", desc: "Share your occasion, references and preferences with our stylist." },
  { title: "Measure", desc: "Doorstep or in-store measurement with our master tailor." },
  { title: "Craft", desc: "Cutting, stitching and hand-finishing — typically 14–21 days." },
  {
    title: "Fit & Deliver",
    desc: "Trial fitting, fine adjustments and final delivery to your door.",
  },
];

const sub = NAV[0].columns;

export default function Tailoring() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, " ").replace(/\band\b/g, "&") : "Bespoke Tailoring";

  return (
    <main className="pb-8 sm:pb-8">
      <ServiceIntro
        eyebrow="— THE KAARIQ ATELIER"
        title={heading}
        lead="From the first sketch to the final stitch, every piece is hand-crafted to your measure by our master tailors. Choose a category below to begin."
      />

      <SubCategoryCarousel basePath="/tailoring" columns={sub} activeSlug={slug} />

      <WhatWeOffer items={OFFERINGS} />
      <Benefits />
      <Process steps={STEPS} />
      <FAQ_C items={FAQ} />
      <CTAStrip
        title="Ready to be measured?"
        subtitle="Book a free consultation with our stylist — at home or in our atelier."
        ctaLabel="Schedule a fitting"
        to="/request-contact"
      />
    </main>
  );
}
