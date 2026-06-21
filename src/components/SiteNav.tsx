import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { logo } from "@/assets";

const LINKS = [
  { label: "Home", to: "/", hash: undefined },
  { label: "Work", to: "/work", hash: undefined },
  { label: "About", to: "/about", hash: undefined },
  { label: "Journal", to: "/journal", hash: undefined },
  { label: "Approach", to: "/approach", hash: "faq" },
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
        // Increased max-width significantly to 900px and pushed it down slightly more
        className="fixed left-1/2 top-6 z-50 w-[min(94vw,1000px)] -translate-x-1/2"
      >
        <div
          // Added chunkier padding (px-4 py-3)
          className="flex items-center justify-between rounded-full px-2 py-1.5 backdrop-blur-xl"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            boxShadow: "0 20px 50px -20px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.08) inset",
          }}
        >
          <Link to="/" className="flex items-center pl-1 pr-1 text-white">
            <span
              // Massive logo wrapper (h-12 w-12)
              className="grid h-12 w-12 place-items-center rounded-full"
              style={{ backgroundColor: "var(--mustard)" }}
            >
              {/* Larger logo icon (h-7 w-7) */}
              <img src={logo} alt="Camera" className="h-9 w-9" />
            </span>
          </Link>

          {/* Increased gap between nav items */}
          <ul className="hidden items-center gap-2 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  // Scaled font to text-base (16px) with generous padding
                  className="rounded-full px-5 py-2.5 text-base text-white/75 transition hover:bg-white/10 hover:text-white"
                  activeProps={{ className: "bg-white/10 text-white" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              // Thicker, wider button with larger text
              className="hidden rounded-full bg-white px-8 py-2.5 text-base font-medium text-black transition hover:bg-white/90 sm:inline-flex"
            >
              Let's Talk
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              // Scaled up mobile trigger to match logo size
              className="grid h-12 w-12 place-items-center rounded-full text-white transition hover:bg-white/10 md:hidden"
            >
              {/* Larger menu icons */}
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
              // Pushed top spacing down to top-28 to clear the giant navbar
              className="absolute left-1/2 top-28 w-[92vw] -translate-x-1/2 rounded-3xl bg-[oklch(0.13_0_0)] p-5 text-white"
              style={{ boxShadow: "0 40px 90px -40px rgba(0,0,0,0.7)" }}
            >
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  // Huge mobile text (text-2xl) and padding
                  className="block rounded-2xl px-6 py-5 text-2xl font-display font-semibold tracking-tight text-white/85 transition hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                // Scaled up mobile button to text-lg
                className="mt-4 block rounded-2xl px-6 py-5 text-center text-lg font-medium text-black"
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
