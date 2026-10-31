import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  Accent, HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, CountUp, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, subServiceBreadcrumbSchema, type Faq,
} from "../components/service/ServiceKit";                  

const PAGE_TITLE = "Product Sales: Find the Leak, Fix the Funnel | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product Sales work for products that already exist: find where buyers leave, fix the biggest leak, then keep the customers who stay. Built around five real steps.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const ease = "cubic-bezier(.2,.7,.2,1)";

const tuesday = [
  { label: "Saw the page", value: "1,000" },
  { label: "Clicked a candle", value: "120" },
  { label: "Reached the cart", value: "30" },
  { label: "Paid", value: "9", hot: true },
  { label: "Came back in 30 days", value: "4" },
];

// Widths are illustrative, not to scale.
const funnelRows = [
  { label: "Saw", value: "1,000", width: 100 },
  { label: "Clicked", value: "120", width: 76, loss: "−880 before the click" },
  { label: "Cart", value: "30", width: 54, loss: "−90 at the cart" },
  { label: "Paid", value: "9", width: 36, loss: "−21 at checkout", hot: true },
  { label: "Came back", value: "4", width: 24 },
];

const tags = [
  {
    name: "Product storytelling",
    cs: "Why it exists, in one breath",
    body: "Jess's old listing said \"luxury soy candle.\" The new one says she started pouring after a gas-station candle gave her a headache. Same candle. In her imagined month, three more people a day read to the end.",
  },
  {
    name: "Trust signals",
    cs: "Proof near the button",
    body: "A delivery date, a 30-day return promise and one photo of the real spare bedroom, all within a thumb of the pay button. Nobody has to be convinced. They just need to stop worrying.",
  },
  {
    name: "Organic growth",
    cs: "What happens between campaigns",
    body: "A review, a reply, a neighbor's repost. Jess can't buy any of it, but she can answer every review by hand, usually from the pouring table with a coffee going cold.",
  },
];

const acquisition = [
  {
    title: "Campaigns",
    body: "Jess runs two small customer acquisition campaigns a month. Last month's was one sentence, one link and a photo of a cracked jar. It flopped. The month before, a line about free shipping on orders over $40 won, so it got the money.",
  },
  {
    title: "Strategy",
    body: "Her customer acquisition strategy lives on a sticky note by the packing table: gift shops first, wedding planners second, everyone else later. The note is a little torn.",
  },
  {
    title: "Leads",
    body: "For lead generation for businesses, she emails ten gift-shop owners a week with a sample candle instead of a catalog. Two reply.",
  },
];

const faqs: Faq[] = [
  {
    q: "What are Product Sales?",
    a: "Product Sales is the stretch between somebody saying \"nice\" and somebody paying, then paying again. Think garage sale. Sign, price stickers, haggling, and the neighbor back Saturday for the lamp. A launch gets the crowd. Selling is what you do with it.",
  },
  {
    q: "What is a sales funnel?",
    a: "A sales funnel is a buyer's path from noticing to paying, with people dropping off at every step. Fifty folks pass a lemonade stand. Ten read the sign. Four step up. Three buy. See the shape?",
  },
  {
    q: "How to create a sales funnel?",
    a: "Write each step a buyer takes on paper, first look to paying. Count heads at every step. Find the biggest drop and fix that one first. A food truck might count: walked past, read the menu, joined the line, ordered. For a famous one, Dropbox started with a three-minute demo video and a waiting list (Wikipedia's Dropbox timeline covers it).",
  },
  {
    q: "What is the difference between a launch and ongoing sales?",
    a: "A launch is the grand-opening banner on a new bakery, flapping for a few weeks. Selling is everything after the banner comes down: the Tuesday regular who wants \"the usual,\" the reorder, the referral. Selling doesn't have an end date.",
  },
  {
    q: "What are trust signals?",
    a: "Trust signals are what make a stranger stop hovering and pay: a return policy in plain English, reviews, a real delivery date, someone who answers email. You'd pick a shop with a street address over a card table, too.",
  },
  {
    q: "What is a customer feedback loop?",
    a: "A customer feedback loop is a habit. Ask buyers what almost stopped them, fix the answer you hear most, sell again. One coffee shop hears \"the lids leak\" from three customers in a row and fixes the lids. That's the loop. A card in the box gets you started.",
  },
  {
    q: "What does organic growth mean?",
    a: "Organic growth is customers who show up without paid ads. A friend raves about your tacos. Someone finds you on a map. A regular brings a coworker. Slow to start, cheaper to keep.",
  },
  {
    q: "How long do Product Sales take to improve?",
    a: "It depends on the fix. A checkout button swap can show up in a week. Reviews and trust take months, like a new restaurant earning regulars. We say which kind you're buying up front, so nobody expects sales to jump overnight.",
  },
];

const sources = [
  { label: "Baymard Institute, Cart Abandonment Rate Statistics", href: "https://baymard.com/lists/cart-abandonment-rate" },
  { label: "Journal of Accountancy, Bill Gates quote (from Business @ The Speed of Thought)", href: "https://www.journalofaccountancy.com/issues/2006/jan/billgatesquote-jan-2006" },
  { label: "Wikipedia, Timeline of Dropbox", href: "https://en.wikipedia.org/wiki/Timeline_of_Dropbox" },
];

const structuredData = [
  articleSchema("Product Sales, counted one customer at a time", PAGE_DESCRIPTION),
  faqSchema(faqs),
  subServiceBreadcrumbSchema("Product Sales", "/product-sales"),
];

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

// Drop-off curve geometry: one point per stage at the column centres, height on a log scale.
const CHART_H = 90;
const chartPoints = tuesday.map((t, i) => {
  const v = Number(t.value.replace(/[^0-9]/g, ""));
  return { x: 10 + i * 20, y: 10 + (1 - Math.log10(v) / 3) * (CHART_H - 22) };
});
const curvePath = (() => {
  const pts = [{ x: 0, y: chartPoints[0].y }, ...chartPoints, { x: 100, y: chartPoints[chartPoints.length - 1].y }];
  return pts.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const mid = (p.x - prev.x) / 2;
    return `${d} C${prev.x + mid} ${prev.y} ${p.x - mid} ${p.y} ${p.x} ${p.y}`;
  }, "");
})();

// Jess's Tuesday as an analytics card: numbers count up and a drop-off curve draws in underneath.
const TuesdayPanel = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  const paidIndex = tuesday.findIndex((t) => t.hot);

  return (
    <figure aria-label="Jess's Tuesday receipt, imagined" className="m-0">
      <div ref={ref} className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-8 lg:px-10 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-5 border-b border-[#e2e2e2]">
          <div>
            <p className={`${noteClass} !text-black`}>The Tuesday receipt</p>
            <p className={`${noteClass} mt-1.5`}>Spare room candles / Austin &nbsp;·&nbsp; Jess and every number here are imagined</p>
          </div>
          <div className="sm:text-right">
            <p className={noteClass}>Total (9 x $34)</p>
            <p className="mt-1 text-[30px] md:text-[40px] font-semibold leading-none tracking-[-0.05em] text-black">
              $<CountUp value="306" />
            </p>
          </div>
        </div>

        {/* Desktop: columns over a drop-off curve */}
        <div className="hidden md:block relative mt-5">
          <div aria-hidden="true" className="absolute inset-y-0 rounded-[24px] bg-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.25)]" style={{ left: `${paidIndex * 20}%`, width: "20%" }} />

          <div className="relative grid grid-cols-5 pt-5">
            {tuesday.map((t) => (
              <p key={t.label} className={`text-center text-[40px] lg:text-[52px] font-semibold leading-none tracking-[-0.06em] ${t.hot ? "text-[#ff1616]" : "text-black"}`}>
                <CountUp value={t.value} />
              </p>
            ))}
          </div>

          <div aria-hidden="true" className="relative mt-3" style={{ height: CHART_H }}>
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 100 ${CHART_H}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="tue-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={INK} stopOpacity=".09" />
                  <stop offset="100%" stopColor={INK} stopOpacity="0" />
                </linearGradient>
              </defs>
              {chartPoints.map((p) => (
                <line key={p.x} x1={p.x} x2={p.x} y1={p.y} y2={CHART_H} stroke="#d9d9d9" strokeWidth="1" strokeDasharray="2 4" vectorEffect="non-scaling-stroke" />
              ))}
              <path
                d={`${curvePath} L100 ${CHART_H} L0 ${CHART_H}Z`}
                fill="url(#tue-fill)"
                style={{ opacity: visible ? 1 : 0, transition: "opacity 1200ms ease 600ms" }}
              />
              <path
                d={curvePath}
                fill="none"
                stroke={INK}
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray="1"
                style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1800ms ${ease} 200ms` }}
              />
            </svg>
            {chartPoints.map((p, i) => {
              const hot = tuesday[i].hot;
              return (
                <span
                  key={p.x}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                    hot ? "w-3.5 h-3.5 bg-[#ff1616] border-[#ff1616] shadow-[0_0_0_6px_rgba(255,22,22,0.14)]" : "w-2.5 h-2.5 bg-white border-[#0d0d0d]"
                  }`}
                  style={{
                    left: `${p.x}%`,
                    top: p.y,
                    opacity: visible ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.4})`,
                    transition: `opacity 500ms ease ${400 + i * 220}ms, transform 600ms ${ease} ${400 + i * 220}ms`,
                  }}
                />
              );
            })}
          </div>

          <div className="relative grid grid-cols-5 pt-3 pb-5">
            {tuesday.map((t) => (
              <p key={t.label} className={`px-2 text-center text-[11px] lg:text-[12px] uppercase tracking-[0.12em] ${t.hot ? "text-[#ff1616] font-medium" : "text-[#6d6d6d]"}`}>
                {t.label}
              </p>
            ))}
          </div>
        </div>

        {/* Mobile: two-column stat list */}
        <div className="md:hidden grid grid-cols-2 gap-x-6 gap-y-6 pt-6">
          {tuesday.map((t, i) => (
            <div key={t.label} className={i === 0 ? "col-span-2" : ""}>
              <p className={`text-[40px] font-semibold leading-none tracking-[-0.06em] ${t.hot ? "text-[#ff1616]" : "text-black"}`}>
                <CountUp value={t.value} />
              </p>
              <p className={`mt-3 pt-3 border-t border-[#e2e2e2] text-[11px] uppercase tracking-[0.12em] ${t.hot ? "text-[#ff1616]" : "text-[#6d6d6d]"}`}>{t.label}</p>
            </div>
          ))}
        </div>

      </div>
    </figure>
  );
};

// Top-down funnel: bars narrow as people leave, with the losses called out on the right.
const FunnelStack = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <figure className="m-0" aria-labelledby="fn-t">
      <p id="fn-t" className="sr-only">
        A funnel of one thousand visitors narrowing to nine buyers. Five stages: 1,000 saw the page, 120 clicked, 30 reached the cart, 9 paid and 4 came back. The biggest loss is between the cart and the payment stage, where seventy percent leave.
      </p>
      <div ref={ref} aria-hidden="true" className="rounded-[28px] bg-[#f6f6f6] px-5 py-8 md:p-12 space-y-2.5 md:space-y-3">
        {funnelRows.map((r, i) => (
          <div key={r.label} className="grid grid-cols-[72px_1fr] md:grid-cols-[120px_1fr_240px] items-center gap-4 md:gap-8">
            <span className={`text-[10px] md:text-[12px] font-medium uppercase tracking-[0.16em] ${r.hot ? "text-[#ff1616]" : "text-[#6d6d6d]"}`}>{r.label}</span>
            <div className="flex justify-center">
              <div
                className={`h-[52px] md:h-[64px] rounded-full flex items-center justify-center ${r.hot ? "bg-[#ff1616]" : "bg-[#0d0d0d]"}`}
                style={{
                  width: visible ? `${r.width}%` : "8%",
                  opacity: visible ? 1 : 0,
                  transition: `width 1100ms ${ease} ${i * 150}ms, opacity 500ms ease ${i * 150}ms`,
                }}
              >
                <span className="text-[18px] md:text-[24px] font-semibold tracking-[-0.03em] text-white">{r.value}</span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 -mt-1 md:mt-0 text-center md:text-left">
              {r.loss && (
                <span
                  className={`text-[13px] md:text-[15px] ${r.hot ? "text-[#ff1616] font-medium" : "text-[#6d6d6d]"}`}
                  style={{ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${600 + i * 150}ms` }}
                >
                  {r.loss}
                </span>
              )}
              {r.hot && (
                <span
                  className="block mt-1 text-[24px] md:text-[28px] italic leading-none text-[#ff1616]"
                  style={{ ...serif, opacity: visible ? 1 : 0, transition: `opacity 600ms ease 1300ms` }}
                >
                  70% leave here
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

// Feedback loop as a left-to-right flow with a return path back to the start.
const LoopFlow = () => {
  const steps = ["SELL", "ASK", "FIX", "AGAIN"];
  return (
    <svg className="block w-full min-w-[640px] h-auto" viewBox="0 0 1000 300" role="img" aria-labelledby="lp-t lp-d" xmlns="http://www.w3.org/2000/svg">
      <title id="lp-t">The customer feedback loop</title>
      <desc id="lp-d">Four steps in a row: sell, ask, fix, sell again, with an arrow leading from each step to the next and a return path from the last step back to the first.</desc>

      {steps.map((s, i) => {
        const x = 30 + i * 245;
        const hot = s === "ASK";
        return (
          <g key={s}>
            <rect x={x} y="40" width="200" height="84" rx="42" fill={hot ? RED : "#ffffff"} stroke={hot ? RED : "#e2e2e2"} />
            <text x={x + 100} y="89" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="18" fontWeight="600" letterSpacing="3" fill={hot ? "#ffffff" : INK}>
              {s}
            </text>
            {i < steps.length - 1 && (
              <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={`M${x + 210} 82H${x + 236}`} />
                <path d={`M${x + 229} 75l7 7-7 7`} />
              </g>
            )}
          </g>
        );
      })}

      <path d="M865 128C865 230 130 230 130 128" fill="none" stroke={RED} strokeWidth="1.8" strokeDasharray="4 8" strokeLinecap="round">
        {!prefersReducedMotion() && <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.6s" repeatCount="indefinite" />}
      </path>
      <path d="M121 140l9-12 9 12" fill="none" stroke={RED} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      <g fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontWeight="600" fontSize="34" textAnchor="middle" fill={RED}>
        <text x="500" y="268">what almost stopped you?</text>
      </g>
    </svg>
  );
};

const LeakCalculator = () => {
  const [visitors, setVisitors] = useState(4000);
  const [cartRate, setCartRate] = useState(3);
  const [payRate, setPayRate] = useState(30);
  const [price, setPrice] = useState(34);

  const carts = visitors * (cartRate / 100);
  const orders = carts * (payRate / 100);
  const revenue = orders * price;
  const gain = carts * (Math.min(1, payRate / 100 + 0.1) - payRate / 100) * price;

  const sliders = [
    { id: "rv", label: "Visitors a month", value: visitors, set: setVisitors, min: 500, max: 20000, step: 100, show: fmt(visitors) },
    { id: "rc", label: "Visitors who add to cart", value: cartRate, set: setCartRate, min: 1, max: 10, step: 1, show: `${cartRate}%` },
    { id: "rp", label: "Carts that reach payment", value: payRate, set: setPayRate, min: 10, max: 90, step: 5, show: `${payRate}%` },
    { id: "rpr", label: "Price of one order", value: price, set: setPrice, min: 10, max: 200, step: 2, show: `$${price}` },
  ];

  return (
    <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-5 items-stretch">
      <Reveal>
        <div className="h-full rounded-[28px] bg-white p-7 md:p-10 lg:p-12 flex flex-col justify-center gap-7 md:gap-8">
          {sliders.map((s) => {
            const pct = ((s.value - s.min) / (s.max - s.min)) * 100;
            return (
              <div key={s.id}>
                <label htmlFor={s.id} className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] md:text-[17px] text-black">{s.label}</span>
                  <b className="text-[18px] md:text-[22px] font-semibold tracking-[-0.02em] text-[#ff1616] tabular-nums">{s.show}</b>
                </label>
                <input
                  id={s.id}
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="mt-4 w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#ff1616]"
                  style={{ background: `linear-gradient(to right, ${RED} ${pct}%, #e5e5e5 ${pct}%)` }}
                />
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div aria-live="polite" className="h-full rounded-[28px] bg-[#0d0d0d] text-white p-7 md:p-10 flex flex-col">
          <p className={`${noteClass} !text-[#8a8a8a]`}>The month</p>
          <div className="mt-6 space-y-3 text-[15px] md:text-[16px]">
            <div className="flex justify-between gap-4 text-[#bdbdbd]"><span>Carts</span><b className="font-medium text-white tabular-nums">{fmt(carts)}</b></div>
            <div className="flex justify-between gap-4 text-[#bdbdbd]"><span>Orders</span><b className="font-medium text-white tabular-nums">{fmt(orders)}</b></div>
            <div className="flex justify-between gap-4 pt-3 border-t border-white/15 text-white"><span>Revenue</span><b className="font-semibold tabular-nums">${fmt(revenue)}</b></div>
          </div>
          <div className="mt-auto pt-10">
            <p className={`${noteClass} !text-[#8a8a8a]`}>10 points better at checkout adds</p>
            <p className="mt-3 text-[52px] md:text-[72px] font-semibold leading-none tracking-[-0.05em] text-[#ff1616] tabular-nums">${fmt(gain)}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

const ProductSales = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  const tagStyles = [
    { card: "bg-[#0d0d0d] text-white", note: "!text-[#8a8a8a]", sub: "text-[#ff1616]", body: "text-[#bdbdbd]" },
    { card: "bg-[#ff1616] text-white", note: "!text-white/75", sub: "text-white", body: "text-white/85" },
    { card: "bg-[#f6f6f6] text-black", note: "!text-[#9a9a9a]", sub: "text-[#ff1616]", body: "text-[#6d6d6d]" },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-16 md:pt-24 pb-24 md:pb-36`}>
          <div className="text-center">
            <Reveal>
              <h1 id="page-title" className="font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Product Sales, counted" italic="one" rest="customer at a time." />
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[760px]`}>
                Jess pours soy candles in a spare bedroom in Austin and sells them online for $34 each. On Tuesday, a thousand strangers see her shop and nine of them buy. She calls that a bad day, until she writes the numbers down and notices thirty people put a candle in the cart and left when the shipping cost showed up.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-20 md:mt-28">
            <TuesdayPanel />
          </Reveal>

          <Reveal className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-24">
            <span aria-hidden="true" className="hidden lg:block w-16 h-px bg-[#ff1616] mt-5" />
            <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
              That receipt is the whole idea behind Product Sales. A launch gets people through the door, and the sales work finds out where they walk back out. We do that work at Perfect Pixel Pro for products that already exist.
            </p>
          </Reveal>
        </section>

        {/* ── THE FUNNEL ── */}
        <section aria-labelledby="fun-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <h2 id="fun-heading" className={h2Class}>
                  <SplitHeading line="Product Sales are a list" italic="of" rest="places people leave." />
                </h2>
              </Reveal>
              <Reveal delay={120} className="mt-8 md:mt-10 space-y-5 text-[15px] md:text-[18px] leading-[1.8] text-[#6d6d6d] font-light">
                <p>
                  Sales funnel is a fancy name for that list. Jess's has five rooms, and in each one a few people head for the door. She loses 880 before the click, 90 at the cart and 21 at checkout.
                </p>
                <p>
                  Look at the last number again. Of thirty carts, twenty-one die at the payment page. That's the cheapest leak to patch, and she can patch it this week. She isn't alone. The Baymard Institute collected 50 studies from 2006 through 2025 and found that about 70 of every 100 carts get abandoned (70.22%, if you like decimals). Of the US shoppers who left for some reason besides browsing, 40% pointed at extra costs. Shipping, taxes, fees.
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <FunnelStack />
              <p className={`${noteClass} mt-5`}>Jess's imagined Tuesday, as a funnel, not to scale</p>
              <p className="mt-12 md:mt-16 text-[20px] md:text-[26px] leading-[1.45] tracking-[-0.02em] text-black">
                Jess tapes a printout of the funnel to the fridge. Her brother glances at it over cereal and says, "So the shop works and the checkout doesn't?" <Accent className="font-normal">Exactly.</Accent> Nobody needed a bigger budget to see that.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE LEAK TEST ── */}
        <section aria-labelledby="calc-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
              <h2 id="calc-heading" className={h2Class}>
                <SplitHeading line="Move one number and watch the" italic="month" rest="change." />
              </h2>
              <p className={bodyClass}>
                Jess's rough numbers are loaded. Slide them to yours and keep one eye on the last line. It's arithmetic, not a forecast.
              </p>
            </Reveal>
            <LeakCalculator />
          </div>
        </section>

        {/* ── THREE THINGS JESS CHANGED ── */}
        <section aria-labelledby="shelf-heading" className={`${container} ${sectionY}`}>
          <Reveal className="text-center max-w-[820px] mx-auto">
            <h2 id="shelf-heading" className={h2Class}>Three things Jess changed.</h2>
            <p className={`${bodyClass} mt-6`}>
              Jess changes one thing a week and writes it on the whiteboard above her pouring table. Most weeks, nothing happens. These three weren't those weeks, in her imagined month.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {tags.map((t, i) => {
              const st = tagStyles[i];
              return (
                <Reveal key={t.name} delay={i * 120}>
                  <article className={`h-full rounded-[28px] p-7 md:p-9 flex flex-col min-h-[380px] md:min-h-[440px] transition-transform duration-500 hover:-translate-y-1.5 ${st.card}`}>
                    <div className="flex items-center justify-between">
                      <p className={`${noteClass} ${st.note}`}>Tag 0{i + 1}</p>
                      <span aria-hidden="true" className="text-[56px] md:text-[64px] font-semibold leading-none tracking-[-0.06em] opacity-15">0{i + 1}</span>
                    </div>
                    <div className="mt-auto pt-10">
                      <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em]">{t.name}</h3>
                      <p className={`mt-2 text-[22px] md:text-[24px] italic leading-[1.2] ${st.sub}`} style={serif}>{t.cs}</p>
                      <p className={`mt-5 text-[15px] md:text-[16px] leading-[1.8] font-light ${st.body}`}>{t.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── GETTING PEOPLE TO THE PAGE ── */}
        <section aria-labelledby="acq-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec] grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="acq-heading" className={h2Class}>
                <SplitHeading line="Small campaigns," italic="run" rest="on repeat." />
              </h2>
              <p className="mt-8 md:mt-10 text-[15px] md:text-[18px] leading-[1.8] text-[#6d6d6d] font-light">
                Product promotion works best when it's repeated and a little boring. A written product promotion strategy keeps the repeating honest, and our product marketing services cover the page, the campaigns and the reporting if you'd rather not run it alone.
              </p>
            </Reveal>

            <div className="border-t border-[#e5e5e5]">
              {acquisition.map((a, i) => (
                <Reveal key={a.title} delay={i * 100}>
                  <article className="group grid grid-cols-[48px_1fr] md:grid-cols-[72px_1fr] gap-4 py-10 md:py-12 border-b border-[#e5e5e5]">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#d9d9d9] flex items-center justify-center text-[13px] font-medium tabular-nums transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:border-[#ff1616] group-hover:text-white">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{a.title}</h3>
                      <p className="mt-3 text-[15px] md:text-[17px] leading-[1.8] text-[#6d6d6d] font-light">{a.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE LOOP ── */}
        <section aria-labelledby="loop-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec]">
            <Reveal className="text-center max-w-[860px] mx-auto">
              <h2 id="loop-heading" className={h2Class}>
                <SplitHeading line="Every sale" italic="writes" rest="the next one." />
              </h2>
              <p className={`${bodyClass} mt-6`}>
                The Customer feedback loop is four steps. Sell. Ask what almost stopped them. Fix the one thing everybody says. Sell again.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-14 md:mt-20">
              <figure className="m-0 rounded-[28px] bg-[#f6f6f6] p-6 md:p-12">
                <div className="overflow-x-auto">
                  <LoopFlow />
                </div>
              </figure>
            </Reveal>

            <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
              <Reveal>
                <blockquote className="m-0">
                  <p className="text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.02em] text-black">
                    Here's Bill Gates, in Business @ The Speed of Thought: <Accent className="font-normal">"Your most unhappy customers are your greatest source of learning."</Accent> Jess pinned it over her pouring table.
                  </p>
                </blockquote>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-[15px] md:text-[18px] leading-[1.8] text-[#6d6d6d] font-light">
                  Jess tucks a card in every box. By the third batch, one card says, "Love the scent, but which one is lavender? My hallway is dark." Jess prints the scent name on the lid. The complaints stop, which she finds oddly quiet. A rival can copy your label. They can't read your mail.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Quick answers." faqs={faqs} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the receipt." italic="We'll" rest="find the leak." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Send us last month's numbers, even rough ones. Perfect Pixel Pro will walk through them with you and pick the one leak worth fixing first. Product Sales is the last stop in our{" "}
                <Link to="/product-commercialization" className={inlineLink}>product commercialization</Link> work, after{" "}
                <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link> tests the idea and{" "}
                <Link to="/product-launch" className={inlineLink}>Product Launch</Link> finds the first buyers. If the story needs work before the sales do, our{" "}
                <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> and{" "}
                <Link to="/branding-agency" className={inlineLink}>branding agency</Link> teams can start there.
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
            <ul className="list-none m-0 p-0 space-y-2.5">
              {sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="nofollow noopener" className="text-[14px] md:text-[15px] text-[#6d6d6d] underline decoration-[#d9d9d9] underline-offset-4 transition-colors duration-200 hover:text-[#ff1616] hover:decoration-[#ff1616]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductSales;                              
