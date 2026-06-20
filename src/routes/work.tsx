import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkGallery } from "@/components/WorkGallery";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Portrait, Wedding & Editorial Gallery" },
      {
        name: "description",
        content:
          "A gallery of selected photography work — portraits, weddings, editorial and brand stories shot through a single, quiet lens.",
      },
      { property: "og:title", content: "Work — Jaspreet Singh Photography" },
      {
        property: "og:description",
        content: "Selected photography — portraits, weddings, editorial and brand stories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:title", content: "Work — Jaspreet Singh Photography" },
      { name: "twitter:description", content: "Selected portraits, weddings & editorial." },
    ],
    links: [{ rel: "canonical", href: "/work" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Selected Work — Jaspreet Singh Photography",
          url: "/work",
          author: { "@id": "/#person" },
        }),
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
