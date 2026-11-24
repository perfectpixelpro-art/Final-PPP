import { blogMeta, type BlogMeta } from "./blogMeta";

// Article bodies used to live here as one ~51 KB object. Every visit to a
// single post downloaded all six, so 83% of those bytes were never read.
//
// Each body now sits in ./blog/<slug>.ts and is pulled in on demand. Vite turns
// each of those into its own chunk, so a reader fetches the one post they asked
// for and nothing else. Metadata still comes from blogMeta.ts, which stays
// small enough for the listing page to import directly.

export type { BlogMeta };

export interface BlogPost extends BlogMeta {
  content: string;
}

// Lazy, so none of these are in the page's own chunk.
const bodies = import.meta.glob<{ default: string }>("./blog/*.ts");

/** Resolve one post's body. Returns null for an unknown slug. */
export async function loadBlogContent(slug: string): Promise<string | null> {
  const load = bodies[`./blog/${slug}.ts`];
  if (!load) return null;
  const mod = await load();
  return mod.default;
}

export function findBlogMeta(slug: string | undefined): BlogMeta | undefined {
  if (!slug) return undefined;
  return blogMeta.find((post) => post.slug === slug);
}

export { blogMeta };
