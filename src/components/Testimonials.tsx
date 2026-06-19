import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  message: string;
  x: number;     // % left position of big bubble
  y: number;     // % top position of big bubble
  size: number;  // px diameter of big bubble
  color: string; // solid bubble color
  textColor?: string;
  bubbleSide?: "right" | "left"; // where the chat thread points
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara Nwosu",
    role: "Creative Director · FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    message: "He sees the frame before it even happens. Every shot already belonged in the magazine.",
    x: 16, y: 28, size: 170,
    color: "#A71D31", textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Leo Marchetti",
    role: "Founder · Northbound",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    message: "Calm on set, surgical in the edit. He delivered a visual language we still use today.",
    x: 64, y: 16, size: 130,
    color: "#0C0909", textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Sana Kapoor",
    role: "Bride · June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    message: "I cried looking at the gallery. Less like photographs, more like memory itself.",
    x: 42, y: 58, size: 210,
    color: "#387D7A", textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Diego Reyes",
    role: "Editor · Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    message: "Light is his first language. Nothing loud — everything intentional.",
    x: 80, y: 60, size: 140,
    color: "#E8B84A", textColor: "#1a1a1a",
    bubbleSide: "left",
  },
  {
    name: "Mira Volkov",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    message: "Effortless to collaborate with. I book him every chance I get.",
    x: 14, y: 74, size: 150,
    color: "#C44569", textColor: "#fff",
    bubbleSide: "right",
  },
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="words" ref={ref} className="relative z-10" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white text-[#0a0a0a]">
        {/* heading */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center md:pt-20">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/55">
            In their words
          </p>
          <h2 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light tracking-tight">
            kind{" "}
            <span className="italic" style={{ color: "var(--tomato)" }}>
              words.
            </span>
          </h2>
        </div>

        {/* bubble field */}
        <div className="relative mx-auto h-[72vh] w-full max-w-6xl px-6">
          {TESTIMONIALS.map((t, i) => (
            <BubbleCluster
              key={t.name}
              t={t}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
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
  const y = useTransform(progress, [start, end], [120, -30]);
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const float = useTransform(progress, [0, 1], [0, -40]);

  const pfpSize = Math.round(t.size * 0.32);
  const side = t.bubbleSide ?? "right";

  // chat bubble dimensions relative to big bubble
  const bubbleW = Math.round(t.size * 2);
  const bubbleH = Math.round(t.size * 0.62);

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
        {/* BIG solid circle with initials */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: t.color,
            color: t.textColor ?? "#fff",
          }}
        >
          <div className="text-center leading-none">
            <div className="font-serif font-light" style={{ fontSize: t.size * 0.3 }}>
              {initials(t.name)}
            </div>
          </div>
        </div>

        {/* Small PFP — sitting on TOP of the big circle */}
        <div
          className="absolute overflow-hidden rounded-full bg-white"
          style={{
            width: pfpSize,
            height: pfpSize,
            top: -pfpSize * 0.35,
            right: -pfpSize * 0.15,
            boxShadow: "0 6px 18px -6px rgba(0,0,0,0.4), 0 0 0 4px #fff",
          }}
        >
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Conversation thread bubble — speech cloud attached */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute"
          style={{
            width: bubbleW,
            top: -pfpSize * 0.2,
            [side]: side === "right" ? -bubbleW - pfpSize * 0.1 : -bubbleW - pfpSize * 0.1,
          } as React.CSSProperties}
        >
          <div
            className="relative bg-[#0a0a0a] px-5 py-4 text-white"
            style={{
              borderRadius: `${bubbleH * 0.5}px`,
              minHeight: bubbleH,
            }}
          >
            <p className="font-serif text-[14px] leading-snug md:text-[15px]">
              "{t.message}"
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
              — {t.name} · {t.role}
            </p>

            {/* speech tail pointing toward the big circle */}
            <span
              aria-hidden
              className="absolute h-4 w-4 rotate-45 bg-[#0a0a0a]"
              style={{
                bottom: -6,
                [side === "right" ? "left" : "right"]: 18,
              } as React.CSSProperties}
            />
            <span
              aria-hidden
              className="absolute h-2 w-2 rounded-full bg-[#0a0a0a]"
              style={{
                bottom: -14,
                [side === "right" ? "left" : "right"]: 10,
              } as React.CSSProperties}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
