import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { ArrowLink } from "@/components/ui/ArrowLink";

const milestones = [
  {
    anchor: "public-reception",
    title: "Общественная приёмная",
    body: "Работа с обращениями представителей транспортной и логистической отрасли и развитие площадки для взаимодействия бизнеса, экспертов и государственных институтов. Публичные материалы об открытии приёмной указывают Екатерину Еремину в качестве её руководителя.",
    image: "/experience/2.jpg",
    imageSide: "left" as const,
  },
  {
    anchor: "transport-logistics-committee",
    title: "Комитет по транспорту и логистике",
    body: "Сегодня Екатерина Еремина возглавляет Комитет по транспорту и логистике Делового центра экономического развития СНГ. В публичной повестке комитета — развитие транспортных связей, цифровизация, международная логистика и взаимодействие стран СНГ.",
    image: "/experience/1.png",
    imageSide: "right" as const,
  },
  {
    anchor: "education",
    title: "Образование",
    body: "Как директор факультета логистики Университета «Синергия» Екатерина Еремина участвует в проектах, связанных с подготовкой специалистов и взаимодействием образования с транспортной отраслью.",
    image: "/experience/3.webp",
    imageSide: "left" as const,
  },
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-white">
      <SectionContainer className="py-24 md:py-32 xl:py-40">
        <SectionIntro
          id="experience-heading"
          eyebrow="Опыт"
          heading={["ОТ ОТРАСЛЕВОГО ЗАПРОСА", "К СИСТЕМНОЙ РАБОТЕ"]}
        >
          <p>
            Профессиональный путь Екатерины Ереминой связан с транспортом и
            логистикой, защитой интересов предпринимателей, международным
            сотрудничеством и подготовкой кадров для отрасли.
          </p>
        </SectionIntro>

        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-navy-950/10 md:block"
          />

          {milestones.map((item, i) => {
            const imageLeft = item.imageSide === "left";

            return (
              <div
                key={item.title}
                className={`relative ${i === 0 ? "" : "mt-14 md:mt-0"}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red md:block"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-16 md:py-16">
                  <div className={imageLeft ? "md:order-1" : "md:order-2"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={90}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={
                      imageLeft
                        ? "md:order-2 md:pl-6"
                        : "md:order-1 md:pr-6"
                    }
                  >
                    <h3 className="font-sans text-[22px] font-bold uppercase leading-tight text-navy-950 md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[480px] text-[15px] leading-relaxed text-muted md:text-[16px]">
                      {item.body}
                    </p>
                    <Link href={`/experience/${item.anchor}`} className="inline-block">
                      <ArrowLink label="Подробнее" className="mt-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <OutlineButton
            href="/experience"
            label="ПОДРОБНЕЕ О МОЁМ ОПЫТЕ"
            tone="dark"
            fullWidth
            className="max-w-[320px]"
          />
        </div>
      </SectionContainer>
    </section>
  );
}
