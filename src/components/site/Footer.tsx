import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Crafted on you,<br />
              <em className="text-gold">made for moments.</em>
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70 max-w-md">
              Kaariq is a contemporary tailoring & boutique studio blending heirloom craft with modern silhouettes — measured, stitched and finished by hand.
            </p>
            <form className="mt-10 flex border-b border-primary-foreground/30 pb-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-primary-foreground/50"
              />
              <button className="text-xs uppercase tracking-[0.2em] hover:text-gold transition">
                Subscribe →
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-5">Atelier</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/tailoring" className="underline-link">Tailoring</Link></li>
              <li><Link to="/collections" className="underline-link">Collections</Link></li>
              <li><Link to="/pricing" className="underline-link">Pricing</Link></li>
              <li><Link to="/explore" className="underline-link">Lookbook</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-5">Help</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/booking" className="underline-link">Book Appointment</Link></li>
              <li><Link to="/booking" className="underline-link">Measurement Guide</Link></li>
              <li><Link to="/contact" className="underline-link">WhatsApp Support</Link></li>
              <li><Link to="/contact" className="underline-link">Find the Studio</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-5">Visit</p>
            <p className="text-sm leading-relaxed">
              Kaariq Atelier<br />
              42, Linking Road, Bandra West<br />
              Mumbai 400050, India
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gold transition"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Kaariq Atelier Pvt. Ltd. — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
