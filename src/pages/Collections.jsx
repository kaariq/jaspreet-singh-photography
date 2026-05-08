import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { ServiceIntro, Benefits, FAQ_C, CTAStrip, Process } from "@/components/InfoSections";
import { NAV, FAQ, PROCESS } from "@/data";

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
