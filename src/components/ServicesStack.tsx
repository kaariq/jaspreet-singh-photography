import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Portrait Sessions",
    desc: "Unhurried, conversational shoots that look like you on your best, most honest day. Studio or on-location.",
    tags: ["Studio", "On-location", "Retouched"],
  },
  {
    n: "02",
    title: "Editorial & Story",
    desc: "Concept-led shoots for magazines and independent publications — moodboard to final grade, art-directed in-house.",
    tags: ["Concept", "Art direction", "35mm"],
  },
  {
    n: "03",
    title: "Brand & Product",
    desc: "Campaign and catalogue imagery with a consistent visual language so every frame feels unmistakably yours.",
    tags: ["Campaign", "Catalogue", "Motion"],
  },
  {
    n: "04",
    title: "Weddings & Events",
    desc: "Quiet documentary coverage — the glances, the in-between moments, the light at the end of the night.",
    tags: ["Documentary", "Full-day", "Album"],
  },
];

/**
 * Services as stacking cards: each card rises in from the bottom and pins,
 * so the next one slides up and stacks on top.
 */
export function ServicesStack() {
  return (
    <section className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/45">
            What I offer
          </p>
          <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
            services, <span className="font-serif italic font-light" style={{ color: "var(--tomato)" }}>stacked.</span>
          </h2>
        </div>

        <div>
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className="sticky"
              style={{ top: `calc(18vh + ${i * 28}px)` }}
            >
              <motion.article
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className="mb-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 md:p-12"
                style={{ boxShadow: "0 40px 90px -50px rgba(0,0,0,0.4)" }}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-baseline gap-5">
                    <span
                      className="font-display text-2xl font-black"
                      style={{ color: "var(--mustard)" }}
                    >
                      {s.n}
                    </span>
                    <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                      {s.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
                  {s.desc}
                </p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
