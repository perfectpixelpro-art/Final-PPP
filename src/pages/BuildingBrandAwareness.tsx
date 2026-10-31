import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Building Brand Awareness | Be Remembered | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Building brand awareness takes more than reach. See how Perfect Pixel Pro builds brand recognition, social presence and lasting visibility.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "How to build brand awareness?",
    a: "To build brand awareness, repeat one recognizable thing where your buyers already are. Take a plumber. Green van, cracked left mirror, same two diners every Friday. Month two, a stranger points at it and says that's the plumber.",
  },
  {
    q: "What is brand awareness?",
    a: "Brand awareness is whether your buyers know you exist and think of you when it counts. Try the cereal aisle test. Ask a ten-year-old for a brand and the first name out wins. Knowing the box is recognition. Naming it cold is recall.",
  },
  {
    q: "What is the importance of brand awareness?",
    a: "The importance of brand awareness comes down to habit. Shoppers lean toward whatever they've noticed before, often without knowing it. A contractor in a hardware store reaches for one brand of tape because he's passed it on a hundred job sites, though the other roll was fine. Awareness won't rescue a weak offer. It will get a good one looked at.",
  },
  {
    q: "What is brand recognition?",
    a: "Brand recognition is knowing a brand before the name is even read. The striped pole outside a barbershop. A maroon sweatshirt across a crowded gym. That's the easy half of awareness, because the cue is doing the work.",
  },
  {
    q: "What is a brand awareness strategy?",
    a: "Brand awareness strategy is a short list of decisions. Who should know you, where they'll run into you, what they should remember. A swim school chasing parents of five-year-olds gives out kickboards at the community pool and skips the gym. Clear who, clear where.",
  },
  {
    q: "What is Social Media ROI?",
    a: "Social Media ROI is the return on what you put into social, hours and dollars both, measured against a goal. A piano teacher posts student recitals for two months. Nobody's booked yet. More parents are typing her name into search, though. That's an early return.",
  },
  {
    q: "Is a bigger social media presence enough?",
    a: "Not by itself. A bigger social media presence can lift brand visibility, but size isn't memory. Street fair, big crowd, everybody humming the song, nobody naming the sponsor. Watch consistency, relevant reach and recognition together.",
  },
  {
    q: "How long does building brand awareness take?",
    a: "Building brand awareness takes longer than a quarter. Less than you'd think, though. Branded searches and direct visits can move in a few weeks. Recall crawls, like a new neighbor's name. We'll say what to watch, and when.",
  },
];

const structuredData = [
  articleSchema("Building Brand Awareness: Be Seen, Then Be Remembered", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

// The brand mark used across the page's graphics: a rounded square with an offset dot.
const Mark = ({ size, stage }: { size: number; stage: number }) => {
  // stage 0: faint outline, 1: dashed, 2: solid outline, 3: filled black, 4: filled red (recall)
  const stroke = stage >= 3 ? "none" : stage === 0 ? "#d4d4d4" : "#0d0d0d";
  const fill = stage === 4 ? RED : stage === 3 ? "#0d0d0d" : "none";
  const dot = stage >= 3 ? "#ffffff" : stage === 0 ? "#d4d4d4" : "#0d0d0d";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="12" fill={fill} stroke={stroke} strokeWidth="2" strokeDasharray={stage === 1 ? "4 4" : undefined} />
      <circle cx="30" cy="18" r="6" fill={dot} />
    </svg>
  );
};

const memorySteps = ["First glimpse", "Repeated", "Encounter", "Familiar", "Recall"];

// Recognition curve geometry: one point per encounter at the column centres, rising toward recall.
const CURVE_H = 170;
const curvePoints = [140, 118, 92, 62, 30].map((y, i) => ({ x: 10 + i * 20, y }));
const recognitionPath = (() => {
  const pts = [{ x: 0, y: curvePoints[0].y + 6 }, ...curvePoints, { x: 100, y: curvePoints[curvePoints.length - 1].y - 4 }];
  return pts.reduce((d, p, i) => {
    if (i === 0) return `M${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const mid = (p.x - prev.x) / 2;
    return `${d} C${prev.x + mid} ${prev.y} ${p.x - mid} ${p.y} ${p.x} ${p.y}`;
  }, "");
})();

// Hero graphic: the brand mark sits on a rising recognition curve and gets clearer at every encounter.
const MemoryStrip = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);

  return (
    <figure className="m-0">
      <p className="sr-only">
        A memory map made from repeated encounters: first glimpse, repeated, encounter, familiar, and finally recall. This is a conceptual illustration, not measured audience data.
      </p>
      <div aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-10 lg:p-12 overflow-x-auto">
        <div ref={ref} className="min-w-[640px]">
          <div className="relative" style={{ height: CURVE_H }}>
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 100 ${CURVE_H}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="recall-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={RED} stopOpacity=".12" />
                  <stop offset="100%" stopColor={RED} stopOpacity="0" />
                </linearGradient>
              </defs>
              {curvePoints.map((p) => (
                <line key={p.x} x1={p.x} x2={p.x} y1={p.y} y2={CURVE_H} stroke="#dcdcdc" strokeWidth="1" strokeDasharray="2 4" vectorEffect="non-scaling-stroke" />
              ))}
              <path
                d={`${recognitionPath} L100 ${CURVE_H} L0 ${CURVE_H}Z`}
                fill="url(#recall-fill)"
                style={{ opacity: visible ? 1 : 0, transition: "opacity 1200ms ease 700ms" }}
              />
              <path
                d={recognitionPath}
                fill="none"
                stroke="#0d0d0d"
                strokeWidth="1.8"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray="1"
                style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1800ms ${ease} 200ms` }}
              />
            </svg>

            {curvePoints.map((p, i) => {
              const last = i === curvePoints.length - 1;
              return (
                <span
                  key={p.x}
                  className={`absolute flex items-center justify-center rounded-full ${
                    last ? "w-[72px] h-[72px] bg-white shadow-[0_0_0_10px_rgba(255,22,22,0.1),0_20px_40px_-20px_rgba(255,22,22,0.6)]" : "w-[52px] h-[52px] bg-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.35)]"
                  }`}
                  style={{
                    left: `${p.x}%`,
                    top: p.y,
                    opacity: visible ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.6})`,
                    transition: `opacity 500ms ease ${400 + i * 250}ms, transform 700ms ${ease} ${400 + i * 250}ms`,
                  }}
                >
                  <Mark size={last ? 44 : 30} stage={i} />
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-5 pt-10">
            {memorySteps.map((label, i) => {
              const last = i === memorySteps.length - 1;
              return (
                <p key={label} className={`text-center text-[13px] md:text-[14px] ${last ? "text-[#ff1616] font-semibold" : "text-[#6d6d6d]"}`}>
                  {label}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <p className={`${noteClass} mt-5 text-center`}>Not more noise. A clearer signal. Conceptual illustration, not research data.</p>
    </figure>
  );
};

const moments = [
  { when: "Last month", what: "A blunt take on LinkedIn" },
  { when: "Yesterday", what: "Same blue, same odd typeface" },
  { when: "Today", what: "A colleague says the name" },
];

// One identity on three surfaces: fanned cards that spread on hover.
const surfaces = [
  { name: "Social", cue: "Scroll · recognize", rotate: -7, x: -150, size: 64 },
  { name: "Search", cue: "Find · recognize", rotate: 0, x: 0, size: 48 },
  { name: "Website", cue: "Arrive · recognize", rotate: 7, x: 150, size: 80 },
];

const SurfaceFan = () => (
  <figure className="m-0">
    <p className="sr-only">One recurring visual signature across different channels: social, search and website each repeat the same mark.</p>
    <div aria-hidden="true" className="surface-fan relative h-[380px] md:h-[440px] rounded-[32px] bg-white overflow-hidden flex items-center justify-center">
      {surfaces.map((s, i) => (
        <div
          key={s.name}
          className="fan-card absolute w-[200px] md:w-[240px] h-[260px] md:h-[300px] rounded-[24px] bg-white ring-1 ring-[#ececec] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] p-6 flex flex-col transition-transform duration-700"
          style={{
            transform: `translateX(calc(${s.x}px * var(--spread, 0.62))) rotate(${s.rotate}deg)`,
            transitionTimingFunction: ease,
            zIndex: i === 1 ? 3 : 2,
          }}
        >
          <span className="self-start rounded-full bg-[#f6f6f6] px-3 py-1 text-[12px] font-medium text-black">{s.name}</span>
          <div className="flex-1 flex items-center justify-center">
            <Mark size={s.size} stage={4} />
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-[#f0f0f0]" />
            <span className="block h-1.5 w-2/3 rounded-full bg-[#f0f0f0]" />
          </div>
          <span className="mt-4 text-[12px] text-[#9a9a9a]">{s.cue}</span>
        </div>
      ))}
      <style>{`.surface-fan:hover > .fan-card { --spread: 1; }`}</style>
    </div>
    <p className={`${noteClass} mt-5`}>Repeated cues. Conceptual demonstration of one visual language across different formats.</p>
  </figure>
);

const presenceNames = [
  { name: "Online Presence", body: "Whatever the web says about you, built by you or not. Your site, a map pin, one old review." },
  { name: "Social Media Presence", body: "The accounts you run, and how often anyone sees them move." },
  { name: "Social Presence", body: "How you behave there. Do you answer comments? Say thanks?" },
  { name: "Social Footprint", body: "The trail you leave without trying. Tags, mentions, a stranger's tip on a forum." },
  { name: "Brand Presence", body: "All of it added up. One business, or five that never met?" },
  { name: "Brand Positioning", body: "The one reason you get picked over the next name on the list." },
];

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const approach: { title: string; icon: ReactNode; body: ReactNode }[] = [
  {
    title: "Find the day they need you.",
    icon: icon(<><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /><circle cx="15.5" cy="15" r="1.6" fill="currentColor" /></>),
    body: (
      <>
        Skip the channel talk. Think of the day somebody's launching a product, or dumping a supplier, or hunting for a partner they can defend to the boss. Brand positioning is how your name gets attached to that day, and it has to be true. Our{" "}
        <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work starts there, and our{" "}
        <Link to="/blog/why-choose-us" className={inlineLink}>approach to strategy and craft</Link> shows how we think.
      </>
    ),
  },
  {
    title: "Give the idea a form people recognize.",
    icon: icon(<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="14.5" cy="9.5" r="2.2" fill="currentColor" /></>),
    body: (
      <>
        One sharp headline. One odd little visual detail. A point of view that doesn't change every Tuesday. That does more for your online presence than a fresh style each quarter. We build the words and the look together, the way a good{" "}
        <Link to="/branding-agency" className={inlineLink}>branding agency</Link> would. Our{" "}
        <Link to="/work/the-black-in-hr" className={inlineLink}>identity work for The Black in HR</Link> shows the discipline.
      </>
    ),
  },
  {
    title: "Turn appearances into familiarity.",
    icon: icon(<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 11 15.7 7M8.3 13l7.4 4" /></>),
    body: "Your social media presence is one corner. The website, the sales call and the email signature fill in the rest. If they sound like strangers at a wedding, nobody connects them, and a believable social presence can't fix that.",
  },
  {
    title: "Check what they carried home.",
    icon: icon(<><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></>),
    body: "Social Media ROI matters, though nobody should bet the budget on a likes report. Branded search says more. So do direct visits and real inquiries. Unaided recall, if a study's possible, says the most. None of it proves a single post made a single sale.",
  },
];

const signals = [
  { measure: "Qualified reach", question: "Who saw it?" },
  { measure: "Branded search & direct visits", question: "Who came back?" },
  { measure: "Recognition & recall research", question: "Who remembers?" },
  { measure: "Inquiries & assisted conversions", question: "What followed?" },
];

// One measure: a four-step depth meter, the measure, and the question it answers.
const SignalRow = ({ index, measure, question }: { index: number; measure: string; question: string }) => {
  const { ref, visible } = useInView<HTMLLIElement>(0.4);
  return (
    <li
      ref={ref}
      className="group flex items-center gap-4 md:gap-6 rounded-[20px] bg-white px-5 py-4 md:px-6 md:py-5 transition-all duration-500 hover:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.35)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(16px)",
        transition: `opacity 600ms ease ${index * 140}ms, transform 800ms ${ease} ${index * 140}ms, box-shadow 500ms ease`,
      }}
    >
      <span aria-hidden="true" className="flex items-end gap-1 shrink-0">
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className={`w-1.5 rounded-full ${n <= index ? "bg-[#ff1616]" : "bg-[#e5e5e5]"}`} style={{ height: 8 + n * 5 }} />
        ))}
      </span>
      <span className="flex-1 text-[15px] md:text-[17px] font-medium text-black">{measure}</span>
      <span className="text-[19px] md:text-[22px] italic leading-none text-[#ff1616] whitespace-nowrap" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
        {question}
      </span>
    </li>
  );
};

const BuildingBrandAwareness = () => {
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
                <HeroTitleLines line="Be seen." italic="Then" rest="be remembered." />
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[720px]`}>
                It isn't a race to turn up in the most places. It's closer to becoming the name that pops into somebody's head on a slow Tuesday, right when they need what you sell.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Let's talk about your brand</PillLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-20 md:mt-28">
            <MemoryStrip />
          </Reveal>
        </section>

        {/* ── THE QUESTION BEHIND THE REACH ── */}
        <section aria-labelledby="reframe-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="reframe-heading" className={h2Class}>
                <SplitHeading line="People forget posts." italic="They" rest="remember patterns." />
              </h2>
            </Reveal>
            <Reveal delay={120} className={`${bodyClass} space-y-6`}>
              <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black font-normal">
                Think of a brand you'd know from across a parking lot. A color. A tone of voice. The corner of a logo on somebody's tote bag. None of it was loud.
              </p>
              <p>
                Now picture a business with great work and a scattered face. The website sounds like a law firm. The feed copies whatever's trending. The sales deck looks like it came from a different company. Busy, sure. Connected, no.
              </p>
              <p>
                Here's the split between <strong className="font-semibold text-black">brand visibility</strong> and <strong className="font-semibold text-black">brand recognition</strong>. One is being seen once. The other is being known when you turn up again. Only the second pays rent.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-24 md:mt-32 text-center">
            <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
            <p className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.12] tracking-[-0.035em]">
              <SplitHeading line="A brand should leave a trace, even after the post" italic="is" rest="gone." />
            </p>
          </Reveal>

          <Reveal className="mt-20 md:mt-28">
            <aside aria-label="Imagined scenario" className="rounded-[32px] bg-[#f6f6f6] p-7 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-black">An imagined moment, not a client case study</span>
                <p className="mt-6 text-[17px] md:text-[20px] leading-[1.65] text-black">
                  Picture a founder shopping for a design studio before a launch. Last month she read a blunt take on LinkedIn. Yesterday a project page used the same blue and the same odd typeface. Today a colleague says the studio's name over coffee. Three small meetings. Nothing viral. They just turned out to be one story.
                </p>
              </div>
              <ol aria-hidden="true" className="relative list-none m-0 p-0 space-y-4">
                <span className="absolute left-[19px] top-6 bottom-6 w-px bg-[#dcdcdc]" />
                {moments.map((m, i) => {
                  const last = i === moments.length - 1;
                  return (
                    <li key={m.when} className="relative flex items-center gap-5">
                      <span className={`relative z-10 w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${last ? "bg-[#ff1616]" : "bg-white ring-1 ring-[#dcdcdc]"}`}>
                        <span className={`w-2.5 h-2.5 rounded-full ${last ? "bg-white" : "bg-[#0d0d0d]"}`} />
                      </span>
                      <div className={`flex-1 rounded-[18px] px-5 py-4 ${last ? "bg-[#0d0d0d] text-white" : "bg-white"}`}>
                        <span className={`block text-[12px] ${last ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>{m.when}</span>
                        <span className="block mt-0.5 text-[15px] md:text-[16px] font-medium">{m.what}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </aside>
          </Reveal>
        </section>

        {/* ── ONE IDENTITY, DIFFERENT PLACES ── */}
        <section aria-labelledby="imprint-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
              <h2 id="imprint-heading" className={h2Class}>
                <SplitHeading line="One identity." italic="Different" rest="places." />
              </h2>
              <p className={bodyClass}>Your Social Footprint only helps when every piece points back to the same face.</p>
            </Reveal>

            <Reveal delay={120} className="mt-16 md:mt-20">
              <SurfaceFan />
            </Reveal>

            <Reveal className="mt-20 md:mt-28">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">Six names for where a brand shows up</h3>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {presenceNames.map((n, i) => (
                <Reveal key={n.name} delay={(i % 3) * 100}>
                  <article className="group h-full rounded-[24px] bg-white p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <span aria-hidden="true" className="block w-8 h-[3px] rounded-full bg-[#e5e5e5] transition-colors duration-500 group-hover:bg-[#ff1616]" />
                    <h4 className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{n.name}</h4>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.7] text-[#6d6d6d] font-light">{n.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WOULD APPROACH IT ── */}
        <section aria-labelledby="field-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-20 items-end">
            <h2 id="field-heading" className={h2Class}>
              <SplitHeading line="Building brand awareness is a" italic="storage" rest="problem, really." />
            </h2>
            <p className={bodyClass}>
              Never mind the posting calendar for a minute. What counts is whether somebody still has your name on Thursday, because then the brand awareness strategy has done its job.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 120}>
                <article className="group relative h-full overflow-hidden rounded-[28px] bg-white ring-1 ring-[#ececec] p-7 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:ring-transparent hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.3)]">
                  <span aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-0 bg-[#ff1616] transition-all duration-700 ease-out group-hover:w-full" />
                  <div className="flex items-center gap-4">
                    <span className="w-14 h-14 shrink-0 rounded-full bg-[#fff1f1] flex items-center justify-center text-[#ff1616] transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:text-white">
                      {a.icon}
                    </span>
                    <span aria-hidden="true" className="relative flex-1 h-px bg-[#ececec] overflow-hidden">
                      <span className="absolute inset-y-0 left-0 w-0 bg-[#ff1616] transition-all duration-700 ease-out group-hover:w-full" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{a.title}</h3>
                  <p className="mt-4 text-[15px] md:text-[17px] leading-[1.8] text-[#6d6d6d] font-light">{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            <Reveal>
              <p className="font-medium text-[28px] md:text-[40px] leading-[1.12] tracking-[-0.035em]">
                <SplitHeading line="Not a bigger megaphone. A clearer reason to" italic="remember" rest="you." />
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className={bodyClass}>
                Out in the world, the work meets strangers. Back home, it has to look like family. Skip that and the reach is wasted. Do it and you build brand awareness without shouting. A loud{" "}
                <Link to="/creative-campaigns" className={inlineLink}>creative campaign</Link> can supply it. A quiet one can too.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE METRICS QUESTION ── */}
        <section aria-labelledby="evidence-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="evidence-heading" className={h2Class}>
                <SplitHeading line="A million views can still leave you off" italic="the" rest="shortlist." />
              </h2>
              <p className={`${bodyClass} mt-8`}>
                Dashboards report what happened on one platform. They don't say whether people can find you, spot you or think of you later.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-10">
                <p className={noteClass}>Reading the signal, not a live report</p>
                <p className="mt-4 text-[17px] md:text-[20px] leading-[1.55] tracking-[-0.01em] text-black">
                  Different measures answer different questions. No single one stands in for the rest.
                </p>
                <ul className="mt-8 list-none m-0 p-0 space-y-2.5">
                  {signals.map((s, i) => (
                    <SignalRow key={s.measure} index={i} measure={s.measure} question={s.question} />
                  ))}
                </ul>
                <div aria-hidden="true" className="mt-8 flex items-center gap-4 text-[13px]">
                  <span className="text-[#6d6d6d]">Seen</span>
                  <span className="relative flex-1 h-[3px] rounded-full bg-[#e2e2e2] overflow-hidden">
                    <span className="absolute inset-0 rounded-full" style={{ background: `linear-gradient(to right, rgba(255,22,22,0.15), ${RED})` }} />
                  </span>
                  <span className="font-semibold text-[#ff1616]">Remembered</span>
                </div>
              </div>
              <p className="mt-5 text-[14px] md:text-[15px] text-[#9a9a9a] font-light">
                An editorial measurement framework. Not campaign data and not a promise of results.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="What people" italic="want" rest="to know." />}
          note="Short answers. One small picture each."
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Be the name" italic="they" rest="remember." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[720px]`}>
                Tell us what you make and who needs to know about it. We'll work out, at Perfect Pixel Pro, what you should be known for and how people will spot it when they bump into you. Building brand awareness is slow, but nobody has to guess.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Tell us what you're building</PillLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BuildingBrandAwareness;
