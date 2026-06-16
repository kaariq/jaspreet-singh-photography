import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote } from "lucide-react";
import heroVideo from "@/assets/hero.mp4.asset.json";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  short: string;
  caption: string[];
  // bubble position (% of section) + size
  x: number;
  y: number;
  size: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara N.",
    role: "Creative Director, FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    short: "He sees the frame before it happens.",
    x: 12, y: 24, size: 116,
    caption: [
      "We brought him in for a 3-day campaign with almost no brief.",
      "By day one the whole team trusted his eye completely.",
      "Every frame felt like it already belonged in the magazine.",
    ],
  },
  {
    name: "Leo M.",
    role: "Founder, Aesop-adjacent",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    short: "Calm on set, surgical in the edit.",
    x: 70, y: 16, size: 96,
    caption: [
      "Our product launch lived or died on the imagery.",
      "He delivered a visual language we still use today.",
      "Quiet, precise, and impossibly fast in the grade.",
    ],
  },
  {
    name: "Sana K.",
    role: "Bride, June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    short: "Our day, exactly as it felt.",
    x: 40, y: 52, size: 132,
    caption: [
      "I cried looking at the gallery.",
      "He caught the moments we didn't even know happened.",
      "It feels less like photos and more like memory.",
    ],
  },
  {
    name: "Diego R.",
    role: "Editor, Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    short: "Light is his first language.",
    x: 84, y: 58, size: 88,
    caption: [
      "We've shot with dozens of photographers.",
      "Few understand restraint the way he does.",
      "Nothing is loud — everything is intentional.",
    ],
  },
  {
    name: "Mira V.",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80",
    short: "Effortless to collaborate with.",
    x: 22, y: 70, size: 100,
    caption: [
      "He makes space for everyone's craft on set.",
      "The clothes, the light, the subject — all in balance.",
      "I book him every chance I get.",
    ],
  },
];

export function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <section
      id="words"
      className="relative z-10 overflow-hidden bg-[oklch(0.13_0_0)] py-32 text-white md:py-44"
    >
      <div className="mx-auto mb-4 max-w-3xl px-6 text-center">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
          In their words
        </p>
        <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">
          kind <span className="font-serif italic font-light" style={{ color: "var(--mustard)" }}>words.</span>
        </h2>
        <p className="mt-4 text-sm text-white/55">Tap a bubble to play the full story.</p>
      </div>

      {/* floating bubbles field */}
      <div className="relative mx-auto mt-10 h-[62vh] max-w-6xl px-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.button
            key={t.name}
            onClick={() => setActive(t)}
            className="group absolute"
            style={{ left: `${t.x}%`, top: `${t.y}%` }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.span
              className="block"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <span
                className="relative grid place-items-center overflow-hidden rounded-full border border-white/15"
                style={{
                  width: t.size,
                  height: t.size,
                  boxShadow: "0 30px 60px -25px rgba(0,0,0,0.7)",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 rounded-full ring-2 ring-transparent transition"
                  style={{ boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.0)" }}
                />
              </span>
            </motion.span>
            <span className="pointer-events-none mt-3 block max-w-[160px] text-center text-xs leading-snug text-white/70 opacity-0 transition group-hover:opacity-100">
              "{t.short}"
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[oklch(0.16_0_0)] text-white md:grid-cols-[1.1fr_1fr]"
              style={{ boxShadow: "0 60px 120px -40px rgba(0,0,0,0.8)" }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              {/* left — monologue video */}
              <div className="relative aspect-[3/4] md:aspect-auto">
                <video
                  src={heroVideo.url}
                  autoPlay
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="h-11 w-11 rounded-full border border-white/30 object-cover"
                  />
                  <div>
                    <p className="font-display text-lg font-semibold">{active.name}</p>
                    <p className="text-xs text-white/60">{active.role}</p>
                  </div>
                </div>
              </div>

              {/* right — caption */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <Quote className="h-8 w-8" style={{ color: "var(--mustard)" }} />
                {active.caption.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.18, duration: 0.5 }}
                    className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl"
                  >
                    {line}
                  </motion.p>
                ))}
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  {active.name} · {active.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
