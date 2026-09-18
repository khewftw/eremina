import Image from "next/image";
import type { ContentPerson } from "@/lib/content";

export function PersonHeader({ person }: { person: ContentPerson }) {
  return (
    <div className="mt-8 flex items-center gap-5">
      <div className="relative aspect-[3/4] w-[84px] shrink-0 overflow-hidden">
        <Image src={person.portrait} alt={person.name} fill quality={90} sizes="84px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 text-[14px] text-muted">
        {person.telegram && <span>Telegram: {person.telegram}</span>}
        {person.email && <span>{person.email}</span>}
      </div>
    </div>
  );
}
