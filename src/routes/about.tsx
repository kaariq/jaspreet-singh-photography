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
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
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
            About — Jaspreet Singh
          </motion.p>

          <h1 className="max-w-4xl font-serif text-[clamp(3rem,8.5vw,8rem)] font-light leading-[0.92] text-white">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              I make pictures
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              that <span className="italic" style={{ color: "var(--mustard)" }}>remember.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-md text-[14px] leading-[1.85] text-white/70"
          >
            Documentary honesty. Quiet cinema. Moments that feel lived rather than staged.
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
/* Reveal helper — lines that focus from blur as they enter view       */
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
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [22, 0]);
  const blur = useTransform(progress, range, [8, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.p style={{ opacity, y, filter }} className={className}>
      {children}
    </motion.p>
  );
}

/* ------------------------------------------------------------------ */
/* Story intro — "My name is Jaspreet…"                                */
/* ------------------------------------------------------------------ */

function StoryIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.65"],
  });

  return (
    <section className="relative z-10 bg-background px-6 py-32 md:py-48">
      <div ref={ref} className="mx-auto max-w-3xl">
        <p className="mb-16 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/40">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--mustard)" }} />
          The quiet part
        </p>

        <div className="space-y-12 font-serif text-[clamp(1.7rem,3.6vw,2.6rem)] font-light leading-[1.35] tracking-tight text-black">
          <RevealLine progress={scrollYProgress} range={[0.0, 0.16]}>
            My name is{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              Jaspreet.
            </span>
          </RevealLine>

          <RevealLine progress={scrollYProgress} range={[0.14, 0.3]}>
            I used to think important moments would announce themselves.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.28, 0.42]}
            className="italic text-black/70"
          >
            They never do.
          </RevealLine>

          <RevealLine progress={scrollYProgress} range={[0.4, 0.56]}>
            The important moments arrive quietly.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.54, 0.74]}
            className="text-[clamp(1.4rem,2.8vw,2rem)] leading-[1.5] text-black/75"
          >
            A hand on a shoulder.
            <br />
            A laugh that escapes too early.
            <br />
            Someone looking away before they realise they're being seen.
          </RevealLine>

          <RevealLine progress={scrollYProgress} range={[0.74, 0.92]}>
            Photography became my way of{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              paying attention.
            </span>
          </RevealLine>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Story outro — "If you've made it this far…" + CTA                   */
/* ------------------------------------------------------------------ */

function StoryOutro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.7"],
  });

  return (
    <section className="relative z-10 bg-[#0a0a0a] px-6 py-36 text-white md:py-52">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <div className="space-y-14 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-light leading-[1.4] tracking-tight">
          <RevealLine progress={scrollYProgress} range={[0.0, 0.18]} className="text-white">
            If you've made it this far, thank you for being curious.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.2, 0.36]}
            className="text-white/85"
          >
            The truth is, I still feel nervous before every shoot.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.38, 0.54]}
            className="text-white/85"
          >
            I still wonder if the light will show up.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.56, 0.72]}
            className="text-white/85"
          >
            I still get excited when a photograph becomes more than a photograph.
          </RevealLine>

          <RevealLine
            progress={scrollYProgress}
            range={[0.74, 0.92]}
            className="italic"
            >
            Maybe we'll make something worth remembering{" "}
            <span style={{ color: "var(--mustard)" }}>together.</span>
          </RevealLine>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border-b border-white/40 pb-2 text-[15px] tracking-wide transition hover:border-[var(--mustard)] hover:text-[var(--mustard)]"
          >
            Let's Talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
