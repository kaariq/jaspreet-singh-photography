import { useEffect, useRef } from "react";

/**
 * Camera-focus cursor: a square reticle with corner brackets and a
 * center dot. Shrinks to a tiny point after the pointer pauses.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      el.classList.remove("idle");
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => el.classList.add("idle"), 550);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-focus" aria-hidden>
      <svg viewBox="0 0 56 56" fill="none">
        {/* corner brackets */}
        <path d="M4 14 V4 H14" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 4 H52 V14" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M52 42 V52 H42" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 52 H4 V42" stroke="black" strokeWidth="2" strokeLinecap="round" />
        {/* crosshairs */}
        <line x1="28" y1="20" x2="28" y2="26" stroke="black" strokeWidth="1.5" />
        <line x1="28" y1="30" x2="28" y2="36" stroke="black" strokeWidth="1.5" />
        <line x1="20" y1="28" x2="26" y2="28" stroke="black" strokeWidth="1.5" />
        <line x1="30" y1="28" x2="36" y2="28" stroke="black" strokeWidth="1.5" />
        {/* center dot */}
        <circle cx="28" cy="28" r="2" fill="var(--tomato)" />
      </svg>
    </div>
  );
}
