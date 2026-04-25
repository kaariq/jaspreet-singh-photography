import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, BookOpen, Wand2, ClipboardList, Film } from "lucide-react";
import embroidery from "@/assets/embroidery-detail.jpg";
import lehenga from "@/assets/collection-lehenga.jpg";
import anarkali from "@/assets/collection-anarkali.jpg";
import fabrics from "@/assets/fabrics-stack.jpg";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Lookbook, AI Design & Style Quiz | Kaariq" },
      { name: "description", content: "Browse our gallery, take the style quiz, and design your own piece with the Kaariq AI design tool." },
    ],
  }),
  component: ExplorePage,
});

const tiles = [
  { icon: BookOpen, title: "Gallery & Lookbook", desc: "Real clients. Real garments. Browse every silhouette we've stitched.", img: lehenga },
  { icon: Sparkles, title: "Blog & Fashion News", desc: "Trends, fabric guides, and the stories behind every collection.", img: anarkali },
  { icon: Wand2, title: "AI Design Tool", desc: "Describe your dream outfit. We'll generate three sketches in seconds.", img: embroidery },
  { icon: ClipboardList, title: "Personal Style Quiz", desc: "Five questions. One personalized capsule wardrobe recommendation.", img: fabrics },
  { icon: Film, title: "Customer Showreels", desc: "Watch our brides, grooms and patrons on their big days.", img: anarkali },
];

function ExplorePage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Explore</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance max-w-4xl">
            Inspiration, <em>on tap.</em>
          </h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiles.map((t, i) => (
          <Link key={t.title} to="/booking" className={`group relative block overflow-hidden bg-muted aspect-[5/4] ${i === 0 ? "md:row-span-2 md:aspect-[5/8]" : ""}`}>
            <img src={t.img} alt={t.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
              <t.icon className="w-6 h-6 text-gold" strokeWidth={1.4} />
              <h3 className="font-display text-3xl mt-4">{t.title}</h3>
              <p className="text-sm text-primary-foreground/80 mt-2 max-w-md">{t.desc}</p>
              <span className="mt-5 text-xs uppercase tracking-[0.2em] inline-flex items-center gap-1">
                Open <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
