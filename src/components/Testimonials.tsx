import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  thread: string[];
  message: string;
  x: number; // %
  y: number; // %
  size: number; // px
  depth: number;
  color: string; // solid bubble color
  textColor?: string;
  bubbleSide?: "right" | "left"; // 0..1 (parallax / scale)
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara Nwosu",
    role: "Creative Director · FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    message:
      "He sees the frame before it even happens. Every shot already belonged in the magazine.",
    x: -10,
    y: 18,
    size: 120,
    color: "#A71D31",
    bubbleSide: "right",
    thread: [],
    depth: 1,
  },
  {
    name: "Leo Marchetti",
    role: "Founder · Northbound",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    message:
      "Calm on set, surgical in the edit. He delivered a visual language we still use today.",
    x: 76,
    y: 30,
    size: 90,
    color: "#65d00e",
    bubbleSide: "left",
    thread: [],
    depth: 1,
  },
  {
    name: "Sana Kapoor",
    role: "Bride · June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    message: "I cried looking at the gallery. Less like photographs, more like memory itself.",
    x: 78,
    y: 78,
    size: 145,
    color: "#387D7A",
    bubbleSide: "right",
    thread: [],
    depth: 1,
  },
  {
    name: "Diego Reyes",
    role: "Editor · Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    message: "Light is his first language. Nothing loud — everything intentional.",
    x: 22,
    y: 78,
    size: 100,
    color: "#E8B84A",
    bubbleSide: "left",
    thread: [],
    depth: 1,
  },
  {
    name: "Mira Volkov",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    message: "Effortless to collaborate with. I book him every chance I get.",
    x: 48,
    y: 102,
    size: 105,
    color: "#C44569",
    bubbleSide: "right",
    thread: [],
    depth: 1,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Testimonial | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#ffffff", "#0a0a0a", "#0a0a0a", "#ffffff"],
  );

  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#0a0a0a", "#ffffff", "#ffffff", "#0a0a0a"],
  );

  const subColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["rgba(10,10,10,.55)", "rgba(255,255,255,.55)", "rgba(255,255,255,.55)", "rgba(10,10,10,.55)"],
  );

  return (
    <section id="words" ref={ref} className="relative z-10" style={{ height: "260vh" }}>
      <motion.div
        style={{ backgroundColor: bg }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* ambient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
         
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 text-center md:pt-24">
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
            Tap a bubble — hear the story.
          </motion.p>
        </div>

        {/* glass bubble field */}
        <div className="relative mx-auto h-[68vh] w-full max-w-6xl px-6">
          {TESTIMONIALS.map((t, i) => (
            <BubbleCluster t={t} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {active && <ThreadModal t={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function BubbleCluster({
  t,
  index,
  progress,
}: {
  t: Testimonial;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = 0.04 + index * 0.05;
  const end = start + 0.28;

  const y = useTransform(progress, [start, end], [120, -40]);
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const float = useTransform(progress, [0, 1], [0, -50]);

  const pfpSize = Math.round(t.size * 0.42);

  const bubbleW = Math.min(320, Math.max(220, t.message.length * 3.5));

  return (
    <motion.div
      style={{
        left: `${t.x}%`,
        top: `${t.y}%`,
        y,
        opacity,
        width: t.size,
        height: t.size,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div style={{ y: float }} className="relative h-full w-full">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: t.color,
            boxShadow: "0 25px 60px -25px rgba(0,0,0,.25)",
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            color: t.textColor ?? "#fff",
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: t.size * 0.18,
              letterSpacing: "-0.04em",
            }}
          >
            {initials(t.name)}
          </span>
        </div>

        <div
          className="absolute overflow-hidden rounded-full"
          style={{
            width: pfpSize,
            height: pfpSize,
            top: pfpSize * 0.1,
            right: -pfpSize * 0.15,
            zIndex: 20,
            boxShadow: "0 12px 24px rgba(0,0,0,.15), 0 0 0 4px white",
          }}
        >
          <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="absolute z-10"
          style={{
            width: bubbleW,
            top: -10,

            ...(t.bubbleSide === "left"
              ? {
                  right: t.size * 0.9,
                }
              : {
                  left: t.size * 0.9,
                }),
          }}
        >
          <div
            className="bg-white text-black"
            style={{
              borderRadius: "24px",
              padding: "18px 20px",
              boxShadow: "0 25px 60px -30px rgba(0,0,0,.18)",
            }}
          >
            <p className="font-serif text-[14px] leading-relaxed">{t.message}</p>

            <div className="mt-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/40">{t.name}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ThreadModal({ t, onClose }: { t: Testimonial; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.98,
          y: 20,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full max-w-md overflow-hidden rounded-[32px]"
        style={{
          background: "#fff",
          boxShadow: "0 60px 120px -40px rgba(0,0,0,.75)",
        }}
      >
        <div className="border-b border-black/10 p-6">
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />

            <div>
              <p className="text-sm font-medium text-black">{t.name}</p>

              <p className="text-xs text-black/45">{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          {t.thread.map((message, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15 + i * 0.18,
              }}
              className="max-w-[85%] rounded-[22px] rounded-bl-md bg-white px-4 py-3 text-[14px] leading-relaxed text-black"
            >
              {message}
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 p-5">
          <button
            onClick={onClose}
            className="w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Close Conversation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
