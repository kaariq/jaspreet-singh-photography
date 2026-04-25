import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Scissors, Sparkles, Ruler, Package } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/site/Marquee";
import { ProcessSection } from "@/components/site/ProcessSection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);

  return (
    <div>
      {/* HERO — fits viewport */}
      <section ref={heroRef} className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-9rem)]">
          <div className="lg:col-span-6 flex flex-col justify-between px-6 lg:px-14 py-12 lg:py-14">
            <Reveal as="p" className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Atelier · Est. 2014 · Mumbai
            </Reveal>
            <div>
              <Reveal y={32}>
                <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.6rem)] leading-[0.95] tracking-tight text-balance">
                  Tailored to <em className="text-accent">you</em>,<br />
                  stitched with <em>soul.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md text-sm md:text-base text-muted-foreground text-pretty">
                  From the first measure to the final stitch, every Kaariq piece is crafted by hand — at our atelier or your doorstep.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-4">
                <Link to="/booking" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-foreground transition-colors">
                  Book a Fitting
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
                <Link to="/collections" className="inline-flex items-center gap-2 px-2 py-3.5 text-sm tracking-wide border-b border-foreground underline-link">
                  Browse Collections
                </Link>
              </Reveal>
            </div>
            <StaggerGroup className="flex items-center gap-10 pt-6">
              {[
                { v: "12k+", l: "Garments stitched" },
                { v: "4.9★", l: "2,400 reviews" },
                { v: "38", l: "Master tailors" },
              ].map((s, i) => (
                <StaggerItem key={s.l} className={i === 2 ? "hidden sm:block" : ""}>
                  <p className="font-display text-3xl">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <div className="lg:col-span-6 relative bg-muted overflow-hidden">
            <motion.img
              src={heroFabric}
              alt="Silk with hand embroidery"
              width={1080}
              height={1600}
              style={{ y: heroY, scale: heroScale }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Reveal delay={0.4} className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur p-4 max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Featured fabric</p>
              <p className="font-display text-lg mt-1.5">Banarasi silk, hand zardozi</p>
              <p className="text-xs text-muted-foreground mt-1">From ₹4,800 / metre</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Bespoke Tailoring", "Doorstep Measurement", "Hand Embroidery", "Bridal Couture", "AI Design Studio"]} />

      {/* SERVICES — compact */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <s.icon className="w-6 h-6 text-accent" strokeWidth={1.4} />
              <h3 className="font-display text-lg mt-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* COLLECTIONS — horizontal rail */}
      <section className="py-16 lg:py-20 border-y border-border bg-cream/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-end justify-between mb-8">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Collections</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-2 text-balance leading-[1]">
              Made for the moments<br /><em>that matter.</em>
            </h2>
          </Reveal>
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => document.getElementById("collections-rail")?.scrollBy({ left: -400, behavior: "smooth" })}
              className="w-10 h-10 border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => document.getElementById("collections-rail")?.scrollBy({ left: 400, behavior: "smooth" })}
              className="w-10 h-10 border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              →
            </button>
            <Link to="/collections" className="ml-3 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 underline-link">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <motion.div
          id="collections-rail"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex gap-5 lg:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-8 pb-2 scroll-px-6"
        >
          {collections.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-[78vw] sm:w-[42vw] md:w-[32vw] lg:w-[22vw] snap-start"
            >
              <Link to="/collections" className="group block">
                <div className="overflow-hidden bg-muted aspect-[3/4]">
                  <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display text-xl">{c.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{c.tag}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CRAFT — compact */}
      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent">The craft</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 leading-[1.05] text-balance">
              Heritage hands.<br /><em>Modern</em> silhouettes.
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-md">
              Every Kaariq piece passes through eight pairs of hands — pattern-makers, master cutters, embroiderers, finishers — before it reaches you.
            </p>
            <Link to="/booking" className="mt-7 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 underline-link">
              Inside our process <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 lg:gap-5">
            {[
              { src: tailorHands, alt: "Tailor's hands", cls: "aspect-[3/4]", t: 0 },
              { src: embroidery, alt: "Hand embroidery", cls: "aspect-[3/4] translate-y-8", t: 0.1 },
              { src: fabrics, alt: "Fabric library", cls: "aspect-[16/9] col-span-2", t: 0.2 },
            ].map((m, i) => (
              <motion.img
                key={i}
                src={m.src}
                alt={m.alt}
                loading="lazy"
                initial={{ opacity: 0, y: 40, scale: 1.03 }}
                whileInView={{ opacity: 1, y: i === 1 ? 32 : 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: m.t, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full object-cover ${m.cls}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* TESTIMONIALS */}
      <Testimonials />
    </div>
  );
}
