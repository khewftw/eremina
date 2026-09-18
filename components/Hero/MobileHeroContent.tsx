import { OutlineButton } from "@/components/ui/OutlineButton";
import { Reveal } from "@/components/motion/Reveal";

export function MobileHeroContent() {
  return (
    <div className="flex flex-col px-5 pt-9 md:hidden">
      <Reveal immediate delay={0.1} duration={0.6}>
        <p className="font-script text-[42px] leading-none text-white">
          Екатерина Еремина
        </p>
      </Reveal>

      <Reveal immediate delay={0.25} duration={0.8} y={36}>
        <h1 className="mt-4 font-sans text-[46px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-white">
          Время
          <br />
          работать
          <br />
          на результат
        </h1>
      </Reveal>

      <Reveal immediate delay={0.5} duration={0.6}>
        <OutlineButton href="#" label="ПОДРОБНЕЕ" fullWidth className="mt-8" />
      </Reveal>
    </div>
  );
}
