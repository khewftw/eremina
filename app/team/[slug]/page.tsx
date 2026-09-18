import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/article/ArticleTemplate";
import { getAllContent, getContentBySlug, getLatestContent, getRelatedContent } from "@/lib/content";

export async function generateStaticParams() {
  return (await getAllContent("team")).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps<"/team/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const item = await getContentBySlug("team", slug);
  return {
    title: item ? `${item.person?.name ?? item.title} — Команда` : "Команда",
    description: item?.excerpt,
  };
}

export default async function TeamMemberPage(props: PageProps<"/team/[slug]">) {
  const { slug } = await props.params;
  const item = await getContentBySlug("team", slug);
  if (!item) notFound();

  const [latest, related] = await Promise.all([getLatestContent("team", 5, slug), getRelatedContent(item, 6)]);

  return <ArticleTemplate item={item} latest={latest} related={related} />;
}
