import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const GEAR = [
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&q=80", label: "Leica M6" },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=80", label: "85mm f/1.4" },
  { src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=700&q=80", label: "Profoto B10" },
  { src: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=700&q=80", label: "Hasselblad" },
  { src: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=700&q=80", label: "Sony A7R V" },
  { src: "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=700&q=80", label: "DJI Ronin" },
  { src: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=700&q=80", label: "Tri-X 400" },
];

/**
 * Auto-scrolling "gear" strip. The row is wider than the viewport, fades at
 * the edges and is given a slight perspective so the ends look stretched. A
 * big "My Gears" headline floats over the top.
 */
export function GearsCarousel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-26%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const row = [...GEAR, ...GEAR];

  return (
    <section
      ref={ref}
      className="relative z-10 overflow-hidden py-28 md:py-36"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        style={{ y: titleY }}
        className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45">
          The kit behind the frames
        </p>
        <h2 className="font-display text-[clamp(3rem,12vw,11rem)] font-black leading-[0.85] tracking-tight text-black/90 mix-blend-multiply">
          my <span className="font-serif italic font-light" style={{ color: "var(--tomato)" }}>gears</span>
        </h2>
      </motion.div>

      <motion.div
        style={{
          x,
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
        className="flex w-max items-center gap-6"
      >
        {row.map((g, i) => {
          // ends of the visible band get a stretch / lean
          const lean = i % row.length === 0 ? -8 : 0;
          return (
            <figure
              key={`${g.label}-${i}`}
              className="group relative h-[44vh] w-[26vw] min-w-[280px] shrink-0 overflow-hidden rounded-3xl bg-black/5"
              style={{
                transform: `rotateY(${lean}deg)`,
                boxShadow: "0 40px 80px -40px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black backdrop-blur">
                {g.label}
              </figcaption>
            </figure>
          );
        })}
      </motion.div>
    </section>
  );
}
