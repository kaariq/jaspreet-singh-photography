import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SOCIAL = [
  { label: "Instagram", handle: "@js.lens", href: "#" },
  { label: "Behance", handle: "/jslens", href: "#" },
  { label: "Vimeo", handle: "/jsfilms", href: "#" },
  { label: "Email", handle: "hello@jslens.studio", href: "mailto:hello@jslens.studio" },
];

export function SiteFooter() {
  return (
    <footer
      id="book"
      className="relative z-10 overflow-hidden bg-[oklch(0.11_0_0)] px-6 pb-12 pt-28 text-white md:pt-40"
    >
      {/* book my call */}
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
          Now booking · Sept – Dec '26
        </p>
        <h2 className="font-display text-[clamp(2.6rem,9vw,8rem)] font-black leading-[0.9] tracking-tight">
          book my
          <br />
          <span className="font-serif italic font-light" style={{ color: "var(--mustard)" }}>
            call.
          </span>
        </h2>
        <a
          href="mailto:hello@jslens.studio"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-black transition hover:bg-white/90"
        >
          <span className="text-sm font-medium">Start a project</span>
          <span
            className="grid h-11 w-11 place-items-center rounded-full text-black transition group-hover:rotate-45"
            style={{ backgroundColor: "var(--mustard)" }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </a>
      </div>

      {/* giant JS initials */}
      <div className="pointer-events-none mt-24 select-none overflow-hidden">
        <motion.h3
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center font-display text-[clamp(8rem,38vw,30rem)] font-black leading-none tracking-tighter text-white/[0.07]"
        >
          JS
        </motion.h3>
      </div>

      <div className="mx-auto mt-4 grid max-w-6xl gap-10 border-t border-white/10 pt-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-md font-display text-sm font-black text-black"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              JS
            </span>
            <span className="font-display text-lg font-semibold">JS Lens Studio</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            A small photography studio crafting quietly cinematic portraits,
            editorial stories and brand films — composed to age well.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group flex flex-col gap-0.5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {s.label}
              </span>
              <span className="font-display text-base text-white/90 transition group-hover:text-[var(--mustard)]">
                {s.handle}
              </span>
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-xs text-white/40">
        © {new Date().getFullYear()} JS Lens Studio — all frames reserved.
      </p>
    </footer>
  );
}
