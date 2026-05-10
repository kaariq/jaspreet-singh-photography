import React from "react";
import { Link } from "react-router-dom";
import { ServiceIntro, FAQ_C, CTAStrip } from "@/components/InfoSections";
import { IMAGES, FAQ, SITE } from "@/data";
import { Ruler, Palette, Sparkles, Scissors, Heart, ShieldCheck } from "lucide-react";

function Hero({ tag, title, lead, image }) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="font-serif tracking-[0.28em] font-medium text-[10px] sm:text-xs text-wine">
            {tag}
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl text-ink mt-3 leading-tight">
            {title}
          </h1>
          <p className="text-ink/70 text-sm sm:text-base mt-4 leading-relaxed">{lead}</p>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-rose-pale">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16">
      <h2 className="font-serif-display text-2xl sm:text-3xl text-ink mb-5">{title}</h2>
      <div className="text-ink/75 text-sm sm:text-base leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function Cards({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((it) => (
        <div key={it.title} className="p-6 bg-white border border-rose">
          {it.icon && <it.icon className="w-6 h-6 text-wine" />}
          <h3 className="font-serif-display text-lg text-ink mt-3">{it.title}</h3>
          <p className="text-ink/70 text-sm mt-2 leading-relaxed">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function AboutUs() {
  return (
    <main className="pb-16">
      <Hero
        tag="— OUR STORY"
        title="Hand-finished tailoring, made for you."
        lead="Kaariq is a contemporary atelier blending heirloom craftsmanship with modern silhouettes. Every garment is cut, stitched and finished by master tailors who treat fit like an art."
        image={IMAGES.craft}
      />
      <Section title="Why we exist">
        <p>
          We started Kaariq because off-the-rack rarely flatters. Our promise is simple: a perfect
          fit, fabrics you can trust, and a process that feels personal from sketch to delivery.
        </p>
      </Section>
      <Section title="What we stand for">
        <Cards
          items={[
            { icon: Heart, title: "People first", desc: "Stylists who listen, tailors who care." },
            { icon: ShieldCheck, title: "Quality assured", desc: "Premium fabrics, precise stitch counts, fit guarantee." },
            { icon: Sparkles, title: "Modern craft", desc: "Heritage techniques meet contemporary design." },
          ]}
        />
      </Section>
      <CTAStrip
        title="Begin your bespoke journey"
        subtitle="Visit our atelier or book a virtual consultation."
        ctaLabel="Book a fitting"
        to="/booking/book-appointment"
      />
    </main>
  );
}

export function MeasurementGuide() {
  return (
    <main className="pb-16">
      <Hero
        tag="— SIZE & MEASUREMENT"
        title="Get measured, accurately."
        lead="Follow our step-by-step guide to capture your body measurements at home — or book a free doorstep visit and our stylist will do it for you."
        image={IMAGES.fabric}
      />
      <Section title="Tools you'll need">
        <Cards
          items={[
            { icon: Ruler, title: "Soft measuring tape", desc: "Use a flexible cloth tape — not a metal one." },
            { icon: Sparkles, title: "Fitted clothing", desc: "Wear a thin top and undergarments for accuracy." },
            { icon: Heart, title: "A friend", desc: "It's much easier with someone helping you." },
          ]}
        />
      </Section>
      <Section title="Key measurements">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bust / Chest:</strong> Around the fullest point, tape parallel to the floor.</li>
          <li><strong>Waist:</strong> Around the narrowest part of your torso.</li>
          <li><strong>Hip:</strong> Around the fullest point of your hips and seat.</li>
          <li><strong>Shoulder:</strong> From one shoulder edge to the other across the back.</li>
          <li><strong>Sleeve:</strong> From shoulder edge to wrist with arm slightly bent.</li>
          <li><strong>Length:</strong> From shoulder/waist to your desired hem.</li>
        </ul>
      </Section>
      <CTAStrip
        title="Prefer a stylist to measure you?"
        subtitle="Free doorstep measurement available across major cities."
        ctaLabel="Book home visit"
        to="/booking/home-visit"
      />
    </main>
  );
}

export function PersonalStyling() {
  return (
    <main className="pb-16">
      <Hero
        tag="— PERSONAL STYLING"
        title="A stylist in your corner."
        lead="One-to-one styling sessions to discover silhouettes that flatter your body, palette and lifestyle — for everyday, festive or wedding wardrobes."
        image={IMAGES.lookbook}
      />
      <Section title="What's included">
        <Cards
          items={[
            { icon: Sparkles, title: "Style discovery", desc: "Body type, palette and lifestyle assessment." },
            { icon: Scissors, title: "Wardrobe edit", desc: "Capsule recommendations & silhouette pairings." },
            { icon: Palette, title: "Fabric & color", desc: "Curated swatch board for your skin tone." },
          ]}
        />
      </Section>
      <CTAStrip
        title="Book a styling session"
        subtitle="60-minute video or in-atelier consultation."
        ctaLabel="Schedule now"
        to="/booking/styling-session"
      />
    </main>
  );
}

export function FabricColorGuide() {
  return (
    <main className="pb-16">
      <Hero
        tag="— FABRIC & COLOR"
        title="Choose fabrics that move with you."
        lead="From breezy cottons to lustrous silks — understand drape, weight and finish so every garment feels right for the occasion."
        image={IMAGES.fabric}
      />
      <Section title="Our fabric families">
        <Cards
          items={[
            { icon: Sparkles, title: "Silks", desc: "Raw silk, organza, satin — for festive and bridal." },
            { icon: Heart, title: "Cottons", desc: "Mulmul, chanderi, kota — light, breathable, daily." },
            { icon: ShieldCheck, title: "Wools & blends", desc: "Suiting, blazers, winter formals." },
          ]}
        />
      </Section>
      <Section title="Color guidance">
        <p>
          Cool undertones love jewel tones — emerald, sapphire, wine. Warm undertones glow in
          earthy tones — terracotta, mustard, olive. Our stylists help you build a palette that
          flatters consistently.
        </p>
      </Section>
      <CTAStrip
        title="Want a personal fabric board?"
        subtitle="We'll curate swatches based on your skin tone and lifestyle."
        ctaLabel="Request swatches"
        to="/contact/find-our-boutique"
      />
    </main>
  );
}

export function FAQs() {
  return (
    <main className="pb-16">
      <Hero
        tag="— FAQ"
        title="Everything you wanted to ask."
        lead="Quick answers to the most common questions about fittings, fabrics, timelines and our bespoke process."
        image={IMAGES.boutique}
      />
      <FAQ_C items={FAQ} />
      <CTAStrip
        title="Still have questions?"
        subtitle={`Call us at ${SITE.phone} or chat on WhatsApp.`}
        ctaLabel="Talk to us"
        to="/contact/find-our-boutique"
      />
    </main>
  );
}

export function Craftsmanship() {
  return (
    <main className="pb-16">
      <Hero
        tag="— OUR CRAFT"
        title="The hands behind every stitch."
        lead="Master tailors, embroiderers and finishers — a team of artisans dedicated to garments that last a lifetime."
        image={IMAGES.embroidery}
      />
      <Section title="Our atelier">
        <p>
          Every garment passes through 12+ skilled hands — from pattern cutting and stitching to
          embroidery, pressing and final quality control. We invest in our team's craft and
          well-being.
        </p>
      </Section>
    </main>
  );
}

// Simple generic placeholder for any unknown sub-page
export function GenericInfo({ title, lead }) {
  return (
    <main className="pb-16">
      <Hero tag="— KAARIQ" title={title} lead={lead} image={IMAGES.boutique} />
      <Section title="Coming soon">
        <p>This page is being curated. In the meantime, our stylists are happy to help.</p>
        <Link to="/contact/find-our-boutique" className="link-underline text-[12px] tracking-[0.22em] uppercase mt-4 inline-block">
          Contact us →
        </Link>
      </Section>
    </main>
  );
}
