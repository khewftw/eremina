import type { ReactNode } from "react";

export function ArticleQuote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-red py-1 pl-6 font-sans text-[22px] font-bold leading-snug text-navy-950 md:text-[26px]">
      {children}
    </blockquote>
  );
}
