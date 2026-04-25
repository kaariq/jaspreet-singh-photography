import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import lehenga from "@/assets/collection-lehenga.jpg";
import sherwani from "@/assets/collection-sherwani.jpg";
import anarkali from "@/assets/collection-anarkali.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  city: string;
  poster: string;
  video?: string;
};

const items: Testimonial[] = [
  {
    quote:
      "I sent a Pinterest screenshot. They sent back a lehenga that fit like memory — heavier, softer, and somehow more me than I imagined.",
    name: "Ananya R.",
    role: "Bridal client",
    city: "Bengaluru",
    poster: lehenga,
    video: "https://cdn.coverr.co/videos/coverr-a-woman-in-a-red-dress-2643/1080p.mp4",
  },
  {
    quote:
      "The doorstep measurement was the moment I knew this was different. Quiet, precise, no rush. The sherwani fits like it was always mine.",
    name: "Rohan M.",
    role: "Groom",
    city: "Mumbai",
    poster: sherwani,
  },
  {
    quote:
      "Three fittings, one stylist, zero compromises. The Anarkali turned my mother's saree into something I'll keep forever.",
    name: "Priya S.",
    role: "Festive client",
    city: "Delhi",
    poster: anarkali,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const t = items[active];

  const next = () => {
    setPlaying(false);
    setActive((i) => (i + 1) % items.length);
  };
  const prev = () => {
    setPlaying(false);
    setActive((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <section className="bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: quote */}
        <div className="lg:col-span-7 relative">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Voices</p>

          <Quote className="absolute -top-4 -left-2 w-16 h-16 text-gold/15" strokeWidth={1} />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-6 text-balance"
            >
              "{t.quote}"
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.name + "-meta"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-px flex-1 max-w-12 bg-gold/40" />
              <p className="text-xs tracking-[0.25em] uppercase text-primary-foreground/80">
                {t.name} · {t.role} · {t.city}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 border border-primary-foreground/25 hover:bg-primary-foreground hover:text-primary transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 border border-primary-foreground/25 hover:bg-primary-foreground hover:text-primary transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="ml-4 flex gap-1.5">
              {items.map((it, i) => (
                <button
                  key={it.name}
                  onClick={() => { setPlaying(false); setActive(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="h-px w-8 bg-primary-foreground/25 relative overflow-hidden"
                >
                  {i === active && (
                    <motion.span
                      layoutId="t-dot"
                      className="absolute inset-0 bg-gold"
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="ml-auto text-xs tracking-widest text-primary-foreground/60">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right: video tile */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name + "-media"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-background/10"
            >
              {playing && t.video ? (
                <video
                  src={t.video}
                  autoPlay
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={t.poster}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  {t.video && (
                    <button
                      onClick={() => setPlaying(true)}
                      aria-label="Play video"
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <span className="w-20 h-20 rounded-full bg-background/90 text-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-7 h-7 ml-1" fill="currentColor" />
                      </span>
                    </button>
                  )}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="font-display text-xl text-primary-foreground">{t.name}</p>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/75 mt-1">{t.city}</p>
                    </div>
                    {t.video && (
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Watch story</span>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
