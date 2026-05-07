import React, { useState, useEffect, useCallback } from "react";
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
  if (/casual|daily|summer|monsoon/.test(k)) return IMAGES.casual;
  if (/winter|velvet/.test(k)) return IMAGES.fabric;
  return IMAGES.boutique;
};

const blurb = (label) =>
  `Crafted ${label.toLowerCase()} — tailored to your measure with hand-finished detailing.`;

/**
 * Arc Focus Carousel — inspired by Framer's Arc Focus Carousel.
 * - Center card is large & front
 * - Side cards arc outward, smaller, slightly rotated
 * - Smooth spring spacing, dots, prev/next, keyboard arrows
 */
export default function SubCategoryCarousel({ basePath, columns, activeSlug }) {
  const items = columns.flatMap((c) => c.items);
  const initial = Math.max(0, items.findIndex((l) => slugify(l) === activeSlug));
  const [center, setCenter] = useState(initial === -1 ? 0 : initial);

  const go = useCallback(
    (dir) => {
      setCenter((c) => (c + dir + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Visible window: center + 2 each side
  const VISIBLE = 2; // each side

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-4 sm:mt-8">
      {/* Stage */}
      <div
        className="relative h-[420px] sm:h-[520px] lg:h-[600px] flex items-center justify-center select-none"
        style={{ perspective: "1400px" }}
      >
        {items.map((label, i) => {
          let offset = i - center;
          // wrap
          if (offset > items.length / 2) offset -= items.length;
          if (offset < -items.length / 2) offset += items.length;

          const abs = Math.abs(offset);
          if (abs > VISIBLE) return null;

          // Arc layout
          const STEP_X = 220; // horizontal spacing
          const ARC_Y = 28; // vertical drop per step
          const ROT = 10; // tilt per step
          const SCALE_STEP = 0.12;

          const x = offset * STEP_X;
          const y = abs * ARC_Y;
          const rotate = offset * ROT * 0.4;
          const rotateY = -offset * ROT;
          const scale = 1 - abs * SCALE_STEP;
          const opacity = abs > VISIBLE ? 0 : 1 - abs * 0.15;

          const isCenter = offset === 0;
          const s = slugify(label);

          return (
            <motion.div
              key={label}
              className="absolute top-1/2 left-1/2"
              style={{
                zIndex: 50 - abs,
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={{
                x: x - 0,
                y: y - 0,
                rotate,
                rotateY,
                scale,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={() => (isCenter ? null : setCenter(i))}
                  aria-label={label}
                  className="block focus:outline-none"
                >
                  <div
                    className={`w-[150px] sm:w-[200px] lg:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden bg-white transition-shadow ${
                      isCenter ? "shadow-2xl ring-1 ring-black/10" : "shadow-lg"
                    }`}
                  >
                    <img
                      src={pickImg(label)}
                      alt={label}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
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
      <div className="relative z-50 -mt-4 sm:-mt-2 text-center max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-rose hover:border-ink hover:bg-ink hover:text-white transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-ink">
            {items[center]}
          </h2>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-rose hover:border-ink hover:bg-ink hover:text-white transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[13px] sm:text-sm text-mute mt-3 max-w-md mx-auto leading-relaxed">
          {blurb(items[center])}
        </p>

        <Link
          to={`${basePath}/${slugify(items[center])}`}
          className="inline-flex items-center gap-2 mt-4 bg-ink text-white px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase rounded-full hover:bg-wine transition-colors"
        >
          Explore
        </Link>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              aria-label={`Go to ${items[i]}`}
              className={`h-1.5 rounded-full transition-all ${
                i === center ? "w-6 bg-ink" : "w-1.5 bg-rose hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
