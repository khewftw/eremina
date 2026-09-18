import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ArticleCard, type ArticleCardData } from "@/components/article/ArticleCard";

export function ArticleIndex({
  eyebrow,
  heading,
  lede,
  items,
}: {
  eyebrow: string;
  heading: [string, string];
  lede?: string;
  items: ArticleCardData[];
}) {
  return (
    <div className="flex min-h-dvh flex-col pt-[68px] md:pt-0">
      <Header />

      <main className="flex-1 bg-white">
        <SectionContainer className="py-24 md:py-32 xl:py-40">
          <SectionIntro eyebrow={eyebrow} heading={heading}>
            {lede && <p>{lede}</p>}
          </SectionIntro>

          {items.length === 0 ? (
            <p className="mt-16 text-center text-[15px] text-muted">Материалы скоро появятся.</p>
          ) : (
            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
              {items.map((item) => (
                <ArticleCard key={item.href} item={item} variant="grid" />
              ))}
            </div>
          )}
        </SectionContainer>
      </main>

      <Footer />
    </div>
  );
}
