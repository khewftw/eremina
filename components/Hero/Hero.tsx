import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { MobileHeroContent } from "./MobileHeroContent";
import { KenBurns } from "@/components/motion/KenBurns";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden md:h-[calc(100dvh-76px)] md:min-h-[620px] lg:h-[calc(100dvh-84px)] lg:min-h-[720px] lg:max-h-[900px]">
      <KenBurns className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </KenBurns>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(207,31,41,0.95)_0%,rgba(207,31,41,0.88)_48%,rgba(207,31,41,0.45)_75%,rgba(207,31,41,0.15)_100%)] md:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(7,31,61,0.92)_0%,rgba(7,31,61,0.82)_38%,rgba(7,31,61,0.4)_58%,rgba(7,31,61,0.08)_75%,rgba(7,31,61,0)_85%)] md:block"
      />

      <Reveal
        immediate
        y={50}
        delay={0.2}
        duration={1}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block"
      >
        <Image
          src="/hero-woman.png"
          alt=""
          fill
          quality={95}
          sizes="46vw"
          className="object-contain object-bottom"
        />
      </Reveal>

      <div className="hidden md:absolute md:inset-0 md:z-10 md:block">
        <HeroContent />
      </div>

      <div className="relative z-10 flex flex-col md:hidden">
        <MobileHeroContent />
        <Reveal immediate y={40} delay={0.35} duration={0.9} className="relative h-[100vw] max-h-[480px] w-full">
          <Image
            src="/hero-woman.png"
            alt=""
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-top"
          />
        </Reveal>
      </div>
    </section>
  );
}
