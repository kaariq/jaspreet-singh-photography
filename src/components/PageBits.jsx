import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ tag, title, subtitle, image }) {
  return (
    <section className="relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 lg:pt-16"></div>
    </section>
  );
}

export function GarmentCard({ title, image, img, price, badge, to = "/tailoring" }) {
  const src = image || img;
  return (
    <Link to={to} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-rose-pale">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
        {badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="flex items-start justify-between gap-2 mt-2 sm:mt-3">
        <h3 className="font-serif-display text-sm sm:text-base lg:text-lg text-ink leading-tight">
          {title}
        </h3>
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink mt-1 opacity-60 group-hover:opacity-100 shrink-0" />
      </div>
      {price && (
        <div className="text-[10px] sm:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-mute mt-0.5">
          {price}
        </div>
      )}
    </Link>
  );
}
