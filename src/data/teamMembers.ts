


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
  social: { linkedin?: string; substack?: string; portfolio?: string };
};

// One entry per real person — edit freely, this is the single source of truth
// for both the team grid and each member's detail page.
const baseMembers: Omit<TeamMember, "slug">[] = [
  {
    id: 1,
    name: "Deepak Khatri",
    role: "Founder & Managing Director",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911021/T1_wh3cvx.jpg",
    bio: "Where most see a brief, Deepak sees architecture. As the agency's founder, he has spent years refining what it means to lead creatively - not from the front, but from within the work itself. His decisions carry weight because they come from conviction, not convention.",
    about: [
      "Deepak Khatri is the visionary force behind the agency, bringing together architecture, strategy, and storytelling in a way that few can. With a background rooted in design thinking and years of experience leading complex creative projects, Deepak approaches every challenge with both structural rigour and human sensitivity. He doesn't simply manage a team - he cultivates an environment where bold ideas are given room to grow and the discipline to be executed flawlessly. His philosophy centres on purposeful creativity: that every visual, every campaign, and every client relationship must serve a deeper intent. Deepak's leadership style is collaborative yet decisive, allowing the agency to move quickly without sacrificing quality. He is deeply committed to building a culture of excellence, mentorship, and continuous learning - one where each team member is empowered to do their best work.",
    ],
    location: "New York, USA",
    experience: "12+ years",
    expertise: ["Brand Strategy", "Art Direction", "Campaign Development"],
    email: "john.carter@perfectpixelpro.com",
    social: {
      linkedin: "https://www.linkedin.com/in/mdperfectpixelpro/",
      substack: "https://substack.com/@deepakkhatrii",
      portfolio: "https://deepakkhatri.com/",
    },
  },
  {
    id: 2,
    name: "Manik Goyal",
    role: "CEO & OM",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911028/TMM_hs19yg.png",
    bio: "Running an agency well is an art form few master. Manik does it with uncommon grace - holding creative energy and operational rigour in the same hand without letting either slip. She is the reason ambitious ideas don't just exist here; they get delivered.",
    about: [
      "Manik Goyal sits at the intersection of creative vision and operational precision, a combination that is rarer than it sounds. As CEO and Operations Manager, she carries the dual responsibility of shaping the agency's strategic direction while ensuring that the day-to-day engine runs without friction. Manik's strength lies in her ability to see the whole picture - understanding how a campaign decision affects timelines, how a team dynamic influences output quality, and how client expectations must be balanced with creative integrity. She brings a calm authority to every meeting and crisis alike, never letting urgency cloud her judgement. Her operational instincts are sharp and her communication style is direct without being dismissive. Manik believes that a well-run agency is itself a creative act - one that requires constant refinement, empathy, and an unwavering commitment to delivering results that matter.",
    ],
    location: "London, UK",
    experience: "9+ years",
    expertise: ["Operations Strategy", "Client Management", "Business Growth"],
    email: "sarah.williams@perfectpixelpro.com",
    social: {
      linkedin: "https://www.linkedin.com/in/manik-goyal-58649a249/",
      portfolio: "https://manikgoyal.com/",
    },
  },
  {
    id: 3,
    name: "Chirag Goyal",
    role: "BDE (Canada)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911023/TC_hiwwyt.png",
    bio: "Business development, done properly, is about reading the room before you ever enter it. Chirag has that rare instinct - he understands what a client truly needs, often before the conversation has found its shape. He doesn't sell. He connects.",
    about: [
      "Chirag Goyal is the agency's bridge to the Canadian market, a role he inhabits with natural confidence and strategic depth. As Business Development Executive, Chirag doesn't just open doors - he reads the terrain before approaching them, understanding what a client truly needs before any formal conversation begins. His ability to navigate different industries and cultural business contexts gives him an edge that purely transactional sales professionals rarely possess. In Canada, where professional trust is built slowly and relationships are valued above quick wins, Chirag's patient, honest approach resonates deeply. He listens more than he speaks, asks better questions than most, and always follows through. Chirag sees business development as an extension of the agency's values - every partnership he builds is a reflection of the quality and integrity the team stands for. He is, in every sense, the agency's first impression.",
    ],
    location: "Toronto, Canada",
    experience: "10+ years",
    expertise: ["Business Development", "Client Relations", "Market Expansion"],
    email: "michael.ross@perfectpixelpro.com",
    social: {},
  },
  {
    id: 4,
    name: "Harish Kumar",
    role: "Funding Specialist (Canada)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911027/TH_u1kcgn.png",
    bio: "Capital has a language of its own, and Harish is fluent in it. He navigates the complexity of funding structures with a clarity that puts even anxious clients at ease. Where others see obstacles, he engineers pathways - quietly, precisely, and without drama.",
    about: [
      "Harish Kumar brings a rare kind of clarity to one of the most complex areas any business must navigate - capital and funding. Based in Canada, Harish works at the critical junction between ambitious businesses and the financial structures that can bring their goals to life. His expertise spans grant identification, funding application strategy, and investor communication, and he approaches each client engagement with the thoroughness of someone who understands that a missed detail can mean a missed opportunity. Harish is not simply a specialist; he is a trusted adviser who translates the language of finance into terms that founders and teams can act on with confidence. His calm, methodical approach reduces anxiety without glossing over complexity. He believes that access to the right funding, at the right time, with the right structure, can be genuinely transformative for a business - and he takes that responsibility seriously.",
    ],
    location: "Toronto, Canada",
    experience: "7+ years",
    expertise: ["Funding Strategy", "Financial Structuring", "Client Advisory"],
    email: "emma.davis@perfectpixelpro.com",
    social: {
      linkedin: "https://www.linkedin.com/in/harish-kumar-70686b29b/",
    },
  },
  {
  id: 5,
  name: "Inderpreet Singh",
  role: "BA (India)",
  image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911028/TI_s5tmrf.png",
  bio: "Great analysis is invisible - it just makes everything downstream feel effortless. Inderpreet brings that kind of structural intelligence to every client engagement, translating ambiguity into roadmaps and conversations into decisions. Her precision is the foundation others build on.",

  about: [
    "Inderpreet Singh operates in the space where data and strategy converge, and it is a space he navigates with exceptional skill. As Business Analyst, he is responsible for transforming raw information into insights that guide meaningful decisions across client campaigns and internal operations. Inderpreet's analytical process is thorough but never slow - he has developed an instinct for identifying what matters most in a dataset and communicating it in a way that non-technical stakeholders can immediately understand and act upon. He approaches each brief with intellectual curiosity, asking not just what the numbers say, but what they mean for the broader business picture. His work gives the team a factual foundation on which creative and strategic decisions can be built with confidence. Inderpreet is also a collaborative partner - always available to explain his findings and willing to revisit assumptions when new information emerges."
  ],

  location: "New Delhi, India",
  experience: "6+ years",
  expertise: [
    "Business Analysis",
    "Requirement Gathering",
    "Process Improvement"
  ],
  email: "laurent.ezekiel@perfectpixelpro.com",
  social: {},
},
  {
    id: 6,
    name: "Avtar Singh",
    role: "Legal & Accounts (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911024/TAV_jjztsj.png",
    bio: "Sound legal and financial foundations don't announce themselves - they simply hold. Avtar is the unseen force that ensures every contract is airtight, every compliance detail is considered, and every account is in perfect order. The agency runs freely because he runs it carefully.",
    about: [
      "Avtar Singh is the person who makes sure that the agency's foundations are as solid as its ambitions. Covering both legal oversight and financial accounts, Avtar plays a quiet but essential role in every client engagement and internal decision the agency makes. He reviews contracts with the eye of someone who understands that vague language creates real-world problems, and he manages accounts with a discipline that ensures the agency remains sustainable and trustworthy. Avtar doesn't seek the spotlight, but the entire operation depends on the precision of his work. He is the reason the team can pursue bold creative opportunities without fear of legal exposure or financial instability. His approach is meticulous, his advice is measured, and his commitment to doing things properly - rather than just doing them quickly - sets the professional standard that the wider team aspires to. Avtar represents the agency's quiet strength.",
    ],
    location: "New Delhi, India",
    experience: "8+ years",
    expertise: ["Legal Compliance", "Contract Management", "Accounting"],
    email: "kevin.lee@perfectpixelpro.com",
    social: {},
  },
  
  {
    id: 12,
    name: "Jaskaran Singh",
    role: "Sales Lead (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911028/TJ_go329q.png",
    bio: "Trust in sales is built slowly and lost instantly. Jaskaran understands this better than most, which is why he leads with honesty before ambition. His approach is measured, his promises deliberate - and his clients stay because they were told the truth from the very first meeting.",
    about: [
      "Jaskaran Singh leads the sales function with a philosophy that runs counter to conventional wisdom - he believes that honesty is the most effective sales strategy there is. In an industry where overpromising is commonplace, Jaskaran sets expectations accurately, communicates risks transparently, and focuses on the long-term value of every client relationship over the short-term value of any individual deal. This approach has earned him a reputation as someone clients genuinely trust - not simply because of what he promises, but because of what he delivers and how he conducts himself throughout the process. Jaskaran is also an exceptional team leader, coaching junior sales colleagues with patience and helping them find their own authentic selling styles. He studies client industries carefully, ensures his pitches are tailored rather than templated, and always enters a conversation prepared to listen first and speak second. Jaskaran makes the agency's growth feel intentional.",
    ],
    location: "New Delhi, India",
    experience: "8+ years",
    expertise: ["Sales Strategy", "Team Leadership", "Client Relations"],
    email: "kevin.lee@perfectpixelpro.com",
    social: {},
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
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911031/TS_rpgbdl.png",
    bio: "Architecture matters in code the way it matters in buildings - you feel the difference even when you can't name it. Saquib writes software with an engineer's discipline and a craftsman's care, building systems that remain coherent long after the initial sprint has ended.",
    about: [
      "Saquib Khan brings both technical mastery and an architect's sense of structure to everything he builds. As a Full Stack Developer, he works across the complete spectrum of web development - from database architecture and server-side logic to the front-end interfaces that users experience directly. Saquib is the kind of developer who writes code as if someone else will have to maintain it, which means it is clean, documented, and built to last. He doesn't treat design as someone else's concern; he understands that the best digital products are those where function and form are considered together from the very beginning. Saquib is also highly collaborative, comfortable working alongside designers, strategists, and clients to translate complex briefs into technical solutions that are both elegant and reliable. His problem-solving process is systematic but creative, and he is never satisfied with a solution that merely works when one that works beautifully is achievable.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Full Stack Development", "API Design", "React"],
    email: "john.carter@perfectpixelpro.com",
    social: {},
  },
  {
    id: 8,
    name: "Utkarsh",
    role: "Frontend Developer (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911030/TU_rml3fj.png",
    bio: "The distance between a design mockup and a living interface is where most detail gets lost. Utkarsh refuses to let that happen. He builds with a pixel-perfect eye and a developer's understanding of performance, ensuring what reaches the client is exactly what was imagined - if not better.",
    about: [
      "Utkarsh is the person responsible for what users actually see and touch, and he takes that responsibility with a level of craft that sets the agency's digital output apart. As a Frontend Developer, he works in the precise space between design intent and user experience, ensuring that what was envisioned in a mockup becomes something that performs flawlessly in a browser. Utkarsh has an eye for detail that would not be out of place in graphic design - he notices spacing inconsistencies, animation timing, and colour rendering in ways that most developers overlook. But he also carries a genuine understanding of web performance, accessibility, and responsive behaviour across devices. He collaborates closely with designers and backend developers alike, serving as the connective tissue in the product development process. Utkarsh is quiet in meetings but vocal about quality, and his standards consistently raise the bar for the entire development team.",
    ],
    location: "New Delhi, India",
    experience: "4+ years",
    expertise: ["Frontend Development", "React", "UI Implementation"],
    email: "sarah.williams@perfectpixelpro.com",
    social: {},
  },
  {
    id: 14,
    name: "Yash Parcha",
    role: "Sr. VE (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911031/TY_klt2qy.png",
    bio: "Editing is the art of knowing what to remove. Yash has spent years honing that instinct, developing a command of pacing and tone that transforms raw footage into something audiences feel rather than simply watch. His cuts land because he understands story, not just software.",
    about: [
      "Yash Parcha has spent years mastering the discipline of knowing what to leave out - and that restraint is precisely what makes his work so powerful. As Senior Video Editor, Yash brings a refined editorial intelligence to every project he touches. He understands narrative pacing, emotional rhythm, and the subtle ways that a cut, a sound design choice, or a colour grade can shift how an audience feels about what they are watching. Yash doesn't just assemble footage; he shapes stories. His process is thorough and considered, involving close collaboration with directors and strategists to ensure that the final edit serves both the creative vision and the communication objective. He is highly regarded within the team for his ability to remain calm under tight deadlines, his willingness to give honest creative feedback, and his commitment to pushing the quality of each project as far as it can go.",
    ],
    location: "New Delhi, India",
    experience: "7+ years",
    expertise: ["Video Editing", "Sound Design", "Post-Production"],
    email: "sarah.williams@perfectpixelpro.com",
    social: {},
  },
  {
    id: 15,
    name: "Ranveer Singh",
    role: "VE (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911030/TR_krlvlc.png",
    bio: "Every frame is a choice. Ranveer makes each one deliberately, approaching the edit with a rhythm-first philosophy that gives his work an almost musical quality. The result is content that doesn't just flow - it resonates.",
    about: [
      "Ranveer Singh edits with intention, treating every frame as a deliberate decision rather than a passive consequence of what was shot. His approach to video editing is rooted in a deep appreciation for rhythm - both the rhythm within a piece of music and the internal rhythm of a visual story as it unfolds. Ranveer has developed a distinctive style that is energetic without being erratic, combining purposeful pacing with a musicality that gives his edits an almost cinematic quality. He is technically skilled across all major editing platforms and is constantly expanding his knowledge of colour, motion graphics, and audio. Ranveer works closely with the senior editorial team and welcomes feedback as an opportunity to refine rather than a reflection of failure. He has a natural curiosity about storytelling that drives him to study film, advertising, and content from across the world, always absorbing new influences to bring into his own evolving craft.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Video Editing", "Color Grading", "Storytelling"],
    email: "michael.ross@perfectpixelpro.com",
    social: {},
  },

  {
    id: 17,
    name: "Madhav Dhingra",
    role: "SMM (India)",
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911022/T3_edpwxk.png",
    bio: "Social media strategy is not about chasing trends - it's about building something worth following. Madhav creates content ecosystems that compound over time, grounded in a deep understanding of what real audiences actually respond to. His work doesn't just grow accounts; it grows communities.",
    about: [
      "Madhav Dhingra approaches social media with the mindset of a strategist and the instincts of a storyteller. He understands that effective social media management is not about posting frequently - it is about building a presence that accumulates meaning over time, creating communities that genuinely care about the brands they follow. Madhav studies audiences with the same attention most people reserve for content, mapping how different communities behave, what triggers engagement, and what builds long-term loyalty versus short-term attention. He combines this insight with strong creative direction, working alongside the video and design teams to ensure that every piece of content serves a coherent and compelling brand narrative. Madhav is also data-driven - he analyses performance rigorously and is never satisfied with surface-level metrics when deeper behavioural patterns are available. His goal for every brand he manages is not simply visibility, but genuine cultural presence and a following that grows with purpose.",
    ],
    location: "New Delhi, India",
    experience: "5+ years",
    expertise: ["Social Media Strategy", "Community Management", "Content Planning"],
    email: "kevin.lee@perfectpixelpro.com",
    social: {},
  },
  
  {
  id: 8,
  name: "Nikhil Sharma",
  role: "VE (India)",
  image: "https://res.cloudinary.com/djzqamze6/image/upload/v1784533170/Nikhil_Sir_fxcnul.png",
  bio: "Every great video tells a story in seconds. Nikhil blends creativity, precision, and cinematic editing to transform raw footage into engaging content that captures attention and leaves a lasting impression.",
  about: [
    "Nikhil is the creative force behind the agency's video content, turning concepts and raw footage into polished, high-impact visuals. As a Video Editor, he specializes in crafting content for social media, brand campaigns, advertisements, and promotional videos that align with each client's goals and identity.",
    "With a strong understanding of storytelling, pacing, motion graphics, transitions, color grading, and sound design, Nikhil ensures every frame serves a purpose. He collaborates closely with designers, marketers, and content strategists to create videos that maximize engagement and perform across platforms like Instagram, YouTube, LinkedIn, and TikTok.",
    "At Perfect Pixel Pro, Nikhil manages the complete post-production process—from organizing footage and editing sequences to adding visual effects, audio enhancements, and final exports. His attention to detail, creative mindset, and commitment to quality help deliver videos that are both visually compelling and results-driven.",
  ],
  location: "New Delhi, India",
  experience: "4+ years",
  expertise: [
    "Video Editing",
    "Motion Graphics",
    "Color Grading"
  ],
  email: "nikhil.sharma@perfectpixelpro.com",
  social: {},
},
{
  id: 9,
  name: "Megha Rana",
  role: "SMM (India)",
  image: "https://res.cloudinary.com/djzqamze6/image/upload/v1784533159/Megha_Mam_wgjiet.png",
  bio: "Great social media isn't about posting more—it's about creating meaningful conversations. Megha combines creativity, strategy, and audience insights to build content that helps brands grow with consistency and purpose.",
  about: [
    "Megha plays a key role in shaping the agency's social media presence and helping clients build authentic connections with their audiences. As a Social Media Manager, she develops content strategies, manages publishing schedules, monitors trends, and ensures every campaign aligns with each brand's voice and business goals. Megha believes that successful social media is built on consistency, creativity, and data-driven decision-making rather than chasing every trend. She collaborates closely with designers, video editors, and marketers to create engaging content that drives awareness, engagement, and growth across platforms. From planning monthly content calendars to analyzing campaign performance and optimizing strategies, Megha ensures every piece of content contributes to measurable results. Her proactive approach, attention to detail, and passion for digital storytelling help brands stay relevant in an ever-changing social landscape.",
  ],
  location: "New Delhi, India",
  experience: "3+ years",
  expertise: [
    "Social Media Strategy",
    "Content Planning",
    "Community Management"
  ],
  email: "megha.rana@perfectpixelpro.com",
  social: {},
},



  {
  id: 17,
  name: "Vikas",
  role: "SEO Specialist (India)",
  image: "https://res.cloudinary.com/djzqamze6/image/upload/v1784533189/Vikas_Sir_dwdakg.png",
  bio: "Search visibility isn't built overnight—it's earned through strategy, consistency, and continuous optimization. Vikas helps brands grow organically by turning search intent into sustainable business growth.",
  about: [
    "Vikas is responsible for driving organic growth through data-driven SEO strategies that improve search rankings, website traffic, and online visibility. As an SEO Specialist, he develops comprehensive optimization plans covering technical SEO, on-page improvements, keyword research, content optimization, and link-building strategies tailored to each client's goals.",
    "With a strong understanding of search engine algorithms and user behavior, Vikas works closely with content writers, developers, and marketers to ensure every website is optimized for both users and search engines. He continuously monitors performance, identifies growth opportunities, and adapts strategies to keep clients ahead of industry changes.",
    "At Perfect Pixel Pro, Vikas manages end-to-end SEO campaigns—from technical audits and competitor analysis to performance tracking and reporting. His analytical mindset, attention to detail, and commitment to long-term results help businesses build a strong digital presence and achieve sustainable organic growth.",
  ],
  location: "New Delhi, India",
  experience: "5+ years",
  expertise: [
    "Search Engine Optimization",
    "Keyword Research",
    "Technical SEO"
  ],
  email: "vikas@perfectpixelpro.com",
  social: {},
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
];

export const getTeamMemberBySlug = (slug: string | undefined) =>
  slug ? teamMembersUnique.find((m) => m.slug === slug) : undefined;