import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const processSteps = [
  { n: "01", t: "Consult & Choose", d: "Pick a style, fabric, or upload a reference. Or let our AI design tool dream one up." },
  { n: "02", t: "Doorstep Measure", d: "A master tailor visits your home or studio for precise measurements." },
  { n: "03", t: "Stitch & Embroider", d: "Your garment is cut, sewn and finished by named artisans — tracked at every stage." },
  { n: "04", t: "Fit & Deliver", d: "Final fitting at your home. Free alterations forever." },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    setActive(0);
    const timers = processSteps.map((_, i) =>
      setTimeout(() => setActive(i + 1), (i + 1) * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, [started]);

  const progress = (active / processSteps.length) * 100;

  return (
    <section ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-8 py-32">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Process</p>
        <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight text-balance">
          From measure to <em>masterpiece.</em>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl">
          A simple, considered four-step journey — designed around your calendar.
        </p>
      </div>

      <div className="mt-20 relative">
        <div className="absolute left-0 right-0 top-6 h-px bg-border" />
        <div
          className="absolute left-0 top-6 h-px bg-primary transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 relative">
          {processSteps.map((step, i) => {
            const isDone = i < active;
            const isCurrent = i === active - 1;
            return (
              <div key={step.n} className="relative">
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
                <div className="mt-6 pr-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Step {step.n}</p>
                  <h3 className="font-display text-2xl mt-2">{step.t}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{step.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
