import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/article/ArticleTemplate";
import { getAllContent, getContentBySlug, getLatestContent, getRelatedContent } from "@/lib/content";

export async function generateStaticParams() {
  return (await getAllContent("experience")).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const item = await getContentBySlug("experience", slug);
  return { title: item ? `${item.title} — Екатерина Еремина` : "Материал", description: item?.excerpt };
}

export default async function ExperienceArticlePage(props: PageProps<"/experience/[slug]">) {
  const { slug } = await props.params;
  const item = await getContentBySlug("experience", slug);
  if (!item) notFound();

  const [latest, related] = await Promise.all([
    getLatestContent("experience", 5, slug),
    getRelatedContent(item, 6),
  ]);

  return <ArticleTemplate item={item} latest={latest} related={related} />;
}
