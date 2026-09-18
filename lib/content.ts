import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { contentFrontmatterSchema } from "@/lib/content-schema";

export type ContentType = "directions" | "experience" | "team" | "press";

export type ContentPerson = {
  name: string;
  role: string;
  portrait: string;
  telegram?: string;
  email?: string;
};

export type ContentItem = {
  slug: string;
  type: ContentType;
  title: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
  related?: string[];
  person?: ContentPerson;
  body: string;
  readingTimeMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

const categoryConfig: Record<ContentType, { label: string; routeSegment: string; indexLabel: string }> = {
  directions: { label: "Направления", routeSegment: "directions", indexLabel: "Ключевые направления" },
  experience: { label: "Опыт", routeSegment: "experience", indexLabel: "Профессиональный опыт" },
  team: { label: "Команда", routeSegment: "team", indexLabel: "Команда" },
  press: { label: "Пресс-центр", routeSegment: "news", indexLabel: "Новости" },
};

function readingTimeFor(markdown: string): number {
  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function loadItem(type: ContentType, filename: string): ContentItem {
  const filePath = path.join(CONTENT_DIR, type, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const parsed = contentFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in content/${type}/${filename}: ${parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`,
    );
  }
  const fm = parsed.data;

  if (fm.type !== type) {
    throw new Error(`content/${type}/${filename}: frontmatter type "${fm.type}" does not match its directory "${type}"`);
  }
  if (fm.slug !== filename.replace(/\.md$/, "")) {
    throw new Error(`content/${type}/${filename}: frontmatter slug "${fm.slug}" does not match filename`);
  }

  return {
    ...fm,
    body: content.trim(),
    readingTimeMinutes: readingTimeFor(content),
  };
}

function loadAll(type: ContentType): ContentItem[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => loadItem(type, f));
}

export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
  return loadAll(type)
    .filter((item) => !item.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getContentByType(type: ContentType): Promise<ContentItem[]> {
  return getAllContent(type);
}

export async function getContentBySlug(type: ContentType, slug: string): Promise<ContentItem | null> {
  const item = loadAll(type).find((i) => i.slug === slug && !i.draft);
  return item ?? null;
}

export async function getLatestContent(
  type: ContentType,
  limit: number,
  excludeSlug?: string,
): Promise<ContentItem[]> {
  const all = await getAllContent(type);
  return all.filter((i) => i.slug !== excludeSlug).slice(0, limit);
}

export async function getRelatedContent(item: ContentItem, limit: number): Promise<ContentItem[]> {
  const siblings = (await getAllContent(item.type)).filter((i) => i.slug !== item.slug);

  if (item.related?.length) {
    const explicit = item.related
      .map((slug) => siblings.find((i) => i.slug === slug))
      .filter((i): i is ContentItem => Boolean(i));
    if (explicit.length >= limit) return explicit.slice(0, limit);
    const rest = siblings.filter((i) => !explicit.includes(i));
    return [...explicit, ...rest.slice(0, limit - explicit.length)];
  }

  const scored = siblings
    .map((sibling) => ({
      sibling,
      score: sibling.tags.filter((tag) => item.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.sibling);
}

export function getContentNavigation() {
  return (Object.keys(categoryConfig) as ContentType[]).map((type) => ({
    type,
    ...categoryConfig[type],
  }));
}

export function routeSegmentFor(type: ContentType): string {
  return categoryConfig[type].routeSegment;
}

export function categoryLabelFor(type: ContentType): string {
  return categoryConfig[type].label;
}

export function formatRuDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${day}.${month}.${year}`;
}
