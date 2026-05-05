import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { IMAGES } from "@/mock/mock";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Best-effort image picker per label
const pickImg = (label) => {
  const k = label.toLowerCase();
  if (/wedding|bridal/.test(k)) return IMAGES.wedding;
  if (/festive/.test(k)) return IMAGES.festive;
  if (/party|evening/.test(k)) return IMAGES.lookbook;
  if (/blouse|embroid|neckline|sleeve/.test(k)) return IMAGES.embroidery;
  if (/kurta|anarkali/.test(k)) return IMAGES.women;
  if (/lehenga/.test(k)) return IMAGES.wedding;
  if (/sher|suit|blazer|waist|trouser|men/.test(k)) return IMAGES.men;
  if (/bottom|salwar/.test(k)) return IMAGES.fabric;
  if (/casual|daily/.test(k)) return IMAGES.casual;
  if (/boho|vintage|minimalist|style/.test(k)) return IMAGES.lookbook;
  if (/summer|winter|monsoon|season/.test(k)) return IMAGES.casual;
  if (/new|best|featured/.test(k)) return IMAGES.boutique;
  if (/fabric|dye/.test(k)) return IMAGES.fabric;
  if (/alter|repair/.test(k)) return IMAGES.consultation;
  if (/formal|business/.test(k)) return IMAGES.men;
  return IMAGES.boutique;
};

export default function SubCategoryCarousel({ basePath, columns, activeSlug }) {
  const items = columns.flatMap((c) => c.items);
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-10">
      <Carousel
        opts={{ align: "start", loop: false, dragFree: true }}
        className="relative"
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {items.map((label) => {
            const s = slugify(label);
            const active = s === activeSlug;
            return (
              <CarouselItem
                key={label}
                className="pl-3 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <Link
                  to={`${basePath}/${s}`}
                  className={`group block animate-fade-in ${active ? "ring-2 ring-wine" : ""}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale rounded-sm">
                    <img
                      src={pickImg(label)}
                      alt={label}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                      <h3 className="font-serif-display text-sm sm:text-base leading-tight line-clamp-1">
                        {label}
                      </h3>
                    </div>
                    {active && (
                      <span className="absolute top-2 right-2 bg-wine text-white text-[9px] tracking-[0.18em] uppercase px-1.5 py-0.5 rounded-sm">
                        Now
                      </span>
                    )}
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6 bg-white/90 border-rose" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-6 bg-white/90 border-rose" />
      </Carousel>
    </section>
  );
}
