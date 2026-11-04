import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  Accent, HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, subServiceBreadcrumbSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Pre-Product Assistance: Test the Idea Before You Build | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Pre-Product Assistance for founders who haven't built yet: test the buyer, the price and the pitch with five cheap experiments before money goes into inventory.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const ease = "cubic-bezier(.2,.7,.2,1)";

// Size of each circle stands in for what a change of mind costs at that stage (illustrative).
const costStages = [
  { stage: "Sketch", cost: "a pencil", size: 18 },
  { stage: "Talks", cost: "a latte", size: 28 },
  { stage: "Mockup", cost: "a weekend", size: 42 },
  { stage: "Prototype", cost: "a month", size: 62 },
  { stage: "Stock", cost: "a pallet", size: 88 },
  { stage: "Campaign", cost: "a bad night", size: 120 },
];

const experiments: { name: string; cs: string; body: ReactNode }[] = [
  {
    name: "Pre Purchase Assistance",
    cs: "What a stranger needs to hear first",
    body: "Before anyone buys, they have questions you'd never think of. Does the backpack fit a laptop? Nobody asks about the fabric. We collect those questions with you and put the answers on the page, before there is a product to ship.",
  },
  {
    name: "Presales Support",
    cs: "Sell it before it's real",
    body: "One page, a picture and a deposit button. Think of a food truck taking pre-orders for opening week, with the line forming before the stove is lit. A few strangers paying says more than a hundred polite likes. We handle the page, the message and the refund promise.",
  },
  {
    name: "Product monetization",
    cs: "Who pays you, and when",
    body: "A gym sells memberships. A bakery sells loaves. A magazine sells both. One product, two ways to sell it: once, or every month. That choice changes the whole business, so we test both with real buyers. Nobody should guess.",
  },
  {
    name: "Pre Sales Consulting",
    cs: "A second pair of ears",
    body: "Founders hear what they hope to hear. A pre sales consultant sits in on the calls, notices where the buyer's voice drops and tells you what you missed. Think of a friend with no stake in the idea, and a notepad.",
  },
  {
    name: "Pre Launch Support",
    cs: "Start with fifty",
    body: (
      <>
        Signals look good? Email fifty people. Skip the big announcement. Bands do the same, playing a small club long before any stadium. We build that list with you, plus the product pre launch strategy around it. Who hears first, what they hear, when. From there it hands off to{" "}
        <Link to="/product-launch" className={inlineLink}>Product Launch</Link>.
      </>
    ),
  },
];

const checks = [
  "I can describe my buyer in one sentence without saying \"everyone.\"",
  "Five or more strangers described this problem before I mentioned my idea.",
  "Somebody has asked me when they can buy it.",
  "I know what people pay today for the nearest alternative.",
  "A stranger has put down money, even $5.",
  "I can name one thing a rival couldn't say about their own product.",
];

const readings = [
  "Too early to build. Go find five strangers this week and ask them about the problem.",
  "Too early to build. You have one real signal, so go get a second one before spending anything.",
  "Promising. Run the deposit test before you order a single unit.",
  "Promising. Run the deposit test and watch what strangers do, not what they say.",
  "Strong signals. Time to plan the launch, and to test the price once more.",
  "Strong signals. Time to plan the launch, and to test the price once more.",
  "Rare. Still, test the price again and keep one eye on whether strangers keep coming back.",
];

const kills = [
  {
    title: "Only friends are excited.",
    body: "Your cousin loves it. Your roommate loves it too. Neither has been asked for money. Applause from people who like you isn't a signal.",
  },
  {
    title: "The price needs a crowd you can't reach.",
    body: "If the idea needs 5,000 orders a year to break even and the whole audience is one online forum, the math isn't being rude. It's being early.",
  },
  {
    title: "Nobody asks when it ships.",
    body: "Interest that never turns into a question about dates usually isn't interest. It's manners.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is Pre-Product Assistance?",
    a: "Pre-Product Assistance is outside help for testing a product idea before anything gets built. A baker with a new cookie doesn't rent a shop first. She walks samples over to the neighbors and watches their faces. That's the whole idea. You find out who wants it, what they'd pay and what to build first, while changing your mind still costs almost nothing.",
  },
  {
    q: "How to validate a product idea?",
    a: "To validate a product idea is to find out whether real people will pay for it, before you build it. Take hand-knit hats. Ask ten people how they keep warm in winter. Then ask one to pre-pay. Words are cheap. A paid order isn't.",
  },
  {
    q: "How to get first 100 customers?",
    a: "Your first 100 customers come from people you can reach one at a time, not from ads. A new coffee shop hands out free cups on the corner and learns every name. Same idea here. Message people who already have the problem, answer every reply and ask each happy one to bring a friend.",
  },
  {
    q: "What is product market fit?",
    a: "Product market fit is what you have when people keep buying and won't stop talking about it. Try the corner diner test. If it closed tomorrow, would the regulars complain? A napkin can't show you that, but early hints do. People ask when it's ready.",
  },
  {
    q: "What does a pre sales consultant do?",
    a: "A pre sales consultant is an outsider you hire to poke holes in your pitch before the product exists. Think driving instructor, the kind with a second brake pedal. They ride along on real conversations, and when you drift, they tap it. They spot what you miss. And they've got nothing riding on your idea.",
  },
  {
    q: "What is Presales Support?",
    a: "Presales Support is the work of taking early orders or deposits before the product is built. Concert tickets work this way, since the venue sells seats before the band tunes up. We set up the page, the message and the refund promise, so a stranger's payment becomes proof.",
  },
  {
    q: "What is product monetization?",
    a: "Product monetization is how a product earns money, and who pays for it. A newspaper can sell copies at the newsstand, or subscriptions, or ads. Each one builds a different business. So we try two or three on real buyers and keep whichever they reach for without a nudge.",
  },
  {
    q: "How long does Pre-Product Assistance take?",
    a: "It runs as long as people take to answer. Often that's a few weeks. It ends when you can name the buyer, the price and the first thing to build. Think of a home inspection, which takes as long as the house needs. Sometimes the answer is don't build, and that saves the money.",
  },
];

const structuredData = [
  articleSchema("Pre-Product Assistance for ideas still on a napkin", PAGE_DESCRIPTION),
  faqSchema(faqs),
  subServiceBreadcrumbSchema("Pre-Product Assistance", "/pre-product-assistance"),
];

// The whole plan so far: a product box with its three open questions.
const questionNodes = [
  { q: "who?", n: "01", cx: 175, cy: 230, r: 74, size: 36, line: "M249 230C320 230 360 222 418 214" },
  { q: "why?", n: "02", cx: 500, cy: 62, r: 54, size: 32, line: "M500 116V136" },
  { q: "how much?", n: "03", cx: 825, cy: 230, r: 88, size: 32, line: "M582 214C640 222 680 230 737 230" },
];

// Hero (right column): the napkin, the cheap tests, and the bill nobody gets back.
// Hero (right column): the idea as a working doc. Three cheap tests running, inventory not ordered.
const NapkinTest = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(8px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });

  return (
    <figure className="m-0">
      <p className="sr-only">An idea tracked like a working document: a few honest conversations under way, two prices being tested, a simple page live, and inventory not ordered yet.</p>
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-6">
        <div className="rounded-[22px] bg-white overflow-hidden">
          {/* Doc header */}
          <div className="px-5 md:px-6 pt-6 pb-5 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2 text-[12px] text-[#9a9a9a]">
              <span>Ideas</span><span>/</span><span className="text-black">Handmade mug</span>
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <span className="text-[20px] md:text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Still on a napkin</span>
              <span className="shrink-0 flex items-center gap-1.5 rounded-full bg-[#f6f6f6] px-2.5 py-1 text-[12px] text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff1616] motion-safe:animate-pulse" />Testing
              </span>
            </div>
          </div>

          {/* Properties */}
          <div className="px-5 md:px-6 py-3 text-[14px]">
            <div className="grid grid-cols-[140px_1fr] items-center gap-4 py-4 md:py-[18px] border-b border-[#f5f5f5]" style={rise(200)}>
              <span className="text-[#8a8a8a]">Conversations</span>
              <span className="flex items-center gap-3">
                <span className="flex-1 h-1.5 rounded-full bg-[#f0f0f0] overflow-hidden">
                  <span className="block h-full rounded-full bg-[#0d0d0d]" style={{ width: visible ? "70%" : "0%", transition: `width 1000ms ${ease} 400ms` }} />
                </span>
                <span className="tabular-nums text-black">7 / 10</span>
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-center gap-4 py-4 md:py-[18px] border-b border-[#f5f5f5]" style={rise(320)}>
              <span className="text-[#8a8a8a]">Price</span>
              <span className="flex items-center gap-2">
                <span className="rounded-[6px] bg-[#f6f6f6] px-2 py-0.5 text-[#9a9a9a] line-through">$32</span>
                <span className="rounded-[6px] bg-[#0d0d0d] px-2 py-0.5 text-white">$24</span>
                <span className="text-[12px] text-[#9a9a9a]">people paid</span>
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-center gap-4 py-4 md:py-[18px] border-b border-[#f5f5f5]" style={rise(440)}>
              <span className="text-[#8a8a8a]">Simple page</span>
              <span className="flex items-center gap-2 text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />Live
                <span className="text-[12px] text-[#9a9a9a]">one page, one button</span>
              </span>
            </div>
            <div className="grid grid-cols-[140px_1fr] items-center gap-4 py-4 md:py-[18px]" style={rise(560)}>
              <span className="text-[#8a8a8a]">Inventory</span>
              <span className="flex items-center gap-2">
                <span className="rounded-[6px] bg-[#fff1f1] px-2 py-0.5 font-medium text-[#ff1616]">Not ordered</span>
              </span>
            </div>
          </div>

          {/* Note at the bottom of the doc */}
          <div className="px-5 md:px-6 py-5 bg-[#fafafa] border-t border-[#f0f0f0] text-[13px] text-[#6d6d6d]" style={rise(700)}>
            All before the money goes out. Inventory is the one bill nobody gets back.
          </div>
        </div>
      </div>
    </figure>
  );
};

const QuestionsPanel = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const reduced = prefersReducedMotion();

  return (
    <figure className="m-0">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-[32px] bg-[#f6f6f6] px-5 pt-8 pb-6 md:px-12 md:pt-12 md:pb-8"
        style={{ backgroundImage: "radial-gradient(circle, #dedede 1px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <div className="overflow-x-auto">
          <svg className="block w-full min-w-[600px] h-auto" viewBox="0 0 1000 330" role="img" aria-labelledby="hs-t hs-d" xmlns="http://www.w3.org/2000/svg">
            <title id="hs-t">A product box with three questions</title>
            <desc id="hs-d">A product box drawn in the middle with three lines leading to the questions who, why and how much.</desc>
            <defs>
              <filter id="node-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000000" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Connectors */}
            {questionNodes.map((n, i) => (
              <path
                key={n.q}
                d={n.line}
                fill="none"
                stroke={RED}
                strokeWidth="1.6"
                strokeDasharray="4 7"
                strokeLinecap="round"
                style={{ opacity: visible ? 1 : 0, transition: `opacity 700ms ease ${500 + i * 180}ms` }}
              >
                {!reduced && <animate attributeName="stroke-dashoffset" from="22" to="0" dur="1.4s" repeatCount="indefinite" />}
              </path>
            ))}

            {/* Product box */}
            <g
              stroke={INK}
              strokeWidth="1.6"
              strokeLinejoin="round"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(10px)",
                transition: `opacity 700ms ease, transform 900ms ${ease}`,
              }}
            >
              <path d="M418 172 500 136 582 172 500 208Z" fill="#ffffff" />
              <path d="M418 172V262L500 300V208Z" fill="#eeeeee" />
              <path d="M582 172V262L500 300V208Z" fill="#e2e2e2" />
            </g>
            <g style={{ opacity: visible ? 1 : 0, transition: "opacity 600ms ease 400ms" }}>
              <circle cx="500" cy="172" r="15" fill={RED} />
              <text x="500" y="179" textAnchor="middle" fill="#ffffff" fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="17" fontWeight="600">?</text>
            </g>

            {/* Question nodes */}
            {questionNodes.map((n, i) => (
              <g
                key={n.q}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.85)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: `opacity 600ms ease ${700 + i * 180}ms, transform 800ms ${ease} ${700 + i * 180}ms`,
                }}
              >
                <circle cx={n.cx} cy={n.cy} r={n.r} fill="#ffffff" stroke="#e6e6e6" filter="url(#node-shadow)" />
                <text x={n.cx} y={n.cy - n.r * 0.32} textAnchor="middle" fill="#9a9a9a" fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="11" fontWeight="500" letterSpacing="2">
                  {n.n}
                </text>
                <text x={n.cx} y={n.cy + n.size * 0.34} textAnchor="middle" fill={RED} fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontWeight="600" fontSize={n.size}>
                  {n.q}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-4 md:mt-6 pt-5 border-t border-[#e2e2e2] flex flex-col sm:flex-row sm:justify-between gap-2">
          <span className={`${noteClass} !text-black`}>Napkin, not a spec</span>
          <span className={noteClass}>Costs: one latte</span>
        </div>
      </div>
    </figure>
  );
};

// Circles grow with the cost of changing your mind; the first three sit in the "we work here" zone.
// A staircase: every stage is a step up in what it costs to change your mind.
const CostScale = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const heights = [14, 24, 36, 54, 76, 100]; // percent of the stair height, illustrative

  return (
    <figure className="m-0" aria-labelledby="cs-t">
      <p id="cs-t" className="sr-only">
        The cost of changing your mind rises at every stage: sketch, interviews, mockup, prototype, inventory and campaign. The first three stages are marked as where we work.
      </p>
      <div ref={ref} aria-hidden="true" className="rounded-[28px] bg-[#f6f6f6] p-5 md:p-10 overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Bracket over the first three steps */}
          <div className="grid grid-cols-6 gap-2 md:gap-3">
            <div className="col-span-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#ff1616]" />
              <span className="rounded-full bg-[#ff1616] px-3 py-1 text-[12px] font-semibold text-white whitespace-nowrap">We work here</span>
              <span className="h-px flex-1 bg-[#ff1616]" />
            </div>
          </div>

          {/* The stairs */}
          <div className="mt-4 h-[260px] grid grid-cols-6 gap-2 md:gap-3 items-end">
            {costStages.map((c, i) => {
              const ours = i < 3;
              return (
                <div key={c.stage} className="h-full flex flex-col justify-end">
                  <span
                    className={`mb-2 text-[15px] md:text-[17px] font-medium leading-tight tracking-[-0.01em] ${ours ? "text-[#ff1616]" : "text-black"}`}
                    style={{ opacity: visible ? 1 : 0, transition: `opacity 500ms ease ${500 + i * 140}ms` }}
                  >
                    {c.cost}
                  </span>
                  <span
                    className={`block w-full rounded-t-[14px] ${ours ? "bg-[#ff1616]" : "bg-[#0d0d0d]"}`}
                    style={{ height: visible ? `${heights[i]}%` : "0%", transition: `height 900ms ${ease} ${i * 140}ms`, opacity: ours ? 0.55 + i * 0.2 : 1 }}
                  />
                </div>
              );
            })}
          </div>
          <div className="h-[2px] bg-[#0d0d0d]" />
          <div className="mt-3 grid grid-cols-6 gap-2 md:gap-3">
            {costStages.map((c) => (
              <span key={c.stage} className="text-[13px] md:text-[14px] text-[#6d6d6d]">{c.stage}</span>
            ))}
          </div>
        </div>
      </div>
      <p className={`${bodyClass} mt-5`}>Illustrative shape, not real cost data</p>
    </figure>
  );
};

const IdeaCheck = () => {
  const [ticked, setTicked] = useState<boolean[]>(() => checks.map(() => false));
  const [touched, setTouched] = useState(false);
  const count = ticked.filter(Boolean).length;
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-4 md:gap-5 items-start">
      <Reveal>
        <fieldset className="m-0 p-0 border-0">
          <legend className="sr-only">Idea check</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checks.map((c, i) => {
              const on = ticked[i];
              return (
                <label
                  key={c}
                  className={`group relative flex items-start gap-4 rounded-[22px] p-5 md:p-6 cursor-pointer border transition-all duration-300 ${
                    on ? "bg-[#0d0d0d] border-[#0d0d0d] text-white" : "bg-white border-[#e5e5e5] text-black hover:border-[#bdbdbd]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={on}
                    onChange={() => {
                      setTouched(true);
                      setTicked((t) => t.map((v, j) => (j === i ? !v : v)));
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 w-6 h-6 shrink-0 rounded-full flex items-center justify-center border-2 transition-colors duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-[#ff1616] peer-focus-visible:ring-offset-2 ${
                      on ? "bg-[#ff1616] border-[#ff1616]" : "border-[#cfcfcf]"
                    }`}
                  >
                    {on && (
                      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 6.2 5 8.5 9.5 3.5" />
                      </svg>
                    )}
                  </span>
                  <span className={`text-[15px] md:text-[16px] leading-[1.55] ${on ? "text-white" : "text-[#3d3d3d]"}`}>{c}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </Reveal>

      <Reveal delay={120} className="lg:sticky lg:top-24">
        <aside aria-live="polite" className="rounded-[28px] bg-[#0d0d0d] text-white p-7 md:p-10">
          <p className={`${noteClass} !text-[#8a8a8a]`}>Your reading</p>
          <div className="mt-6">
            <div className="relative w-[120px] h-[120px]">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-hidden="true">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
                <circle
                  cx="60" cy="60" r="54" fill="none" stroke="#ff1616" strokeWidth="6" strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - count / checks.length)}
                  className="transition-[stroke-dashoffset] duration-700 ease-out"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[34px] font-semibold tracking-[-0.04em] tabular-nums">
                {count}<span className="text-[18px] text-[#8a8a8a] font-medium">&nbsp;/ 6</span>
              </span>
            </div>
          </div>
          <p className="mt-7 text-[16px] md:text-[18px] leading-[1.6] text-[#d9d9d9]">
            {touched ? readings[count] : "Tick what's true and this will tell you where you stand."}
          </p>
        </aside>
      </Reveal>
    </div>
  );
};

const PreProductAssistance = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-start">
            <Reveal className="lg:pt-2">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black lg:[&>span>span:first-child]:whitespace-nowrap">
                <HeroTitleLines line="Pre-Product Assistance" italic="for" rest="ideas still on a napkin." compact />
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[580px]`}>
                Every product starts as a sketch on something that wasn't meant for sketching. A napkin, the back of an envelope, a note on a phone. At that stage the idea can't be wrong yet, because nobody has tested it.
              </p>
              <p className={`${bodyClass} mt-4 max-w-[580px]`}>
                Pre-Product Assistance is the work of testing it. A few honest conversations, a price, a simple page, all before the money goes out. It's time sensitive, because inventory is the one bill nobody gets back.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <NapkinTest />
            </Reveal>
          </div>

        </section>

        {/* ── THE COST CURVE ── */}
        <section aria-labelledby="cost-heading" className={`${container} pb-24 md:pb-36`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="cost-heading" className={h2Class}>
              <SplitHeading line="Changing your mind gets" italic="pricier" rest="every week." />
            </h2>
            <p className={bodyClass}>
              A sketch costs a pencil. A prototype eats a month. A pallet of inventory costs a very bad night. We work on the left side of this picture, where the big decisions are still cheap to reverse.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-16 md:mt-20">
            <CostScale />
          </Reveal>
          <Reveal className="mt-12 md:mt-16 max-w-[900px]">
            <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
              How the product should look and sound belongs here too, which is why our{" "}
              <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work starts before the product does. A good{" "}
              <Link to="/branding-agency" className={inlineLink}>branding agency</Link> asks the same questions, only earlier.
            </p>
          </Reveal>
        </section>

        {/* ── THE EXPERIMENTS ── */}
        <section aria-labelledby="exp-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
              <h2 id="exp-heading" className={h2Class}>
                <SplitHeading line="Pre-Product Assistance, in five" italic="cheap" rest="experiments." />
              </h2>
              <p className={bodyClass}>
                Each one is cheap. You could run any of them next weekend. The examples are everyday ones, picked to show the idea, and none is a real client.
              </p>
            </Reveal>

            <Reveal className="mt-16 md:mt-24 text-center">
              <figure className="m-0">
                <span aria-hidden="true" className="block mx-auto w-px h-14 bg-[#ff1616] mb-8" />
                <blockquote className="m-0">
                  <p className="mx-auto max-w-[900px] text-[40px] md:text-[64px] leading-[1.02] text-[#ff1616]">
                    "You have to go out and get them."
                  </p>
                </blockquote>
                <figcaption className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mx-auto mt-6 max-w-[620px]">
                  Paul Graham, on finding a startup's first users, in his essay "Do Things that Don't Scale." That's the spirit of every experiment on this board.
                </figcaption>
              </figure>
            </Reveal>

            <ol className="mt-16 md:mt-24 list-none m-0 p-0">
              {experiments.map((e, i) => (
                // Each card sticks a little lower than the one before, so they stack as you scroll.
                <li key={e.name} className="sticky mb-6 md:mb-10 last:mb-0" style={{ top: `calc(96px + ${i * 22}px)` }}>
                  <ExperimentCard index={i} total={experiments.length} {...e} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── THE CHECK ── */}
        <section aria-labelledby="check-heading" className={`${container} pt-16 md:pt-24 pb-12 md:pb-16`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="check-heading" className={h2Class}>
              <SplitHeading line="Six questions before" italic="you" rest="build anything." />
            </h2>
            <p className={bodyClass}>
              Product market fit won't show up on a weekend, but the first honest signals will. Tick what's true today.
            </p>
          </Reveal>
          <IdeaCheck />
        </section>

        {/* ── THE KILL LIST ── */}
        <section aria-labelledby="no-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-12 md:pt-16">
            <Reveal className="text-center max-w-[820px] mx-auto">
              <h2 id="no-heading" className={h2Class}>
                <SplitHeading line="Sometimes the useful" italic="answer" rest="is no." />
              </h2>
              <p className={`${bodyClass} mt-6`}>
                We'd rather tell you to stop in week three than watch you reorder in month six. Here's what usually earns the no.
              </p>
            </Reveal>

            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {kills.map((k, i) => (
                <Reveal key={k.title} delay={i * 120}>
                  <article className="group">
                    <span aria-hidden="true" className="w-12 h-12 rounded-full border border-[#ffd0d0] bg-[#fff5f5] flex items-center justify-center transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:border-[#ff1616]">
                      <svg viewBox="0 0 14 14" className="w-3.5 h-3.5 text-[#ff1616] transition-colors duration-500 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M3 3l8 8M11 3l-8 8" />
                      </svg>
                    </span>
                    <h3 className="mt-6 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{k.title}</h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-4">{k.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-24 md:mt-32 text-center">
              <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
              <p className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.12] tracking-[-0.035em]">
                <SplitHeading line="A no here costs a few weeks. A no after the" italic="factory" rest="order costs the factory order." />
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Questions that come up before there's a product." faqs={faqs} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the napkin sketch." italic="We'll" rest="bring the questions." plain compact />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Tell us what you're thinking of building and who you hope will buy it. Perfect Pixel Pro will test it with you through Pre-Product Assistance while changing course is still cheap, then pass you to{" "}
                <Link to="/product-launch" className={inlineLink}>Product Launch</Link> and{" "}
                <Link to="/product-sales" className={inlineLink}>Product Sales</Link> once the signals are good. It all sits inside our wider{" "}
                <Link to="/product-commercialization" className={inlineLink}>product commercialization</Link> work.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SOURCES ── */}
        <section aria-label="Sources" className={`${container} pt-20 md:pt-28 pb-8`}>
          <div className="pt-8 border-t border-[#e5e5e5] grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-24">
            <p className={`${noteClass} !text-black`}>Sources</p>
            <p className="text-[14px] md:text-[15px] text-[#6d6d6d]">
              Paul Graham, "Do Things that Don't Scale," July 2013.{" "}
              <a href="https://paulgraham.com/ds.html" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 transition-colors duration-200 hover:text-[#ff1616] hover:decoration-[#ff1616]">
                paulgraham.com/ds.html
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const ExperimentCard = ({ index, total, name, cs, body }: { index: number; total: number; name: string; cs: string; body: ReactNode }) => (
  <article className="group rounded-[32px] bg-white border border-[#ececec] p-7 md:p-12 shadow-[0_-20px_50px_-30px_rgba(0,0,0,0.18)] min-h-[340px] md:min-h-[380px] flex flex-col">
    <div className="flex items-start justify-between gap-6">
      <span className="px-3.5 py-1.5 rounded-full bg-[#fff1f1] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#ff1616]">
        Experiment 0{index + 1}
      </span>
      <span
        aria-hidden="true"
        className="text-[64px] md:text-[96px] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent transition-colors duration-500 group-hover:text-[#ff1616]"
        style={{ WebkitTextStroke: "1.5px #ff1616" }}
      >
        0{index + 1}
      </span>
    </div>

    <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-16 items-start">
      <div>
        <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{name}</h3>
        <p className="mt-2 text-[22px] md:text-[26px] leading-[1.2] text-[#ff1616]">{cs}</p>
      </div>
      <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif]">{body}</p>
    </div>

    <div className="mt-auto pt-8 md:pt-10">
      <div className="pt-5 border-t border-[#f0f0f0] flex items-center justify-between gap-4">
        <span aria-hidden="true" className="flex gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className={`h-1 rounded-full ${i === index ? "w-8 bg-[#ff1616]" : "w-4 bg-[#e5e5e5]"}`} />
          ))}
        </span>
        <span className={`${noteClass} tabular-nums`}>0{index + 1} / 0{total}</span>
      </div>
    </div>
  </article>
);

export default PreProductAssistance;
