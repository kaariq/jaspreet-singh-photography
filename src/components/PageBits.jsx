import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function PageHero({ tag, title, subtitle, image }) {
  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="edit-num text-mute">—  {tag}</div>
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-7xl mt-2 sm:mt-3 lg:mt-4 leading-[1.05] lg:leading-[1.02] text-ink">{title}</h1>
            {subtitle && <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-mute mt-3 sm:mt-4 lg:mt-5 max-w-xl leading-relaxed">{subtitle}</p>}
          </div>
          {image && (
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] sm:aspect-[5/4] overflow-hidden bg-rose-pale">
                <img src={image} alt="" className="w-full h-full object-cover"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-5 sm:pt-8 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-mute overflow-x-auto no-scrollbar whitespace-nowrap">
      {items.map((it, i) => (
        <span key={i}>
          {it.to ? <Link to={it.to} className="hover:text-ink">{it.label}</Link> : <span className="text-ink">{it.label}</span>}
          {i < items.length - 1 && <span className="mx-2 opacity-50">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function GarmentCard({ title, image, price, badge, to='/tailoring' }) {
  return (
    <Link to={to} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"/>
        {badge && <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase">{badge}</span>}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"/>
      </div>
      <div className="flex items-start justify-between gap-2 mt-2 sm:mt-3">
        <h3 className="font-serif-display text-sm sm:text-base lg:text-lg text-ink leading-tight">{title}</h3>
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink mt-1 opacity-60 group-hover:opacity-100 shrink-0"/>
      </div>
      {price && <div className="text-[10px] sm:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-mute mt-0.5">{price}</div>}
    </Link>
  );
}
