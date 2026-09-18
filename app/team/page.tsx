import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";
import { getAllContent, formatRuDate, routeSegmentFor, categoryLabelFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Команда — Екатерина Еремина",
  description: "Специалисты, которые работают с профессиональной повесткой: транспорт, право, образование, международные проекты, коммуникации.",
};

export default async function TeamIndexPage() {
  const items = await getAllContent("team");

  return (
    <ArticleIndex
      eyebrow="Команда"
      heading={["ЛЮДИ, КОТОРЫЕ РАБОТАЮТ", "С ПРОФЕССИОНАЛЬНОЙ ПОВЕСТКОЙ"]}
      lede="Экспертная работа строится вокруг специалистов из разных сфер — транспорта и логистики, права, образования, международного сотрудничества и коммуникаций."
      items={items.map((item) => ({
        href: `/${routeSegmentFor(item.type)}/${item.slug}`,
        title: item.person?.name ?? item.title,
        excerpt: item.excerpt,
        image: item.heroImage,
        date: formatRuDate(item.publishedAt),
        category: item.person?.role ?? categoryLabelFor(item.type),
      }))}
    />
  );
}
