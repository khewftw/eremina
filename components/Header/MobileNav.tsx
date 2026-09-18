"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "@/components/motion/gsap-config";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "./SocialLinks";

export type MobileNavItem = { title: string; slug: string };
export type MobileNavData = {
  directions: MobileNavItem[];
  experience: MobileNavItem[];
  team: MobileNavItem[];
  press: MobileNavItem[];
};

type MobileNavProps = {
  data: MobileNavData;
  transparent: boolean;
  className?: string;
};

const accordionSections: { key: keyof MobileNavData; label: string; routeSegment: string }[] = [
  { key: "directions", label: "Направления", routeSegment: "directions" },
  { key: "experience", label: "Опыт", routeSegment: "experience" },
  { key: "team", label: "Команда", routeSegment: "team" },
  { key: "press", label: "Пресс-центр", routeSegment: "news" },
];

const flatLinks = [
  { label: "О Екатерине", href: "/#about" },
  { label: "Контакты", href: "/#footer-contacts" },
];

export function MobileNav({ data, transparent, className }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (panelRef.current && !reduced) {
      gsap.fromTo(panelRef.current, { x: "100%" }, { x: "0%", duration: 0.4, ease: "power3.out" });
    }
    if (backdropRef.current && !reduced) {
      gsap.fromTo(backdropRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-label="Меню"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className={`flex h-9 w-9 flex-col items-center justify-center gap-[5px] transition-colors duration-200 ease-out ${transparent ? "text-white" : "text-text"}`}
      >
        <span className="block h-[2px] w-[22px] bg-current" />
        <span className="block h-[2px] w-[22px] bg-current" />
        <span className="block h-[2px] w-[22px] bg-current" />
      </button>

      {open && (
        <>
          <div
            ref={backdropRef}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-navy-950/40"
          />

          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Основная навигация"
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-[380px] flex-col overflow-y-auto bg-surface"
          >
            <div className="flex items-center justify-between border-b border-navy-900/10 px-5 py-4">
              <Link href="/" aria-label="На главную" onClick={() => setOpen(false)}>
                <Logo tone="brand" className="h-[28px] w-auto" />
              </Link>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center text-text"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 px-5 py-4">
              {flatLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-navy-950/10 py-4 text-[15px] font-semibold text-navy-950"
                >
                  {link.label}
                </a>
              ))}

              {accordionSections.map((section) => {
                const items = data[section.key];
                if (items.length === 0) return null;

                return (
                  <details key={section.key} className="group border-b border-navy-950/10 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                      {section.label}
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 text-navy-950/50 transition-transform duration-200 ease-out group-open:rotate-180"
                      >
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>

                    <ul className="mt-3 flex flex-col gap-3 pb-1 pl-1">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <a
                            href={`/${section.routeSegment}/${item.slug}`}
                            onClick={() => setOpen(false)}
                            className="block text-[14px] text-muted transition-colors duration-180 ease-out hover:text-red"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={`/${section.routeSegment}`}
                          onClick={() => setOpen(false)}
                          className="block text-[13px] font-semibold uppercase tracking-[0.05em] text-red"
                        >
                          Все →
                        </a>
                      </li>
                    </ul>
                  </details>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 border-t border-navy-900/10 px-5 py-5">
              <a href="tel:+70000000000" className="text-[14px] font-semibold text-navy-950">
                +7 (000) 000-00-00
              </a>
              <p className="text-[13px] text-muted">г. Москва, ул. Примерная, д. 1</p>
              <SocialLinks className="mt-1 flex items-center gap-5" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
