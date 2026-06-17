import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import heroVideo from "@/assets/hero.mp4.asset.json";

/**
 * Cinematic video reveal.
 *  phase 0 (0 → 0.08)    : a centred ~62% frame pops/fades in
 *  phase 1 (0.08 → 0.45) : grows to cover the full screen
 *  phase 2 (0.16 → 0.55) : the footage itself zooms in
 *  phase 3 (0.55 → 0.72) : holds fullscreen
 *  phase 4 (0.72 → 0.96) : fades off while minimising back down
 */
export function VideoReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const widthVw = useTransform(
    scrollYProgress,
    [0.08, 0.45, 0.72, 0.96],
    [62, 100, 100, 46],
  );
  const heightVh = useTransform(
    scrollYProgress,
    [0.08, 0.45, 0.72, 0.96],
    [62, 100, 100, 40],
  );
  const radius = useTransform(scrollYProgress, [0.08, 0.45, 0.72, 0.96], [26, 0, 0, 26]);
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.78, 0.96],
    [0, 1, 1, 0],
  );
  const popScale = useTransform(
    scrollYProgress,
    [0, 0.08, 0.72, 0.96],
    [0.9, 1, 1, 0.92],
  );
  // the footage itself zooms in once the frame is large
  const videoScale = useTransform(scrollYProgress, [0.16, 0.55], [1, 1.18]);

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.6, 0.78],
    [0, 1, 1, 0],
  );
  const captionOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const spring = { stiffness: 110, damping: 26, mass: 0.8 };
  const sWidth = useSpring(widthVw, spring);
  const sHeight = useSpring(heightVh, spring);
  const sRadius = useSpring(radius, spring);
  const sScale = useSpring(popScale, spring);

  return (
    <section ref={ref} className="relative z-10" style={{ height: "560vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden bg-black"
          style={{
            width: useMotionTemplate`${sWidth}vw`,
            height: useMotionTemplate`${sHeight}vh`,
            borderRadius: useMotionTemplate`${sRadius}px`,
            opacity: frameOpacity,
            scale: sScale,
            boxShadow: "0 50px 120px -40px rgba(0,0,0,0.55)",
          }}
        >
          <motion.video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            style={{ scale: videoScale }}
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 45%)" }}
          />

          <motion.div style={{ opacity: overlayOpacity }} className="absolute left-7 top-7">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              Reel '26
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                Featured film
              </p>
              <p className="font-serif text-3xl italic md:text-5xl">
                Quiet Interiors — a reel
              </p>
            </div>
            <p className="hidden text-right text-[11px] text-white/55 md:block">
              Shot on 35mm
              <br />
              Graded in-house
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity }}
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
