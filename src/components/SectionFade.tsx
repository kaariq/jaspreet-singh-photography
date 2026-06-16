/**
 * A seamless gradient bridge between a light and a dark section so the colour
 * shift reads as one continuous surface rather than a hard cut.
 */
export function SectionFade({
  from = "oklch(0.99 0 0)",
  to = "oklch(0.13 0 0)",
  height = 160,
}: {
  from?: string;
  to?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className="relative z-10 -my-px w-full"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}
