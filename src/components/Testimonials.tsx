import { motion } from "framer-motion";

type Message = {
  name: string;
  role: string;
  avatar: string;
  message: string;
  accent: string;
  side: "left" | "right";
};

const MESSAGES: Message[] = [
  {
    name: "Amara Nwosu",
    role: "Creative Director · FRAME",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    message:
      "He sees the frame before it even happens. Every shot already belonged in the magazine.",
    accent: "var(--tomato)",
    side: "left",
  },
  {
    name: "Leo Marchetti",
    role: "Founder · Northbound",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    message:
      "Calm on set, surgical in the edit. He delivered a visual language we still use today.",
    accent: "var(--mustard)",
    side: "right",
  },
  {
    name: "Sana Kapoor",
    role: "Bride · June '25",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    message: "I cried looking at the gallery. Less like photographs, more like memory itself.",
    accent: "var(--tomato)",
    side: "left",
  },
  {
    name: "Diego Reyes",
    role: "Editor · Cereal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    message: "Light is his first language. Nothing loud — everything intentional.",
    accent: "var(--mustard)",
    side: "right",
  },
  {
    name: "Mira Volkov",
    role: "Stylist",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    message: "Effortless to collaborate with. I book him every chance I get.",
    accent: "var(--tomato)",
    side: "left",
  },
  {
    name: "Theo Laurent",
    role: "Art Director · MONOCLE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    message: "Quiet, precise, generous. The kind of eye you build a brand around.",
    accent: "var(--mustard)",
    side: "right",
  },
];

const LOOP_DURATION = 26; // seconds for a full pass

export function Testimonials() {
  // duplicate the list so the upward stream is always populated
  const stream = [...MESSAGES, ...MESSAGES];

  return (
    <section id="words" className="relative z-10 overflow-hidden bg-[#0a0a0a] py-28 md:py-36">
      {/* heading */}
      <div className="relative z-20 mx-auto mb-4 max-w-3xl px-6 text-center">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/40">
          In their words
        </p>
        <h2 className="font-display text-5xl font-black tracking-tight text-white md:text-7xl">
          kind{" "}
          <span className="font-serif font-normal italic" style={{ color: "var(--mustard)" }}>
            words.
          </span>
        </h2>
        <p className="mt-4 text-[13px] leading-relaxed text-white/45">
          A conversation that never really ends.
        </p>
      </div>

      {/* conversation stream */}
      <div className="relative mx-auto h-[640px] max-w-2xl px-6 md:h-[680px]">
        {/* fade masks top & bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="absolute inset-0 overflow-hidden px-6">
          {stream.map((m, i) => {
            const count = stream.length;
            // even spread of negative delays so bubbles pre-fill the column
            const delay = -(i * LOOP_DURATION) / count;
            // gentle per-bubble speed variation
            const duration = LOOP_DURATION + (i % 3) * 3;

            return <FloatingBubble key={i} m={m} delay={delay} duration={duration} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FloatingBubble({
  m,
  delay,
  duration,
}: {
  m: Message;
  delay: number;
  duration: number;
}) {
  const isRight = m.side === "right";
  // slight horizontal drift for organic motion
  const drift = isRight ? [0, 14, -6, 0] : [0, -14, 6, 0];

  return (
    <motion.div
      initial={false}
      animate={{
        y: ["115%", "-40%"],
        x: drift,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.12, 0.85, 1],
        x: {
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute w-[min(82%,360px)] ${isRight ? "right-0" : "left-0"}`}
    >
      <div className={`flex items-end gap-2.5 ${isRight ? "flex-row-reverse" : ""}`}>
        <img
          src={m.avatar}
          alt={m.name}
          className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white/15"
        />
        <div
          className={`rounded-[20px] px-4 py-3 ${
            isRight
              ? "rounded-br-md bg-white text-black"
              : "rounded-bl-md bg-white/[0.08] text-white backdrop-blur-md"
          }`}
          style={
            isRight
              ? { boxShadow: "0 20px 50px -28px rgba(0,0,0,0.6)" }
              : { boxShadow: "0 20px 50px -28px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }
          }
        >
          <p className="font-serif text-[14.5px] leading-[1.5]">{m.message}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: m.accent }} />
            <span
              className={`text-[9.5px] font-semibold uppercase tracking-[0.18em] ${
                isRight ? "text-black/40" : "text-white/40"
              }`}
            >
              {m.name} · {m.role}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
