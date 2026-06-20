import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    title: "Weddings",
    tag: "The whole day, felt",
    desc: "Real moments, quiet emotions, celebrations remembered exactly as they felt.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    n: "02",
    title: "Portraits",
    tag: "Just be yourself",
    desc: "Natural portraits with personality — room to simply be yourself.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80",
  },
  {
    n: "03",
    title: "Editorial",
    tag: "Mood & direction",
    desc: "Visual stories shaped through mood, light, thoughtful direction.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
  },
  {
    n: "04",
    title: "Brands",
    tag: "Human, intentional",
    desc: "Imagery that feels human, intentional, aligned with your story.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  },
];

export function ServicesStack() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 px-6 py-14 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          <h3 className="font-display text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.92] tracking-tight">
            <RevealWords text="Four ways" />
            <br />
            <span className="text-black">What I photograph </span>
         </h3>
        </div>

        {/* Expanding panels — desktop */}
        <div className="hidden gap-3 md:flex md:h-[68vh]">
          {SERVICES.map((s, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 6 : 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer overflow-hidden bg-black"
              >
                <motion.img
                  src={s.image}
                  alt={s.title}
                  animate={{ scale: isActive ? 1 : 1.25, opacity: isActive ? 1 : 0.45 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Collapsed: vertical label */}
                <motion.span
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(1.4rem,2vw,2rem)] uppercase tracking-tight text-white [writing-mode:vertical-rl] rotate-180"
                >
                  {s.title}
                </motion.span>

                {/* Expanded content */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.25 : 0,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl text-white/90 lg:text-7xl">{s.n}</span>
                    <span className="rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {s.tag}
                    </span>
                  </div>

                  <div className="max-w-md">
                    <h4 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] uppercase leading-[0.9] text-white">
                      {s.title}
                    </h4>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/75">{s.desc}</p>
                    <a
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:gap-3"
                    >
                      Enquire
                      <ArrowUpRight className="h-4 w-4" style={{ color: "var(--mustard)" }} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile — stacked cards */}
        <div className="grid gap-4 md:hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-black"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="font-display text-5xl text-white/90">{s.n}</span>
                <div>
                  <h4 className="font-display text-4xl uppercase text-white">{s.title}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/75">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Word-by-word rise reveal for the Anton headline */
function RevealWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: delay + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
