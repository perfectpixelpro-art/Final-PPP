import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import postImg from "../assets/postW.webp";
import webImg from "../assets/WEB.webp";
import Footer from "../components/Footer";
import {
  RED, container, sectionY, h2Class, bodyClass, noteClass,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
// Inline links follow this page's accent rather than the site red.
const bbaLink = "underline decoration-[#909396] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#6d7174]";

const PAGE_TITLE = "Building Brand Awareness | Be Remembered | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Building brand awareness takes more than reach. See how Perfect Pixel Pro builds brand recognition, social presence and lasting visibility.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "How to build brand awareness?",
    a: "To build brand awareness, repeat one recognizable thing where your buyers already are. Pick a clear idea, a consistent look and two or three places your audience spends time. Then keep showing up the same way. Recognition comes from repetition, not variety.",
  },
  {
    q: "What is brand awareness?",
    a: "Brand awareness is whether your buyers know you exist and think of you when it counts. It has two parts. Recognition is knowing you when they see you. Recall is naming you without a prompt. Recall is the harder one.",
  },
  {
    q: "What is the importance of brand awareness?",
    a: "The importance of brand awareness comes down to habit. People lean toward names they've noticed before, often without realizing it. Awareness won't rescue a weak offer. It does get a good one looked at, and it gives your marketing a head start.",
  },
  {
    q: "What is brand recognition?",
    a: "Brand recognition is knowing a brand before you read its name. A color, a shape or a voice does the work. It's the easier half of brand awareness, because the cue is doing the work for the buyer.",
  },
  {
    q: "What is a brand awareness strategy?",
    a: "A brand awareness strategy is a short list of decisions. Who should know you? Where will they run into you? What should they remember? Answer those three and the rest of the plan has something to stand on.",
  },
  {
    q: "What is Social Media ROI?",
    a: "Social Media ROI is the return on what you put into social, in hours and dollars, measured against a goal. Early returns often show up as branded searches and direct visits before sales. Set the goal first, then pick the number to watch.",
  },
  {
    q: "Is a bigger social media presence enough?",
    a: "Not by itself. A bigger social media presence can lift brand visibility, but size isn't memory. Watch consistency, relevant reach and recognition together. If people see you often but can't say what you do, the audience is big and the awareness is small.",
  },
  {
    q: "How long does building brand awareness take?",
    a: "Building brand awareness takes months, not weeks. A typical plan runs in three stages. Weeks 1 to 4: settle the identity and audit where you show up. Months 2 to 3: watch branded searches and direct visits. Months 6 to 12: check recall with a short survey. Budget and category change the pace.",
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
// Hero graphic: on a slow Tuesday somebody needs what you sell. One name comes to mind; the rest stay blurry.
const MemoryStack = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  // A scatter of small marks: turning up everywhere, remembered nowhere.
  const scatter = [[8, 20], [30, 10], [52, 30], [74, 14], [90, 38], [18, 52], [44, 64], [66, 50], [84, 72], [28, 82], [58, 88], [10, 76]];

  return (
    <figure className="m-0">
      <p className="sr-only">
        On a slow Tuesday somebody needs what you sell. Your name is the one that pops into their head; the others stay blurry. It isn't a race to turn up in the most places.
      </p>
      <div ref={ref} aria-hidden="true" className="mx-auto max-w-[460px] rounded-[28px] bg-[#f6f6f6] p-3.5 md:p-5">
        {/* The moment */}
        <div className="rounded-[20px] bg-white p-4 md:p-5" style={rise(100)}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[18px] md:text-[19px] text-black">A slow Tuesday</span>
            <span className="rounded-full bg-[#f6f6f6] px-3 py-1 text-[11.5px] text-[#6d6d6d]">needs what you sell</span>
          </div>

          <ul className="mt-4 list-none m-0 p-0 space-y-2">
            <li className="flex items-center gap-3.5 rounded-[14px] bg-[#0d0d0d] text-white px-3.5 py-3" style={rise(500)}>
              <span className="w-9 h-9 shrink-0 rounded-[11px] bg-white flex items-center justify-center"><Mark size={22} stage={4} /></span>
              <span className="flex-1">
                <span className="block text-[15px] md:text-[16px] font-medium tracking-[-0.02em]">Your name</span>
                <span className="block text-[12.5px] text-white/60">pops into their head</span>
              </span>
              <span className="w-6 h-6 rounded-full bg-[#ff1616] flex items-center justify-center">
                <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5 9.5 3.5" /></svg>
              </span>
            </li>
            {[0.55, 0.35].map((o, i) => (
              <li key={o} className="flex items-center gap-3.5 rounded-[14px] bg-[#f6f6f6] px-3.5 py-3" style={{ ...rise(700 + i * 150), filter: "blur(1.2px)" }}>
                <span className="w-9 h-9 shrink-0 rounded-[11px] bg-white flex items-center justify-center" style={{ opacity: o }}><Mark size={22} stage={i} /></span>
                <span className="flex-1 space-y-1.5" style={{ opacity: o }}>
                  <span className="block h-2.5 w-28 rounded-full bg-[#cfcfcf]" />
                  <span className="block h-2 w-20 rounded-full bg-[#e0e0e0]" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not a race to turn up in the most places */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-[20px] bg-white p-3.5 md:p-4" style={rise(1000)}>
            <div className="relative h-[70px]">
              {scatter.map(([x, y], i) => (
                <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2 opacity-40" style={{ left: `${x}%`, top: `${y}%` }}>
                  <Mark size={14} stage={1} />
                </span>
              ))}
            </div>
            <span className="mt-3 block text-[13px] md:text-[14px] leading-[1.35] text-[#8a8a8a] line-through decoration-[#cfcfcf]">The most places</span>
          </div>
          <div className="rounded-[20px] bg-white p-3.5 md:p-4" style={rise(1150)}>
            <div className="h-[70px] flex items-center justify-center">
              <span className="rounded-[14px] p-2 shadow-[0_0_0_9px_rgba(255,22,22,0.08)]"><Mark size={34} stage={4} /></span>
            </div>
            <span className="mt-3 block text-[13px] md:text-[14px] leading-[1.35] font-medium text-black">The name that <span className="text-[#909396]">pops into their head</span></span>
          </div>
        </div>
      </div>
    </figure>
  );
};

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
                <p key={label} className={`text-center text-[13px] md:text-[14px] ${last ? "text-[#6d7174] font-semibold" : "text-[#6d6d6d]"}`}>
                  {label}
                </p>
              );
            })}
          </div>
        </div>
      </div>
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
  { name: "Website", cue: "Arrive · recognize", rotate: -7, x: -172 },
  { name: "Search", cue: "Find · recognize", rotate: 0, x: 0 },
  { name: "Social", cue: "Scroll · recognize", rotate: 7, x: 172 },
];

// A small scene per surface. The red mark repeats in each one.
const SurfaceArt = ({ name }: { name: string }) => {
  if (name === "Social") {
    return (
      <img
        src={postImg}
        alt=""
        width={1080}
        height={1080}
        loading="lazy"
        decoding="async"
        className="block h-full w-auto max-w-full rounded-[12px] object-contain"
      />
    );
  }
  if (name === "Search") {
    return (
      <div className="w-full px-4">
        {/* the wordmark, as it looks on the page you open */}
        <div className="flex justify-center">
          <span className="text-[27px] font-medium leading-none tracking-[-0.02em]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
          </span>
        </div>

        {/* the bar, with the address typed in */}
        <div className="mt-3.5 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-7px] ring-1 ring-[#e4e6eb] shadow-[0_10px_22px_-14px_rgba(32,33,36,0.45)]">
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#9aa0a6]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-4.2-4.2" />
          </svg>
          <span className="min-w-0 flex-1 truncate text-[9.5px] leading-none text-[#202124]">https://baysidepavers.com/</span>
          <span aria-hidden="true" className="h-3 w-px shrink-0 bg-[#4285f4] motion-safe:animate-pulse" />
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-[#9aa0a6]" fill="currentColor">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M6 11a6 6 0 0 0 12 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 17v3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* the result it lands on */}
        <div className="mt-3 rounded-[12px] bg-[#f3f7ff] p-2.5 ring-1 ring-[#d9e6ff]">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-full bg-[#1a73e8]" />
            <span className="h-1.5 w-14 rounded-full bg-[#b9ccea]" />
          </div>
          <span className="mt-2 block h-2 w-[86%] rounded-full bg-[#1a73e8]" />
          <span className="mt-1.5 block h-1.5 w-full rounded-full bg-[#cddcf5]" />
        </div>

        {[0, 1].map((r) => (
          <div key={r} className="mt-2.5 px-1">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ececec]" />
              <span className="h-1.5 w-12 rounded-full bg-[#e5e5e5]" />
            </div>
            <span className="mt-1.5 block h-1.5 w-[75%] rounded-full bg-[#f0f0f0]" />
          </div>
        ))}
      </div>
    );
  }
  // Website: the page itself, filling the card
  return (
    <img
      src={webImg}
      alt=""
      width={1906}
      height={898}
      loading="lazy"
      decoding="async"
      className="ml-2.5 block max-h-full w-[calc(100%-0.625rem)] rounded-[12px] object-contain"
    />
  );
};

const SurfaceFan = () => (
  <figure className="m-0">
    <p className="sr-only">One recurring visual signature across different channels: social, search and website each repeat the same mark.</p>
    <div aria-hidden="true" className="surface-fan relative h-[340px] md:h-[430px] rounded-[32px] bg-white overflow-hidden flex items-center justify-center">
      {surfaces.map((s, i) => (
        <div
          key={s.name}
          className="fan-card absolute w-[224px] md:w-[310px] h-[300px] md:h-[392px] rounded-[26px] bg-white ring-1 ring-[#ececec] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] p-5 flex flex-col transition-transform duration-700"
          style={{
            transform: `translateX(calc(${s.x}px * var(--spread, 0.88))) rotate(${s.rotate}deg)`,
            transitionTimingFunction: ease,
            zIndex: i === 1 ? 3 : 2,
          }}
        >
          <span className={`${i === 2 ? "self-end" : i === 1 ? "self-center" : "self-start"} rounded-full bg-[#f6f6f6] px-3 py-1 text-[12px] font-medium text-black`}>{s.name}</span>
          <div className="flex-1 min-h-0 -mx-5 flex items-center justify-center py-3">
            <SurfaceArt name={s.name} />
          </div>
          <span className={`text-[12px] text-[#9a9a9a] ${i === 2 ? "text-right" : i === 1 ? "text-center" : ""}`}>{s.cue}</span>
        </div>
      ))}
      <style>{`.surface-fan:hover > .fan-card { --spread: 1.1; }`}</style>
    </div>
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
        brand strategy work starts there, and our{" "}
        <Link to="/blog/why-choose-us" className={bbaLink}>approach to strategy and craft</Link> shows how we think.
      </>
    ),
  },
  {
    title: "Give the idea a form people recognize.",
    icon: icon(<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="14.5" cy="9.5" r="2.2" fill="currentColor" /></>),
    body: (
      <>
        One sharp headline. One odd little visual detail. A point of view that doesn't change every Tuesday. That does more for your online presence than a fresh style each quarter. We build the words and the look together, the way a good{" "}
        branding agency would. Our{" "}
        <Link to="/work/the-black-in-hr" className={bbaLink}>identity work for The Black in HR</Link> shows the discipline.
      </>
    ),
  },
  {
    title: "Turn appearances into familiarity.",
    icon: icon(<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 11 15.7 7M8.3 13l7.4 4" /></>),
    body: "Your social media presence is one corner. The website, the sales call and the email signature fill in the rest. If they sound like different companies, nobody connects them, and a believable social presence can't fix that.",
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
      className="group flex items-center gap-4 md:gap-6 rounded-[20px] bg-white ring-1 ring-[#efefef] px-5 py-4 md:px-6 md:py-5 transition-all duration-500 hover:-translate-y-0.5 hover:ring-[#e0e0e0] hover:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.35)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(16px)",
        transition: `opacity 600ms ease ${index * 140}ms, transform 800ms ${ease} ${index * 140}ms, box-shadow 500ms ease`,
      }}
    >
      <span aria-hidden="true" className="flex items-end gap-1 shrink-0">
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className={`w-1.5 rounded-full transition-colors duration-500 ${n <= index ? "bg-[#ff1616]" : "bg-[#e8e8e8]"}`} style={{ height: 9 + n * 6 }} />
        ))}
      </span>
      <span className="flex-1 text-[15px] md:text-[17px] font-medium text-black">{measure}</span>
      <span className="text-[15px] md:text-[17px] font-medium leading-none text-[#909396] whitespace-nowrap">
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

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-start">
            <Reveal className="lg:pt-2">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.15] text-black">
                <span className="block text-[40px] sm:text-[56px] lg:text-[60px] xl:text-[66px]">
                  Building Brand
                </span>
                <span className="block text-[42px] sm:text-[56px] lg:text-[62px] xl:text-[70px]" style={{ color: ACCENT }}>
                  Awareness
                </span>
              </h1>
              <p className="mt-6 text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
                Be seen.{" "}
                <span>
                  Then
                </span>{" "}
                <span className="text-[#909396]" style={{ fontFamily: "BlinkMacSystemFont, -apple-system, 'SF Pro Display', 'SF Pro Text', ui-sans-serif, system-ui, 'Segoe UI', sans-serif" }}>
                  be remembered.
                </span>
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-6 max-w-[560px]">
                It isn't a race to turn up in the most places. It's closer to becoming the name that pops into somebody's head on a slow Tuesday, right when they need what you sell.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Let's talk about your brand</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <MemoryStack />
            </Reveal>
          </div>
        </section>

        {/* ── THE QUESTION BEHIND THE REACH ── */}
        <section aria-labelledby="reframe-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="reframe-heading" className={h2Class}>
                <SplitHeading line="People forget posts." italic="They" rest="remember patterns." accent={ACCENT} />
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
            <p className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.15] tracking-[-0.035em]">
              <SplitHeading line="A brand should leave a trace, even after the post" italic="is" rest="gone." accent={ACCENT} />
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
                        <span className={`block text-[12px] ${last ? "text-[#6d7174]" : "text-[#9a9a9a]"}`}>{m.when}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <h2 id="imprint-heading" className={h2Class}>
                  <SplitHeading line="One identity." italic="Different" rest="places." accent={ACCENT} />
                </h2>
                <p className={`${bodyClass} mt-5 max-w-[460px] text-balance`}>Your Social Footprint only helps when every piece points back to the same face.</p>
              </Reveal>

              <Reveal delay={120}>
                <SurfaceFan />
              </Reveal>
            </div>

            <Reveal className="mt-20 md:mt-28">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">Six names for where a brand shows up</h3>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {presenceNames.map((n, i) => (
                <Reveal key={n.name} delay={(i % 3) * 100}>
                  <article className="group h-full rounded-[24px] bg-white p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <span aria-hidden="true" className="block w-8 h-[3px] rounded-full bg-[#e5e5e5] transition-colors duration-500 group-hover:bg-[#ff1616]" />
                    <h4 className="mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{n.name}</h4>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-3">{n.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WOULD APPROACH IT ── */}
        <section aria-labelledby="field-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-20 items-start">
            <h2 id="field-heading" className={h2Class}>
              <SplitHeading line="Building brand awareness comes" italic="down" rest="to memory." accent={ACCENT} />
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
                    <span className="w-14 h-14 shrink-0 rounded-full bg-[#fff1f1] flex items-center justify-center text-[#909396] transition-colors duration-500 group-hover:bg-[#ff1616] group-hover:text-white">
                      {a.icon}
                    </span>
                    <span aria-hidden="true" className="relative flex-1 h-px bg-[#ececec] overflow-hidden">
                      <span className="absolute inset-y-0 left-0 w-0 bg-[#ff1616] transition-all duration-700 ease-out group-hover:w-full" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">{a.title}</h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[BlinkMacSystemFont,-apple-system,'SF_Pro_Display','SF_Pro_Text',ui-sans-serif,system-ui,'Segoe_UI',sans-serif] mt-4">{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            <Reveal>
              <p className="font-medium text-[26px] md:text-[34px] leading-[1.15] tracking-[-0.035em] xl:[&>span]:whitespace-nowrap">
                <SplitHeading line="Not a bigger megaphone." italic="A" rest="clearer reason to remember you." accent={ACCENT} />
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className={bodyClass}>
                Out in the world, the work meets strangers. Back home, everything has to look like the same business. Skip that and the reach is wasted. Do it and you build brand awareness without shouting. A loud{" "}
                <Link to="/creative-campaigns" className={bbaLink}>creative campaign</Link> can supply it. A quiet one can too. Launching something new? Awareness is one part of our{" "}
                <Link to="/product-commercialization" className={bbaLink}>product commercialization</Link> work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE METRICS QUESTION ── */}
        <section aria-labelledby="evidence-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="evidence-heading" className={h2Class}>
                <SplitHeading line="A million views can still" italic="leave" rest="you off the shortlist." accent={ACCENT} />
              </h2>
              <p className={`${bodyClass} mt-8 max-w-[540px]`}>
                Dashboards report what happened on one platform. They don't say whether people can find you, spot you or think of you later.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[32px] bg-[#f6f6f6] ring-1 ring-[#ececec] p-6 md:p-10">
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
                  <span className="font-medium text-[#6d7174]">Remembered</span>
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
          accent={ACCENT}
          heading={<SplitHeading line="What people" italic="want" rest="to know." accent={ACCENT} />}
          note="Short, direct answers."
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.15] text-black">
                <HeroTitleLines line="Be the name" italic="they" rest="remember." plain compact accent="#ff1616" />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[720px]`}>
                Perfect Pixel Pro is a Creative Agency. Tell us what you make and who needs to know about it. We'll work out what you should be known for and how people will spot it when they bump into you. Building brand awareness is slow, but nobody has to guess.
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
