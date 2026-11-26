// Single source of truth for the seven projects' card data.
//
// Slug, title and description used to be written out three times - in
// `projects`/`gridProjects` in Work.tsx, in `workCovers` in WorkDetails.tsx and
// in `worksRaw` in workData.ts - so changing a title in one place left the
// other two disagreeing. They now live here once.
//
// Two separate cover images are kept on purpose: the Work listing and the
// "More Work" cards on a case-study page genuinely show different crops for
// Hydracelt (hydraw3 vs hydraw13). For every other project the two are the
// same URL, and `coverImage` falls back to `cardImage` when it is omitted.
//
// Deliberately free of heavy imports: Work.tsx needs the cards but not the
// galleries, so this stays its own small chunk rather than dragging the whole
// of workData.ts into the listing page.

export interface ProjectCard {
  id: number;
  slug: string;
  title: string;
  description: string;
  /** Tile on the /work listing. */
  cardImage: string;
  /** Tile in the "More Work" strip on a case-study page. */
  coverImage?: string;
}

const cards: ProjectCard[] = [
  {
    id: 1,
    slug: "hydracelt",
    title: "Hydracelt",
    description: "Made to look as good as it performs.",
    cardImage: "https://cdn.perfectpixelpro.com/img/hydraw3.webp",
    coverImage: "https://cdn.perfectpixelpro.com/img/hydraw13.webp",
  },
  {
    id: 2,
    slug: "the-black-in-hr",
    title: "The Black in HR",
    description: "Identity built to carry weight.",
    cardImage: "/assets/black18.webp",
  },
  {
    id: 3,
    slug: "the-social-99",
    title: "The Social 99",
    description: "A visual world people return to.",
    cardImage: "https://cdn.perfectpixelpro.com/img/Social22.webp",
  },
  {
    id: 4,
    slug: "smm-hiring",
    title: "SMM Hiring",
    description: "Great roles deserve a brand that shows it.",
    cardImage: "https://cdn.perfectpixelpro.com/img/smm14.webp",
  },
  {
    id: 5,
    slug: "stone-the-myth",
    title: "Stone the Myth",
    description: "Motion-driven content designed to capture attention and drive engagement.",
    // Kept as JPEG on purpose: the WebP re-encode came out larger than the original.
    cardImage: "/assets/Stone5.jpg",
  },
  {
    id: 6,
    slug: "candy-land",
    title: "Candy Land",
    description: "Creative direction and storytelling crafted to elevate brand perception.",
    cardImage: "https://cdn.perfectpixelpro.com/img/candyw11.webp",
  },
  {
    id: 7,
    slug: "bumper-buzz",
    title: "Bumper Buzz",
    description: "Where car culture finds its voice.",
    cardImage: "https://cdn.perfectpixelpro.com/img/buzzn1.webp",
  },
];

export const projectCards = cards;

/** The three projects in the featured block at the top of /work. */
export const featuredCards = cards.slice(0, 3);

/** The remaining projects, shown in the paginated grid below. */
export const gridCards = cards.slice(3);

/** slug -> card, for the "More Work" lookup on a case-study page. */
export const cardBySlug: Record<string, ProjectCard> = Object.fromEntries(
  cards.map((c) => [c.slug, c])
);

/** The image the "More Work" strip should use for a slug. */
export const coverImageFor = (slug: string): string | undefined => {
  const card = cardBySlug[slug];
  return card ? card.coverImage ?? card.cardImage : undefined;
};
