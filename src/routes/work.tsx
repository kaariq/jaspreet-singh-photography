import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkGallery } from "@/components/WorkGallery";
import meta from "@/data/meta/work.json";
import { buildHead } from "@/lib/meta";

export const Route = createFileRoute("/work")({
  head: () => buildHead(meta),
  component: WorkPage,
});


function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <div className="canvas-grid" />
      <SiteNav />

      <header className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:pt-40">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-black/45">
          Archive · 2024 — 2026
        </p>
        <h1 className="font-display text-5xl font-black tracking-tight md:text-8xl">
          selected{" "}
          <span className="font-serif italic font-normal" style={{ color: "var(--tomato)" }}>
            work.
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-black/55">
          A scrolling wall of favourites — each frame lit, shot and graded by
          hand. Hover any image to see what it belongs to.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <WorkGallery />
      </section>

      <SiteFooter />
    </main>
  );
}
