import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkGallery } from "@/components/WorkGallery";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — JS Lens Studio" },
      {
        name: "description",
        content:
          "A gallery of selected photography work — portraits, weddings, editorial and brand stories shot through a single, quiet lens.",
      },
      { property: "og:title", content: "Work — JS Lens Studio" },
      {
        property: "og:description",
        content: "Selected photography — portraits, weddings, editorial and brand stories.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      },
    ],
  }),
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
