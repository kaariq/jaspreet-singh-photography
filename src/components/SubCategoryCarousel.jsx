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

  // Inward curve params
  const SPACING = 180; // horizontal space between cards
  const CURVE_DEPTH = 220; // how far back outer cards push (z)
  const ROT = 28; // outward rotation in degrees

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-10">
      <div
        className="relative h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center overflow-hidden"
        style={{ perspective: "1600px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {items.map((label, i) => {
            let offset = i - center;
            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;
            const abs = Math.abs(offset);
            if (abs > 4) return null;
            const s = slugify(label);
            const active = s === activeSlug;
            const isCenter = offset === 0;

            // Inward curve: outer cards rotate outward and push back in z
            const z = -Math.pow(abs, 2) * (CURVE_DEPTH / 6);
            const rotateY = -offset * ROT;
            const scale = 1 - abs * 0.06;

            return (
              <motion.div
                key={label}
                className="absolute top-1/2 left-1/2"
                animate={{
                  x: `calc(-50% + ${offset * SPACING}px)`,
                  y: "-50%",
                  z,
                  rotateY,
                  scale,
                  opacity: 1 - abs * 0.18,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 20 - abs,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
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
                    className={`relative w-[200px] sm:w-[260px] lg:w-[300px] aspect-[3/4] overflow-hidden rounded-md shadow-2xl bg-rose-pale ${
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
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="p-2 border border-ink/15 rounded-full hover:bg-ink hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-[10px] tracking-[0.2em] uppercase text-mute min-w-[120px] text-center">
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
