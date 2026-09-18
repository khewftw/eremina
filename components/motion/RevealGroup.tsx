"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "./gsap-config";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

/** Animates its direct children in with a stagger as the group scrolls into view. */
export function RevealGroup({ children, className, y = 32, stagger = 0.12, start = "top 85%" }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el.children, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start, toggleActions: "play none none reverse" },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [y, stagger, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
