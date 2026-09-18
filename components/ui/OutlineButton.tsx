import type { AnchorHTMLAttributes } from "react";

type OutlineButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  fullWidth?: boolean;
  tone?: "light" | "dark" | "red";
};

const toneClasses: Record<NonNullable<OutlineButtonProps["tone"]>, string> = {
  light:
    "border-white/95 text-white hover:border-red hover:bg-red hover:text-white",
  dark: "border-navy-950/80 text-navy-950 hover:border-red hover:bg-red hover:text-white",
  red: "border-red bg-red text-white hover:border-red-dark hover:bg-red-dark",
};

export function OutlineButton({
  label,
  className,
  fullWidth,
  tone = "light",
  ...props
}: OutlineButtonProps) {
  return (
    <a
      {...props}
      className={`group flex h-[56px] items-center justify-between border-2 px-6 text-[15px] font-semibold tracking-[0.015em] transition-[background-color,color,border-color,transform] duration-200 ease-out hover:-translate-y-px md:h-[62px] md:px-7 ${toneClasses[tone]} ${
        fullWidth ? "w-full" : "w-[190px] md:w-[220px]"
      } ${className ?? ""}`}
    >
      <span>{label}</span>
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M19.3536 5.35355C19.5488 5.15829 19.5488 4.84171 19.3536 4.64645L16.1716 1.46447C15.9763 1.2692 15.6597 1.2692 15.4645 1.46447C15.2692 1.65973 15.2692 1.97631 15.4645 2.17157L18.2929 5L15.4645 7.82843C15.2692 8.02369 15.2692 8.34027 15.4645 8.53553C15.6597 8.7308 15.9763 8.7308 16.1716 8.53553L19.3536 5.35355ZM0 5.5H19V4.5H0V5.5Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
