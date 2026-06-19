import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About  — Jaspreet Singh Photography" },
      {
        name: "description",
        content:
          "The story behind the lens — why I fell for photography, how I started, where I am now, and the small pieces that make me, me.",
      },
      { property: "og:title", content: "About — Jaspreet Singh Photography" },
      {
        property: "og:description",
        content: "The story behind the lens — and the small pieces that make me, me.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80",
      },
    ],
  }),
  component: AboutPage,
});

const PIECES = [
  {
    n: "01",
    title: "Between Pages & Perfumes",
    body: "A second-hand bookshop and a half-empty bottle of oud — that's where most of my evenings end up.",
  },
  {
    n: "02",
    title: "A City That Knows My Story",
    body: "Toronto has watched me grow up twice — once as a kid, once again behind a camera.",
  },
  {
    n: "03",
    title: "The Great Escape",
    body: "A road trip with no fixed return is my favourite kind of reset. Mountains preferred.",
  },
  {
    n: "04",
    title: "Strings & Scribbles",
    body: "A small guitar I can't really play and a notebook full of half-finished thoughts.",
  },
  {
    n: "05",
    title: "Comfort on a Plate",
    body: "My mother's rajma-chawal could end most wars. It certainly ends most of my bad days.",
  },
  {
    n: "06",
    title: "If You Had to Know One Thing",
    body: "I'd rather feel something honest for a second than something perfect for an hour.",
  },
];

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      <AboutHero />
      <StoryIntro />

      {/* Pieces of Me */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/40">
            Off camera
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.98]">
            Pieces of{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              me.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-[13.5px] leading-[1.8] text-black/55">
            Seven small things that have very little to do with photography and everything to do
            with the way I see.
          </p>
        </div>

        <div className="grid gap-px bg-black/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background p-7 transition-colors duration-500 hover:bg-[oklch(0.975_0_0)] md:p-9"
            >
              <span
                className="font-display text-[10px] font-semibold tracking-[0.24em]"
                style={{ color: "var(--tomato)" }}
              >
                {p.n}
              </span>
              <h3 className="mt-4 font-serif text-[1.5rem] leading-[1.15]">{p.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.8] text-black/55">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StoryOutro />

      <SiteFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — balanced lower-left composition over a quiet looping video   */
/* ------------------------------------------------------------------ */

function AboutHero() {
  return (
    <header className="relative h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
      >
        <source src="src/assets/intro.mp4" type="video/mp4" />
      </video>

      {/* cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/65"
          >
            About Me — Jaspreet Singh
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-md text-[14px] leading-[1.85] text-white/70"
          >
            We capture the things we are too quiet to say, and trust the frame to hold them still.
          </motion.p>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 md:flex md:right-10"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-14 w-px bg-white/40" />
      </motion.div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Story Intro — True Multi-Column Bold Editorial Layout with Blur Reveal */
/* ------------------------------------------------------------------ */

function StoryIntro() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section className="relative z-10 bg-background px-6 py-32 md:py-52">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Modern Multi-Column Reading Grid Spread */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-24 items-start font-sans select-none">
          {/* Column One: The Set Up */}
          <div className="space-y-12">
            <RevealLine progress={scrollYProgress} range={[0.0, 0.18]}>
              <p className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-extrabold tracking-[-0.03em] leading-[1.3] text-black">
                I used to think important moments would announce themselves.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.18, 0.35]}>
              <p className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-light italic font-serif text-black/25 leading-none tracking-tight">
                They never do.
              </p>
            </RevealLine>
          </div>

          {/* Column Two: The Fragment Observations & Climax */}
          <div className="space-y-12">
            {/* Fragmented block list with an intense bold left border */}
            <div className="border-l-4 border-black pl-8 space-y-6 md:my-2">
              <RevealLine progress={scrollYProgress} range={[0.35, 0.52]}>
                <p className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-extrabold tracking-[-0.03em] leading-[1.3] text-black">
                  The important moments arrive quietly.
                </p>
              </RevealLine>
              <RevealLine progress={scrollYProgress} range={[0.52, 0.64]}>
                <p className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-bold tracking-[-0.02em] leading-none text-black/50">
                  A hand on a shoulder.
                </p>
              </RevealLine>

              <RevealLine progress={scrollYProgress} range={[0.62, 0.74]}>
                <p className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-bold tracking-[-0.02em] leading-none text-black/50">
                  A laugh that escapes too early.
                </p>
              </RevealLine>

              <RevealLine progress={scrollYProgress} range={[0.72, 0.84]}>
                <p className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-bold tracking-[-0.02em] leading-[1.3] text-black/50">
                  Someone looking away before they realise they're being seen.
                </p>
              </RevealLine>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <RevealLine progress={scrollYProgress} range={[0.84, 1.0]}>
          <p className="pt-4 text-[clamp(1.6rem,2.8vw,2.3rem)] font-extrabold tracking-[-0.03em] leading-[1.3] text-black">
            Photography became my way of{" "}
            <span className="italic font-serif font-light" style={{ color: "var(--tomato)" }}>
              paying attention.
            </span>
          </p>
        </RevealLine>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/* Story Outro — 100% Full Width Clean Sans-Serif Lyrics Reveal       */
/* ------------------------------------------------------------------ */

function StoryOutro() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });

  return (
    <>
      {/* Lyrics Section */}
      <section
        ref={ref}
        className="relative z-10 w-full bg-[#0a0a0a] px-6 py-40 text-white md:py-60"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Clean Sans-Serif Lyric Stack (Arial inspired) */}
          <div className="space-y-10 font-sans select-none tracking-[-0.02em]">
            <RevealLine progress={scrollYProgress} range={[0.0, 0.15]}>
              <p className="text-[clamp(1.6rem,3.2vw,2.5rem)] font-light text-white/40">
                And if you've made it this far,
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.15, 0.3]} className="pb-8">
              <p className="text-[clamp(1.6rem,3.2vw,2.5rem)] font-normal text-white/95">
                thank you for being curious.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.3, 0.45]}>
              <p className="text-[clamp(1.4rem,2.5vw,1.95rem)] font-light text-white/60 max-w-2xl mx-auto leading-[1.6]">
                The truth is, I still feel nervous before every shoot.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.45, 0.6]}>
              <p className="text-[clamp(1.4rem,2.5vw,1.95rem)] font-light text-white/60 max-w-2xl mx-auto leading-[1.6]">
                I still wonder if the light will show up.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.6, 0.75]} className="pb-8">
              <p className="text-[clamp(1.4rem,2.5vw,1.95rem)] font-light text-white/60 max-w-2xl mx-auto leading-[1.6]">
                I still get excited when a photograph becomes more than a photograph.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.75, 0.95]}>
              <p className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-white tracking-[-0.03em] leading-[1.3]">
                Maybe we'll make something worth remembering{" "}
                <span style={{ color: "var(--mustard)" }}>together.</span>
              </p>
            </RevealLine>
          </div>
        </div>
      </section>

      {/* Separate Section: Bold Let's Talk CTA */}
      <section className="relative z-10 w-full bg-background px-6 py-20 border-t border-black/[0.06] flex ">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <Link
            to="/contact"
            className="group flex w-full items-center justify-between bg-black px-8 py-5 text-[14px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-black/90 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-black/5"
          >
            <span>Let's Talk</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
/* ------------------------------------------------------------------ */
/* Refined Deep Blur Reveal Helper                                    */
/* ------------------------------------------------------------------ */

function RevealLine({
  progress,
  range,
  className = "",
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  children: React.ReactNode;
}) {
  // Starts out at a high 12px blur + very light visibility, then transitions into razor sharp dark focus
  const opacity = useTransform(progress, range, [0.08, 1]);
  const blurVal = useTransform(progress, range, [12, 0]);
  const filter = useTransform(blurVal, (b) => `blur(${b}px)`);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.div style={{ opacity, filter, y }} className={className}>
      {children}
    </motion.div>
  );
}
