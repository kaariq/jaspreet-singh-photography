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
    title: "Still on the Horizon",
    body: "Iceland in winter, a book with my name on the spine, and one really still morning by the sea.",
  },
  {
    n: "07",
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
      <header className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-12 pt-28 md:grid-cols-[1.1fr_0.9fr] md:pt-36">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            About me
          </p>
          <h1 className="font-serif text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.95]">
            I make pictures that{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              remember.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-black/60">
            I'm a photographer drawn to the in-between moments — the breath before
            a vow, the laugh that escapes mid-sentence, the light that only lasts
            a minute. My work lives somewhere between documentary honesty and
            quiet, cinematic restraint.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="overflow-hidden bg-black/5"
          style={{ boxShadow: "0 40px 90px -50px rgba(0,0,0,0.45)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&q=80"
            alt="Portrait of the photographer"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
      </header>

      {/* monologue video */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
              A short monologue
            </p>
            <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
              In my own{" "}
              <span className="italic" style={{ color: "var(--tomato)" }}>
                words.
              </span>
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-black/40 md:block">
            01:42
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group relative aspect-video w-full overflow-hidden bg-black"
          style={{ boxShadow: "0 50px 100px -55px rgba(0,0,0,0.5)" }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&q=80"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-walking-with-a-camera-7388/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button className="grid h-16 w-16 place-items-center bg-white text-black transition group-hover:scale-110">
              <Play className="h-5 w-5 fill-current" />
            </button>
          </div>
          <p className="absolute bottom-4 left-4 max-w-md font-serif text-base italic text-white/90 md:text-lg">
            "I don't make pictures to remember what people looked like — I make
            them to remember what it felt like to stand there."
          </p>
        </motion.div>
      </section>

      {/* Story 1 — Why */}
      <StorySection
        eyebrow="Chapter one"
        title="Why I love"
        accent="photography"
        body={[
          "Photography is the closest thing I've found to slowing time. A single frame can hold a feeling long after the day has blurred into the next.",
          "I love that a photograph asks nothing of the moment except to be noticed. The held breath, the soft glance, the half-smile someone didn't even realise they made — these are the things I keep returning for.",
          "Years later, those frames give everything back. That's the quiet contract I make with every shoot: notice well now, so it can be felt again later.",
        ]}
        image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80"
        flip={false}
      />

      {/* Story 2 — How */}
      <StorySection
        eyebrow="Chapter two"
        title="How I"
        accent="started"
        body={[
          "It began with a borrowed film camera and a roll I was too nervous to finish. I shot mostly empty streets and my mother's plants for a month before I worked up the courage to point it at a person.",
          "The first time I saw a developed frame that actually felt like something, I was hooked. I spent the next few years assisting older photographers on weekends — carrying lights, watching how they spoke to people, learning the slow way.",
          "Most of what I know about light, I learned by being wrong about it first. That's still true today.",
        ]}
        image="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80"
        flip
      />

      {/* Story 3 — Where */}
      <StorySection
        eyebrow="Chapter three"
        title="Where I am"
        accent="now"
        body={[
          "Today I work with couples, brands, and magazines who want images that feel human rather than staged. I'm based in Toronto, but the work takes me wherever the story is.",
          "I shoot a mix of digital and 35mm film, depending on what the moment is asking for. I edit my own work — every frame, every time — because the edit is just as much the photograph as the shutter.",
          "Every new project still feels a little like that first roll: a little nervous, a lot in love with the craft.",
        ]}
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
        flip={false}
      />

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
            Seven small things that have very little to do with photography and
            everything to do with the way I see.
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
              <h3 className="mt-3 font-serif text-[1.35rem] leading-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-black/55">
                {p.body}
              </p>
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
          <img
            src={image}
            alt=""
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
