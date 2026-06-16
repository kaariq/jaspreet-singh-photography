import { useEffect, useState } from "react";

/**
 * Very thin mustard ribbon that snakes through the page with repeating
 * tagline text following the curve. Subtle parallax on scroll.
 */
export function ScrollRibbon() {
  const [scrollY, setScrollY] = useState(0);
  const [docH, setDocH] = useState(3000);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => {
      setDocH(Math.max(document.body.scrollHeight, window.innerHeight * 3));
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const id = window.setTimeout(onResize, 800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(id);
    };
  }, []);

  const width = 1440;
  const height = docH;
  const segments = Math.max(5, Math.floor(height / 600));
  const stepY = height / segments;

  let d = `M ${width * 0.05} ${stepY * 0.3}`;
  for (let i = 0; i < segments; i++) {
    const y1 = stepY * i + stepY * 0.4;
    const y2 = stepY * i + stepY * 0.7;
    const y = stepY * (i + 1) + stepY * 0.3;
    const x1 = i % 2 === 0 ? width * 1.15 : width * -0.15;
    const x2 = i % 2 === 0 ? width * -0.15 : width * 1.15;
    const x = i % 2 === 0 ? width * 0.05 : width * 0.95;
    d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
  }

  const parallax = scrollY * 0.18;
  const tagline =
    "  THROUGH MY LENS  ·  PORTRAIT  ·  EDITORIAL  ·  BRAND STORIES  ·  CAPTURED IN LIGHT  ·  ";
  const repeated = tagline.repeat(60);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ transform: `translateY(${-parallax}px)` }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-x-0 top-0"
      >
        <defs>
          <path id="ribbonPath" d={d} />
          <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.18)" />
          </filter>
        </defs>

        {/* Thin mustard line — kept very subtle */}
        <path
          d={d}
          fill="none"
          stroke="var(--mustard)"
          strokeWidth="1"
          opacity="0.22"
        />

        {/* Tagline text along the curve */}
        <text
          fontFamily="Inter Tight, sans-serif"
          fontWeight="600"
          fontSize="10"
          letterSpacing="3"
          fill="oklch(0.13 0 0 / 0.12)"
        >
          <textPath href="#ribbonPath" startOffset="0">
            {repeated}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
