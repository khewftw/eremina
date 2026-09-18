import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleFigure } from "@/components/article/ArticleFigure";
import { ArticleQuote } from "@/components/article/ArticleQuote";

const proseComponents: Components = {
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="mt-16 max-w-[820px] font-sans text-[26px] font-extrabold uppercase leading-tight text-navy-950 md:mt-20 md:text-[32px]"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="mt-12 max-w-[820px] font-sans text-[20px] font-bold uppercase leading-tight text-navy-950 md:mt-14">
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 id={id} className="mt-10 max-w-[820px] text-[17px] font-bold text-navy-950">
      {children}
    </h4>
  ),
  p: ({ children }) => <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-muted md:text-[17px]">{children}</p>,
  ul: ({ children }) => <ul className="mt-5 flex max-w-[820px] flex-col gap-2 pl-5 text-[16px] leading-relaxed text-muted [list-style:disc] md:text-[17px]">{children}</ul>,
  ol: ({ children }) => <ol className="mt-5 flex max-w-[820px] flex-col gap-2 pl-5 text-[16px] leading-relaxed text-muted [list-style:decimal] md:text-[17px]">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-bold text-navy-950">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  hr: () => <hr className="my-12 max-w-[820px] border-navy-950/10" />,
  blockquote: ({ children }) => (
    <div className="mt-8 max-w-[820px]">
      <ArticleQuote>{children}</ArticleQuote>
    </div>
  ),
  table: ({ children }) => (
    <div className="mt-6 max-w-[820px] overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left text-[14px] leading-relaxed text-muted md:text-[15px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b-2 border-navy-950/15 text-navy-950">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] first:pl-0">{children}</th>,
  td: ({ children }) => <td className="border-b border-navy-950/5 px-3 py-2 first:pl-0">{children}</td>,
  img: ({ src, alt, title }) => <ArticleFigure src={typeof src === "string" ? src : undefined} alt={alt} title={title} />,
  a: ({ href, children }) => {
    if (!href) return <>{children}</>;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="font-semibold text-navy-950 underline decoration-red/60 underline-offset-2 transition-colors duration-180 ease-out hover:text-red hover:decoration-red">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-navy-950 underline decoration-red/60 underline-offset-2 transition-colors duration-180 ease-out hover:text-red hover:decoration-red"
      >
        {children}
      </a>
    );
  },
};

export function ArticleProse({ body }: { body: string }) {
  return (
    <div className="[&>*:first-child]:mt-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={proseComponents}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
