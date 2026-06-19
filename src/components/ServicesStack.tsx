import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Weddings",
    desc: "Real moments, quiet emotions, celebrations remembered exactly as they felt.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  },
  {
    n: "02",
    title: "Portraits",
    desc: "Natural portraits with personality — room to simply be yourself.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
  },
  {
    n: "03",
    title: "Editorial",
    desc: "Visual stories shaped through mood, light, thoughtful direction.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
  },
  {
    n: "04",
    title: "Brands",
    desc: "Imagery that feels human, intentional, aligned with your story.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
  },
];

/**
 * Compact, creative version: hover/tap a row, the preview image
 * slides in beside the list. Light, smooth, no big card stacks.
 */
export function ServicesStack() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
              What I photograph
            </p>
            <h3 className="font-serif text-[clamp(2rem,5vw,3.6rem)] leading-[0.95]">
              Four ways to{" "}
              <span className="italic" style={{ color: "var(--tomato)" }}>
                tell a story.
              </span>
            </h3>
          </div>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.28em] text-black/40 md:block">
            0{active + 1} / 0{SERVICES.length}
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.n}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group cursor-pointer py-5 transition-colors"
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      className="font-display text-[10px] font-semibold tracking-[0.2em]"
                      style={{ color: isActive ? "var(--tomato)" : "rgba(0,0,0,0.35)" }}
                    >
                      {s.n}
                    </span>
                    <motion.h4
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                      className="font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight"
                      style={{ color: isActive ? "#0C0909" : "rgba(0,0,0,0.4)" }}
                    >
                      {s.title}
                    </motion.h4>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35 }}
                        className="ml-10 max-w-md overflow-hidden text-[13px] leading-relaxed text-black/55"
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={SERVICES[active].image}
                src={SERVICES[active].image}
                alt={SERVICES[active].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em]">
              {SERVICES[active].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
