import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ScrollRibbon } from "@/components/ScrollRibbon";

/**
 * A long line of copy that "reads itself" as you scroll: each word starts
 * dim, light, and slightly blurred, then snaps into focus + full ink as the
 * scroll progress sweeps across it — like a reading spotlight. The animated
 * ribbon sits behind the copy as a quiet backdrop.
 */
export function ScrollTextReveal({
  text = `Photography taught me to notice — the way light falls across a room, the glance that lasts half a second longer, the moments people don't realize matter until years later. I'm drawn to making images that feel honest today and meaningful decades from now.`,
  eyebrow = "Behind The Camera",
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
    <section className="relative z-10 w-full bg-white px-6 py-32 md:py-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80 mt-50">
        <ScrollRibbon />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--mustard)" }}
          />
          8 {eyebrow}
        </motion.p>

        <p className="text-center font-serif text-3xl font-light leading-[1.35] tracking-tight text-black md:text-[2.75rem] md:leading-[1.3]">
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
  const opacity = useTransform(progress, range, [0.14, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <span className="relative mr-[0.26em] inline-block">
      <motion.span style={{ opacity, filter }}>{children}</motion.span>
    </span>
  );
}
