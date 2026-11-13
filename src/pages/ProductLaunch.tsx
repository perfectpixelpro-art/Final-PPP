import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass,
  Accent, HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, CountUp, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, subServiceBreadcrumbSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
// Inline links follow this page's accent rather than the site red.
const plLink = "underline decoration-[#909396] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#6d7174]";

const PAGE_TITLE = "Product Launch Planning: A Week-by-Week Runway | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product Launch planning for teams with a good product: real launch failures, where launch traffic comes from, and a week-by-week runway from feasibility to release.";

const sourceLink = "text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6d7174] whitespace-nowrap hover:underline underline-offset-4";

const failures = [
  {
    meta: "2006 / MICROSOFT",
    name: "The Zune",
    body: "The iPod had been out about five years when the Zune showed up. Bigger screen. Wireless sharing. Reviewers shrugged and called it decent. Later, former Microsoft executive Robbie Bach admitted they were late and never told music fans why they should switch.",
    source: "https://www.slashgear.com/897027/what-really-happened-to-microsofts-zune",
    lesson: "Decent doesn't make anyone switch. They need a reason.",
  },
  {
    meta: "2020 / $1.75 BILLION RAISED",
    name: "Quibi",
    body: "Quibi launched in April 2020 and was finished by October. Jeffrey Katzenberg blamed the pandemic. He also admitted that people were asked to pay before they knew what the service was.",
    source: "https://www.cnbc.com/2020/10/22/quibi-co-founders-katzenberg-whitman-explain-what-went-wrong.html",
    lesson: "Let people see it before you charge.",
  },
];

const trafficStories = [
  {
    label: "DROPBOX / 2007",
    big: "3",
    unit: "min",
    body: "Around 2007, Drew Houston posted a three-minute demo on Hacker News. One write-up says the waiting list grew about fifteenfold in a day. That's secondhand, so take it as roughly right. The full launch didn't come until September 2008.",
    source: "https://www.alexanderjarvis.com/dropbox-doing-things-that-dont-scale/",
  },
  {
    label: "DOLLAR SHAVE CLUB / 2012",
    big: "12,000",
    unit: "orders",
    body: "In March 2012 a YouTube video starring CEO Michael Dubin brought in 12,000 orders in two days. Unilever later bought the company. Reportedly for a billion dollars.",
    source: "https://en.wikipedia.org/wiki/Dollar_Shave_Club",
  },
];

const runway = [
  {
    t: "T-12",
    unit: "WEEKS",
    title: "Product feasibility",
    body: (
      <>
        Make it, sell it, support it. Can you do all three at a price people will pay? Start with what one unit really costs, shipping included. Finding a loss on a spreadsheet is cheaper than finding it in a one-star review. The research and pricing work lives in{" "}
        <Link to="/pre-product-assistance" className={plLink}>Pre-Product Assistance</Link>.
      </>
    ),
  },
  {
    t: "T-10",
    unit: "WEEKS",
    title: "Target market analysis",
    body: <>Try describing your buyer in one sentence. A specific one. Busy people doesn't count. Talk to eight of them, honestly. You'll learn more than any report will tell you, including where they already pay attention.</>,
  },
  {
    t: "T-8",
    unit: "WEEKS",
    title: "Product Positioning",
    body: (
      <>
        One line. A person and a problem. If it takes two sentences, keep cutting. This is where{" "}
        brand strategy and launch work meet, and we don't try to pull them apart.
      </>
    ),
  },
  {
    t: "T-4",
    unit: "WEEKS",
    title: "Product Soft launch",
    body: <>Sell to fifty or a hundred friendly buyers first. Watch where they stall on the page. Notice which question lands in every inbox, and who flinches at the price. Fix those things now. It's cheap today and costly later.</>,
  },
  {
    t: "T-0",
    unit: "RELEASE DAY",
    title: "Product release and Product Introduction",
    body: <>It's live. Anyone who finds it can buy it. A stranger sees three things: the top of the page, the first line of the email, the caption on the first photo. That's your Product Introduction. We write it apart from the product description. A stranger wants to know what this is. A customer wants to know if it fits.</>,
    highlight: true,
  },
  {
    t: "T+4",
    unit: "WEEKS",
    title: "Product Establishing",
    body: (
      <>
        Reviews come in. The first complaints need answers. A few weeks on, the product stops being new and starts being compared. That's the handoff to{" "}
        <Link to="/product-sales" className={plLink}>Product Sales</Link>, where the questions turn to price, stock and case sizes.
      </>
    ),
  },
];

const faqs: Faq[] = [
  {
    q: "How to price a new product?",
    a: "Price from two numbers. Your floor is what it costs to make, pack and ship one unit. Your ceiling? What buyers already pay for something close. Pick two prices in between and show each to a small group at the soft launch. Keep the one people stop arguing about.",
  },
  {
    q: "How long should launch planning take?",
    a: "Two to three months for a small team. Under four weeks gets cramped. And the month after release needs room on the calendar too. Count back from release day: feasibility at twelve weeks, positioning at eight, soft launch at four.",
  },
  {
    q: "What is a Product Soft launch?",
    a: "A Product Soft launch is a limited release to fifty or a hundred friendly buyers before the public one. You watch where they stall, which questions keep coming and how they react to the price. Then you fix those before release day.",
  },
  {
    q: "Do I need a Product launch event?",
    a: "Not always. A clear page, a good email and some real customer stories can do the job alone. A product launch event makes sense when people need to handle the thing, or when you want press. Ask whether your buyer would give up an evening for it. If you run one, treat it as a moment in the launch. It isn't the launch.",
  },
];

const sources = [
  { label: "SlashGear, What really happened to Microsoft's Zune", href: "https://www.slashgear.com/897027/what-really-happened-to-microsofts-zune" },
  { label: "CNBC, Quibi co-founders explain what went wrong", href: "https://www.cnbc.com/2020/10/22/quibi-co-founders-katzenberg-whitman-explain-what-went-wrong.html" },
  { label: "Adweek, Why Quibi failed", href: "https://www.adweek.com/tv-video/why-quibi-failed-5-reasons-short-form-streamer-shutting-down/" },
  { label: "Alexander Jarvis, Dropbox doing things that don't scale", href: "https://www.alexanderjarvis.com/dropbox-doing-things-that-dont-scale/" },
  { label: "Wikipedia, Dollar Shave Club", href: "https://en.wikipedia.org/wiki/Dollar_Shave_Club" },
];

const structuredData = [
  articleSchema("Product Launch that outlasts launch week", PAGE_DESCRIPTION),
  faqSchema(faqs),
  subServiceBreadcrumbSchema("Product Launch", "/product-launch"),
];

const ease = "cubic-bezier(.2,.7,.2,1)";
const stemXs = [
  { x: 110, top: 190 },
  { x: 330, top: 170 },
  { x: 550, top: 140 },
  { x: 770, top: 20 },
  { x: 990, top: 150 },
];

// The runway graphic draws itself in when it scrolls into view.
// Hero (right column): the launch plan as a working doc, counted backwards to release day.
const LaunchPlan = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(8px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  return (
    <figure className="m-0">
      <p className="sr-only">A launch plan counted backwards from release day: from twelve weeks out, when only the team knows about the product, to release day and the weeks after, when the right people can find it, understand it and buy it.</p>
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-6">
        <div className="rounded-[22px] bg-white overflow-hidden">
          <div className="px-5 md:px-6 pt-5 pb-4 border-b border-[#f0f0f0] flex items-start justify-between gap-4">
            <div>
              <span className="block text-[12px] text-[#9a9a9a]">Launch plan</span>
              <span className="mt-1 block text-[20px] md:text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Counted backwards</span>
            </div>
            <span className="shrink-0 rounded-full bg-[#fff1f1] px-2.5 py-1 text-[12px] font-medium text-[#6d7174]">Release day: T-0</span>
          </div>

          <div className="px-5 md:px-6 pt-4 text-[12px] text-[#9a9a9a]" style={rise(150)}>“only we know about it”</div>
          <ol className="relative list-none m-0 px-3 md:px-4 py-2">
            <span aria-hidden="true" className="absolute left-[28px] md:left-[32px] top-6 bottom-6 w-px bg-[#ececec]" />
            {runway.map((r, i) => {
              const hot = Boolean(r.highlight);
              const released = runway.findIndex((x) => x.highlight);
              const before = i < released;
              return (
                <li
                  key={r.t}
                  className={`relative flex items-center gap-3.5 rounded-[12px] pl-2.5 pr-3 py-2.5 ${hot ? "bg-[#ff1616] text-white" : ""}`}
                  style={rise(250 + i * 110)}
                >
                  <span aria-hidden="true" className="w-3 shrink-0 flex justify-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ring-2 ${
                        hot ? "bg-white ring-white" : before ? "bg-[#0d0d0d] ring-[#0d0d0d]" : "bg-white ring-[#d4d4d4]"
                      }`}
                    />
                  </span>
                  <span className={`w-10 shrink-0 font-mono text-[12px] tabular-nums ${hot ? "text-white/80" : "text-[#9a9a9a]"}`}>{r.t}</span>
                  <span className={`flex-1 text-[14px] md:text-[15px] ${hot ? "font-semibold" : before ? "text-black" : "text-[#9a9a9a]"}`}>{r.title}</span>
                </li>
              );
            })}
          </ol>
          <div className="px-5 md:px-6 py-4 bg-[#fafafa] border-t border-[#f0f0f0] text-[13px] text-[#6d6d6d]" style={rise(1000)}>
            “the right people can find it, understand it and buy it.”
          </div>
        </div>
      </div>
    </figure>
  );
};

const RunwayChart = () => {
  const { ref, visible } = useInView<SVGSVGElement>(0.3);

  const grow = (i: number): CSSProperties => ({
    transform: visible ? "scaleY(1)" : "scaleY(0)",
    transformBox: "fill-box",
    transformOrigin: "bottom",
    transition: `transform 900ms ${ease} ${200 + i * 140}ms`,
  });
  const fade = (delay: number): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 700ms ease ${delay}ms`,
  });

  return (
    <svg ref={ref} className="block w-full min-w-[680px] h-auto" viewBox="0 0 1200 300" role="img" aria-labelledby="rw-t rw-d" xmlns="http://www.w3.org/2000/svg">
      <title id="rw-t">A launch runway counted in weeks</title>
      <desc id="rw-d">Five markers on a line, T minus 12, T minus 8, T minus 4, T zero and T plus 4. The stems grow taller toward release day, where a red marker and a flag sit.</desc>
      <defs>
        <clipPath id="rw-sweep">
          <rect
            x="0" y="0" width="1200" height="300"
            style={{ transform: visible ? "scaleX(1)" : "scaleX(0)", transformBox: "fill-box", transformOrigin: "left", transition: `transform 1800ms ${ease} 500ms` }}
          />
        </clipPath>
      </defs>

      <path d="M30 220H1170" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path clipPath="url(#rw-sweep)" d="M80 150C300 110 540 120 700 100S900 60 1000 80" stroke={RED} strokeWidth="1.6" strokeDasharray="3 9" strokeLinecap="round" fill="none" />

      {stemXs.map((s, i) => (
        <path
          key={s.x}
          d={`M${s.x} 220V${s.top}`}
          stroke={s.x === 770 ? RED : INK}
          strokeWidth={s.x === 770 ? 2 : 1.6}
          strokeLinecap="round"
          fill="none"
          style={grow(i)}
        />
      ))}

      <path
        d="M770 20 836 38 770 56Z"
        fill={RED}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateX(-14px)",
          transition: `opacity 600ms ease 1200ms, transform 800ms ${ease} 1200ms`,
        }}
      />
      <circle cx="770" cy="220" r="9" fill={RED} style={fade(900)} />
      <g fill={INK}>
        {stemXs.filter((s) => s.x !== 770).map((s, i) => (
          <circle key={s.x} cx={s.x} cy={s.top} r="5" style={fade(700 + i * 140)} />
        ))}
      </g>

      <g fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="24" fontWeight="600" textAnchor="middle" fill={INK} letterSpacing="-0.5">
        <text x="110" y="260">T-12</text>
        <text x="330" y="260">T-8</text>
        <text x="550" y="260">T-4</text>
        <text x="770" y="260" fill="#909396">T-0</text>
        <text x="990" y="260">T+4</text>
      </g>
      <g fontFamily="BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" fontSize="13" fontWeight="500" textAnchor="middle" fill="#9a9a9a" letterSpacing="2.5">
        <text x="110" y="288">WEEKS</text>
        <text x="770" y="288">RELEASE DAY</text>
      </g>
    </svg>
  );
};

// Runway stops on a rail that fills red as you scroll; each dot lights up once reached.
const RunwayRail = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    if (prefersReducedMotion()) {
      setFill(list.offsetHeight);
      setReached(runway.length - 1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const line = Math.min(Math.max(window.innerHeight * 0.6 - rect.top, 0), rect.height);
      setFill(line);
      let last = -1;
      Array.from(list.children).forEach((li, i) => {
        if ((li as HTMLElement).offsetTop + 60 <= line) last = i;
      });
      setReached(last);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative mt-16 md:mt-24">
      <div aria-hidden="true" className="absolute left-[5px] top-0 bottom-0 w-px bg-[#e5e5e5]">
        <div className="w-full bg-[#ff1616] transition-[height] duration-150 ease-out" style={{ height: fill }} />
      </div>

      <ol ref={listRef} className="list-none m-0 p-0">
        {runway.map((r, i) => {
          const on = i <= reached;
          return (
            <li key={r.t} className="relative pl-10 md:pl-16">
              <span
                aria-hidden="true"
                className={`absolute rounded-full border-2 transition-all duration-500 ${
                  r.highlight ? "left-[-2px] top-[54px] md:top-[78px] w-[15px] h-[15px]" : "left-0 top-[56px] md:top-[80px] w-[11px] h-[11px]"
                } ${on ? "bg-[#ff1616] border-[#ff1616] shadow-[0_0_0_6px_rgba(255,22,22,0.12)]" : "bg-white border-[#cfcfcf]"}`}
              />
              <Reveal delay={60}>
                <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-4 md:gap-12 py-10 md:py-14 border-b border-[#ececec]">
                  <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
                    <span className={`text-[44px] md:text-[60px] font-semibold leading-none tracking-[-0.05em] transition-colors duration-500 ${r.highlight ? "text-[#909396]" : "text-black"}`}>
                      {r.t}
                    </span>
                    <span className={`${noteClass} ${r.highlight ? "!text-[#6d7174]" : ""}`}>{r.unit}</span>
                  </div>
                  <div>
                    <h3 className="text-[28px] md:text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-black transition-colors duration-500 group-hover:text-[#909396]">
                      {r.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-4 max-w-[820px]">{r.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const ProductLaunch = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 xl:gap-16 items-start">
            <Reveal className="lg:pt-10">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black lg:[&>span>span:first-child]:whitespace-nowrap">
                <HeroTitleLines
                  line={<>Product Launch <span className="italic font-normal" style={{ fontFamily: '"Cormorant Garamond", serif' }}>that</span></>}
                  italic=""
                  rest="outlasts launch week."
                  compact
                  accent={ACCENT}
                />
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[580px]`}>
                A launch isn't a date. It's the stretch between you knowing about the product and the right people finding it, getting it and buying it. So we start at release day and work backwards. Nothing big gets decided in a panic that way.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Plan your launch</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <LaunchPlan />
            </Reveal>
          </div>
        </section>

        {/* ── REAL LAUNCHES ── */}
        <section aria-labelledby="fail-heading" className={`${container} pb-24 md:pb-36`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
            <h2 id="fail-heading" className={h2Class}>
              <SplitHeading line="Good products fail their" italic="launches" rest="all the time." accent={ACCENT} />
            </h2>
            <p className={`${bodyClass} lg:text-right`}>Two launches that stumbled.</p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {failures.map((f, i) => (
              <Reveal key={f.name} delay={i * 120}>
                <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-7 md:p-9 flex flex-col border border-transparent transition-all duration-500 hover:bg-white hover:border-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
                  <p className={noteClass}>{f.meta}</p>
                  <h3 className="mt-4 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{f.name}</h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-4">
                    {f.body}{" "}
                    <a href={f.source} target="_blank" rel="nofollow noopener" className={sourceLink}>Source</a>
                  </p>
                  <p className="mt-auto pt-8">
                    <span className="block pl-5 border-l-2 border-[#ff1616]">
                      <span className="text-[#909396] font-normal text-[24px] md:text-[28px] leading-[1.15]">{f.lesson}</span>
                    </span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 md:mt-36 text-center">
            <p className="mx-auto max-w-[980px] font-medium text-[28px] md:text-[44px] leading-[1.15] tracking-[-0.035em]">
              <SplitHeading line="Same gap both times. Nobody heard," italic="in one plain sentence," rest="why they'd want it." accent={ACCENT} />
            </p>
          </Reveal>
        </section>

        {/* ── WHERE TRAFFIC COMES FROM ── */}
        <section aria-labelledby="traffic-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal>
              <h2 id="traffic-heading" className={`${h2Class} max-w-[820px]`}>
                <SplitHeading line="Attention goes where the" italic="story" rest="is already parked." accent={ACCENT} />
              </h2>
            </Reveal>

            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {trafficStories.map((t, i) => (
                <Reveal key={t.label} delay={i * 120}>
                  <article className="h-full rounded-[28px] bg-white p-7 md:p-10 lg:p-12 flex flex-col">
                    <p className={noteClass}>{t.label}</p>
                    <div aria-hidden="true" className="mt-8 flex items-baseline gap-3">
                      <span className="text-[72px] md:text-[104px] font-semibold leading-none tracking-[-0.06em] text-[#909396]"><CountUp value={t.big} /></span>
                      <span className={noteClass}>{t.unit}</span>
                    </div>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-8">
                      {t.body}{" "}
                      <a href={t.source} target="_blank" rel="nofollow noopener" className={sourceLink}>Source</a>
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 md:mt-20">
              <p className="mx-auto w-full lg:w-3/4 text-center text-[22px] md:text-[30px] leading-[1.4] tracking-[-0.02em] text-black">
                Neither one was about ad spend. Each put a plain promise where the right people were already looking. That's go-to-market marketing at its smallest. It's new product promotion at its cheapest.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE RUNWAY ── */}
        <section aria-labelledby="plan-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] 2xl:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-24 xl:gap-28 items-start">
            <h2 id="plan-heading" className={h2Class}>
              {/* laptop and Mac let it wrap; the widest screens get fixed breaks */}
              <span className="block 2xl:hidden">
                <SplitHeading line="Here's product launch planning, counted backwards" italic="from" rest="release." accent={ACCENT} />
              </span>
              <span className="hidden 2xl:block [&>span:first-child]:whitespace-nowrap">
                <span className="block">Here's product launch planning,</span>
                <span className="block">counted backwards from</span>
                <span className="block" style={{ color: ACCENT }}>release.</span>
              </span>
            </h2>
            <p className={`${bodyClass} lg:pt-2`}>
              Our product launch strategy runs in reverse. We start at release day and ask what has to be true four weeks before. Every stop below is a decision for you, not a chore to tick off.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:mt-24">
            <figure className="m-0 rounded-[28px] bg-[#f6f6f6] p-6 md:p-12">
              <div className="overflow-x-auto">
                <RunwayChart />
              </div>
            </figure>
            <p className={`${bodyClass} mt-5`}>A launch, counted in weeks. Conceptual, not performance data.</p>
          </Reveal>

          <RunwayRail />
        </section>

        {/* ── THE CAMPAIGN ── */}
        <section aria-labelledby="camp-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="camp-heading" className={h2Class}>
                <SplitHeading line="A product launch campaign should read like one story" italic="told" rest="in pieces." accent={ACCENT} />
              </h2>
            </Reveal>
            <Reveal delay={120} className={`${bodyClass} space-y-6`}>
              <p>
                Treat the campaign as one message in several places. The teaser, the reminder and the launch email should sound like the same person wrote them. If a buyer can tell Tuesday's post and Friday's belong together, it's working. Now available gets scrolled past. A line about the buyer's real problem gets forwarded.
              </p>
              <p>
                The box, the page and the first email should look like one company. That's why our{" "}
                branding work and launch work share a system. If the budget forces a choice, spend it on the weeks after release.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Before release day." faqs={faqs} accent={ACCENT} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black max-w-[1200px]">
                <HeroTitleLines line="Bring the product." italic="We'll" rest="plan the Product Launch backwards." plain compact accent="#ff1616" />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[680px]`}>
                Perfect Pixel Pro is a Creative Agency. Tell us where the product is right now and who you hope will buy it. We'll map the runway from feasibility to the first reviews, tied back to your wider{" "}
                <Link to="/product-commercialization" className={plLink}>product commercialization</Link>.
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
            <div>
              <ul className="list-none m-0 p-0 space-y-2.5">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="nofollow noopener" className="text-[14px] md:text-[15px] text-[#6d6d6d] underline decoration-[#d9d9d9] underline-offset-4 transition-colors duration-200 hover:text-[#6d7174] hover:decoration-[#909396]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[14px] md:text-[15px] leading-[1.7] text-[#9a9a9a] font-light">
                Dropbox figures come from secondary write-ups and are reported, not audited.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductLaunch;




