// Listing metadata for the blog, split out from blogData.ts.
//
// The News page only renders an image, a title and a description, but it used
// to import blogData - pulling ~51 KB of full article bodies that it never
// shows. Importing this file instead keeps the listing to a few KB; the
// article text now only loads on the detail route.
//
// This is the single source of truth for blog metadata: blogData.ts builds the
// full posts by merging these entries with their content.

export interface BlogMeta {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const blogMeta: BlogMeta[] = [
  {
    id: 1,
    slug: "why-choose-us",
    image: "https://cdn.perfectpixelpro.com/img/whyppp.webp",
    title: "Why choose Perfect Pixel Pro?",
    description: "Where Strategy Meets Craft and Results Follow.",
  },
  {
    id: 2,
    slug: "campaign-in-advertising",
    image: "https://cdn.perfectpixelpro.com/img/b3.webp",
    title: "What is a campaign in advertising?",
    description: "A Campaign Isn't an Ad. It's a Journey Engineered to Move People.",
  },
  {
    id: 3,
    slug: "why-ai-hype-doesnt-replace-agency-expertise",
    image: "https://cdn.perfectpixelpro.com/img/vrf.webp",
    title: "Why AI Hype Doesn't Replace Agency Expertise",
    description: "The Algorithm Has No Gut. That's Why You Still Need Us.",
  },
  {
    id: 4,
    slug: "ai-is-a-tool-not-a-team",
    image: "https://cdn.perfectpixelpro.com/img/ai.webp",
    title: "AI is a Tool, Not a Team",
    description: "What AI Can Do for Your Brand. And the Line It Should Never Cross.",
  },
  {
    id: 5,
    slug: "the-psychology-of-advertising",
    image: "https://cdn.perfectpixelpro.com/img/psycho.webp",
    title: "The Psychology of Advertising",
    description: "Why People Buy Isn't Rational. Great Advertising Never Pretends It Is.",
  },
  {
    id: 6,
    slug: "unlock-social-media-secrets",
    image: "https://cdn.perfectpixelpro.com/img/socialmh.webp",
    title: "Social Media Hacks",
    description: "The Social Media Playbook Your Competitors Hope You Never Read.",
  },
];
