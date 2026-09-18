import { OutlineButton } from "@/components/ui/OutlineButton";

export function MobileHeroContent() {
  return (
    <div className="flex flex-col px-5 pt-9 md:hidden">
      <p className="font-script text-[42px] leading-none text-white">
        Екатерина Еремина
      </p>

      <h1 className="mt-4 font-sans text-[46px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-white">
        Время
        <br />
        работать
        <br />
        на результат
      </h1>

      <OutlineButton href="#" label="ПОДРОБНЕЕ" fullWidth className="mt-8" />
    </div>
  );
}
