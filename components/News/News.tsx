import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { OutlineButton } from "@/components/ui/OutlineButton";

export type NewsCardItem = {
  href: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export function News({ newsItems }: { newsItems: NewsCardItem[] }) {
  if (newsItems.length === 0) return null;
  const featured = newsItems.find((item) => item.featured) ?? newsItems[0];
  const secondary = newsItems.filter((item) => item !== featured);

  return (
    <section id="news" aria-labelledby="news-heading" className="bg-white">
      <SectionContainer className="py-24 md:py-32 xl:py-40">
        <SectionIntro
          id="news-heading"
          eyebrow="Пресс-центр"
          heading={["СОБЫТИЯ, ВСТРЕЧИ,", "ПРОФЕССИОНАЛЬНАЯ ПОВЕСТКА"]}
        />

        <article className="mt-16 md:mt-20">
          <Link
            href={featured.href}
            className="group grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                quality={90}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-red">
                Главная тема · {featured.date}
              </p>
              <h3 className="mt-4 font-sans text-[30px] font-extrabold uppercase leading-[1.05] text-navy-950 transition-colors duration-180 ease-out group-hover:text-red md:text-[40px]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-muted md:text-[16px]">
                {featured.excerpt}
              </p>
              <ArrowLink label="Читать материал" className="mt-6" />
            </div>
          </Link>
        </article>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-14">
          {secondary.map((story) => (
            <article key={story.title} className="flex h-full flex-col">
              <Link href={story.href} className="group flex h-full flex-col">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    quality={90}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-red">
                  {story.date}
                </p>
                <h3 className="mt-2 font-sans text-[17px] font-extrabold uppercase leading-tight text-navy-950 transition-colors duration-180 ease-out group-hover:text-red">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted">
                  {story.excerpt}
                </p>
                <ArrowLink className="mt-4 shrink-0" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <OutlineButton href="/news" label="ВСЕ НОВОСТИ" tone="dark" />
        </div>
      </SectionContainer>
    </section>
  );
}
