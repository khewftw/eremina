import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { BrandBadge } from "./BrandBadge";
import { DesktopNavLeft, DesktopNavRight, HeaderUtilityIcons } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative z-10 h-[68px] w-full shrink-0 border-b border-[#0B2341]/[0.06] bg-surface md:h-[76px] lg:h-[84px]">
      <div className="relative mx-auto flex h-full max-w-[1580px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[-0.03em] text-red md:hidden"
          >
            Еремина
          </Link>
          <SocialLinks />
          <DesktopNavLeft />
        </div>

        <BrandBadge />

        <div className="flex items-center gap-9">
          <DesktopNavRight />
          <span
            aria-hidden="true"
            className="hidden h-[30px] w-px bg-[#0B2341]/[0.12] md:block"
          />
          <HeaderUtilityIcons />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
