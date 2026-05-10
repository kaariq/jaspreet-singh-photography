import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Upload,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

import { SUBITEMS } from "@/data";
import { IMAGES } from "@/data";
import { getSection } from "@/data/navigation/navigation";

const HOVER_POOL = [
  IMAGES.embroidery,
  IMAGES.festive,
  IMAGES.wedding,
  IMAGES.lookbook,
  IMAGES.fabric,
  IMAGES.women,
  IMAGES.casual,
  IMAGES.craft,
];

const pickHover = (d, i) =>
  d.hoverImage || HOVER_POOL[(i + 1) % HOVER_POOL.length];

export default function CategoryPage({
  slug: forcedSlug,
  sectionKey = "women",
}) {
  const params = useParams();
  const slug = forcedSlug || params.slug;

  const designs = SUBITEMS[slug] || [];
  const nav = useNavigate();

  const section = getSection(sectionKey) || {
    groups: [],
    route: `/${sectionKey}`,
  };

  const basePath = section.route || `/${sectionKey}`;

  const [open, setOpen] = useState(false);

  return (
    <main className="pb-12 sm:pb-20">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12">
        {/* HEADER */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-serif-display text-ink">
            Explore{" "}
            {slug
              .replace(/^\//, "")
              .replace(/-/g, " ")
              .replace(/\band\b/gi, "&")
              .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
            {" "}Designs
          </h1>
          <p className="mt-2 text-sm sm:text-base text-mute max-w-2xl leading-relaxed">
            Discover handcrafted styles tailored for every occasion. Browse our
            curated collection, hover to preview variations, and select a design
            to customize your order.
          </p>

          {/* optional subtle divider */}
          <div className="mt-4 w-16 h-[2px] bg-rose" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {designs.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => nav(`${basePath}/${slug}/order/${d.id}`)}
              whileHover={{ y: -4 }}
              className="group text-left bg-white border border-rose hover:border-ink"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale">
                <img
                  src={d.image}
                  alt={d.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity"
                />

                <img
                  src={pickHover(d, i)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* TEXT */}
              <div className="p-3 sm:p-4">
                <h3 className="font-serif-display text-base sm:text-xl text-ink">
                  {d.label}
                </h3>

                <p className="text-[11px] text-mute mt-1 line-clamp-2">
                  {d.blurb}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </main>
  );
}
