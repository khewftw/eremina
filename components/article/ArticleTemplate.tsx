import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SplitCta } from "@/components/SplitCta/SplitCta";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ArticleBreadcrumb } from "@/components/article/ArticleBreadcrumb";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { PersonHeader } from "@/components/article/PersonHeader";
import { ArticleHero } from "@/components/article/ArticleHero";
import { ArticleProse } from "@/components/article/ArticleProse";
import { ArticleSidebar } from "@/components/article/ArticleSidebar";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import type { ArticleCardData } from "@/components/article/ArticleCard";
import { formatRuDate, routeSegmentFor, categoryLabelFor, type ContentItem } from "@/lib/content";

function toCardData(item: ContentItem): ArticleCardData {
  return {
    href: `/${routeSegmentFor(item.type)}/${item.slug}`,
    title: item.title,
    excerpt: item.excerpt,
    image: item.heroImage,
    date: formatRuDate(item.publishedAt),
    category: categoryLabelFor(item.type),
  };
}

export function ArticleTemplate({
  item,
  latest,
  related,
}: {
  item: ContentItem;
  latest: ContentItem[];
  related: ContentItem[];
}) {
  const categoryLabel = categoryLabelFor(item.type);
  const categoryHref = `/${routeSegmentFor(item.type)}`;
  const showDates = item.type !== "team";

  return (
    <div className="flex min-h-dvh flex-col pt-[68px] md:pt-0">
      <Header />

      <main className="flex-1">
        <article className="bg-white">
          <SectionContainer className="pt-10 md:pt-14">
            <ArticleBreadcrumb category={categoryLabel} categoryHref={categoryHref} title={item.title} />
            <ArticleHeader
              category={categoryLabel}
              title={item.title}
              excerpt={item.excerpt}
              publishedAt={item.publishedAt}
              updatedAt={item.updatedAt}
              readingTimeMinutes={item.readingTimeMinutes}
              showDates={showDates}
            />
            {item.person && <PersonHeader person={item.person} />}
          </SectionContainer>

          <div className="mt-10 md:mt-14">
            <ArticleHero src={item.heroImage} alt={item.heroAlt} />
          </div>

          <SectionContainer className="py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 xl:gap-x-[72px]">
              <div className="md:col-span-8 xl:col-span-9">
                <ArticleProse body={item.body} />
              </div>
              <div className="mt-16 md:col-span-4 md:mt-0 xl:col-span-3">
                <ArticleSidebar items={latest.map(toCardData)} moreHref={categoryHref} />
              </div>
            </div>
          </SectionContainer>
        </article>

        <RelatedArticles items={related.map(toCardData)} />
        <SplitCta />
      </main>

      <Footer />
    </div>
  );
}
