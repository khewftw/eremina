import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MicroTagline } from "@/components/ui/MicroTagline";
import { ArrowLink } from "@/components/ui/ArrowLink";

const cards = [
  {
    index: "01",
    slug: "transport-logistics",
    title: "Транспорт и логистика",
    image: "/napravlenia/logistics.png",
    body: "Международные коридоры, цифровизация перевозок и инфраструктура пространства СНГ — то, с чем комитет работает каждый день.",
    tags: ["Инфраструктура", "Цифровизация", "Международные коридоры"],
  },
  {
    index: "02",
    slug: "business-dialogue",
    title: "Бизнес и общественный диалог",
    image: "/napravlenia/woman.png",
    body: "Прямая линия с бизнесом: запросы перевозчиков и логистических компаний превращаются в конкретную экспертную повестку, а не остаются без ответа.",
    tags: ["Бизнес", "Экспертиза", "Обратная связь"],
  },
  {
    index: "03",
    slug: "international-cooperation",
    title: "Международное сотрудничество и женские инициативы",
    image: "/napravlenia/diplomaty.png",
    body: "Экономическое партнёрство стран СНГ и растущая роль женщин в бизнесе — два направления, которые встречаются в одних и тех же проектах.",
    tags: ["СНГ", "Экономика", "Женское предпринимательство"],
  },
];

export function Directions() {
  return (
    <section
      id="directions"
      aria-labelledby="directions-heading"
      className="bg-white py-24 md:py-32 xl:py-40"
    >
      <SectionContainer>
        <SectionIntro
          id="directions-heading"
          eyebrow="Ключевые направления"
          heading={["ТРИ НАПРАВЛЕНИЯ РАБОТЫ.", "ОДНА СИСТЕМА ВЗАИМОДЕЙСТВИЯ."]}
        >
          <p>
            Профессиональная деятельность Екатерины Ереминой объединяет
            транспортную отрасль, международное сотрудничество и общественные
            инициативы. В центре каждого направления — диалог между бизнесом,
            экспертным сообществом, образованием и государственными
            институтами.
          </p>
        </SectionIntro>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {cards.map((card) => (
            <article key={card.index}>
              <Link
                href={`/directions/${card.slug}`}
                className="group/card flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="group/image relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    quality={90}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-all duration-300 ease-out group-hover/image:scale-105 group-hover/image:blur-[2px]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-navy-950/0 transition-colors duration-300 ease-out group-hover/image:bg-navy-950/25"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex scale-75 items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover/image:scale-100 group-hover/image:opacity-100"
                  >
                    <span className="pointer-events-auto flex h-14 w-14 items-center justify-center bg-transparent text-white transition-colors duration-200 ease-out hover:bg-red">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="mt-6 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-red">
                  Направление · {card.index}
                </p>
                <h3 className="mt-3 font-sans text-[20px] font-extrabold uppercase leading-tight text-navy-950 transition-colors duration-300 ease-out group-hover/card:text-red">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {card.body}
                </p>

                <MicroTagline items={card.tags} tone="red" className="mt-5" />
                <ArrowLink
                  label="Подробнее"
                  className="mt-5 group-hover/card:text-red"
                />
              </Link>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
