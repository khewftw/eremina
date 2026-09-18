import Image from "next/image";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { OutlineButton } from "@/components/ui/OutlineButton";

export function SplitCta() {
  return (
    <section aria-label="Материалы и обратная связь" className="relative flex w-full flex-col md:flex-row">
      <div className="relative h-[420px] w-full overflow-hidden md:h-[560px] md:w-1/2 xl:h-[700px]">
        <Image
          src="/cta/1.png"
          alt=""
          fill
          quality={95}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(7,31,61,0.85)_0%,rgba(7,31,61,0.4)_45%,rgba(7,31,61,0.1)_100%)]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center md:p-14 xl:p-16">
          <SectionIntro
            tone="light"
            eyebrow="Команда и проект"
            heading={["УЗНАТЬ БОЛЬШЕ", "О РАБОТЕ КОМАНДЫ"]}
          >
            <p>Информация о текущих проектах, мероприятиях и направлениях работы.</p>
          </SectionIntro>

          <div className="mt-8">
            <OutlineButton href="#" label="ПЕРЕЙТИ К МАТЕРИАЛАМ" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden w-px bg-white/15 md:block"
      />

      <div className="relative h-[420px] w-full overflow-hidden md:h-[560px] md:w-1/2 xl:h-[700px]">
        <Image
          src="/cta/2.png"
          alt=""
          fill
          quality={95}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-bottom"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(207,31,41,0.85)_0%,rgba(207,31,41,0.4)_45%,rgba(207,31,41,0.1)_100%)]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center md:p-14 xl:p-16">
          <SectionIntro
            tone="light"
            eyebrow="Обратная связь"
            heading={["ПРЕДЛОЖИТЬ", "ИНИЦИАТИВУ"]}
          >
            <p>
              Направьте профессиональное предложение, вопрос или идею,
              связанную с транспортом, логистикой, образованием и
              международным сотрудничеством.
            </p>
          </SectionIntro>

          <div className="mt-8">
            <OutlineButton href="#" label="НАПРАВИТЬ ПРЕДЛОЖЕНИЕ" />
          </div>
        </div>
      </div>
    </section>
  );
}
