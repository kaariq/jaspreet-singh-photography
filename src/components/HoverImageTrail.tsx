import { useEffect, useRef } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&q=80",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&q=80",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80",
];

/**
 * Renders a trail of images that follow the cursor while it hovers
 * over `targetRef`. Inspired by editorial/portfolio sites.
 */
export function HoverImageTrail({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const lastSpawn = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const target = targetRef.current;
    const container = containerRef.current;
    if (!target || !container) return;

    const spawn = (x: number, y: number) => {
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      if (Math.hypot(dx, dy) < 90) return; // throttle by distance
      const now = performance.now();
      if (now - lastSpawn.current < 80) return;
      lastSpawn.current = now;
      lastPos.current = { x, y };

      const rect = container.getBoundingClientRect();
      const img = document.createElement("img");
      img.src = IMAGES[indexRef.current % IMAGES.length];
      indexRef.current++;
      img.className = "trail-img";
      const rot = (Math.random() - 0.5) * 18;
      img.style.left = `${x - rect.left}px`;
      img.style.top = `${y - rect.top}px`;
      img.style.setProperty("--rot", `${rot}deg`);
      container.appendChild(img);
      setTimeout(() => img.remove(), 900);
    };

    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    const onEnter = (e: MouseEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    target.addEventListener("mousemove", onMove);
    target.addEventListener("mouseenter", onEnter);
    return () => {
      target.removeEventListener("mousemove", onMove);
      target.removeEventListener("mouseenter", onEnter);
    };
  }, [targetRef]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 3 }}
    />
  );
}
