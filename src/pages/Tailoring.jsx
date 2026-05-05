import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero, GarmentCard } from "@/components/PageBits";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { IMAGES, NAV } from "@/mock/mock";

const womensItems = [
  { title: "Hand-embroidered Blouse", img: IMAGES.women, price: "from ₹4,500", badge: "Bespoke" },
  { title: "Anarkali Suit", img: IMAGES.embroidery, price: "from ₹18,000", badge: "Heavy work" },
  { title: "Lehenga Choli", img: IMAGES.wedding, price: "from ₹48,000", badge: "Bridal" },
  { title: "Modern Kurta Set", img: IMAGES.casual, price: "from ₹6,800" },
  { title: "Salwar & Bottoms", img: IMAGES.fabric, price: "from ₹1,800" },
  { title: "Festive Anarkali", img: IMAGES.festive, price: "from ₹14,000", badge: "New" },
];
const mensItems = [
  { title: "Bespoke Suit", img: IMAGES.men, price: "from ₹28,000", badge: "Premium" },
  { title: "Wedding Sherwani", img: IMAGES.wedding, price: "from ₹32,000", badge: "Bridal" },
  { title: "Kurta Pyjama", img: IMAGES.consultation, price: "from ₹4,200" },
  { title: "Tailored Blazer", img: IMAGES.boutique, price: "from ₹18,000" },
  { title: "Linen Trousers", img: IMAGES.fabric, price: "from ₹4,400" },
  { title: "Embroidered Waistcoat", img: IMAGES.embroidery, price: "from ₹6,500" },
];

const sub = NAV[0].columns;

export default function Tailoring() {
  const { slug } = useParams();
  const items =
    slug && /sherwani|suit|kurta-pyjama|men|trousers|waistcoat/i.test(slug)
      ? mensItems
      : womensItems;
  const heading = slug ? slug.replace(/-/g, " ").replace(/\band\b/g, "&") : "Bespoke Tailoring";
  return (
    <main className="pb-12 sm:pb-20">
      <SubCategoryCarousel basePath="/tailoring" columns={sub} activeSlug={slug} />

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {items.map((g, i) => (
            <GarmentCard key={i} {...g} />
          ))}
        </div>
      </section>

      {/* CTA bar */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-20">
        <div className="bg-ink text-white p-6 sm:p-10 lg:p-14 grid lg:grid-cols-3 gap-5 sm:gap-8 items-center">
          <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl lg:col-span-2 leading-tight">
            Don't see what you have in mind? <span className="italic">We can craft it.</span>
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              to="/booking/book-appointment"
              className="inline-block bg-white text-ink px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-wine transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact/whatsapp-support"
              className="inline-block border border-white/40 px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-white hover:text-ink transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
