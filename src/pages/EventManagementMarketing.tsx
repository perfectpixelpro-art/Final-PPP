import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import inviteCandy from "../assets/InviteCandy.jpg";
import announceCandy from "../assets/AnnounceCandy.png";
import takePartCandy from "../assets/TakePartCandy.png";
import thankCandy from "../assets/ThankCandy.png";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
// Inline links follow this page's accent rather than the site red.
const emmLink = "underline decoration-[#909396] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#6d7174]";

const PAGE_TITLE = "Event Management & Marketing | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Event Management & Marketing from Perfect Pixel Pro. Plan the room, the story and the follow-up together, from the invitation to the day after.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "How to plan a corporate event?",
    a: "To plan a corporate event, write down what should change for the guests and count backward from the date. Book the venue and key vendors first, then build the run sheet, then schedule the invitation and the follow-up email. Give one person ownership of the calendar. Check the plan against the goal one week before doors open.",
  },
  {
    q: "What are the best Experience Marketing strategies for events?",
    a: "The best Experience Marketing strategies for events let guests try the product before anyone explains it. Four formats work most often: a hands-on trial, a side-by-side comparison, something guests make and something they take home. Pick one and build the room around it.",
  },
  {
    q: "What is Event Management & Marketing?",
    a: "Event Management & Marketing is one plan for how an event runs and how people hear about it, before and after. Event management covers the venue, vendors, schedule and guest flow. Event marketing covers the invitation, the story and the follow-up. Planning them together keeps the message and the room consistent.",
  },
  {
    q: "What is Experience Marketing?",
    a: "Experience Marketing is marketing guests take part in instead of marketing they read. People do something, try something or make something, and they remember it because they did it. It is also searched as experiential marketing. At an event, the activity is the message.",
  },
  {
    q: "What makes something a product launch event?",
    a: "A product launch event is the first public showing of something new, built so guests see it work and remember one thing. It needs a clear audience, one demonstration and a next step for guests who want more.",
  },
  {
    q: "What are good brand activation ideas?",
    a: "Good brand activation ideas give people something to use, touch or carry home. Common formats are a live demonstration, a free trial or sample, a hands-on workshop and a take-home item that carries the brand. Choose the format that fits what the brand sells.",
  },
  {
    q: "What does an event marketing strategy cover?",
    a: "An event marketing strategy covers who attends, what they should feel and what happens after they leave. It sets the guest list, the invitation, one hands-on activity and a follow-up message sent within a few days.",
  },
  {
    q: "Do I need an event management business plan?",
    a: "An event management business plan is for people who run an events company. It covers clients, pricing, costs and how you find the next booking. If you're planning one event for your own brand, write an event brief instead. It states why you're hosting, who comes, what it costs, who owns what, what could go wrong and how you'll know it worked.",
  },
];

const structuredData = [
  articleSchema("Event Management & Marketing: Your Brand, in Person", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

const LineIcon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

// ── Hero graphic: start with the one moment, then build the invitation, the room and the week after around it.
// Icons are borrowed from the curve stations below, so they're looked up at render time.
const builtAround = [
  { label: "The invitation", when: "Before", station: 0 },
  { label: "The room", when: "In the room", station: 1 },
  { label: "The week after", when: "After", station: 3 },
];

// An event ticket: the invitation on top, the room and its one moment in the middle, the week after on the stub.
const MomentFirst = () => (
  <figure className="m-0 mx-auto mt-[13px] w-full max-w-[460px]">
    <img
      src="/assets/candyw12.png"
      alt="An event moment: the part of the night guests still mention days later."
      loading="lazy"
      decoding="async"
      className="block w-full rounded-[28px]"
    />
  </figure>
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
  const pts = [{ x: 40, y: 244 }, ...stations.map(({ x, y }) => ({ x, y })), { x: 960, y: 168 }];
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
            <clipPath id="room-clip">
              <rect x="250" y="0" width="500" height={BASE_Y} />
            </clipPath>
            <filter id="chip-shadow" x="-20%" y="-40%" width="140%" height="180%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.06" />
            </filter>
          </defs>

          {/* Faint guides */}
          <g stroke="#e7e7e7" strokeWidth="1" style={fade(200)}>
            {[96, 160, 224].map((y) => <path key={y} d={`M40 ${y}H960`} strokeDasharray="2 6" />)}
          </g>

          {/* Area under the experience curve */}
          <path d={`${curve} L1000 ${BASE_Y} L0 ${BASE_Y}Z`} fill={RED} fillOpacity=".045" style={fade(900)} />

          {/* Drop lines from each station to the floor */}
          {stations.map((s, i) => (
            <path key={`drop-${s.label}`} d={`M${s.x} ${s.y}V${BASE_Y}`} stroke={s.key ? RED : "#d4d4d4"} strokeOpacity={s.key ? 0.5 : 1} strokeWidth="1" strokeDasharray="3 5" style={fade(700 + i * 200)} />
          ))}

          {/* The curve */}
          <path
            d={curve}
            fill="none"
            stroke={INK}
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1800ms ${ease} 200ms` }}
          />

          <path
            d={curve}
            fill="none"
            stroke={RED}
            strokeWidth="3.5"
            strokeLinecap="round"
            clipPath="url(#room-clip)"
            style={fade(1500)}
          />
          {!reduced && (
            <circle r="4" fill={RED} stroke="#ffffff" strokeWidth="2" style={fade(2000)}>
              <animateMotion dur="7s" repeatCount="indefinite" path={curve} calcMode="spline" keyTimes="0;1" keySplines="0.45 0 0.55 1" />
            </circle>
          )}

          {/* Timeline band: before, in the room, after */}
          <g style={fade(1200)}>
            {[
              { from: 40, to: 250, label: "Before" },
              { from: 250, to: 750, label: "In the room", key: true },
              { from: 750, to: 960, label: "After" },
            ].map((z) => (
              <g key={z.label}>
                <rect
                  x={z.from + 3}
                  y={BASE_Y + 6}
                  width={z.to - z.from - 6}
                  height="36"
                  rx="18"
                  fill={z.key ? "#e6e6e6" : "#ffffff"}
                  stroke={z.key ? "none" : "#ebebeb"}
                />
                <text
                  x={(z.from + z.to) / 2}
                  y={BASE_Y + 29}
                  textAnchor="middle"
                  fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif"
                  fontSize="14"
                  fontWeight={z.key ? 600 : 500}
                  fill={z.key ? INK : "#6d6d6d"}
                >
                  {z.label}
                </text>
              </g>
            ))}
          </g>

          {/* The moment people still mention */}
          <path d={`M${stations[2].x} ${stations[2].y + 110}h10`} stroke={RED} strokeWidth="1.5" strokeLinecap="round" style={fade(1700)} />
          <text
            x={stations[2].x + 14}
            y={stations[2].y + 116}
            fontFamily="'Cormorant Garamond', serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="20"
            fill={RED}
            style={fade(1700)}
          >
            still mentioned on Thursday
          </text>

          {stations.map((s, i) => {
            const chipY = s.y - 74;
            return (
              <g key={s.label} style={fade(400 + i * 260)}>
                <path d={`M${s.x} ${chipY + 44}V${s.y - (s.key ? 15 : 9)}`} stroke={s.key ? RED : "#bdbdbd"} strokeWidth="1.5" />

                {s.key ? (
                  <>
                    <circle cx={s.x} cy={s.y} r="13" fill={RED} stroke="#ffffff" strokeWidth="4" />
                    <circle cx={s.x} cy={s.y} r="4.5" fill="#ffffff" />
                  </>
                ) : (
                  <circle cx={s.x} cy={s.y} r="8" fill="#ffffff" stroke={INK} strokeWidth="3" />
                )}

                <rect x={s.x - s.w / 2} y={chipY} width={s.w} height="44" rx="22" fill={s.key ? RED : "#ffffff"} stroke={s.key ? "none" : "#ebebeb"} filter="url(#chip-shadow)" />
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
                  fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif"
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
    t: "01",
    tag: "The date is set",
    title: "Start marketing on day one.",
    body: <>The moment an event is on the calendar, it has an audience to find. Write down what should change for the guests, name the people who should be there and start telling them early. Forty right people beat four hundred polite ones. An event marketing strategy begins here, with a short guest list and one idea worth showing up for.</>,
  },
  {
    t: "02",
    tag: "Months out",
    title: "Build the invitation and the wait.",
    body: <>At corporate events, early notice does the work. Send a save-the-date with a promise in plain words, then give guests reasons to keep it: a speaker announcement, a first look at the program, a sign-up form short enough to finish at a red light. By the formal invitation, guests should already be expecting it.</>,
  },
  {
    t: "03",
    tag: "Event day",
    title: "Hand over the idea.",
    body: <>Corporate event branding is more than the logo behind the speaker. It is the name card spelled right, the sign that points to the coffee and one table where guests make something with their hands. Experience Marketing puts the message in guests' hands so they do something with it instead of watching. Event production builds the room where that happens, down to the extension cords.</>,
    key: true,
  },
  {
    t: "04",
    tag: "The week after",
    title: "Stay after the room empties.",
    body: (
      <>
        Clips go out by noon. Somebody answers the question asked at the coat check. The guests who asked for more get one clear next step. Good event marketing strategies plan the week after, because the goal is usually a relationship, not a one-night spectacle. Our{" "}
        <Link to="/creative-campaigns" className={emmLink}>creative campaigns</Link> team can carry that conversation into the weeks that follow.
      </>
    ),
  },
];

const RunOfShow = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  // The black card follows the cursor; with no hover it rests on "In the room".
  const [active, setActive] = useState(2);

  return (
    <div ref={ref} className="relative mt-20 md:mt-28">
      {/* The timeline runs along the top edge of the cards */}
      <div aria-hidden="true" className="hidden xl:block absolute left-[12.5%] right-[12.5%] top-0 h-[2px] -translate-y-1/2 bg-[#e2e2e2]">
        <div className="h-full bg-[#dc6e87]" style={{ width: visible ? "100%" : "0%", transition: `width 1600ms ${ease} 200ms` }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5" onMouseLeave={() => setActive(2)}>
        {cues.map((c, i) => {
          const on = active === i;
          const fadeCls = "transition-colors duration-500";
          return (
            <Reveal key={c.t} delay={i * 150} className="h-full">
              <article
                onMouseEnter={() => setActive(i)}
                className={`relative h-full rounded-[28px] p-7 md:p-9 pt-12 md:pt-14 transition-all duration-500 ${
                  on ? "bg-[#0d0d0d] text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] md:-translate-y-1" : "bg-white text-black"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                    on ? "w-8 h-8 bg-[#dc6e87] ring-[6px] ring-[#dc6e87]/20" : "w-6 h-6 bg-white border-[5px] border-[#0d0d0d]"
                  }`}
                />

                <div className="flex items-center justify-between gap-4">
                  <span className={`text-[36px] md:text-[42px] font-semibold leading-none tracking-[-0.05em] ${fadeCls} ${on ? "text-[#909396]" : "text-black"}`}>{c.t}</span>
                  <span className={`rounded-full px-4 py-1.5 text-[13px] font-medium ${fadeCls} ${on ? "bg-[#dc6e87] text-white" : "bg-[#f6f6f6] text-black"}`}>{c.tag}</span>
                </div>

                <h3 className={`mt-8 pt-8 border-t text-[24px] md:text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] ${fadeCls} ${on ? "border-white/10 text-white" : "border-[#ececec] text-black"}`}>
                  {c.title}
                </h3>
                <p className={`mt-4 text-[15px] md:text-[16px] leading-[1.8] font-light ${fadeCls} ${on ? "text-[#bdbdbd] [&_a]:text-white" : "text-[#6d6d6d]"}`}>{c.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

// ── Candy Land: the four pieces a guest actually met, in order.
const guestFlow = [
  { step: "01", name: "Invite", sub: "The poster", img: inviteCandy, alt: "The Candy Land grand opening poster on the welcome table." },
  { step: "02", name: "Announce", sub: "The social post", img: announceCandy, alt: "The Candy Land event banner announcing the date and the invitation." },
  { step: "03", name: "Take part", sub: "Activity sheet", img: takePartCandy, alt: "The Candy Land activity sheet guests filled in during the event." },
  { step: "04", name: "Thank", sub: "Thank-you bag", img: thankCandy, alt: "The Candy Land thank-you bag guests took home." },
];

// The four pieces a guest met, in order, with the real work shown rather than drawn.
const GuestFlow = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <figure className="m-0 h-full">
      <div ref={ref} className="h-full rounded-[32px] bg-[#faf8f4] ring-1 ring-[#ececec] p-5 md:p-7 flex flex-col">
        <ol className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-9 md:gap-x-5 m-0 p-0 list-none">
          {guestFlow.map((g, i) => (
            <li key={g.step} className="flex flex-col items-center text-center">
              <div
                className="group w-full overflow-hidden rounded-[18px] bg-white ring-1 ring-[#eceae4] shadow-[0_12px_28px_-24px_rgba(43,35,32,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_34px_-24px_rgba(43,35,32,0.45)]"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(14px)", transition: `opacity 600ms ease ${200 + i * 140}ms, transform 600ms ${ease} ${200 + i * 140}ms` }}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              {/* the drop from the piece to its stop on the route */}
              <span aria-hidden="true" className="mt-4 h-6 w-px border-l border-dashed border-[#d9d4ca]" />

              <span className="relative w-full flex items-center justify-center">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-1/2 right-1/2 left-[calc(-50%-1.25rem)] h-[2px] -translate-y-1/2 rounded-full bg-[#e7e2d8] overflow-hidden"
                  >
                    <span
                      className="block h-full rounded-full bg-[#dc6e87]"
                      style={{ width: visible ? "100%" : "0%", transition: `width 700ms ${ease} ${300 + i * 180}ms` }}
                    />
                  </span>
                )}
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[13px] font-bold text-[#dc6e87] ring-2 ring-[#dc6e87] shadow-[0_0_0_5px_#faf8f4]">
                  {g.step}
                </span>
              </span>

              <p className="mt-3 text-[16px] md:text-[17px] font-semibold tracking-[-0.02em] text-black">{g.name}</p>
              <p className="mt-0.5 text-[12px] md:text-[12.5px] text-[#dc6e87]">{g.sub}</p>
            </li>
          ))}
        </ol>

        <figcaption className={`${noteClass} mt-7`}>
          The pieces a guest met in our Candy Land work, in the order they met them. Client work shown as created; no results are claimed.
        </figcaption>
      </div>
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

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-start">
            <Reveal className="lg:pt-2">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Event Management" italic="&" rest="Marketing" plainItalic compact accent={ACCENT} />
              </h1>
              <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
                Your brand,{" "}
                <span className="text-[#dc6e87]" style={{ fontFamily: "BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" }}>
                  in person.
                </span>
              </p>
              <p className={`${bodyClass} mt-6 max-w-[560px]`}>
                We plan the invitation, the room and the follow-up as one story, so guests arrive curious and leave with something to say.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Tell us what you're planning</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <MomentFirst />
            </Reveal>
          </div>
        </section>

        {/* ── THE POINT OF GATHERING ── */}
        <section aria-labelledby="intro-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="intro-heading" className={h2Class}>
                <SplitHeading line="People remember what" italic="they" rest="took part in." accent={ACCENT} />
              </h2>
            </Reveal>
            <div>
              <Reveal delay={120}>
                <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
                  Think of the last event you told somebody about. You probably described something you did, not something you looked at. Nobody mentions the backdrop. Every event worth retelling has one idea at the center. The room bends toward it, and so do the words and the staff.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 rounded-[28px] bg-[#f6f6f6]">
                  {[
                    { tag: "The making", icon: <><rect x="3.5" y="4.5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17M9.5 9.5v10" /></>, title: "Event Management Services", body: "Guest flow, program design and a production brief your vendors can build from. On-ground scope gets defined project by project." },
                    { tag: "The invitation", icon: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>, title: "Event Marketing Services", body: "The story people hear before they arrive, and the content that keeps them talking afterward." },
                  ].map((s, i) => (
                    <article
                      key={s.title}
                      className={`group p-7 md:p-9 transition-colors duration-500 hover:bg-white ${
                        i === 0 ? "rounded-t-[28px] sm:rounded-tr-none sm:rounded-l-[28px] border-b sm:border-b-0 sm:border-r border-[#e2e2e2]" : "rounded-b-[28px] sm:rounded-bl-none sm:rounded-r-[28px]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-block rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-[#6d7174] transition-colors duration-500 group-hover:bg-[#f1f2f3]">{s.tag}</span>
                        <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black transition-colors duration-500 group-hover:bg-[#dc6e87] group-hover:text-white">
                          <LineIcon>{s.icon}</LineIcon>
                        </span>
                      </div>
                      <h3 className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{s.title}</h3>
                      <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-3">{s.body}</p>
                    </article>
                  ))}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#dc6e87] text-white flex items-center justify-center text-[22px] font-light leading-none shadow-[0_10px_24px_-10px_rgba(220,110,135,0.75)] ring-4 ring-white"
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
            <Reveal className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-20 items-start">
              <h2 id="run-heading" className={h2Class}>
                <SplitHeading line="Event Management & Marketing starts the day an event is" italic="on" rest="the calendar." accent={ACCENT} />
              </h2>
              <p className={bodyClass}>Marketing doesn't wait for the invitation. Once there's a date, there's an audience to find.</p>
            </Reveal>
            <RunOfShow />
          </div>
        </section>

        {/* ── CREATIVE FIELD STUDY ── */}
        <section aria-labelledby="field-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
            <h2 id="field-heading" className={h2Class}>
              <SplitHeading line="One event, from" italic="invitation" rest="to thanks." accent={ACCENT} />
            </h2>
            <p className={bodyClass}>
              Candy Land was a themed community event for a real estate team opening a new office. Our creative covered the pieces a guest actually met: the invitation, the social announcement, an activity sheet and a thank-you bag at the door.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4 md:gap-5 items-stretch">
            <Reveal>
              <div className="h-full rounded-[32px] bg-[#f6f6f6] p-7 md:p-10 flex flex-col">
                <span className="self-start rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-black">Real work, no results claimed</span>
                <h3 className="mt-8 text-[40px] md:text-[56px] font-semibold leading-[1.0] tracking-[-0.05em] text-black">
                  Candy{" "}
                  <span className="font-normal text-[#dc6e87]">
                    Land.
                  </span>
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-6">
                  One theme ran through every piece a guest touched. Product launch event ideas and brand activation ideas follow the same rule: pick one thing guests can do, then make everything point at it. Our{" "}
                  <Link to="/product-launch" className={emmLink}>product launch</Link> work starts from the same question. See the{" "}
                  <Link to="/work/candy-land" className={emmLink}>Candy Land project</Link> for the full set.
                </p>
                <p className="mt-auto pt-8 text-[13px] text-[#dc6e87]">Schematic 01 / guest flow.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <GuestFlow />
            </Reveal>
          </div>

          <div className="mt-24 md:mt-32 text-center">
            <Reveal>
              <h3 className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.15] tracking-[-0.035em] text-black">
                <SplitHeading line="Corporate event planning and marketing," italic="one" rest="story." accent={ACCENT} />
              </h3>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Experience Marketing often turns into a pretty backdrop for photos. Ask what a guest can do there with their hands. In event production the small things decide it: sightlines, ramps, a name card spelled right and what the staff say first. Scope gets pinned down while the carpenter is still on the phone.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── AFTER THE GUESTS LEAVE ── */}
        <section aria-labelledby="measure-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec] grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="measure-heading" className={h2Class}>
                <SplitHeading line="Applause won't fit" italic="in" rest="a spreadsheet." accent={ACCENT} />
              </h2>
              <p className={`${bodyClass} mt-8`}>
                Count the room, then ask who learned something and who took a next step. A packed ballroom proves the invitation worked. It proves little else.
              </p>
            </Reveal>

            <div aria-label="Example event objectives and matching measures" className="space-y-3">
              {scorecard.map((s, i) => (
                <Reveal key={s.goal} delay={i * 120}>
                  <article className="group grid grid-cols-[56px_1fr] md:grid-cols-[56px_200px_1fr] gap-x-5 gap-y-2 md:gap-8 items-center rounded-[24px] bg-[#f6f6f6] p-6 md:p-8 transition-all duration-500 hover:bg-white hover:ring-1 hover:ring-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#909396] transition-colors duration-500 group-hover:bg-[#dc6e87] group-hover:text-white">
                      <LineIcon>{s.icon}</LineIcon>
                    </span>
                    <h3 className="m-0 text-[20px] md:text-[22px] font-semibold tracking-[-0.02em] text-black">{s.goal}</h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] col-start-2 md:col-start-auto">{s.measure}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          accent={ACCENT}
          heading={<SplitHeading line="Before you book" italic="the" rest="room." accent={ACCENT} />}
          note="Eight questions, answered directly."
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Tell us who should" italic="leave" rest="different." plain compact accent="#ff1616" />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Bring a goal and a rough guest list. A photo of the venue helps. Perfect Pixel Pro is a Creative Agency that starts with the story worth gathering people around. Event Management &amp; Marketing works best with one team on both halves. For the thinking behind it, read about our{" "}
                brand strategy work or see how a{" "}
                branding agency fits in.
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
