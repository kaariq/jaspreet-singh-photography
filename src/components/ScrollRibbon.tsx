import { motion, useTime, useTransform } from "framer-motion";
import { useId } from "react";

export function ScrollRibbon() {
  const id = useId();

  const time = useTime();

  const startOffset = useTransform(time, [0, 30000], ["0%", "-100%"]);

  const text = "PHOTOGRAPHY • MEMORY • LIGHT • EMOTION • STORYTELLING • HUMAN CONNECTION • ";

  return (
    <div
      className="absolute left-0 top-[58%] w-full"
      style={{
        transform: "translateY(20px)",
      }}
    >
      <svg
        className="w-full h-auto overflow-visible"
        viewBox="0 0 1565 410"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id={id}
            d="
              M20 220
              C180 360 420 340 620 240
              C850 120 980 20 1180 40
              C1380 60 1490 180 1540 220
            "
          />
        </defs>

        <path
          d="
            M20 220
            C180 360 420 340 620 240
            C850 120 980 20 1180 40
            C1380 60 1490 180 1540 220
          "
          fill="none"
          stroke="#F7A8E8"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Moving text */}
        <motion.text
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.12em"
          fill="#1c1917"
          opacity="0.7"
          style={{
            fontFamily: '"Open Sauce One", "Space Grotesk", sans-serif',
          }}
        >
          <motion.textPath href={`#${id}`} startOffset={startOffset}>
            {text.repeat(60)}
          </motion.textPath>
        </motion.text>
      </svg>
    </div>
  );
}
