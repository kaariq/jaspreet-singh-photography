import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Asterisk } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollRibbon } from "@/components/ScrollRibbon";
import { HoverImageTrail } from "@/components/HoverImageTrail";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Through My Lens — Photography Studio" },
      {
        name: "description",
        content:
          "A photography studio crafting portraits, editorial, and brand stories — through a singular lens.",
      },
      { property: "og:title", content: "Through My Lens — Photography Studio" },
      {
        property: "og:description",
        content: "Photography that tells your story. Book a session today.",
      },
    ],
  }),
  component: Index,
});

/* ---------------- Nav ---------------- */
function Nav() {
  const links = ["Work", "Studio", "Journal", "Contact"];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed left-1/2 top-5 z-40 -translate-x-1/2"
    >
      <div
        className="flex items-center gap-1 rounded-full px-2 py-2 backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(0,0,0,0.78)",
          boxShadow:
            "0 20px 50px -20px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.08) inset",
        }}
      >
        <div className="flex items-center gap-2 pl-3 pr-5 text-white">
          <span
            className="grid h-7 w-7 place-items-center rounded-md"
            style={{ backgroundColor: "var(--mustard)" }}
          >
            <Camera className="h-4 w-4 text-black" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Lensera
          </span>
        </div>
        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="rounded-full px-3.5 py-1.5 text-[13px] text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-black transition hover:bg-white/90"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}

/* ---------------- Hero (headings + CTA, image trail on hover) ---------------- */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-32"
    >
      <HoverImageTrail targetRef={sectionRef} />

      {/* Floating "available" pill */}
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute left-1/2 top-24 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/65 backdrop-blur-md"
        style={{ boxShadow: "0 10px 30px -12px rgba(0,0,0,0.15)" }}
      >
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ backgroundColor: "var(--tomato)" }}
        />
        Now booking · Sept – Dec '26
      </motion.div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45"
        >
          <span className="h-px w-8 bg-black/25" />
          Photography Studio · Est. 2014
          <span className="h-px w-8 bg-black/25" />
        </motion.p>

        <h1 className="font-display font-black leading-[0.9] tracking-[-0.05em]">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="block text-[clamp(2.7rem,9.5vw,9rem)]"
          >
            through my
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.78, ease: [0.2, 0.7, 0.2, 1] }}
            className="block text-[clamp(2.7rem,9.5vw,9rem)]"
          >
            <span className="font-serif italic font-light" style={{ color: "var(--tomato)" }}>
              lens
            </span>
            <span className="text-black/25">.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-9 max-w-lg text-base leading-relaxed text-black/55 md:text-lg"
        >
          A small studio crafting quietly cinematic portraits, editorial
          stories, and brand campaigns — composed to age well.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-11 flex items-center gap-3"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-white transition hover:bg-black/85"
            style={{ boxShadow: "0 18px 40px -18px rgba(0,0,0,0.5)" }}
          >
            <span className="text-sm font-medium">Book a call</span>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#work"
            className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-black/80 backdrop-blur-md transition hover:bg-white"
          >
            View work
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45"
        >
          {["Portrait", "Editorial", "Brand", "Wedding"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Asterisk
                className="h-3 w-3"
                style={{ color: "var(--mustard)" }}
              />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>

    </section>
  );
}

/* ---------------- Video section: peek → fullscreen frame on scroll ---------------- */
function VideoReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Phases:
  // 0.00 - 0.30 : tiny landscape strip grows into framed video (peek -> full)
  // 0.30 - 0.65 : holds fullscreen
  // 0.65 - 1.00 : shrinks back / scrolls away
  const widthVw = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [22, 100, 100, 90],
  );
  const heightVh = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [14, 100, 100, 70],
  );
  const radius = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [22, 0, 0, 18],
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [0, 0, 1],
  );
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.18],
    [1, 0],
  );

  const spring = { stiffness: 120, damping: 22, mass: 0.6 };
  const sWidth = useSpring(widthVw, spring);
  const sHeight = useSpring(heightVh, spring);
  const sRadius = useSpring(radius, spring);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden bg-black"
          style={{
            width: useMotionTemplate`${sWidth}vw`,
            height: useMotionTemplate`${sHeight}vh`,
            borderRadius: useMotionTemplate`${sRadius}px`,
            boxShadow: "0 40px 100px -30px rgba(0,0,0,0.45)",
          }}
        >
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />

          {/* Mustard badge — visible while in frame mode */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute left-6 top-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black"
          >
            <span
              className="rounded-full px-3 py-1"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              Reel '26
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute bottom-6 right-6 text-right text-white"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Featured film
            </p>
            <p className="font-display text-2xl font-semibold">
              Quiet Interiors — A Reel
            </p>
          </motion.div>
        </motion.div>

        {/* Caption shown while video is still a small peek */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-[18vh] flex flex-col items-center text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Scroll to frame the shot
          </p>
          <p className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            A reel, framed by scroll.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = ["Portraits", "Editorial", "Weddings", "Brand", "Lifestyle", "Travel"];
  return (
    <section
      className="relative z-10 border-y border-black/10 bg-white/70 py-6 backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6">
        {items.map((i, idx) => (
          <span key={i} className="font-display text-2xl tracking-tight text-black/80">
            {i}{" "}
            <span style={{ color: idx % 2 ? "var(--tomato)" : "var(--mustard)" }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */
function Work() {
  const shots = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&q=80",
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80",
  ];
  return (
    <section id="work" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">
            selected <span style={{ color: "var(--tomato)" }}>work.</span>
          </h2>
          <a href="#all" className="text-sm underline underline-offset-4">
            view archive
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shots.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-black/5"
              style={{
                aspectRatio: i % 3 === 1 ? "3/4" : "4/5",
                boxShadow: "0 30px 60px -30px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={src}
                alt={`Photograph ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer id="book" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
          let's create
          <br />
          <span className="italic font-light" style={{ color: "var(--tomato)" }}>
            something timeless.
          </span>
        </h2>
        <a
          href="mailto:hello@lensera.studio"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:bg-black/85"
          style={{ boxShadow: "0 25px 50px -20px rgba(0,0,0,0.45)" }}
        >
          Book a call
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <p className="mt-16 text-xs text-black/50">
          © {new Date().getFullYear()} Lensera Studio
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
function Index() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setRevealed(true), 200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      {revealed && (
        <>
          <div className="canvas-grid" />
          <ScrollRibbon />
          <Nav />
          <Hero />
          <VideoReveal />
          <Marquee />
          <Work />
          <Footer />
        </>
      )}
    </main>
  );
}
