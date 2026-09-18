import type { HTMLAttributes } from "react";

type SectionContainerProps = HTMLAttributes<HTMLDivElement>;

export function SectionContainer({
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <div
      {...props}
      className={`mx-auto max-w-[1440px] px-5 md:px-16 xl:px-20 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
