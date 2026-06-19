import { Instagram, Youtube, Dribbble, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const SOCIAL = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Vimeo", href: "#", Icon: Youtube },
  { label: "Behance", href: "#", Icon: Dribbble },
  { label: "Email", href: "mailto:hello@jslens.studio", Icon: Mail },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SiteFooter() {
  return (
    <footer
      id="book"
      className="relative z-10 overflow-hidden bg-[#0a0a0a] px-6 pb-9 pt-20 text-white md:px-10 md:pb-12 md:pt-28"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* invitation row */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-xl"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/40">
              Currently booking 2026
            </p>
            <p className="font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-[1.2]">
              From quiet portraits to bold editorial covers — there's a frame here for{" "}
              <span className="italic" style={{ color: "var(--mustard)" }}>
                every story.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 py-3 pl-6 pr-3 text-[13px] transition hover:border-[var(--mustard)]"
            >
              Let's make something
              <span
                className="grid h-8 w-8 place-items-center rounded-full text-black transition-transform duration-300 group-hover:rotate-45"
                style={{ backgroundColor: "var(--mustard)" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* giant wordmark */}
        <div className="mt-14 flex flex-col items-start gap-10 md:mt-20 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif leading-[0.82] tracking-[-0.05em]">
            {"jaspreet".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
                className="inline-block text-[clamp(4rem,15vw,11rem)] font-normal"
              >
                {ch}
              </motion.span>
            ))}
            <br />
            {"singh.".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease }}
                className="inline-block text-[clamp(4rem,15vw,11rem)] italic"
                style={{ color: "var(--mustard)" }}
              >
                {ch}
              </motion.span>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
            className="flex items-center gap-5 pb-3"
          >
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/70 transition hover:-translate-y-0.5 hover:text-[var(--mustard)]"
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* legal row */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[10.5px] uppercase tracking-[0.24em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} — jaspreet singh photography</p>
          <p>Toronto · worldwide</p>
          <a href="mailto:hello@jslens.studio" className="transition hover:text-white">
            hello@jslens.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
