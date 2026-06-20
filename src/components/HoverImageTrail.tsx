import { useEffect, useRef } from "react";

const IMAGES = [
  "src/assets/images/1.jpg",
  "src/assets/images/2.jpg",
  "src/assets/images/3.jpg",
  "src/assets/images/4.jpg",
  "src/assets/images/5.jpg",
  "src/assets/images/6.jpg",
  "src/assets/images/7.jpg",
];
export function HoverImageTrail({
  targetRef,
  safeZoneRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  safeZoneRef: React.RefObject<HTMLElement | null>;
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
      const safeRect = safeZoneRef.current?.getBoundingClientRect();

      if (safeRect) {
        const padding = 30;

        const insideSafeZone =
          x > safeRect.left - padding &&
          x < safeRect.right + padding &&
          y > safeRect.top - padding &&
          y < safeRect.bottom + padding;

        if (insideSafeZone) return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;

      if (Math.hypot(dx, dy) < 70) return;

      const now = performance.now();

      if (now - lastSpawn.current < 80) return;

      lastSpawn.current = now;
      lastPos.current = { x, y };

      const rect = container.getBoundingClientRect();

      const img = document.createElement("img");

      img.src = IMAGES[indexRef.current % IMAGES.length];

      indexRef.current++;

      img.className = "trail-img";

      img.style.left = `${x - rect.left}px`;
      img.style.top = `${y - rect.top}px`;

      img.style.setProperty("--rot", `${(Math.random() - 0.5) * 18}deg`);

      container.appendChild(img);

      setTimeout(() => img.remove(), 1400);
    };

    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);

    const onEnter = (e: MouseEvent) => {
      lastPos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    target.addEventListener("mousemove", onMove);
    target.addEventListener("mouseenter", onEnter);

    return () => {
      target.removeEventListener("mousemove", onMove);
      target.removeEventListener("mouseenter", onEnter);
    };
  }, [targetRef, safeZoneRef]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}
