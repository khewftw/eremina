import Link from "next/link";

export function ArticleBreadcrumb({
  category,
  categoryHref,
  title,
}: {
  category: string;
  categoryHref: string;
  title: string;
}) {
  return (
    <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
      <Link href="/" className="transition-colors duration-180 ease-out hover:text-red">
        Главная
      </Link>
      <span aria-hidden="true">/</span>
      <Link href={categoryHref} className="transition-colors duration-180 ease-out hover:text-red">
        {category}
      </Link>
      <span aria-hidden="true">/</span>
      <span className="text-navy-950/70 normal-case tracking-normal">{title}</span>
    </nav>
  );
}
