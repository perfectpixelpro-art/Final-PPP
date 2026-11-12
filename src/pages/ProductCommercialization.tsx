import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import yeri from "../assets/yeri.webp";
import yeriFive from "../assets/yeri-5-product.webp";
import yeriHide from "../assets/yeri-hide.webp";
import Footer from "../components/Footer";
import {
  INK, container, sectionY, h2Class, bodyClass, noteClass,
  Accent, HeroTitleLines, SplitHeading, Arrow, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion, usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
const ACCENT_DEEP = "#6d7174";
// Inline links keep this page's accent rather than the site red.
const pcLink = "underline decoration-[0] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[1]";

const PAGE_TITLE = "Product Commercialization: Buyer-First Guide | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product commercialization from first question to first sale: customer discovery, MVP validation, value proposition and launch, with examples across product types.";

const stages = [
  {
    label: "01 / BEFORE THE PRODUCT",
    page: { name: "Pre-Product Assistance", to: "/pre-product-assistance" },
    title: "Meet the buyer first.",
    body: (
      <>
        <Link to="/pre-product-assistance" className={pcLink}>Pre-Product Assistance</Link> is where ten borrowed hours of interviews can save you a pallet of stock.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="One buyer singled out from a grid of dots">
        <defs>
          <radialGradient id="pc-halo-1" cx="57%" cy="42%" r="46%">
            <stop offset="0%" stopColor="#6aa9ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6aa9ff" stopOpacity="0" />
          </radialGradient>
          <filter id="pc-glow-1" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="280" height="140" fill="url(#pc-halo-1)" />
        {Array.from({ length: 36 }, (_, i) => {
          const x = 60 + (i % 9) * 20;
          const y = 34 + Math.floor(i / 9) * 24;
          if (x === 160 && y === 58) return null;
          const near = Math.abs(x - 160) <= 20 && Math.abs(y - 58) <= 24;
          return <circle key={i} cx={x} cy={y} r={near ? 2.6 : 2.2} fill={near ? "#7f8da3" : "#4a4f58"} />;
        })}
        <g filter="url(#pc-glow-1)">
          <circle cx="160" cy="58" r="20" fill="none" stroke="#6aa9ff" strokeOpacity=".28" />
          <circle cx="160" cy="58" r="11" fill="none" stroke="#6aa9ff" strokeOpacity=".65" />
          <circle cx="160" cy="58" r="4.5" fill="#6aa9ff" />
        </g>
      </svg>
    ),
  },
  {
    label: "02 / AT THE LAUNCH",
    page: { name: "Product Launch", to: "/product-launch" },
    title: "Choose the words.",
    body: (
      <>
        <Link to="/product-launch" className={pcLink}>Product Launch</Link> is where somebody finally has to pick the name, the pack and the date.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="Three draft lines with the chosen one ticked">
        <defs>
          <radialGradient id="pc-halo-2" cx="52%" cy="50%" r="48%">
            <stop offset="0%" stopColor="#ffc24b" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#ffc24b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pc-pick-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffd98a" />
          </linearGradient>
          <filter id="pc-glow-2" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="280" height="140" fill="url(#pc-halo-2)" />
        <rect x="60" y="38" width="120" height="8" rx="4" fill="#42464e" />
        <rect x="60" y="66" width="140" height="10" rx="5" fill="url(#pc-pick-2)" filter="url(#pc-glow-2)" />
        <rect x="60" y="96" width="92" height="8" rx="4" fill="#42464e" />
        <g filter="url(#pc-glow-2)">
          <circle cx="222" cy="71" r="12" fill="#ffc24b" />
          <path d="M216.5 71.5 220.5 75.5 228 67.5" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    label: "03 / AFTER THE FIRST ORDER",
    page: { name: "Product Sales", to: "/product-sales" },
    title: "Keep the orders coming.",
    body: (
      <>
        <Link to="/product-sales" className={pcLink}>Product Sales</Link> takes over when the first stockist calls to ask the price.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="A calendar of days filling up with orders">
        <defs>
          <radialGradient id="pc-halo-3" cx="50%" cy="62%" r="52%">
            <stop offset="0%" stopColor="#4ed598" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#4ed598" stopOpacity="0" />
          </radialGradient>
          <filter id="pc-glow-3" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="280" height="140" fill="url(#pc-halo-3)" />
        {[0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2].map((v, i) => (
          <rect
            key={i}
            x={60 + (i % 7) * 24}
            y={38 + Math.floor(i / 7) * 24}
            width="16"
            height="16"
            rx="4"
            fill={v === 2 ? "#4ed598" : v === 1 ? "#e9edf2" : "none"}
            stroke={v === 0 ? "#42464e" : "none"}
            filter={v === 2 ? "url(#pc-glow-3)" : undefined}
          />
        ))}
      </svg>
    ),
  },
];

const steps = [
  {
    word: "PREDICT",
    num: "01",
    title: "Go find the buyer.",
    body: "Ten real conversations, before anything gets designed. That's Customer Discovery. Out of them comes a Buyer Persona, one specific person with a routine and a reason to switch. Zoom out and you get your ideal customer profile, or ICP, the type of customer you pursue first. Target market analysis comes next. Is the group big enough to build for? A notebook and a rough count will do.",
  },
  {
    word: "PENETRATE",
    num: "02",
    title: "Shape the promise.",
    body: "Build the smallest version a buyer can pay for. That's your Minimum Viable Product (MVP). MVP validation comes next, and it asks one thing. Do they come back? Their answers shape your Value proposition, the one line on why this and not the alternatives. Competitive differentiation cuts every claim a rival could also make. What's left is your unique selling point (USP).",
  },
  {
    word: "PRECISION",
    num: "03",
    title: "Make it hold up.",
    body: "Product marketing is one messaging page that sales, support and the website all follow. Then comes the marketing production: packaging, a landing page, photography. Price comes last. Buyers tell you what they'd pay, and you listen.",
  },
];

const faqs: Faq[] = [
  {
    q: "What are the stages of product commercialization?",
    a: "Product commercialization has three stages at Perfect Pixel Pro: Pre-Product Assistance, Product Launch and Product Sales. First, who is it for? That's Pre-Product Assistance. Then comes the wording. Product Launch is where somebody has to pick a name, write the messaging, sort the packaging and fix a date. Last, will they pay? Product Sales answers that and keeps the orders coming. Other frameworks use five or seven stages. We stick to three. Each one answers a single question.",
  },
  {
    q: "What is product marketing?",
    a: "Product marketing is the fix for a company that describes its own product five different ways. Someone decides what the product is, who it's for and why anyone should care. Sales, support and the website then repeat it. Usually that's one short page.",
  },
  {
    q: "How to price a new product?",
    a: "Set the price last, after buyers have told you what they'd pay. Your floor is the full cost to make, pack and deliver one unit. Your ceiling is what buyers already pay for a comparable result. Test a price between the two with a handful of real buyers, and treat hesitation as data. (A $6 unit against an $18 comparable product is made up, but it shows how much room there is to test.)",
  },
  {
    q: "What is the difference between a Buyer Persona and an ICP?",
    a: "A Buyer Persona is one made-up person. An ideal customer profile (ICP) is the wider group that fits you best. People, shops, whole companies, whatever applies. The persona shapes your wording. The ICP decides who you call first. Both come out of Customer Discovery.",
  },
  {
    q: "What is MVP validation?",
    a: "MVP validation answers one question: do real buyers want your Minimum Viable Product? Find out before you build more. Watch behavior, not opinions. Second orders, referrals and paid pilots count. Compliments don't. If buyers don't come back, change the promise first, then the product.",
  },
  {
    q: "When should you start product commercialization?",
    a: "Start early, before the product is finished if you can. Talking to buyers is cheapest while the product can still change, so we begin with Pre-Product Assistance. Further along? Come anyway. A rough plan or a prototype gives us plenty to work with.",
  },
  {
    q: "What is brand awareness?",
    a: "Brand awareness is how many buyers in your market know your name and what you sell. Some have never heard of you. A few name you first. New products start at zero. Everybody does.",
  },
  {
    q: "What is the importance of brand awareness?",
    a: "Brand awareness matters because people pick the names they recognize. A familiar name gets chosen faster and trusted sooner. Your ads, reviews and sales calls land better too. They're reminding people, not introducing you.",
  },
  {
    q: "How to build brand awareness?",
    a: "Choose two or three places your buyer already spends time. Not ten. Use one logo, one voice and one Value proposition everywhere. A sharp USP helps, since it gives people one thing to remember. Then keep going. Names stick through repetition, mostly.",
  },
];

const structuredData = [
  articleSchema("Product commercialization that starts with the buyer", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

// Hero graphic: the gap between a working prototype and a paying stranger,
// bridged in order by the buyer, the promise and the launch.
const bridgeEase = "cubic-bezier(.2,.7,.2,1)";
const bridgeStones = [
  {
    label: "Buyer",
    x: 350,
    y: 132,
    w: 112,
    icon: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" /></>,
  },
  {
    label: "Promise",
    x: 500,
    y: 110,
    w: 128,
    icon: <path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" />,
  },
  {
    label: "Launch",
    x: 650,
    y: 132,
    w: 120,
    icon: <path d="M3.5 11.5 20.5 4l-7.5 17-2.2-7.3Z" />,
  },
];

// Hero graphic: the same journey as the bridge, stood upright for the right-hand column.
const pathNotes = ["Find the buyer first", "Then the promise", "Then the launch"];
// Buyer, Promise and Launch each keep the colour their stage card uses below.
const pathTones = [
  { c: "#6aa9ff", soft: "#edf4ff", ring: "rgba(106,169,255,0.9)" },
  { c: "#ffc24b", soft: "#fff6e6", ring: "rgba(255,194,75,0.9)" },
  { c: "#4ed598", soft: "#eafaf2", ring: "rgba(78,213,152,0.9)" },
];

const PathIcon = ({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const BuyerPath = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const reduced = prefersReducedMotion();
  const show = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${bridgeEase} ${delay}ms`,
  });
  // The spine runs through the centre of the start and finish icons (panel padding 20px + half of a 48px tile).
  const spineX = 44;

  return (
    <figure className="m-0">
      <p className="sr-only">
        Product commercialization bridges the gap between a working prototype and a stranger who pays: find the buyer first, then the promise, then the launch.
      </p>
      <div ref={ref} aria-hidden="true" className="relative rounded-[34px] bg-[#f4f4f3] p-4 ring-1 ring-black/[0.04] md:p-6">
        <div className="relative">
          {/* Spine: a pale track that deepens to ink as the journey lands */}
          <span className="absolute top-[44px] bottom-[44px] w-[2px] -translate-x-1/2 rounded-full bg-[#e4e4e4]" style={{ left: spineX }} />
          <span
            className="absolute top-[44px] w-[2px] -translate-x-1/2 rounded-full"
            style={{
              left: spineX,
              height: visible ? "calc(100% - 88px)" : "0%",
              transition: `height 1600ms ${bridgeEase} 400ms`,
              background: "linear-gradient(to bottom,#d8dde4 0%,#6aa9ff 26%,#ffc24b 50%,#4ed598 72%,#0d0d0d 100%)",
            }}
          />
          {!reduced && visible && (
            <span
              className="pp-dot absolute w-[9px] h-[9px] -translate-x-1/2 rounded-full bg-[#0d0d0d] shadow-[0_0_0_4px_rgba(13,13,13,0.08)]"
              style={{ left: spineX }}
            />
          )}

          {/* Start */}
          <div
            className="relative flex items-center gap-4 rounded-[22px] bg-white p-5 ring-1 ring-[#ececec] shadow-[0_18px_30px_-26px_rgba(13,13,13,0.45)]"
            style={show(100)}
          >
            <span className="w-12 h-12 shrink-0 rounded-[14px] flex items-center justify-center" style={{ background: "#edf4ff", color: "#3f7fd0" }}>
              <PathIcon><path d="M12 3 20 7.5v9L12 21l-8-4.5v-9Z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></PathIcon>
            </span>
            <span className="text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-[#0d0d0d]">Prototype works</span>
          </div>

          <p
            className="relative pl-[88px] pt-6 pb-4 text-[18px] md:text-[20px] leading-[1.35] tracking-[-0.01em] text-[#9a9a9a]"
            style={show(500)}
          >
            where good products quietly die
          </p>

          {/* The three steps, one panel */}
          <ol
            className="relative list-none m-0 p-0 ml-[88px] rounded-[22px] bg-white ring-1 ring-[#ececec] divide-y divide-[#f1f1f1] shadow-[0_18px_30px_-26px_rgba(13,13,13,0.45)]"
            style={show(600)}
          >
            {bridgeStones.map((st, i) => (
              <li
                key={st.label}
                className={`group/step relative flex items-center gap-4 px-5 py-4 md:py-5 ${i === 0 ? "rounded-t-[22px]" : ""}`}
                style={{ ...show(650 + i * 200), background: i === 0 ? pathTones[0].soft : undefined }}
              >
                <span
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center ring-[5px] ring-[#f4f4f3] text-white transition-transform duration-500"
                  style={{
                    left: spineX - 88,
                    background: pathTones[i].c,
                    boxShadow: `0 10px 20px -10px ${pathTones[i].ring}`,
                    transform: i === 0 ? "translate(-50%,-50%) scale(1.08)" : "translate(-50%,-50%)",
                  }}
                >
                  <PathIcon className="w-4 h-4">{st.icon}</PathIcon>
                </span>
                <div className="flex-1">
                  <span className="block text-[18px] md:text-[19px] font-medium tracking-[-0.02em] text-[#0d0d0d]">{st.label}</span>
                  <span className="block text-[13px] text-[#9a9a9a]">{pathNotes[i]}</span>
                </div>
                <span
                  className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 group-hover/step:translate-x-0.5"
                  style={
                    i === 0
                      ? { background: pathTones[i].c, color: "#ffffff" }
                      : { background: pathTones[i].soft, color: pathTones[i].c }
                  }
                >
                  <PathIcon className="w-3.5 h-3.5"><path d="M6 12h12M13 7l5 5-5 5" /></PathIcon>
                </span>
              </li>
            ))}
          </ol>

          {/* Finish */}
          <div
            className="relative mt-5 flex items-center gap-4 rounded-[22px] p-5 text-white shadow-[0_26px_44px_-24px_rgba(13,13,13,0.75)]"
            style={{ ...show(1400), background: "linear-gradient(118deg,#1d1d1d 0%,#0d0d0d 100%)", boxShadow: "0 26px 44px -24px rgba(78,213,152,0.45)" }}
          >
            <span className="w-12 h-12 shrink-0 rounded-[14px] bg-white text-[#0d0d0d] flex items-center justify-center">
              <PathIcon><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18M7 14.5h4" /></PathIcon>
            </span>
            <span className="flex-1 text-[18px] md:text-[20px] font-medium tracking-[-0.02em]">A stranger pays</span>
            <span className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[#0d0d0d]" style={{ background: "#4ed598" }}>
              <PathIcon className="w-4 h-4"><path d="M5 12.5 10 17.5 19.5 7" /></PathIcon>
            </span>
          </div>
        </div>

        <style>{`
          @keyframes pp-travel { 0% { top: 44px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: calc(100% - 44px); opacity: 0; } }
          .pp-dot { animation: pp-travel 3.6s cubic-bezier(.45,0,.55,1) 1.8s infinite; top: 44px; opacity: 0; }
        `}</style>
      </div>
    </figure>
  );
};

const BuyerBridge = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.1);
  const fade = (delay: number) => ({ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${delay}ms` });
  const reduced = prefersReducedMotion();

  return (
    <figure className="m-0">
      <div ref={ref} className="rounded-[32px] bg-[#f6f6f6] px-5 py-8 md:px-8 md:py-10 overflow-x-auto lg:overflow-visible">
        <svg className="block w-full min-w-[640px] lg:min-w-0 h-auto" viewBox="0 0 1000 320" role="img" aria-labelledby="bb-t" xmlns="http://www.w3.org/2000/svg">
          <title id="bb-t">
            Product commercialization bridges the gap between a working prototype and a stranger who pays: find the buyer first, then the promise, then the launch.
          </title>
          <defs>
            <filter id="bridge-shadow" x="-20%" y="-40%" width="140%" height="180%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#000000" floodOpacity="0.08" />
            </filter>
            <linearGradient id="platform-dark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2b2b2b" />
              <stop offset="100%" stopColor={INK} />
            </linearGradient>
            <linearGradient id="platform-red" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff1616" />
              <stop offset="100%" stopColor="#ff1616" />
            </linearGradient>
            <linearGradient id="gap-fade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e2e2e2" stopOpacity="0" />
              <stop offset="100%" stopColor="#e2e2e2" />
            </linearGradient>
          </defs>

          {/* The gap */}
          <rect x="200" y="200" width="600" height="96" fill="url(#gap-fade)" style={fade(200)} />
          <text
            x="500"
            y="276"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="24"
            fill="#9a9a9a"
            style={fade(400)}
          >
            where good products quietly die
          </text>

          {/* Platforms */}
          {[
            { x: 40, fill: "url(#platform-dark)", icon: <><path d="M12 3 20 7.5v9L12 21l-8-4.5v-9Z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></> },
            { x: 800, fill: "url(#platform-red)", icon: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h3" /></> },
          ].map((pl) => (
            <g key={pl.x} style={fade(100)}>
              <rect x={pl.x} y="200" width="160" height="96" rx="18" fill={pl.fill} />
              <path d={`M${pl.x + 18} 201.5H${pl.x + 142}`} stroke="#ffffff" strokeOpacity=".18" strokeWidth="1.5" strokeLinecap="round" />
              <g transform={`translate(${pl.x + 62} 230) scale(1.5)`} fill="none" stroke="#ffffff" strokeOpacity=".9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                {pl.icon}
              </g>
            </g>
          ))}

          {/* The bridge */}
          <path d="M200 200Q500 20 800 200" fill="none" stroke={ACCENT} strokeOpacity=".1" strokeWidth="12" strokeLinecap="round" style={fade(1700)} />
          <path
            d="M200 200Q500 20 800 200"
            fill="none"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1600ms ${bridgeEase} 300ms` }}
          />
          {visible && !reduced && (
            <circle r="6" fill={ACCENT}>
              <animateMotion dur="4.5s" begin="2.2s" repeatCount="indefinite" path="M200 200Q500 20 800 200" />
            </circle>
          )}

          {/* Platform labels */}
          {[
            { x: 120, label: "Prototype works", fill: "#ffffff", text: INK, w: 176 },
            { x: 880, label: "A stranger pays", fill: ACCENT, text: "#ffffff", w: 172 },
          ].map((p, i) => (
            <g key={p.label} style={fade(200 + i * 1400)}>
              <rect x={p.x - p.w / 2} y="128" width={p.w} height="44" rx="22" fill={p.fill} filter="url(#bridge-shadow)" />
              <text x={p.x} y="156" textAnchor="middle" fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.3" fill={p.text}>
                {p.label}
              </text>
              <path d={`M${p.x} 172V200`} stroke={i === 1 ? ACCENT : "#bdbdbd"} strokeWidth="1.5" />
            </g>
          ))}

          {/* Stepping stones: buyer, promise, launch */}
          {bridgeStones.map((s, i) => {
            const chipY = s.y - 76;
            return (
              <g key={s.label} style={fade(700 + i * 260)}>
                <path d={`M${s.x} ${chipY + 44}V${s.y - 12}`} stroke="#bdbdbd" strokeWidth="1.5" />
                {i === 0 && !reduced && (
                  <circle cx={s.x} cy={s.y} r="11" fill={ACCENT} fillOpacity=".15">
                    <animate attributeName="r" values="11;22;11" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values=".2;0;.2" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={s.x} cy={s.y} r="11" fill="#ffffff" stroke={i === 0 ? ACCENT : INK} strokeWidth="4" />
                <rect x={s.x - s.w / 2} y={chipY} width={s.w} height="44" rx="22" fill="#ffffff" filter="url(#bridge-shadow)" />
                <g
                  transform={`translate(${s.x - s.w / 2 + 16} ${chipY + 12}) scale(0.833)`}
                  fill="none"
                  stroke={ACCENT}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </g>
                <text x={s.x - s.w / 2 + 46} y={chipY + 28} fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.3" fill={INK}>
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

const ProductCommercialization = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 xl:gap-16 items-start">
            <Reveal className="lg:pt-10">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <span className="block leading-[1.15]">
                  <span className="block text-[40px] sm:text-[56px] lg:text-[60px] xl:text-[66px] lg:whitespace-nowrap">Product commercialization</span>
                  <span className="block" style={{ textWrap: "balance" }}>
                    <span
                      className="italic font-normal text-black text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px]"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      that
                    </span>
                    <span className="ml-[0.24em] text-[#909396] text-[42px] sm:text-[56px] lg:text-[62px] xl:text-[70px]">starts with the buyer.</span>
                  </span>
                </span>
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-8 max-w-[560px]">
                Product commercialization is everything that happens after the prototype works and before a stranger pays. Honestly, it's where good products quietly die. We help you find the buyer first, then the promise, then the launch, so nobody is guessing about price or packaging.
              </p>
              <div className="mt-8">
                <PillLink to="/contact" hoverClass="hover:bg-[#909396]">Talk through your product</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <BuyerPath />
            </Reveal>
          </div>
        </section>

        {/* ── THE THINKING ── */}
        <section aria-labelledby="thesis-heading" className={`${container} pb-24 md:pb-36`}>
          <Reveal>
            <h2 id="thesis-heading" className={`${h2Class} lg:!text-[44px] xl:!text-[50px] xl:[&>span:first-child]:whitespace-nowrap`}>
              <SplitHeading line="A product is done when it ships. It's commercial when" italic="strangers" rest="buy it again." accent={ACCENT} />
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
            <p className="text-[19px] md:text-[24px] leading-[1.5] text-black tracking-[-0.02em]">
              Here the buyer gets a vote on the product, the price and the pitch, in that order.
            </p>
            <p className={bodyClass}>
              We run it in three stages: <Link to="/pre-product-assistance" className={pcLink}>Pre-Product Assistance</Link>,{" "}
              <Link to="/product-launch" className={pcLink}>Product Launch</Link> and{" "}
              <Link to="/product-sales" className={pcLink}>Product Sales</Link>. Our{" "}
              <Link to="/brand-strategy" className={pcLink}>brand strategy</Link> work sits behind all three.
            </p>
          </Reveal>

          <Reveal className="mt-24 md:mt-36 text-center">
            <p className="mx-auto max-w-[980px] font-medium text-[32px] md:text-[52px] lg:text-[60px] leading-[1.15] tracking-[-0.04em]">
              <SplitHeading line="The look comes last. The" italic="buyer" rest="comes first." accent={ACCENT} />
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[460px] !text-[15px]`}>
              A logo is easy to approve. A buyer is harder to describe, which is why most plans skip her.
            </p>
          </Reveal>
        </section>

        {/* ── THREE STAGES ── */}
        <section aria-labelledby="systems-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
              <h2 id="systems-heading" className={h2Class}>Each stage answers one question.</h2>
              <p className={bodyClass}>
                Three questions come up in the same order every time: who it's for, what to tell them, and whether they'll pay. Skip one and you'll pay for the answer later, usually in reprints.
              </p>
            </Reveal>

            <div aria-label="The three stages" className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
              {stages.map((s, i) => (
                <Reveal key={s.label} delay={i * 120}>
                  <div className="group">
                    <div className="rounded-[24px] bg-[#0d0d0d] px-6 flex items-center h-[220px] md:h-[240px] transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                      {s.art}
                    </div>
                    <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#909396]">
                      {s.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-3">{s.body}</p>
                    <Link
                      to={s.page.to}
                      className="group/cta mt-6 inline-flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-black transition-colors duration-300 hover:text-[#909396]"
                    >
                      Explore {s.page.name}
                      <span className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300 group-hover/cta:bg-[#909396] group-hover/cta:border-[#909396] group-hover/cta:text-[#0d0d0d] group-hover/cta:rotate-[-45deg]">
                        <Arrow />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ── THE PRACTICE ── */}
        <section aria-labelledby="process-heading" className={`${container} ${sectionY}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="process-heading" className={h2Class}>
                <SplitHeading line={["Product commercialization,", "from first question"]} italic="to" rest="first sale." accent={ACCENT} />
              </h2>
              <p className={`${bodyClass} mt-8 max-w-[520px]`}>
                A launch plan is the wrong place to begin. Ten conversations and a pen are better, and what people say becomes the plan.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <article className="group rounded-[28px] bg-[#f6f6f6] p-7 md:p-10 lg:p-12 border border-transparent transition-all duration-500 hover:bg-white hover:border-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[44px] md:text-[56px] font-semibold leading-none tracking-[-0.06em] text-[#909396]">{s.num}</span>
                      <span className="px-4 py-2 rounded-full bg-white text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#0d0d0d] transition-colors duration-500 group-hover:bg-[#f6f6f6]">
                        {s.word}
                      </span>
                    </div>
                    <h3 className="mt-8 md:mt-10 text-[28px] md:text-[34px] font-medium leading-[1.15] tracking-[-0.035em] text-black">
                      {s.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-4">{s.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── YERI COFFEE ── */}
        <section aria-labelledby="example-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-10 lg:gap-14 items-stretch">
            <div>
              <h2 id="example-heading" className={h2Class}>
                <SplitHeading line="Same method. A different" italic="first" rest="move." accent={ACCENT} />
              </h2>
              <div className={`${bodyClass} space-y-5 mt-8`}>
                <p>
                  We've built brands in coffee and jewelry. <strong className="text-black font-semibold">Yeri Coffee</strong> is a New York brand selling small-batch Indian specialty coffee, and we handled its identity and packaging, its social and content, and its launch and product strategy. We've also worked with <a href="https://perfectpixelpro.com/work/stone-the-myth" className={pcLink}>Stone the Myth</a>, jewelry rooted in myth.
                </p>
                <p>
                  The three questions never change: who buys it, what do we promise, will they pay? The first one we ask does. <em className="not-italic text-[#6d7174] font-medium">Imagined, not briefs:</em> software starts with who signs, a skincare range starts with one line, and a new category starts with trust.
                </p>
              </div>
            </div>

            <figure className="relative m-0 min-h-[320px] overflow-hidden rounded-[32px] bg-[#f6f6f6] ring-1 ring-[#ececec] lg:-mb-12 lg:min-h-0">
              <img
                src={yeri}
                alt="A four-pack carton of Yeri Coffee cans, Indian black coffee, with illustrated labels"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
          </Reveal>

          <div aria-label="Three imagined commercialization challenges for Yeri Coffee" className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* 1. Software: the person who signs is not the person who uses it */}
            <Reveal className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div aria-hidden="true" className="rounded-[20px] bg-white p-5 h-[230px] flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2.5 rounded-full ring-1 ring-[#e5e5e5] px-4 py-2.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#9a9a9a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
                    <span className="text-[14px] text-black">indian coff</span>
                    <span className="-ml-2 w-px h-4 bg-[#909396] motion-safe:animate-pulse" />
                  </div>
                  <ul className="mt-3 list-none m-0 p-0">
                    {["indian chai", "indian chai latte", "indian masala tea"].map((q) => (
                      <li key={q} className="flex items-center gap-2.5 px-4 py-2 text-[14px] text-[#6d6d6d]">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#bdbdbd]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto self-start rounded-full bg-[#f1f2f3] px-3 py-1 text-[12px] font-medium text-[#6d7174]">No coffee in sight</span>
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">Imagined software</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  Who signs the <span className="text-[#909396] font-normal">invoice?</span>
                </h3>
              </article>
            </Reveal>

            {/* 2. Skincare: five products carrying one line */}
            <Reveal delay={120} className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div className="h-[230px] overflow-hidden rounded-[20px] bg-white">
                  <img
                    src={yeriFive}
                    alt="The Yeri Coffee range together: bags, cans, pour-over sachets and a brass tumbler"
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">Imagined skincare</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  One line, <span className="text-[#909396]">five products.</span>
                </h3>
              </article>
            </Reveal>

            {/* 3. Trust before taste: Yeri's own headline, on Yeri's own bag */}
            <Reveal delay={240} className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div className="h-[230px] overflow-hidden rounded-[20px] bg-[#f5f5f5]">
                  <img
                    src={yeriHide}
                    alt="A Yeri Coffee cherry pick bag, with its illustrated front and tasting notes panel"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="block h-full w-full scale-[1.18] object-contain transition-transform duration-700 group-hover:scale-[1.24]"
                  />
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">Yeri Coffee's own headline</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  The Coffee India Has Been <span className="text-[#909396]">Hiding.</span>
                </h3>
              </article>
            </Reveal>
          </div>

          <p className="mt-10 text-[15px] md:text-[17px] leading-[1.8] text-[#7a7a7a] font-light">
            The headline in the third card is Yeri Coffee's own. The software and skincare cards are imagined, and we're not claiming any results. The facts about the brand come from{" "}
            <a href="https://yericoffee.com/" target="_blank" rel="noopener" className={pcLink}>yericoffee.com</a>{" "}
            and its Instagram.
          </p>
        </section>

        {/* ── BRIDGE ── */}
        <section className={`${container} pb-24 md:pb-36`}>
          <Reveal className="border-t border-[#e5e5e5] pt-16 md:pt-24 text-center">
            <p className="mx-auto max-w-[960px] text-[26px] md:text-[40px] leading-[1.25] tracking-[-0.03em] font-medium">
              A product people understand still needs a face they remember. See how we think about{" "}
              <Link to="/brand-strategy" className={pcLink}>brand strategy</Link> and{" "}
              <Link to="/branding-agency" className={pcLink}>branding</Link>.
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[760px] !text-[18px] md:!text-[20px] md:whitespace-nowrap`}>
              The look comes last in the order, yet it's the part buyers meet first.
            </p>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Before the first sale." faqs={faqs} accent={ACCENT} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the product." italic="We'll" rest="find the buyer." plain compact />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[600px]`}>
                Perfect Pixel Pro is a Creative Agency. Tell us what you're building and who you hope will buy it, and we'll work out what product commercialization should do next.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact" hoverClass="hover:bg-[#909396]">Start a conversation</PillLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductCommercialization;
