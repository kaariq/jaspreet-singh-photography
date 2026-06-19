import { Instagram, Youtube, Dribbble, Mail } from "lucide-react";
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
      className="relative z-10 overflow-hidden bg-[#0a0a0a] px-6 pb-8 pt-12 text-white md:px-10 md:pb-10 md:pt-16"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* top tagline row */}
        <div className="flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="max-w-md text-right font-serif text-[15px] leading-snug text-white/90 md:text-[18px]"
          >
            From quiet portraits to bold editorial covers,
            <br />
            there's a frame here for every story.
          </motion.p>
        </div>

        {/* wordmark + socials row */}
        <div className="mt-10 flex flex-col items-start gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif leading-[0.85] tracking-[-0.05em]">
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
                className="text-white/85 transition hover:text-[var(--mustard)]"
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* divider */}
        <div className="mt-10 h-px w-full bg-white/15" />

        {/* legal row */}
        <div className="mt-5 flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} — jaspreet singh photography</p>
          <p>Toronto · worldwide</p>
          <p>hello@jslens.studio</p>
        </div>
      </div>
    </footer>
  );
}
