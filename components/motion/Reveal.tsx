"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "./gsap-config";

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  start?: string;
  /** Animate immediately on mount instead of on scroll into view (use for above-the-fold content). */
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  y = 32,
  x = 0,
  scale = 1,
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y, x, scale },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: immediate
            ? undefined
            : { trigger: el, start, toggleActions: "play none none reverse" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [y, x, scale, delay, duration, start, immediate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
