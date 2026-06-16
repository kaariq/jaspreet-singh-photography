import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * A long line of copy that "reads itself" as you scroll: each word starts
 * dim, light, and slightly blurred, then snaps into focus + full ink as the
 * scroll progress sweeps across it — like a reading spotlight.
 */
export function ScrollTextReveal({
  text = "We photograph quietly. We wait for the light, the small gestures, the in-between moments — and we keep only the frames that still feel honest a decade from now.",
  eyebrow = "Our philosophy",
}: {
  text?: string;
  eyebrow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <section className="relative z-10 px-6 py-32 md:py-48">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--mustard)" }}
          />
          {eyebrow}
        </motion.p>

        <p className="font-display text-3xl font-semibold leading-[1.25] tracking-tight md:text-5xl md:leading-[1.2]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity, filter }}>{children}</motion.span>
    </span>
  );
}
