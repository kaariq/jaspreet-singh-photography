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
