import type { ReactNode } from "react";

type Tone = "default" | "light" | "dark";

type SectionIntroProps = {
  eyebrow: string;
  heading: [string, string];
  tone?: Tone;
  id?: string;
  children?: ReactNode;
};

const eyebrowClass: Record<Tone, string> = {
  default: "text-red",
  light: "text-white/70",
  dark: "text-red",
};

const headingLine1Class: Record<Tone, string> = {
  default: "text-red",
  light: "text-white",
  dark: "text-red",
};

const headingLine2Class: Record<Tone, string> = {
  default: "text-navy-950",
  light: "text-white",
  dark: "text-white",
};

const ledeClass: Record<Tone, string> = {
  default: "text-muted",
  light: "text-white/75",
  dark: "text-white/75",
};

export function SectionIntro({
  eyebrow,
  heading,
  tone = "default",
  id,
  children,
}: SectionIntroProps) {
  return (
    <div className="text-center">
      <p className={`text-[12px] font-semibold uppercase tracking-[0.3em] ${eyebrowClass[tone]}`}>
        {eyebrow}
      </p>

      <h2
        id={id}
        className="mt-4 font-sans text-[32px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] sm:text-[38px] md:mt-5 md:text-[46px] xl:text-[52px]"
      >
        <span className={headingLine1Class[tone]}>{heading[0]}</span>
        <br />
        <span className={headingLine2Class[tone]}>{heading[1]}</span>
      </h2>

      {children && (
        <div
          className={`mx-auto mt-6 max-w-[640px] text-[16px] leading-relaxed md:text-[18px] ${ledeClass[tone]}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
