import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import lehenga from "@/assets/collection-lehenga.jpg";
import sherwani from "@/assets/collection-sherwani.jpg";
import anarkali from "@/assets/collection-anarkali.jpg";
import embroidery from "@/assets/embroidery-detail.jpg";
import fabrics from "@/assets/fabrics-stack.jpg";
import tailor from "@/assets/tailor-hands.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections & Lookbook — Kaariq" },
      { name: "description", content: "Wedding, festive, party and seasonal collections — bespoke, hand-finished and made to measure." },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  { title: "Crimson Bride", price: "₹38,000", tag: "Bridal Lehenga", img: lehenga },
  { title: "Ivory Sherwani", price: "₹24,500", tag: "Wedding · Men", img: sherwani },
  { title: "Blush Anarkali", price: "₹14,200", tag: "Festive · Women", img: anarkali },
  { title: "Zardozi Dupatta", price: "₹9,800", tag: "Hand Embroidered", img: embroidery },
  { title: "Banarasi Library", price: "From ₹4,800/m", tag: "Fabric · Silk", img: fabrics },
  { title: "Cream Linen Suit", price: "₹18,400", tag: "Formal · Men", img: tailor },
];

const filters = ["All", "Wedding Edit", "Festive", "Party", "Formal", "New Arrivals", "Best Sellers"];

function CollectionsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Collections</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance max-w-4xl">
            The lookbook. <em>Made to measure.</em>
          </h1>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {filters.map((f, i) => (
              <button key={f} className={`text-sm tracking-wide pb-1 ${i === 0 ? "border-b border-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {items.map((it, i) => (
            <Link key={it.title} to="/booking" className={`group block ${i % 3 === 1 ? "lg:translate-y-16" : ""}`}>
              <div className="overflow-hidden bg-muted aspect-[3/4]">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{it.tag}</p>
                  <h3 className="font-display text-2xl mt-1">{it.title}</h3>
                </div>
                <p className="text-sm whitespace-nowrap">{it.price}</p>
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-accent inline-flex items-center gap-1">
                Customize <ArrowUpRight className="w-3 h-3" />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
