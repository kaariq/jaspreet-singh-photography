import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { navigation, slugify, type NavSection } from "@/lib/navigation";

function MegaPanel({ section }: { section: NavSection }) {
  if (!section.submenu) return null;
  return (
    <div className="absolute left-0 right-0 top-full bg-background border-t border-border shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-10 px-8 py-12">
        <div className="col-span-8 grid grid-cols-4 gap-10">
          {section.submenu.map((sub) => (
            <div key={sub.label}>
              <Link
                to={section.href}
                className="font-display text-base text-foreground underline-link inline-block mb-4"
              >
                {sub.label}
              </Link>
              {sub.items && (
                <ul className="space-y-2.5">
                  {sub.items.map((it) => (
                    <li key={it}>
                      <Link
                        to={section.href}
                        hash={slugify(it)}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {it}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {section.feature && (
          <Link to={section.feature.href} className="col-span-4 group/feat block">
            <div className="overflow-hidden bg-muted aspect-[4/5]">
              <img
                src={section.feature.image}
                alt={section.feature.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover/feat:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <p className="font-display text-lg">{section.feature.title}</p>
              <span className="text-xs uppercase tracking-widest underline-link">Discover →</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs tracking-[0.2em] uppercase py-2.5 px-4">
        Complimentary doorstep measurement · Free shipping across India over ₹2,499
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu trigger */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link to="/" className="font-display text-2xl lg:text-3xl tracking-tight">
            kaariq<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navigation.map((section) => (
              <div key={section.key} className="group">
                <Link
                  to={section.href}
                  className="text-sm tracking-wide py-7 inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  {section.label}
                  {section.submenu && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>
                <MegaPanel section={section} />
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <button className="p-2.5 hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 hover:text-accent transition-colors hidden sm:inline-flex" aria-label="Account">
              <User className="w-[18px] h-[18px]" />
            </button>
            <button className="p-2.5 hover:text-accent transition-colors relative" aria-label="Bag">
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-accent rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link to="/" onClick={() => setMobileOpen(false)} className="font-display text-2xl">
              kaariq<span className="text-accent">.</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-6">
            {navigation.map((section) => (
              <div key={section.key} className="border-b border-border py-2">
                <button
                  className="w-full flex items-center justify-between py-3 font-display text-xl"
                  onClick={() => setOpenKey(openKey === section.key ? null : section.key)}
                >
                  {section.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openKey === section.key ? "rotate-180" : ""}`} />
                </button>
                {openKey === section.key && section.submenu && (
                  <div className="pb-4 space-y-4">
                    {section.submenu.map((sub) => (
                      <div key={sub.label}>
                        <p className="text-sm font-medium text-foreground mb-1.5">{sub.label}</p>
                        {sub.items && (
                          <ul className="space-y-1.5 pl-1">
                            {sub.items.map((it) => (
                              <li key={it}>
                                <Link
                                  to={section.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-sm text-muted-foreground"
                                >
                                  {it}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
