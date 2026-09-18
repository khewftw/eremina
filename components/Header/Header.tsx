import { SocialLinks } from "./SocialLinks";
import { DesktopNavLeft, DesktopNavRight, HeaderUtilityIcons } from "./DesktopNav";
import { HeaderShell } from "./HeaderShell";
import { Reveal } from "@/components/motion/Reveal";
import { getAllContent, getLatestContent } from "@/lib/content";

export async function Header({ overHero = false }: { overHero?: boolean }) {
  const [directions, experience, team, press] = await Promise.all([
    getAllContent("directions"),
    getAllContent("experience"),
    getAllContent("team"),
    getLatestContent("press", 4),
  ]);

  const mobileNavData = {
    directions: directions.map((item) => ({ title: item.title, slug: item.slug })),
    experience: experience.map((item) => ({ title: item.title, slug: item.slug })),
    team: team.map((item) => ({ title: item.person?.name ?? item.title, slug: item.slug })),
    press: press.map((item) => ({ title: item.title, slug: item.slug })),
  };

  return (
    <HeaderShell
      overHero={overHero}
      mobileNavData={mobileNavData}
      leftDesktop={
        <Reveal immediate y={-16} duration={0.6} className="flex items-center gap-6">
          <SocialLinks />
          <DesktopNavLeft />
        </Reveal>
      }
      rightDesktop={
        <Reveal immediate y={-16} duration={0.6} className="flex items-center gap-9">
          <DesktopNavRight />
          <span aria-hidden="true" className="hidden h-[30px] w-px bg-[#0B2341]/[0.12] md:block" />
          <HeaderUtilityIcons />
        </Reveal>
      }
    />
  );
}
