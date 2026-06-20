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
      { title: "About — Jaspreet Singh Photography" },
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
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      <AboutHero />
      <StoryIntro />

      {/* Pieces of Me */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.34em] text-black/40"
          >
            Off camera
          </motion.p>
          <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
            Pieces of{" "}
            <span
              className="italic lowercase"
              style={{ color: "var(--tomato)", fontFamily: "var(--font-family-sans)", fontWeight: 300 }}
            >
              me.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-black/55">
            Six small things that have very little to do with photography and everything to do with
            the way I see.
          </p>
        </div>

        <div className="grid gap-px bg-black/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-[oklch(0.975_0_0)] md:p-10"
            >
              <span className="font-display text-2xl" style={{ color: "var(--tomato)" }}>
                {p.n}
              </span>
              <h3
                className="mt-4 text-[1.35rem] font-bold leading-[1.2]"
                style={{ fontFamily: "var(--font-family-sans)", letterSpacing: "-0.01em" }}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-black/55">{p.body}</p>
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
/* Hero — bold, balanced, cinematic                                    */
/* ------------------------------------------------------------------ */

function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const word = "ABOUT";

  return (
    <header ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.video
        style={{ scale: videoScale }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </motion.video>

      {/* cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45" />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 flex h-full flex-col justify-end"
      >
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/65"
          >
            Jaspreet Singh — Photographer
          </motion.p>

          {/* Giant Anton word, masked rise */}
          <h1 className="font-display uppercase leading-[0.82] tracking-tight text-white">
            <span className="flex flex-wrap">
              {word.split("").map((ch, i) => (
                <span key={`${ch}-${i}`} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-[clamp(4.5rem,18vw,15rem)]"
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-md text-[15px] leading-[1.9] text-white/70"
          >
            We capture the things we are too quiet to say, and trust the frame to hold them still.
          </motion.p>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
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
/* Story Intro — narrative blur-reveal, balanced editorial spread      */
/* ------------------------------------------------------------------ */

function StoryIntro() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  return (
    <section className="relative z-10 bg-background px-6 py-32 md:py-48">
      <div ref={ref} className="mx-auto max-w-5xl">
        <RevealLine progress={scrollYProgress} range={[0.0, 0.12]} className="mb-16">
          <p
            className="text-[clamp(1.6rem,2.4vw,2.1rem)] font-light leading-[1.5] text-black"
            style={{ fontFamily: "var(--font-family-sans)" }}
          >
            My name is{" "}
            <span className="font-display text-[1.1em] align-baseline" style={{ color: "var(--tomato)" }}>
              Jaspreet.
            </span>
          </p>
        </RevealLine>

        <div className="space-y-10 select-none" style={{ fontFamily: "var(--font-family-sans)" }}>
          <RevealLine progress={scrollYProgress} range={[0.1, 0.26]}>
            <p className="text-[clamp(1.7rem,3.2vw,2.8rem)] font-bold leading-[1.25] tracking-[-0.02em] text-black">
              I used to think important moments would announce themselves.
            </p>
          </RevealLine>

          <RevealLine progress={scrollYProgress} range={[0.26, 0.38]}>
            <p className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] text-black/15">
              They never do.
            </p>
          </RevealLine>

          <div className="border-l-2 pl-8 md:pl-12 space-y-5" style={{ borderColor: "var(--tomato)" }}>
            <RevealLine progress={scrollYProgress} range={[0.4, 0.54]}>
              <p className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold leading-[1.25] tracking-[-0.02em] text-black">
                The important moments arrive quietly.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.52, 0.62]}>
              <p className="text-[clamp(1.1rem,1.9vw,1.6rem)] font-medium leading-[1.4] text-black/50">
                A hand on a shoulder.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.6, 0.7]}>
              <p className="text-[clamp(1.1rem,1.9vw,1.6rem)] font-medium leading-[1.4] text-black/50">
                A laugh that escapes too early.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.68, 0.8]}>
              <p className="text-[clamp(1.1rem,1.9vw,1.6rem)] font-medium leading-[1.4] text-black/50">
                Someone looking away before they realise they're being seen.
              </p>
            </RevealLine>
          </div>

          <RevealLine progress={scrollYProgress} range={[0.82, 1.0]} className="pt-6">
            <p className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.2] tracking-[-0.02em] text-black">
              Photography became my way of{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--tomato)", fontWeight: 300 }}
              >
                paying attention.
              </span>
            </p>
          </RevealLine>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Story Outro — dark cinematic lyric reveal + bold CTA               */
/* ------------------------------------------------------------------ */

function StoryOutro() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.3"],
  });

  return (
    <>
      <section ref={ref} className="relative z-10 w-full bg-[#0a0a0a] px-6 py-44 text-white md:py-64">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div
            className="space-y-12 select-none tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-family-sans)" }}
          >
            <RevealLine progress={scrollYProgress} range={[0.0, 0.14]}>
              <p className="text-[clamp(1.4rem,3vw,2.4rem)] font-light text-white/45">
                And if you've made it this far,
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.12, 0.26]} className="pb-6">
              <p className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] text-white">
                thank you for being curious.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.3, 0.44]}>
              <p className="mx-auto max-w-2xl text-[clamp(1.3rem,2.4vw,1.9rem)] font-light leading-[1.6] text-white/60">
                The truth is, I still feel nervous before every shoot.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.44, 0.58]}>
              <p className="mx-auto max-w-2xl text-[clamp(1.3rem,2.4vw,1.9rem)] font-light leading-[1.6] text-white/60">
                I still wonder if the light will show up.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.58, 0.72]} className="pb-6">
              <p className="mx-auto max-w-2xl text-[clamp(1.3rem,2.4vw,1.9rem)] font-light leading-[1.6] text-white/60">
                I still get excited when a photograph becomes more than a photograph.
              </p>
            </RevealLine>

            <RevealLine progress={scrollYProgress} range={[0.74, 0.95]}>
              <p className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] text-white">
                Maybe we'll make something worth remembering{" "}
                <span className="italic lowercase" style={{ color: "var(--mustard)", fontFamily: "var(--font-family-sans)", fontWeight: 300 }}>
                  together.
                </span>
              </p>
            </RevealLine>
          </div>
        </div>
      </section>

      {/* Bold Let's Talk CTA */}
      <section className="relative z-10 flex w-full justify-center border-t border-black/[0.06] bg-background px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl text-center"
        >
          <p className="mb-8 text-[15px] leading-relaxed text-black/55">
            If you've read this far, we probably already get along.
          </p>
          <Link
            to="/contact"
            className="group inline-flex w-full max-w-md items-center justify-between bg-black px-9 py-6 font-display text-2xl uppercase tracking-tight text-white transition-all duration-300 hover:bg-black/90"
          >
            <span>Let's Talk</span>
            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Blur Reveal Helper                                                  */
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
  const opacity = useTransform(progress, range, [0.08, 1]);
  const blurVal = useTransform(progress, range, [12, 0]);
  const filter = useTransform(blurVal, (b) => `blur(${b}px)`);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <motion.div style={{ opacity, filter, y }} className={className}>
      {children}
    </motion.div>
  );
}
