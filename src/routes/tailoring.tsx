import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { navigation, slugify } from "@/lib/navigation";
import lehenga from "@/assets/collection-lehenga.jpg";
import sherwani from "@/assets/collection-sherwani.jpg";
import embroidery from "@/assets/embroidery-detail.jpg";

export const Route = createFileRoute("/tailoring")({
  head: () => ({
    meta: [
      { title: "Tailoring Services — Kaariq" },
      { name: "description", content: "Bespoke women's wear, men's wear, customizations, alterations and repairs — measured and stitched by master tailors." },
    ],
  }),
  component: TailoringPage,
});

const tailoring = navigation.find((n) => n.key === "tailoring")!;

const benefits = [
  "Doorstep measurement at no charge",
  "100+ premium fabrics in our library",
  "Hand embroidery by heritage artisans",
  "Free lifetime alterations",
];

const visuals = [lehenga, sherwani, embroidery, lehenga];

function TailoringPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Tailoring</p>
            <h1 className="font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance">
              Cut for you.<br /><em>Sewn for now.</em>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground text-lg">
              Whether it's a wedding lehenga, a power blazer, or a simple kurta — we measure, draft and stitch around you. No size charts. No compromises.
            </p>
          </div>
          <ul className="lg:col-span-5 space-y-4 lg:pt-20">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 border-b border-border pb-4">
                <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {tailoring.submenu!.map((sub, idx) => (
        <section key={sub.label} id={slugify(sub.label)} className={`py-24 ${idx % 2 === 1 ? "bg-cream" : ""}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">0{idx + 1}</p>
              <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight text-balance">{sub.label}</h2>
              {sub.items && (
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                  {sub.items.map((it) => (
                    <li key={it}>
                      <Link to="/booking" className="text-sm underline-link inline-block">{it}</Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/booking" className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
                Book this service <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <img src={visuals[idx % visuals.length]} alt={sub.label} loading="lazy" width={1024} height={1280} className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
