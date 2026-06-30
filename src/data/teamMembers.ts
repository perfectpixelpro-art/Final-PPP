import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.png";
import TF from "../assets/TF.png";
import TS from "../assets/TS.jpg";
import TSS from "../assets/TS.png";
import TM from "../assets/TM.jpg";
import TAV from "../assets/TAV.png";
import TY from "../assets/TY.png";
import TJ from "../assets/TJ.png";
import TI from "../assets/TI.png";
import TC from "../assets/TC.png";
import TH from "../assets/TH.png";
import TR from "../assets/TR.png";
import TMM from "../assets/TMM.png";


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
    name: "Deepak Khatri",
    role: "Founder & Managing Director",
    image: T1,
    bio: "Deepak leads our creative vision, blending bold ideas with sharp execution. He built Perfect Pixel Pro on the belief that great design should always be backed by real strategy, not just aesthetics. Every project that crosses his desk gets pushed to earn its place, not just look polished.",
    about: [
      "Deepak has spent over a decade shaping bold, award-winning campaigns for some of the industry's most ambitious brands. As Founder and Managing Director, he leads the agency with a sharp eye for detail and a relentless drive to push every idea further, turning rough concepts into work that actually moves people.",
      "Before starting Perfect Pixel Pro, Deepak worked across both agency and in-house creative teams, building a reputation for campaigns that balance bold visual storytelling with genuine strategic thinking. He believes the best creative work starts with a clear point of view, not a mood board, and he pushes every project to earn its place rather than simply look good.",
      "Outside of client work, Deepak mentors junior designers and account leads, helping shape the next generation of talent at the agency. He's particularly passionate about brand systems and the kind of campaigns that still hold up five years later. When he's not in a review room, you'll usually find him sketching concepts on actual paper, a habit he's never quite let go of.",
    ],
    location: "New York, USA",
    experience: "12+ years",
    expertise: ["Brand Strategy", "Art Direction", "Campaign Development"],
    email: "john.carter@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Manik Goyal",
    role: "CEO & OM",
    image: TMM,
    bio: "Manik runs the day-to-day engine behind Perfect Pixel Pro, keeping creative ambition and operational discipline in sync. He's the one making sure bold ideas actually ship on time and on budget. His instinct for process is what lets the rest of the team move fast without things breaking.",
    about: [
      "Manik blends creative ambition with hard operational discipline, building the internal systems that let the agency take on bigger, more complex client work without losing quality. He's led growth initiatives across multiple markets, always asking the same question: does this actually move the business forward?",
      "With a background spanning operations, client management, and strategic planning, Manik has a rare ability to translate big-picture goals into the day-to-day workflows that make them real. He's overseen everything from team scaling to client onboarding, and has a particular knack for spotting the bottleneck that's quietly slowing everyone down.",
      "At Perfect Pixel Pro, Manik works closely with every department to make sure operations never get in the way of great creative work. He's a firm believer that the best-run agencies feel effortless from the outside, and he pushes every process toward that standard. Outside of work, he's an avid traveler and a frequent voice at industry meetups.",
    ],
    location: "London, UK",
    experience: "9+ years",
    expertise: ["Operations Strategy", "Client Management", "Business Growth"],
    email: "sarah.williams@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Chirag Goyal",
    role: "BDE (Canada)",
    image: TC,
    bio: "Chirag drives new business across the Canadian market, building the relationships that bring ambitious brands to the agency. He has a genuine talent for understanding what a prospective client actually needs before they've fully articulated it themselves. Every pitch he runs starts with listening, not selling.",
    about: [
      "Chirag is the business development force behind Perfect Pixel Pro's growth in Canada, building relationships with brands that are ready to take their creative and marketing seriously. He cares deeply about matching the right clients to the right work, not just closing deals for their own sake.",
      "Over the years, Chirag has worked across multiple industries, but he's most effective when he's helping a brand articulate a problem they didn't fully realize they had. He's obsessive about follow-through, client communication, and the kind of relationship-building that turns a single project into a long-term partnership.",
      "At Perfect Pixel Pro, Chirag leads outreach and partnership conversations across the Canadian market, always pushing for genuine fit over quick wins. He's a strong advocate for transparent pitching and realistic timelines, the unglamorous parts of business development that build real trust over time. When he's not in client conversations, he's usually exploring Toronto's food scene or planning the next networking event.",
    ],
    location: "Toronto, Canada",
    experience: "10+ years",
    expertise: ["Business Development", "Client Relations", "Market Expansion"],
    email: "michael.ross@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Harish Kumar",
    role: "Funding Specialist (Canada)",
    image: TH,
    bio: "Harish helps clients navigate funding and financial structuring so creative ambition never stalls for lack of resources. He brings a clear, no-nonsense approach to conversations that can otherwise feel overwhelming. His clients consistently say he made a complicated process feel manageable.",
    about: [
      "Harish helps brands figure out how to fund their growth before he helps them figure out how to spend it. His financial frameworks have supported startups and established companies alike, always rooted in a clear, realistic plan rather than wishful projections.",
      "Harish's process starts with understanding the real financial picture, not just the pitch deck — he spends as much time digging into numbers and structures as he does building funding strategies. That grounding is what makes his advice hold up under pressure, whether he's helping a small team secure initial capital or guiding an established company through a larger raise.",
      "At Perfect Pixel Pro, Harish partners closely with clients across the Canadian market to make sure every funding decision is backed by sound reasoning, not just optimism. He's especially drawn to ambitious, growth-stage companies that need a steady hand through complex financial decisions. Outside of client work, he reads widely about market trends and economic policy.",
    ],
    location: "Toronto, Canada",
    experience: "7+ years",
    expertise: ["Funding Strategy", "Financial Structuring", "Client Advisory"],
    email: "emma.davis@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
  id: 5,
  name: "Inderpreet Singh",
  role: "BA (India)",
  image: TI,
  bio: "Inderpreet Singh works closely with clients across India to understand business needs, gather requirements, and translate ideas into clear, actionable solutions. She's known for her structured thinking, attention to detail, and ability to bridge the gap between business goals and technical execution.",

  about: [
    "Inderpreet partners with clients to analyze business processes, identify opportunities for improvement, and define solutions that align with their goals. She believes that every successful project starts with asking the right questions and building a clear understanding of the client's vision.",

    "With experience working across diverse industries, she specializes in requirement gathering, process documentation, stakeholder communication, and solution planning. Her collaborative approach helps development teams stay aligned while ensuring clients remain informed and confident throughout every stage of the project.",

    "At Perfect Pixel Pro, Inderpreet serves as the bridge between clients and delivery teams, helping transform complex business challenges into practical digital solutions. She is passionate about creating efficient workflows, improving user experiences, and ensuring every project delivers measurable value. Outside of work, she enjoys learning about emerging technologies and mentoring aspiring business analysts."
  ],

  location: "New Delhi, India",
  experience: "6+ years",
  expertise: [
    "Business Analysis",
    "Requirement Gathering",
    "Process Improvement"
  ],
  email: "laurent.ezekiel@perfectpixelpro.com",
  social: {
    linkedin: "#",
    twitter: "#"
  },
},
  {
    id: 6,
    name: "Avtar Singh",
    role: "Legal & Accounts (India)",
    image: TAV,
    bio: "Avtar keeps the agency's legal and financial foundations solid, handling contracts, compliance, and accounts with meticulous care. He's the quiet force that lets everyone else focus on the creative work without worry. Nothing gets past his attention to detail.",
    about: [
      "Avtar manages the legal and financial backbone of Perfect Pixel Pro, making sure every contract, compliance requirement, and account is handled with precision. He's obsessed with the small details that prevent big problems down the line.",
      "Avtar's approach combines rigorous legal review with careful financial oversight, which lets the agency move quickly on new client engagements without cutting corners. He's worked across contract negotiation, regulatory compliance, and day-to-day accounting, and brings a steady, thorough hand to every task he takes on.",
      "At Perfect Pixel Pro, Avtar works closely with both the leadership and client-facing teams to make sure every agreement and financial record holds up to scrutiny. He's especially passionate about building clean, well-documented processes that keep the agency protected as it scales. Outside of work, he's a dedicated reader of legal and finance journals, always staying ahead of regulatory changes.",
    ],
    location: "New Delhi, India",
    experience: "8+ years",
    expertise: ["Legal Compliance", "Contract Management", "Accounting"],
    email: "kevin.lee@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 9,
    name: "Mukul",
    role: "AI Enthusiast (India)",
    image: TM,
    bio: "Mukul explores how AI tools can sharpen the agency's creative and technical workflows without ever replacing the human judgment behind them. He's constantly testing new approaches to see what actually adds value. His curiosity keeps the team ahead of how the industry is shifting.",
    about: [
      "Mukul spends his time at the intersection of artificial intelligence and practical agency work, exploring how AI tools can genuinely improve workflows rather than just sound impressive in a pitch deck. He's deeply curious about where the technology is heading and what that means for creative work.",
      "Mukul has experimented extensively with AI-assisted design, content generation, and workflow automation, always testing ideas against the question of whether they actually save time or improve quality. He's developed a practical, skeptical approach that separates genuinely useful tools from passing trends.",
      "At Perfect Pixel Pro, Mukul works across teams to identify where AI can meaningfully support the creative and development process, while making sure human judgment stays at the center of every decision. He's especially interested in how these tools can speed up research and prototyping without sacrificing quality. Outside of work, he's constantly testing new AI products and following research in the space.",
    ],
    location: "New Delhi, India",
    experience: "3+ years",
    expertise: ["AI Workflows", "Automation", "Research"],
    email: "michael.ross@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 12,
    name: "Jasskaran Singh",
    role: "Sales Lead",
    image: TJ,
    bio: "Himanshu leads the sales team with a straightforward, relationship-first approach that prioritizes genuine fit over closing at any cost. He's built a reputation for honest pitches that set realistic expectations from day one. Clients trust him because he never overpromises.",
    about: [
      "Himanshu leads sales conversations with a philosophy that's simple but uncommon in the industry: only pitch what the agency can genuinely deliver. He'd rather walk away from a deal than set expectations the team can't meet.",
      "Himanshu's background spans direct sales, account management, and team leadership, giving him a well-rounded view of the entire client relationship, not just the initial close. He's particularly skilled at reading what a prospective client actually needs versus what they're initially asking for.",
      "At Perfect Pixel Pro, Himanshu leads the sales team's day-to-day strategy, training newer team members on the same honest, consultative approach that's built his own track record. He's especially focused on long-term client retention over short-term wins. Outside of work, he's an avid cricket follower and enjoys mentoring early-career sales professionals.",
    ],
    location: "New Delhi, India",
    experience: "8+ years",
    expertise: ["Sales Strategy", "Team Leadership", "Client Relations"],
    email: "kevin.lee@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  // {
  //   id: 11,
  //   name: "Neha Khatri",
  //   role: "BA (India)",
  //   image: Impre3,
  //   bio: "Neha translates client needs into clear, actionable plans the whole team can execute against. She's the bridge between what a client says they want and what actually gets built. Her thoroughness prevents costly misunderstandings before they happen.",
  //   about: [
  //     "Neha specializes in turning ambiguous client requirements into clear, structured plans that creative and development teams can actually execute against. She has a sharp instinct for catching gaps in scope before they become expensive problems later.",
  //     "Neha's background spans requirement gathering, stakeholder communication, and process documentation, all skills she uses to keep complex projects organized and on track. She's particularly good at asking the questions clients haven't thought to ask themselves yet.",
  //     "At Perfect Pixel Pro, Neha works closely with both clients and internal teams to make sure every project starts with a genuinely clear brief, not just a rough idea. She's a firm believer that most project delays trace back to unclear requirements at the start, and she works hard to eliminate that risk early. Outside of work, she enjoys process design and is often the one suggesting a better way to organize a workflow.",
  //   ],
  //   location: "New Delhi, India",
  //   experience: "5+ years",
  //   expertise: ["Business Analysis", "Requirements Gathering", "Process Design"],
  //   email: "laurent.ezekiel@perfectpixelpro.com",
  //   social: { linkedin: "#", twitter: "#" },
  // },
 
  // {
  //   id: 13,
  //   name: "Gazal Goyal",
  //   role: "SMM (UK)",
  //   image: Impre1,
  //   bio: "Gazal builds social strategies that turn brand presence into genuine community, not just follower counts. She understands that social media is brand building happening in real time. Her content systems consistently outperform one-off campaigns.",
  //   about: [
  //     "Gazal understands that social media isn't about posting content, it's about building a brand's presence in real time, one interaction at a time. She knows what stops a scroll, what earns a follow, and what actually converts a casual viewer into a client.",
  //     "Gazal's approach centers on content systems rather than individual posts, building consistent visual and editorial frameworks that compound over time instead of resetting with every campaign. She's worked across multiple platforms and industries, always tracking what genuinely drives engagement versus what just looks good on paper.",
  //     "At Perfect Pixel Pro, Gazal leads social strategy for UK-based clients, balancing brand consistency with the kind of timely, responsive content that keeps an audience engaged. She's especially passionate about turning brand followers into a real community rather than a passive audience. Outside of work, she's constantly studying emerging platform trends and content formats.",
  //   ],
  //   location: "London, UK",
  //   experience: "6+ years",
  //   expertise: ["Social Media Strategy", "Content Systems", "Community Building"],
  //   email: "john.carter@perfectpixelpro.com",
  //   social: { linkedin: "#", twitter: "#" },
  // },
  {
    id: 7,
    name: "Saquib Khan",
    role: "Full Stack Developer (India)",
    image: TSS,
    bio: "Saquib builds the technology behind the agency's digital work, comfortable moving across both frontend and backend with equal confidence. He cares deeply about writing code that's clean today and still maintainable years from now. Every feature he ships is built to actually last.",
    about: [
      "Saquib is the engineer behind many of the agency's most technically demanding builds — from fast, polished marketing sites to fuller web applications with real backend logic. He cares deeply about clean architecture and shipping code that's built to last, not just to launch.",
      "Across his career, Saquib has worked the full stack, comfortable moving between frontend interfaces and backend systems without losing momentum. He's obsessive about performance, clean APIs, and the kind of code reviews that make everyone on the team a little bit better.",
      "At Perfect Pixel Pro, Saquib supports the development team through everything from rapid prototypes to production-grade platforms, always pushing for the simplest solution that actually solves the problem. He's a strong advocate for documentation and testing, the unglamorous engineering practices that make a codebase pleasant to work in two years later. When he's not deep in code, he's usually exploring new frameworks or contributing to side projects.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Full Stack Development", "API Design", "React"],
    email: "john.carter@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 8,
    name: "Utkarsh",
    role: "Frontend Developer (India)",
    image: TF,
    bio: "Utkarsh turns design files into fast, pixel-perfect interfaces that hold up across every device. He has a sharp eye for the small visual details that separate a good build from a great one. The team relies on him to catch what others miss before it ever reaches a client.",
    about: [
      "Utkarsh focuses on turning ambitious designs into interfaces that are fast, responsive, and genuinely pleasant to use. He cares about the details that are easy to overlook — spacing, motion timing, and the way a layout holds together across every screen size.",
      "With deep experience in modern frontend frameworks, Utkarsh has built everything from marketing sites to complex, data-heavy dashboards. He's particularly meticulous about matching design intent exactly, treating every pixel and transition as something worth getting right.",
      "At Perfect Pixel Pro, Utkarsh works closely with both designers and backend developers to make sure what ships matches what was envisioned, without compromise. He's especially passionate about performance and accessibility, building interfaces that work well for everyone, not just the ideal user. Outside of work, he enjoys experimenting with new frontend tooling and contributing to open-source projects.",
    ],
    location: "New Delhi, India",
    experience: "4+ years",
    expertise: ["Frontend Development", "React", "UI Implementation"],
    email: "sarah.williams@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 14,
    name: "Yash Parcha",
    role: "Sr. VE (India)",
    image: TY,
    bio: "Yash leads video editing with an instinct for pacing that turns raw footage into content people actually want to watch. He feels the edit before he makes it, knowing exactly where a cut needs to land. His work consistently elevates client campaigns from good to memorable.",
    about: [
      "Yash feels the edit before he makes it, understanding instinctively that pacing is everything and that the right cut at the right moment is the difference between content people watch and content people skip. He cares about sound design as much as the visual cut itself.",
      "As a senior video editor, Yash has worked across formats, from short-form social content to longer brand films, always bringing the same obsessive attention to rhythm and timing. He mentors junior editors on the team, helping them develop the same instinct for pacing that defines his own work.",
      "At Perfect Pixel Pro, Yash leads video editing on the agency's most ambitious projects, often stepping in to elevate footage that other editors have struggled to make work. He's especially passionate about sound design, believing that great audio is what separates competent editing from genuinely great editing. Outside of work, he's constantly studying film editing techniques from movies and documentaries.",
    ],
    location: "New Delhi, India",
    experience: "7+ years",
    expertise: ["Video Editing", "Sound Design", "Post-Production"],
    email: "sarah.williams@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 15,
    name: "Ranveer Singh",
    role: "VE (India)",
    image: TR,
    bio: "Ranveer brings sharp pacing and clean technical execution to every project he edits. He treats each cut as a decision that shapes how the viewer feels, not just how the footage flows. His attention to rhythm makes content genuinely engaging to watch.",
    about: [
      "Ranveer approaches every edit with a clear sense of rhythm, understanding that the gaps between cuts matter just as much as the footage itself. He's developed a sharp eye for trimming content down to exactly what it needs to be, no more and no less.",
      "Ranveer has worked across a range of video formats, building a versatile skill set that moves comfortably between fast-paced social content and more deliberate brand storytelling. He's particularly meticulous about color grading and audio sync, the technical details that quietly make or break a final cut.",
      "At Perfect Pixel Pro, Ranveer works closely with the broader video team to bring consistency and polish to every project that goes out the door. He's especially drawn to projects with strong narrative arcs, where pacing decisions genuinely shape how a story lands. Outside of work, he spends his time studying editing techniques across different film genres.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Video Editing", "Color Grading", "Storytelling"],
    email: "michael.ross@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 16,
    name: "Sahil",
    role: "VE (India)",
    image: TS,
    bio: "Sahil brings energy and precision to every edit, with a particular talent for fast-paced, social-first content. He understands what keeps a viewer's attention in the first three seconds. His edits consistently outperform expectations on engagement.",
    about: [
      "Sahil specializes in fast, attention-grabbing edits built for a social-first audience, understanding that the first few seconds of any video determine whether someone keeps watching. He's developed a sharp instinct for hooks, pacing, and the visual rhythm that platforms reward.",
      "Sahil has worked extensively on short-form content, building a portfolio of edits that consistently perform well across multiple social platforms. He's particularly attentive to trends in editing style, always testing new techniques to keep the agency's content feeling current.",
      "At Perfect Pixel Pro, Sahil works on the agency's most fast-turnaround video projects, bringing both speed and quality to tight deadlines. He's especially passionate about experimenting with new transition and pacing techniques that keep social content feeling fresh. Outside of work, he's constantly watching and dissecting trending content to understand what's working.",
    ],
    location: "New Delhi, India",
    experience: "4+ years",
    expertise: ["Short-Form Editing", "Social Content", "Trend Analysis"],
    email: "emma.davis@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 17,
    name: "Madhav Dhingra",
    role: "SMM (India)",
    image: T3,
    bio: "Madhav builds social media strategies grounded in what audiences actually respond to, not what's trending for its own sake. He thinks in content systems that compound over time. His campaigns consistently grow real, engaged audiences.",
    about: [
      "Madhav approaches social media as a long-term brand-building exercise rather than a series of disconnected posts, building content calendars and visual systems that reinforce a brand's identity over time. He's especially attentive to what genuinely resonates with an audience versus what just generates short-term spikes.",
      "Madhav has managed social accounts across multiple industries, developing a strong instinct for tone, timing, and platform-specific content strategy. He's particularly skilled at translating a brand's broader marketing goals into a coherent, consistent social presence.",
      "At Perfect Pixel Pro, Madhav leads social strategy for clients across the India market, balancing creative experimentation with measurable growth goals. He's especially passionate about community management, believing that how a brand responds matters as much as what it posts. Outside of work, he's an active follower of emerging social platforms and content trends.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Social Media Strategy", "Community Management", "Content Planning"],
    email: "kevin.lee@perfectpixelpro.com",
    social: { linkedin: "#", twitter: "#" },
  },
  // {
  //   id: 18,
  //   name: "Megha",
  //   role: "SMM (India)",
  //   image: Impre1,
  //   bio: "Megha crafts social content that feels native to each platform rather than generic across all of them. She has a sharp sense for what makes content feel authentic versus promotional. Her work consistently builds genuine engagement, not just impressions.",
  //   about: [
  //     "Megha understands that what works on one platform rarely works the same way on another, and she builds distinct content strategies for each rather than recycling a single approach everywhere. She's particularly attentive to the small details of tone and format that make content feel native rather than forced.",
  //     "Megha has managed social campaigns across a range of brand voices, from playful and casual to polished and professional, adapting her approach to fit each client's identity. She's especially skilled at building content calendars that balance planned campaigns with timely, reactive posts.",
  //     "At Perfect Pixel Pro, Megha works closely with the broader social team to keep every client's presence feeling fresh and authentic rather than formulaic. She's especially passionate about audience research, spending real time understanding who she's actually trying to reach before a single post goes out. Outside of work, she enjoys exploring new content formats and platform features as they launch.",
  //   ],
  //   location: "New Delhi, India",
  //   experience: "4+ years",
  //   expertise: ["Social Media Strategy", "Audience Research", "Content Creation"],
  //   email: "kevin.lee@perfectpixelpro.com",
  //   social: { linkedin: "#", twitter: "#" },
  // },
  // {
  //   id: 5,
  //   name: "Nikhil",
  //   role: "VE",
  //   image: Impre3,
  //   bio: "Nikhil edits with a steady, detail-focused approach, making sure every project meets a high technical bar before it ships. He's the quiet craftsman of the video team, never cutting corners on quality. His consistency is what clients have come to rely on.",
  //   about: [
  //     "Nikhil brings a steady, methodical approach to video editing, treating every project with the same level of care regardless of size or budget. He's built a reputation for technical reliability, the kind of editor whose work never needs a second pass for quality control.",
  //     "Nikhil has worked across a wide range of client projects, developing a versatile editing style that adapts to each brand's voice rather than imposing a single signature look. He's especially diligent about file organization and version control, the unglamorous habits that keep larger projects running smoothly.",
  //     "At Perfect Pixel Pro, Nikhil supports the video team across multiple concurrent projects, often handling the technical polish that brings a rough cut to a client-ready final. He's especially focused on consistency across multi-part campaigns, making sure every piece feels like part of the same family. Outside of work, he enjoys experimenting with new editing software and workflow tools.",
  //   ],
  //   location: "Paris, France",
  //   experience: "5+ years",
  //   expertise: ["Video Editing", "Workflow Management", "Quality Control"],
  //   email: "laurent.ezekiel@perfectpixelpro.com",
  //   social: { linkedin: "#", twitter: "#" },
  // },
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
];

export const getTeamMemberBySlug = (slug: string | undefined) =>
  slug ? teamMembersUnique.find((m) => m.slug === slug) : undefined;