import Link from "next/link";

export function BrandBadge() {
  return (
    <Link
      href="/"
      aria-label="На главную"
      className="absolute left-1/2 top-0 hidden h-[84px] w-[300px] -translate-x-1/2 items-center justify-center bg-red transition-colors duration-200 ease-out hover:bg-red-dark md:flex"
      style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
    >
      <span className="text-[38px] font-bold tracking-[-0.03em] text-white">Еремина</span>
    </Link>
  );
}
