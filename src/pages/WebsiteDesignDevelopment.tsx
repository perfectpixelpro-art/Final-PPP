import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/LOGO.png";
import {
  container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView,
  usePageMeta, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Website Design & Development | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Website Design & Development from Perfect Pixel Pro. Strategy, bespoke website design, responsive builds and audits that win clients.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  { q: "What are the top websites in the world?", a: "Google's number one. YouTube is next, then Facebook, going by the Similarweb ranking that Wikipedia summarizes. Instagram and ChatGPT fill out the top five. Rankings shift monthly, and they skip app traffic. So don't copy their looks. Copy their clarity. Your site only has to win over your own buyers." },
  { q: "How much does a website cost?", a: "It depends, and a quote with no conversation behind it is a guess. A single landing page costs far less than a site with custom features, motion and a pile of writing. What moves the price? Page count, how custom the design is, what has to be built, and how much content you need. Website Design & Development at Perfect Pixel Pro gets quoted after a short conversation. Tell us what you're picturing. We'll come back with a number." },
  { q: "Do I need a website for my business?", a: "Yes, for nearly everyone. Social profiles and listings are rented space. A website is the one place you control, and it's where people check you out before they buy or call. A small one-page site beats nothing. A local plumber, a boutique law firm and a ceramics studio all get looked up first. If nobody's Googling you yet, build it anyway. Someone will." },
  { q: "Website vs. landing page: which one do I need?", a: "Ask who's showing up. Clicked an ad to buy one thing? Landing page. Checking you out cold, wondering if you're real? Website. Plenty of businesses use both, and if it has to be one, we'd start with the website." },
  { q: "What does Website Design & Development include?", a: "Four stages. Strategy gets you research and a sitemap. Design gets you layouts for every screen size. Build gets you a tested site. Launch gets you a final check before anything goes live. If that's too much right now, an audit makes a fine first step." },
  { q: "When is a website redesign worth it?", a: "When the site hides what's good about your business. Visitors leave fast. You apologize for the site on sales calls. Mobile feels broken, or the look stopped matching the brand. Smaller problems? A website audit might be all you need. Run that first." },
  { q: "What does a technical website audit cover?", a: "It's a checkup for your site. Speed, broken links, pages search engines can't find, how things look on a phone, accessibility, basic security. Then a ranked list, biggest problems first. Some fixes turn out small." },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Website Design & Development that gets you chosen before the call",
    description: PAGE_DESCRIPTION,
    author: { "@type": "Organization", name: "Perfect Pixel Pro" },
    publisher: { "@type": "Organization", name: "Perfect Pixel Pro", url: "https://perfectpixelpro.com" },
    mainEntityOfPage: "https://perfectpixelpro.com/website-design-and-development",
    datePublished: "2026-11-01",
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
const LogoMark = ({ className = "w-6" }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-block shrink-0 aspect-[196/179] ${className}`}
    style={{ backgroundColor: "#0d0d0d", WebkitMaskImage: `url(${logo})`, maskImage: `url(${logo})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}
  />
);
const BrowserBar = ({ hot = false }: { hot?: boolean }) => (
  <div className={`h-8 flex items-center gap-1.5 px-3 border-b ${hot ? "border-[#ffd0d0] bg-[#fff1f1]" : "border-[#ececec] bg-[#f6f6f6]"}`}>
    <span className={`w-2 h-2 rounded-full ${hot ? "bg-[#ff1616]" : "bg-[#d4d4d4]"}`} />
    <span className="w-2 h-2 rounded-full bg-[#d4d4d4]" />
    <span className="w-2 h-2 rounded-full bg-[#d4d4d4]" />
    <span className="ml-2 h-3 flex-1 max-w-[110px] rounded-full bg-white" />
  </div>
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
    <h2 id={id} className={`${h2Class} max-w-[980px]`}>{heading}</h2>
    <div className={`${bodyClass} mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 [&>p:only-child]:lg:col-span-1`}>{children}</div>
  </Reveal>
);

// ── Hero (right column): one search, three tabs, one call.
const TabStack = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  const losers = [
    { note: "Loads slowly. Says nothing.", art: <span className="w-5 h-5 rounded-full border-[3px] border-[#e2e2e2] border-t-[#9a9a9a] motion-safe:animate-spin" /> },
    {
      note: "Looks like every template.",
      art: (
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0 0 100 100M100 0 0 100" stroke="#dcdcdc" strokeWidth="1" vectorEffect="non-scaling-stroke" /></svg>
      ),
    },
  ];

  return (
    <figure className="m-0">
      <p className="sr-only">Somebody searches and opens three tabs. One loads slowly and says nothing, one looks like every template, one feels made by people who care. That one gets the call.</p>
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-5">
        {/* The search */}
        <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3" style={rise(100)}>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#9a9a9a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
          <span className="text-[15px] text-black">dry cleaner near me</span>
          <span className="w-px h-4 bg-[#ff1616] motion-safe:animate-pulse" />
          <span className="ml-auto flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1616]" />
          </span>
        </div>

        {/* Two tabs that lose */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {losers.map((l, i) => (
            <div key={l.note} className="rounded-[18px] bg-white/60 p-3" style={rise(300 + i * 150)}>
              <div className="flex items-center gap-1 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcdcdc]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#dcdcdc]" />
                <span className="ml-auto text-[10px] text-[#bdbdbd]">✕</span>
              </div>
              <div className="h-[46px] rounded-[10px] bg-[#f1f1f1] overflow-hidden flex items-center justify-center">{l.art}</div>
              <span className="mt-2 block text-[12px] md:text-[13px] leading-[1.35] text-[#9a9a9a]">{l.note}</span>
            </div>
          ))}
        </div>

        {/* The tab that wins */}
        <div className="mt-3 rounded-[22px] bg-white ring-2 ring-[#ff1616] overflow-hidden shadow-[0_30px_60px_-35px_rgba(255,22,22,0.5)]" style={rise(650)}>
          <BrowserBar hot />
          <div className="px-5 pt-4 pb-4 flex items-center justify-between gap-4">
            <div>
              <span className="block text-[26px] md:text-[28px] italic leading-[1] text-black" style={serif}>Pressed. On time.</span>
              <span className="mt-3 inline-block rounded-full bg-[#ff1616] px-4 py-1.5 text-[12px] font-semibold text-white">Book now</span>
            </div>
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#ff1616] text-white flex items-center justify-center"><Tick /></span>
          </div>
          <div className="px-5 py-3 border-t border-[#f2f2f2] flex items-center justify-between gap-3">
            <span className="text-[13px] md:text-[14px] text-[#6d6d6d]">Feels made by people who care.</span>
            <span className="flex items-center gap-2 rounded-full bg-[#0d0d0d] pl-1.5 pr-3.5 py-1.5 text-[12px] font-medium text-white whitespace-nowrap">
              <span className="relative w-6 h-6 rounded-full bg-[#ff1616] flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#ff1616] motion-safe:animate-ping opacity-30" />
                <svg viewBox="0 0 24 24" className="relative w-3 h-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" /></svg>
              </span>
              Gets the call
            </span>
          </div>
        </div>
      </div>
      <p className={`${bodyClass} mt-4`}>A fictional dry cleaner, shown three ways.</p>
    </figure>
  );
};

// ── Hero: three tabs, one call.
const ThreeTabs = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const show = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(14px)",
    transition: `opacity 600ms ease ${i * 220}ms, transform 800ms ${ease} ${i * 220}ms`,
  });

  return (
    <figure className="m-0">
      <div
        ref={ref}
        role="img"
        aria-label="Three browser tabs side by side. One is slow and empty, one is a generic template, one is clear with a booking button."
        className="rounded-[32px] bg-[#f6f6f6] p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-end"
      >
        {/* Tab 1: slow */}
        <div style={show(0)}>
          <div className="rounded-[20px] bg-white overflow-hidden ring-1 ring-[#ececec] opacity-80">
            <BrowserBar />
            <div className="h-[190px] flex flex-col items-center justify-center gap-4 px-6">
              <span className="w-10 h-10 rounded-full border-4 border-[#e5e5e5] border-t-[#9a9a9a] motion-safe:animate-spin" />
              <span className="h-2 w-3/4 rounded-full bg-[#f0f0f0]" />
              <span className="h-2 w-1/2 rounded-full bg-[#f0f0f0]" />
            </div>
          </div>
          <p className="mt-4 text-center text-[15px] text-[#9a9a9a]">Loads slowly. Says nothing.</p>
        </div>

        {/* Tab 2: template */}
        <div style={show(1)}>
          <div className="rounded-[20px] bg-white overflow-hidden ring-1 ring-[#ececec] opacity-80">
            <BrowserBar />
            <div className="h-[190px] p-4 flex flex-col gap-2.5">
              <div className="relative flex-1 rounded-[10px] bg-[#f0f0f0] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 0 100 100M100 0 0 100" stroke="#dcdcdc" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <span className="h-2 w-full rounded-full bg-[#f0f0f0]" />
              <span className="h-2 w-2/3 rounded-full bg-[#f0f0f0]" />
              <span className="h-6 w-20 rounded-full bg-[#e5e5e5]" />
            </div>
          </div>
          <p className="mt-4 text-center text-[15px] text-[#9a9a9a]">Looks like every template.</p>
        </div>

        {/* Tab 3: made with care */}
        <div style={show(2)} className="md:-translate-y-4">
          <div className="relative rounded-[20px] bg-white overflow-hidden ring-2 ring-[#ff1616] shadow-[0_40px_70px_-35px_rgba(255,22,22,0.55)]">
            <BrowserBar hot />
            <div className="h-[190px] p-5 flex flex-col">
              <span className="text-[30px] italic leading-[1] text-black" style={serif}>Pressed.<br />On time.</span>
              <span className="mt-3 h-1.5 w-3/4 rounded-full bg-[#f0f0f0]" />
              <span className="mt-auto self-start rounded-full bg-[#ff1616] px-4 py-2 text-[13px] font-semibold text-white">Book now</span>
            </div>
            <span className="absolute top-11 right-3 w-7 h-7 rounded-full bg-[#ff1616] text-white flex items-center justify-center">
              <Tick />
            </span>
          </div>
          <p className="mt-4 text-center text-[15px] font-semibold text-black">Feels made by people who care.</p>
        </div>
      </div>
      <p className={`${bodyClass} mt-5`}>Three tabs, one call. A fictional dry cleaner, shown three ways.</p>
    </figure>
  );
};

// ── 01: the boring things the best websites always do
const boring = [
  { text: "They tell you what they are right away.", icon: <><path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" /></> },
  { text: "They load fast.", icon: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6Z" /> },
  { text: "The page on your phone looks like the same company as the page on your laptop.", icon: <><rect x="3" y="5" width="13" height="10" rx="1.5" /><rect x="16" y="9" width="5" height="10" rx="1.2" /><path d="M7 19h6" /></> },
  { text: "You always know what to click next.", icon: <path d="M5 4.5 18 11l-5.5 1.5L10 18Z" /> },
];

// The same fictional dry cleaner from the hero, showing each boring thing done right.
const boringArt: ReactNode[] = [
  // Says what it is, right away.
  <div key="a" className="w-full rounded-[14px] bg-white p-4 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)] -rotate-1">
    <div className="flex items-center justify-between text-[10px] text-[#9a9a9a]">
      <span className="font-semibold text-black">Pressed.</span>
      <span>Services · Prices · Book</span>
    </div>
    <p className="mt-3 text-[19px] font-semibold leading-[1.05] tracking-[-0.03em] text-black">Dry cleaning,<br />back by Friday.</p>
    <p className="mt-1.5 text-[11px] text-[#8a8a8a]">Free pick-up across the city.</p>
  </div>,
  // Loads fast.
  <div key="b" className="w-full rounded-[14px] bg-white p-4 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)] rotate-1">
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[#ff1616]" />
      <span className="h-2 flex-1 rounded-full bg-[#f2f2f2]" />
    </div>
    <div className="mt-3 flex items-end justify-between">
      <span className="text-[34px] font-semibold leading-none tracking-[-0.05em] text-black">0.9<span className="text-[18px] text-[#9a9a9a]">s</span></span>
      <span className="rounded-full bg-[#fff1f1] px-2.5 py-1 text-[11px] font-semibold text-[#ff1616]">Page ready</span>
    </div>
    <div className="mt-3 h-1.5 rounded-full bg-[#ff1616]" />
  </div>,
  // Same company on the phone and the laptop.
  <div key="c" className="flex items-end gap-3">
    <div className="w-[118px] rounded-[10px] bg-white ring-1 ring-[#e2e2e2] p-2.5 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)]">
      <span className="block text-[8px] font-semibold text-black">Pressed.</span>
      <span className="mt-1.5 block text-[11px] font-semibold leading-[1.05] text-black">Back by Friday.</span>
      <span className="mt-2 inline-block rounded-full bg-[#ff1616] px-2 py-0.5 text-[7px] font-semibold text-white">Book</span>
    </div>
    <div className="w-[52px] h-[86px] rounded-[12px] bg-white ring-[2px] ring-[#0d0d0d] p-1.5 flex flex-col shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)]">
      <span className="text-[6px] font-semibold text-black">Pressed.</span>
      <span className="mt-1 text-[8px] font-semibold leading-[1.05] text-black">Back by Friday.</span>
      <span className="mt-auto self-start rounded-full bg-[#ff1616] px-1.5 py-0.5 text-[6px] font-semibold text-white">Book</span>
    </div>
  </div>,
  // You always know what to click next.
  <div key="d" className="relative w-full rounded-[14px] bg-white p-4 shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)] -rotate-1">
    <div className="flex gap-2 text-[10px] text-[#bdbdbd]"><span>About</span><span>FAQ</span><span>Blog</span></div>
    <span className="mt-4 inline-block rounded-full bg-[#ff1616] px-4 py-2 text-[12px] font-semibold text-white">Book a pick-up</span>
    <svg viewBox="0 0 24 24" className="absolute left-[118px] top-[58px] w-6 h-6" aria-hidden="true"><path d="M5 3.5 19 10l-6 1.7L10.5 18Z" fill="#0d0d0d" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" /></svg>
  </div>,
];

// Concrete pictures for repair, refresh and rebuild, using the dry cleaner's booking flow.
const PlanArt = ({ kind }: { kind: number }) => {
  if (kind === 0) {
    // Repair: the flow works, one step is broken, that step gets fixed.
    const steps = [
      { t: "Pick a service", ok: true },
      { t: "Choose a pick-up time", ok: false },
      { t: "Confirm", ok: true },
    ];
    return (
      <div className="w-full rounded-[16px] bg-white p-3 space-y-1.5">
        {steps.map((st) => (
          <div key={st.t} className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2 text-[13px] ${st.ok ? "text-[#6d6d6d]" : "bg-[#fff1f1] text-black"}`}>
            <span className={`w-4 h-4 shrink-0 rounded-full flex items-center justify-center text-[9px] ${st.ok ? "bg-[#ececec] text-[#9a9a9a]" : "bg-[#ff1616] text-white"}`}>{st.ok ? "✓" : "!"}</span>
            <span className={st.ok ? "" : "font-medium"}>{st.t}</span>
            {!st.ok && <span className="ml-auto text-[11px] font-semibold text-[#ff1616]">fix this</span>}
          </div>
        ))}
      </div>
    );
  }
  if (kind === 1) {
    // Refresh: same page, same order, a newer look.
    const page = (fresh: boolean) => (
      <div className={`flex-1 rounded-[12px] p-2.5 ${fresh ? "bg-white ring-2 ring-[#ff1616]" : "bg-[#e9e9e9]"}`}>
        <span className={`block text-[8px] ${fresh ? "font-semibold text-black" : "text-[#9a9a9a]"}`} style={fresh ? undefined : { fontFamily: "Georgia, serif" }}>Pressed.</span>
        <span className={`mt-1.5 block text-[11px] leading-[1.1] ${fresh ? "font-semibold text-black" : "text-[#8a8a8a]"}`} style={fresh ? undefined : { fontFamily: "Georgia, serif" }}>Back by Friday.</span>
        <span className={`mt-2 inline-block px-2 py-0.5 text-[7px] ${fresh ? "rounded-full bg-[#ff1616] font-semibold text-white" : "rounded-[2px] bg-[#cfcfcf] text-[#6d6d6d]"}`}>Book</span>
      </div>
    );
    return (
      <div className="w-full flex items-center gap-2">
        {page(false)}
        <span className="text-[#ff1616] text-[16px]">→</span>
        {page(true)}
      </div>
    );
  }
  // Rebuild: the old platform can't do what the business needs.
  return (
    <div className="w-full rounded-[16px] bg-white/[0.06] ring-1 ring-white/10 p-3 font-mono text-[11px] leading-[1.7]">
      <div className="text-white/40">old-site/</div>
      <div className="pl-3 text-white/70">bookings <span className="text-[#ff1616]">✕ not supported</span></div>
      <div className="pl-3 text-white/70">mobile <span className="text-[#ff1616]">✕ separate site</span></div>
      <div className="mt-1.5 pt-1.5 border-t border-white/10 text-white">new-site/ <span className="text-white/40">built around the booking</span></div>
    </div>
  );
};

// Repair: one broken block fixed. Refresh: same structure, new skin. Rebuild: a new layout.
const StructureGrid = ({ kind }: { kind: number }) => {
  if (kind === 2) {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-1.5 w-[96px] h-[96px]">
        <span className="col-span-3 rounded-[6px] bg-[#ff1616]" />
        <span className="row-span-2 rounded-[6px] bg-[#ff1616]" />
        <span className="col-span-2 rounded-[6px] bg-white/80" />
        <span className="rounded-[6px] bg-white/80" />
        <span className="rounded-[6px] bg-[#ff1616]" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-1.5 w-[96px]">
      {Array.from({ length: 9 }, (_, n) => {
        const fixed = kind === 0 && n === 4;
        return (
          <span
            key={n}
            className={`aspect-square rounded-[6px] ${
              kind === 1 ? "bg-white ring-2 ring-[#ff1616]" : fixed ? "bg-[#ff1616]" : "bg-white ring-1 ring-[#e2e2e2]"
            }`}
          />
        );
      })}
    </div>
  );
};

// ── 03: landing page vs website
const FormatCompare = () => (
  <figure className="m-0">
    <div role="img" aria-label="Left, a landing page with one offer, a short form and one button, no menu. Right, a full website with a menu and separate pages for services, prices, about and contact." className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {/* Landing page: one offer, one action, no menu */}
      <div className="rounded-[28px] bg-white p-5 md:p-7 flex flex-col">
        <span className="self-start rounded-full bg-[#fff1f1] px-3.5 py-1 text-[12px] font-medium text-[#ff1616]">Landing page</span>
        <div className="mt-5 flex-1 rounded-[18px] bg-white overflow-hidden ring-1 ring-[#ececec] shadow-[0_24px_50px_-35px_rgba(0,0,0,0.35)]">
          <BrowserBar />
          <div className="p-5 md:p-6">
            <span className="text-[11px] font-semibold text-black">Pressed.</span>
            <p className="mt-4 text-[26px] md:text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black">Clean shirts.<br />Back Friday.</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <span className="rounded-[10px] ring-1 ring-[#e5e5e5] px-3 py-2 text-[12px] text-[#9a9a9a]">Your address</span>
              <span className="rounded-[10px] ring-1 ring-[#e5e5e5] px-3 py-2 text-[12px] text-[#9a9a9a]">Pick-up day</span>
            </div>
            <span className="mt-3 block rounded-[10px] bg-[#ff1616] px-4 py-2.5 text-center text-[13px] font-semibold text-white">Book a pickup</span>
          </div>
        </div>
        <p className="mt-4 text-[15px] font-semibold text-black">One offer. One action.</p>
      </div>

      {/* Website: a menu and the pages a buyer checks */}
      <div className="rounded-[28px] bg-[#0d0d0d] p-5 md:p-7 text-white flex flex-col">
        <span className="self-start rounded-full bg-white/10 px-3.5 py-1 text-[12px] font-medium text-white">Website</span>
        <div className="mt-5 flex-1 rounded-[18px] bg-white text-black overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-3 border-b border-[#f0f0f0] text-[12px]">
            <span className="font-semibold">Pressed.</span>
            <span className="ml-auto flex gap-3 text-[#6d6d6d]"><span>Services</span><span>Prices</span><span>About</span><span>Contact</span></span>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2.5">
            {[
              { t: "Services", lines: ["Shirts", "Suits", "Alterations"] },
              { t: "Prices", lines: ["Shirt  $4", "Suit  $18", "Dress  $14"] },
              { t: "About", lines: ["Since 1998", "Family run"] },
              { t: "Contact", lines: ["Mon to Sat", "Call or text"] },
            ].map((pg) => (
              <div key={pg.t} className="rounded-[12px] bg-[#f6f6f6] p-3">
                <span className="block text-[12px] font-semibold text-black">{pg.t}</span>
                {pg.lines.map((l) => (
                  <span key={l} className="mt-1 block text-[11px] text-[#8a8a8a] whitespace-pre">{l}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-[15px] font-semibold">Everything a buyer checks.</p>
      </div>
    </div>
    <p className={`${bodyClass} mt-5`}>One job versus a whole conversation. Fictional dry cleaner.</p>
  </figure>
);

// ── 04: two menus
const MenuCompare = () => (
  <figure className="m-0">
    <div role="img" aria-label="Two menu bars. The first has six vague labels and a hamburger icon. The second has four plain labels and one button." className="rounded-[32px] bg-[#f6f6f6] p-5 md:p-10 space-y-8 overflow-x-auto">
      <div className="min-w-[560px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-[#ff1616] text-white flex items-center justify-center text-[12px]">✕</span>
          <span className="text-[14px] font-semibold text-[#ff1616]">Don't</span>
        </div>
        <div className="rounded-[16px] bg-white ring-1 ring-[#ffd0d0] px-5 py-4 flex items-center gap-6 text-[15px] text-[#6d6d6d]">
          {["Offerings", "Journeys", "Ecosystem", "Learn", "Hub", "More"].map((l) => <span key={l}>{l}</span>)}
          <span className="ml-auto flex flex-col gap-1">
            <i className="block w-6 h-0.5 bg-[#6d6d6d]" /><i className="block w-6 h-0.5 bg-[#6d6d6d]" /><i className="block w-6 h-0.5 bg-[#6d6d6d]" />
          </span>
        </div>
        <p className="mt-3 text-[15px] text-[#6d6d6d]">Six clever labels. Zero clues.</p>
      </div>
      <div className="min-w-[560px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center"><Tick className="w-3 h-3" /></span>
          <span className="text-[14px] font-semibold text-black">Do</span>
        </div>
        <div className="rounded-[16px] bg-white ring-2 ring-[#0d0d0d] px-5 py-3.5 flex items-center gap-7 text-[15px] font-medium text-black shadow-[0_24px_50px_-35px_rgba(0,0,0,0.35)]">
          <LogoMark className="w-6" />
          {["Services", "Work", "About", "Contact"].map((l) => <span key={l}>{l}</span>)}
          <span className="ml-auto rounded-full bg-[#ff1616] px-4 py-2 text-[13px] font-semibold text-white">Get a quote</span>
        </div>
        <p className="mt-3 text-[15px] font-semibold text-black">Four plain words. One clear button.</p>
      </div>
    </div>
    <p className={`${bodyClass} mt-5`}>Same fictional dry cleaner, two menus.</p>
  </figure>
);

// ── 06: mobile-first, and the checks nobody sees
const MobileFirst = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const grow = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "scale(0.92)",
    transition: `opacity 600ms ease ${i * 260}ms, transform 800ms ${ease} ${i * 260}ms`,
  });
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-4 md:gap-5">
      <div aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-10 flex items-end justify-center gap-4 md:gap-6 min-h-[300px]">
        {[
          { w: 70, h: 130, label: "Phone first", hot: true },
          { w: 120, h: 160, label: "Then tablet" },
          { w: 220, h: 150, label: "Then desktop" },
        ].map((d, i) => (
          <div key={d.label} className="flex flex-col items-center gap-3" style={grow(i)}>
            <div
              className={`rounded-[14px] bg-white flex flex-col p-2 gap-1.5 ${d.hot ? "ring-2 ring-[#ff1616] shadow-[0_20px_40px_-20px_rgba(255,22,22,0.6)]" : "ring-1 ring-[#e2e2e2]"}`}
              style={{ width: d.w, height: d.h }}
            >
              <span className={`h-2 w-1/2 rounded-full ${d.hot ? "bg-[#ff1616]" : "bg-[#e5e5e5]"}`} />
              <span className="flex-1 rounded-[8px] bg-[#f6f6f6]" />
              <span className="h-1.5 w-full rounded-full bg-[#f0f0f0]" />
              <span className="h-1.5 w-2/3 rounded-full bg-[#f0f0f0]" />
            </div>
            <span className={`text-[13px] ${d.hot ? "font-semibold text-[#ff1616]" : "text-[#6d6d6d]"}`}>{d.label}</span>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="rounded-[32px] bg-[#0d0d0d] text-white p-6 md:p-8 flex flex-col justify-center gap-3">
        {[
          { text: "Keyboard only", icon: <><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 11h.01M11 11h.01M15 11h.01M8 14h8" /></> },
          { text: "Screen reader", icon: <><path d="M5 9v6h3l5 4V5L8 9Z" /><path d="M16.5 9.5a3.5 3.5 0 0 1 0 5" /></> },
          { text: "One bar of signal", icon: <><path d="M5 19v-2" /><path d="M10 19v-5" strokeOpacity=".3" /><path d="M15 19v-8" strokeOpacity=".3" /><path d="M20 19V8" strokeOpacity=".3" /></> },
        ].map((c, i) => (
          <div
            key={c.text}
            className="flex items-center gap-3 rounded-[16px] bg-white/[0.06] px-4 py-3.5"
            style={{ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${800 + i * 200}ms` }}
          >
            <span className="w-9 h-9 rounded-full bg-[#ff1616] flex items-center justify-center"><Icon className="w-5 h-5">{c.icon}</Icon></span>
            <span className="text-[15px] font-medium">{c.text}</span>
            <span className="ml-auto text-[#ff1616]"><Tick className="w-4 h-4" /></span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── 07: what each audit looks at
const auditLists = [
  {
    name: "Website audit",
    note: "A few plain things",
    dark: false,
    head: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>,
    items: [
      { label: "Message", icon: <path d="M4.5 5.5h15v10h-9l-4.5 3.5v-3.5H4.5Z" /> },
      { label: "Pages", icon: <><path d="M6 3.5h9l3 3v14H6Z" /><path d="M9 11h6M9 14.5h6" /></> },
      { label: "Navigation", icon: <><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></> },
      { label: "Path to contact", icon: <path d="M6.5 4h3l1.5 4-2 1.5a10 10 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 6a2 2 0 0 1 2-2Z" /> },
    ],
  },
  {
    name: "Technical audit",
    note: "Under the hood",
    dark: true,
    head: <><path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-2.5Z" /></>,
    items: [
      { label: "Speed", icon: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6Z" /> },
      { label: "Mobile behavior", icon: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></> },
      { label: "Broken links", icon: <><path d="M9.5 14.5 7 17a3 3 0 0 1-4-4l2.5-2.5M14.5 9.5 17 7a3 3 0 0 1 4 4l-2.5 2.5" /><path d="M9 6V4M6 9H4M15 18v2M18 15h2" /></> },
      { label: "Indexing", icon: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2M8.5 11h5" /></> },
      { label: "Accessibility", icon: <><circle cx="12" cy="5" r="1.8" /><path d="M5 9h14M12 9v5M9 21l3-7 3 7" /></> },
      { label: "Security basics", icon: <><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></> },
    ],
  },
];

const AuditLists = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  return (
    <figure className="m-0">
      <div
        ref={ref}
        role="img"
        aria-label="Two checklists. A website audit covers message, pages, navigation and path to contact. A technical website audit covers speed, mobile, links, indexing, access and security."
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5"
      >
        {auditLists.map((l, li) => (
          <div key={l.name} className={`rounded-[32px] p-6 md:p-9 flex flex-col ${l.dark ? "bg-[#0d0d0d] text-white" : "bg-white text-black"}`}>
            <div className="flex items-center gap-4">
              <span className={`w-14 h-14 rounded-full flex items-center justify-center ${l.dark ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616]"}`}>
                <Icon className="w-6 h-6">{l.head}</Icon>
              </span>
              <div>
                <p className="text-[22px] md:text-[26px] font-semibold leading-[1.1] tracking-[-0.03em]">{l.name}</p>
                <p className={`mt-1 text-[18px] md:text-[20px] leading-none ${l.dark ? "text-[#ff1616]" : "text-[#ff1616]"}`}>{l.note}</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2.5 flex-1 content-start">
              {l.items.map((it, i) => (
                <div
                  key={it.label}
                  className={`flex items-center gap-3 rounded-[16px] px-4 py-4 ${l.dark ? "bg-white/[0.06]" : "bg-[#f6f6f6]"} ${l.items.length === 4 ? "min-h-[92px]" : "min-h-[60px]"}`}
                  style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)", transition: `opacity 500ms ease ${li * 300 + i * 120}ms, transform 700ms ${ease} ${li * 300 + i * 120}ms` }}
                >
                  <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${l.dark ? "bg-white/10 text-white" : "bg-white text-[#ff1616]"}`}>
                    <Icon className="w-[18px] h-[18px]">{it.icon}</Icon>
                  </span>
                  <span className="text-[15px] md:text-[16px] font-medium leading-[1.25]">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="mt-4 md:mt-5 rounded-[24px] bg-white p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="px-2 text-[13px] text-[#9a9a9a]">Then the answer:</span>
        <span className="flex-1 flex items-center gap-3 rounded-[16px] bg-[#f6f6f6] px-5 py-3.5">
          <span className="w-7 h-7 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center"><Tick className="w-3 h-3" /></span>
          <span className="text-[15px] md:text-[16px] font-semibold text-black">Fix three things and keep going</span>
        </span>
        <span className="text-[13px] text-[#9a9a9a] text-center">or</span>
        <span className="flex-1 flex items-center gap-3 rounded-[16px] bg-[#fff1f1] px-5 py-3.5">
          <span className="w-7 h-7 rounded-full bg-[#ff1616] text-white flex items-center justify-center">
            <Icon className="w-3.5 h-3.5"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" /></Icon>
          </span>
          <span className="text-[15px] md:text-[16px] font-semibold text-black">Start over</span>
        </span>
      </div>
    </figure>
  );
};

const deliverables = [
  { text: "A plain-English strategy, with a sitemap to match.", icon: <><path d="M5 4.5h11l3 3v12H5Z" /><path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" /></> },
  { text: "Mockups for desktop and mobile that you sign off on first.", icon: <><rect x="3" y="5" width="13" height="10" rx="1.5" /><rect x="16" y="9" width="5" height="10" rx="1.2" /></> },
  { text: "A built and tested site on a clean foundation.", icon: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></> },
  { text: "Copy structure that steers visitors toward one clear action.", icon: <path d="M5 4.5 18 11l-5.5 1.5L10 18Z" /> },
  { text: "An audit summary and a launch checklist.", icon: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="m9 12 2 2 4-4" /></> },
];

const WebsiteDesignDevelopment = () => {
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
                <HeroTitleLines line="Website Design" italic="&" rest="Development" plainItalic compact />
              </h1>
              <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
                That gets you chosen{" "}
                <span className="text-[#ff1616]" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                  before the call.
                </span>
              </p>
              <p className={`${bodyClass} mt-6 max-w-[580px]`}>
                Somebody searches for what you do. They open three tabs. One loads slowly and says nothing. One looks like every template ever sold. One feels like it was made by people who care. Guess who gets the call. That's the job of <span className="whitespace-nowrap">Website Design &amp; Development</span>. Not pages and plugins. A first impression that holds up on a phone, on a weak connection, late at night.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <TabStack />
            </Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24 max-w-[900px]">
            <p className={bodyClass}>
              Perfect Pixel Pro is a brand design and marketing agency. Who do we build for? Founders and marketing leads with a business that's better than its website looks. You know the type. Maybe you're one. That gap costs more than people like to admit, honestly. We handle{" "}
              <Link to="/website-design" className={inlineLink}>website design</Link> and <Link to="/website-development" className={inlineLink}>website development</Link> together, so nothing gets lost between the mockup and the live page.
            </p>
          </Reveal>
        </section>

        {/* ── THE STANDARD ── */}
        <section aria-labelledby="standard-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="standard-heading" heading={<SplitHeading line="What the Best Websites" italic="get" rest="right" />}>
              <p>Bigger doesn't mean better. A site can rank among the top websites in the world just because millions of people already use the product, whether or not the design is any good. Your site has a different job. It has to convince one specific person that you're a safe bet.</p>
              <p>So what do the Best Websites do well, at any size? Mostly boring things, done every single time. They tell you what they are right away. They load fast. The page on your phone looks like the same company as the page on your laptop, and you always know what to click next. That's it. It's just hard to keep up for years.</p>
            </SectionHead>
            <div aria-hidden="true" className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {boring.map((b, i) => (
                <Reveal key={b.text} delay={i * 120}>
                  <div className="group h-full rounded-[28px] bg-white p-5 md:p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <div className="h-[170px] rounded-[20px] bg-[#f6f6f6] flex items-center justify-center px-5 transition-transform duration-500 [&>*]:transition-transform [&>*]:duration-500 group-hover:[&>*]:rotate-0">{boringArt[i]}</div>
                    <p className="mt-6 text-[18px] md:text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-black">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <TestLine>Cover the logo. Could a stranger still tell what you do?</TestLine>
          </div>
        </section>

        {/* ── ALREADY HAVE A SITE ── */}
        <section aria-labelledby="plan-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="plan-heading" heading={<SplitHeading line="Keep what" italic="earns" rest="its place." />}>
            <p>A website redesign shouldn't erase what customers already find useful. A website audit reviews the story, navigation and key tasks. A technical website audit checks crawlability, loading behavior, redirects and implementation issues.</p>
            <p>
              The findings should tell us whether to repair a few broken moments, refresh the experience or rebuild the structure. Changing the colors won't fix a confusing offer. Either way, a website design strategy comes first, and our{" "}
              <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> team can help if the brand needs work too.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { name: "Repair", body: "The structure works. Specific steps fail.", level: 1 },
              { name: "Refresh", body: "The offer holds. The experience has fallen behind.", level: 2 },
              { name: "Rebuild", body: "The platform or structure blocks the business.", level: 3 },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <article className={`h-full rounded-[28px] p-6 md:p-8 flex flex-col min-h-[260px] ${i === 2 ? "bg-[#0d0d0d] text-white" : "bg-[#f6f6f6] text-black"}`}>
                  <div aria-hidden="true" className="min-h-[132px] flex items-center">
                    <PlanArt kind={i} />
                  </div>
                  <h3 className="mt-auto pt-8 text-[30px] md:text-[38px] font-semibold leading-[1.05] tracking-[-0.035em]">{r.name}</h3>
                  <p className={`mt-3 text-[15px] md:text-[17px] leading-[1.6] font-light ${i === 2 ? "text-[#bdbdbd]" : "text-[#6d6d6d]"}`}>{r.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── THE FORMAT ── */}
        <section aria-labelledby="format-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="format-heading" heading={<SplitHeading line="Website vs. landing page:" italic="pick" rest="the job first" />}>
              <p>Folks mix these up, and fair enough, they look alike from the outside. Imagine a dry cleaner running a spring promotion. The promotion gets a landing page: one offer, one button, done. Then a neighbor who's never used them wants to check them out before dropping off a wedding dress. That neighbor needs a website.</p>
              <p>Running one campaign next month? A landing page might be plenty. Getting Googled by people who've never heard of you? That's a website. Most businesses end up wanting both, and the pair should look related. A visitor who clicks from the promotion to the website shouldn't feel like they changed companies.</p>
            </SectionHead>
            <Reveal delay={120} className="mt-14 md:mt-20">
              <FormatCompare />
            </Reveal>
            <TestLine>Would you hand a stranger your credit card after one look at this page?</TestLine>
          </div>
        </section>

        {/* ── THE MENU ── */}
        <section aria-labelledby="menu-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="menu-heading" heading={<SplitHeading line="Website navigation best practices start" italic="with" rest="fewer choices" />}>
            <p>Menus are where good sites go to die. Eleven links. Clever labels. A hamburger icon on a desktop screen. Visitors don't explore. They scan, guess and leave.</p>
            <p>None of this is clever, and that's the point. A short menu. Names a customer would actually use. Contact one tap away, always. The logo takes you home. Then try the whole site on a phone with one thumb. Annoying? Fix it.</p>
          </SectionHead>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <MenuCompare />
          </Reveal>
          <TestLine>Ask someone to find your prices. Watch where they tap first.</TestLine>
        </section>

        {/* ── THE WORDS ── */}
        <section aria-labelledby="words-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="words-heading" heading={<SplitHeading line="Write content that converts" italic="by" rest="sounding like a person" />}>
              <p>Cute headlines lose to clear ones, every time. Say what you do, who you do it for and where to click next. Then add one real result instead of five adjectives.</p>
              <p>Most business sites talk about the business. The good ones talk about the visitor's problem. Read your homepage out loud. Hear an annual report? You know what to do. And the button? Name it after what actually happens when somebody clicks.</p>
            </SectionHead>
            <Reveal delay={120} className="mt-14 md:mt-20">
              <div aria-hidden="true" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["What you do", "Who you do it for", "Where to click next"].map((t, i) => (
                  <div key={t} className={`rounded-[24px] p-6 flex items-center gap-4 ${i === 2 ? "bg-[#0d0d0d] text-white" : "bg-white text-black"}`}>
                    <span className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${i === 2 ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616]"}`}><Tick className="w-4 h-4" /></span>
                    <span className="text-[18px] font-semibold tracking-[-0.02em]">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <TestLine>Read your first screen to a friend. Watch their face.</TestLine>
          </div>
        </section>

        {/* ── THE BUILD ── */}
        <section aria-labelledby="build-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="build-heading" heading={<SplitHeading line="The web development best practices" italic="you'll" rest="never see" />}>
            <p>Nobody applauds a page that loads fast. They only notice when it doesn't. Can you get through the site using only a keyboard? Will a screen reader make any sense of it? Does it hold up on a cracked phone with one bar of signal? Skip web development best practices and visitors feel it, like a restaurant with sticky menus. Nobody says why. They leave.</p>
          </SectionHead>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <MobileFirst />
          </Reveal>
          <Reveal className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
            <p className={bodyClass}>
              Our responsive website design services start on the smallest screen, which is the hardest one, and grow up from there. Squeezing a desktop layout onto a phone afterward never works. You end up pinching and zooming at a price list, and nobody enjoys that. Interaction work goes through our{" "}
              <Link to="/ui-ux-design" className={inlineLink}>UI/UX design</Link> team.
            </p>
            <p className={bodyClass}>
              Two terms get oversold. Take interactive websites. Done well, they feel alive. Done badly, a toy. We use motion to explain, not to show off. And premium websites aren't ornate. They're restrained. Space, type, one strong image, nothing extra. That's what bespoke website design really means. Nothing's on the page by default.
            </p>
          </Reveal>
          <TestLine>Open it on an old phone with bad signal. Does it still feel good?</TestLine>
        </section>

        {/* ── THE CHECK ── */}
        <section aria-labelledby="check-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="check-heading" heading={<SplitHeading line="Start with a website audit," italic="not" rest="a website redesign" />}>
              <p>Before a single pixel moves, we go through what's already there. A website audit asks a few plain things. Is the message clear? Do the pages help? Can people find their way around and get from first visit to first call? It also shows you what's working, which is usually more than you'd think.</p>
              <p>
                Then a technical website audit goes under the hood. Speed. Mobile behavior. Broken links. Search indexing. Accessibility. Security basics. Most of it you'll never see. You'd notice fast if it broke, though. Sometimes the answer is fix three things and keep going. Sometimes it's start over. Better to find out before you pay for a full website redesign. And if the findings are about search, our{" "}
                <Link to="/seo-services" className={inlineLink}>SEO services</Link> team can take it from there.
              </p>
            </SectionHead>
            <Reveal delay={120} className="mt-14 md:mt-20">
              <AuditLists />
            </Reveal>
            <TestLine>Can you name the three things holding your site back?</TestLine>
          </div>
        </section>

        {/* ── THE FIT ── */}
        <section aria-labelledby="fit-heading" className={`${container} ${sectionY}`}>
          <SectionHead id="fit-heading" heading={<SplitHeading line="Who this is for," italic="and" rest="what you get" />}>
            <p>You've got a good business and a site that undersells it. Maybe you're a founder. Maybe you run marketing. You've outgrown the old look, and part of you already knows it. A template won't fix that. A partner might.</p>
            <p>Quick gut check. Need a page live by Friday and the design barely matters? A template will do, honestly. We're built for the other case. Here's what you'd have in hand by launch.</p>
          </SectionHead>
          <ul className="mt-14 md:mt-20 list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {deliverables.map((d, i) => (
              <li key={d.text}>
                <Reveal delay={i * 100} className="h-full">
                  <div className={`h-full rounded-[24px] p-6 flex flex-col gap-6 min-h-[220px] ${i === deliverables.length - 1 ? "bg-[#0d0d0d] text-white" : "bg-[#f6f6f6] text-black"}`}>
                    <span className={`w-11 h-11 rounded-full flex items-center justify-center ${i === deliverables.length - 1 ? "bg-[#ff1616] text-white" : "bg-white text-[#ff1616]"}`}><Icon>{d.icon}</Icon></span>
                    <p className="mt-auto text-[16px] font-semibold leading-[1.4] tracking-[-0.01em]">{d.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <TestLine>Does your site look like the business you actually run?</TestLine>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Questions people" italic="ask" rest="before they start" />}
          aside={
            <p className="mt-8 pt-6 border-t border-[#dcdcdc] text-[14px] leading-[1.7] text-[#6d6d6d] max-w-[360px]">
              Sources for the top websites answer:{" "}
              <a href="https://www.similarweb.com/top-websites/" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 hover:text-[#ff1616]">Similarweb Top Websites Ranking</a> and{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_most-visited_websites" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 hover:text-[#ff1616]">Wikipedia, List of most-visited websites</a>, 2026 editions.
            </p>
          }
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto max-w-[1200px] text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-semibold leading-[1.1] tracking-[-0.04em] text-black">
                <SplitHeading line="Website Design & Development" italic="that" rest="makes the first click count." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[780px]`}>
                Your site can look as good as your business is. Talk to us about <span className="whitespace-nowrap">Website Design &amp; Development</span>, or ask for an audit first if that's easier. Either way you'll walk away knowing what to change. Read more on{" "}
                <Link to="/website-design" className={inlineLink}>website design</Link> and <Link to="/website-development" className={inlineLink}>website development</Link>, or{" "}
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

export default WebsiteDesignDevelopment;
