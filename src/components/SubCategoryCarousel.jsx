import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "@/mock/mock";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
  const initial = Math.max(0, items.findIndex((l) => slugify(l) === activeSlug));
  const [center, setCenter] = useState(initial === -1 ? 0 : initial);

  const go = (dir) => {
    setCenter((c) => (c + dir + items.length) % items.length);
  };

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-10">
      <div
        className="relative h-[360px] sm:h-[440px] lg:h-[520px] flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {items.map((label, i) => {
          let offset = i - center;
          // Wrap shortest path
          if (offset > items.length / 2) offset -= items.length;
          if (offset < -items.length / 2) offset += items.length;
          const abs = Math.abs(offset);
          if (abs > 3) return null;
          const s = slugify(label);
          const active = s === activeSlug;
          const isCenter = offset === 0;

          return (
            <motion.div
              key={label}
              className="absolute top-1/2 left-1/2"
              animate={{
                x: `calc(-50% + ${offset * 140}px)`,
                y: "-50%",
                rotateY: offset * -22,
                scale: 1 - abs * 0.12,
                zIndex: 10 - abs,
                opacity: 1 - abs * 0.25,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link
                to={`${basePath}/${s}`}
                onClick={(e) => {
                  if (!isCenter) {
                    e.preventDefault();
                    setCenter(i);
                  }
                }}
                className="block"
              >
                <div
                  className={`relative w-[200px] sm:w-[260px] lg:w-[320px] aspect-[3/4] overflow-hidden rounded-md shadow-2xl bg-rose-pale ${
                    active ? "ring-2 ring-wine" : ""
                  }`}
                >
                  <img
                    src={pickImg(label)}
                    alt={label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                    <h3 className="font-serif-display text-base sm:text-lg lg:text-xl leading-tight">
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
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="p-2 border border-ink/15 rounded-full hover:bg-ink hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-[10px] tracking-[0.2em] uppercase text-mute">
          {items[center]}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="p-2 border border-ink/15 rounded-full hover:bg-ink hover:text-white transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
