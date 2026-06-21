import { useRef } from "react";
import { Instagram, Youtube, Dribbble, Mail, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/impressionsbyjz/", Icon: Instagram },
  { label: "Vimeo", href: "https://www.youtube.com/watch?v=ho_Vklqyixg", Icon: Youtube },
  { label: "Email", href: "mailto:hello@jslens.studio", Icon: Mail },
];

const WORDMARK = "JASPREET";

export function SiteFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const markYRaw = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const markY = useSpring(markYRaw, { stiffness: 60, damping: 22 });
  const markScaleRaw = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const markScale = useSpring(markScaleRaw, { stiffness: 60, damping: 22 });

  return (
    <div ref={containerRef} className="relative mt-[20px] overflow-hidden bg-[#0A0A0A] text-white">
      <footer
        id="book"
        className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1700px] flex-col justify-between px-6 pb-10 pt-24 md:px-16 md:pb-14 md:pt-32"
      >
        {/* Top: invitation + email */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl font-display text-[clamp(2.4rem,5.5vw,5rem)] uppercase leading-[0.95] tracking-tight"
            >
              From quiet portraits to bold editorial covers — there's a frame here for every story.
            </motion.p>

            <motion.a
              href="mailto:hello@jslens.studio"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group inline-flex w-fit items-center gap-3 text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              hello@jslens.studio
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--mustard)" }}
              />
            </motion.a>
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex lg:justify-end"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full border border-white/20 py-3 pl-7 pr-3 transition hover:border-white/50"
            >
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em]">
                Let's make something
              </span>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition group-hover:rotate-45"
                style={{ backgroundColor: "var(--mustard)" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Giant animated wordmark */}
        <motion.div
          style={{ y: markY, scale: markScale }}
          className="my-12 flex flex-wrap items-baseline justify-center gap-x-1 origin-bottom"
        >
          {WORDMARK.split("").map((ch, i) => (
            <span key={`${ch}-${i}`} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block font-display text-[clamp(3.5rem,18vw,16rem)] uppercase leading-[0.8]"
              >
                {ch}
              </motion.span>
            </span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-[clamp(3.5rem,18vw,16rem)] uppercase leading-[0.8] italic"
            style={{ color: "var(--mustard)" }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-white/60 transition hover:text-[var(--mustard)]"
              >
                <item.Icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-[12px] uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:gap-6">
            <p>© Jaspreet Singh Photography {new Date().getFullYear()}</p>
            <p className="hidden sm:inline">·</p>
            <p>Toronto · Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
