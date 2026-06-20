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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaspreet Singh — Toronto Portrait, Wedding & Editorial Photographer" },
      {
        name: "description",
        content:
          "Toronto-based photographer crafting portrait, wedding, editorial and brand stories through a quietly cinematic lens. View selected work and get in touch.",
      },
      {
        name: "keywords",
        content:
          "Toronto photographer, wedding photographer Toronto, portrait photographer, editorial photography, brand photography, Jaspreet Singh",
      },
      { property: "og:title", content: "Jaspreet Singh — Toronto Photographer" },
      {
        property: "og:description",
        content:
          "Portrait, wedding, editorial and brand stories — through a singular, quietly cinematic lens.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Jaspreet Singh — Toronto Photographer" },
      {
        name: "twitter:description",
        content: "Portrait, wedding, editorial and brand stories — Toronto, worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jaspreet Singh Photography",
          image: "/og-home.jpg",
          priceRange: "$$$",
          areaServed: ["Toronto", "Canada", "Worldwide"],
          serviceType: [
            "Wedding Photography",
            "Portrait Photography",
            "Editorial Photography",
            "Brand Photography",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toronto",
            addressRegion: "ON",
            addressCountry: "CA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------------- Hero ---------------- */

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-32"
    >
      <HoverImageTrail targetRef={sectionRef} safeZoneRef={contentRef} />

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-1/2 top-24 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-black/65 backdrop-blur-md"
      >
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ backgroundColor: "var(--tomato)" }}
        />
        Now booking · Sept – Dec '26
      </motion.div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <h1 className="font-display uppercase leading-[0.85] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-[clamp(3.4rem,9vw,8rem)]"
          >
            More than
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block text-[clamp(3.6rem,9vw,8.5rem)]"
          >
            <span
              className="italic lowercase"
              style={{
                color: "var(--tomato)",
                fontFamily: "var(--font-family-sans)",
                fontWeight: 300,
              }}
            >
              a photograph
            </span>
            <span className="text-black/25">.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-lg text-[15px] leading-[1.9] text-black/60"
        >
          Photography has always been my way of holding onto moments. Through light, emotion, and
          human connection, I create images that feel as meaningful years from now as they do today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-10 flex items-center gap-3"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-white transition hover:bg-black/85"
          >
            <span className="text-[13px] font-medium tracking-wide">Start your story</span>

            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>

          <a
            href="/work"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-black/80 backdrop-blur-md transition hover:bg-white"
          >
            See recent work
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45"
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
    const id = window.setTimeout(() => {
      setRevealed(true);
    }, 150);

    return () => clearTimeout(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <Hero />
      <div className="my-20">
        <Partners />
      </div>
      <VideoReveal />
      <div className="my-56">
        <ScrollTextReveal />
      </div>
      <div className="my-76">
        <SelectedWork />
      </div>
      <GearsCarousel />
      <ServicesStack />
      <Testimonials />
      <FaqFloating />
      <SiteFooter />
    </main>
  );
}
