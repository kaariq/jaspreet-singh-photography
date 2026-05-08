import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Upload, ChevronDown } from "lucide-react";
import { DESIGNS } from "@/data/designs";
import { CATEGORY_TO_SCHEMA, CATEGORY_LABELS } from "@/data/measurements";
import { IMAGES } from "@/mock/mock";
import { getSection } from "@/data/navigation";

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
const pickHover = (d, i) => d.hoverImage || HOVER_POOL[(i + 1) % HOVER_POOL.length];

const tailoringSection = getSection("tailoring");

export default function CategoryPage({ slug: forcedSlug }) {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const schemaKey = CATEGORY_TO_SCHEMA[slug];
  const designs = DESIGNS[schemaKey] || DESIGNS[slug] || [];
  const label = CATEGORY_LABELS[schemaKey] || (slug || "").replace(/-/g, " ");
  const nav = useNavigate();
  const heroImg = designs[0]?.image || IMAGES.craft;

  const activeGroupTitle =
    tailoringSection.groups.find((g) => g.items.some((i) => i.slug === slug))?.title ||
    tailoringSection.groups[0].title;
  const [openGroup, setOpenGroup] = useState(activeGroupTitle);

  return (
    <main className="pb-12 sm:pb-20">
      {/* Sticky grouped sub-categories (collapse/expand) */}
      <div className="sticky-subnav">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 space-y-2">
          {tailoringSection.groups.map((g) => {
            const isOpen = openGroup === g.title;
            return (
              <div key={g.title} className="border-b border-rose/60 last:border-0">
                <button
                  onClick={() => setOpenGroup(isOpen ? null : g.title)}
                  className="w-full flex items-center justify-between py-1.5 sm:py-2 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-mute hover:text-ink transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{g.title}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="flex sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
                    {g.items.map((it) => {
                      const active = it.slug === slug;
                      return (
                        <Link
                          key={it.slug}
                          to={`/tailoring/${it.slug}`}
                          aria-current={active ? "page" : undefined}
                          className={`shrink-0 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full whitespace-nowrap transition-colors ${active ? "bg-primary text-primary-foreground border-primary shadow-sm" : "border-border bg-card hover:border-primary hover:text-primary"}`}
                        >
                          {it.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12">
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <div className="edit-num text-mute">— PREDEFINED DESIGNS</div>
            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl mt-1.5 sm:mt-2">
              Pick a starting silhouette.
            </h2>
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-mute whitespace-nowrap">
            {designs.length} designs
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {designs.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => nav(`/tailoring/${slug}/order/${d.id}`)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group text-left bg-white border border-rose hover:border-ink transition-colors"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale">
                <img
                  src={d.image}
                  alt={d.label}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={pickHover(d, i)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-105 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif-display text-base sm:text-xl text-ink leading-tight">
                    {d.label}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-mute group-hover:text-wine group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-[11px] sm:text-[13px] text-mute mt-1 leading-relaxed line-clamp-2">
                  {d.blurb}
                </p>
                <div className="flex items-center justify-between mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-rose">
                  <span className="text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-mute">
                    From
                  </span>
                  <span className="font-serif-display text-sm sm:text-lg text-ink">
                    ₹{d.basePrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Custom order CTA */}
        <div className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-ink text-white p-6 sm:p-8 lg:p-12"
          >
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-wine-light" />
            <h3 className="font-serif-display text-2xl sm:text-3xl mt-3 sm:mt-4">
              Have a design in mind?
            </h3>
            <p className="text-[13px] sm:text-sm opacity-85 mt-2 sm:mt-3 max-w-md">
              Upload a reference photo or sketch — our designer will recreate it with your fabric
              and fit.
            </p>
            <Link
              to={`/tailoring/${slug}/order/custom`}
              className="inline-flex items-center gap-2 mt-4 sm:mt-6 bg-white text-ink px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-wine hover:text-white transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload your design
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden bg-blush border border-rose p-6 sm:p-8 lg:p-12"
          >
            <div className="edit-num text-wine">— NOT SURE WHAT SUITS YOU?</div>
            <h3 className="font-serif-display text-2xl sm:text-3xl mt-2 sm:mt-3">
              Talk to a designer.
            </h3>
            <p className="text-[13px] sm:text-sm text-mute mt-2 sm:mt-3 max-w-md">
              Free 30-minute video call. Share your inspirations, body type and budget — we’ll
              suggest the right silhouette.
            </p>
            <Link
              to="/booking/virtual-consultation"
              className="inline-flex items-center gap-2 mt-4 sm:mt-6 bg-ink text-white px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-wine transition-colors"
            >
              Book consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
