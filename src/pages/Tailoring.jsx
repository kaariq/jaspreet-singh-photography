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
import { NAV, FAQ, PROCESS } from "@/data";

export default function Tailoring({ category = "" }) {
  const sub = NAV.find((s) => s.key === category)?.columns || [];
  const heading = category ? `${category}'s Tailoring` : "Bespoke Tailoring";
  return (
    <main className="pb-8 sm:pb-8">
      <ServiceIntro
        eyebrow=""
        title={heading}
        lead="From the first sketch to the final stitch, every piece is hand-crafted to your measure by our master tailors. Choose a category below to begin."
      />
      <SubCategoryCarousel
        basePath={`/${category}`}
        columns={sub}
        activeSlug={category}
      />
      <Process steps={PROCESS} />
      <CTAStrip
        title="Ready to be measured?"
        subtitle="Book a free consultation with our stylist — at home or in our atelier."
        ctaLabel="Schedule a fitting"
        to="/request-contact"
      />
      <FAQ_C items={FAQ} />
      <Benefits />
    </main>
  );
}
