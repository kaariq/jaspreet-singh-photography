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
  return IMAGES.boutique;
};

export default function SubCategoryCarousel({ basePath, columns, activeSlug }) {
  const items = columns.flatMap((c) => c.items);
  const initial = Math.max(0, items.findIndex((l) => slugify(l) === activeSlug));
  const [center, setCenter] = useState(initial === -1 ? 0 : initial);

  const go = (dir) => {
    setCenter((c) => (c + dir + items.length) % items.length);
  };

  // 🔥 SPACING FIX CONFIG
  const MAX_VISIBLE = 7; // 🔥 reduced → prevents overlap
  const RADIUS = 1200; // 🔥 increased → more spacing
  const ARC_SPREAD = Math.PI * 0.40; // less than full semicircle → better spacing

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 mt-5">
      <div className="relative h-[2490px] flex items-center justify-center overflow-hidden">
        {/* CARDS */}
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((label, i) => {
            let offset = i - center;

            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;

            if (Math.abs(offset) > Math.floor(MAX_VISIBLE / 2)) return null;

            const visibleIndex = offset + Math.floor(MAX_VISIBLE / 2);

            // 🔥 evenly distributed within controlled arc
            const angle =
              -ARC_SPREAD / 2 +
              (visibleIndex / (MAX_VISIBLE - 1)) * ARC_SPREAD;

            const x = RADIUS * Math.sin(angle);
            const y = -RADIUS * Math.cos(angle);

            const rotate = (angle * 180) / Math.PI * 0.6;

            const scale = 1 - Math.abs(offset) * 0.08;
            const opacity = 1 - Math.abs(offset) * 0.2;

            const s = slugify(label);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={label}
                className="absolute"
                animate={{
                  x,
                  y: y + 200, // pushes arc down
                  rotate,
                  scale,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 110, damping: 18 }}
                style={{ zIndex: 50 - Math.abs(offset) }}
              >
                <Link
                  to={`${basePath}/${s}`}
                  onClick={(e) => {
                    if (!isCenter) {
                      e.preventDefault();
                      setCenter(i);
                    }
                  }}
                >
                  <div className="w-[100px] sm:w-[200px] lg:w-[200px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl bg-white">
                    <img
                      src={pickImg(label)}
                      alt={label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-50 text-center max-w-l">
          <div className="flex items-center justify-center gap-2 mb-3">
            <button onClick={() => go(-1)}>
              <ChevronLeft className="w-5 h-5" />
            </button>

            <h2 className="text-3xl sm:text-4xl font-serif">
              {items[center]}
            </h2>

            <button onClick={() => go(1)}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Simple moments, captured beautifully — where function meets feeling.
          </p>

          <button className="px-5 py-2 bg-black text-white rounded-full text-sm">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}