"use client";

import { useEffect, useRef } from "react";
import { gsap } from "./gsap-config";

/** A vertical line that draws itself in (top to bottom) as its parent is scrolled through. */
export function TimelineLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const track = el?.parentElement;
    if (!el || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { scaleY: 1 });
      return;
    }

    gsap.set(el, { scaleY: 0, transformOrigin: "top" });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: track, start: "top 75%", end: "bottom 75%", scrub: 0.6 },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} aria-hidden="true" className={className} />;
}
