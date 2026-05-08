import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageBits";
import { Check, ArrowRight } from "lucide-react";
import { PRICING, PRICING_INCLUDED } from "@/data";
import { IMAGES } from "@/data";

export default function Pricing() {
  const { slug } = useParams();
  const initial = PRICING_GROUPS.find((g) => slug?.includes(g.id))?.id || "womens";
  const [tab, setTab] = useState(initial);
  const group = PRICING_GROUPS.find((g) => g.id === tab);

  return (
    <main className="pb-12 sm:pb-20">
      <PageHero
        tag="TRANSPARENT PRICING"
        title={
          <>
            Honest rates, <span className="italic text-wine">no surprises</span>.
          </>
        }
        subtitle="All prices include design consultation, 14-point measurement, two rounds of fittings, and packaging."
        image={IMAGES.fabric}
      />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6 sm:mt-12">
        {/* Tabs — scrollable on mobile */}
        <div className="flex sm:flex-wrap gap-2 border-b border-rose pb-3 overflow-x-auto no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
          {PRICING_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setTab(g.id)}
              className={`shrink-0 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 border whitespace-nowrap transition-colors ${tab === g.id ? "bg-ink text-white border-ink" : "border-transparent hover:border-ink"}`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="mt-6 sm:mt-10"
          >
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
              <div className="lg:col-span-4">
                <div className="edit-num text-mute">— {group.label.toUpperCase()}</div>
                <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl mt-2 sm:mt-3 text-ink">
                  Pricing for {group.label}.
                </h2>
                <p className="text-[13px] sm:text-sm text-mute mt-2 sm:mt-3 max-w-md">
                  {group.intro}
                </p>
                <Link
                  to="/booking/book-appointment"
                  className="inline-flex items-center gap-2 mt-5 sm:mt-7 bg-ink text-white px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-wine transition-colors"
                >
                  Get a custom quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-8">
                <div className="border border-rose bg-white">
                  <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-4 border-b border-rose bg-blush text-[11px] tracking-[0.22em] uppercase text-mute">
                    <div className="col-span-7">Item</div>
                    <div className="col-span-3">Price</div>
                    <div className="col-span-2 text-right">Lead time</div>
                  </div>
                  {group.rows.map(([name, price, lead], i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 border-b border-rose last:border-0 hover:bg-blush transition-colors"
                    >
                      <div className="sm:col-span-7 font-serif-display text-base sm:text-lg text-ink">
                        {name}
                      </div>
                      <div className="flex items-center justify-between sm:contents">
                        <div className="sm:col-span-3 text-wine font-serif-display text-base sm:text-lg">
                          {price}
                        </div>
                        <div className="sm:col-span-2 sm:text-right text-[11px] sm:text-sm text-mute">
                          {lead}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Always included */}
        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-6 sm:p-8 lg:p-10 bg-ink text-white">
            <div className="edit-num opacity-70">— ALWAYS INCLUDED</div>
            <ul className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] sm:text-sm">
              {PRICING_INCLUDED.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-wine-light shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase opacity-70 mt-3 sm:mt-4">
              *on premium bespoke orders
            </p>
          </div>
          <div className="p-6 sm:p-8 lg:p-10 bg-blush border border-rose">
            <div className="edit-num text-mute">— CORPORATE & WEDDING PARTIES</div>
            <h3 className="font-serif-display text-2xl sm:text-3xl mt-2">Need 10+ pieces?</h3>
            <p className="text-[13px] sm:text-sm text-mute mt-2">
              Unlock priority production, dedicated stylist, and up to 18% wholesale discount.
            </p>
            <Link
              to="/contact/corporate-inquiries"
              className="link-underline text-[11px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-4 sm:mt-6 inline-block"
            >
              Request bulk quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
