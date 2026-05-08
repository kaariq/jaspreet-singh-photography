import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { ServiceIntro, WhatWeOffer, Benefits, FAQ_C, CTAStrip } from "@/components/InfoSections";
import { NAV } from "@/data";

const OFFERINGS = [
  {
    title: "Wedding Edit",
    desc: "Lehengas, sherwanis and trousseau staples designed for the season's most cherished occasion.",
  },
  {
    title: "Festive Wear",
    desc: "Anarkalis, sarees and kurtas in jewel tones — ready to be tailored to your fit.",
  },
  {
    title: "Party & Evening",
    desc: "Statement silhouettes for cocktails, soirées and city evenings.",
  },
  {
    title: "Daily & Casual",
    desc: "Easy co-ord sets, kurtas and linens that move from morning to evening.",
  },
  {
    title: "Seasonal Capsules",
    desc: "Summer breezes, monsoon weights and winter velvets — refreshed each season.",
  },
  {
    title: "New Arrivals",
    desc: "The latest from our atelier — exclusive editions, limited runs.",
  },
];

const FAQS = [
  {
    q: "Are collection pieces ready-made or made-to-order?",
    a: "Every piece in our collections is made to your measure — the lookbook is our design library, not a stock list.",
  },
  {
    q: "Can I customise a collection piece?",
    a: "Yes — change the fabric, palette, embroidery or silhouette. Our stylist will guide you.",
  },
  {
    q: "How do I order from a collection?",
    a: "Pick the piece, request a consultation, share your measurements and we'll begin crafting.",
  },
  {
    q: "Do you offer trousseau packages?",
    a: "Yes — curated multi-piece packages for brides, grooms and the family.",
  },
  {
    q: "What is the typical lead time?",
    a: "Most collection pieces ship in 3–5 weeks. Bridal pieces can take 6–10 weeks.",
  },
];

export default function Collections() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, " ") : "The Collections";
  const sub = NAV[1].columns;

  return (
    <main className="pb-12 sm:pb-20">
      <ServiceIntro
        eyebrow="— CURATED EDITS"
        title={heading}
        lead="Seasonal stories and heirloom silhouettes — each piece tailored to your measure. Browse the edits and make any look yours."
      />

      <SubCategoryCarousel basePath="/collections" columns={sub} activeSlug={slug} />

      <WhatWeOffer items={OFFERINGS} />
      <Benefits />
      <FAQ items={FAQS} />
      <CTAStrip
        title="Found a piece you love?"
        subtitle="Reserve a consultation and we'll tailor it to your story."
        ctaLabel="Request a consultation"
        to="/request-contact"
      />
    </main>
  );
}
