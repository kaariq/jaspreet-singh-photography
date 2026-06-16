import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Asterisk } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollRibbon } from "@/components/ScrollRibbon";
import { HoverImageTrail } from "@/components/HoverImageTrail";
import { Partners } from "@/components/Partners";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { VideoReveal } from "@/components/VideoReveal";
import { GearsCarousel } from "@/components/GearsCarousel";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesStack } from "@/components/ServicesStack";
import { Testimonials } from "@/components/Testimonials";
import { FaqFloating } from "@/components/FaqFloating";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionFade } from "@/components/SectionFade";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Lens — Photography Studio" },
      {
        name: "description",
        content:
          "A photography studio crafting portraits, editorial, and brand stories — through a singular lens.",
      },
      { property: "og:title", content: "JS Lens — Photography Studio" },
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
  const links = ["Work", "Services", "Words", "FAQ"];
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
            JS Lens
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

/* ---------------- Hero ---------------- */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-32"
    >
      <HoverImageTrail targetRef={sectionRef} />

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
              <Asterisk className="h-3 w-3" style={{ color: "var(--mustard)" }} />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
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
          <Partners />
          <ScrollTextReveal />
          <VideoReveal />
          <GearsCarousel />
          <SelectedWork />
          <ServicesStack />
          <SectionFade from="oklch(0.99 0 0)" to="oklch(0.13 0 0)" />
          <Testimonials />
          <SectionFade from="oklch(0.13 0 0)" to="oklch(0.99 0 0)" />
          <FaqFloating />
          <SectionFade from="oklch(0.99 0 0)" to="oklch(0.11 0 0)" />
          <SiteFooter />
        </>
      )}
    </main>
  );
}
