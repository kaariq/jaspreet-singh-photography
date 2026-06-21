import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { a, b, c, d, e } from "@/assets/images";

const PROJECTS = [
  {
    src: a,
    title: "Quiet Interiors",
    cat: "Editorial",
    year: "'26",
  },
  {
    src: b,
    title: "Maren",
    cat: "Portrait",
    year: "'26",
  },
  {
    src: c,
    title: "Vows in June",
    cat: "Wedding",
    year: "'25",
  },
  {
    src: d,
    title: "Atelier No. 4",
    cat: "Brand",
    year: "'25",
  },
  {
    src: e,
    title: "Northbound",
    cat: "Travel",
    year: "'24",
  },
];

export function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // drive index from scroll, but allow manual override via swipe/buttons
  const scrollIndex = useTransform(scrollYProgress, (v) => {
    const i = Math.round(v * (PROJECTS.length - 1));
    return Math.min(PROJECTS.length - 1, Math.max(0, i));
  });

  useEffect(() => {
    return scrollIndex.on("change", (v) => setIndex(v));
  }, [scrollIndex]);

  const go = (dir: 1 | -1) => {
    setIndex((p) => Math.min(PROJECTS.length - 1, Math.max(0, p + dir)));
  };

  return (
    <section
      id="images"
      ref={ref}
      className="relative"
      style={{ height: `${PROJECTS.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 pt-16 md:pt-20">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
                Archive · 2024 — 2026
              </p>
              <h2 className="font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-6xl">
                selected{" "}
                <span className="italic" style={{ color: "var(--tomato)" }}>
                  images jpg{" "}
                </span>
              </h2>
            </div>
            <p className="hidden text-right text-[12px] text-black/55 md:block">
              {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-6">
          <div className="relative h-[62vh] w-full max-w-5xl" style={{ perspective: 1600 }}>
            {PROJECTS.map((p, i) => (
              <Card
                key={p.title}
                project={p}
                i={i}
                active={index}
                total={PROJECTS.length}
                onSwipe={go}
              />
            ))}
          </div>

          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            disabled={index === 0}
            className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/80 text-black backdrop-blur-md transition hover:bg-white disabled:opacity-30 md:left-10 lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            aria-label="Next"
            onClick={() => go(1)}
            disabled={index === PROJECTS.length - 1}
            className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/80 text-black backdrop-blur-md transition hover:bg-white disabled:opacity-30 md:right-10 lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* dots */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 28 : 8,
                backgroundColor: i === index ? "var(--tomato)" : "rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  project,
  i,
  active,
  total,
  onSwipe,
}: {
  project: (typeof PROJECTS)[0];
  i: number;
  active: number;
  total: number;
  onSwipe: (d: 1 | -1) => void;
}) {
  const offset = i - active;
  const x = useMotionValue(0);

  // settle whenever active changes
  useEffect(() => {
    const c = animate(x, 0, { type: "spring", stiffness: 220, damping: 28 });
    return () => c.stop();
  }, [active, x]);

  const visible = Math.abs(offset) <= 2;

  return (
    <motion.article
      drag={offset === 0 ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      onDragEnd={(_, info) => {
        if (info.offset.x < -80 || info.velocity.x < -400) onSwipe(1);
        else if (info.offset.x > 80 || info.velocity.x > 400) onSwipe(-1);
      }}
      style={{
        x,
        zIndex: total - Math.abs(offset),
        pointerEvents: offset === 0 ? "auto" : "none",
      }}
      animate={{
        x: offset * 60,
        scale: 1 - Math.abs(offset) * 0.06,
        rotateY: offset * -6,
        opacity: visible ? (offset === 0 ? 1 : 0.55) : 0,
        filter: offset === 0 ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 26 }}
      className="absolute inset-0 cursor-grab overflow-hidden  active:cursor-grabbing"
    >
      <img
        src={project.src}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.15) 45%, transparent)",
        }}
      />
      <div className="absolute left-6 top-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
        {String(i + 1).padStart(2, "0")} / {project.cat}
      </div>
      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
        <span
          className="grid h-14 w-14 place-items-center rounded-full text-black"
          style={{ backgroundColor: "var(--mustard)" }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </motion.article>
  );
}
