import { formatRuDate } from "@/lib/content";

export function ArticleHeader({
  category,
  title,
  excerpt,
  publishedAt,
  updatedAt,
  readingTimeMinutes,
  showDates = true,
}: {
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  showDates?: boolean;
}) {
  return (
    <div className="mt-6">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-red">{category}</p>
      <h1 className="mt-4 max-w-[900px] font-sans text-[36px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-navy-950 sm:text-[44px] md:text-[52px]">
        {title}
      </h1>
      <p className="mt-6 max-w-[680px] text-[18px] leading-relaxed text-muted md:text-[20px]">{excerpt}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium text-muted">
        {showDates && <span>Опубликовано {formatRuDate(publishedAt)}</span>}
        {showDates && updatedAt && updatedAt !== publishedAt && (
          <>
            <span aria-hidden="true">·</span>
            <span>Обновлено {formatRuDate(updatedAt)}</span>
          </>
        )}
        {showDates && <span aria-hidden="true">·</span>}
        <span>{readingTimeMinutes} мин чтения</span>
      </div>
    </div>
  );
}
