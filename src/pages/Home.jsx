import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Scissors,
  Ruler,
  Sparkles,
  Globe,
  Heart,
  Leaf,
  Clock,
  Eye,
  Play,
  X,
} from "lucide-react";
import {
  IMAGES,
  SERVICES,
  FEATURES,
  COLLECTIONS,
  PROCESS,
  TESTIMONIALS,
  BLOGS,
  HERO_SLIDES,
  FAQ,
} from "@/data";

const featureIcons = [
  Ruler,
  Globe,
  Scissors,
  Heart,
  Eye,
  Clock,
  Leaf,
  Sparkles,
];

/* ---------- Reusable motion variants ---------- */
const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.08, ease },
  }),
};

const dropIn = {
  hidden: { opacity: 0, y: -40, scale: 0.96 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.08,
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  }),
};

const blurUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, delay: i * 0.1, ease },
  }),
};

const stagger = (delayChildren = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren } },
});
/* ---------- Section wrapper that softly launches its children ---------- */
function Reveal({
  children,
  variants = fadeUp,
  custom = 0,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      custom={custom}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      {/* <TrustStrip /> */}
      <ServicesGrid />
      <HorizontalProcess />
      <CollectionsEditorial />
      <FabricBanner />
      <FeaturesSection />
      <MediaTestimonials />
      {/* <Journal /> */}
      <FaqSection />
    </main>
  );
}

/* -------------------- HERO CAROUSEL -------------------- */
function HeroCarousel() {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const total = HERO_SLIDES.length;
  useEffect(() => {
    if (hover) return;
    const t = setInterval(() => setI((p) => (p + 1) % total), 8500);
    return () => clearInterval(t);
  }, [hover, total]);
  const go = (d) => setI((p) => (p + d + total) % total);
  const slide = HERO_SLIDES[i];
  const alignLeft = slide.align === "left";

  return (
    <section
      className="relative w-full bg-ink overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-[calc(100svh-64px)] min-h-[420px] sm:h-[78vh] sm:min-h-[560px] max-h-[840px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: slide.overlay }}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] mix-blend-overlay"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="n">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.85"
                  numOctaves="2"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#n)" />
            </svg>
            <svg
              className={`absolute ${alignLeft ? "-right-20 top-10" : "-left-20 top-10"} w-[280px] h-[280px] hidden lg:block opacity-25`}
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                stroke="#c3bcb1"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="60"
                stroke="#c3bcb1"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="30"
                stroke="#c3bcb1"
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>
        </AnimatePresence>
        <div className="relative h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-text"}
              className={`max-w-xl text-white ${alignLeft ? "text-left" : "ml-auto text-left lg:text-right"}`}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              variants={stagger(0.15)}
            >
              <motion.h1
                variants={blurUp}
                className="text-white font-serif-display font-bold italic mt-3 sm:mt-5 text-[30px] sm:text-[32px] lg:text-[42px] leading-[1] sm:leading-[0.98] whitespace-pre-line"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                variants={blurUp}
                className="text-[11.5px] sm:text-[15px] lg:text-[16px] leading-relaxed mt-3 sm:mt-6 opacity-90 max-w-lg ml-0 whitespace-pre-line"
              >
                {slide.body}
              </motion.p>
              <motion.div
                variants={blurUp}
                className={`flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-8 ${alignLeft ? "" : "lg:justify-end"}`}
              >
                <Link
                  to={slide.cta.to}
                  className="group inline-flex items-center gap-2 bg-white text-ink px-4 sm:px-7 py-2.5 sm:py-3.5 text-[10.5px] sm:text-[12px] tracking-[0.18em] sm:tracking-[0.22em] uppercase hover:bg-wine hover:text-white transition-colors"
                >
                  {slide.cta.label}{" "}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="hidden sm:flex absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur hover:bg-white text-white hover:text-ink items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="hidden sm:flex absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur hover:bg-white text-white hover:text-ink items-center justify-center transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="group relative h-[2px] sm:h-[3px] w-7 sm:w-10 lg:w-14 bg-white/30 overflow-hidden"
            >
              <span
                className={`absolute inset-0 bg-white origin-left transition-transform duration-[5500ms] ease-linear ${idx === i ? "scale-x-100" : "scale-x-0"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRUST STRIP -------------------- */
function TrustStrip() {
  const items = [
    "Free Doorstep Measurement",
    "Free Pickup & Delivery",
    "Free Lifetime Alterations",
    "Worldwide Shipping",
    "Hand Embroidery",
    "Sustainable Boutique",
  ];
  return (
    <div className="border-y border-rose bg-white overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-4">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-[12px] tracking-[0.28em] uppercase text-ink"
          >
            <span className="font-italiana text-base text-wine">—</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------- SERVICES GRID — refined -------------------- */
function ServicesGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-32">
      <Reveal
        variants={stagger()}
        className="grid lg:grid-cols-12 gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 items-end"
      >
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <div className="font-serif tracking-[0.28em] font-medium text-mute">
            — WHAT WE TAILOR
          </div>
        </motion.div>
        <motion.h2
          variants={blurUp}
          className="lg:col-span-7 font-serif-display text-[28px] sm:text-6xl lg:text-[64px] leading-[1.05] text-ink"
        >
          Tailoring,
          <span className="italic text-wine"> re-imagined</span>
          <br className="hidden lg:block" /> for the modern wardrobe.
        </motion.h2>
      </Reveal>

      <Reveal
        variants={stagger(0.05)}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rose border border-rose"
      >
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            variants={dropIn}
            className="bg-white"
          >
            <Link to={s.link} className="group block relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale">
                {/* Image */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute left-0 right-0 bottom-0 p-3 sm:p-6 lg:p-7 text-white">
                  {/* Title + Arrow (same line) */}
                  <h3 className="text-white flex items-center gap-2 font-serif-display text-[16px] sm:text-[22px] lg:text-[26px] leading-tight">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>

                  {/* Description (hover reveal like before) */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-[max-height] duration-700 ease-out hidden sm:block">
                    <p className="text-[13px] opacity-85 leading-relaxed mt-2 pr-3">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Divider */}
              </div>
            </Link>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}

/* -------------------- HORIZONTAL PROCESS -------------------- */
function HorizontalProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const lineW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      ref={ref}
      className="bg-ink text-white py-12 sm:py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal
          variants={stagger(0.05)}
          className="max-w-3xl mb-8 sm:mb-14 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="font-serif tracking-[0.28em] font-medium opacity-70"
          >
            — THE KAARIQ PROCESS
          </motion.div>
          <motion.h2
            variants={blurUp}
            className="text-white font-serif-display text-[28px] sm:text-4xl lg:text-6xl mt-3 sm:mt-4 leading-[1.05]"
          >
            From idea{" "}
            <span className="italic text-rose-soft">to final outfit,</span> in
            seven simple steps.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[13px] sm:text-sm opacity-75 mt-3 sm:mt-5 max-w-xl leading-relaxed"
          >
            A thoughtful process designed around you — with care, detail, and
            precision at every stage.
          </motion.p>
        </Reveal>

        {/* Mobile: horizontal snap carousel. Desktop: full grid with progress line */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-0 right-0 top-[42px] h-px bg-white/15"
            aria-hidden="true"
          />
          <motion.div
            className="hidden md:block absolute left-0 top-[42px] h-px bg-wine"
            style={{ width: lineW }}
            aria-hidden="true"
          />

          <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-5">
            {PROCESS.map((p, idx) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-ink border-2 border-white/25 flex items-center justify-center flex-shrink-0">
                  <span className="font-italiana text-[13px] text-rose-soft">
                    {p.n}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif-display text-[14px] leading-tight text-white">
                    {p.title}
                  </h3>
                  <p className="text-[10.5px] opacity-70 mt-0.5 leading-snug line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="hidden md:grid gap-y-12 gap-x-6 
  [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] relative"
          >
            {PROCESS.map((p, idx) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 80,
                  damping: 16,
                }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="flex flex-col items-start"
                >
                  <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-ink border-2 border-white/25 group-hover:border-wine flex items-center justify-center transition-colors">
                    <span className="font-italiana text-2xl text-rose-soft group-hover:text-wine transition-colors">
                      {p.n}
                    </span>
                  </div>

                  <h3 className="text-white font-serif-display text-xl mt-4">
                    {p.title}
                  </h3>

                  <p className="text-[12px] opacity-75 mt-2 leading-relaxed pr-2">
                    {p.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- COLLECTIONS EDITORIAL -------------------- */
function CollectionsEditorial() {
  const [imageIndexes, setImageIndexes] = useState(
    COLLECTIONS.map((c) => Math.floor(Math.random() * (c.images?.length || 1))),
  );

  useEffect(() => {
    const timers = COLLECTIONS.map((c, i) => {
      const interval = 2200 + Math.random() * 1800;

      return setInterval(() => {
        setImageIndexes((prev) => {
          const updated = [...prev];
          updated[i] = (updated[i] + 1) % c.images.length;
          return updated;
        });
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
      {/* HEADER (slightly tighter) */}
      <Reveal
        variants={stagger()}
        className="grid lg:grid-cols-12 gap-4 lg:gap-6 mb-6 lg:mb-10 items-end"
      >
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <div className="font-serif tracking-[0.28em] font-medium text-mute">
            — THE COLLECTIONS
          </div>
        </motion.div>

        <motion.h2
          variants={blurUp}
          className="lg:col-span-7 font-serif-display text-[26px] sm:text-3xl lg:text-[52px] leading-[1.05] text-ink"
        >
          Edits for every <span className="italic text-wine">occasion.</span>
        </motion.h2>

        <motion.div className="lg:col-span-2" />
      </Reveal>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
        {COLLECTIONS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className="snap-start flex-shrink-0 w-[65%] sm:w-[48%]"
          >
            <Link
              to={`/women/${c.tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden block aspect-[3/4]"
            >
              {c.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={c.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    imgIndex === imageIndexes[i] ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* 🔥 STRONGER BOTTOM FADE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute left-3 bottom-3 right-3 text-white">
                <h3 className="text-white font-serif-display text-base mt-1 leading-tight">
                  {c.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-5">
        {/* BIG HERO (compact height) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-12"
        >
          <Link
            to={`/women/${COLLECTIONS[0].tag.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative overflow-hidden block aspect-[16/6]" // 🔥 reduced height
          >
            {COLLECTIONS[0].images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={COLLECTIONS[0].title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  imgIndex === imageIndexes[0] ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* 🔥 STRONG BOTTOM OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute left-8 bottom-8 text-white max-w-lg">
              <h3 className="text-white font-serif-display text-[44px] mt-2 leading-tight">
                {COLLECTIONS[0].title}
              </h3>
              <p className="text-sm opacity-90 mt-3 max-w-lg">
                {COLLECTIONS[0].blurb}
              </p>
            </div>
          </Link>
        </motion.div>

        {/* TWO SMALL CARDS */}
        {COLLECTIONS.slice(1).map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="lg:col-span-6"
          >
            <Link
              to={`/women/${c.tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden block aspect-[4/2.8]" // 🔥 more compact
            >
              {c.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={c.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    imgIndex === imageIndexes[i + 1]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}

              {/* 🔥 OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute left-6 bottom-6 text-white">
                <h3 className="text-white font-serif-display text-[26px] mt-1 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm opacity-90 mt-3 max-w-lg">
                  {COLLECTIONS[0].blurb}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FABRIC BANNER -------------------- */
function FabricBanner() {
  return (
    <section className="relative h-[42vh] sm:h-[60vh] min-h-[300px] sm:min-h-[440px] overflow-hidden">
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease }}
        src={IMAGES.craft}
        alt="Boutique"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(50,56,43,0.4) 0%, rgba(50,56,43,0.55) 70%, rgba(50,56,43,0.7) 100%)",
        }}
      />
      <Reveal
        variants={stagger(0.1)}
        className="relative h-full flex items-center justify-center text-center px-4 sm:px-6"
      >
        <div className="max-w-3xl text-white">
          <motion.div
            variants={blurUp}
            className="font-serif tracking-[0.28em] font-medium opacity-80"
          >
            — AT THE BOUTIQUE
          </motion.div>
          <motion.h2
            variants={blurUp}
            className="text-white font-serif-display text-[26px] sm:text-4xl lg:text-6xl mt-3 sm:mt-4 leading-[1.1]"
          >
            A garment is never <span className="italic">finished</span> — only
            delivered.
          </motion.h2>
          <motion.p
            variants={blurUp}
            className="text-[13px] sm:text-sm opacity-90 mt-3 sm:mt-5 max-w-xl mx-auto"
          >
            Every Kaariq piece passes through 14 hands and 6 quality checks
            before it leaves the boutique.
          </motion.p>
          <motion.div variants={blurUp}>
            <Link
              to="/explore/gallery-and-lookbook"
              className="inline-flex items-center gap-2 mt-5 sm:mt-8 border border-white px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase hover:bg-white hover:text-ink transition-colors"
            >
              Our Designs & Details <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */
function FeaturesSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-32">
      <Reveal
        variants={stagger(0.05)}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.div
          variants={fadeUp}
          className="font-serif tracking-[0.28em] font-medium text-mute"
        >
          — WHY KAARIQ
        </motion.div>
        <motion.h2
          variants={blurUp}
          className="font-serif-display text-[28px] sm:text-4xl lg:text-5xl mt-2 sm:mt-3 text-ink"
        >
          Fabric. Fashion. <span className="italic text-wine">Fit.</span>{" "}
          Finesse.
        </motion.h2>
      </Reveal>
      <Reveal
        variants={stagger(0.04)}
        className="grid grid-cols-3 lg:grid-cols-3 gap-px bg-rose border border-rose"
      >
        {FEATURES.slice(0, 6).map((f, i) => {
          const Icon = featureIcons[i % featureIcons.length];
          return (
            <motion.div
              key={f.title}
              custom={i}
              variants={dropIn}
              className="bg-white p-3 sm:p-6 lg:p-8 hover:bg-blush transition-colors group"
            >
              <Icon
                className="w-4 h-4 sm:w-7 sm:h-7 text-wine group-hover:scale-110 transition-transform"
                strokeWidth={1.4}
              />
              <h3 className="font-serif-display text-[12px] sm:text-xl mt-2 sm:mt-5 text-ink leading-tight">
                {f.title}
              </h3>
              <p className="hidden sm:block text-[12px] sm:text-sm text-mute mt-1.5 sm:mt-2 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </Reveal>
    </section>
  );
}

/* -------------------- MEDIA TESTIMONIALS — split, dark, auto-scroll -------------------- */
function MediaTestimonials() {
  const [open, setOpen] = useState(null);
  const list = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]; // for seamless loop
  const [paused, setPaused] = useState(false);
  return (
    <section className="relative bg-ink-deep text-white overflow-hidden">
      {/* decorative SVG */}
      <svg
        className="absolute -left-32 top-20 w-[420px] h-[420px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="98" stroke="#c3bcb1" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="66" stroke="#c3bcb1" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="34" stroke="#c3bcb1" strokeWidth="0.3" />
      </svg>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-32 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* LEFT — heading + quote */}
        <Reveal
          variants={stagger(0.1)}
          className="lg:col-span-5 lg:sticky lg:top-32"
        >
          <motion.div
            variants={fadeUp}
            className="font-serif tracking-[0.28em] font-medium opacity-70"
          >
            — FROM OUR CUSTOMERS
          </motion.div>
          <motion.h2
            variants={blurUp}
            className="font-serif-display text-[28px] sm:text-4xl lg:text-[64px] leading-[1.05] mt-3 sm:mt-4"
          >
            In their own <span className="italic text-rose-soft">words.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 sm:mt-8 max-w-md">
            <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-wine-light" />
            <p className="font-serif-display text-base sm:text-xl lg:text-2xl mt-3 sm:mt-4 leading-snug opacity-90">
              &ldquo;Behind every garment is a story of trust — of fabric, fit,
              and the people who chose us to tell it.&rdquo;
            </p>
            <div className="mt-4 sm:mt-6 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase opacity-70">
              — The Kaariq boutique
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="hidden lg:flex items-center gap-3 mt-10 text-[11px] tracking-[0.22em] uppercase opacity-70"
          >
            <span>Hover to pause</span>
            <span className="w-12 h-px bg-white/30" />
            <span>Click to view</span>
          </motion.div>
        </Reveal>

        {/* RIGHT — auto-scrolling marquee column */}
        <div
          className="lg:col-span-7 relative h-[380px] sm:h-[520px] lg:h-[640px] overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-ink-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-ink-deep to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex flex-col gap-4 sm:gap-6"
            animate={{ y: paused ? undefined : ["0%", "-66.66%"] }}
            transition={{ duration: 36, ease: "linear", repeat: Infinity }}
          >
            {list.map((t, i) => (
              <motion.button
                key={`${t.name}-${i}`}
                whileHover={{ scale: 1.015 }}
                onClick={() => setOpen(t)}
                className="group flex gap-3 sm:gap-5 items-stretch text-left bg-white/[0.04] border border-white/10 hover:border-wine-light/60 backdrop-blur-sm p-3 sm:p-4 lg:p-5 transition-colors"
              >
                <div className="relative w-[96px] sm:w-[160px] lg:w-[180px] aspect-[3/4] overflow-hidden flex-shrink-0 bg-black">
                  <img
                    src={t.thumb}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[900ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.22em] uppercase bg-white/95 text-ink px-1.5 py-0.5">
                    {t.type === "video" ? "Video" : "Photo"}
                  </span>
                  <span className="absolute inset-0 m-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-all">
                    {t.type === "video" ? (
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </span>
                </div>
                <div className="flex-1 py-0.5 sm:py-1 flex flex-col min-w-0">
                  <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-wine-light" />
                  <p className="font-serif-display text-[13.5px] sm:text-[17px] lg:text-[19px] leading-snug mt-1.5 sm:mt-2 line-clamp-4 sm:line-clamp-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-2 sm:pt-3">
                    <div className="font-serif-display text-sm sm:text-base">
                      {t.name}
                    </div>
                    <div className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] uppercase opacity-70">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.94, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-ink flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-black">
                {open.type === "video" ? (
                  <iframe
                    src={open.src}
                    title={open.name}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={open.src}
                    alt={open.name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="bg-white p-6">
                <p className="font-serif-display text-xl text-ink">
                  &ldquo;{open.quote}&rdquo;
                </p>
                <div className="mt-3">
                  <div className="font-serif-display text-base">
                    {open.name}
                  </div>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-mute">
                    {open.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* -------------------- JOURNAL — minimal -------------------- */
function Journal() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-20 lg:py-32">
      <Reveal
        variants={stagger(0.05)}
        className="grid lg:grid-cols-12 gap-3 lg:gap-6 items-end mb-4 sm:mb-10 lg:mb-12"
      >
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <div className="font-serif tracking-[0.28em] font-medium text-mute">
            — JOURNAL
          </div>
        </motion.div>
        <motion.h2
          variants={blurUp}
          className="lg:col-span-7 font-serif-display text-[22px] sm:text-4xl lg:text-5xl text-ink"
        >
          Notes from the <span className="italic text-wine">boutique</span>.
        </motion.h2>
        <motion.div variants={fadeUp} className="lg:col-span-2 lg:text-right">
          <Link
            to="/explore/blog-and-fashion-news"
            className="link-underline text-[10px] sm:text-[12px] tracking-[0.22em] uppercase"
          >
            All articles →
          </Link>
        </motion.div>
      </Reveal>

      {/* Mobile: ultra-compact list, top 3 only */}
      <Reveal
        variants={stagger(0.04)}
        className="lg:hidden border-t border-rose"
      >
        {BLOGS.slice(0, 3).map((b, i) => (
          <motion.article key={b.title} custom={i} variants={fadeUp}>
            <Link
              to="/explore/blog-and-fashion-news"
              className="group flex items-center gap-3 py-2.5 border-b border-rose"
            >
              <div className="w-9 h-9 overflow-hidden bg-rose-pale rounded-full shrink-0">
                <img
                  src={b.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8.5px] tracking-[0.2em] uppercase text-mute leading-none">
                  {b.tag} · {b.date}
                </div>
                <h3 className="font-serif-display text-[13px] text-ink leading-snug line-clamp-1 mt-0.5">
                  {b.title}
                </h3>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-mute shrink-0" />
            </Link>
          </motion.article>
        ))}
      </Reveal>

      {/* Desktop: original full row */}
      <Reveal
        variants={stagger(0.04)}
        className="hidden lg:block border-t border-rose"
      >
        {BLOGS.map((b, i) => (
          <motion.article key={b.title} custom={i} variants={fadeUp}>
            <Link
              to="/explore/blog-and-fashion-news"
              className="group grid grid-cols-12 gap-6 items-center py-7 lg:py-8 border-b border-rose hover:bg-blush transition-colors px-2 lg:px-3"
            >
              <div className="col-span-1 font-italiana text-2xl lg:text-3xl text-wine">
                0{i + 1}
              </div>
              <div className="col-span-3 text-[11px] tracking-[0.22em] uppercase text-mute">
                {b.tag} · {b.date}
              </div>
              <h3 className="col-span-6 font-serif-display text-2xl lg:text-3xl text-ink leading-snug group-hover:text-wine transition-colors line-clamp-2">
                {b.title}
              </h3>
              <div className="col-span-2 flex items-center justify-end gap-3">
                <div className="w-12 h-12 lg:w-14 lg:h-14 overflow-hidden bg-rose-pale rounded-full shrink-0">
                  <img
                    src={b.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink group-hover:text-wine group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          </motion.article>
        ))}
      </Reveal>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-blush border-t border-rose">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-20 lg:py-28">
        <Reveal
          variants={stagger(0.05)}
          className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start"
        >
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="font-serif tracking-[0.28em] font-medium text-mute">
              — FAQ
            </div>
            <h2 className="font-serif-display text-[24px] sm:text-4xl lg:text-[56px] leading-[1.05] mt-2 sm:mt-4 text-ink">
              Questions, <span className="italic text-wine">answered</span>.
            </h2>
            <p className="hidden lg:block text-sm text-mute mt-5 leading-relaxed max-w-sm">
              Still curious? Our concierge is on WhatsApp every day, 10am–8pm
              IST.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="lg:col-span-8 border-t border-rose-soft"
          >
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-rose-soft">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full text-left flex items-start gap-3 py-3.5 sm:py-5 group"
                  >
                    <span className="font-italiana text-wine text-sm sm:text-lg pt-0.5 sm:pt-1 w-6 sm:w-8 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="flex-1 font-serif-display text-[14px] sm:text-[20px] lg:text-[22px] text-ink leading-snug pr-3">
                      {f.q}
                    </span>
                    <span
                      className={`text-ink text-xl sm:text-2xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="text-[12.5px] sm:text-[14px] text-mute leading-relaxed pl-9 sm:pl-11 pr-6 pb-4 sm:pb-5">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
