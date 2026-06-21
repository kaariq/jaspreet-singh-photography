import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Testimonial = {
  name: string;
  avatar: string;
  message: string;
  x: number;
  y: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara Nwosu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    message:
      "He sees the frame before it even happens. Every shot already belonged in the magazine.",
    x: -12,
    y: 18,
  },
  {
    name: "Leo Marchetti",

    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    message:
      "Calm on set, surgical in the edit. He delivered a visual language we still use today.",
    x: 80,
    y: 26,
  },
  {
    name: "Sana Kapoor",

    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    message: "I cried looking at the gallery. Less like photographs, more like memory itself.",
    x: 48,
    y: 58,
  },
  {
    name: "Diego Reyes",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    message: "Light is his first language. Nothing loud — everything intentional.",
    x: 110,
    y: 90,
  },
  {
    name: "Mira Volkov",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    message: "Effortless to collaborate with. I book him every chance I get.",
    x: -10,
    y: 64,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Background page transition from the original version
  const bg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#f3f4f6", "#0a0a0a", "#0a0a0a", "#f3f4f6"],
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
    <section id="words" ref={ref} className="relative z-10 md:h-[260vh]">
      <motion.div
        className="min-h-screen w-full pb-32 md:sticky md:top-0 md:overflow-hidden md:pb-0"
        style={{ backgroundColor: bg }}
      >
        {/* Dynamic Header Block */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 text-center md:pt-20">
          <motion.p
            className="mb-4 text-xs font-bold uppercase tracking-[0.34em] sm:text-sm"
            style={{ color: subColor }}
          >
            In their words
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(4rem,9vw,7.5rem)] font-light tracking-tight"
            style={{ color: titleColor }}
          >
            kind{" "}
            <span className="italic" style={{ color: "var(--tomato, #e11d48)" }}>
              words.
            </span>
          </motion.h2>
        </div>

        {/* Floating Canvas Layout (Original Animation Style) */}
        <div className="relative mx-auto mt-16 flex w-full max-w-6xl flex-col items-center gap-16 px-6 md:mt-0 md:block md:h-[72vh] md:gap-0">
          {TESTIMONIALS.map((t, i) => (
            <FloatingCard key={t.name} t={t} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCard({
  t,
  index,
  progress,
}: {
  t: Testimonial;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.04 + index * 0.05;
  const end = start + 0.28;

  // y-transform applies the parallax float effect
  const y = useTransform(progress, [start, end], [100, -40]);
  const float = useTransform(progress, [0, 1], [0, -30]);

  return (
    <motion.div
      style={
        {
          "--md-left": `${t.x}%`,
          "--md-top": `${t.y}%`,
          y,
        } as any
      }
      // On mobile we add mr-8 so the right-hanging avatar doesn't overflow the screen
      className="relative z-20 mr-8 flex w-full max-w-[400px] justify-center transition-colors hover:z-30 sm:mr-10 sm:max-w-[340px] md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:mr-0 md:justify-start md:[left:var(--md-left)] md:[top:var(--md-top)]"
    >
      <motion.div style={{ y: float }} className="relative w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          // Strictly white box with dark text
          className="relative flex w-full flex-col justify-center rounded-xl bg-white p-6 pr-14 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] sm:p-8 sm:pr-16"
        >
          {/* Decorative Quote Marks */}
          <span className="absolute font-serif text-[4rem] leading-none text-gray-200 sm:-top-1 sm:left-3 sm:text-[5rem]">
            “
          </span>

          {/* Message Content */}
          <p className="relative z-10 mt-6 text-[14px] font-medium leading-relaxed text-gray-900 sm:mt-8 sm:text-[15px]">
            {t.message}
          </p>

          {/* Author & Company Info */}
          <div className="relative z-10 mt-6 flex flex-col sm:mt-6">
            <p className="text-xs font-semibold text-gray-900 sm:text-sm">
              {t.name} <span className="mx-1 font-light opacity-50">|</span>{" "}
            </p>
          </div>

          {/* Overlapping Profile Picture */}
          <div className="absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-[4px] border-white bg-gray-100 shadow-md sm:-right-10 sm:h-20 sm:w-20">
            <img
              src={t.avatar}
              alt={t.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
