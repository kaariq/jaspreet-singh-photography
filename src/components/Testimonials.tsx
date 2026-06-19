import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  message: string;
  x: number;
  y: number;
  size: number;
  color: string;
  textColor?: string;
  bubbleSide?: "right" | "left";
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara Nwosu",
    role: "Creative Director · FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    message:
      "He sees the frame before it even happens. Every shot already belonged in the magazine.",
    x: -12,
    y: 18,
    size: 170,
    color: "#fbc95e",
    textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Leo Marchetti",
    role: "Founder · Northbound",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    message:
      "Calm on set, surgical in the edit. He delivered a visual language we still use today.",
    x: 80,
    y: 26,
    size: 130,
    color: "#fbc95e",
    textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Sana Kapoor",
    role: "Bride · June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    message: "I cried looking at the gallery. Less like photographs, more like memory itself.",
    x: 48,
    y: 58,
    size: 210,
    color: "#fbc95e",
    textColor: "#fff",
    bubbleSide: "right",
  },
  {
    name: "Diego Reyes",
    role: "Editor · Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    message: "Light is his first language. Nothing loud — everything intentional.",
    x: 110,
    y: 90,
    size: 140,
    color: "#fbc95e",
    textColor: "#fff",
    bubbleSide: "left",
  },
  {
    name: "Mira Volkov",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    message: "Effortless to collaborate with. I book him every chance I get.",
    x: -10,
    y: 64,
    size: 150,
    color: "#fbc95e",
    textColor: "#fff",
    bubbleSide: "right",
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
      {/* Turned container element to a motion component to support background inversion updates */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        {/* Dynamic Header Block */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center md:pt-20">
          <motion.p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: subColor }}
          >
            In their words
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light tracking-tight"
            style={{ color: titleColor }}
          >
            kind{" "}
            <span className="italic" style={{ color: "var(--tomato, #e11d48)" }}>
              words.
            </span>
          </motion.h2>
        </div>

        {/* Dynamic Field Context Canvas */}
        <div className="relative mx-auto h-[72vh] w-full max-w-6xl px-6">
          {TESTIMONIALS.map((t, i) => (
            <BubbleCluster
              key={t.name}
              t={t}
              index={i}
              progress={scrollYProgress}
              cardBg={titleColor}
              cardText={bg}
              subText={subColor}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function BubbleCluster({
  t,
  index,
  progress,
  cardBg,
  cardText,
  subText,
}: {
  t: Testimonial;
  index: number;
  progress: any;
  cardBg: any; // Passes transformation variants downstream
  cardText: any;
  subText: any;
}) {
  const start = 0.04 + index * 0.05;
  const end = start + 0.28;

  const y = useTransform(progress, [start, end], [120, -30]);
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const float = useTransform(progress, [0, 1], [0, -40]);

  const pfpSize = Math.round(t.size * 0.42);
  const side = t.bubbleSide ?? "right";
  const bubbleW = 320;

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
      className="absolute -translate-x-1/2 -translate-y-1/2 font-sans antialiased"
    >
      <motion.div style={{ y: float }} className="relative h-full w-full">
        {/* Initials Container Bubble */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: t.color,
            color: t.textColor ?? "#fff",
            boxShadow: "0 20px 50px -15px rgba(0,0,0,0.18)",
          }}
        >
          <span className="font-bold tracking-tight" style={{ fontSize: t.size * 0.22 }}>
            {initials(t.name)}
          </span>
        </div>

        {/* Avatar badge outline remains clean white to pop out from colored backdrops */}
        <div
          className="absolute overflow-hidden rounded-full bg-white"
          style={{
            width: pfpSize,
            height: pfpSize,
            top: "-4px",
            ...(side === "right" ? { left: "-8px" } : { right: "-8px" }),
            zIndex: 30,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15), 0 0 0 3.5px white",
          }}
        >
          <img src={t.avatar} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
        </div>

        {/* Message Card Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[-14px] z-10"
          style={{
            width: bubbleW,
            ...(side === "right" ? { left: t.size + 24 } : { right: t.size + 24 }),
          }}
        >
          {/* Flipped card background and tracking variables to follow scroll transformation */}
          <motion.div
            style={{ backgroundColor: cardBg, color: cardText }}
            className={`relative px-5 py-4 shadow-[0_25px_55px_-15px_rgba(0,0,0,0.2)] border border-transparent
              ${
                side === "right"
                  ? "rounded-[22px] rounded-tl-[4px]"
                  : "rounded-[22px] rounded-tr-[4px]"
              }`}
          >
            {/* The Integrated Dynamic Message Pointer Beak */}
            <motion.div
              aria-hidden
              style={{ backgroundColor: cardBg }}
              className={`absolute top-0 w-3.5 h-3.5 pointer-events-none
                ${
                  side === "right"
                    ? "right-full -mr-[1px] [clip-path:polygon(100%_0,0_0,100%_100%)]"
                    : "left-full -ml-[1px] [clip-path:polygon(0_0,0_100%,100%_0)]"
                }`}
            />

            <p className="text-[14px] font-normal leading-relaxed tracking-tight opacity-95">
              "{t.message}"
            </p>

            <div className="mt-2.5 flex items-center justify-between">
              <motion.p
                style={{ color: subText }}
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {t.name} &middot; <span className="font-medium opacity-85">{t.role}</span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
