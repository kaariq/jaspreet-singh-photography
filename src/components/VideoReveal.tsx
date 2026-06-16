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
 *  phase 1 (0 → 0.30)  : a centred ~70% frame grows to cover the full screen
 *  phase 2 (0.30 → 0.55): holds fullscreen
 *  phase 3 (0.55 → 1)  : fades off while minimising back down
 */
export function VideoReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const widthVw = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.9], [70, 100, 100, 46]);
  const heightVh = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.9], [70, 100, 100, 40]);
  const radius = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.9], [28, 0, 0, 28]);
  const frameOpacity = useTransform(scrollYProgress, [0.55, 0.78, 0.95], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.55, 0.95], [1, 0.9]);

  const overlayOpacity = useTransform(scrollYProgress, [0.08, 0.3, 0.55, 0.75], [0, 1, 1, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);

  const spring = { stiffness: 120, damping: 24, mass: 0.7 };
  const sWidth = useSpring(widthVw, spring);
  const sHeight = useSpring(heightVh, spring);
  const sRadius = useSpring(radius, spring);

  return (
    <section ref={ref} className="relative z-10" style={{ height: "360vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          className="relative overflow-hidden bg-black"
          style={{
            width: useMotionTemplate`${sWidth}vw`,
            height: useMotionTemplate`${sHeight}vh`,
            borderRadius: useMotionTemplate`${sRadius}px`,
            opacity: frameOpacity,
            scale,
            boxShadow: "0 50px 120px -40px rgba(0,0,0,0.55)",
          }}
        >
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 45%)" }}
          />

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute left-7 top-7"
          >
            <span
              className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black"
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                Featured film
              </p>
              <p className="font-display text-3xl font-semibold md:text-5xl">
                Quiet Interiors — A Reel
              </p>
            </div>
            <p className="hidden text-right text-xs text-white/55 md:block">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
            Scroll to frame the shot
          </p>
          <p className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            A reel, framed by scroll.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
