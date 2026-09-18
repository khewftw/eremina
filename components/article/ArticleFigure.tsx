import Image from "next/image";

const ratioClass: Record<string, string> = {
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
  "16:9": "aspect-video",
  "3:4": "aspect-[3/4]",
};

function parseSrc(rawSrc: string): { src: string; ratio: string } {
  const [src, query] = rawSrc.split("?");
  const ratio = new URLSearchParams(query).get("ratio");
  return { src, ratio: ratio && ratioClass[ratio] ? ratio : "16:9" };
}

export function ArticleFigure({ src, alt, title }: { src?: string; alt?: string; title?: string }) {
  if (!src) return null;
  const { src: cleanSrc, ratio } = parseSrc(src);

  return (
    <figure className="my-2">
      <div className={`relative w-full overflow-hidden ${ratioClass[ratio]}`}>
        <Image src={cleanSrc} alt={alt ?? ""} fill quality={90} sizes="(min-width: 768px) 820px, 100vw" className="object-cover" />
      </div>
      {title && <figcaption className="mt-3 text-[13px] leading-relaxed text-muted md:text-[14px]">{title}</figcaption>}
    </figure>
  );
}
