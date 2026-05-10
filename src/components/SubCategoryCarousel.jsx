import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/data";

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const pickImg = (label = "") => {
  const k = String(label).toLowerCase();

  if (/wedding|bridal/.test(k)) return IMAGES.wedding;
  if (/festive/.test(k)) return IMAGES.festive;
  if (/party|evening/.test(k)) return IMAGES.lookbook;
  if (/blouse|embroid|neckline|sleeve/.test(k)) return IMAGES.embroidery;
  if (/kurta|anarkali/.test(k)) return IMAGES.women;
  if (/lehenga/.test(k)) return IMAGES.wedding;
  if (/sher|suit|blazer|waist|trouser|men/.test(k)) return IMAGES.men;
  if (/casual|daily|summer|monsoon/.test(k)) return IMAGES.casual;
  if (/winter|velvet/.test(k)) return IMAGES.fabric;

  return IMAGES.boutique;
};

export default function SubCategoryCarousel({
  basePath = "",
  columns = [],
  activeSlug = "",
}) {
  // Clean + normalize items
  const items = columns
    .filter((column) => column?.items)
    .flatMap((column) => column.items)
    .map((item) => ({
      label: item.label,
      slug: item.slug,
    }));

  const initialIndex = items.findIndex(
    (item) => slugify(item.slug) === slugify(activeSlug),
  );

  const [center, setCenter] = useState(initialIndex >= 0 ? initialIndex : 0);

  const go = useCallback(
    (dir) => {
      if (!items.length) return;

      setCenter((prev) => (prev + dir + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [go]);

  if (!items.length) return null;

  const activeItem = items[center];
  const VISIBLE = 2;

  console.log(items);
  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-4 sm:mt-8">
      {/* Stage */}
      <div
        className="relative h-[420px] sm:h-[520px] lg:h-[600px] flex items-center justify-center select-none"
        style={{ perspective: "1400px" }}
      >
        {items.map((item, index) => {
          let offset = index - center;

          // Infinite wrap
          if (offset > items.length / 2) {
            offset -= items.length;
          }

          if (offset < -items.length / 2) {
            offset += items.length;
          }

          const abs = Math.abs(offset);

          if (abs > VISIBLE) return null;

          // Arc layout
          const STEP_X = 320;
          const ARC_Y = 28;
          const ROT = 10;
          const SCALE_STEP = 0.12;

          const x = offset * STEP_X;
          const y = abs * ARC_Y;
          const rotate = offset * ROT * 0.4;
          const rotateY = -offset * ROT;
          const scale = 1 - abs * SCALE_STEP;
          const opacity = 1 - abs * 0.15;

          const isCenter = offset === 0;

          return (
            <motion.div
              key={item.slug}
              className="absolute top-1/2 left-1/2"
              style={{
                zIndex: 50 - abs,
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={{
                x,
                y,
                rotate,
                rotateY,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 22,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={() => {
                    if (!isCenter) {
                      setCenter(index);
                    }
                  }}
                  aria-label={item.label}
                  className="block focus:outline-none"
                >
                  <Link to={`${basePath}/${slugify(activeItem.slug)}`}>
                    <div
                      className={`w-[150px] sm:w-[200px] lg:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden bg-white transition-shadow ${
                        isCenter
                          ? "shadow-2xl ring-1 ring-black/10"
                          : "shadow-lg"
                      }`}
                    >
                      <img
                        src={pickImg(item.label)}
                        alt={item.label}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </Link>
                </button>
              </div>
            </motion.div>
          );
        })}

        {/* Side fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-40" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-40" />
      </div>

      {/* Caption + controls */}
      <div className="relative -mt-4 sm:-mt-2 text-center max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {/* Prev */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="
              absolute left-0 sm:left-4
              w-10 h-10 sm:w-11 sm:h-11
              rounded-full
              border border-rose/70
              bg-white/80 backdrop-blur
              flex items-center justify-center
              text-ink
              transition-all duration-300
              hover:bg-ink hover:text-white hover:border-ink
              hover:scale-105
              active:scale-95
              shadow-sm hover:shadow-md
            "
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Title */}
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-ink">
            {activeItem.label}
          </h2>

          {/* Next */}
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="
              absolute right-0 sm:right-4
              w-10 h-10 sm:w-11 sm:h-11
              rounded-full
              border border-rose/70
              bg-white/80 backdrop-blur
              flex items-center justify-center
              text-ink
              transition-all duration-300
              hover:bg-ink hover:text-white hover:border-ink
              hover:scale-105
              active:scale-95
              shadow-sm hover:shadow-md
            "
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <Link
          to={`${basePath}/${slugify(activeItem.slug)}`}
          className="inline-flex items-center gap-2 mt-4 bg-ink text-white px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase rounded-full hover:bg-wine transition-colors"
        >
          Explore
        </Link>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCenter(index)}
              aria-label={`Go to ${item.label}`}
              className={`h-1.5 rounded-full transition-all ${
                index === center
                  ? "w-6 bg-ink"
                  : "w-1.5 bg-rose hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
