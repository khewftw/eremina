import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ArticleCard, type ArticleCardData } from "@/components/article/ArticleCard";

export function RelatedArticles({ items }: { items: ArticleCardData[] }) {
  if (items.length === 0) return null;

  return (
    <section aria-label="Похожие материалы" className="bg-surface">
      <SectionContainer className="py-20 md:py-28">
        <SectionIntro eyebrow="Читайте также" heading={["ПОХОЖИЕ", "МАТЕРИАЛЫ"]} />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ArticleCard key={item.href} item={item} variant="grid" />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
