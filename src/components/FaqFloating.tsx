import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
];

export function FaqFloating() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <h2 className="font-display text-5xl font-black tracking-tight md:text-6xl">
            Still wondering about
            <br />
            <span className="font-serif italic font-light" style={{ color: "var(--tomato)" }}>
              something ?
            </span>
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-black/55">
            Drop me a line and I'll get back to you within a day.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white"
                style={{ boxShadow: isOpen ? "0 30px 70px -45px rgba(0,0,0,0.4)" : "none" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <span className="font-display text-lg font-semibold tracking-tight md:text-2xl">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-black"
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
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <p className="px-6 pb-6 text-base leading-relaxed text-black/60 md:px-8 md:pb-8">
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
