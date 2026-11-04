import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Performance Marketing | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Performance Marketing from Perfect Pixel Pro. Google Ads, Meta Ads, tracking and creative, built to show what every ad dollar returned.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const heroSans = "BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif";
const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  { q: "How to generate sales leads?", a: "Hand people something worth an email address. A checklist, a quote, a free consult. Then ring them back fast, because a lead goes cold like soup. Lead Generation lives or dies on that call. Count cost per qualified lead, not cost per form. A form filled in by a bot costs the same as one from your dream client." },
  { q: "How to sell a product?", a: "Picture one person who'd be sad if your product vanished. Write the pitch the way they'd say it to a friend. Then make checkout simple enough for a thumb. Test one offer on one page. Click but no buy? Blame the page and fix it before paying for more visitors. Product Selling mostly comes down to removing doubt." },
  { q: "What is Performance Marketing?", a: "Performance Marketing is paid advertising where results set the budget. Reach is nice. You still can't deposit it. Buy ads or partner spots, count what comes back, and move money toward the winners. That covers search, social, affiliates and creators." },
  { q: "Google Ads or Meta Ads: where should I start?", a: "Look at your buyer. Do they already search for what you sell? Start with Google Ads. Do they not know they want it yet? Start with Meta Ads. Run one well, then add the second." },
  { q: "Are Chat Gpt ads worth testing?", a: "Maybe, with pocket change. OpenAI says the test began February 9, 2026, in the United States, with labeled sponsored units for Free and Go users. Rules and reporting keep shifting. Call it an experiment." },
  { q: "What do GA4 Setup and Google Tag Manager do for ads?", a: "They tell ad platforms what actually happened. GA4 Setup picks which actions count as wins. Google Tag Manager plants the tags that report them. Skip both and the platforms chase clicks, and clicks don't pay rent." },
  { q: "How much should I spend on paid advertising?", a: "Start with money you could lose without flinching. Then do the sum backward. One sale is worth what? And you can afford to pay how much to win it? When something earns more than it costs, feed it. Keep the rest tiny." },
  { q: "How long does Performance Marketing take to work?", a: "Weeks, normally. Platforms are still figuring you out in week one, and your buyers might take longer than that to decide. A $10 impulse buy shows signal fast. A pricey service doesn't. Judge a full buying cycle, not one lucky Tuesday." },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Performance Marketing starts with what happened after the click",
    description: PAGE_DESCRIPTION,
    author: { "@type": "Organization", name: "Perfect Pixel Pro" },
    publisher: { "@type": "Organization", name: "Perfect Pixel Pro", url: "https://perfectpixelpro.com" },
    mainEntityOfPage: "https://perfectpixelpro.com/performance-marketing",
    datePublished: "2026-11-02",
    inLanguage: "en-US",
  },
  faqSchema(faqs),
];

// ── Shared bits
const Icon = ({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const Tick = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 6.2 5 8.5 9.5 3.5" />
  </svg>
);

const TestLine = ({ children }: { children: ReactNode }) => (
  <Reveal className="mt-12 md:mt-16">
    <p className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-[22px] bg-white ring-1 ring-[#ececec] px-6 py-5 md:px-8 md:py-6 max-w-[920px]">
      <span className="self-start sm:self-auto shrink-0 rounded-full bg-[#ff1616] px-4 py-1.5 text-[13px] font-semibold text-white">The test.</span>
      <span className="text-[22px] md:text-[26px] leading-[1.25] text-black">{children}</span>
    </p>
  </Reveal>
);

const SectionHead = ({ id, heading, children }: { id: string; heading: ReactNode; children: ReactNode }) => (
  <Reveal>
    <h2 id={id} className={`${h2Class} max-w-[1000px]`}>{heading}</h2>
    <div className={`${bodyClass} mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16`}>{children}</div>
  </Reveal>
);

// ── Hero: the ad is one part of the story
const heroSteps = [
  { k: "Attention", v: "Someone clicks.", q: "Was the promise relevant?", icon: <path d="M5 3.5 19 10l-6 1.7L10.5 18Z" /> },
  { k: "Action", v: "Someone responds.", q: "Was it a real buying opportunity?", icon: <path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" /> },
  { k: "Business outcome", v: "A customer. At what cost?", q: "Check quality, margin and what followed.", icon: <><circle cx="12" cy="12" r="8.5" /><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v1.5M12 16v1.5" /></> },
];

// Small, concrete picture for each step of the decision map (the page's pottery-mug example).
const StepArt = ({ i }: { i: number }) => {
  if (i === 0) {
    return (
      <div className="relative w-full max-w-[180px] rounded-[14px] bg-white/[0.08] p-3">
        <span className="block text-[9px] text-white/50">Sponsored</span>
        <span className="mt-1.5 block text-[15px] italic leading-none text-white" style={serif}>Handmade mugs</span>
        <span className="mt-2.5 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-black">Shop now</span>
        <svg viewBox="0 0 24 24" className="absolute right-6 bottom-0 w-6 h-6 translate-y-1/3" aria-hidden="true">
          <path d="M5 3.5 19 10l-6 1.7L10.5 18Z" fill="#ff1616" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (i === 1) {
    return (
      <div className="w-full max-w-[180px] rounded-[14px] bg-white/[0.12] p-3 space-y-1.5">
        {["Name", "Email"].map((f) => (
          <span key={f} className="flex items-center h-6 rounded-[7px] bg-white/10 px-2 text-[10px] text-white/60">{f}</span>
        ))}
        <span className="flex items-center justify-center h-6 rounded-full bg-[#ff1616] text-[10px] font-semibold text-white">Place order</span>
      </div>
    );
  }
  return (
    <div className="w-full max-w-[190px] rounded-[14px] bg-[#f6f6f6] p-3 text-[10px] text-[#3d3d3d]">
      <div className="flex justify-between font-semibold text-black"><span>Order</span><span>100</span></div>
      <div className="mt-1 flex justify-between"><span>Costs</span><span>-60</span></div>
      <div className="flex justify-between text-[#ff1616]"><span>Ads</span><span>-25</span></div>
      <div className="mt-1 pt-1 border-t border-[#dcdcdc] flex justify-between font-semibold text-black"><span>Left</span><span>15</span></div>
      <div className="mt-2 flex h-2 rounded-full overflow-hidden">
        <span className="w-[60%] bg-[#d4d4d4]" /><span className="w-[25%] bg-[#ff1616]" /><span className="w-[15%] bg-[#0d0d0d]" />
      </div>
    </div>
  );
};

// Hero (right column): the same decision map, stood upright. Click, response, then what was left.
const AfterClick = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  return (
    <figure className="m-0">
      <p className="sr-only">Someone clicks a handmade mugs ad, then places an order. The business outcome: an order of 100 minus 60 in costs and 25 in ads leaves 15. That outcome feeds the next decision.</p>
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-5">
        {/* Click and response, side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[20px] bg-white p-4" style={rise(100)}>
            <span className="text-[12px] text-[#9a9a9a]">{heroSteps[0].k}</span>
            <div className="relative mt-3 rounded-[12px] bg-[#f6f6f6] p-3">
              <span className="block text-[9px] text-[#9a9a9a]">Sponsored</span>
              <span className="mt-1 block text-[14px] font-semibold leading-none text-black">Handmade mugs</span>
              <span className="mt-2 inline-block rounded-full bg-[#0d0d0d] px-2.5 py-0.5 text-[9px] font-semibold text-white">Shop now</span>
              <svg viewBox="0 0 24 24" className="absolute right-4 bottom-1 w-5 h-5" aria-hidden="true"><path d="M5 3.5 19 10l-6 1.7L10.5 18Z" fill="#ff1616" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" /></svg>
            </div>
            <span className="mt-3 block text-[15px] font-medium tracking-[-0.02em] text-black">{heroSteps[0].v}</span>
          </div>
          <div className="rounded-[20px] bg-white p-4" style={rise(250)}>
            <span className="text-[12px] text-[#9a9a9a]">{heroSteps[1].k}</span>
            <div className="mt-3 rounded-[12px] bg-[#f6f6f6] p-3 space-y-1.5">
              {["Name", "Email"].map((f) => (
                <span key={f} className="flex items-center h-5 rounded-[6px] bg-white px-2 text-[9px] text-[#9a9a9a]">{f}</span>
              ))}
              <span className="flex items-center justify-center h-5 rounded-full bg-[#ff1616] text-[9px] font-semibold text-white">Place order</span>
            </div>
            <span className="mt-3 block text-[15px] font-medium tracking-[-0.02em] text-black">{heroSteps[1].v}</span>
          </div>
        </div>

        {/* What was left */}
        <div className="mt-3 rounded-[20px] bg-[#0d0d0d] text-white p-5" style={rise(450)}>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-white/50">{heroSteps[2].k}</span>
            <span className="rounded-full bg-[#ff1616] px-3 py-1 text-[11px] font-semibold">Beyond the dashboard</span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            {[
              { l: "Order", v: "100", c: "text-white" },
              { l: "Costs", v: "-60", c: "text-white/70" },
              { l: "Ads", v: "-25", c: "text-[#ff1616]" },
              { l: "Left", v: "15", c: "text-white" },
            ].map((n, i) => (
              <div key={n.l} className={`rounded-[12px] py-2.5 ${i === 3 ? "bg-white text-black" : "bg-white/[0.06]"}`}>
                <span className={`block text-[20px] md:text-[22px] font-semibold tracking-[-0.03em] tabular-nums ${i === 3 ? "text-black" : n.c}`}>{n.v}</span>
                <span className={`block text-[11px] ${i === 3 ? "text-[#6d6d6d]" : "text-white/50"}`}>{n.l}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-2 rounded-full overflow-hidden bg-white/10">
            <span className="bg-white/30" style={{ width: visible ? "60%" : "0%", transition: `width 900ms ${ease} 700ms` }} />
            <span className="bg-[#ff1616]" style={{ width: visible ? "25%" : "0%", transition: `width 900ms ${ease} 900ms` }} />
            <span className="bg-white" style={{ width: visible ? "15%" : "0%", transition: `width 900ms ${ease} 1100ms` }} />
          </div>
          <span className="mt-4 block text-[15px] font-medium">{heroSteps[2].v}</span>
        </div>

        {/* Loop back */}
        <div className="mt-3 flex items-center gap-3 rounded-[20px] bg-white px-5 py-3.5" style={rise(650)}>
          <span className="w-8 h-8 shrink-0 rounded-full bg-[#fff1f1] text-[#ff1616] flex items-center justify-center text-[16px]">↺</span>
          <span className="text-[14px] md:text-[15px] text-black">Feed the outcome into the next decision.</span>
        </div>
      </div>
    </figure>
  );
};

const DecisionMap = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const tones = ["bg-white/[0.05]", "bg-white/[0.1]", "bg-white text-black"];
  return (
    <figure className="m-0">
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#0d0d0d] text-white p-6 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[24px] md:text-[32px] leading-[1.1]">The ad is one part of the story.</p>
          <div className="flex gap-2">
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-[12px]">Follow the result</span>
            <span className="rounded-full bg-[#ff1616] px-3.5 py-1.5 text-[12px] font-semibold">Beyond the dashboard</span>
          </div>
        </div>

        <div className="relative mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {heroSteps.map((s, i) => {
            const last = i === heroSteps.length - 1;
            return (
              <div
                key={s.k}
                className={`relative rounded-[22px] p-6 flex flex-col ${tones[i]}`}
                style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transition: `opacity 600ms ease ${i * 260}ms, transform 800ms ${ease} ${i * 260}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center ${last ? "bg-[#ff1616] text-white" : "bg-white/10 text-white"}`}>
                    <Icon>{s.icon}</Icon>
                  </span>
                  <StepArt i={i} />
                </div>
                <span className={`mt-6 block text-[12px] ${last ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>{s.k}</span>
                <span className="mt-1 block text-[22px] md:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em]">{s.v}</span>
                <span className={`mt-2 block text-[14px] leading-[1.5] ${last ? "text-[#6d6d6d]" : "text-[#bdbdbd]"}`}>{s.q}</span>
                {!last && (
                  <span className="hidden md:flex absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#ff1616] items-center justify-center">
                    <Icon className="w-4 h-4"><path d="M5 12h12M13 7l5 5-5 5" /></Icon>
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Return loop: from the outcome back to the first step */}
        <div className="relative mt-2 h-[70px] hidden md:block">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 70" preserveAspectRatio="none">
            <path
              d="M833 4V30Q833 52 811 52H189Q167 52 167 30V4"
              fill="none"
              stroke="#ff1616"
              strokeWidth="2"
              strokeDasharray="6 7"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              style={{ strokeDashoffset: 0, opacity: visible ? 1 : 0, transition: "opacity 700ms ease 1000ms" }}
            />
          </svg>
          <span className="absolute left-[16.7%] top-0 -translate-x-1/2 text-[#ff1616] text-[14px] leading-none" style={{ opacity: visible ? 1 : 0, transition: "opacity 700ms ease 1100ms" }}>▲</span>
          <span
            className="absolute left-1/2 top-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d0d0d] px-4 py-1.5 flex items-center gap-2 text-[14px] whitespace-nowrap"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 700ms ease 1200ms" }}
          >
            <span className="text-[#ff1616]">↺</span> Feed the outcome into the next decision.
          </span>
        </div>
        <div className="md:hidden mt-4 flex items-center gap-3 rounded-[18px] border border-dashed border-[#ff1616]/60 px-5 py-3.5">
          <span className="text-[#ff1616] text-[20px] leading-none">↺</span>
          <span className="text-[15px]">Feed the outcome into the next decision.</span>
        </div>
      </div>
    </figure>
  );
};

// ── 01: the three jobs, each with its own small story
// Each card shows the real screen where the story happens: a lead inbox, a checkout, a seating plan.
const WinArt = ({ kind }: { kind: number }) => {
  if (kind === 0) {
    return (
      <div className="w-full rounded-[14px] bg-white text-[12px] shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#f0f0f0]">
          <span className="font-semibold text-black">New leads</span>
          <span className="text-[#9a9a9a]">1</span>
        </div>
        <div className="px-3.5 py-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-black">Cafe owner</span>
            <span className="text-[#9a9a9a]">Tue 9:14</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="rounded-full bg-[#fff1f1] px-2 py-0.5 text-[10px] font-semibold text-[#ff1616]">Not called · 3 days</span>
            <span className="text-[#9a9a9a]">Fri: bought elsewhere</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === 1) {
    return (
      <div className="w-full rounded-[14px] bg-white px-3.5 py-3 text-[12px] shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)]">
        <div className="flex justify-between text-[#6d6d6d]"><span>Subtotal</span><span>$32.00</span></div>
        <div className="mt-1.5 -mx-1.5 px-1.5 py-1 rounded-[6px] bg-[#fff1f1] flex justify-between font-semibold text-[#ff1616]"><span>Shipping</span><span>$12.00</span></div>
        <div className="mt-1.5 pt-1.5 border-t border-[#f0f0f0] flex justify-between font-semibold text-black"><span>Total</span><span>$44.00</span></div>
        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-[#9a9a9a]">6 of 10 left here</span>
          <span className="rounded-full bg-[#0d0d0d] px-3 py-1 text-[10px] font-semibold text-white">Pay</span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full rounded-[14px] bg-white px-3.5 py-3 text-[12px] shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-black">Workshop night</span>
        <span className="text-[#9a9a9a]">20 seats</span>
      </div>
      <div className="mt-2.5 grid grid-cols-10 gap-1">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className={`h-3 rounded-t-[4px] rounded-b-[2px] ${i < 12 ? "bg-[#0d0d0d]" : "bg-[#f0f0f0]"}`} />
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-[#9a9a9a]">40 signed up</span>
        <span className="font-semibold text-black">12 paid</span>
      </div>
    </div>
  );
};

const wins = [
  {
    name: "Lead Generation",
    icon: <><path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" /><path d="M8.5 9.5h7M8.5 12.5h4" /></>,
    body: "A cafe owner fills in a form on Tuesday. Nobody calls until Friday. By then she'd bought mugs from the shop down the road. Settle who calls, how fast, and what counts as a good lead. Then count the leads that became orders.",
  },
  {
    name: "Product Selling",
    icon: <><path d="M12 3 20 7.5v9L12 21l-8-4.5v-9Z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></>,
    body: "Ten shoppers reach checkout. Six leave when the shipping fee appears. The ad worked fine. The checkout page killed the sale. Count orders that stayed paid after refunds and delivery. First-time buyers and repeat buyers get separate rows.",
  },
  {
    name: "Ticket Sales",
    icon: <><path d="M3 8h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4Z" /><path d="M15 8v10" strokeDasharray="2 2.5" /></>,
    body: "A workshop night has twenty seats. Forty people sign up and twelve pay. Eight chairs stay empty. Count the twelve. Start from the show date.",
  },
];

// ── 02: one order, examined
const MarginCalc = () => {
  const [ad, setAd] = useState(25);
  const left = 100 - 60 - ad;
  const roas = (100 / ad).toFixed(2);
  const neg = left < 0;
  const verdict = neg
    ? `This order loses ${Math.abs(left)} before overhead, even at a ROAS of ${roas}.`
    : left === 0
    ? "Break-even. Nothing left for overhead."
    : "Still profitable before overhead. Break-even is an ad cost of 40.";
  const pct = (n: number) => `${Math.max(0, n)}%`;
  const scale = Math.max(100, 60 + ad);

  return (
    <div className="h-full flex flex-col justify-between rounded-[32px] bg-white p-5 md:p-7 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[17px] font-semibold text-black">One order, examined</span>
      </div>

      {/* The $100 order, split live */}
      <div aria-hidden="true" className="mt-5">
        <div className="flex h-11 rounded-[14px] overflow-hidden ring-1 ring-[#ececec]">
          <span className="flex items-center justify-center bg-[#e5e5e5] text-[12px] text-[#3d3d3d]" style={{ width: `${(60 / scale) * 100}%` }}>Costs 60</span>
          <span className="flex items-center justify-center bg-[#ff1616] text-[12px] font-semibold text-white transition-all duration-300" style={{ width: `${(ad / scale) * 100}%` }}>Ads {ad}</span>
          {!neg && left > 0 && (
            <span className="flex items-center justify-center bg-[#0d0d0d] text-[12px] font-semibold text-white transition-all duration-300" style={{ width: pct((left / scale) * 100) }}>{left > 6 ? `Left ${left}` : ""}</span>
          )}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-[#9a9a9a]">
          <span>0</span>
          <span>Net revenue 100 · Variable costs -60{neg ? " (exceeded)" : ""}</span>
        </div>
      </div>

      <label htmlFor="ppp-ad" className="mt-5 flex items-baseline justify-between gap-4">
        <span className="text-[16px] text-black">Ad cost for this order</span>
        <b className="text-[24px] font-semibold tracking-[-0.02em] text-[#ff1616] tabular-nums">{ad}</b>
      </label>
      <input
        id="ppp-ad"
        type="range"
        min={5}
        max={70}
        value={ad}
        onChange={(e) => setAd(Number(e.target.value))}
        className="mt-3 w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#ff1616]"
        style={{ background: `linear-gradient(to right, #ff1616 ${((ad - 5) / 65) * 100}%, #e5e5e5 ${((ad - 5) / 65) * 100}%)` }}
      />
      <div className="mt-2 flex justify-between text-[12px] text-[#9a9a9a]"><span>5</span><span>Move to compare</span><span>70</span></div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-[20px] bg-[#f6f6f6] p-4">
          <span className="block text-[12px] text-[#9a9a9a]">ROAS</span>
          <span className="mt-1.5 block text-[34px] md:text-[38px] font-semibold leading-none tracking-[-0.05em] text-black tabular-nums">{roas}×</span>
          <span className="mt-2 block text-[13px] text-[#6d6d6d]">Revenue ÷ ad cost</span>
        </div>
        <div className={`rounded-[20px] p-4 ${neg ? "bg-[#ff1616] text-white" : "bg-[#0d0d0d] text-white"}`}>
          <span className="block text-[12px] text-white/70">After variable costs + ads</span>
          <span className="mt-1.5 block text-[34px] md:text-[38px] font-semibold leading-none tracking-[-0.05em] tabular-nums">{left}</span>
          <span className="mt-2 block text-[13px] text-white/70">Left before overhead</span>
        </div>
      </div>

      <p aria-live="polite" className={`mt-3 rounded-[16px] px-4 py-3 text-[14px] leading-[1.5] ${neg ? "bg-[#fff1f1] text-[#ff1616]" : "bg-[#f6f6f6] text-black"}`}>{verdict}</p>
      <p className={`${bodyClass} mt-3 !text-[13px] md:!text-[14px] !leading-[1.7]`}>Illustration only. Not client results. 
        Generic currency units. Revenue is net of discounts, refunds and sales taxes. Variable costs include product, fulfillment and payment fees. Fixed overhead, creative and agency fees are excluded. This is not net profit or evidence of incremental sales.
      </p>
    </div>
  );
};

// ── 03: channels
// Position on the intent scale: 0 = searching, wanting one now; 100 = scrolling, wanting nothing yet.
const channels = [
  { name: "Google Ads", tag: "Searching now", pos: 8, body: "Someone searched, so they're half sold. PPC means Pay Per click. You pay when somebody clicks, whether or not they buy.", icon: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></> },
  { name: "Meta Ads", tag: "Scrolling", pos: 88, body: "Interrupts a scroll with a mug. In meta ads manager you pick the audience and budget. Then judge each creative by sales, not likes.", icon: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M12 7v7M9.5 11.5 12 14l2.5-2.5" /></> },
  { name: "Linkedin ads", tag: "Job titles", pos: 45, body: "Aims at job titles. Good for selling to companies. Clicks often cost more, so the lead had better be worth it.", icon: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5h6v2M3 12h18" /></> },
  { name: "Chat Gpt ads", tag: "Experiment", pos: -1, body: "OpenAI says paid units sit apart from ChatGPT's answers, so money can't buy a recommendation. The test began February 9, 2026, in the United States, on Free and Go plans. Read the rules, then spend pocket change.", icon: <><path d="M9 3h6M10 3v5.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V3" /><path d="M7 15h10" /></> },
];

// What each platform actually looks like when the pottery shop's mug ad shows up.
const shadowCard = "shadow-[0_16px_32px_-24px_rgba(0,0,0,0.45)]";

const ChannelArt = ({ name }: { name: string }) => {
  if (name === "Google Ads") {
    return (
      <div className={`rounded-[14px] bg-white p-3.5 ${shadowCard}`}>
        <div className="flex items-center gap-2 rounded-full ring-1 ring-[#e5e5e5] px-3 py-1.5">
          <Icon className="w-3.5 h-3.5 text-[#9a9a9a]"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></Icon>
          <span className="text-[12px] text-black">handmade mugs</span>
          <span className="w-px h-3.5 bg-[#ff1616] motion-safe:animate-pulse" />
        </div>
        <div className="mt-3">
          <span className="text-[10px] font-semibold text-black">Sponsored</span>
          <span className="block text-[10px] text-[#6d6d6d]">potteryshop.com</span>
          <span className="mt-0.5 block text-[13px] font-medium leading-[1.25] text-[#1a0dab]">Handmade Stoneware Mugs | Ships in 2 Days</span>
          <span className="mt-0.5 block text-[10px] leading-[1.4] text-[#6d6d6d]">Thrown by hand. Dishwasher safe.</span>
        </div>
      </div>
    );
  }
  if (name === "Linkedin ads") {
    return (
      <div className={`rounded-[14px] bg-white p-3.5 ${shadowCard}`}>
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-[8px] bg-[#0d0d0d] text-white text-[10px] font-bold flex items-center justify-center">PS</span>
          <span className="leading-tight">
            <span className="block text-[12px] font-semibold text-black">Pottery Shop</span>
            <span className="block text-[10px] text-[#9a9a9a]">Promoted</span>
          </span>
        </div>
        <p className="mt-2.5 text-[12px] leading-[1.4] text-black">Wholesale mugs for your café. Samples in a week.</p>
        <div className="mt-2.5 flex flex-wrap gap-1">
          <span className="text-[10px] text-[#9a9a9a]">Shown to:</span>
          {["Café owner", "Office manager"].map((t) => (
            <span key={t} className="rounded-full bg-[#fff1f1] px-2 py-0.5 text-[10px] font-medium text-[#ff1616]">{t}</span>
          ))}
        </div>
      </div>
    );
  }
  // Meta Ads: the mug turns up between other posts.
  return (
    <div className={`rounded-[14px] bg-white p-2.5 ${shadowCard}`}>
      <div className="flex items-center gap-2 px-1 pb-2 text-[10px] text-[#bdbdbd]">
        <span className="w-4 h-4 rounded-full bg-[#ececec]" /> a dog video
      </div>
      <div className="rounded-[10px] ring-1 ring-[#ffd0d0] p-2.5 flex items-center gap-3">
        <span className="w-11 h-11 shrink-0 rounded-[8px] bg-[#f6f6f6] flex items-center justify-center text-[#ff1616]">
          <Icon className="w-5 h-5"><path d="M6 8h10v6a5 5 0 0 1-5 5 5 5 0 0 1-5-5ZM16 10h1.5a2.5 2.5 0 0 1 0 5H16" /></Icon>
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[10px] text-[#9a9a9a]">Sponsored</span>
          <span className="block text-[12px] font-medium text-black">The mug for slow mornings</span>
        </span>
        <span className="rounded-full bg-[#0d0d0d] px-2.5 py-1 text-[10px] font-semibold text-white">Shop now</span>
      </div>
      <div className="flex items-center gap-2 px-1 pt-2 text-[10px] text-[#bdbdbd]">
        <span className="w-4 h-4 rounded-full bg-[#ececec]" /> somebody's lunch
      </div>
    </div>
  );
};

// Bento layout: the wide cards carry the search ad and the AI experiment, the narrow ones sit beside them.
const ChannelMap = () => {
  const [google, meta, linkedin, experiment] = channels;
  const tag = (t: string, dark = false) => (
    <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${dark ? "bg-white/10 text-white" : "bg-[#f6f6f6] text-black"}`}>{t}</span>
  );

  return (
    <figure className="m-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Google: wide, dark */}
        <Reveal className="lg:col-span-2 h-full">
          <article className="group h-full rounded-[28px] bg-[#0d0d0d] text-white p-5 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-6 md:gap-8 items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff1616]" />
                {tag(google.tag, true)}
              </div>
              <h3 className="mt-5 text-[28px] md:text-[34px] font-semibold tracking-[-0.03em]">{google.name}</h3>
              <p className="mt-2 text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#bdbdbd]">{google.body}</p>
            </div>
            <div aria-hidden="true" className="rounded-[20px] bg-white/[0.06] p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <ChannelArt name={google.name} />
            </div>
          </article>
        </Reveal>

        {/* LinkedIn */}
        <Reveal delay={120} className="h-full">
          <article className="group h-full rounded-[28px] bg-white p-5 md:p-6 flex flex-col">
            <div aria-hidden="true" className="rounded-[20px] bg-[#f6f6f6] p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <ChannelArt name={linkedin.name} />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-black">{linkedin.name}</h3>
              {tag(linkedin.tag)}
            </div>
            <p className={`${bodyClass} mt-2`}>{linkedin.body}</p>
          </article>
        </Reveal>

        {/* Meta */}
        <Reveal className="h-full">
          <article className="group h-full rounded-[28px] bg-white p-5 md:p-6 flex flex-col">
            <div aria-hidden="true" className="rounded-[20px] bg-[#f6f6f6] p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <ChannelArt name={meta.name} />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-black">{meta.name}</h3>
              {tag(meta.tag)}
            </div>
            <p className={`${bodyClass} mt-2`}>{meta.body}</p>
          </article>
        </Reveal>

        {/* ChatGPT: wide, the experiment */}
        <Reveal delay={120} className="lg:col-span-2 h-full">
          <article className="group h-full rounded-[28px] bg-white p-5 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-6 md:gap-8 items-center">
            <div>
              <span className="rounded-full bg-[#ff1616] px-3 py-1 text-[12px] font-medium text-white">{experiment.tag}</span>
              <h3 className="mt-5 text-[28px] md:text-[34px] font-semibold tracking-[-0.03em] text-black">{experiment.name}</h3>
              <p className={`${bodyClass} mt-2`}>{experiment.body}</p>
            </div>
            <div aria-hidden="true" className="rounded-[20px] bg-[#f6f6f6] p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <div className="ml-auto w-fit max-w-[85%] rounded-[14px] rounded-br-[4px] bg-[#0d0d0d] px-3 py-2 text-[12px] text-white">Which mug keeps coffee hot longest?</div>
              <div className="mt-2 max-w-[90%] rounded-[14px] rounded-bl-[4px] bg-white px-3 py-2 text-[12px] leading-[1.45] text-black">
                Thick stoneware with a lid holds heat best. Pre-warm it with hot water first.
              </div>
              <div className="my-2.5 flex items-center gap-2 text-[10px] text-[#9a9a9a]"><span className="flex-1 border-t border-dashed border-[#cfcfcf]" />separate from the answer<span className="flex-1 border-t border-dashed border-[#cfcfcf]" /></div>
              <div className="rounded-[12px] bg-white ring-1 ring-[#ffd0d0] px-3 py-2 flex items-center gap-2">
                <span className="rounded-[4px] bg-[#ff1616] px-1.5 py-0.5 text-[9px] font-bold text-white">Sponsored</span>
                <span className="text-[12px] text-black">Pottery Shop · Lidded mugs</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
      <p className={`${bodyClass} mt-5`}>Where each channel meets the buyer. Illustrative, not data.</p>
    </figure>
  );
};

// ── 04: tracking flow
const TrackingFlow = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const node = (i: number) => ({ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)", transition: `opacity 600ms ease ${i * 220}ms, transform 800ms ${ease} ${i * 220}ms` });
  const Arrow = () => (
    <span aria-hidden="true" className="hidden md:block relative h-[2px] flex-1 min-w-[24px] bg-white/15 overflow-hidden">
      <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#ff1616_0_8px,transparent_8px_16px)] motion-safe:animate-[pm-flow_1s_linear_infinite]" />
    </span>
  );
  return (
    <figure className="m-0">
      <style>{`@keyframes pm-flow { from { transform: translateX(-16px) } to { transform: translateX(0) } }`}</style>
      <div
        ref={ref}
        role="img"
        aria-label="A click on an ad travels to your site, where Google Tag Manager fires a tag, then to GA4 as a key event, then out to Google Ads and Meta Ads."
        className="rounded-[32px] bg-[#0d0d0d] text-white p-6 md:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
          <div className="rounded-[20px] bg-white/[0.06] px-5 py-5 flex items-center gap-3 md:w-[170px]" style={node(0)}>
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Icon><path d="M5 3.5 19 10l-6 1.7L10.5 18Z" /></Icon></span>
            <span className="text-[15px] font-medium">Ad click</span>
          </div>
          <Arrow />
          <div className="rounded-[20px] bg-white/[0.06] p-5 md:w-[220px]" style={node(1)}>
            <span className="text-[15px] font-medium">Your site</span>
            <span className="mt-3 block rounded-[12px] bg-white text-black px-4 py-2.5 text-[14px] font-semibold text-center">Tag Manager</span>
          </div>
          <Arrow />
          <div className="rounded-[20px] bg-[#ff1616] p-5 md:w-[170px] text-center" style={node(2)}>
            <span className="block text-[28px] font-semibold leading-none tracking-[-0.03em]">GA4</span>
            <span className="mt-2 block text-[13px] text-white/85">key events</span>
          </div>
          <Arrow />
          <div className="flex md:flex-col gap-2 md:w-[170px]" style={node(3)}>
            {["Google Ads", "Meta Ads"].map((p) => (
              <span key={p} className="flex-1 rounded-[14px] bg-white/[0.06] ring-1 ring-white/15 px-4 py-3 text-[14px] font-medium text-center">{p}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <span className="text-[13px] text-[#9a9a9a]">Wins worth counting</span>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {["Paid order", "Form sent", "Call booked"].map((w, i) => (
              <span key={w} className="flex items-center gap-3 rounded-[14px] bg-white/[0.06] px-4 py-3" style={node(4 + i)}>
                <span className="w-6 h-6 rounded-full bg-[#ff1616] flex items-center justify-center"><Tick className="w-3 h-3" /></span>
                <span className="text-[15px] font-medium">{w}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

// ── 05: A/B creative test
// One ad, two hooks. Flip between A and B; everything except the hook is locked.
const hooks = { A: "Tired of chipped mugs?", B: "Handmade. Dishwasher safe." } as const;

const HookTest = () => {
  const [v, setV] = useState<"A" | "B">("B");
  const [paused, setPaused] = useState(false);

  // Gently flips between the two versions until someone picks one.
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = window.setInterval(() => setV((x) => (x === "A" ? "B" : "A")), 2800);
    return () => window.clearInterval(t);
  }, [paused]);

  const locked = [
    { k: "Video", v: "Customer, 0:20" },
    { k: "Offer", v: "Free shipping this week" },
    { k: "Button", v: "Shop now" },
  ];

  return (
    <figure className="m-0">
      <div className="rounded-[32px] bg-[#0d0d0d] text-white p-5 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-6 items-center">
        {/* The ad */}
        <div aria-hidden="true" className="rounded-[22px] bg-white text-black p-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 px-1 pb-2.5">
            <span className="w-7 h-7 rounded-full bg-[#0d0d0d] text-white text-[9px] font-bold flex items-center justify-center">PS</span>
            <span className="leading-tight">
              <span className="block text-[12px] font-semibold">Pottery Shop</span>
              <span className="block text-[10px] text-[#9a9a9a]">Sponsored</span>
            </span>
          </div>
          <div className="relative h-[150px] rounded-[14px] overflow-hidden" style={{ background: "linear-gradient(160deg, #efe6da, #d6c2aa)" }}>
            <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 text-[#6b5641]" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h10v6a5 5 0 0 1-5 5 5 5 0 0 1-5-5ZM16 10h1.5a2.5 2.5 0 0 1 0 5H16" /></svg>
            <span className="absolute left-2.5 bottom-2.5 rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white">▶ 0:20</span>
          </div>
          <div className="relative mt-3 px-1 h-[44px]">
            {(["A", "B"] as const).map((k) => (
              <p
                key={k}
                className="absolute inset-x-1 top-0 text-[18px] md:text-[19px] font-semibold leading-[1.15] tracking-[-0.02em] transition-all duration-500"
                style={{ opacity: v === k ? 1 : 0, transform: v === k ? "none" : "translateY(6px)" }}
              >
                {hooks[k]}
              </p>
            ))}
          </div>
          <div className="mt-1 px-1 flex items-center justify-between">
            <span className="text-[11px] text-[#6d6d6d]">Free shipping this week</span>
            <span className="rounded-[8px] bg-[#0d0d0d] px-3 py-1.5 text-[11px] font-semibold text-white">Shop now</span>
          </div>
        </div>

        {/* The controls */}
        <div>
          <span className="block text-[13px] text-white/50">The only thing that changes</span>
          <div role="tablist" aria-label="Hook version" className="mt-3 grid grid-cols-2 gap-1 rounded-full bg-white/10 p-1">
            {(["A", "B"] as const).map((k) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={v === k}
                onClick={() => { setPaused(true); setV(k); }}
                className={`rounded-full py-2 text-[13px] font-semibold transition-colors duration-300 ${v === k ? (k === "B" ? "bg-[#ff1616] text-white" : "bg-white text-black") : "text-white/60 hover:text-white"}`}
              >
                Hook {k}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="mt-3 text-[15px] leading-[1.4] text-white">“{hooks[v]}”</p>

          <span className="mt-6 block text-[13px] text-white/50">Locked for the test</span>
          <ul className="mt-3 list-none m-0 p-0 space-y-2">
            {locked.map((l) => (
              <li key={l.k} className="flex items-center gap-3 rounded-[14px] bg-white/[0.06] px-3.5 py-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                <span className="text-[13px] text-white/60 w-[52px]">{l.k}</span>
                <span className="text-[13px] text-white">{l.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={`${bodyClass} mt-5`}>A fictional pottery shop testing two hooks. Everything else stays put.</p>
    </figure>
  );
};

// ── 06: cash committed before any result
const partnerBars = [
  { name: "Affiliate Marketing", note: "after the sale", h: 8, tone: "bg-[#e5e5e5]" },
  { name: "Brand Partnerships", note: "audience swap", h: 8, tone: "bg-[#e5e5e5]" },
  { name: "Influencer Ads", note: "post and reach", h: 48, tone: "bg-[#ffb3b3]" },
  { name: "Paid Partnerships", note: "placement fee", h: 92, tone: "bg-[#ff1616]" },
];
const PartnerChart = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  return (
    <figure className="m-0">
      <div ref={ref} role="img" aria-label="A bar chart with no numbers. Affiliate Marketing and Brand Partnerships commit almost no cash before results. Influencer Ads commit some. Paid Partnerships commit the most." className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-10">
        <span className="text-[13px] text-[#6d6d6d]">Cash out before any result ↑</span>
        <div className="mt-6 h-[240px] grid grid-cols-4 gap-3 md:gap-6 items-end border-b-2 border-[#0d0d0d]">
          {partnerBars.map((b, i) => (
            <div key={b.name} className="h-full flex flex-col justify-end items-center">
              <span className="mb-2 text-[12px] md:text-[13px] text-[#6d6d6d] text-center" style={{ opacity: visible ? 1 : 0, transition: `opacity 500ms ease ${600 + i * 150}ms` }}>{b.note}</span>
              <span
                className={`w-full max-w-[120px] rounded-t-[14px] ${b.tone}`}
                style={{ height: visible ? `${b.h}%` : "0%", transition: `height 900ms ${ease} ${i * 150}ms` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-3 md:gap-6">
          {partnerBars.map((b) => (
            <span key={b.name} className="text-center text-[13px] md:text-[16px] font-semibold leading-[1.2] text-black">{b.name}</span>
          ))}
        </div>
      </div>
      <p className={`${bodyClass} mt-5`}>Cash you commit before any result shows up. Illustrative, not data.</p>
    </figure>
  );
};

// ── 07: one promise, two landing pages
// The ad promises free shipping. One product page hides it until checkout; the other says it up top.
const PromisePages = () => (
  <figure className="m-0">
    <div role="img" aria-label="An ad promises free shipping on every order. On the left product page the promise is buried in small print and shipping costs 9 dollars at checkout. On the right product page a banner repeats the promise and shipping is free at checkout." className="rounded-[32px] bg-white p-5 md:p-7">
      {/* The ad */}
      <div className="flex items-center gap-3 rounded-[16px] bg-[#f6f6f6] px-4 py-3">
        <span className="w-8 h-8 shrink-0 rounded-full bg-[#0d0d0d] text-white text-[9px] font-bold flex items-center justify-center">PS</span>
        <span className="flex-1 min-w-0 leading-tight">
          <span className="block text-[10px] text-[#9a9a9a]">Pottery Shop · Sponsored</span>
          <span className="block text-[14px] font-semibold text-black">Free shipping on every order</span>
        </span>
        <span className="rounded-[8px] bg-[#0d0d0d] px-3 py-1.5 text-[11px] font-semibold text-white">Shop now</span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[false, true].map((kept) => (
          <div key={String(kept)} className="flex flex-col">
            <div className={`rounded-[18px] bg-white overflow-hidden ${kept ? "ring-2 ring-[#0d0d0d]" : "ring-1 ring-[#e5e5e5]"}`}>
              {kept ? (
                <div className="bg-[#0d0d0d] text-white text-center text-[11px] font-semibold py-1.5">Free shipping on every order</div>
              ) : (
                <div className="h-[26px] border-b border-[#f0f0f0]" />
              )}
              <div className="p-3.5 flex gap-3">
                <span className="w-16 h-16 shrink-0 rounded-[10px] flex items-center justify-center text-[#6b5641]" style={{ background: "linear-gradient(160deg, #efe6da, #d6c2aa)" }}>
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h10v6a5 5 0 0 1-5 5 5 5 0 0 1-5-5ZM16 10h1.5a2.5 2.5 0 0 1 0 5H16" /></svg>
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[13px] font-semibold text-black">Handmade mug</span>
                  <span className="block text-[12px] text-black">$28.00</span>
                  <span className="mt-2 inline-block rounded-[8px] bg-[#0d0d0d] px-2.5 py-1 text-[10px] font-semibold text-white">Add to cart</span>
                </span>
              </div>
              {!kept && <span className="block px-3.5 pb-2 text-[8px] text-[#bdbdbd]">*Shipping calculated at checkout. Terms apply.</span>}
            </div>

            {/* What the buyer sees at checkout */}
            <div className={`mt-2 rounded-[14px] px-3.5 py-2.5 text-[12px] ${kept ? "bg-[#f6f6f6]" : "bg-[#fff1f1]"}`}>
              <div className="flex justify-between text-[#6d6d6d]"><span>Mug</span><span>$28.00</span></div>
              <div className={`flex justify-between font-semibold ${kept ? "text-black" : "text-[#ff1616]"}`}><span>Shipping</span><span>{kept ? "Free" : "$9.00"}</span></div>
            </div>
            <p className={`mt-2.5 text-center text-[13px] font-semibold ${kept ? "text-black" : "text-[#ff1616]"}`}>{kept ? "Promise kept" : "Promise buried"}</p>
          </div>
        ))}
      </div>
    </div>
    <p className={`${bodyClass} mt-5`}>One promise, two landing pages. Fictional.</p>
  </figure>
);

const week = [
  { d: "Mon", w: "Read", t: "What happened?" },
  { d: "Tue", w: "Cut", t: "Switch off the losers." },
  { d: "Wed", w: "Feed", t: "Back the winners." },
  { d: "Thu", w: "Test", t: "One new thing." },
  { d: "Fri", w: "Wait", t: "Let it run." },
];

const getList: { text: string; icon: ReactNode; detail: ReactNode }[] = [
  {
    text: "Tracking that's been tested with a real purchase, built in GA4 and Google Tag Manager.",
    icon: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></>,
    detail: (
      <div className="flex flex-wrap gap-2">
        {["GA4", "Tag Manager", "Tested with a real purchase"].map((c) => (
          <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[12px]">
            <span className="text-[#ff1616]"><Tick className="w-3 h-3" /></span>{c}
          </span>
        ))}
      </div>
    ),
  },
  {
    text: "One goal per campaign, written on the first page.",
    icon: <><path d="M5 21V4" /><path d="M5 4h11l-2 3.5 2 3.5H5" /></>,
    detail: <span className="rounded-full bg-[#f6f6f6] px-3 py-1 text-[12px] text-black">First page</span>,
  },
  {
    text: "A monthly report that talks in dollars.",
    icon: <><circle cx="12" cy="12" r="8.5" /><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v1.5M12 16v1.5" /></>,
    detail: (
      <div className="flex items-end gap-1 h-7">
        {[40, 55, 48, 72, 90].map((h, i) => (
          <span key={i} className={`w-3 rounded-t-[3px] ${i === 4 ? "bg-[#ff1616]" : "bg-[#e5e5e5]"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    ),
  },
  {
    text: "A stop list. Things we'd switch off, with the numbers to back it.",
    icon: <><path d="M8.5 3h7L21 8.5v7L15.5 21h-7L3 15.5v-7Z" /><path d="M9 12h6" /></>,
    detail: <span className="rounded-full bg-[#ff1616] px-3 py-1 text-[12px] font-semibold text-white">Switch off</span>,
  },
  {
    text: "A keep list and a try list too.",
    icon: <><path d="M5 5h14v14H5Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
    detail: (
      <div className="flex gap-2">
        <span className="rounded-full bg-[#0d0d0d] px-3 py-1 text-[12px] font-semibold text-white">Keep</span>
        <span className="rounded-full bg-[#fff1f1] px-3 py-1 text-[12px] font-semibold text-[#ff1616]">Try</span>
      </div>
    ),
  },
];

// Scrolls to a section on this page without adding a #hash to the URL.
const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const AnchorPill = ({ href, children }: { href: string; children: ReactNode }) => (
  <button type="button" onClick={() => scrollToId(href.replace("#", ""))} className="group inline-flex items-center gap-4 h-[56px] pl-7 pr-2 rounded-full bg-[#0d0d0d] text-white text-[14px] md:text-[15px] font-medium transition-colors duration-300 hover:bg-[#ff1616]">
    {children}
    <span className="w-10 h-10 rounded-full bg-white text-[#0d0d0d] flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
      <Icon className="w-4 h-4"><path d="M5 12h12M13 7l5 5-5 5" /></Icon>
    </span>
  </button>
);

const PerformanceMarketing = () => {
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
                <HeroTitleLines line="Performance" italic="" rest="Marketing" compact />
              </h1>
              <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
                Starts with what happened after{" "}
                <span className="text-[#ff1616]" style={{ fontFamily: heroSans }}>the click.</span>
              </p>
              <p className={`${bodyClass} mt-6 max-w-[560px]`}>
                A cheap lead is no use if your sales team can't reach it. That's the gap <span className="whitespace-nowrap">Performance Marketing</span> closes. We plan paid media, creative and tracking around the people you want, the offer they'll buy and the cost your business can carry.
              </p>
              <p className="mt-6 max-w-[560px] pl-4 border-l-2 border-[#ff1616] text-[16px] md:text-[18px] leading-[1.55] font-medium tracking-[-0.01em] text-black">
                Perfect Pixel Pro is a brand design and marketing agency. We run the ads, and then we count what they did.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
                <AnchorPill href="#margin">Let's look at the numbers</AnchorPill>
                <button type="button" onClick={() => scrollToId("margin")} className={`${inlineLink} text-[15px] self-start sm:self-auto`}>Try the margin example</button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <AfterClick />
            </Reveal>
          </div>

        </section>

        {/* ── DEFINE THE WIN ── */}
        <section aria-labelledby="win-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="win-heading" heading={<SplitHeading line="Different businesses." italic="Different" rest="jobs for the ad." />}>
              <p className="lg:col-span-2 max-w-[900px]">Same pottery shop, two jobs. Monday it sells mugs. Tuesday it chases wholesale orders from cafes. Ask your online ads for clicks and they'll deliver clicks, bless them. A brief to generate sales reads nothing like one for inquiries.</p>
            </SectionHead>
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {wins.map((w, i) => (
                <Reveal key={w.name} delay={i * 120}>
                  <article className="h-full rounded-[28px] bg-white p-6 md:p-8 flex flex-col">
                    <div aria-hidden="true" className="rounded-[18px] bg-[#f6f6f6] p-4 min-h-[132px] flex items-center">
                      <WinArt kind={i} />
                    </div>
                    <h3 className="mt-6 text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-black">{w.name}</h3>
                    <p className={`${bodyClass} mt-3`}>{w.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── DO THE SUBTRACTION ── */}
        <section id="margin" aria-labelledby="margin-heading" className={`${container} ${sectionY} scroll-mt-24`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-stretch">
            <Reveal className="space-y-6">
              <h2 id="margin-heading" className={`${h2Class} !mb-8`}>
                <SplitHeading line={["Performance Marketing", "counts the margin,"]} italic="not" rest="just the ROAS." />
              </h2>
              <p className={bodyClass}>A $100 order on $25 of ads reads as 4x ROAS, which sounds great. Now say the mug cost $60 to make and ship. That leaves $15 before rent. ROAS divides revenue by ad spend. Roi, short for return on investment, asks what's left. Those numbers are made up, but the gap is real.</p>
              <p className="text-[19px] md:text-[22px] leading-[1.55] tracking-[-0.01em] text-black">Slide the ad cost and watch. The order stays put. What's left for the business doesn't.</p>
              <p className="pl-5 border-l-2 border-[#ff1616] text-[15px] md:text-[17px] leading-[1.7] text-[#3d3d3d]">Repeat buyers can change the sum. Count them only after you've seen them come back.</p>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <MarginCalc />
            </Reveal>
          </div>
          <TestLine>Find your break-even ad cost per order before the next budget meeting.</TestLine>
        </section>

        {/* ── CHANNELS ── */}
        <section aria-labelledby="chan-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="chan-heading" heading={<SplitHeading line="No platform earns the budget" italic="by" rest="default." />}>
              <p className="lg:col-span-2 max-w-[900px]">Paid Ads need a reason to be there. Typing handmade mugs into a search box means wanting one now. Scrolling on the train means wanting nothing yet.</p>
            </SectionHead>
            <Reveal delay={120} className="mt-14 md:mt-20">
              <ChannelMap />
            </Reveal>
            <Reveal className="mt-4 md:mt-5">
              <div className="rounded-[24px] bg-[#0d0d0d] text-white px-6 py-5 md:px-8 md:py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <span aria-hidden="true" className="w-11 h-11 shrink-0 rounded-full bg-[#ff1616] flex items-center justify-center">
                  <Icon><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m12 8 1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2Z" /></Icon>
                </span>
                <p className="flex-1 text-[16px] md:text-[18px] leading-[1.6]">
                  <strong className="text-[#ff1616] font-semibold">AI Ads:</strong> Software writes fast. Humans check the claims, the product details and the usage rights.
                </p>
                <div aria-hidden="true" className="flex flex-wrap gap-2">
                  {["Claims", "Product details", "Usage rights"].map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px]">
                      <span className="text-[#ff1616]"><Tick className="w-3 h-3" /></span>{c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── TRACKING ── */}
        <section aria-labelledby="track-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="track-heading" heading={<SplitHeading line="Set up GA4 Tracking before" italic="you" rest="spend a dollar" />}>
            <p className="lg:col-span-2 max-w-[900px] text-black">Here's where accounts quietly go wrong. The platform sees a click, not a mug in the mail. So it learns to find more clickers, and clickers aren't always buyers.</p>
          </SectionHead>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <TrackingFlow />
          </Reveal>
          <Reveal className={`${bodyClass} mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16`}>
            <p>GA4 Setup starts with one question. What counts as a win? For the pottery shop, a paid order. For a law firm, a booked consult. GA4 logs those as key events, and that's what GA4 Tracking reports back. Google Tag Manager, Gtm for short, stores the snippets that make it happen. Add them once. Marketing stops filing tickets.</p>
            <p>Then send the same wins to Google Ads and Meta Ads, so they learn from orders, not taps. Before launch, buy a mug yourself and find it in the reports. Missing? Stop and fix that first.</p>
          </Reveal>
          <TestLine>Buy your own product today. How long until it shows in your reports?</TestLine>
        </section>

        {/* ── CREATIVE ── */}
        <section aria-labelledby="creative-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Reveal>
                <h2 id="creative-heading" className={h2Class}>
                  <SplitHeading line="Creative does" italic="the" rest="targeting now" />
                </h2>
                <p className={`${bodyClass} mt-8`}>Platforms are good at finding people now. They can't make a stranger care. That part is still yours, and you get a second, maybe less.</p>
                <p className={`${bodyClass} mt-4`}>
                  Polished doesn't always win. Plenty of ugc ads, short for user-generated content, look like a phone video of someone's morning coffee in their favorite mug. Shaky, a little dim, believable. Other weeks the glossy shoot wins. Run both and let the results settle it. Our{" "}
                  <Link to="/video-production" className={inlineLink}>video production</Link> team shoots either kind.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <HookTest />
              </Reveal>
            </div>
            <Reveal className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
              <p className={bodyClass}>AI Ads make everything faster. Twenty headlines before lunch, no problem. But a machine doesn't know this mug's glaze chips in the microwave. Somebody who does has to read every line before it goes live.</p>
              <p className="text-[19px] md:text-[22px] leading-[1.55] tracking-[-0.01em] text-black lg:pt-1">One change per test. New hook, same everything else. Otherwise a win teaches you nothing.</p>
            </Reveal>
            <TestLine>Flash your ad at a friend for one second, then cover it. What did they see?</TestLine>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section aria-labelledby="partners-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="partners-heading" heading={<SplitHeading line="Partners can sell for you," italic="if" rest="you pay for the right thing" />}>
            <p>Some sales don't need your ad account at all. With Affiliate Marketing, a partner gets paid only when a sale lands. Influencer Ads work differently. You pay a creator to talk to people who already like them, and sometimes the post can be boosted as an ad too.</p>
            <p>Paid Partnerships buy a spot instead. A run of posts, a newsletter slot, a table at someone's market. Brand Partnerships and brand collaboration skip the cash. A roaster and a bakery print each other's names on the bags. No invoice.</p>
          </SectionHead>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <PartnerChart />
          </Reveal>
          <Reveal className="mt-10">
            <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black max-w-[820px]">Give each partner a unique link or code. Without one, you can't tell who sold what.</p>
          </Reveal>
          <TestLine>Which partner sent your last customer? Can you say right now?</TestLine>
        </section>

        {/* ── TRUST ── */}
        <section aria-labelledby="trust-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal>
              <h2 id="trust-heading" className={`${h2Class} max-w-[1000px]`}>
                <SplitHeading line="Reputation Management is part" italic="of" rest="the ad budget" />
              </h2>
            </Reveal>
            <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <PromisePages />
              </Reveal>
              <Reveal delay={120} className={`${bodyClass} space-y-6`}>
                <p>Every click is a stranger doing a quick background check. Reviews, ratings, whether anyone replied. A listing stuck at two stars with a pile of unanswered complaints makes every extra ad dollar work worse, not better.</p>
                <p>Reputation Management, for ad purposes, comes down to three chores. Ask happy customers for a review. Answer unhappy ones quickly and politely. And keep the ad's promise on the landing page. Say the ad offers free shipping and the page hides it. You paid for a click and wasted it.</p>
                <p>
                  A consistent look helps, because people trust what seems like one company. That's where our <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work starts. Our{" "}
                  <Link to="/website-design" className={inlineLink}>website design</Link> team then builds the page that finishes what the ad started.
                </p>
              </Reveal>
            </div>
            <TestLine>Search your own business name tonight. Would you buy from whatever shows up?</TestLine>
          </div>
        </section>

        {/* ── RHYTHM ── */}
        <section aria-labelledby="rhythm-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="rhythm-heading" heading={<SplitHeading line="How the work runs" italic="week" rest="to week" />}>
            <p>Launching is the fun bit. The real work is every Monday after. Look at what happened. Switch off whatever's losing. Put the money behind whatever's winning. Try one new thing. Repeat.</p>
            <p>Patience matters here. Judge a campaign after two days and you're flipping a coin with a spreadsheet. Platforms need a while to learn, and a customer who takes three weeks to decide won't show up in a three-day window.</p>
          </SectionHead>
          <figure className="m-0 mt-14 md:mt-20">
            <div role="img" aria-label="A five day strip. Monday read, Tuesday cut, Wednesday feed, Thursday test, Friday leave it alone." className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {week.map((d, i) => {
                const fri = i === week.length - 1;
                return (
                  <Reveal key={d.d} delay={i * 100}>
                    <div className={`h-full rounded-[24px] p-5 md:p-6 flex flex-col min-h-[190px] ${fri ? "bg-[#ff1616] text-white" : i % 2 === 0 ? "bg-[#f6f6f6] text-black" : "bg-[#0d0d0d] text-white"}`}>
                      <span className={`text-[12px] font-semibold ${fri ? "text-white/80" : i % 2 === 0 ? "text-[#ff1616]" : "text-[#ff1616]"}`}>{d.d}</span>
                      <span className="mt-auto text-[34px] md:text-[40px] leading-none">{d.w}</span>
                      <span className={`mt-3 pt-3 border-t text-[14px] ${fri ? "border-white/30 text-white/90" : i % 2 === 0 ? "border-[#e2e2e2] text-[#6d6d6d]" : "border-white/15 text-[#bdbdbd]"}`}>{d.t}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </figure>
          <Reveal className="mt-12 max-w-[820px]">
            <p className={bodyClass}>Once a month, do the plain sum. What went out. What sales can be traced back to it. What's left. Roi isn't a mood. Once a quarter, zoom out. Has the offer changed? Does a new channel deserve a small test?</p>
          </Reveal>
          <TestLine>If the numbers landed on your desk Monday, what would you switch off first?</TestLine>
        </section>

        {/* ── THE FIT ── */}
        <section aria-labelledby="fit-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
            <Reveal className="space-y-6">
              <h2 id="fit-heading" className={h2Class}>
                <SplitHeading line="Who this is for," italic="and" rest="what you get" />
              </h2>
              <p className={bodyClass}>You've got something good to sell and ad reports that shrug. A freelancer ran things for a while, maybe. Or you boosted a few posts, lost interest and stopped. Funding a budget nobody can explain gets old.</p>
              <p className={bodyClass}>Quick gut check. Need something to go viral by Friday? Wrong agency. We build steady growth you can count. Here's what you'd get.</p>
              <div aria-hidden="true" className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-[18px] bg-white px-5 py-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#f0f0f0] text-[#9a9a9a] flex items-center justify-center text-[14px]">✕</span>
                  <span className="text-[15px] text-[#9a9a9a] line-through decoration-[#bdbdbd]">Viral by Friday</span>
                </div>
                <div className="flex items-center gap-3 rounded-[18px] bg-[#0d0d0d] text-white px-5 py-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-[#ff1616] flex items-center justify-center"><Tick className="w-3.5 h-3.5" /></span>
                  <span className="text-[15px] font-semibold">Steady growth you can count</span>
                </div>
              </div>
            </Reveal>
            <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {getList.map((g, i) => {
                const lead = i === 0;
                return (
                  <li key={g.text} className={lead ? "sm:col-span-2" : ""}>
                    <Reveal delay={i * 90} className="h-full">
                      <div className={`group h-full rounded-[24px] p-5 md:p-6 flex flex-col gap-5 transition-all duration-500 hover:-translate-y-1 ${lead ? "bg-[#0d0d0d] text-white" : "bg-white text-black hover:shadow-[0_24px_50px_-35px_rgba(0,0,0,0.3)]"}`}>
                        <div className="flex items-start gap-4">
                          <span className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-colors duration-500 ${lead ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616] group-hover:bg-[#ff1616] group-hover:text-white"}`}>
                            <Icon>{g.icon}</Icon>
                          </span>
                          <span className={`pt-2 font-medium leading-[1.45] ${lead ? "text-[17px] md:text-[19px]" : "text-[15px] md:text-[16px]"}`}>{g.text}</span>
                        </div>
                        <div aria-hidden="true" className="mt-auto">{g.detail}</div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={container}>
            <TestLine>Could you explain last month's ad spend to a skeptical friend over lunch?</TestLine>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Questions people" italic="ask" rest="before they spend" />}
          aside={
            <p className="mt-8 pt-6 border-t border-[#dcdcdc] text-[14px] leading-[1.7] text-[#6d6d6d] max-w-[360px]">
              Sources for the Chat Gpt ads details:{" "}
              <a href="https://dashthis.com/blog/chatgpt-ads/" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 hover:text-[#ff1616]">DashThis, What Is ChatGPT Ads</a> and{" "}
              <a href="https://www.stackadapt.com/resources/blog/how-to-advertise-on-chatgpt" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 hover:text-[#ff1616]">StackAdapt, How to advertise on ChatGPT</a>, 2026. Terms and markets are changing, so check OpenAI's current ad policies.
            </p>
          }
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto max-w-[1100px] text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-semibold leading-[1.1] tracking-[-0.04em] text-black">
                <SplitHeading line="Performance Marketing you can" italic="explain" rest="to your accountant." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[780px]`}>
                Your ad budget should be easy to explain. Talk to us about <span className="whitespace-nowrap">Performance Marketing</span>, or start with an account review. Either way you'll know what's working and what to switch off. Read more on{" "}
                <Link to="/social-media-marketing" className={inlineLink}>social media marketing</Link> and <Link to="/seo-services" className={inlineLink}>SEO services</Link>, or{" "}
                <Link to="/contact" className={inlineLink}>start a conversation</Link> with Perfect Pixel Pro.
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

export default PerformanceMarketing;
