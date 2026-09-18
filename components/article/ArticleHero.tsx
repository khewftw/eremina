import Image from "next/image";

export function ArticleHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px] md:h-[460px]">
      <Image src={src} alt={alt} fill priority quality={95} sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-navy-950/30" />
    </div>
  );
}
