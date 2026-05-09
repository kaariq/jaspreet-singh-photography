import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, ChevronRight, ChevronLeft, LogOut } from "lucide-react";

import AnnouncementBar from "./AnnouncementBar";
import { NAV, SITE, SUBITEMS } from "@/data";
import { useAuth } from "@/contexts/AuthContext";

const getSubs = (itemSlug) => {
  const key = itemSlug;
  return key && SUBITEMS[key] ? SUBITEMS[key] : null;
};

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const routeFor = (key, item) =>
  `/${
    key === "tailoring"
      ? "tailoring"
      : key === "collections"
        ? "collections"
        : key === "pricing"
          ? "pricing"
          : key === "explore"
            ? "explore"
            : key === "booking"
              ? "booking"
              : "contact"
  }/${slug(item)}`;

const parentRoute = (key) => `/${key === "booking" ? "booking" : key}`;

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [subPage, setSubPage] = useState(null);

  const loc = useLocation();
  const nav = useNavigate();

  const { isAuthed, user, logout, cart } = useAuth();
  const cartCount = cart?.length || 0;

  const activeNav = NAV.find((n) => n.key === open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setSubPage(null);
    setMobile(false);
  }, [loc.pathname]);

  const closeMenu = () => {
    setOpen(null);
    setSubPage(null);
  };

  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50">
        <div
          className={`bg-white border-b border-rose transition-shadow ${
            scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""
          }`}
          onMouseLeave={() => {
            setOpen(null);
            setSubPage(null);
          }}
        >
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="h-16 lg:h-[72px] flex items-center justify-between gap-4">
              {/* LOGO */}
              <Link to="/" className="flex items-center shrink-0">
                <img
                  src="/logo.png"
                  alt="KAARIQ"
                  className="h-[30px] sm:h-[45px] lg:h-[53px] w-auto object-contain"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 min-w-0">
                {NAV.map((n) => {
                  const onSection =
                    loc.pathname === parentRoute(n.key) ||
                    loc.pathname.startsWith(parentRoute(n.key) + "/");

                  const isActive = open === n.key;

                  return (
                    <div
                      key={n.key}
                      onMouseEnter={() => {
                        setOpen(n.key);
                        setSubPage(null);
                      }}
                      className="relative shrink-0"
                    >
                      <Link
                        to={parentRoute(n.key)}
                        aria-current={onSection ? "page" : undefined}
                        className={`text-[11px] xl:text-[12px] tracking-[0.18em] uppercase whitespace-nowrap pb-1 border-b ${
                          isActive || onSection ? "border-ink" : "border-transparent"
                        } hover:border-ink transition-colors`}
                      >
                        {n.label}
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3 lg:gap-4 shrink-0 text-ink">
                <Link
                  to="/booking/book-appointment"
                  className="hidden lg:inline-flex items-center justify-center h-9 px-4 text-[10px] xl:text-[11px] tracking-[0.16em] uppercase border border-ink/80 hover:bg-ink hover:text-white transition-colors whitespace-nowrap"
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
                      <span className="hidden xl:inline text-[11px] tracking-[0.14em] uppercase">
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
          </div>

          {/* MEGA MENU */}
          <div
            className={`hidden lg:block absolute left-0 right-0 top-full bg-blush border-t border-b border-rose overflow-hidden transition-[max-height,opacity] duration-300 ${
              open ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-[1400px] mx-auto px-10 py-10">
              {!subPage ? (
                <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-2">
                    <p className="text-sm text-mute mt-3 leading-relaxed">
                      Custom-crafted outfits made to flatter, fit, and feel effortless.
                    </p>
                  </div>
                  <div className="col-span-7 grid grid-cols-4 gap-8">
                    {activeNav?.columns.map((col) => (
                      <div key={col.title}>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
                          {col.title}
                        </div>

                        <ul className="space-y-2">
                          {col.items.map((it) => {
                            const itemSlug = slug(it);
                            const subs = getSubs(itemSlug);
                            const hasSubs = !!subs?.length;

                            return (
                              <li key={it}>
                                {hasSubs ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setSubPage({
                                        navKey: open,
                                        label: it,
                                        slug: itemSlug,
                                        subs,
                                      })
                                    }
                                    className="link-underline text-[14px] text-ink text-left"
                                  >
                                    {it}
                                    <span className="ml-1 text-mute text-[11px]">›</span>
                                  </button>
                                ) : (
                                  <Link
                                    to={routeFor(open, it)}
                                    onClick={closeMenu}
                                    className="link-underline text-[14px] text-ink"
                                  >
                                    {it}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>{" "}
                  <div className="col-span-3 flex flex-col items-center p-4">
                    <div className="aspect-[4/5] w-[85%] overflow-hidden bg-rose-pale">
                      <img
                        src="/navigation.png"
                        alt=""
                        className="h-full w-full object-cover opacity-75"
                      />
                    </div>
                    {/* <p className="uppercase mt-4 w-[95%] text-sm text-black/40 text-center">
                      Tailored for every celebration.
                    </p> */}
                  </div>
                </div>
              ) : (
                <div className="min-h-[420px]">
                  <button
                    type="button"
                    onClick={() => setSubPage(null)}
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-mute hover:text-ink transition-colors mb-8"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to menu
                  </button>

                  <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-3">
                      <div className="text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
                        {activeNav?.label}
                      </div>

                      <h3 className="font-serif-display text-3xl text-ink">{subPage.label}</h3>

                      <p className="text-sm text-mute mt-3 leading-relaxed">
                        Select a style to explore detailing, finishing and customization choices.
                      </p>

                      <Link
                        to={routeFor(subPage.navKey, subPage.label)}
                        onClick={closeMenu}
                        className="inline-flex mt-6 text-[11px] tracking-[0.22em] uppercase border border-ink/70 px-5 py-3 hover:bg-ink hover:text-white transition-colors"
                      >
                        View all
                      </Link>
                    </div>

                    <div className="col-span-9">
                      <ul className="grid grid-cols-4 gap-x-8 gap-y-2 max-h-[390px] overflow-y-auto pr-3">
                        {subPage.subs.map((s) => (
                          <li key={s.id}>
                            <Link
                              to={`/${subPage.navKey}/${subPage.slug}#${s.id}`}
                              onClick={closeMenu}
                              className="link-underline text-[14px] text-ink"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE DRAWER */}
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
                              {c.items.map((it) => {
                                const itemSlug = slug(it);
                                const subs = getSubs(itemSlug);

                                return (
                                  <li key={it}>
                                    <Link to={routeFor(n.key, it)} className="text-[14px]">
                                      {it}
                                      {subs?.length ? " ›" : ""}
                                    </Link>
                                  </li>
                                );
                              })}
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
