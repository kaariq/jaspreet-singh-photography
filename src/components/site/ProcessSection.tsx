import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const processSteps = [
  { n: "01", t: "Consult & Choose", d: "Pick a style, fabric, or upload a reference. Our AI tool can dream one up too." },
  { n: "02", t: "Doorstep Measure", d: "A master tailor visits your home or studio for precise measurements." },
  { n: "03", t: "Stitch & Embroider", d: "Cut, sewn and finished by named artisans — tracked at every stage." },
  { n: "04", t: "Fit & Deliver", d: "Final fitting at your home. Free alterations, forever." },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setActive(0);
    const timers = processSteps.map((_, i) =>
      setTimeout(() => setActive(i + 1), (i + 1) * 750)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const progress = (active / processSteps.length) * 100;

  return (
    <section ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Process</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 leading-[1.05] text-balance">
          From measure to <em>masterpiece.</em>
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
          A simple, considered four-step journey — designed around your calendar.
        </p>
      </motion.div>

      <div className="mt-14 lg:mt-16 relative">
        <div className="absolute left-0 right-0 top-6 h-px bg-border" />
        <motion.div
          className="absolute left-0 top-6 h-px bg-primary origin-left"
          style={{ width: "100%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 relative">
          {processSteps.map((step, i) => {
            const isDone = i < active;
            const isCurrent = i === active - 1;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="relative"
              >
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isDone
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-background border-border text-muted-foreground"
                  } ${isCurrent ? "scale-110 shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_12%,transparent)]" : ""}`}
                >
                  {isDone ? (
                    <Check className="w-5 h-5" strokeWidth={2} />
                  ) : (
                    <span className="text-xs tracking-widest">{step.n}</span>
                  )}
                </div>
                <div className="mt-5 pr-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Step {step.n}</p>
                  <h3 className="font-display text-xl mt-1.5">{step.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
