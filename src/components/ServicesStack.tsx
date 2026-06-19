import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Weddings",
    desc: "Real moments, quiet emotions, celebrations remembered exactly as they felt.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  },
  {
    n: "02",
    title: "Portraits",
    desc: "Natural portraits with personality — room to simply be yourself.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
  },
  {
    n: "03",
    title: "Editorial",
    desc: "Visual stories shaped through mood, light, thoughtful direction.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
  },
  {
    n: "04",
    title: "Brands",
    desc: "Imagery that feels human, intentional, aligned with your story.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
  },
];

export function ServicesStack() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 px-6 py-20 md:py-28 text-neutral-900 bg-transparent antialiased">
      <div className="mx-auto max-w-6xl">
        {/* Header Setup — Scaled Up & Balanced */}
        <div className="mb-16 flex items-end justify-between gap-6 border-b border-black/5 pb-6">
          <div>
            <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.3em] text-black/40">
              What I photograph
            </p>
            <h3 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light tracking-tight leading-tight">
              Four ways to{" "}
              <span className="italic font-normal" style={{ color: "var(--tomato, #e11d48)" }}>
                tell a story.
              </span>
            </h3>
          </div>
          <span className="hidden font-mono text-[11px] font-medium tracking-[0.2em] text-black/35 md:block">
            0{active + 1} &mdash; 0{SERVICES.length}
          </span>
        </div>

        {/* Interaction Layout Grid — Wider Max Limits */}
        <div className="grid gap-16 md:grid-cols-[1.1fr_340px] md:items-start lg:gap-20">
          {/* Menu Block with Upscaled Proportional Spacing */}
          <ul className="divide-y divide-black/5 border-b border-black/5">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.n}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group cursor-pointer py-6 transition-all duration-300"
                >
                  {/* Title & Number Layout Wrapper */}
                  <div className="flex items-center gap-6">
                    <span
                      className="font-mono text-[13px] font-medium tracking-wider transition-colors duration-300 w-8 shrink-0"
                      style={{ color: isActive ? "var(--tomato, #e11d48)" : "rgba(0,0,0,0.3)" }}
                    >
                      {s.n}
                    </span>
                    <motion.h4
                      animate={{ x: isActive ? 6 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-light tracking-tight leading-none transition-colors duration-300"
                      style={{ color: isActive ? "#0C0909" : "rgba(0,0,0,0.35)" }}
                    >
                      {s.title}
                    </motion.h4>
                  </div>

                  {/* Upscaled Proportional Description Subblock */}
                  <div className="pl-14">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="max-w-xl overflow-hidden text-[14px] md:text-[15px] font-normal leading-relaxed text-black/50"
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right Side Image Canvas — Larger Dimensions */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-50 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={SERVICES[active].image}
                src={SERVICES[active].image}
                alt={SERVICES[active].title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.98]"
              />
            </AnimatePresence>

            {/* Soft Contrast Ambient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

            {/* Micro Badge Label */}
            <div className="absolute bottom-5 left-5 rounded bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-800">
                {SERVICES[active].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
