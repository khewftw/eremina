import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";
import { getAllContent, formatRuDate, routeSegmentFor, categoryLabelFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Все новости — Екатерина Еремина",
  description: "События, встречи и профессиональная повестка пресс-центра.",
};

export default async function NewsIndexPage() {
  const items = await getAllContent("press");

  return (
    <ArticleIndex
      eyebrow="Пресс-центр"
      heading={["ВСЕ НОВОСТИ", "И МАТЕРИАЛЫ"]}
      items={items.map((item) => ({
        href: `/${routeSegmentFor(item.type)}/${item.slug}`,
        title: item.title,
        excerpt: item.excerpt,
        image: item.heroImage,
        date: formatRuDate(item.publishedAt),
        category: categoryLabelFor(item.type),
      }))}
    />
  );
}
