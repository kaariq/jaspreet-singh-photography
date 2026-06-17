import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { X, Quote } from "lucide-react";
import heroVideo from "@/assets/hero.mp4.asset.json";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  thread: string[];
  caption: string[];
  x: number;
  size: number;
  range: [number, number];
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara N.",
    role: "Creative Director, FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    thread: ["He sees the frame", "before it happens ✨"],
    x: 10, size: 96, range: [0.28, 0.62],
    caption: [
      "We brought him in for a 3-day campaign with almost no brief.",
      "By day one the whole team trusted his eye completely.",
      "Every frame felt like it already belonged in the magazine.",
    ],
  },
  {
    name: "Leo M.",
    role: "Founder",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    thread: ["Calm on set", "surgical in the edit"],
    x: 64, size: 84, range: [0.34, 0.7],
    caption: [
      "Our product launch lived or died on the imagery.",
      "He delivered a visual language we still use today.",
      "Quiet, precise, impossibly fast in the grade.",
    ],
  },
  {
    name: "Sana K.",
    role: "Bride, June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    thread: ["I cried", "looking at the gallery 🥹"],
    x: 36, size: 116, range: [0.3, 0.66],
    caption: [
      "He caught the moments we didn't even know happened.",
      "It feels less like photos and more like memory.",
      "Our day, exactly as it felt.",
    ],
  },
  {
    name: "Diego R.",
    role: "Editor, Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    thread: ["Light is", "his first language"],
    x: 80, size: 80, range: [0.4, 0.74],
    caption: [
      "Few understand restraint the way he does.",
      "Nothing is loud — everything is intentional.",
      "We keep coming back.",
    ],
  },
  {
    name: "Mira V.",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80",
    thread: ["Effortless", "to collaborate with"],
    x: 22, size: 92, range: [0.38, 0.72],
    caption: [
      "He makes space for everyone's craft on set.",
      "The clothes, the light, the subject — all in balance.",
      "I book him every chance I get.",
    ],
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Testimonial | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // white → black inversion as you scroll in
  const bg = useTransform(scrollYProgress, [0, 0.32], ["#ffffff", "#0b0b0b"]);
  const titleColor = useTransform(scrollYProgress, [0, 0.32], ["#0b0b0b", "#ffffff"]);
  const subColor = useTransform(scrollYProgress, [0, 0.32], ["#0b0b0b80", "#ffffff80"]);

  return (
    <section id="words" ref={ref} className="relative z-10" style={{ height: "260vh" }}>
      <motion.div
        style={{ backgroundColor: bg }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <div className="mx-auto mb-2 max-w-3xl px-6 pt-24 text-center md:pt-28">
          <motion.p
            style={{ color: subColor }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em]"
          >
            In their words
          </motion.p>
          <motion.h2
            style={{ color: titleColor }}
            className="font-display text-5xl font-black tracking-tight md:text-7xl"
          >
            kind{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--mustard)" }}>
              words.
            </span>
          </motion.h2>
          <motion.p style={{ color: subColor }} className="mt-3 text-[13px]">
            Tap a bubble to play the full story.
          </motion.p>
        </div>

        {/* rising bubble field */}
        <div className="relative mx-auto h-[58vh] max-w-6xl px-6">
          {TESTIMONIALS.map((t) => (
            <Bubble
              key={t.name}
              t={t}
              progress={scrollYProgress}
              onClick={() => setActive(t)}
            />
          ))}
        </div>
      </motion.div>

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

              <div className="relative aspect-[3/4] md:aspect-auto">
                <video src={heroVideo.url} autoPlay loop playsInline className="h-full w-full object-cover" />
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

              <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
                <Quote className="h-8 w-8" style={{ color: "var(--mustard)" }} />
                {active.caption.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.18, duration: 0.5 }}
                    className="font-serif text-2xl italic leading-snug tracking-tight md:text-3xl"
                  >
                    {line}
                  </motion.p>
                ))}
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
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

function Bubble({
  t,
  progress,
  onClick,
}: {
  t: Testimonial;
  progress: MotionValue<number>;
  onClick: () => void;
}) {
  const y = useTransform(progress, t.range, [260, 0]);
  const opacity = useTransform(progress, [t.range[0], t.range[0] + 0.06], [0, 1]);
  const threadOpacity = useTransform(
    progress,
    [t.range[1] - 0.12, t.range[1]],
    [0, 1],
  );

  return (
    <motion.button
      onClick={onClick}
      style={{ left: `${t.x}%`, bottom: "6%", y, opacity }}
      className="group absolute flex flex-col items-center"
      whileHover={{ scale: 1.06 }}
    >
      {/* thread chips */}
      <motion.div style={{ opacity: threadOpacity }} className="mb-3 flex flex-col items-center gap-1.5">
        {t.thread.map((m, i) => (
          <span
            key={i}
            className="rounded-2xl bg-white/10 px-3 py-1.5 text-[11px] leading-none text-white/85 backdrop-blur"
            style={{ borderTopLeftRadius: i === 0 ? 16 : 6 }}
          >
            {m}
          </span>
        ))}
      </motion.div>

      <span
        className="relative grid place-items-center overflow-hidden rounded-full border border-white/15"
        style={{
          width: t.size,
          height: t.size,
          boxShadow: "0 30px 60px -25px rgba(0,0,0,0.7)",
        }}
      >
        <motion.img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full object-cover opacity-95 transition group-hover:scale-110"
        />
      </span>
    </motion.button>
  );
}
