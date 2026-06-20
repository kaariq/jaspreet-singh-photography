import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "Do you help with posing?",
    a: "Absolutely. I'll guide when needed and step back when the moment is already speaking for itself.",
  },
  {
    q: "We're awkward in front of cameras. Is that okay?",
    a: "Most people feel that way. My job is creating an environment where you can forget the camera is there.",
  },
  {
    q: "Do you travel?",
    a: "Yes. Whether it's local or somewhere new, I'm always open to hearing about the story you want to tell.",
  },
  {
    q: "How long until we receive our photos?",
    a: "Turnaround depends on the project, but quality always comes before speed.",
  },
  {
    q: "Can we customize coverage?",
    a: "Always. Every story is different, and coverage should reflect that.",
  },
  {
    q: "What does booking look like?",
    a: "A short call, a simple agreement, and a small deposit to hold the date. After that, the easy part begins.",
  },
];

export function FaqFloating() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.85fr_1.15fr]">
        {/* Sticky bold heading column */}
        <div className="md:sticky md:top-28 md:self-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.34em] text-black/40"
          >
            Questions
          </motion.p>

          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] uppercase leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Still
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              wondering
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="block italic lowercase"
              style={{ color: "var(--tomato)", fontFamily: "var(--font-family-sans)", fontWeight: 300 }}
            >
              about something?
            </motion.span>
          </h2>

          <p className="mt-7 max-w-xs text-[15px] leading-relaxed text-black/55">
            Everything you might want to know before we begin. Still curious? Drop me a line and I'll
            get back within a day.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-white transition hover:bg-black/85"
          >
            <span className="text-[13px] font-medium tracking-wide">Ask me anything</span>
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Accordion list with longer, staggered reveals */}
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white"
                style={{ boxShadow: isOpen ? "0 40px 90px -50px rgba(0,0,0,0.45)" : "none" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className="font-display text-base"
                      style={{ color: isOpen ? "var(--tomato)" : "rgba(0,0,0,0.25)" }}
                    >
                      0{i + 1}
                    </span>
                    <span className="font-sans text-lg font-semibold tracking-tight md:text-xl">
                      {f.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-black"
                    style={{ backgroundColor: "var(--mustard)" }}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-7 pl-[3.75rem] text-[15px] leading-relaxed text-black/60 md:px-8 md:pb-8 md:pl-[4.75rem]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
