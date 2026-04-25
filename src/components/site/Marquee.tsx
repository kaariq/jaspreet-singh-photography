export function Marquee({ items }: { items: string[] }) {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-cream py-6">
      <div className="marquee flex gap-16 whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl italic text-foreground/80">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
