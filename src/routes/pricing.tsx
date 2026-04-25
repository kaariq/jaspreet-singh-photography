import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Kaariq Tailoring" },
      { name: "description", content: "Transparent rates for stitching, premium bespoke, alterations and bulk corporate orders." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Standard",
    tag: "Everyday tailoring",
    price: "₹1,200",
    unit: "/ garment onwards",
    features: ["Doorstep measurement", "200+ in-house fabrics", "7-day turnaround", "1 free alteration"],
    cta: "Most popular",
  },
  {
    name: "Premium Bespoke",
    tag: "Couture & bridal",
    price: "₹14,000",
    unit: "/ piece onwards",
    features: ["Senior master tailor", "Hand embroidery & zardozi", "3 fittings included", "Lifetime alterations", "Garment bag & box"],
    cta: "Signature",
    featured: true,
  },
  {
    name: "Alterations",
    tag: "Repairs & resizing",
    price: "₹250",
    unit: "/ alteration onwards",
    features: ["Pickup & drop in 50km", "48-hour turnaround", "Invisible mending", "Restyling on request"],
    cta: "Quick service",
  },
];

const altRates = [
  ["Hem shortening (trousers)", "₹250"],
  ["Shirt slimming", "₹450"],
  ["Blouse re-fit", "₹550"],
  ["Lehenga waist resize", "₹900"],
  ["Suit jacket resize", "₹1,400"],
  ["Saree fall & pico", "₹200"],
];

function PricingPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Pricing</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance max-w-4xl">
            Honest rates.<br /><em>No surprise stitches.</em>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-lg">
            Our pricing is transparent and itemized. Pay for the craft, not the markup.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`p-10 border ${t.featured ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
              <p className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-gold" : "text-accent"}`}>{t.tag}</p>
              <h3 className="font-display text-3xl mt-4">{t.name}</h3>
              <p className="font-display text-5xl mt-8">{t.price}</p>
              <p className={`text-xs uppercase tracking-widest mt-1 ${t.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.unit}</p>
              <ul className="mt-10 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "text-gold" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/booking" className={`mt-10 inline-flex items-center gap-2 px-6 py-3.5 text-sm tracking-wide w-full justify-center ${t.featured ? "bg-gold text-primary hover:bg-primary-foreground" : "bg-primary text-primary-foreground hover:bg-accent"} transition-colors`}>
                {t.cta} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="alteration-charges" className="bg-cream py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Alteration charges</p>
            <h2 className="font-display text-5xl mt-4 leading-tight">Quick, neat,<br /><em>and fairly priced.</em></h2>
          </div>
          <ul className="lg:col-span-8">
            {altRates.map(([s, p]) => (
              <li key={s} className="flex justify-between items-baseline py-5 border-b border-border">
                <span className="font-display text-xl">{s}</span>
                <span className="text-sm tracking-wide">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bulk-orders" className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Bulk & Corporate</p>
        <h2 className="font-display text-5xl md:text-6xl mt-4 text-balance max-w-3xl mx-auto">
          Uniforms, wedding parties,<br /><em>and weddings of 200.</em>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Volume pricing, dedicated account manager, and synchronized delivery across cities.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
          Request a quote <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
