"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { MobileNav, type MobileNavData } from "./MobileNav";

type HeaderShellProps = {
  overHero: boolean;
  mobileNavData: MobileNavData;
  leftDesktop: ReactNode;
  rightDesktop: ReactNode;
};

export function HeaderShell({ overHero, mobileNavData, leftDesktop, rightDesktop }: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(!overHero);

  useEffect(() => {
    if (!overHero) return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 h-[68px] w-full transition-colors duration-300 ease-out md:relative md:inset-auto md:top-auto md:z-10 md:h-[76px] md:border-b md:border-[#0B2341]/[0.06] md:bg-surface lg:h-[84px] ${
        transparent ? "bg-transparent" : "border-b border-[#0B2341]/[0.06] bg-surface"
      }`}
    >
      <div className="relative mx-auto flex h-full max-w-[1580px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="На главную" className="md:hidden">
            <Logo tone={transparent ? "white" : "brand"} className="h-[26px] w-auto" />
          </Link>
          {leftDesktop}
        </div>

        <Reveal immediate scale={0.85} y={0} duration={0.6} delay={0.1} className="hidden md:flex">
          <Link href="/" aria-label="На главную">
            <Logo tone="brand" className="h-[34px] w-auto md:h-[38px] lg:h-[44px]" />
          </Link>
        </Reveal>

        <div className="flex items-center gap-9">
          {rightDesktop}
          <MobileNav data={mobileNavData} transparent={transparent} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
