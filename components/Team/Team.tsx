"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { OutlineButton } from "@/components/ui/OutlineButton";

export type TeamCardMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  body: string;
};

export function Team({ teamMembers }: { teamMembers: TeamCardMember[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setIndex(i);
  };

  const go = (dir: 1 | -1) => {
    scrollToIndex(Math.min(Math.max(index + dir, 0), teamMembers.length - 1));
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - track.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setIndex(closest);
  };

  return (
    <section id="team" aria-labelledby="team-heading" className="bg-white">
      <SectionContainer className="py-24 md:py-32 xl:py-40">
        <SectionIntro
          id="team-heading"
          eyebrow="Команда"
          heading={["ЛЮДИ, КОТОРЫЕ РАБОТАЮТ", "С ПРОФЕССИОНАЛЬНОЙ ПОВЕСТКОЙ"]}
        >
          <p>
            Экспертная работа строится вокруг специалистов из разных сфер —
            транспорта и логистики, права, образования, международного
            сотрудничества и коммуникаций.
          </p>
        </SectionIntro>

        <div className="mt-16 md:mt-20" aria-roledescription="carousel">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="-mx-5 flex gap-6 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] snap-x snap-mandatory md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {teamMembers.map((member, i) => (
              <div
                key={member.slug}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} из ${teamMembers.length}`}
                className="flex h-full w-[260px] shrink-0 flex-col snap-start sm:w-[300px]"
              >
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={90}
                    sizes="300px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-red">
                  {member.role}
                </p>
                <h3 className="mt-2 font-sans text-[20px] font-extrabold uppercase leading-tight text-navy-950">
                  {member.name}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {member.body}
                </p>

                <OutlineButton
                  href={`/team/${member.slug}`}
                  label="ЧИТАТЬ О СПЕЦИАЛИСТЕ"
                  tone="dark"
                  fullWidth
                  className="mt-5 h-[48px] shrink-0"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Предыдущий специалист"
              onClick={() => go(-1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-navy-950/15 text-navy-950 transition-colors duration-180 ease-out hover:border-red hover:bg-red hover:text-white"
            >
              <svg width="16" height="14" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                <path
                  d="M9 1L1 8L9 15M1 8H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {teamMembers.map((member, i) => (
                <button
                  key={member.slug}
                  type="button"
                  aria-label={`Показать: ${member.name}`}
                  aria-current={i === index}
                  onClick={() => scrollToIndex(i)}
                  className={`h-[6px] transition-all duration-200 ease-out ${
                    i === index ? "w-6 bg-red" : "w-[6px] bg-navy-950/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Следующий специалист"
              onClick={() => go(1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-navy-950/15 text-navy-950 transition-colors duration-180 ease-out hover:border-red hover:bg-red hover:text-white"
            >
              <svg width="16" height="14" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                <path
                  d="M11 1L19 8L11 15M19 8H1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
