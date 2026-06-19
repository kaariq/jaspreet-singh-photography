import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

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

const BELIEFS = [
  "Perfect is overrated.",
  "People matter more than poses.",
  "The edit shouldfeel invisible.",
  "Film teaches patience.",
  "A photograph should feel like a memory.",
];

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
      {/* intro */}
      <header className="relative h-[100svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop playsInline>
          <source src="src/assets/intro.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="px-6">
            <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-white/70">About</p>

            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.88] text-white">
              I make
              <br />
              pictures that
              <br />
              <span className="italic">remember.</span>
            </h1>

            <p className="mx-auto mt-10 max-w-lg text-lg leading-relaxed text-white/75">
              Documentary honesty. Quiet cinema.
              <br />
              Moments that feel lived rather than staged.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-12 w-[1px] bg-white/40" />
        </div>
      </header>
      {/* Pieces of Me */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            Off camera
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.6vw,3.4rem)] leading-[0.95]">
            Pieces of{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              me.
            </span>
          </h2>
          <p className="mt-4 text-[13px] leading-relaxed text-black/55">
            Seven small things that have very little to do with photography and everything to do
            with the way I see.
          </p>
        </div>

        <div className="grid gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white p-6 transition hover:bg-[oklch(0.98_0_0)] md:p-7"
            >
              <span
                className="font-display text-[10px] font-semibold tracking-[0.22em]"
                style={{ color: "var(--tomato)" }}
              >
                {p.n}
              </span>
              <h3 className="mt-3 font-serif text-[1.35rem] leading-tight">{p.title}</h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black/55">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function StorySection({
  eyebrow,
  title,
  accent,
  body,
  image,
  flip,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body: string[];
  image: string;
  flip: boolean;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 md:gap-16 ${
          flip ? "md:grid-cols-[0.9fr_1.1fr]" : "md:grid-cols-[1.1fr_0.9fr]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className={flip ? "md:order-2" : ""}
        >
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            {eyebrow}
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[0.95]">
            {title}{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              {accent}.
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-[13.5px] leading-[1.75] text-black/65">
            {body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className={`overflow-hidden bg-black/5 ${flip ? "md:order-1" : ""}`}
          style={{ boxShadow: "0 40px 90px -55px rgba(0,0,0,0.4)" }}
        >
          <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
