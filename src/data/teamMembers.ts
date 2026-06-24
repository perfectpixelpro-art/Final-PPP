import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";

export type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  about: string[];
  location: string;
  experience: string;
  expertise: string[];
  email: string;
  social: { linkedin: string; twitter: string };
};

// One entry per real person — edit freely, this is the single source of truth
// for both the team grid and each member's detail page.
const baseMembers: Omit<TeamMember, "slug">[] = [
  {
    id: 1,
    name: "John Carter",
    role: "Creative Director",
    image: Impre1,
    bio: "John leads our creative vision, blending bold ideas with sharp execution.",
    about: [
      "John has spent over a decade shaping bold, award-winning campaigns for some of the industry's most ambitious brands. As Creative Director, he leads our creative team with a sharp eye for detail and a relentless drive to push every idea further, turning rough concepts into work that actually moves people.",
      "Before joining Perfect Pixel Pro, John worked across both agency and in-house creative teams, building a reputation for campaigns that balance bold visual storytelling with genuine strategic thinking. He believes the best creative work starts with a clear point of view, not a mood board, and he pushes every project to earn its place rather than simply look good.",
      "Outside of client work, John mentors junior designers and art directors, helping shape the next generation of creative talent at the agency. He's particularly passionate about typography, brand systems, and the kind of campaigns that still hold up five years later. When he's not in a review room, you'll usually find him sketching concepts on actual paper, a habit he's never quite let go of.",
    ],
    location: "New York, USA",
    experience: "12+ years",
    expertise: ["Brand Strategy", "Art Direction", "Campaign Development"],
    email: "john.carter@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Lead",
    image: Impre2,
    bio: "Sarah crafts data-driven strategies that turn brand stories into measurable growth.",
    about: [
      "Sarah blends creativity with hard data, building marketing strategies that don't just look good but actually deliver results. She's led growth initiatives across e-commerce, SaaS, and consumer brands, always asking the same question: does this move the needle?",
      "With a background spanning performance marketing, lifecycle campaigns, and brand storytelling, Sarah has a rare ability to translate complex data into strategies the whole team can rally around. She's run campaigns across paid, organic, and email channels, and has a particular knack for finding the overlooked channel that ends up driving outsized returns.",
      "At Perfect Pixel Pro, Sarah works closely with both the creative and strategy teams to make sure every campaign is built on real insight, not guesswork. She's a firm believer that the best marketing feels less like advertising and more like genuinely useful information, and she pushes every brief toward that standard. Outside of work, she's an avid runner and a frequent guest speaker at marketing meetups around the city.",
    ],
    location: "London, UK",
    experience: "9+ years",
    expertise: ["Growth Strategy", "Performance Marketing", "Analytics"],
    email: "sarah.williams@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Lead Developer",
    image: Impre3,
    bio: "Michael architects the technology behind our boldest digital experiences.",
    about: [
      "Michael is the engineer behind our most technically ambitious builds — from blazing-fast marketing sites to complex web applications. He cares deeply about clean architecture and shipping code that's built to last, not just to launch.",
      "Over the past decade, Michael has worked across the full stack, but he's most at home architecting frontend systems that stay fast and maintainable as a product scales. He's obsessive about performance budgets, accessibility, and the kind of code reviews that make everyone on the team a little bit better.",
      "At Perfect Pixel Pro, Michael leads the development team through everything from rapid prototypes to production-grade platforms, always pushing for the simplest solution that actually solves the problem. He's a strong advocate for documentation, testing, and the unglamorous engineering practices that make a codebase pleasant to work in two years later. When he's not deep in a pull request, he's usually contributing to open-source tools or tinkering with his home lab.",
    ],
    location: "Toronto, Canada",
    experience: "10+ years",
    expertise: ["Frontend Architecture", "Performance Engineering", "React"],
    email: "michael.ross@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Brand Strategist",
    image: Impre4,
    bio: "Emma shapes brand identities from the ground up.",
    about: [
      "Emma helps brands figure out who they really are before she helps them figure out how to say it. Her strategic frameworks have shaped identities for startups and household names alike, always rooted in a clear, defensible point of view.",
      "Emma's process starts with research, not mood boards — she spends as much time talking to customers and competitors as she does sketching out positioning statements. That grounding is what makes her brand strategies hold up under pressure, whether she's helping a five-person startup find its voice or repositioning an established company for a new market.",
      "At Perfect Pixel Pro, Emma partners closely with the creative team to make sure every visual decision traces back to a strategic reason, not just a stylistic preference. She's especially drawn to category-defining brands — the ones that don't just fit into a market, but redefine what people expect from it. Outside of client work, she reads obsessively about behavioral economics and consumer psychology.",
    ],
    location: "Austin, USA",
    experience: "7+ years",
    expertise: ["Brand Identity", "Positioning", "Research"],
    email: "emma.davis@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 5,
    name: "Laurent Ezekiel",
    role: "Global Chief Executive Officer",
    image: Impre3,
    bio: "Laurent sets the vision for Perfect Pixel Pro's global growth.",
    about: [
      "Laurent founded Perfect Pixel Pro with a simple belief: great creative work should also be great business. Today he leads the agency's global strategy, partnerships, and growth, while staying hands-on with the work that matters most.",
      "Before starting the agency, Laurent spent close to a decade in both creative and operations roles at larger firms, which gave him a clear-eyed view of what usually goes wrong in agency-client relationships — and what it takes to fix it. That experience shaped the agency's culture from day one: ambitious creative work, paired with a relentless focus on actually delivering results for clients.",
      "Laurent now splits his time between steering the agency's overall direction and staying close to the studios and teams doing the day-to-day work, a balance he considers essential to keeping standards high as the agency grows. He's particularly focused on expansion into new markets and building long-term partnerships rather than one-off projects. Outside of work, he's an enthusiastic, if mediocre, sailor and a regular at industry conferences around the world.",
    ],
    location: "Paris, France",
    experience: "18+ years",
    expertise: ["Business Strategy", "Global Partnerships", "Leadership"],
    email: "laurent.ezekiel@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 6,
    name: "Kevin Lee",
    role: "UI/UX Designer",
    image: Impre1,
    bio: "Kevin designs intuitive, beautiful interfaces that put people first.",
    about: [
      "Kevin designs digital experiences that feel obvious in hindsight — intuitive, considered, and built around how people actually behave. He's obsessed with the small details that make an interface feel effortless.",
      "Kevin's approach starts with research and rapid prototyping rather than polished mockups, which lets him test ideas quickly and kill the ones that don't hold up before they make it into production. He's worked across web and mobile products, from early-stage startup MVPs to mature platforms with millions of users, and brings a strong point of view on accessibility and inclusive design to every project.",
      "At Perfect Pixel Pro, Kevin works closely with both the development and strategy teams to make sure design decisions are grounded in real user behavior, not just aesthetic trends. He's especially passionate about design systems — building reusable, scalable component libraries that keep products consistent as they grow. Outside of work, he's a dedicated home barista and spends an unreasonable amount of time tweaking his espresso setup.",
    ],
    location: "Seoul, South Korea",
    experience: "6+ years",
    expertise: ["UI Design", "User Research", "Prototyping"],
    email: "kevin.lee@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
];

const slugify = (name: string) => name.toLowerCase().trim().replace(/\s+/g, "-");

// Unique list (one entry per person) — used for lookups on the detail page
export const teamMembersUnique: TeamMember[] = baseMembers.map((m) => ({
  ...m,
  slug: slugify(m.name),
}));

// Repeated 3x to fill the grid exactly like the original page (18 cards / 6 people)
export const teamMembers: TeamMember[] = [
  ...teamMembersUnique,
  ...teamMembersUnique,
  ...teamMembersUnique,
];

export const getTeamMemberBySlug = (slug: string | undefined) =>
  slug ? teamMembersUnique.find((m) => m.slug === slug) : undefined;