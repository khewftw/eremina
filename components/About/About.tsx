import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";

const inlineLink =
  "font-bold text-white underline decoration-white/30 underline-offset-4 transition-colors duration-180 ease-out hover:text-red hover:decoration-red";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-navy-950">
      <SectionContainer className="py-24 md:py-32 xl:py-40">
        <Reveal>
          <SectionIntro
            id="about-heading"
            eyebrow="О Екатерине"
            heading={["ПРОФЕССИОНАЛЬНАЯ ПОВЕСТКА", "НА СТЫКЕ НЕСКОЛЬКИХ СФЕР"]}
            tone="dark"
          />
        </Reveal>

        <RevealGroup className="mx-auto mt-10 flex max-w-[1040px] flex-col gap-6 text-left text-[15px] leading-relaxed text-white/75 md:mt-12">
          <p>
            Екатерина Еремина работает на стыке трёх сфер: транспортной
            отрасли, международного профессионального сообщества и системы
            подготовки кадров. Её путь начался с прямой работы с отраслевыми
            обращениями: ещё до того, как она возглавила комитет, Екатерина
            занималась вопросами транспортных и логистических компаний,
            которые сталкивались с конкретными системными проблемами. Эта
            работа легла в основу{" "}
            <Link href="/experience/public-reception" className={inlineLink}>
              Общественной приёмной по вопросам логистики
            </Link>
            , которую она же и возглавила, — площадки, где бизнес, эксперты и
            государственные институты могли обсуждать отраслевые вопросы
            напрямую.
          </p>
          <p>
            Сегодня Екатерина возглавляет{" "}
            <Link href="/experience/transport-logistics-committee" className={inlineLink}>
              Комитет по транспорту и логистике Делового центра
              экономического развития СНГ
            </Link>{" "}
            — структуру, в повестке которой инфраструктура, цифровизация
            перевозок и международные транспортные коридоры на пространстве
            СНГ. Комитет работает на стыке национальных экономик: вопросы,
            которые кажутся локальными — состояние дорог, скорость
            таможенного оформления, доступность цифровых сервисов для
            перевозчиков, — на деле определяют, насколько быстро и
            предсказуемо работает торговля между странами СНГ и ЕАЭС.
            Параллельно с этим Екатерина руководит{" "}
            <Link href="/experience/education" className={inlineLink}>
              факультетом логистики Университета «Синергия»
            </Link>
            , где подготовка кадров для отрасли становится продолжением той
            же системной работы: специалистам, которых готовят на факультете,
            предстоит работать именно с теми задачами, которые обсуждаются в
            комитете.
          </p>
          <p>
            Отдельное направление её работы — международное сотрудничество и
            роль женщин в бизнесе. Екатерина участвует в профессиональных
            инициативах, связанных с экономическим партнёрством стран СНГ, и
            в проектах, посвящённых женскому предпринимательству — теме,
            которая всё чаще звучит на площадках, где обсуждается будущее
            транспортной отрасли.
          </p>
          <p>
            Такое сочетание ролей — бизнес, экспертиза и образование —{" "}
            <em className="italic">встречается нечасто</em>: как правило, эти
            сферы существуют отдельно друг от друга, а человеку, который
            работает на их стыке, приходится говорить сразу на языке
            отрасли, языке экспертного сообщества и языке университета.
          </p>
        </RevealGroup>

        <Reveal scale={0.85} y={0} className="mt-14 flex flex-col items-center md:mt-16">
          <a
            href="#"
            className="group relative h-[320px] w-[320px] overflow-hidden rounded-full transition-transform duration-300 ease-out hover:scale-105 sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px] xl:h-[500px] xl:w-[500px]"
          >
            <Image
              src="/about/circle.png"
              alt="Екатерина Еремина"
              fill
              quality={95}
              sizes="(min-width: 768px) 500px, 380px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-navy-950/0 transition-colors duration-300 ease-out group-hover:bg-navy-950/35"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex scale-75 flex-col items-center justify-center gap-3 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="#0B2341" />
                </svg>
              </span>
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                Смотреть видео
              </span>
            </div>
          </a>

          <div className="mt-5 flex items-center gap-2 text-white/50">
            <span className="font-sans text-[12px] normal-case tracking-[0.02em]">
              наведите на кружок
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 3L20 10.5L12.5 12.5L10.5 20L4 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
