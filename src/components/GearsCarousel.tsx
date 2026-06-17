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
 * Two marquee rows that slide in opposite directions but in perfect sync
 * (same scroll-driven speed). A tidy header block sits above the rows.
 */
export function GearsCarousel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["4%", "-22%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-22%", "4%"]);

  const rowA = [...GEAR, ...GEAR];
  const rowB = [...[...GEAR].reverse(), ...[...GEAR].reverse()];

  return (
    <section ref={ref} className="relative z-10 overflow-hidden py-24 md:py-32">
      {/* header */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col items-start gap-3 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
            The kit behind the frames
          </p>
          <h2 className="font-display text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            my{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
              gears
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-[13px] leading-relaxed text-black/55 md:text-right">
          Tools I trust on every shoot — bodies, glass and light, chosen for
          how they handle quiet moments.
        </p>
      </div>

      {/* row 1 */}
      <motion.div
        style={{
          x: xLeft,
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        className="flex w-max items-center gap-5"
      >
        {rowA.map((g, i) => (
          <GearCard key={`a-${g.label}-${i}`} {...g} />
        ))}
      </motion.div>

      {/* row 2 — opposite direction */}
      <motion.div
        style={{
          x: xRight,
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        className="mt-5 flex w-max items-center gap-5"
      >
        {rowB.map((g, i) => (
          <GearCard key={`b-${g.label}-${i}`} {...g} small />
        ))}
      </motion.div>
    </section>
  );
}

function GearCard({ src, label, small }: { src: string; label: string; small?: boolean }) {
  return (
    <figure
      className={`group relative shrink-0 overflow-hidden rounded-3xl bg-black/5 ${
        small ? "h-[26vh] w-[20vw] min-w-[220px]" : "h-[34vh] w-[24vw] min-w-[260px]"
      }`}
      style={{ boxShadow: "0 40px 80px -45px rgba(0,0,0,0.35)" }}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}
