"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/components/motion/gsap-config";

const links = [
  { label: "ГЛАВНАЯ", href: "/" },
  { label: "ПРОГРАММА", href: "/#directions" },
  { label: "НОВОСТИ", href: "/news" },
  { label: "ПРЕСС-ЦЕНТР", href: "/news" },
  { label: "КОНТАКТЫ", href: "/#footer-contacts" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !open) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.fromTo(
      nav,
      { autoAlpha: 0, y: -12 },
      { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
    gsap.fromTo(
      nav.querySelectorAll("li"),
      { autoAlpha: 0, y: -8 },
      { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.08, stagger: 0.05, ease: "power2.out" },
    );
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Меню"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] text-text"
      >
        <span
          className={`block h-[2px] w-[22px] bg-current transition-transform duration-200 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-[22px] bg-current transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-[2px] w-[22px] bg-current transition-transform duration-200 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          ref={navRef}
          id="mobile-menu"
          aria-label="Основная навигация"
          className="absolute inset-x-0 top-[68px] z-20 border-t border-navy-900/10 bg-surface px-5 py-4"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-[14px] font-semibold tracking-[0.01em] text-text"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
