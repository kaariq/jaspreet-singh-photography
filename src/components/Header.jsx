import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, ChevronRight, LogOut } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import { NAV, SITE } from '@/mock/mock';
import { useAuth } from '@/contexts/AuthContext';
const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const routeFor = (key, item) => `/${key === 'tailoring' ? 'tailoring' : key === 'collections' ? 'collections' : key === 'pricing' ? 'pricing' : key === 'explore' ? 'explore' : key === 'booking' ? 'booking' : 'contact'}/${slug(item)}`;
const parentRoute = (key) => `/${key === 'booking' ? 'booking' : key}`;

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();
  const { isAuthed, user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(null); setMobile(false); }, [loc.pathname]);

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-50">
      <div className={`bg-[#ffffff] border-b border-[#E0BCC0] transition-shadow ${scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.04)]' : ''}`}
        onMouseLeave={() => setOpen(null)}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="h-16 lg:h-[72px] flex items-center justify-between gap-4">
            {/* Brand left */}
         <Link to="/" className="select-none flex items-center gap-3">
            {/* Logo */}
            <img
              src="/kaariq.svg" // place inside public folder
              alt="KAARIQ Logo"
              className="w-[140px] h-[50px] object-contain"
            />
            <div className="hidden lg:block text-[10px] tracking-[0.28em] uppercase text-[#6B4046] border-l border-[#C99CA2] pl-3">
             · 
            </div>
            <img
              src="/boutique.svg" // place inside public folder
              alt="Boutique Logo"
              className="h-[200px] w-[190px] object-contain"
            />
          </Link>
            {/* Right icons */}
            <div className="flex items-center gap-4 lg:gap-5 text-[#2A0A12]">
              <Link to="/booking/book-appointment" className="hidden lg:inline-block text-[12px] tracking-[0.18em] uppercase border border-[#2A0A12]/80 px-4 py-2 hover:bg-[#2A0A12] hover:text-[#ffffff] transition-colors">Book Appointment</Link>
              <div className="relative">
                <button onClick={() => isAuthed ? setUserMenu((v) => !v) : nav('/login')} aria-label="Account" className="hover:opacity-70 flex items-center gap-2">
                  <User className="w-[18px] h-[18px]"/>
                  {isAuthed && <span className="hidden lg:inline text-[11px] tracking-[0.18em] uppercase">{user.name?.split(' ')[0]}</span>}
                </button>
                {userMenu && isAuthed && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#E0BCC0] shadow-lg z-50">
                    <Link to="/profile" onClick={() => setUserMenu(false)} className="block px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-[#F7EBEC]">Profile</Link>
                    <Link to="/profile" onClick={() => setUserMenu(false)} className="block px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-[#F7EBEC]">Orders</Link>
                    <button onClick={() => {                                                                                                                                                        aaut(); setUserMenu(false); nav('/'); }} className="w-full text-left px-4 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-[#F7EBEC] flex items-center gap-2 border-t border-[#E0BCC0]"><LogOut className="w-3.5 h-3.5"/>Sign out</button>
                  </div>
                )}
              </div>
              <button aria-label="Bag" className="relative hover:opacity-70"><ShoppingBag className="w-[18px] h-[18px]"/><span className="absolute -top-2 -right-2 text-[10px] bg-[#6E0D25] text-[#ffffff] rounded-full w-4 h-4 flex items-center justify-center">0</span></button>
              <button className="lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu"><Menu className="w-5 h-5"/></button>
            </div>
          </div>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-10 pb-3">
            {NAV.map((n) => (
              <div key={n.key} onMouseEnter={() => setOpen(n.key)} className="relative">
                <Link to={parentRoute(n.key)} className={`text-[12px] tracking-[0.22em] uppercase pb-1 border-b ${open === n.key ? 'border-[#2A0A12]' : 'border-transparent'} hover:border-[#2A0A12] transition-colors`}>
                  {n.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        {/* Mega menu */}
        <div className={`hidden lg:block absolute left-0 right-0 top-full bg-[#F7EBEC] border-t border-b border-[#E0BCC0] overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <div className="edit-num text-[#6B4046]">{open ? `0${(NAV.findIndex(x=>x.key===open)+1)}` : ''} / 06</div>
              <h3 className="font-serif-display text-3xl mt-2 text-[#2A0A12]">{NAV.find(n => n.key === open)?.label}</h3>
              <p className="text-sm text-[#6B4046] mt-3 leading-relaxed">Discover bespoke craft, made to your measure — at the atelier or your doorstep.</p>
            </div>
            <div className="col-span-7 grid grid-cols-4 gap-8">
              {open && NAV.find(n => n.key === open)?.columns.map((col) => (
                <div key={col.title}>
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[#6B4046] mb-3">{col.title}</div>
                  <ul className="space-y-2">
                    {col.items.map((it) => (
                      <li key={it}>
                        <Link to={routeFor(open, it)} className="link-underline text-[14px] text-[#2A0A12]">{it}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-span-2">
              <div className="aspect-[4/5] overflow-hidden bg-[#ECD4D7]">
                <img src="https://images.unsplash.com/photo-1746372283841-dbb3838f9935" alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="text-[11px] tracking-[0.22em] uppercase mt-3 text-[#2A0A12]">Featured · The Wedding Edit</div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-[60] bg-black/40 lg:hidden" onClick={() => setMobile(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-[88%] max-w-sm bg-[#ffffff] p-6 overflow-y-auto" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <span className="font-italiana text-xl tracking-[0.3em]">KAARIQ</span>
              <button onClick={() => setMobile(false)} aria-label="Close"><X className="w-5 h-5"/></button>
            </div>
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.key}>
                  <details className="group border-b border-[#E0BCC0]">
                    <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                      <span className="text-[13px] tracking-[0.22em] uppercase">{n.label}</span>
                      <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform"/>
                    </summary>
                    <div className="pb-3 pl-2 space-y-3">
                      {n.columns.map((c) => (
                        <div key={c.title}>
                          <div className="text-[11px] tracking-[0.22em] uppercase text-[#6B4046] mb-1">{c.title}</div>
                          <ul className="space-y-1">
                            {c.items.map(it => <li key={it}><Link to={routeFor(n.key, it)} className="text-[14px]">{it}</Link></li>)}
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
  );
}
