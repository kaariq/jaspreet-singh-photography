import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero, GarmentCard } from "@/components/PageBits";
import SubCategoryCarousel from "@/components/SubCategoryCarousel";
import { IMAGES, COLLECTIONS, NAV } from "@/mock/mock";

const items = [
  { title: "Ivory Silk Lehenga", img: IMAGES.wedding, price: "₹1,25,000", badge: "Wedding" },
  { title: "Emerald Anarkali", img: IMAGES.festive, price: "₹22,000", badge: "Festive" },
  { title: "Linen Co-ord Set", img: IMAGES.casual, price: "₹8,500", badge: "New In" },
  { title: "Hand-zardozi Blouse", img: IMAGES.embroidery, price: "₹6,200" },
  { title: "Atelier Saree", img: IMAGES.women, price: "₹18,000" },
  { title: "Indo-Western Suit", img: IMAGES.men, price: "₹32,000", badge: "Best Seller" },
  { title: "Festive Sherwani", img: IMAGES.boutique, price: "₹34,000" },
  { title: "Editorial Lookbook", img: IMAGES.lookbook, price: "View edit", badge: "Lookbook" },
];

export default function Collections() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, " ") : "Collections";
  const sub = NAV[1].columns;
  return (
    <main className="pb-12 sm:pb-20">
      <PageHero
        tag="COLLECTIONS"
        title={<span className="capitalize">{heading}</span>}
        subtitle="Curated edits across occasions, styles, and seasons — ready to be made yours."
        image={IMAGES.lookbook}
      />

      <SubCategoryCarousel basePath="/collections" columns={sub} activeSlug={slug} />

      {/* Featured collection mosaic */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {COLLECTIONS.map((c, i) => (
            <Link
              to={`/collections/${c.tag.toLowerCase().replace(/\s+/g, "-")}`}
              key={c.title}
              className={`group relative overflow-hidden bg-rose-pale block aspect-[4/5] sm:aspect-[4/3] ${i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute left-3 bottom-3 sm:left-6 sm:bottom-6 lg:left-8 lg:bottom-8 text-white max-w-md">
                <div className="edit-num opacity-90 text-[9px] sm:text-xs">{c.tag}</div>
                <h3 className="font-serif-display text-lg sm:text-2xl lg:text-3xl mt-1 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm opacity-90 mt-1 hidden lg:block">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {items.map((g, i) => (
            <GarmentCard key={i} {...g} />
          ))}
        </div>
      </section>
    </main>
  );
}
