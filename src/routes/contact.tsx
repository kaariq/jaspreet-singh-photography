import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Building2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Kaariq" },
      { name: "description", content: "Visit our Mumbai studio, message us on WhatsApp, or send a corporate inquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance max-w-3xl">
            Say hello.<br /><em>We're listening.</em>
          </h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-10">
          <div id="find-our-studio" className="flex gap-5">
            <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.4} />
            <div>
              <h3 className="font-display text-2xl">Find our studio</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Kaariq Atelier<br />
                42, Linking Road, Bandra West<br />
                Mumbai 400050, India<br />
                Mon–Sat · 11am–8pm
              </p>
            </div>
          </div>

          <div id="whatsapp-support" className="flex gap-5">
            <MessageCircle className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.4} />
            <div>
              <h3 className="font-display text-2xl">WhatsApp support</h3>
              <p className="text-muted-foreground mt-2 text-sm">+91 98200 14242 — Mon to Sat, 10am–9pm IST</p>
              <a href="#" className="mt-3 inline-block text-sm border-b border-foreground pb-0.5 underline-link">Open WhatsApp →</a>
            </div>
          </div>

          <div className="flex gap-5">
            <Phone className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.4} />
            <div>
              <h3 className="font-display text-2xl">Call us</h3>
              <p className="text-muted-foreground mt-2 text-sm">+91 22 6611 4242</p>
            </div>
          </div>

          <div className="flex gap-5">
            <Mail className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.4} />
            <div>
              <h3 className="font-display text-2xl">Email</h3>
              <p className="text-muted-foreground mt-2 text-sm">studio@kaariq.in</p>
            </div>
          </div>

          <div id="corporate-inquiries" className="flex gap-5">
            <Building2 className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.4} />
            <div>
              <h3 className="font-display text-2xl">Corporate inquiries</h3>
              <p className="text-muted-foreground mt-2 text-sm">Uniforms, wedding parties, event styling.</p>
              <p className="text-sm mt-1">corporate@kaariq.in</p>
            </div>
          </div>
        </div>

        <form className="lg:col-span-7 bg-cream p-10 lg:p-14 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Send a message</p>
          <h2 className="font-display text-4xl">Tell us about your project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input placeholder="Your name" className="bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base" />
            <input placeholder="Email or phone" className="bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base" />
          </div>
          <input placeholder="Subject" className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base" />
          <textarea rows={6} placeholder="Tell us what you'd like stitched, when you need it, and any references you have." className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base resize-none" />
          <button type="button" className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-accent transition-colors">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
