import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, ChevronRight, LogOut } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import { NAV, SITE, SUBITEMS } from "@/data";
import { useAuth } from "@/contexts/AuthContext";

// Map nav item slug -> SUBITEMS key
const SUB_KEY_MAP = {
  kurti: "kurti",
  blouse: "blouse",
  lehengas: "lehengas",
  "sharara-and-co-ord-sets": "shararaCoords",
  "western-dresses-and-jumpsuits": "dresses",
  "shirts-and-trousers": "shirtsTrousers",
  suits: "suits",
  shirts: "shirts",
  trousers: "trousers",
  "kurta-pyjama": "kurtaPyjama",
  "nehru-jackets": "nehruJackets",
  sherwanis: "sherwanis",
  "suits-and-blazers": "suitsBlazers",
  "embroidery-and-work": "embroidery",
  "lace-and-patch-work": "lacePatch",
  "fabric-dyeing": "dyeing",
  "fittings-and-alterations": "alterations",
};
const getSubs = (slug) => {
  const key = SUB_KEY_MAP[slug];
  return key && SUBITEMS[key] ? SUBITEMS[key] : null;
};
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const routeFor = (key, item) =>
  `/${key === "tailoring" ? "tailoring" : key === "collections" ? "collections" : key === "pricing" ? "pricing" : key === "explore" ? "explore" : key === "booking" ? "booking" : "contact"}/${slug(item)}`;
const parentRoute = (key) => `/${key === "booking" ? "booking" : key}`;

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [hoverItem, setHoverItem] = useState(null); // { key, slug }
  const loc = useLocation();
  const nav = useNavigate();
  const { isAuthed, user, logout, cart } = useAuth();
  const cartCount = cart?.length || 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setHoverItem(null);
    setMobile(false);
  }, [loc.pathname]);

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50">
        <div
          className={`bg-white border-b border-rose transition-shadow ${scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""}`}
          onMouseLeave={() => {
            setOpen(null);
            setHoverItem(null);
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="h-16 lg:h-[72px] flex items-center justify-between gap-4">
              {/* Brand left */}
              <Link to="/" className="select-none flex items-center gap-2 sm:gap-3 min-w-0">
                <img
                  src="/logo.png"
                  alt="KAARIQ"
                  className=" absolute left-[70px] top-[15px] h-[60px] sm:h-[80px] w-auto object-contain"
                />
              </Link>
              {/* Right icons */}
              <div className="flex items-center gap-4 lg:gap-5 text-ink">
                <Link
                  to="/booking/book-appointment"
                  className="hidden lg:inline-block text-[12px] tracking-[0.18em] uppercase border border-ink/80 px-4 py-2 hover:bg-ink hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
                <div className="relative">
                  <button
                    onClick={() => (isAuthed ? setUserMenu((v) => !v) : nav("/login"))}
                    aria-label="Account"
                    className="hover:opacity-70 flex items-center gap-2"
                  >
                    <User className="w-[18px] h-[18px]" />
                    {isAuthed && (
                      <span className="hidden lg:inline text-[11px] tracking-[0.18em] uppercase">
                        {user.name?.split(" ")[0]}
                      </span>
                    )}
                  </button>
                  {userMenu && isAuthed && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-rose shadow-lg z-50">
                      <Link
                        to="/profile"
                        onClick={() => setUserMenu(false)}
                        className="block px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-blush"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/profile"
                        onClick={() => setUserMenu(false)}
                        className="block px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-blush"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setUserMenu(false);
                          nav("/");
                        }}
                        className="w-full text-left px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-blush flex items-center gap-2 border-t border-rose"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
                <Link to="/cart" aria-label="Cart" className="relative hover:opacity-70">
                  <ShoppingBag className="w-[18px] h-[18px]" />
                  <span className="absolute -top-2 -right-2 text-[10px] bg-wine text-white rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                    {cartCount}
                  </span>
                </Link>
                <button
                  className="lg:hidden"
                  onClick={() => setMobile(true)}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center justify-center gap-10 pb-3">
              {NAV.map((n) => {
                const onSection =
                  loc.pathname === parentRoute(n.key) ||
                  loc.pathname.startsWith(parentRoute(n.key) + "/");
                const isActive = open === n.key;
                return (
                  <div
                    key={n.key}
                    onMouseEnter={() => !onSection && setOpen(n.key)}
                    className="relative"
                  >
                    <Link
                      to={parentRoute(n.key)}
                      aria-current={onSection ? "page" : undefined}
                      className={`text-[12px] tracking-[0.22em] uppercase pb-1 border-b ${isActive || onSection ? "border-ink" : "border-transparent"} hover:border-ink transition-colors`}
                    >
                      {n.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          {/* Mega menu */}
          <div
            className={`hidden lg:block absolute left-0 right-0 top-full bg-blush border-t border-b border-rose overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-12 gap-10">
              <div className="col-span-3">
                <h3 className="font-serif-display text-3xl mt-2 text-ink">
                  {NAV.find((n) => n.key === open)?.label}
                </h3>
                <p className="text-sm text-mute mt-3 leading-relaxed">
                  Discover bespoke craft, made to your measure — at the boutique or your doorstep.
                </p>
              </div>
              <div className="col-span-6 grid grid-cols-3 gap-8" onMouseLeave={() => setHoverItem(null)}>
                {open &&
                  NAV.find((n) => n.key === open)?.columns.map((col) => (
                    <div key={col.title}>
                      <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
                        {col.title}
                      </div>
                      <ul className="space-y-2">
                        {col.items.map((it) => {
                          const itemSlug = slug(it);
                          const hasSubs = !!getSubs(itemSlug);
                          const isHovered =
                            hoverItem?.key === open && hoverItem?.slug === itemSlug;
                          return (
                            <li
                              key={it}
                              onMouseEnter={() =>
                                hasSubs
                                  ? setHoverItem({ key: open, slug: itemSlug })
                                  : setHoverItem(null)
                              }
                            >
                              <Link
                                to={routeFor(open, it)}
                                className={`link-underline text-[14px] ${isHovered ? "text-wine font-medium" : "text-ink"}`}
                              >
                                {it}
                                {hasSubs && (
                                  <span className="ml-1 text-mute text-[11px]">›</span>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
              </div>
              <div className="col-span-3 border-l border-rose pl-8">
                {(() => {
                  const subs = hoverItem ? getSubs(hoverItem.slug) : null;
                  if (subs && subs.length) {
                    return (
                      <div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
                          {hoverItem.slug.replace(/-/g, " ")} · Styles
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 max-h-[340px] overflow-y-auto pr-2">
                          {subs.slice(0, 24).map((s) => (
                            <li key={s.id}>
                              <Link
                                to={`/tailoring/${hoverItem.slug}#${s.id}`}
                                className="link-underline text-[13px] text-ink"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <>
                      <div className="aspect-[4/5] overflow-hidden bg-rose-pale">
                        <img
                          src="https://images.unsplash.com/photo-1746372283841-dbb3838f9935"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[11px] tracking-[0.22em] uppercase mt-3 text-ink">
                        Featured · The Wedding Edit
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile drawer */}
        {mobile && (
          <div
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
            onClick={() => setMobile(false)}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-[88%] max-w-sm bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-italiana text-xl tracking-[0.3em]">KAARIQ</span>
                <button onClick={() => setMobile(false)} aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV.map((n) => (
                  <li key={n.key}>
                    <details className="group border-b border-rose">
                      <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                        <span className="text-[13px] tracking-[0.22em] uppercase">{n.label}</span>
                        <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="pb-3 pl-2 space-y-3">
                        {n.columns.map((c) => (
                          <div key={c.title}>
                            <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-1">
                              {c.title}
                            </div>
                            <ul className="space-y-1">
                              {c.items.map((it) => (
                                <li key={it}>
                                  <Link to={routeFor(n.key, it)} className="text-[14px]">
                                    {it}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-[12px] tracking-[0.18em] uppercase">{SITE.phone}</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
