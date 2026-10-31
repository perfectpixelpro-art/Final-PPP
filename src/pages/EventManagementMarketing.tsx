import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Event Management & Marketing | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Event Management & Marketing from Perfect Pixel Pro. Plan the room, the story and the follow-up together, from the invitation to the day after.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "How to plan a corporate event?",
    a: "To plan a corporate event, write down what should change for the guests and count backward from the date. One person holds the calendar, and holds it tightly. Vendors, run sheet, follow-up email, in that order. Landscaping company, twenty clients, a spring dinner. The outcome: every guest leaves knowing the company also fixes drainage.",
  },
  {
    q: "What are the best experiential marketing strategies for events?",
    a: "The best experiential marketing strategies for events let a guest handle the product before anyone explains it. A trial. A side-by-side. Something to make, something to keep. A bike shop at a street fair sets out three saddles and one speed bump. Comfort, demonstrated.",
  },
  {
    q: "What is Event Management & Marketing?",
    a: "Event Management & Marketing is a single plan for how an event runs and how people hear about it, before and after. The management side keeps the lights on and the vendors on time. The marketing side writes the invitation and the thank-you. At a bakery's opening night, one person books the ovens and another tells the block.",
  },
  {
    q: "What is Experience Marketing?",
    a: "Experience Marketing is marketing you take part in instead of marketing you read, from the first click to the last invoice. Saturday morning at a hardware store. One leaky faucet, six students, borrowed wrenches.",
  },
  {
    q: "What makes something a product launch event?",
    a: "A product launch event is the first public showing of something new, built so guests see it work and remember one thing. At a coffee roaster's pop-up, the new blend gets poured while the roaster answers questions with one hand still on the grinder.",
  },
  {
    q: "What are good brand activation ideas?",
    a: "Good brand activation ideas hand people something to use, touch or carry home. A neighborhood gym at the farmers market. A free class pass. A trainer demonstrating one move on a folding table.",
  },
  {
    q: "What does an event marketing strategy cover?",
    a: "An event marketing strategy is the plan for who attends, what they feel and what happens after they leave. Children's library, summer reading night. Name the families. One hands-on activity. A short note two days later.",
  },
  {
    q: "Do I need an event management business plan?",
    a: "An event management business plan is a document for people who run an events company. Clients, pricing, costs, a plan for finding the next booking. Planning one party for your own brand? Write an event brief instead. Why you're hosting. Who comes. What it costs. Who owns what. What could go wrong. How you'll know it worked. A florist throwing her shop's tenth anniversary party needs that page and nothing heavier.",
  },
];

const structuredData = [
  articleSchema("Event Management & Marketing: An Audience Isn't the Outcome", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

const LineIcon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

// ── Hero graphic: the four moments as an experience curve that peaks when guests take part.
const stations = [
  {
    label: "Get invited",
    x: 130,
    y: 222,
    w: 172,
    icon: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  },
  {
    label: "Walk in",
    x: 375,
    y: 176,
    w: 140,
    icon: <><path d="M6 21V4h10v17M16 6h2.5v15M4 21h16" /><circle cx="13" cy="12.5" r=".9" fill="currentColor" /></>,
  },
  {
    label: "Take part",
    x: 625,
    y: 96,
    w: 158,
    key: true,
    icon: <path d="M12 3.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L12 15.9l-5 2.8 1.2-5.6L4 9.3l5.6-.6Z" />,
  },
  {
    label: "Tell someone",
    x: 870,
    y: 146,
    w: 186,
    echo: true,
    icon: <path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" />,
  },
];

const BASE_Y = 292;
const curve = (() => {
  const pts = [{ x: 0, y: 240 }, ...stations.map(({ x, y }) => ({ x, y })), { x: 1000, y: 162 }];
  return pts.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const mid = (p.x - prev.x) / 2;
    return `${d} C${prev.x + mid} ${prev.y} ${p.x - mid} ${p.y} ${p.x} ${p.y}`;
  }, "");
})();

const JourneyLine = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const reduced = prefersReducedMotion();
  const fade = (delay: number) => ({ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${delay}ms` });

  return (
    <figure className="m-0">
      <div ref={ref} className="rounded-[32px] bg-[#f6f6f6] px-5 py-8 md:px-10 md:py-12 overflow-x-auto">
        <svg className="block w-full min-w-[640px] h-auto" viewBox="0 0 1000 350" role="img" aria-labelledby="jl-t" xmlns="http://www.w3.org/2000/svg">
          <title id="jl-t">The four moments of an event: get invited, walk in, take part, tell someone.</title>
          <defs>
            <linearGradient id="experience-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={RED} stopOpacity=".16" />
              <stop offset="100%" stopColor={RED} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="curve-stroke" gradientUnits="userSpaceOnUse" x1="0" x2="1000" y1="0" y2="0">
              <stop offset="0%" stopColor={INK} stopOpacity="0" />
              <stop offset="9%" stopColor={INK} />
              <stop offset="91%" stopColor={INK} />
              <stop offset="100%" stopColor={INK} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="area-fade" gradientUnits="userSpaceOnUse" x1="0" x2="1000" y1="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="9%" stopColor="#ffffff" />
              <stop offset="91%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <mask id="area-mask">
              <rect x="0" y="0" width="1000" height="350" fill="url(#area-fade)" />
            </mask>
            <filter id="chip-shadow" x="-20%" y="-40%" width="140%" height="180%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#000000" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Area under the experience curve */}
          <path d={`${curve} L1000 ${BASE_Y} L0 ${BASE_Y}Z`} fill="url(#experience-fill)" mask="url(#area-mask)" style={fade(900)} />

          {/* Drop lines from each station to the floor */}
          {stations.map((s, i) => (
            <path key={`drop-${s.label}`} d={`M${s.x} ${s.y}V${BASE_Y}`} stroke={s.key ? RED : "#d4d4d4"} strokeOpacity={s.key ? 0.5 : 1} strokeWidth="1" strokeDasharray="3 5" style={fade(700 + i * 200)} />
          ))}

          {/* The curve */}
          <path
            d={curve}
            fill="none"
            stroke="url(#curve-stroke)"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1800ms ${ease} 200ms` }}
          />

          {/* Timeline band: before, in the room, after */}
          <g style={fade(1200)}>
            <path d={`M40 ${BASE_Y}H960`} stroke="#d9d9d9" strokeWidth="1.5" strokeLinecap="round" />
            {[
              { from: 40, to: 250, label: "Before" },
              { from: 250, to: 750, label: "In the room", key: true },
              { from: 750, to: 960, label: "After" },
            ].map((z) => (
              <g key={z.label}>
                <path d={`M${z.from} ${BASE_Y - 6}V${BASE_Y + 6}`} stroke="#bdbdbd" strokeWidth="1.5" />
                {z.key && <path d={`M${z.from} ${BASE_Y}H${z.to}`} stroke={RED} strokeWidth="2.5" strokeLinecap="round" />}
                <text
                  x={(z.from + z.to) / 2}
                  y={BASE_Y + 34}
                  textAnchor="middle"
                  fontFamily="Archivo, sans-serif"
                  fontSize="14"
                  fontWeight={z.key ? 600 : 400}
                  fill={z.key ? RED : "#8a8a8a"}
                >
                  {z.label}
                </text>
              </g>
            ))}
            <path d={`M960 ${BASE_Y - 6}V${BASE_Y + 6}`} stroke="#bdbdbd" strokeWidth="1.5" />
          </g>

          {/* The moment people still mention */}
          <text
            x={stations[2].x + 14}
            y={stations[2].y + 66}
            fontFamily="'Cormorant Garamond', serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="22"
            fill={RED}
            style={fade(1700)}
          >
            still mentioned on Thursday
          </text>

          {/* Word of mouth: rings spreading from the last station */}
          <g fill="none" stroke={RED} style={fade(1600)}>
            {[20, 30].map((r, i) => (
              <circle key={r} cx={stations[3].x} cy={stations[3].y} r={r} strokeOpacity={0.4 - i * 0.18} strokeWidth="1.5">
                {!reduced && <animate attributeName="r" values={`${r};${r + 6};${r}`} dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />}
              </circle>
            ))}
          </g>

          {stations.map((s, i) => {
            const chipY = s.y - 74;
            return (
              <g key={s.label} style={fade(400 + i * 260)}>
                <path d={`M${s.x} ${chipY + 44}V${s.y - (s.key ? 18 : 10)}`} stroke={s.key ? RED : "#bdbdbd"} strokeWidth="1.5" />

                {s.key ? (
                  <>
                    <circle cx={s.x} cy={s.y} r="18" fill={RED} fillOpacity=".15">
                      {!reduced && <animate attributeName="r" values="18;30;18" dur="2.8s" repeatCount="indefinite" />}
                      {!reduced && <animate attributeName="fill-opacity" values=".2;0;.2" dur="2.8s" repeatCount="indefinite" />}
                    </circle>
                    <circle cx={s.x} cy={s.y} r="16" fill={RED} />
                    <circle cx={s.x} cy={s.y} r="5.5" fill="#ffffff" />
                  </>
                ) : (
                  <circle cx={s.x} cy={s.y} r="9" fill="#ffffff" stroke={INK} strokeWidth="3.5" />
                )}

                <rect x={s.x - s.w / 2} y={chipY} width={s.w} height="44" rx="22" fill={s.key ? RED : "#ffffff"} filter="url(#chip-shadow)" />
                <g
                  transform={`translate(${s.x - s.w / 2 + 16} ${chipY + 12}) scale(0.833)`}
                  fill="none"
                  stroke={s.key ? "#ffffff" : RED}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </g>
                <text
                  x={s.x - s.w / 2 + 46}
                  y={chipY + 28}
                  fontFamily="Archivo, sans-serif"
                  fontSize="17"
                  fontWeight="600"
                  letterSpacing="-0.3"
                  fill={s.key ? "#ffffff" : INK}
                >
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
};

// ── Run of show: three cues on a timeline.
const cues = [
  {
    t: "T−30",
    tag: "Before",
    title: "The guest list comes first.",
    body: <>An event marketing strategy starts with a short list of names. Forty right people, not four hundred polite ones. At corporate events, four things matter. An invitation with the date in it. A promise in plain words. A sign-up form short enough to finish at a red light. One sentence a guest can repeat to the valet.</>,
  },
  {
    t: "T 00",
    tag: "In the room",
    title: "Hand over the idea.",
    body: <>Corporate event branding? Not the logo behind the speaker. The name card, spelled right. The sign that points to the coffee. One table where guests make something with their hands. Experiential marketing hands the message over to do. Experiential Production builds the room where that happens, down to the extension cords.</>,
    key: true,
  },
  {
    t: "T+01",
    tag: "After",
    title: "Stay after the room empties.",
    body: (
      <>
        Clips go out by noon. Somebody answers the question asked at the coat check. The six people who asked for more get one clear next step. Good event marketing strategies plan the week after. The goal is usually a relationship, not a one-night spectacle. Our{" "}
        <Link to="/creative-campaigns" className={inlineLink}>creative campaigns</Link> team builds that second act with you.
      </>
    ),
  },
];

const RunOfShow = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="relative mt-20 md:mt-28">
      {/* The timeline runs along the top edge of the cards */}
      <div aria-hidden="true" className="hidden md:block absolute left-[16.66%] right-[16.66%] top-0 h-[2px] -translate-y-1/2 bg-[#e2e2e2]">
        <div className="h-full bg-[#ff1616]" style={{ width: visible ? "100%" : "0%", transition: `width 1600ms ${ease} 200ms` }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
        {cues.map((c, i) => (
          <Reveal key={c.t} delay={i * 150} className="h-full">
            <article
              className={`group relative h-full rounded-[28px] p-7 md:p-9 pt-12 md:pt-14 transition-all duration-500 hover:-translate-y-1 ${
                c.key
                  ? "bg-[#0d0d0d] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]"
                  : "bg-white text-black hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  c.key
                    ? "w-8 h-8 bg-[#ff1616] ring-[6px] ring-[#ff1616]/20"
                    : "w-6 h-6 bg-white border-[5px] border-[#0d0d0d]"
                }`}
              />

              <div className="flex items-center justify-between gap-4">
                <span className={`text-[40px] md:text-[48px] font-semibold leading-none tracking-[-0.05em] ${c.key ? "text-[#ff1616]" : "text-black"}`}>{c.t}</span>
                <span className={`rounded-full px-4 py-1.5 text-[13px] font-medium ${c.key ? "bg-[#ff1616] text-white" : "bg-[#f6f6f6] text-black"}`}>{c.tag}</span>
              </div>

              <h3 className={`mt-8 pt-8 border-t text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] ${c.key ? "border-white/10 text-white" : "border-[#ececec] text-black"}`}>
                {c.title}
              </h3>
              <p className={`mt-4 text-[15px] md:text-[16px] leading-[1.8] font-light ${c.key ? "text-[#bdbdbd] [&_a]:text-white" : "text-[#6d6d6d]"}`}>{c.body}</p>

              {!c.key && (
                <span aria-hidden="true" className="absolute left-8 bottom-0 h-[3px] w-0 rounded-full bg-[#ff1616] transition-all duration-700 ease-out group-hover:w-[calc(100%-4rem)]" />
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

// ── The light test: three lamps; the middle one has a working dimmer.
const lightColor = (warmth: number) => {
  // 0 = cool white, 1 = warm amber
  const r = 255;
  const g = Math.round(244 - warmth * 70);
  const b = Math.round(224 - warmth * 150);
  return `rgb(${r},${g},${b})`;
};

const Lamp = ({ level, id }: { level: number; id: string }) => {
  const color = lightColor(level);
  return (
    <svg viewBox="0 0 140 190" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.15 + level * 0.65} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M50 58Q70 56 90 58L126 176Q70 184 14 176Z" fill={`url(#${id})`} style={{ transition: "all 300ms ease" }} />
      <ellipse cx="70" cy="178" rx={30 + level * 30} ry="5" fill={color} fillOpacity={0.1 + level * 0.35} style={{ filter: "blur(3px)", transition: "all 300ms ease" }} />
      <path d="M70 6V30" stroke="#ffffff" strokeOpacity=".5" strokeWidth="2" />
      <path d="M50 30H90L100 58H40Z" fill="#ffffff" />
      <ellipse cx="70" cy="60" rx="9" ry="4" fill={color} style={{ filter: `drop-shadow(0 0 ${4 + level * 14}px ${color})`, transition: "all 300ms ease" }} />
      <path d="M12 180H128" stroke="#ffffff" strokeOpacity=".2" strokeWidth="2" />
    </svg>
  );
};

const LightTest = () => {
  const [dimmer, setDimmer] = useState(65);
  const stationsLight = [
    { name: "See", sub: "The promise", level: 0.35 },
    { name: "Try", sub: "The proof", level: dimmer / 100, interactive: true },
    { name: "Remember", sub: "The takeaway", level: 0.8 },
  ];

  return (
    <figure className="m-0 h-full rounded-[32px] bg-[#0d0d0d] text-white p-6 md:p-10 flex flex-col">
      <div className="grid grid-cols-3 gap-3 md:gap-6 items-end flex-1">
        {stationsLight.map((s, i) => (
          <div key={s.name} className={`rounded-[22px] px-3 pt-6 pb-5 md:px-5 flex flex-col items-center ${s.interactive ? "bg-white/[0.06] ring-1 ring-white/10" : ""}`}>
            <div className="w-full max-w-[150px]">
              <Lamp level={s.level} id={`lamp-glow-${i}`} />
            </div>
            <p className={`mt-4 text-[18px] md:text-[22px] font-semibold tracking-[-0.02em] ${s.interactive ? "text-[#ff1616]" : "text-white"}`}>{s.name}</p>
            <p className="mt-0.5 text-[12px] md:text-[13px] text-[#9a9a9a]">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[20px] bg-white/[0.06] px-5 py-4 flex items-center gap-4">
        <label htmlFor="dimmer" className="text-[13px] text-[#bdbdbd] shrink-0">Dimmer</label>
        <span aria-hidden="true" className="text-[12px] text-[#8a8a8a]">Cool</span>
        <input
          id="dimmer"
          type="range"
          min={0}
          max={100}
          value={dimmer}
          onChange={(e) => setDimmer(Number(e.target.value))}
          className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer accent-[#ff1616]"
          style={{ background: `linear-gradient(to right, ${RED} ${dimmer}%, rgba(255,255,255,0.15) ${dimmer}%)` }}
        />
        <span aria-hidden="true" className="text-[12px] text-[#ffb36b]">Warm</span>
      </div>

      <figcaption className="mt-5 text-[13px] leading-[1.6] text-[#8a8a8a]">
        Illustrative guest journey for a fictional lamp launch. Concept artwork, not an executed project or measured result.
      </figcaption>
    </figure>
  );
};

const scorecard = [
  { icon: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></>, goal: "For discovery", measure: "Demo interactions, guest questions, what people understood after trying it." },
  { icon: <><path d="M9 15l6-6" /><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1" /><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1" /></>, goal: "For relationships", measure: "Conversations with the right people. Meetings booked. Permission to follow up." },
  { icon: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></>, goal: "For brand relevance", measure: "Post-event feedback, recall questions, whether the story gets repeated accurately." },
];

const EventManagementMarketing = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-16 md:pt-24 pb-24 md:pb-36`}>
          <div className="text-center">
            <Reveal>
              <h1 id="page-title" className="font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <span className="sr-only">Event Management &amp; Marketing: </span>
                <HeroTitleLines line="An audience isn't" italic="the" rest="outcome." />
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[720px]`}>
                Full venue, forgettable night. We have sat through that one. Start with the single moment a guest will still mention on Thursday. Then build the invitation, the room and the week after around it.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Tell us what you're planning</PillLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-20 md:mt-28">
            <JourneyLine />
          </Reveal>
        </section>

        {/* ── THE POINT OF GATHERING ── */}
        <section aria-labelledby="intro-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="intro-heading" className={h2Class}>
                <SplitHeading line="People remember what" italic="they" rest="took part in." />
              </h2>
            </Reveal>
            <div>
              <Reveal delay={120}>
                <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
                  Think of the last event you told somebody about. You probably described something you did. A paper plane contest. A blind taste test. A long table where strangers passed the bread. Nobody mentions the backdrop. The backdrop was beige. One idea sits in the middle. The room bends toward it, and so do the words and the staff.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 rounded-[28px] bg-[#f6f6f6]">
                  {[
                    { tag: "The making", icon: <><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17M9.5 9.5v10" /></>, title: "Event Management Services", body: "Guest flow, program design, a production brief somebody can actually build from. On-ground scope gets defined project by project." },
                    { tag: "The invitation", icon: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>, title: "Event Marketing Services", body: "The story people hear before they arrive. The content that keeps them talking after." },
                  ].map((s, i) => (
                    <article
                      key={s.title}
                      className={`group p-7 md:p-9 transition-colors duration-500 hover:bg-white ${
                        i === 0 ? "rounded-t-[28px] sm:rounded-tr-none sm:rounded-l-[28px] border-b sm:border-b-0 sm:border-r border-[#e2e2e2]" : "rounded-b-[28px] sm:rounded-bl-none sm:rounded-r-[28px]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-block rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-[#ff1616] transition-colors duration-500 group-hover:bg-[#fff1f1]">{s.tag}</span>
                        <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:text-white">
                          <LineIcon>{s.icon}</LineIcon>
                        </span>
                      </div>
                      <h3 className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{s.title}</h3>
                      <p className="mt-3 text-[15px] md:text-[16px] leading-[1.7] text-[#6d6d6d] font-light">{s.body}</p>
                    </article>
                  ))}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#ff1616] text-white flex items-center justify-center text-[22px] font-light leading-none shadow-[0_10px_24px_-10px_rgba(255,22,22,0.7)] ring-4 ring-white"
                  >
                    +
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── THE RUN OF SHOW ── */}
        <section aria-labelledby="run-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-20 items-end">
              <h2 id="run-heading" className={h2Class}>
                <SplitHeading line="Event Management & Marketing has a" italic="longer" rest="run." />
              </h2>
              <p className={bodyClass}>Doors open at seven. The event started a month ago. It ends when somebody replies on Tuesday.</p>
            </Reveal>
            <RunOfShow />
          </div>
        </section>

        {/* ── CREATIVE FIELD STUDY ── */}
        <section aria-labelledby="field-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="field-heading" className={h2Class}>
              <SplitHeading line="What if the product" italic="did" rest="the talking?" />
            </h2>
            <p className={bodyClass}>
              Say a small lighting brand has a new desk lamp. No curtain, no countdown. Visitors get three rooms. Kitchen, 6 a.m. Desk, midnight. A reading chair with a dead bulb. They push the dimmer up, down, warmer, and make up their own minds.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4 md:gap-5 items-stretch">
            <Reveal>
              <div className="h-full rounded-[32px] bg-[#f6f6f6] p-7 md:p-10 flex flex-col">
                <span className="self-start rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-black">Example only, no client claim</span>
                <h3 className="mt-8 text-[40px] md:text-[56px] font-semibold leading-[1.0] tracking-[-0.05em] text-black">
                  The light{" "}
                  <em className="italic font-normal text-[#ff1616]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.1em" }}>
                    test.
                  </em>
                </h3>
                <p className="mt-6 text-[15px] md:text-[17px] leading-[1.8] text-[#6d6d6d] font-light">
                  Product launch event ideas don't need a stunt. The experience is the discovery. Brand activation ideas work best when guests try, compare and argue a little. Nobody argues about a backdrop. Our{" "}
                  <Link to="/product-launch" className={inlineLink}>product launch</Link> work starts from the same question.
                </p>
                <p className="mt-auto pt-8 text-[13px] text-[#9a9a9a]">Guest flow: see, try, remember.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <LightTest />
            </Reveal>
          </div>

          <div className="mt-24 md:mt-32 text-center">
            <Reveal>
              <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
              <h3 className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.12] tracking-[-0.035em] text-black">
                <SplitHeading line="Corporate event planning and marketing," italic="one" rest="story." />
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Experience Marketing often turns into a pretty backdrop for photos. Ask what a guest can do there with their hands. In experiential event production the small things decide it. Sightlines. Ramps. A dimmer that works. What the staff say first. Scope gets pinned down while the carpenter is still on the phone.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── AFTER THE GUESTS LEAVE ── */}
        <section aria-labelledby="measure-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="measure-heading" className={h2Class}>
                <SplitHeading line="Applause won't fit" italic="in" rest="a spreadsheet." />
              </h2>
              <p className={`${bodyClass} mt-8`}>
                Count the room, sure. Then ask who learned something and who took a next step. A packed ballroom proves the invitation worked. It proves little else.
              </p>
            </Reveal>

            <div aria-label="Example event objectives and matching measures" className="space-y-3">
              {scorecard.map((s, i) => (
                <Reveal key={s.goal} delay={i * 120}>
                  <article className="group grid grid-cols-[56px_1fr] md:grid-cols-[56px_200px_1fr] gap-x-5 gap-y-2 md:gap-8 items-center rounded-[24px] bg-[#f6f6f6] p-6 md:p-8 transition-all duration-500 hover:bg-white hover:ring-1 hover:ring-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#ff1616] transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:text-white">
                      <LineIcon>{s.icon}</LineIcon>
                    </span>
                    <h3 className="m-0 text-[20px] md:text-[22px] font-semibold tracking-[-0.02em] text-black">{s.goal}</h3>
                    <p className="col-start-2 md:col-start-auto text-[15px] md:text-[17px] leading-[1.7] text-[#6d6d6d] font-light">{s.measure}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Before you book" italic="the" rest="room." />}
          note="Eight questions. One small picture per answer."
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Tell us who should" italic="leave" rest="different." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Bring a goal and a rough guest list. A photo of the venue helps. Perfect Pixel Pro starts with the story worth gathering people around. Event Management &amp; Marketing works best with one team on both halves. For the thinking behind it, read about our{" "}
                <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work or see how a{" "}
                <Link to="/branding-agency" className={inlineLink}>branding agency</Link> fits in.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Talk through your event</PillLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EventManagementMarketing;
