import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

import heroVideo from "@/assets/hero.mp4.asset.json";

export function VideoReveal() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /**
   * Timeline
   *
   * 0.00 → 0.20 : video rises from bottom
   * 0.20 → 0.45 : expands to fullscreen
   * 0.45 → 1.00 : holds fullscreen with subtle zoom
   */

  const y = useTransform(scrollYProgress, [0, 0.2], ["70vh", "0vh"]);

  const width = useTransform(scrollYProgress, [0.2, 0.45], [62, 100]);

  const height = useTransform(scrollYProgress, [0.2, 0.45], [58, 100]);

  const frameScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  const frameOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const videoScale = useTransform(scrollYProgress, [0.45, 1], [1, 1.08]);

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.85, 1],
    [0, 1, 1, 0],
  );

  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const spring = {
    stiffness: 120,
    damping: 30,
    mass: 0.7,
  };

  const sWidth = useSpring(width, spring);
  const sHeight = useSpring(height, spring);
  const sScale = useSpring(frameScale, spring);

  return (
    <section
      ref={ref}
      className="relative z-10"
      style={{
        height: "180vh",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative overflow-hidden bg-black"
            style={{
              y,
              opacity: frameOpacity,
              scale: sScale,
              width: useMotionTemplate`${sWidth}vw`,
              height: useMotionTemplate`${sHeight}vh`,
              boxShadow: "0 50px 120px -40px rgba(0,0,0,0.55)",
            }}
          >
            <motion.video
              src={heroVideo.url}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{
                scale: videoScale,
              }}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55), transparent 45%)",
              }}
            />

            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white"
            >
              <p className="hidden text-right text-[11px] text-white/55 md:block">
                Shot on 35mm
                <br />
                Graded in-house
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{
            opacity: introOpacity,
          }}
          className="pointer-events-none absolute inset-x-0 bottom-[14vh] flex flex-col items-center text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Scroll to frame the shot
          </p>

          <p className="mt-3 font-serif text-3xl italic tracking-tight md:text-5xl">
            A reel, framed by scroll.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
