import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Scissors, Sparkles, Ruler, Package, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "@/components/site/Marquee";
import heroFabric from "@/assets/hero-fabric.jpg";
import lehenga from "@/assets/collection-lehenga.jpg";
import sherwani from "@/assets/collection-sherwani.jpg";
import anarkali from "@/assets/collection-anarkali.jpg";
import tailorHands from "@/assets/tailor-hands.jpg";
import fabrics from "@/assets/fabrics-stack.jpg";
import embroidery from "@/assets/embroidery-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaariq — Bespoke Tailoring, Boutique Collections & Doorstep Service" },
      { name: "description", content: "Custom-made ethnic & modern wear from India's finest tailors. Doorstep measurements, AI design, and worldwide delivery." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Ruler, title: "Doorstep Measurement", desc: "Our master tailor visits you. Zero guesswork, perfect fit." },
  { icon: Scissors, title: "Bespoke Stitching", desc: "Cut and sewn for you — never off the rack." },
  { icon: Sparkles, title: "Hand Embroidery", desc: "Zardozi, aari & threadwork by heritage artisans." },
  { icon: Package, title: "Worldwide Shipping", desc: "Tracked, insured and delivered in 7–10 days." },
];

const collections = [
  { title: "The Wedding Edit", tag: "Bridal · 24 pieces", img: lehenga },
  { title: "Heritage Sherwani", tag: "Men's · 18 pieces", img: sherwani },
  { title: "Anarkali Atelier", tag: "Festive · 32 pieces", img: anarkali },
  { title: "Banarasi Library", tag: "Fabric · Silk", img: fabrics },
  { title: "Hand Zardozi", tag: "Embroidery · 14 pieces", img: embroidery },
  { title: "Tailored Formals", tag: "Men's · 22 pieces", img: tailorHands },
  { title: "Festive Lehengas", tag: "Women's · 28 pieces", img: lehenga },
  { title: "Royal Sherwani", tag: "Wedding · 12 pieces", img: sherwani },
  { title: "Pastel Anarkalis", tag: "Day · 18 pieces", img: anarkali },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">
          <div className="lg:col-span-6 flex flex-col justify-between px-6 lg:px-16 py-16 lg:py-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Atelier · Est. 2014 · Mumbai</p>
            <div>
              <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance">
                Tailored to <em className="text-accent">you</em>,<br />
                stitched with <em>soul.</em>
              </h1>
              <p className="mt-8 max-w-md text-base text-muted-foreground text-pretty">
                From the first measure to the final stitch, every Kaariq piece is crafted by hand — at our atelier or your doorstep.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/booking" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
                  Book a Fitting
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
                <Link to="/collections" className="inline-flex items-center gap-2 px-2 py-4 text-sm tracking-wide border-b border-foreground underline-link">
                  Browse Collections
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-10 pt-10">
              <div>
                <p className="font-display text-3xl">12k+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Garments stitched</p>
              </div>
              <div>
                <p className="font-display text-3xl">4.9★</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">2,400 reviews</p>
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-3xl">38</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Master tailors</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative bg-muted">
            <img src={heroFabric} alt="Emerald silk with gold embroidery" width={1080} height={1600} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur p-5 max-w-xs">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Featured fabric</p>
              <p className="font-display text-xl mt-2">Banarasi silk with hand zardozi</p>
              <p className="text-xs text-muted-foreground mt-2">From ₹4,800 / metre</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Bespoke Tailoring", "Doorstep Measurement", "Hand Embroidery", "Bridal Couture", "AI Design Studio"]} />

      {/* SERVICES STRIP */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s) => (
            <div key={s.title}>
              <s.icon className="w-7 h-7 text-accent" strokeWidth={1.4} />
              <h3 className="font-display text-xl mt-5">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS — horizontal scroll */}
      <section className="py-20 border-y border-border bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Collections</p>
            <h2 className="font-display text-5xl md:text-6xl mt-3 text-balance">Made for the moments<br /><em>that matter.</em></h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => document.getElementById("collections-rail")?.scrollBy({ left: -400, behavior: "smooth" })}
              className="w-11 h-11 border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => document.getElementById("collections-rail")?.scrollBy({ left: 400, behavior: "smooth" })}
              className="w-11 h-11 border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              →
            </button>
            <Link to="/collections" className="ml-4 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 underline-link">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div
          id="collections-rail"
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-8 pb-4 scroll-px-6"
        >
          {collections.map((c) => (
            <Link
              key={c.title}
              to="/collections"
              className="group shrink-0 w-[78vw] sm:w-[42vw] md:w-[32vw] lg:w-[24vw] snap-start"
            >
              <div className="overflow-hidden bg-muted aspect-[3/4]">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{c.tag}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section className="bg-cream mt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">The craft</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05] text-balance">
              Heritage hands.<br /><em>Modern</em> silhouettes.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Every Kaariq piece passes through eight pairs of hands — pattern-makers, master cutters, embroiderers, finishers — before it reaches you.
            </p>
            <Link to="/booking" className="mt-8 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 underline-link">
              Inside our process <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
            <img src={tailorHands} alt="Tailor's hands" loading="lazy" width={1024} height={1280} className="w-full aspect-[3/4] object-cover" />
            <img src={embroidery} alt="Hand embroidery" loading="lazy" width={1024} height={1024} className="w-full aspect-[3/4] object-cover translate-y-12" />
            <img src={fabrics} alt="Fabric library" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover col-span-2" />
          </div>
        </div>
      </section>

      {/* PROCESS — animated progress timeline */}
      <ProcessSection />

      {/* TESTIMONIAL */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Voices</p>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight mt-8 text-balance">
            "I sent a Pinterest screenshot. They sent back a lehenga that fit me <em className="text-gold">like memory</em> — heavier, softer, and somehow more <em className="text-gold">me</em> than I imagined."
          </blockquote>
          <p className="mt-10 text-sm tracking-widest uppercase text-primary-foreground/70">— Ananya R., Bridal Client · Bengaluru</p>
        </div>
      </section>
    </div>
  );
}
