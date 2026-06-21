import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import meta from "@/data/meta/journal.json";
import journalData from "@/data/pages/journal.json";
import { buildHead } from "@/lib/meta";

export const Route = createFileRoute("/journal")({
  head: () => buildHead(meta),
  component: JournalPage,
});

const POSTS = journalData.posts;


function JournalPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      <header className="mx-auto max-w-6xl px-6 pb-12 pt-32 md:pt-44">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45">
          The Journal
        </p>
        <h1 className="font-display text-5xl font-black tracking-tight md:text-8xl">
          notes &{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
            frames.
          </span>
        </h1>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 pb-28 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            className="group overflow-hidden  border border-black/10 bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black backdrop-blur">
                {p.tag}
              </span>
            </div>
            <div className="p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
                {p.date}
              </p>
              <h2 className="mt-2 font-serif text-2xl italic leading-tight md:text-3xl">
                {p.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-black/55">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-black/70 transition group-hover:text-[var(--tomato)]">
                Read more <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
