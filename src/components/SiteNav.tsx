import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", to: "/work", hash: undefined },
  { label: "About", to: "/about", hash: undefined },
  { label: "Journal", to: "/journal", hash: undefined },
  { label: "Questions", to: "/", hash: "faq" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // close the mobile sheet on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        className="fixed left-1/2 top-4 z-50 w-[min(94vw,640px)] -translate-x-1/2"
      >
        <div
          className="flex items-center justify-between rounded-full px-2 py-1.5 backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            boxShadow:
              "0 20px 50px -20px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.08) inset",
          }}
        >
          <Link to="/" className="flex items-center gap-2 pl-2 pr-3 text-white">
            <span
              className="grid h-7 w-7 place-items-center rounded-md"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              <Camera className="h-4 w-4 text-black" />
            </span>
            <span className="font-display text-[13px] font-semibold tracking-tight">
              JS Lens
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  className="rounded-full px-3.5 py-1.5 text-[12px] text-white/75 transition hover:bg-white/10 hover:text-white"
                  activeProps={{ className: "bg-white/10 text-white" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <Link
              to="/contact"
              className="hidden rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-black transition hover:bg-white/90 sm:inline-flex"
            >
              Let's Talk
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-white/10 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              className="absolute left-1/2 top-20 w-[92vw] -translate-x-1/2 rounded-3xl bg-[oklch(0.13_0_0)] p-3 text-white"
              style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,0.7)" }}
            >
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="block rounded-2xl px-4 py-3.5 text-lg font-display font-semibold tracking-tight text-white/85 transition hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 block rounded-2xl px-4 py-3.5 text-center text-sm font-medium text-black"
                style={{ backgroundColor: "var(--mustard)" }}
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
