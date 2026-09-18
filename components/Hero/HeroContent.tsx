import { OutlineButton } from "@/components/ui/OutlineButton";

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1440px] px-16 xl:px-20">
      <div className="flex w-full flex-col justify-center">
        <div className="flex max-w-[560px] flex-col xl:max-w-[680px]">
          <p className="font-script text-[46px] leading-none text-white xl:text-[54px]">
            Екатерина Еремина
          </p>

          <h1 className="mt-5 max-w-[560px] font-sans text-[64px] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-white xl:max-w-[650px] xl:text-[76px]">
            Время
            <br />
            работать
            <br />
            на результат
          </h1>

          <div className="mt-9">
            <OutlineButton href="#" label="ПОДРОБНЕЕ" />
          </div>

          <p className="mt-14 max-w-[480px] font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white/65">
            Транспорт · Права женщин · Международное сотрудничество · Защита
            бизнеса
          </p>
        </div>
      </div>
    </div>
  );
}
