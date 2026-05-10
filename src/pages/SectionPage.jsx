import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { ServiceIntro, Benefits, Process, FAQ_C, CTAStrip } from "@/components/InfoSections";
import { NAV, FAQ, PROCESS } from "@/data";

export default function SectionPage({ sectionKey, title, lead }) {
  const { slug } = useParams();
  const navEntry = NAV.find((n) => n.key === sectionKey);
  if (slug) return <CategoryPage slug={slug} sectionKey={sectionKey} />;

  return (
    <main className="pb-8 sm:pb-8">
      <ServiceIntro eyebrow="— THE KAARIQ ATELIER" title={title} lead={lead} />
      {navEntry && (
        <SubCategoryCarousel basePath={navEntry.route} columns={navEntry.columns} activeSlug={slug} />
      )}
      <Process steps={PROCESS} />
      <CTAStrip
        title="Ready to be measured?"
        subtitle="Book a free consultation with our stylist — at home or in our atelier."
        ctaLabel="Schedule a fitting"
        to="/booking/book-appointment"
      />
      <FAQ_C items={FAQ} />
      <Benefits />
    </main>
  );
}
