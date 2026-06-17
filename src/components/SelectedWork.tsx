import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const PROJECTS = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&q=80",
    title: "Quiet Interiors",
    cat: "Editorial",
    year: "'26",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1400&q=80",
    title: "Maren",
    cat: "Portrait",
    year: "'26",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80",
    title: "Vows in June",
    cat: "Wedding",
    year: "'25",
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80",
    title: "Atelier No. 4",
    cat: "Brand",
    year: "'25",
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1400&q=80",
    title: "Northbound",
    cat: "Travel",
    year: "'24",
  },
];

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  total: number;
  progress: any;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(progress, [start, end], [0, -window.innerHeight * 1.2]);

  const rotate = useTransform(progress, [start, end], [0, -10]);

  return (
    <motion.article
      style={{
        y,
        rotate,
        zIndex: total - index,
        x: -index * 40,
        scale: 1 - index * 0.05,
      }}
      className="absolute inset-0 overflow-hidden rounded-[2rem]"
    >
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "0 60px 120px -40px rgba(0,0,0,0.35)",
        }}
      />

      <img src={project.src} alt={project.title} className="h-full w-full object-cover" />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.18) 40%, transparent)",
        }}
      />

      <div className="absolute left-6 top-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
        {String(index + 1).padStart(2, "0")} / {project.cat}
      </div>

      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
            {project.year}
          </p>

          <h3 className="font-serif text-4xl italic tracking-tight md:text-6xl">{project.title}</h3>
        </div>

        <span
          className="grid h-14 w-14 place-items-center rounded-full text-black"
          style={{
            backgroundColor: "var(--mustard)",
          }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      ref={ref}
      className="relative"
      style={{
        height: `${PROJECTS.length * 100}vh`,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
              Archive · 2024 — 2026
            </p>

            <h2 className="font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
              selected{" "}
              <span
                className="italic"
                style={{
                  color: "var(--tomato)",
                  fontFamily: "var(--font-script)",
                }}
              >
                work
              </span>
            </h2>
          </div>

          <p className="hidden max-w-xs text-right text-[13px] leading-relaxed text-black/55 md:block">
            A few favourites — stitched, lit and graded by hand.
          </p>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="relative h-[72vh] w-[88vw] max-w-6xl"
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
          }}
        >
          {PROJECTS.map((project, index) => (
            <StackCard
              key={project.title}
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
