import React, { useState } from "react";
import { Scissors, Ruler, Sparkles, ShieldCheck, Truck, HeartHandshake, Plus, Minus } from "lucide-react";

export function ServiceIntro({ eyebrow, title, lead }) {
  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 text-center">
      <div className="edit-num text-[10px] sm:text-xs text-wine">{eyebrow}</div>
      <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-ink mt-4 leading-[1.05] capitalize">
        {title}
      </h1>
      <p className="text-ink/70 text-sm sm:text-base lg:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
        {lead}
      </p>
    </section>
  );
}

export function WhatWeOffer({ items }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
      <div className="text-center mb-10">
        <div className="edit-num text-[10px] sm:text-xs text-wine">— WHAT WE OFFER</div>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-ink mt-3">
          A complete bespoke service
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="border border-ink/10 p-6 hover:border-wine/40 transition-colors bg-white"
          >
            <h3 className="font-serif-display text-xl text-ink">{it.title}</h3>
            <p className="text-ink/70 text-sm mt-3 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const BENEFITS = [
  { Icon: Ruler, title: "Tailored to your measure", desc: "Every garment is cut to your exact measurements — no compromises on fit." },
  { Icon: Scissors, title: "Master craftsmanship", desc: "Hand-finished by tailors with decades of bespoke experience." },
  { Icon: Sparkles, title: "Premium fabrics", desc: "Hand-picked silks, linens, cottons and weaves sourced across India." },
  { Icon: ShieldCheck, title: "Fit guarantee", desc: "Free alterations until the fit is right. Your satisfaction is the standard." },
  { Icon: Truck, title: "Doorstep service", desc: "Complimentary measurement and delivery on orders above ₹5,000." },
  { Icon: HeartHandshake, title: "Personal stylist", desc: "Guidance on fabric, silhouette and styling — every step of the way." },
];

export function Benefits() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
      <div className="text-center mb-10">
        <div className="edit-num text-[10px] sm:text-xs text-wine">— WHY CUSTOM STITCHING</div>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-ink mt-3">
          The benefits of bespoke
        </h2>
        <p className="text-ink/70 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          Off-the-rack ends where we begin. A garment made for you fits, drapes and wears like nothing else.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map(({ Icon, title, desc }) => (
          <div key={title} className="p-6 bg-rose-pale/40">
            <Icon className="w-6 h-6 text-wine" />
            <h3 className="font-serif-display text-lg text-ink mt-4">{title}</h3>
            <p className="text-ink/70 text-sm mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process({ steps }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
      <div className="text-center mb-10">
        <div className="edit-num text-[10px] sm:text-xs text-wine">— THE KAARIQ PROCESS</div>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-ink mt-3">
          From thread to threshold
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="relative p-6 border border-ink/10">
            <div className="text-wine font-serif-display text-3xl">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="font-serif-display text-lg text-ink mt-3">{s.title}</h3>
            <p className="text-ink/70 text-sm mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
      <div className="text-center mb-10">
        <div className="edit-num text-[10px] sm:text-xs text-wine">— FAQ</div>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-ink mt-3">
          Frequently asked
        </h2>
      </div>
      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif-display text-base sm:text-lg text-ink">{it.q}</span>
                {isOpen ? <Minus className="w-4 h-4 text-wine shrink-0" /> : <Plus className="w-4 h-4 text-wine shrink-0" />}
              </button>
              {isOpen && (
                <p className="text-ink/70 text-sm leading-relaxed pb-5 pr-8">{it.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CTAStrip({ title, subtitle, ctaLabel, to = "/booking" }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
      <div className="bg-wine text-white p-8 sm:p-12 text-center">
        <h2 className="font-serif-display text-2xl sm:text-4xl">{title}</h2>
        <p className="text-white/80 text-sm sm:text-base mt-3 max-w-xl mx-auto">{subtitle}</p>
        <a
          href={to}
          className="inline-block mt-6 bg-white text-wine px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-blush transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
