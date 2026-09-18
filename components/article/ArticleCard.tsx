import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/ArrowLink";

export type ArticleCardData = {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
};

export function ArticleCard({ item, variant = "grid" }: { item: ArticleCardData; variant?: "grid" | "compact" }) {
  if (variant === "compact") {
    return (
      <Link
        href={item.href}
        className="group flex items-center gap-4 border-t border-navy-950/10 py-5 first:border-t-0 first:pt-0"
      >
        <div className="relative h-[64px] w-[84px] shrink-0 overflow-hidden">
          <Image src={item.image} alt={item.title} fill quality={85} sizes="84px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
            {item.category} · {item.date}
          </p>
          <h3 className="mt-1 line-clamp-2 font-sans text-[14px] font-bold leading-snug text-navy-950 transition-colors duration-180 ease-out group-hover:text-red">
            {item.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-navy-950/15 text-navy-950 transition-colors duration-180 ease-out group-hover:border-red group-hover:bg-red group-hover:text-white"
        >
          <svg width="16" height="8" viewBox="0 0 20 10" fill="none" aria-hidden="true">
            <path
              d="M19.3536 5.35355C19.5488 5.15829 19.5488 4.84171 19.3536 4.64645L16.1716 1.46447C15.9763 1.2692 15.6597 1.2692 15.4645 1.46447C15.2692 1.65973 15.2692 1.97631 15.4645 2.17157L18.2929 5L15.4645 7.82843C15.2692 8.02369 15.2692 8.34027 15.4645 8.53553C15.6597 8.7308 15.9763 8.7308 16.1716 8.53553L19.3536 5.35355ZM0 5.5H19V4.5H0V5.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </Link>
    );
  }

  return (
    <article className="flex h-full flex-col">
      <Link href={item.href} className="group flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={90}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-4 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-red">
          {item.category} · {item.date}
        </p>
        <h3 className="mt-2 font-sans text-[17px] font-extrabold uppercase leading-tight text-navy-950 transition-colors duration-180 ease-out group-hover:text-red">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted">{item.excerpt}</p>
        <ArrowLink className="mt-4 shrink-0" />
      </Link>
    </article>
  );
}
