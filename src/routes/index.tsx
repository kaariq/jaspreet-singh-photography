import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { HoverImageTrail } from "@/components/HoverImageTrail";
import { SiteNav } from "@/components/SiteNav";
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
      { title: "JS Lens Studio — Photography" },
      {
        name: "description",
        content:
          "A photography studio crafting portraits, editorial, and brand stories — through a singular, quietly cinematic lens.",
      },
      { property: "og:title", content: "JS Lens Studio — Photography" },
      {
        property: "og:description",
        content: "Photography that tells your story. Book a session today.",
      },
    ],
  }),
  component: Index,
});

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
        className="absolute left-1/2 top-24 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-black/65 backdrop-blur-md"
        style={{ boxShadow: "0 10px 30px -12px rgba(0,0,0,0.15)" }}
      >
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ backgroundColor: "var(--tomato)" }}
        />
        Now booking · Sept – Dec '26
      </motion.div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="font-display font-black leading-[0.9] tracking-[-0.05em]">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="block text-[clamp(2.7rem,9.5vw,9rem)]"
          >
            More Than
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.78, ease: [0.2, 0.7, 0.2, 1] }}
            className="block text-[clamp(2.9rem,10vw,9.5rem)]"
          >
            <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
              a Photograph
            </span>
            <span className="text-black/25">.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-9 max-w-md text-[14px] leading-relaxed text-black/55 md:text-[15px]"
        >
          Photography has always been my way of holding onto moments. Through
          light, emotion, and human connection, I create images that feel as
          meaningful years from now as they do today.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-10 flex items-center gap-3"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-white transition hover:bg-black/85"
            style={{ boxShadow: "0 18px 40px -18px rgba(0,0,0,0.5)" }}
          >
            <span className="text-[13px] font-medium">Start Your Story</span>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="/work"
            className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-[13px] font-medium text-black/80 backdrop-blur-md transition hover:bg-white"
          >
            See Recent Work
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45"
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
          <SiteNav />
          <Hero />
          <Partners />
          <ScrollTextReveal />
          <VideoReveal />
          <GearsCarousel />
          <SelectedWork />
          <ServicesStack />
          <Testimonials />
          <SectionFade from="oklch(0.11 0 0)" to="oklch(0.99 0 0)" height={90} />
          <FaqFloating />
          <SectionFade from="oklch(0.99 0 0)" to="oklch(0.11 0 0)" height={90} />
          <SiteFooter />
        </>
      )}
    </main>
  );
}
