import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  camera,
  drone,
  editing,
  gimbal,
  lens,
  lights,
  lens50,
  tripod,
  battery,
} from "@/assets/gears";

const GEAR = [
  { src: camera, label: "Sony Leica M6" },
  { src: drone, label: "DJI Mavic" },
  { src: editing, label: "Da Vinci B10" },
  { src: gimbal, label: "DJI Ronin" },
  { src: lens, label: "85mm f/1.4" },
  { src: lights, label: "100FQ Reflector" },
  { src: lens50, label: "85mm f/1.4" },
  { src: tripod, label: "100FQ Reflector" },
  { src: battery, label: "85mm f/1.4" },
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

  const rowA = GEAR;
  const rowB = [...GEAR.slice(3), ...GEAR.slice(0, 3), ...GEAR];

  return (
    <section ref={ref} className="relative z-10 overflow-hidden py-16 md:py-20">
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
          Tools I trust on every shoot — bodies, glass and light, chosen for how they handle quiet
          moments.
        </p>
      </div>

      {/* row 1 */}
      <motion.div
        style={{
          x: xLeft,
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
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
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
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
      className={`group relative shrink-0 overflow-hidden  bg-black/5 ${
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
