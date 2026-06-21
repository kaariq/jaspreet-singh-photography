import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleries from "@/data/galleries.json";

type Shot = { src: string; cat?: string };

export function WorkGallery() {
  const shots = (galleries as { work?: Shot[] }).work ?? [];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length],
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (openIdx === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, prev, next]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {shots.map((s, i) => (
          <motion.figure
            key={s.src + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            onClick={() => setOpenIdx(i)}
            className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-black/5"
          >
            <img
              src={s.src}
              alt={s.cat ?? "work"}
              loading="lazy"
              className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            {s.cat ? (
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black opacity-0 backdrop-blur transition group-hover:opacity-100">
                {s.cat}
              </figcaption>
            ) : null}
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && shots[openIdx] ? (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.img
              key={shots[openIdx].src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={shots[openIdx].src.replace(/w=\d+/, "w=1920")}
              alt={shots[openIdx].cat ?? "work"}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] max-w-[92vw] object-contain"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/70">
              {openIdx + 1} / {shots.length}
              {shots[openIdx].cat ? `  ·  ${shots[openIdx].cat}` : ""}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
