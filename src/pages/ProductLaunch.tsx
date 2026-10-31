import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  Accent, HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, CountUp, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, subServiceBreadcrumbSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Product Launch Planning: A Week-by-Week Runway | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product Launch planning for teams with a good product: real launch failures, where launch traffic comes from, and a week-by-week runway from feasibility to release.";

const sourceLink = "text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ff1616] whitespace-nowrap hover:underline underline-offset-4";

const failures = [
  {
    meta: "2006 / MICROSOFT",
    name: "The Zune",
    body: "The iPod was about five years old when the Zune arrived with a bigger screen and wireless sharing. Reviewers called it decent. Years later, former Microsoft executive Robbie Bach conceded the company was late and never made clear why a music fan should switch.",
    source: "https://www.slashgear.com/897027/what-really-happened-to-microsofts-zune",
    lesson: "A fair product needs a reason to switch.",
  },
  {
    meta: "2020 / $1.75 BILLION RAISED",
    name: "Quibi",
    body: "Quibi opened in April 2020. By October the founders were telling investors it was over. Jeffrey Katzenberg pointed at the pandemic and at an idea he admitted wasn't perfect, but one remark of his is a launch problem in plain sight: \"We asked people to pay for it before they actually understood what it was.\"",
    source: "https://www.cnbc.com/2020/10/22/quibi-co-founders-katzenberg-whitman-explain-what-went-wrong.html",
    lesson: "Let people see it before you charge.",
  },
  {
    meta: "FROZEN DINNERS / COLGATE",
    name: "Kitchen Entrees",
    body: "Imagine pulling a frozen dinner from the freezer and finding a toothpaste brand on the box. By one account the meals looked a lot like what the big frozen-food brands already sold, and shoppers couldn't shake the idea that dinner might taste like toothpaste.",
    source: "https://nowiknow.com/the-minty-fresh-way-to-fail-at-business/",
    lesson: "A name drags its old meaning into a new aisle.",
  },
];

const trafficStories = [
  {
    label: "DROPBOX / 2007",
    big: "3",
    unit: "min",
    body: "Around 2007, Drew Houston recorded a demo of about three minutes and posted it on Hacker News. A second cut for Digg was full of in-jokes for that crowd. One write-up says the waiting list grew about fifteenfold in a day. That's secondhand, so file it under \"probably roughly right.\" The full launch didn't come until September 2008.",
    source: "https://www.alexanderjarvis.com/dropbox-doing-things-that-dont-scale/",
  },
  {
    label: "DOLLAR SHAVE CLUB / 2012",
    big: "12,000",
    unit: "orders",
    body: "A YouTube video in March 2012, starring CEO Michael Dubin, brought in 12,000 orders in two days. Unilever later bought the company, reportedly for a billion dollars.",
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
        Can you make it, sell it and support it at a price someone will pay? Megan's container might lose money on every unit once shipping is counted. A spreadsheet is a cheaper place to learn that than an angry review. The research and pricing work sits in{" "}
        <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link>.
      </>
    ),
  },
  {
    t: "T-10",
    unit: "WEEKS",
    title: "Target market analysis",
    body: <>It's mostly a notebook and eight awkward chats. Megan says her buyer is "busy people." A friend asks, "Busy doing what, exactly?" Four conversations later she means night-shift nurses eating at 3 a.m., who've given up on any container that warps in a microwave.</>,
  },
  {
    t: "T-8",
    unit: "WEEKS",
    title: "Product Positioning",
    body: (
      <>
        Her line: "the container that survives a night shift." A person and a problem, in seven words. This is where{" "}
        <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> and launch work meet, and we don't try to pull them apart.
      </>
    ),
  },
  {
    t: "T-4",
    unit: "WEEKS",
    title: "Product Soft launch",
    body: <>Fifty people from a nurses' group chat. In our imagined version, three buyers all ask if the lid is dishwasher safe, and nobody had put that on the page. It's a ten-minute fix that saves a lot of abandoned carts, and it only surfaced because fifty friendly strangers were watching.</>,
  },
  {
    t: "T-0",
    unit: "RELEASE DAY",
    title: "Product release and Product Introduction",
    body: <>Now anyone who stumbles across it can buy it. A stranger landing cold gets the top of the page, the first line of the email and the caption under the first photo, and that's the whole Product Introduction. We write it separately from the product description, since the stranger is asking "what is this?" while the customer is asking "will it fit in my bag?"</>,
    highlight: true,
  },
  {
    t: "T+4",
    unit: "WEEKS",
    title: "Product Establishing",
    body: (
      <>
        Reviews arrive and the first complaints get answered. Give it a few weeks and it stops being the new thing. After that it's handed to{" "}
        <Link to="/product-sales" className={inlineLink}>Product Sales</Link>, where somebody has to answer the retail buyer who emails at 6 p.m. asking about case sizes.
      </>
    ),
  },
];

const faqs: Faq[] = [
  {
    q: "How to price a new product?",
    a: "Say Megan's container costs $4 to make, pack and ship, and the closest rival sells for $14. \"So anything above four is profit?\" asks her brother. Not quite, but $4 is the floor. She holds a price card up to a nurse on her break. $12. The nurse laughs, then asks, \"Does the lid stay on?\" That laugh was information. At the soft launch, two small groups get two prices, and the one people stop arguing about wins. (All invented, brother included.)",
  },
  {
    q: "How long should launch planning take?",
    a: "Two or three months of lead time is roomy for a small team. Under four weeks it gets cramped. The launch month that follows needs its own space on the calendar, so don't count it as free. Picture a founder with a Friday release and nothing written yet. That's the cramped version, and it usually ends with a page nobody proofread.",
  },
  {
    q: "What is a Product Soft launch?",
    a: "Imagine a dress rehearsal where the audience pays. Fifty or a hundred friendly people who weren't told it's a big day. Megan would watch where they stall on the page, which question shows up in every inbox, and who winces at the price. Her fifty would come from a nurses' group chat and a few neighbors.",
  },
  {
    q: "Do I need a Product launch event?",
    a: "Not always. Picture a clear page, a good email and three real customer stories, and a product can launch fine on that alone. A room makes sense if people need to pick the thing up, or if you want a headline. The better test is a boring one. Would your buyer give up a Thursday evening for it? Megan's nurses would be on shift. And if you do run one, think of it as one scene in the product launch. The film is longer than an evening.",
  },
];

const sources = [
  { label: "SlashGear, What really happened to Microsoft's Zune", href: "https://www.slashgear.com/897027/what-really-happened-to-microsofts-zune" },
  { label: "CNBC, Quibi co-founders explain what went wrong", href: "https://www.cnbc.com/2020/10/22/quibi-co-founders-katzenberg-whitman-explain-what-went-wrong.html" },
  { label: "Adweek, Why Quibi failed", href: "https://www.adweek.com/tv-video/why-quibi-failed-5-reasons-short-form-streamer-shutting-down/" },
  { label: "Now I Know, The minty-fresh way to fail at business", href: "https://nowiknow.com/the-minty-fresh-way-to-fail-at-business/" },
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

      <g fontFamily="Archivo, sans-serif" fontSize="24" fontWeight="600" textAnchor="middle" fill={INK} letterSpacing="-0.5">
        <text x="110" y="260">T-12</text>
        <text x="330" y="260">T-8</text>
        <text x="550" y="260">T-4</text>
        <text x="770" y="260" fill={RED}>T-0</text>
        <text x="990" y="260">T+4</text>
      </g>
      <g fontFamily="Archivo, sans-serif" fontSize="13" fontWeight="500" textAnchor="middle" fill="#9a9a9a" letterSpacing="2.5">
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
                    <span className={`text-[44px] md:text-[60px] font-semibold leading-none tracking-[-0.05em] transition-colors duration-500 ${r.highlight ? "text-[#ff1616]" : "text-black"}`}>
                      {r.t}
                    </span>
                    <span className={`${noteClass} ${r.highlight ? "!text-[#ff1616]" : ""}`}>{r.unit}</span>
                  </div>
                  <div>
                    <h3 className="text-[28px] md:text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-black transition-colors duration-500 group-hover:text-[#ff1616]">
                      {r.title}
                    </h3>
                    <p className="mt-4 max-w-[820px] text-[15px] md:text-[17px] leading-[1.85] text-[#6d6d6d] font-light">{r.body}</p>
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

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-16 md:pt-24 pb-24 md:pb-36`}>
          <div className="text-center">
            <Reveal>
              <h1 id="page-title" className="font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Product Launch" italic="that" rest="outlasts launch week." />
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[680px]`}>
                A product launch isn't a day on the calendar. It's the stretch between "only we know about it" and "the right people can find it, understand it and buy it." We plan that stretch backwards from release day, so nothing important gets decided in a panic.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Plan your launch</PillLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── REAL LAUNCHES ── */}
        <section aria-labelledby="fail-heading" className={`${container} pb-24 md:pb-36`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="fail-heading" className={h2Class}>
              <SplitHeading line="Good products fail their" italic="launches" rest="all the time." />
            </h2>
            <p className={bodyClass}>Three real ones. None of them is a tidy lesson.</p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {failures.map((f, i) => (
              <Reveal key={f.name} delay={i * 120}>
                <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-7 md:p-9 flex flex-col border border-transparent transition-all duration-500 hover:bg-white hover:border-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
                  <p className={noteClass}>{f.meta}</p>
                  <h3 className="mt-4 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{f.name}</h3>
                  <p className="mt-4 text-[15px] md:text-[16px] leading-[1.8] text-[#6d6d6d] font-light">
                    {f.body}{" "}
                    <a href={f.source} target="_blank" rel="nofollow noopener" className={sourceLink}>Source</a>
                  </p>
                  <p className="mt-auto pt-8">
                    <span className="block pl-5 border-l-2 border-[#ff1616]">
                      <Accent className="font-normal text-[24px] md:text-[28px] leading-[1.15]">{f.lesson}</Accent>
                    </span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 md:mt-36 text-center">
            <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
            <p className="mx-auto max-w-[980px] font-medium text-[28px] md:text-[44px] leading-[1.12] tracking-[-0.035em]">
              <SplitHeading line="In all three, nobody out in the world was told, in one plain sentence," italic="why" rest="they'd want the thing." />
            </p>
          </Reveal>
        </section>

        {/* ── WHERE TRAFFIC COMES FROM ── */}
        <section aria-labelledby="traffic-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal>
              <h2 id="traffic-heading" className={`${h2Class} max-w-[820px]`}>
                <SplitHeading line="Attention goes where the" italic="story" rest="is already parked." />
              </h2>
            </Reveal>

            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {trafficStories.map((t, i) => (
                <Reveal key={t.label} delay={i * 120}>
                  <article className="h-full rounded-[28px] bg-white p-7 md:p-10 lg:p-12 flex flex-col">
                    <p className={noteClass}>{t.label}</p>
                    <div aria-hidden="true" className="mt-8 flex items-baseline gap-3">
                      <span className="text-[72px] md:text-[104px] font-semibold leading-none tracking-[-0.06em] text-[#ff1616]"><CountUp value={t.big} /></span>
                      <span className={noteClass}>{t.unit}</span>
                    </div>
                    <p className="mt-8 text-[15px] md:text-[17px] leading-[1.8] text-[#6d6d6d] font-light">
                      {t.body}{" "}
                      <a href={t.source} target="_blank" rel="nofollow noopener" className={sourceLink}>Source</a>
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 md:mt-20">
              <p className="max-w-[980px] text-[22px] md:text-[30px] leading-[1.4] tracking-[-0.02em] text-black">
                Neither story is about ad spend. It's a plain promise placed where the right people were already looking, which is go-to-market marketing at its smallest and new product promotion at its cheapest.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE RUNWAY ── */}
        <section aria-labelledby="plan-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="plan-heading" className={h2Class}>
              <SplitHeading line="Here's product launch planning, counted backwards" italic="from" rest="release." />
            </h2>
            <p className={bodyClass}>
              We write the product launch strategy in reverse. Start at release day and ask what has to be true four weeks earlier. To keep it concrete, we'll follow Megan, an imagined founder with a meal-prep container for night-shift nurses.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:mt-24">
            <figure className="m-0 rounded-[28px] bg-[#f6f6f6] p-6 md:p-12">
              <div className="overflow-x-auto">
                <RunwayChart />
              </div>
            </figure>
            <p className={`${noteClass} mt-5`}>A LAUNCH, COUNTED IN WEEKS. CONCEPTUAL, NOT PERFORMANCE DATA</p>
          </Reveal>

          <RunwayRail />
        </section>

        {/* ── THE CAMPAIGN ── */}
        <section aria-labelledby="camp-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="camp-heading" className={h2Class}>
                <SplitHeading line="A product launch campaign should read like one story" italic="told" rest="in pieces." />
              </h2>
            </Reveal>
            <Reveal delay={120} className={`${bodyClass} space-y-6`}>
              <p>
                A teaser goes up on Tuesday and a reminder on Friday. In between, the buyer scrolls past three posts without a flicker. If she can tell Tuesday and Friday belong together, the campaign is doing its job. "Now available" gets scrolled past, while "Built for people who eat at 3 a.m." ends up in a group chat captioned "this is you."
              </p>
              <p>
                Megan's box, her page and her first email all need to look like one company, which is why our{" "}
                <Link to="/branding-agency" className={inlineLink}>branding</Link> work and launch work share a system. Her launch moment could be a folding table outside a hospital cafeteria with a sign that says "Go ahead. Drop it." People drop the container on the floor themselves, and somebody films it. Cheap, odd and easy to repeat. If the budget forces a choice, spend it on the weeks after day one.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Before release day." faqs={faqs} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black max-w-[1200px]">
                <HeroTitleLines line="Bring the product." italic="We'll" rest="plan the Product Launch backwards." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[680px]`}>
                Tell us where the product is right now, even if that's a prototype on a kitchen counter, and who you hope will buy it. Perfect Pixel Pro will map the runway from feasibility to the first reviews, and tie it back to your wider{" "}
                <Link to="/product-commercialization" className={inlineLink}>product commercialization</Link>.
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
                    <a href={s.href} target="_blank" rel="nofollow noopener" className="text-[14px] md:text-[15px] text-[#6d6d6d] underline decoration-[#d9d9d9] underline-offset-4 transition-colors duration-200 hover:text-[#ff1616] hover:decoration-[#ff1616]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[14px] md:text-[15px] leading-[1.7] text-[#9a9a9a] font-light">
                Megan and her container are imagined. Dropbox figures come from secondary write-ups and are reported, not audited.
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
