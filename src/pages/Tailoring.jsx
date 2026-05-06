import React from "react";
import { useParams } from "react-router-dom";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import {
  ServiceIntro,
  WhatWeOffer,
  Benefits,
  Process,
  FAQ,
  CTAStrip,
} from "@/components/InfoSections";
import { NAV } from "@/mock/mock";

const OFFERINGS = [
  { title: "Women's Bespoke", desc: "Blouses, kurtas, anarkalis, lehengas and bottoms — cut, draped and embroidered to your measure." },
  { title: "Men's Tailoring", desc: "Suits, sherwanis, kurta sets, blazers and trousers crafted with hand-finished detailing." },
  { title: "Custom Embroidery", desc: "Zardozi, aari, thread and sequin work — choose motifs, placement and palette." },
  { title: "Fabric Sourcing", desc: "Curated silks, linens, cottons and georgettes — or bring your own cloth." },
  { title: "Alterations & Repairs", desc: "Refit, restyle and restore garments you already love with precision tailoring." },
  { title: "Wedding & Trousseau", desc: "End-to-end bridal and groom wardrobes with private consultations." },
];

const STEPS = [
  { title: "Consult", desc: "Share your occasion, references and preferences with our stylist." },
  { title: "Measure", desc: "Doorstep or in-store measurement with our master tailor." },
  { title: "Craft", desc: "Cutting, stitching and hand-finishing — typically 14–21 days." },
  { title: "Fit & Deliver", desc: "Trial fitting, fine adjustments and final delivery to your door." },
];

const FAQS = [
  { q: "How long does a custom garment take?", a: "Most pieces are ready in 14–21 days. Heavy bridal work can take 4–8 weeks depending on embroidery." },
  { q: "Can I bring my own fabric?", a: "Absolutely. We're happy to stitch on fabric you already own — bring it in or send it via courier." },
  { q: "Do you offer doorstep measurement?", a: "Yes — complimentary on orders above ₹5,000 within the city, and on request elsewhere." },
  { q: "What if the fit isn't right?", a: "We offer free alterations until the fit is perfect. Your satisfaction is part of the price." },
  { q: "Do you ship outside India?", a: "Yes, we ship worldwide via insured courier. Delivery times vary by destination." },
  { q: "Can I see designs before stitching?", a: "Our stylist shares sketches, fabric swatches and embroidery samples for approval before we begin." },
];

const sub = NAV[0].columns;

export default function Tailoring() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, " ").replace(/\band\b/g, "&") : "Bespoke Tailoring";

  return (
    <main className="pb-12 sm:pb-20">
      <SubCategoryCarousel  basePath="/tailoring" columns={sub} activeSlug={slug} />

      <WhatWeOffer items={OFFERINGS} />
      <Benefits />
      <Process steps={STEPS} />
      <FAQ items={FAQS} />
      <CTAStrip
        title="Ready to be measured?"
        subtitle="Book a free consultation with our stylist — at home or in our atelier."
        ctaLabel="Schedule a fitting"
        to="/request-contact"
      />
    </main>
  );
}
