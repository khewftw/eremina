import { OutlineButton } from "@/components/ui/OutlineButton";
import { Reveal } from "@/components/motion/Reveal";

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1440px] px-16 xl:px-20">
      <div className="flex w-full flex-col justify-center">
        <div className="flex max-w-[560px] flex-col xl:max-w-[680px]">
          <Reveal immediate delay={0.1} duration={0.7}>
            <p className="font-script text-[46px] leading-none text-white xl:text-[54px]">
              Екатерина Еремина
            </p>
          </Reveal>

          <Reveal immediate delay={0.28} duration={0.9} y={48}>
            <h1 className="mt-5 max-w-[560px] font-sans text-[64px] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-white xl:max-w-[650px] xl:text-[76px]">
              Время
              <br />
              работать
              <br />
              на результат
            </h1>
          </Reveal>

          <Reveal immediate delay={0.62} duration={0.7}>
            <div className="mt-9">
              <OutlineButton href="#" label="ПОДРОБНЕЕ" />
            </div>
          </Reveal>

          <Reveal immediate delay={0.8} duration={0.7}>
            <p className="mt-14 max-w-[480px] font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/65">
              Транспорт · Права женщин · Международное сотрудничество · Защита
              бизнеса
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
