"use client";

import React, { useEffect, useRef } from "react";
import { useIsTouch } from "../hooks/useIsTouch";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface CursorFXProps {
  hyper?: boolean;
}

export const CursorFX: React.FC<CursorFXProps> = ({ hyper }) => {
  const isTouch = useIsTouch();
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || isTouch || reduce) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let bounds = { w: window.innerWidth, h: window.innerHeight };
    const m = { x: bounds.w / 2, y: bounds.h / 2 };
    const t = { ...m };
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onMove = (e: PointerEvent) => { m.x = e.clientX; m.y = e.clientY; schedule(); };
    let scheduled = false;
    const schedule = () => { if (!scheduled) { scheduled = true; raf = requestAnimationFrame(loop); } };
    const loop = () => {
      scheduled = false;
      t.x = lerp(t.x, m.x, 0.18);
      t.y = lerp(t.y, m.y, 0.18);
      el.style.transform = `translate3d(${t.x - 22}px, ${t.y - 22}px, 0)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    const ro = new ResizeObserver(() => { bounds = { w: window.innerWidth, h: window.innerHeight }; });
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [isTouch, reduce]);

  if (isTouch || reduce) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 z-[999] h-11 w-11 pointer-events-none mix-blend-difference"
      style={{ filter: `drop-shadow(0 0 28px rgba(56,189,248,${hyper ? ".95" : ".6"}))` }}
    >
      <div className="relative h-full w-full">
        <div className={`absolute inset-0 rounded-full ${hyper ? "bg-gradient-to-br from-cyan-200 via-white to-fuchsia-300" : "bg-gradient-to-br from-cyan-200 to-fuchsia-300"} opacity-90`} />
        <div className="absolute inset-2 rounded-full bg-[#06070c]" />
      </div>
    </div>
  );
};
