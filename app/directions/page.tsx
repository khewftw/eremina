import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";
import { getAllContent, formatRuDate, routeSegmentFor, categoryLabelFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ключевые направления — Екатерина Еремина",
  description: "Транспорт и логистика, бизнес-диалог, международное сотрудничество и женские инициативы.",
};

export default async function DirectionsIndexPage() {
  const items = await getAllContent("directions");

  return (
    <ArticleIndex
      eyebrow="Ключевые направления"
      heading={["НАПРАВЛЕНИЯ", "РАБОТЫ"]}
      lede="Профессиональная деятельность Екатерины Ереминой объединяет транспортную отрасль, международное сотрудничество и общественные инициативы."
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
