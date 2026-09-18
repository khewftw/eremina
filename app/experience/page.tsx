import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";
import { getAllContent, formatRuDate, routeSegmentFor, categoryLabelFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Профессиональный опыт — Екатерина Еремина",
  description:
    "От общественной приёмной по вопросам логистики до Комитета по транспорту и логистике Делового центра СНГ и образовательных проектов.",
};

export default async function ExperienceIndexPage() {
  const items = await getAllContent("experience");

  return (
    <ArticleIndex
      eyebrow="Опыт"
      heading={["ОТ ОТРАСЛЕВОГО ЗАПРОСА", "К СИСТЕМНОЙ РАБОТЕ"]}
      lede="Профессиональный путь Екатерины Ереминой связан с транспортом и логистикой, защитой интересов предпринимателей, международным сотрудничеством и подготовкой кадров для отрасли."
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
