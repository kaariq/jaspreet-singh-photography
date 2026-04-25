import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Video, MapPin, Ruler } from "lucide-react";
import tailor from "@/assets/tailor-hands.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Fitting — Kaariq" },
      { name: "description", content: "Book a doorstep measurement, virtual consultation, or studio appointment with our master tailors." },
    ],
  }),
  component: BookingPage,
});

const steps = [
  { n: "01", t: "Pick a service", d: "Choose tailoring, alterations, or a styling session." },
  { n: "02", t: "Choose a slot", d: "Mornings, evenings, or weekends — we work around you." },
  { n: "03", t: "We arrive on time", d: "Master tailor at your home with fabric swatches in hand." },
  { n: "04", t: "Stitch & deliver", d: "Track every stage. Final fitting at your door." },
];

const options = [
  { icon: MapPin, title: "Studio Appointment", desc: "Visit our Bandra atelier — fabrics, fittings, and chai." },
  { icon: Calendar, title: "Doorstep Measurement", desc: "We come to you. Free across Mumbai metro." },
  { icon: Video, title: "Virtual Consultation", desc: "30-min video call with a senior designer. ₹500, refundable." },
  { icon: Ruler, title: "Self-Measurement Guide", desc: "Step-by-step PDF + video. For our overseas family." },
];

function BookingPage() {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="px-6 lg:px-16 py-24 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Booking & Guide</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95] text-balance">
            Let's begin<br /><em>at your doorstep.</em>
          </h1>
          <p className="mt-8 text-muted-foreground max-w-md">
            Pick a time, choose a place. A master tailor will be there with our fabric library, measuring tape, and a notebook of your dreams.
          </p>
        </div>
        <div className="bg-muted lg:order-last relative min-h-[400px]">
          <img src={tailor} alt="Master tailor" loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-10">Choose how to begin</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((o) => (
            <div key={o.title} className="border border-border p-10 hover:border-accent transition-colors group">
              <o.icon className="w-7 h-7 text-accent" strokeWidth={1.4} />
              <h3 className="font-display text-3xl mt-6">{o.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm">{o.desc}</p>
              <button className="mt-8 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 underline-link">
                Book this <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="our-process" className="bg-cream py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="font-display text-5xl md:text-6xl text-balance max-w-3xl">Our process,<br /><em>at a glance.</em></h2>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="bg-background p-8 border-t-2 border-accent">
                <span className="font-display text-3xl text-accent">{s.n}</span>
                <h3 className="font-display text-xl mt-4">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="book-appointment" className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Quick booking</p>
        <h2 className="font-display text-4xl mt-4">Reserve your slot</h2>
        <form className="mt-10 space-y-6">
          {[
            { label: "Full name", type: "text", placeholder: "Anaya Sharma" },
            { label: "Phone (WhatsApp preferred)", type: "tel", placeholder: "+91 98XXX XXXXX" },
            { label: "City", type: "text", placeholder: "Mumbai" },
            { label: "What would you like stitched?", type: "text", placeholder: "Bridal lehenga · Aug 2026 wedding" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base" />
            </div>
          ))}
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
            Submit request <ArrowUpRight className="w-4 h-4" />
          </Link>
        </form>
      </section>
    </div>
  );
}
