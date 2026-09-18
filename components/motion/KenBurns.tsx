"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "./gsap-config";

/** Slow zoom-out from a scaled-in state on mount — for hero background imagery. */
export function KenBurns({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tween = gsap.fromTo(el, { scale: 1.12 }, { scale: 1, duration: 2.4, ease: "power2.out" });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
