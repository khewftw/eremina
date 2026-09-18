import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Directions } from "@/components/Directions/Directions";
import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/About/About";
import { Team } from "@/components/Team/Team";
import { News } from "@/components/News/News";
import { SplitCta } from "@/components/SplitCta/SplitCta";
import { Footer } from "@/components/Footer/Footer";
import { getAllContent, formatRuDate } from "@/lib/content";

export default async function Home() {
  const [teamContent, pressContent] = await Promise.all([getAllContent("team"), getAllContent("press")]);

  const teamMembers = teamContent.map((item) => ({
    slug: item.slug,
    name: item.person?.name ?? item.title,
    role: item.person?.role ?? "",
    image: item.heroImage,
    body: item.excerpt,
  }));

  const newsItems = pressContent.map((item) => ({
    href: `/news/${item.slug}`,
    date: formatRuDate(item.publishedAt),
    title: item.title,
    excerpt: item.excerpt,
    image: item.heroImage,
    featured: item.featured,
  }));

  return (
    <div className="flex min-h-dvh flex-col">
      <Header overHero />
      <Hero />
      <Directions />
      <Experience />
      <About />
      <Team teamMembers={teamMembers} />
      <News newsItems={newsItems} />
      <SplitCta />
      <Footer />
    </div>
  );
}
