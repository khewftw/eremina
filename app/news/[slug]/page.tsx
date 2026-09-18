import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/article/ArticleTemplate";
import { getAllContent, getContentBySlug, getLatestContent, getRelatedContent } from "@/lib/content";

export async function generateStaticParams() {
  return (await getAllContent("press")).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const item = await getContentBySlug("press", slug);
  return { title: item ? `${item.title} — Екатерина Еремина` : "Материал", description: item?.excerpt };
}

export default async function PressArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const item = await getContentBySlug("press", slug);
  if (!item) notFound();

  const [latest, related] = await Promise.all([getLatestContent("press", 5, slug), getRelatedContent(item, 6)]);

  return <ArticleTemplate item={item} latest={latest} related={related} />;
}
