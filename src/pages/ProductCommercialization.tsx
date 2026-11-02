import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  Accent, HeroTitleLines, SplitHeading, Arrow, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion, usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Product Commercialization: Buyer-First Guide | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product commercialization from first question to first sale: customer discovery, MVP validation, value proposition and launch, with a Yeri Coffee case.";

const stages = [
  {
    label: "01 / BEFORE THE PRODUCT",
    page: { name: "Pre-Product Assistance", to: "/pre-product-assistance" },
    title: "Meet the buyer first.",
    body: (
      <>
        <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link> is where ten borrowed hours of interviews can save you a pallet of stock.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="One buyer singled out from a grid of dots">
        <g fill="#4a4a4a">
          {Array.from({ length: 36 }, (_, i) => {
            const x = 60 + (i % 9) * 20;
            const y = 34 + Math.floor(i / 9) * 24;
            return x === 160 && y === 58 ? null : <circle key={i} cx={x} cy={y} r="2.2" />;
          })}
        </g>
        <circle cx="160" cy="58" r="20" fill="none" stroke={RED} strokeOpacity=".3" />
        <circle cx="160" cy="58" r="11" fill="none" stroke={RED} strokeOpacity=".6" />
        <circle cx="160" cy="58" r="4.5" fill={RED} />
      </svg>
    ),
  },
  {
    label: "02 / AT THE LAUNCH",
    page: { name: "Product Launch", to: "/product-launch" },
    title: "Settle on the wording.",
    body: (
      <>
        <Link to="/product-launch" className={inlineLink}>Product Launch</Link> is where somebody finally has to pick the name, the pack and the date.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="Three draft lines with the chosen one ticked">
        <rect x="60" y="38" width="120" height="8" rx="4" fill="#3a3a3a" />
        <rect x="60" y="66" width="140" height="10" rx="5" fill="#ffffff" />
        <rect x="60" y="96" width="92" height="8" rx="4" fill="#3a3a3a" />
        <circle cx="222" cy="71" r="12" fill={RED} />
        <path d="M216.5 71.5 220.5 75.5 228 67.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "03 / AFTER THE FIRST ORDER",
    page: { name: "Product Sales", to: "/product-sales" },
    title: "Keep the orders coming.",
    body: (
      <>
        <Link to="/product-sales" className={inlineLink}>Product Sales</Link> takes over when the first stockist calls to ask the price.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="A calendar of days filling up with orders">
        {[0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2].map((v, i) => (
          <rect
            key={i}
            x={60 + (i % 7) * 24}
            y={38 + Math.floor(i / 7) * 24}
            width="16"
            height="16"
            rx="4"
            fill={v === 2 ? RED : v === 1 ? "#ffffff" : "none"}
            stroke={v === 0 ? "#4a4a4a" : "none"}
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
    body: "Imagine handing ten Brooklyn strangers a coffee each and asking what Indian coffee tastes like. Half say chai. One asks if it's even a thing. That's Customer Discovery, and the awkward answers are the useful ones. Then meet Dana, who doesn't exist. She brews on Sundays, owns a gooseneck kettle she's slightly proud of, and will pay for a bag with a story. She's a Buyer Persona. An ideal customer profile, or ICP, zooms out. It's the wider crowd, the independent cafés, grocers and gift shops that would suit a small-batch brand and wouldn't haggle it into a commodity. Target market analysis sounds grander than it is. Honestly it's a pen and a coffee sleeve, and a guess you'll correct later.",
  },
  {
    word: "PENETRATE",
    num: "02",
    title: "Shape the promise.",
    body: "Imagine one coffee, one bag and one page, sold to a few hundred people. That's a Minimum Viable Product (MVP), the version that makes you slightly nervous because it's so small. MVP validation is what follows. A kind remark costs nothing, but a second order costs real effort, so watch what buyers do. Tell a shopper it's small-batch specialty coffee. \"Mm, nice,\" she says, and has forgotten it by lunch. Tell her it's the coffee India has kept to itself and she says, \"Wait, say that again.\" That second version is the Value proposition. Competitive differentiation, then, is mostly crossing things out, every spot where you only feel different. What survives is your unique selling point (USP).",
  },
  {
    word: "PRECISION",
    num: "03",
    title: "Make it hold up.",
    body: "Picture a stockist's new hire on day one asking, \"How do I explain this?\" Product marketing is the page that answers her. The marketing production is the building: bags, cans, a landing page, a photo day. We'll admit the strategy wobbles here, because a line that looked great in the doc goes up in 48-point type and nobody feels a thing. Price comes last, once buyers have told you what they'd pay.",
  },
];

const faqs: Faq[] = [
  {
    q: "What are the stages of product commercialization?",
    a: "Ask three founders and you'll get three numbers, because the books can't agree. We use three stages, in this order: Pre-Product Assistance, Product Launch, then Product Sales. Then a customer asks for something you didn't build, and in product commercialization that means you're back at the start by Friday.",
  },
  {
    q: "What is product marketing?",
    a: "Try this. Stand in a company's kitchen and ask five people what the product does. Expect five different answers. Product marketing is the job of fixing that. One person settles the wording, then chases sales and support until they use it too.",
  },
  {
    q: "How to price a new product?",
    a: "A bag costs you $6 to roast, pack and ship, and similar bags sell for $18. Your $6 is the floor. A café owner says she'd pay more for a bag that sells itself, which is your ceiling, so try $16 on five buyers and watch for the wince. (All invented, café owner included.)",
  },
  {
    q: "What is brand awareness?",
    a: "Ask ten shoppers at a food market to name an Indian coffee brand. Most will look at their shoes. If one says yours, buy her a coffee, because zero is the likelier result and it doesn't mean the coffee is bad, only that nobody has told a soul yet.",
  },
  {
    q: "What is the importance of brand awareness?",
    a: "Imagine asking a shopper at a farmers' market how she picked her last bag. \"Somebody mentioned it, I think?\" Then came the reviews, the website and a discount code she nearly missed. Hear a name three times and half of that detour goes away.",
  },
  {
    q: "How to build brand awareness?",
    a: "Mostly by turning up. Pick a Saturday market and one newsletter. Wear the same line, voice and logo in both until a stranger says, \"Oh, you're that Indian coffee.\" Then keep the Value proposition and a sharp USP steady, so the name doesn't fade.",
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

  return (
    <figure className="m-0">
      <p className="sr-only">
        Product commercialization bridges the gap between a working prototype and a stranger who pays: find the buyer first, then the promise, then the launch.
      </p>
      <div ref={ref} aria-hidden="true" className="relative rounded-[32px] bg-[#f6f6f6] p-5 md:p-8">
        {/* Start */}
        <div className="flex items-center gap-4 rounded-[22px] bg-white p-4 md:p-5" style={show(100)}>
          <span className="w-12 h-12 shrink-0 rounded-[14px] bg-[#0d0d0d] text-white flex items-center justify-center">
            <PathIcon><path d="M12 3 20 7.5v9L12 21l-8-4.5v-9Z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></PathIcon>
          </span>
          <span className="flex-1 text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-black">Prototype works</span>
        </div>

        {/* The gap: spine with three steps */}
        <div className="relative py-5 md:py-6 pl-[60px] md:pl-[68px]">
          <span className="absolute left-[29px] md:left-[33px] top-0 bottom-0 w-[2px] rounded-full bg-[#e3e3e3]" />
          <span
            className="absolute left-[29px] md:left-[33px] top-0 w-[2px] rounded-full bg-[#ff1616]"
            style={{ height: visible ? "100%" : "0%", transition: `height 1600ms ${bridgeEase} 400ms` }}
          />
          {!reduced && visible && (
            <span className="pp-dot absolute left-[25px] md:left-[29px] w-[10px] h-[10px] rounded-full bg-[#ff1616] ring-4 ring-[#ff1616]/20" />
          )}

          <p className="mb-4 text-[18px] md:text-[20px] italic text-[#8a8a8a]" style={{ fontFamily: '"Cormorant Garamond", serif', ...show(500) }}>
            where good products quietly die
          </p>

          <ol className="list-none m-0 p-0 space-y-3">
            {bridgeStones.map((st, i) => (
              <li key={st.label} className="relative" style={show(600 + i * 220)}>
                <span
                  className={`absolute -left-[46px] md:-left-[50px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center ${
                    i === 0 ? "bg-[#ff1616] text-white ring-[5px] ring-[#f6f6f6]" : "bg-white text-[#0d0d0d] ring-[5px] ring-[#f6f6f6]"
                  }`}
                >
                  <PathIcon className="w-4 h-4">{st.icon}</PathIcon>
                </span>
                <div
                  className={`group/step flex items-center justify-between gap-4 rounded-[18px] px-5 py-4 bg-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.3)] ${
                    i === 0 ? "shadow-[0_18px_40px_-28px_rgba(255,22,22,0.45)]" : ""
                  }`}
                >
                  <div>
                    <span className="block text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-black">{st.label}</span>
                    <span className="block text-[13px] text-[#6d6d6d]">{pathNotes[i]}</span>
                  </div>
                  <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${i === 0 ? "bg-[#fff1f1] text-[#ff1616]" : "bg-[#f6f6f6] text-[#9a9a9a] group-hover/step:text-black"}`}>
                    <PathIcon className="w-3.5 h-3.5"><path d="M6 12h12M13 7l5 5-5 5" /></PathIcon>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Finish */}
        <div className="flex items-center gap-4 rounded-[22px] bg-[#ff1616] text-white p-4 md:p-5" style={show(1400)}>
          <span className="w-12 h-12 shrink-0 rounded-[14px] bg-white text-[#ff1616] flex items-center justify-center">
            <PathIcon><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18M7 14.5h4" /></PathIcon>
          </span>
          <span className="flex-1 text-[18px] md:text-[20px] font-medium tracking-[-0.02em]">A stranger pays</span>
          <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <PathIcon className="w-4 h-4"><path d="M5 12.5 10 17.5 19.5 7" /></PathIcon>
          </span>
        </div>

        <style>{`
          @keyframes pp-travel { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
          .pp-dot { animation: pp-travel 3.6s cubic-bezier(.45,0,.55,1) 1.8s infinite; top: 0; opacity: 0; }
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
              <stop offset="0%" stopColor="#ff4545" />
              <stop offset="100%" stopColor="#e00e0e" />
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
          <path d="M200 200Q500 20 800 200" fill="none" stroke={RED} strokeOpacity=".1" strokeWidth="12" strokeLinecap="round" style={fade(1700)} />
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
            <circle r="6" fill={RED}>
              <animateMotion dur="4.5s" begin="2.2s" repeatCount="indefinite" path="M200 200Q500 20 800 200" />
            </circle>
          )}

          {/* Platform labels */}
          {[
            { x: 120, label: "Prototype works", fill: "#ffffff", text: INK, w: 176 },
            { x: 880, label: "A stranger pays", fill: RED, text: "#ffffff", w: 172 },
          ].map((p, i) => (
            <g key={p.label} style={fade(200 + i * 1400)}>
              <rect x={p.x - p.w / 2} y="128" width={p.w} height="44" rx="22" fill={p.fill} filter="url(#bridge-shadow)" />
              <text x={p.x} y="156" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.3" fill={p.text}>
                {p.label}
              </text>
              <path d={`M${p.x} 172V200`} stroke={i === 1 ? RED : "#bdbdbd"} strokeWidth="1.5" />
            </g>
          ))}

          {/* Stepping stones: buyer, promise, launch */}
          {bridgeStones.map((s, i) => {
            const chipY = s.y - 76;
            return (
              <g key={s.label} style={fade(700 + i * 260)}>
                <path d={`M${s.x} ${chipY + 44}V${s.y - 12}`} stroke="#bdbdbd" strokeWidth="1.5" />
                {i === 0 && !reduced && (
                  <circle cx={s.x} cy={s.y} r="11" fill={RED} fillOpacity=".15">
                    <animate attributeName="r" values="11;22;11" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values=".2;0;.2" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={s.x} cy={s.y} r="11" fill="#ffffff" stroke={i === 0 ? RED : INK} strokeWidth="4" />
                <rect x={s.x - s.w / 2} y={chipY} width={s.w} height="44" rx="22" fill="#ffffff" filter="url(#bridge-shadow)" />
                <g
                  transform={`translate(${s.x - s.w / 2 + 16} ${chipY + 12}) scale(0.833)`}
                  fill="none"
                  stroke={RED}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </g>
                <text x={s.x - s.w / 2 + 46} y={chipY + 28} fontFamily="Archivo, sans-serif" fontSize="17" fontWeight="600" letterSpacing="-0.3" fill={INK}>
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className={`${noteClass} mt-5 text-center`}>Find the buyer first, then the promise, then the launch.</p>
    </figure>
  );
};

const ProductCommercialization = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center">
            <Reveal>
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Product commercialization" italic="that" rest="starts with the buyer." compact />
              </h1>
              <p className="mt-8 max-w-[560px] text-[16px] md:text-[18px] leading-[1.75] text-[#6d6d6d] font-light">
                Product commercialization is everything that happens after the prototype works and before a stranger pays. Honestly, it's where good products quietly die. We help you find the buyer first, then the promise, then the launch, so nobody is guessing about price or packaging.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Talk through your product</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <BuyerPath />
            </Reveal>
          </div>
        </section>

        {/* ── THE THINKING ── */}
        <section aria-labelledby="thesis-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-24 items-end">
            <Reveal>
              <h2 id="thesis-heading" className={h2Class}>
                <SplitHeading line="A product is done when it ships. It's commercial when" italic="strangers" rest="buy it again." />
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6">
              <p className="text-[19px] md:text-[22px] leading-[1.55] text-black tracking-[-0.01em]">
                Here the buyer gets a vote on the product, the price and the pitch, in that order.
              </p>
              <p className={bodyClass}>
                We run it in three stages: <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link>,{" "}
                <Link to="/product-launch" className={inlineLink}>Product Launch</Link> and{" "}
                <Link to="/product-sales" className={inlineLink}>Product Sales</Link>. Our{" "}
                <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work sits behind all three.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-24 md:mt-36 text-center">
            <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
            <p className="mx-auto max-w-[980px] font-medium text-[32px] md:text-[52px] lg:text-[60px] leading-[1.08] tracking-[-0.04em]">
              <SplitHeading line="The look comes last. The" italic="buyer" rest="comes first." />
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[460px] !text-[15px]`}>
              A logo is easy to approve. A buyer is harder to describe, which is why most plans skip her.
            </p>
          </Reveal>
        </section>

        {/* ── THREE STAGES ── */}
        <section aria-labelledby="systems-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
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
                    <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#ff1616]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.75] text-[#6d6d6d] font-light">{s.body}</p>
                    <Link
                      to={s.page.to}
                      className="group/cta mt-6 inline-flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-black transition-colors duration-300 hover:text-[#ff1616]"
                    >
                      Explore {s.page.name}
                      <span className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300 group-hover/cta:bg-[#ff1616] group-hover/cta:border-[#ff1616] group-hover/cta:text-white group-hover/cta:rotate-[-45deg]">
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
                <SplitHeading line={["Product commercialization,", "from first question"]} italic="to" rest="first sale." />
              </h2>
              <p className={`${bodyClass} mt-8 max-w-[440px]`}>
                A launch plan is the wrong place to begin. Ten conversations and a pen are better, and what people say becomes the plan.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <article className="group rounded-[28px] bg-[#f6f6f6] p-7 md:p-10 lg:p-12 border border-transparent transition-all duration-500 hover:bg-white hover:border-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[44px] md:text-[56px] font-semibold leading-none tracking-[-0.06em] text-[#ff1616]">{s.num}</span>
                      <span className="px-4 py-2 rounded-full bg-white text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#0d0d0d] transition-colors duration-500 group-hover:bg-[#f6f6f6]">
                        {s.word}
                      </span>
                    </div>
                    <h3 className="mt-8 md:mt-10 text-[28px] md:text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-black">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] md:text-[17px] leading-[1.85] text-[#6d6d6d] font-light">{s.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── YERI COFFEE ── */}
        <section aria-labelledby="example-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
            <h2 id="example-heading" className={h2Class}>
              <SplitHeading line="Yeri Coffee, and a shopper" italic="who" rest="wasn't looking." />
            </h2>
            <div className={`${bodyClass} space-y-5`}>
              <p>
                Take <strong className="text-black font-semibold">Yeri Coffee</strong>, a New York brand that sells small-batch Indian specialty coffee made from beans grown in Karnataka's Western Ghats. We had a hand in three things: the brand identity and packaging, the social and content, and the launch and product strategy.
              </p>
              <p>
                <em className="not-italic text-[#ff1616] font-medium">Imagined, not a briefing:</em> somebody says, "Nobody searches for Indian coffee." Somebody else says, "So we're not selling coffee. We're introducing a place."
              </p>
            </div>
          </Reveal>

          <div aria-label="Three imagined commercialization challenges for Yeri Coffee" className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* 1. Nobody searches for it: the search box suggests everything but coffee */}
            <Reveal className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div aria-hidden="true" className="rounded-[20px] bg-white p-5 h-[230px] flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2.5 rounded-full ring-1 ring-[#e5e5e5] px-4 py-2.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#9a9a9a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
                    <span className="text-[14px] text-black">indian coff</span>
                    <span className="-ml-2 w-px h-4 bg-[#ff1616] motion-safe:animate-pulse" />
                  </div>
                  <ul className="mt-3 list-none m-0 p-0">
                    {["indian chai", "indian chai latte", "indian masala tea"].map((q) => (
                      <li key={q} className="flex items-center gap-2.5 px-4 py-2 text-[14px] text-[#6d6d6d]">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#bdbdbd]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto self-start rounded-full bg-[#fff1f1] px-3 py-1 text-[12px] font-medium text-[#ff1616]">No coffee in sight</span>
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">Nobody searches for it</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  Is that even a <Accent className="font-normal">thing?</Accent>
                </h3>
                <span className="mt-auto pt-6 text-[18px] italic text-[#8a8a8a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>An imagined shopper</span>
              </article>
            </Reveal>

            {/* 2. One story, many products: five shapes on one shelf, one shared band */}
            <Reveal delay={120} className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div aria-hidden="true" className="rounded-[20px] bg-white px-5 pt-6 pb-5 h-[230px] flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex-1 flex items-end justify-between gap-2">
                    {/* whole-bean bag */}
                    <div className="relative w-[18%] h-[120px] rounded-t-[10px] rounded-b-[6px] bg-[#0d0d0d] transition-transform duration-500 group-hover:-translate-y-1">
                      <span className="absolute left-0 right-0 top-[45%] h-3 bg-[#ff1616]" />
                    </div>
                    {/* can */}
                    <div className="relative w-[13%] h-[78px] rounded-[8px] bg-[#e9e9e9] ring-1 ring-[#dcdcdc] transition-transform duration-500 delay-75 group-hover:-translate-y-1">
                      <span className="absolute left-0 right-0 top-[40%] h-3 bg-[#ff1616]" />
                    </div>
                    {/* pour-over pack */}
                    <div className="relative w-[16%] h-[96px] rounded-[6px] bg-white ring-1 ring-[#dcdcdc] transition-transform duration-500 delay-100 group-hover:-translate-y-1">
                      <span className="absolute left-0 right-0 top-[42%] h-3 bg-[#ff1616]" />
                    </div>
                    {/* ground bag */}
                    <div className="relative w-[16%] h-[104px] rounded-t-[10px] rounded-b-[6px] bg-[#3a3a3a] transition-transform duration-500 delay-150 group-hover:-translate-y-1">
                      <span className="absolute left-0 right-0 top-[45%] h-3 bg-[#ff1616]" />
                    </div>
                    {/* brass tumbler */}
                    <div
                      className="relative w-[14%] h-[86px] transition-transform duration-500 delay-200 group-hover:-translate-y-1"
                      style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 14% 100%)", background: "linear-gradient(90deg, #b8893c, #e6c27a 45%, #a7792f)" }}
                    >
                      <span className="absolute left-0 right-0 top-[38%] h-3 bg-[#ff1616]" />
                    </div>
                  </div>
                  <span className="block h-[3px] rounded-full bg-[#0d0d0d]" />
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#9a9a9a]">
                    <span>Beans</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ff1616]" />Same story on each</span>
                    <span>Brass</span>
                  </div>
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">One story, many products</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  One story, <span className="text-[#ff1616]">five products.</span>
                </h3>
                <span className="mt-auto pt-6 text-[18px] italic text-[#8a8a8a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Beans to brass</span>
              </article>
            </Reveal>

            {/* 3. Trust before taste: the headline does the work on the bag before anyone tastes it */}
            <Reveal delay={240} className="h-full">
              <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-5 md:p-6 flex flex-col">
                <div aria-hidden="true" className="rounded-[20px] bg-white h-[230px] flex items-end justify-center overflow-hidden">
                  <div className="relative w-[150px] h-[200px] rounded-t-[18px] bg-[#0d0d0d] px-4 pt-5 text-white shadow-[0_30px_50px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="absolute left-1/2 -top-2 -translate-x-1/2 w-12 h-3 rounded-full bg-[#0d0d0d]" />
                    <span className="block text-[9px] tracking-[0.2em] text-white/50">YERI</span>
                    <span className="mt-3 block text-[15px] font-semibold leading-[1.05] tracking-[-0.03em]">
                      The Coffee India Has Been <span className="text-[#ff1616]">Hiding.</span>
                    </span>
                    <span className="mt-4 block h-px bg-white/15" />
                    <span className="mt-2.5 flex items-center gap-1.5 text-[9px] text-white/60">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#ff1616]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" /><circle cx="12" cy="11" r="2" /></svg>
                      Western Ghats, Karnataka
                    </span>
                  </div>
                </div>
                <span className="mt-7 self-start rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-black">Trust before taste</span>
                <h3 className="mt-4 text-[34px] md:text-[40px] font-medium leading-[1.0] tracking-[-0.04em] text-black">
                  The Coffee India Has Been <span className="text-[#ff1616]">Hiding.</span>
                </h3>
                <span className="mt-auto pt-6 text-[18px] italic text-[#8a8a8a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Yeri's own headline</span>
              </article>
            </Reveal>
          </div>

          <p className="mt-10 text-[15px] md:text-[17px] leading-[1.8] text-[#7a7a7a] font-light max-w-[900px]">
            Those three challenges are our imagination at work, not a briefing. The facts about the brand come from{" "}
            <a href="https://yericoffee.com/" target="_blank" rel="noopener" className={inlineLink}>yericoffee.com</a>{" "}
            and its Instagram, where the range runs from whole beans to cans, pour-over packs and a brass tumbler. We're not claiming any results.
          </p>
        </section>

        {/* ── BRIDGE ── */}
        <section className={`${container} pb-24 md:pb-36`}>
          <Reveal className="border-t border-[#e5e5e5] pt-16 md:pt-24 text-center">
            <p className="mx-auto max-w-[960px] text-[26px] md:text-[40px] leading-[1.25] tracking-[-0.03em] font-medium">
              A product people understand still needs a face they remember. See how we think about{" "}
              <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> and{" "}
              <Link to="/branding-agency" className={inlineLink}>branding</Link>.
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[460px] !text-[15px]`}>
              The look comes last in the order, yet it's the part buyers meet first.
            </p>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Before the first sale." faqs={faqs} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the product." italic="We'll" rest="find the buyer." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[600px]`}>
                Come with whatever you have, even a half-finished plan or a prototype in a shoebox. Tell us who you hope will buy it, and we'll work out what product commercialization should do next.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Start a conversation</PillLink>
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
