import Link from "next/link";
import { ArticleCard, type ArticleCardData } from "@/components/article/ArticleCard";

export function ArticleSidebar({ items, moreHref }: { items: ArticleCardData[]; moreHref: string }) {
  if (items.length === 0) return null;

  return (
    <aside className="md:sticky md:top-10 md:self-start">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-950/60">Последние материалы</p>
      <div className="mt-2 flex flex-col">
        {items.map((item) => (
          <ArticleCard key={item.href} item={item} variant="compact" />
        ))}
      </div>
      <Link
        href={moreHref}
        className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-navy-950 transition-colors duration-180 ease-out hover:text-red"
      >
        Показать ещё →
      </Link>
    </aside>
  );
}
