import { motion, useTime, useTransform } from "framer-motion";
import { useId } from "react";

export function ScrollRibbon() {
  const id = useId();

  const time = useTime();

  const startOffset = useTransform(time, [0, 30000], ["0%", "-100%"]);

  const text = "SOCIAL MEDIA MANAGEMENT • SHORT FORM CONTENT • INFLUENCER MARKETING • ";

  return (
    <div
      className="absolute left-0 top-[55%] w-full pointer-events-none z-0"
      style={{
        transform: "translateY(-50%)",
      }}
    >
      <svg
        width="100%"
        viewBox="-10 -30 1565 410"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <defs>
          <path
            id={id}
            d="
              M12.8 194.6
              C12.8 194.6 111.5 356.7 371.3 334.1
              C705.3 305.0 906.8 -8.7 1201.3 16.4
              C1405.0 33.8 1537.3 189.6 1537.3 189.6
            "
          />
        </defs>

        <path
          d="
            M12.8 194.6
            C12.8 194.6 111.5 356.7 371.3 334.1
            C705.3 305.0 906.8 -8.7 1201.3 16.4
            C1405.0 33.8 1537.3 189.6 1537.3 189.6
          "
          fill="none"
          stroke="#F7A8E8"
          strokeWidth="32"
          strokeLinecap="round"
        />

        <motion.text
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.08em"
          fill="#1c1917"
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
