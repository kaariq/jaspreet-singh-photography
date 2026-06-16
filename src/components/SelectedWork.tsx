import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1100&q=80",
    title: "Quiet Interiors",
    cat: "Editorial",
    year: "'26",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1100&q=80",
    title: "Maren",
    cat: "Portrait",
    year: "'26",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1100&q=80",
    title: "Vows in June",
    cat: "Wedding",
    year: "'25",
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1100&q=80",
    title: "Atelier No. 4",
    cat: "Brand",
    year: "'25",
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1100&q=80",
    title: "Northbound",
    cat: "Travel",
    year: "'24",
  },
];

/**
 * Selected work as a horizontally-pinned gallery. As the section scrolls
 * through, the track of large cards slides sideways — a smoother, more
 * cinematic take than a plain grid.
 */
export function SelectedWork() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // slide the track from 2vw to a negative offset that reveals the last card
  const x = useTransform(scrollYProgress, [0, 1], ["2vw", "-78vw"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" ref={ref} className="relative z-10" style={{ height: "420vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-end justify-between px-6">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45">
              Archive · 2024 — 2026
            </p>
            <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
              selected <span style={{ color: "var(--tomato)" }}>work.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-black/55 md:block">
            Scroll sideways through a few favourites — each one stitched, lit and
            graded by hand.
          </p>
        </div>

        <motion.div style={{ x }} className="flex items-stretch gap-6 pl-6 will-change-transform">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group relative h-[58vh] w-[68vw] shrink-0 overflow-hidden rounded-[2rem] bg-black/5 md:w-[38vw]"
              style={{ boxShadow: "0 50px 100px -50px rgba(0,0,0,0.45)" }}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 55%)" }}
              />
              <div className="absolute left-6 top-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {String(i + 1).padStart(2, "0")} / {p.cat}
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                    {p.year}
                  </p>
                  <h3 className="font-display text-3xl font-bold md:text-4xl">{p.title}</h3>
                </div>
                <span
                  className="grid h-12 w-12 place-items-center rounded-full text-black transition group-hover:rotate-45"
                  style={{ backgroundColor: "var(--mustard)" }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </article>
          ))}
        </motion.div>

        {/* progress bar */}
        <div className="mx-auto mt-8 h-[3px] w-full max-w-7xl overflow-hidden rounded-full bg-black/10 px-6">
          <motion.div
            style={{ width: progress }}
            className="h-full rounded-full"
          >
            <div className="h-full w-full rounded-full" style={{ backgroundColor: "var(--tomato)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
