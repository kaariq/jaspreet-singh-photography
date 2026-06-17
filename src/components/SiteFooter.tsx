import { Instagram, Youtube, Dribbble, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SOCIAL = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Vimeo", href: "#", Icon: Youtube },
  { label: "Behance", href: "#", Icon: Dribbble },
  { label: "Email", href: "mailto:hello@jslens.studio", Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer
      id="book"
      className="relative z-10 overflow-hidden bg-[oklch(0.11_0_0)] px-6 pb-8 pt-16 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
            Now booking · Sept – Dec '26
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
            book my{" "}
            <span className="font-serif italic font-normal" style={{ color: "var(--mustard)" }}>
              call.
            </span>
          </h2>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-black transition hover:bg-white/90"
          >
            <span className="text-[13px] font-medium">Start a project</span>
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-black transition group-hover:rotate-45"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span
            className="grid h-6 w-6 place-items-center rounded-md font-display text-[11px] font-black text-black"
            style={{ backgroundColor: "var(--mustard)" }}
          >
            JS
          </span>
          <span className="text-white/70">JS Lens Studio</span>
        </div>
        <p>© {new Date().getFullYear()} JS Lens Studio — all frames reserved.</p>
      </div>
    </footer>
  );
}
