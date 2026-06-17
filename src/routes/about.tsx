import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
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
          "The story behind the lens — why I fell for photography, how I started, and the moments I've spent a decade learning to catch.",
      },
      { property: "og:title", content: "About — Jaspreet singh photography Studio" },
      {
        property: "og:description",
        content: "The story behind the lens — why I love photography and how I started.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200&q=80",
      },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { value: 12, suffix: "+", label: "Years behind the lens" },
  { value: 480, suffix: "+", label: "Projects delivered" },
  { value: 260, suffix: "", label: "Events covered" },
  { value: 38, suffix: "", label: "Cities travelled to" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, value, mv]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span style={{ color: "var(--mustard)" }}>{suffix}</span>
    </span>
  );
}

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <SiteNav />

      {/* intro */}
      <header className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-[1.1fr_0.9fr] md:pt-44">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45">
            About me
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            I make pictures that{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
              remember.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-black/60">
            I'm a photographer drawn to the in-between moments — the breath before
            a vow, the laugh that escapes mid-sentence, the light that only lasts a
            minute. My work lives somewhere between documentary honesty and quiet,
            cinematic restraint.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="overflow-hidden rounded-[2rem] bg-black/5"
          style={{ boxShadow: "0 50px 100px -50px rgba(0,0,0,0.45)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&q=80"
            alt="Portrait of the photographer"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
      </header>

      {/* story */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10">
          <Story
            n="01"
            title="Why I love photography"
            body="Photography is the closest thing I've found to slowing time. A single frame can hold a feeling long after the day has blurred. I love that a photograph asks nothing of the moment except to be noticed — and that years later, it gives everything back."
          />
          <Story
            n="02"
            title="How I started"
            body="It began with a borrowed film camera and a roll I was too nervous to finish. The first time I saw a developed frame that actually felt like something, I was hooked. I spent years assisting, shooting weddings on weekends, learning light the slow way — one mistake at a time."
          />
          <Story
            n="03"
            title="Where I am now"
            body="Today I work with couples, brands and magazines who want images that feel human rather than staged. Every project still feels like that first roll — a little nervous, a lot in love with the craft."
          />
        </div>
      </section>

      {/* stats */}
      <section className="bg-[oklch(0.11_0_0)] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-center text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
            A decade, by the numbers
          </p>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl font-black tracking-tight md:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[12px] leading-snug text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Story({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="flex gap-5"
    >
      <span className="font-display text-sm font-black" style={{ color: "var(--mustard)" }}>
        {n}
      </span>
      <div>
        <h2 className="font-serif text-2xl italic md:text-3xl">{title}</h2>
        <p className="mt-3 text-[14px] leading-relaxed text-black/60">{body}</p>
      </div>
    </motion.div>
  );
}
