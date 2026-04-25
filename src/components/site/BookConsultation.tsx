import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, MessageCircle, Phone } from "lucide-react";
import tailorHands from "@/assets/tailor-hands.jpg";

export function BookConsultation() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-cream rounded-sm overflow-hidden border border-border">
        {/* Left visual */}
        <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[520px]">
          <img
            src={tailorHands}
            alt="Master tailor at work"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur p-5 max-w-xs">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Complimentary</p>
            <p className="font-display text-xl mt-2">30-min styling session</p>
            <p className="text-xs text-muted-foreground mt-2">In-studio, at home, or virtual.</p>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Book a consultation</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-balance">
            Let's design something <em>just for you.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Tell us about the occasion, share inspiration, or simply say hello. Our stylist will guide you through fabrics, fits and finishes — no obligation.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              to="/booking"
              className="group flex items-start gap-3 p-4 bg-background border border-border hover:border-primary transition-colors"
            >
              <Calendar className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Book in-studio</p>
                <p className="text-xs text-muted-foreground mt-1">Mumbai · Bandra</p>
              </div>
            </Link>
            <Link
              to="/booking"
              className="group flex items-start gap-3 p-4 bg-background border border-border hover:border-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Virtual call</p>
                <p className="text-xs text-muted-foreground mt-1">Anywhere, anytime</p>
              </div>
            </Link>
            <Link
              to="/contact"
              className="group flex items-start gap-3 p-4 bg-background border border-border hover:border-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">WhatsApp us</p>
                <p className="text-xs text-muted-foreground mt-1">Reply within 1 hr</p>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-foreground transition-colors"
            >
              Book consultation
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Free · No commitment · 30 min
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
