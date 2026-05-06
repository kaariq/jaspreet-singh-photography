import React from "react";
import { useParams } from "react-router-dom";
import { GarmentCard } from "@/components/PageBits";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { IMAGES, NAV } from "@/mock/mock";

const items = [
  {
    title: "Ivory Silk Lehenga",
    img: IMAGES.wedding,
    hoverImage: IMAGES.lookbook,
    price: "₹1,25,000",
    badge: "Wedding",
  },
  {
    title: "Emerald Anarkali",
    img: IMAGES.festive,
    hoverImage: IMAGES.embroidery,
    price: "₹22,000",
    badge: "Festive",
  },
  {
    title: "Linen Co-ord Set",
    img: IMAGES.casual,
    hoverImage: IMAGES.women,
    price: "₹8,500",
    badge: "New In",
  },
  {
    title: "Hand-zardozi Blouse",
    img: IMAGES.embroidery,
    hoverImage: IMAGES.women,
    price: "₹6,200",
  },
  { title: "Boutique Saree", img: IMAGES.women, hoverImage: IMAGES.embroidery, price: "₹18,000" },
  {
    title: "Indo-Western Suit",
    img: IMAGES.men,
    hoverImage: IMAGES.boutique,
    price: "₹32,000",
    badge: "Best Seller",
  },
  { title: "Festive Sherwani", img: IMAGES.boutique, hoverImage: IMAGES.men, price: "₹34,000" },
  {
    title: "Editorial Lookbook",
    img: IMAGES.lookbook,
    hoverImage: IMAGES.festive,
    price: "View edit",
    badge: "Lookbook",
  },
];

export default function Collections() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, " ") : "Collections";
  const sub = NAV[1].columns;
  return (
    <main className="pb-12 sm:pb-20">
      {/* Intro */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 text-center">
        <div className="edit-num text-[10px] sm:text-xs text-wine">— CURATED EDITS</div>
        <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-ink mt-4 leading-[1.05] capitalize">
          {heading}
        </h1>
        <p className="text-ink/70 text-sm sm:text-base lg:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
          Seasonal stories and heirloom silhouettes — curated across occasions, styles, and
          palettes. Browse the edits below and tailor any piece to your measure.
        </p>
      </section>

      <SubCategoryCarousel basePath="/collections" columns={sub} activeSlug={slug} />
    </main>
  );
}
