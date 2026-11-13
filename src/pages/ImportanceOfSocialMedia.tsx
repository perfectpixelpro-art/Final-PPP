// Service page: The Importance of Social Media.
// Copy is taken verbatim from the supplied interactive guide; the layout, type scale and
// interactions are rebuilt on the shared ServiceKit so the page matches the other service pages.
import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import storyboardPart1 from "../assets/storyboard-part-1.png";
import storyboardPart2 from "../assets/storyboard-part-2.png";
import {
  container, sectionY, h2Class, bodyClass,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection,
  prefersReducedMotion, usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
// Inline links follow this page's accent rather than the site red.
const ismLink = "underline decoration-[#909396] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#6d7174]";

const PAGE_TITLE = "The Importance of Social Media: An Interactive Guide | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "See the importance of social media at work. Fix a profile, plan a shoot, write a permission request and fill a week. By Perfect Pixel Pro.";

const faqs: Faq[] = [
  {
    q: "What is UGC Content?",
    a: "It stands for user-generated content, which is a fancy way of saying stuff your customers made. Say a buyer shoots her new fern on a windowsill and tags the shop. Nobody briefed her. That's ugc content. (Paid creator posts get lumped in sometimes, and they're a different animal.) Ask before you reuse it. Every single time. Money or a free gift involved? Say that too.",
  },
  {
    q: "importance of social media in 2027",
    a: "We wouldn't chase one viral moment. We'd plan for four small moments: people find you, size you up, message you, then need help. So the importance of social media in 2027 comes down to three plain things. A voice people recognize. Content worth their time. An easy road to your website. This was written in November 2026. Call it a plan. We're not predicting algorithms.",
  },
  {
    q: "Importance of ugc content for businesses",
    a: "A glossy campaign never mentions the awkward bits. How the pot fits into somebody's messy morning. What surprised them. Where it let them down. A buyer can judge fit from that, which is gold. But casual doesn't mean credible. One owner's story is just that.",
  },
  {
    q: "how to build a brand on social media?",
    a: "Two questions first. Who's listening? What would bring them back? Then turn up where they already spend time, at a pace you can keep (replies included). A few visual cues help. So does repeating whatever earns attention. Notice which posts spark real conversations, visits and inquiries. Make more of those.",
  },
  {
    q: "How does Product Photography help sales?",
    a: "Mostly by answering what buyers never type. How big is it, really? Shiny glaze, or matte? They can't touch it, so the photo answers for the pot. A set of matching pictures also tells people the shop will be here next month. A sales lift? We won't quote one. Too many things move it.",
  },
  {
    q: "Is paid media worth it for a small business?",
    a: "Sometimes. Our pick would be a post that already did fine for free, like a customer video people kept replying to. Try a small budget. Aim it at lookalikes of your buyers. Then read the results before spending more. And if nothing earns attention on its own? Ads rarely fix that. Louder isn't better.",
  },
  {
    q: "Does Personal branding matter for founders?",
    a: "Usually, yes. Faces win trust faster than logos do. No need to become an influencer for that. Just know the product cold (picture the founder explaining why a glaze cracked). And pick what stays private before post one. Not after the awkward post.",
  },
  {
    q: "How do you know the content is working?",
    a: "Depends what the post was for. A discovery post? Look at reach. An interest post? Count saves and good questions. A business post? Look for qualified inquiries and purchases. Likes alone prove very little about sales. Then set the platform's numbers beside your website and sales records. Gaps? Admit them.",
  },
];

const structuredData = [
  articleSchema("The importance of social media shows up in one thumb flick.", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

/* ─────────────────────────── shared bits ─────────────────────────── */

const meta = "text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#9a9a9a]";
const panel = "rounded-[30px] bg-white ring-1 ring-[#ececec] shadow-[0_34px_70px_-55px_rgba(13,13,13,0.55)]";


const Cap = ({ children }: { children: ReactNode }) => (
  <p className="border-l-2 border-[#ff1616] pl-5 text-[15px] leading-[1.75] text-[#6d6d6d] md:text-[16px]">
    {children}
  </p>
);

const TestLine = ({ children }: { children: ReactNode }) => (
  <Reveal className="mt-14 md:mt-20">
    <p className="mx-auto flex w-fit max-w-full flex-col gap-3 rounded-[24px] bg-white px-7 py-6 ring-1 ring-[#ececec] shadow-[0_34px_70px_-55px_rgba(13,13,13,0.55)] sm:flex-row sm:items-center sm:gap-6 md:px-9 md:py-7">
      <span className="shrink-0 self-start rounded-full bg-[#ff1616] px-4 py-1.5 text-[13px] font-semibold text-white sm:self-auto">The test.</span>
      <span className="text-[20px] leading-[1.3] tracking-[-0.015em] text-black md:text-[24px]">{children}</span>
    </p>
  </Reveal>
);

// One segmented control, used by every picker on the page.
const Segmented = ({ label, options, value, onChange }: {
  label: string;
  options: [string, string][];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div role="group" aria-label={label} className="inline-flex flex-wrap gap-1 rounded-full bg-[#efefef] p-1">
    {options.map(([k, t]) => (
      <button
        key={k}
        type="button"
        aria-pressed={value === k}
        onClick={() => onChange(k)}
        className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 md:text-[14px] ${
          value === k ? "bg-[#0d0d0d] text-white shadow-[0_8px_20px_-12px_rgba(13,13,13,0.9)]" : "text-[#6d6d6d] hover:text-black"
        }`}
      >
        {t}
      </button>
    ))}
  </div>
);

/* ─────────────────────────── hero: the thumb flick ─────────────────────────── */

const deck: [string, string][] = [
  ["Exciting news!", "We have new products available. Shop now at the link in bio."],
  ["This pot cracked in the kiln.", "We kept it. Gold seam, one of one, and it still holds a fern."],
  ["Our values: quality, passion, community.", "We are passionate about plants."],
  ["Saturday: bring a dying plant.", "We'll tell you what went wrong. No judgment. Some judgment."],
];

const LeafMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19c0-7 5-12 14-13 1 9-4 14-11 14H5Z" />
    <path d="M8 19c2-4 5-7 9-9" />
  </svg>
);

// What each made-up post actually shows. The vague ones are drawn in grey, the specific ones in red.
const PostArt = ({ i }: { i: number }) => (
  <svg viewBox="0 0 320 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {/* generic product line-up */}
    {i === 0 && (
      <>
        <path d="M34 164h252" stroke="#dcdcdc" strokeWidth="1.4" />
        {[86, 160, 234].map((x) => (
          <g key={x} transform={"translate(" + (x - 63) + ",49) scale(1.26)"}><Pot accent="#d4d4d4" crack={false} /></g>
        ))}
      </>
    )}

    {/* the pot that cracked, seam and all */}
    {i === 1 && (
      <>
        <ellipse cx="160" cy="180" rx="62" ry="7" fill="#000000" opacity="0.22" />
        <g transform="translate(58,7) scale(2.04)"><Pot /></g>
      </>
    )}

    {/* three words that could belong to anyone */}
    {i === 2 && (
      <>
        <circle cx="126" cy="78" r="52" fill="none" stroke="#d4d4d4" strokeWidth="1.4" />
        <circle cx="194" cy="78" r="52" fill="none" stroke="#d4d4d4" strokeWidth="1.4" />
        <circle cx="160" cy="134" r="52" fill="none" stroke="#d4d4d4" strokeWidth="1.4" />
      </>
    )}

    {/* a plant that has seen better days */}
    {i === 3 && (
      <>
        <path d="M34 172h252" stroke="#ffffff" strokeWidth="1.4" opacity="0.45" />
        <g transform="translate(160,108)">
          <g transform="rotate(-128) scale(2)"><Leaf fill="#ffffff" /></g>
          <g transform="rotate(138) scale(2.2)"><Leaf fill="#ffffff" /></g>
          <g transform="rotate(177) scale(1.8)"><Leaf fill="#0d0d0d" /></g>
        </g>
        <g transform="translate(103,99) scale(1.14)"><Pot accent="#0d0d0d" crack={false} /></g>
      </>
    )}
  </svg>
);

// The hero story, told as a loop: a window seat, a feed, one post that earns a stop.
const storyScenes = [
  { cap: "Picture a woman on a train." },
  { cap: "She opens an app." },
  { cap: "Sees a plant shop's post." },
  { cap: "Keeps scrolling. Gone." },
  { cap: "The product someone saves." },
  { cap: "The answer they send a friend." },
  { cap: "The reply that helps them choose." },
];

const POST_H = 300;
const STORY_H = 66;

const postTone = ["bg-[#f1f1f1]", "bg-[#0d0d0d]", "bg-[#f1f1f1]", "bg-[#ff1616]"];

// One post in the feed, built the way a real one is.
const FeedPost = ({ art, saved = false, dim = false }: { art: number; saved?: boolean; dim?: boolean }) => (
  <div
    className={`flex flex-col border-b border-[#f1f1f1] transition-opacity duration-700 ${dim ? "opacity-35" : "opacity-100"}`}
    style={{ height: POST_H }}
  >
    <div className="flex shrink-0 items-center gap-2 px-3 py-2.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-[1.5px] ring-[1.5px] ring-[#ff1616]">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#fff1f1] text-[#ff1616]">
          <LeafMark className="h-3 w-3" />
        </span>
      </span>
      <span className="text-[8.5px] font-semibold tracking-[-0.01em] text-black">Juniper Plant Shop</span>
      <span aria-hidden="true" className="ml-auto flex gap-[2.5px]">
        <span className="block h-[2.5px] w-[2.5px] rounded-full bg-[#c4c4c4]" />
        <span className="block h-[2.5px] w-[2.5px] rounded-full bg-[#c4c4c4]" />
        <span className="block h-[2.5px] w-[2.5px] rounded-full bg-[#c4c4c4]" />
      </span>
    </div>

    <div className={`min-h-0 flex-1 overflow-hidden ${postTone[art]}`}>
      <PostArt i={art} />
    </div>

    <div className="flex shrink-0 items-center gap-2.5 px-3 py-2 text-[#9a9a9a]">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20Z" /></svg>
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v11H10l-5 4v-4H4z" /></svg>
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 4 10 14M21 4l-7 17-4-7-7-4Z" /></svg>
      <span className={`relative ml-auto transition-colors duration-500 ${saved ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>
        {saved && <span aria-hidden="true" className="ism-pop absolute -inset-2 rounded-full bg-[#ff1616]/25" />}
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M6.5 4h11v16l-5.5-4.3L6.5 20z" />
        </svg>
      </span>
    </div>

    <div className="shrink-0 px-3 pb-3">
      <span className="block h-[3.5px] w-[78%] rounded-full bg-[#e7e7e7]" />
      <span className="mt-1.5 block h-[3.5px] w-[52%] rounded-full bg-[#f0f0f0]" />
    </div>
  </div>
);

// The app icon, drawn the way the real one looks.
const AppMark = ({ className = "h-full w-full" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="ism-app-g" cx="28%" cy="105%" r="145%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="12%" stopColor="#fdd14f" />
        <stop offset="42%" stopColor="#fd5949" />
        <stop offset="62%" stopColor="#d6249f" />
        <stop offset="92%" stopColor="#285aeb" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="7" fill="url(#ism-app-g)" />
    <rect x="5.4" y="5.4" width="13.2" height="13.2" rx="4.2" fill="none" stroke="#ffffff" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3.3" fill="none" stroke="#ffffff" strokeWidth="1.7" />
    <circle cx="16.8" cy="7.3" r="1.1" fill="#ffffff" />
  </svg>
);

// The home screen she opens it from.
const HomeScreen = () => (
  <div className="absolute inset-0" style={{ background: "linear-gradient(165deg,#dfe7ee 0%,#eef2f6 45%,#e6ded8 100%)" }}>
    <div className="grid h-full grid-cols-4 content-start gap-x-3 gap-y-4 px-4 pb-14 pt-11">
      {Array.from({ length: 12 }, (_, k) => {
        const app = k === 5;
        return (
          <span key={k} className="relative flex flex-col items-center gap-1">
            {app && <span aria-hidden="true" className="ism-tap absolute -inset-1 rounded-[12px] bg-white/70" />}
            <span
              className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[11px] ${app ? "shadow-[0_6px_12px_-6px_rgba(214,36,159,0.85)]" : "bg-white/55"}`}
            >
              {app && <AppMark />}
            </span>
            <span className={`block h-[2.5px] w-[70%] rounded-full ${app ? "bg-[#6d6d6d]" : "bg-white/70"}`} />
          </span>
        );
      })}
    </div>
    <div className="absolute inset-x-4 bottom-3 flex items-center justify-around rounded-[16px] bg-white/45 px-3 py-2 backdrop-blur-sm">
      {[0, 1, 2, 3].map((k) => (
        <span key={k} className="block h-6 w-6 rounded-[8px] bg-white/70" />
      ))}
    </div>
  </div>
);

// The moment after the tap, before the feed.
const Splash = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white">
    <span className="ism-launch block h-16 w-16 overflow-hidden rounded-[20px] shadow-[0_16px_28px_-12px_rgba(214,36,159,0.8)]">
      <AppMark />
    </span>
  </div>
);

// The row of circles every feed opens with: her own story first, then the shops she follows.
const STORY_RING = "linear-gradient(45deg,#f9ce34 5%,#ee2a7b 50%,#6228d7 95%)";

const stories = [
  { mine: true, face: "linear-gradient(145deg,#cfd4d9,#aab2ba)", seen: false },
  { mine: false, face: "linear-gradient(145deg,#2f7d4f,#9ad9b2)", seen: false },
  { mine: false, face: "linear-gradient(145deg,#c3452f,#f6a98a)", seen: false },
  { mine: false, face: "linear-gradient(145deg,#2f4f7d,#9bc0de)", seen: false },
  { mine: false, face: "linear-gradient(145deg,#6d4f7d,#c6abd8)", seen: true },
  { mine: false, face: "linear-gradient(145deg,#8a6a2f,#e3c58a)", seen: true },
];

const StoryRow = () => (
  <div className="flex shrink-0 items-start gap-3 border-b border-[#f1f1f1] px-3 pt-2.5" style={{ height: STORY_H }}>
    {stories.map((st, k) => (
      <span key={k} className="flex w-9 shrink-0 flex-col items-center gap-[5px]">
        <span className="relative block h-9 w-9 rounded-full p-[2px]" style={{ background: st.mine ? "#e6e6e6" : st.seen ? "#dcdcdc" : STORY_RING }}>
          <span className="flex h-full w-full items-center justify-center rounded-full bg-white p-[1.5px]">
            <span className="block h-full w-full rounded-full" style={{ background: st.face }} />
          </span>
          {st.mine && (
            <span className="absolute -bottom-[1px] -right-[1px] flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#0095f6] ring-[1.5px] ring-white">
              <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 2.8v6.4M2.8 6h6.4" />
              </svg>
            </span>
          )}
        </span>
        <span className={`block h-[3px] rounded-full ${st.seen ? "w-4 bg-[#ededed]" : "w-5 bg-[#e0e0e0]"}`} />
      </span>
    ))}
  </div>
);

// The bar at the bottom of every app.
const TabBar = () => (
  <div className="flex shrink-0 items-center justify-around border-t border-[#f1f1f1] px-3 py-2 text-[#c4c4c4]">
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] text-[#0d0d0d]" fill="currentColor"><path d="M4 11 12 4l8 7v9h-6v-5h-4v5H4z" /></svg>
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 9v6M9 12h6" /></svg>
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20Z" /></svg>
    <span className="block h-[15px] w-[15px] rounded-full bg-[#e4e4e4]" />
  </div>
);

// The hero storyboard: two halves that cross-fade, ten seconds each, on a loop.
const storyboardParts = [storyboardPart1, storyboardPart2];
const STORYBOARD_MS = 10000;

const StoryboardSwap = () => {
  const [part, setPart] = useState(0);
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setPart((n) => (n + 1) % storyboardParts.length), STORYBOARD_MS);
    return () => window.clearInterval(t);
  }, [reduced]);

  const shown = reduced ? 0 : part;

  return (
    <figure className="m-0 flex h-full items-center justify-center">
      <p className="sr-only">
        A storyboard of a commuter on a train: she opens an app, a plant shop's post passes by, and one post that answers a real question earns a stop.
      </p>
      <div aria-hidden="true" className="relative w-[calc(100%-20px)] max-w-[700px]">
        {storyboardParts.map((src, k) => (
          <img
            key={k}
            src={src}
            alt=""
            draggable={false}
            loading={k === 0 ? "eager" : "lazy"}
            className={`w-full select-none rounded-[22px] object-contain shadow-[0_34px_70px_-50px_rgba(13,13,13,0.55)] ring-1 ring-[#ececec] transition-opacity duration-700 ease-out ${
              k === 0 ? "relative" : "absolute inset-0"
            } ${k === shown ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </figure>
  );
};

const StoryReel = () => {
  const [i, setI] = useState(0);
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % storyScenes.length), 2800);
    return () => window.clearInterval(t);
  }, [reduced]);

  const on = reduced ? 2 : i;
  const scrolled = on >= 3;

  return (
    <figure className="m-0 flex h-full flex-col">
      {/* the phone, and nothing around it */}
      <div className="flex flex-1 items-center justify-center">
        <div className="ism-float relative aspect-[152/272] h-[clamp(285px,36vw,470px)]">
          <span aria-hidden="true" className="absolute inset-x-6 -bottom-4 h-9 rounded-full bg-[#0d0d0d]/10 blur-xl" />
          <span aria-hidden="true" className="absolute -left-[3px] top-[26%] h-[13%] w-[3px] rounded-l bg-gradient-to-b from-[#55565a] to-[#2e2f33]" />
          <span aria-hidden="true" className="absolute -left-[3px] top-[42%] h-[13%] w-[3px] rounded-l bg-gradient-to-b from-[#55565a] to-[#2e2f33]" />
          <span aria-hidden="true" className="absolute -right-[3px] top-[35%] h-[20%] w-[3px] rounded-r bg-gradient-to-b from-[#55565a] to-[#2e2f33]" />

          <div className="relative h-full w-full rounded-[34px] bg-gradient-to-br from-[#4a4b4f] via-[#1b1c1f] to-[#3a3b3f] p-[4px] shadow-[0_26px_44px_-26px_rgba(13,13,13,0.38)]">
            <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-white">
              <span aria-hidden="true" className="absolute left-1/2 top-[9px] z-20 h-[14px] w-[48px] -translate-x-1/2 rounded-full bg-black" />

              <div className={`absolute inset-0 transition-all duration-500 ${on === 0 ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"}`}>
                <HomeScreen />
              </div>
              <div className={`absolute inset-0 transition-opacity duration-400 ${on === 1 ? "opacity-100" : "opacity-0"}`}>
                <Splash />
              </div>

              <div className={`absolute inset-0 flex h-full flex-col transition-all duration-700 ${on >= 2 ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}>
                {/* status bar */}
                <div className="flex shrink-0 items-center gap-[3px] px-3.5 pb-1 pt-[11px]">
                  <span aria-hidden="true" className="ml-auto flex items-end gap-[1.5px]">
                    {[3, 5, 7, 9].map((h) => (
                      <span key={h} className="block w-[2px] rounded-sm bg-[#0d0d0d]" style={{ height: h }} />
                    ))}
                  </span>
                  <span aria-hidden="true" className="ml-[3px] block h-[7px] w-[12px] rounded-[2px] border border-[#0d0d0d] p-[1px]">
                    <span className="block h-full w-[70%] rounded-[1px] bg-[#0d0d0d]" />
                  </span>
                </div>

                {/* the feed */}
                <div className="relative min-h-0 flex-1 overflow-hidden">
                  <div
                    className="transition-transform duration-[1100ms]"
                    style={{ transform: `translateY(${scrolled ? -(POST_H + STORY_H) : 0}px)`, transitionTimingFunction: "cubic-bezier(.22,.7,.2,1)" }}
                  >
                    <StoryRow />
                    <FeedPost art={1} dim={scrolled} />
                    <FeedPost art={3} saved={on >= 4} />
                    <FeedPost art={0} />
                  </div>

                  {/* sent on to a friend: the share sheet slides up over the feed */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 rounded-t-[18px] bg-white px-3 pb-3 pt-2.5 shadow-[0_-14px_30px_-18px_rgba(13,13,13,0.45)] transition-all duration-500 ${
                      on === 5 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
                    }`}
                  >
                    <span className="mx-auto mb-2.5 block h-[3px] w-8 rounded-full bg-[#dcdcdc]" />
                    <div className="flex items-center gap-3">
                      {[
                        { face: "linear-gradient(145deg,#2f7d4f,#9ad9b2)", sent: true },
                        { face: "linear-gradient(145deg,#c3452f,#f6a98a)", sent: false },
                        { face: "linear-gradient(145deg,#2f4f7d,#9bc0de)", sent: false },
                        { face: "linear-gradient(145deg,#6d4f7d,#c6abd8)", sent: false },
                      ].map((c, k) => (
                        <span key={k} className="flex w-9 shrink-0 flex-col items-center gap-[5px]">
                          <span className="relative block h-9 w-9 rounded-full" style={{ background: c.face }}>
                            {c.sent && on === 5 && (
                              <span className="ism-pop absolute -bottom-[1px] -right-[1px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#0095f6] ring-[1.5px] ring-white">
                                <svg viewBox="0 0 12 12" className="h-[7px] w-[7px]" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2.4 6.3 4.8 8.7 9.6 3.6" />
                                </svg>
                              </span>
                            )}
                          </span>
                          <span className="block h-[3px] w-5 rounded-full bg-[#e4e4e4]" />
                        </span>
                      ))}
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="flex h-[22px] flex-1 items-center rounded-full bg-[#f3f3f3] px-2.5">
                        <span className="block h-[3px] w-10 rounded-full bg-[#d6d6d6]" />
                      </span>
                      <span className="flex h-[22px] items-center rounded-full bg-[#0095f6] px-2.5 text-[8px] font-semibold tracking-[-0.01em] text-white">
                        Sent
                      </span>
                    </div>
                  </div>

                  {/* the plane that leaves with it */}
                  <span aria-hidden="true" className={`absolute bottom-[74px] right-[22px] text-[#0095f6] ${on === 5 ? "ism-send" : "opacity-0"}`}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21 4 10 14M21 4l-7 17-4-7-7-4Z" /></svg>
                  </span>

                  {/* the reply that helps: the thread she sent it into */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 flex flex-col bg-white transition-all duration-600 ${
                      on === 6 ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
                    }`}
                  >
                    <div className="flex shrink-0 items-center gap-2 border-b border-[#f1f1f1] px-3 py-2.5">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#0d0d0d]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m14 5-7 7 7 7" />
                      </svg>
                      <span className="block h-6 w-6 shrink-0 rounded-full" style={{ background: "linear-gradient(145deg,#c3452f,#f6a98a)" }} />
                      <span className="text-[9px] font-semibold tracking-[-0.01em] text-black">Priya</span>
                      <span className="ml-auto block h-[3px] w-6 rounded-full bg-[#ececec]" />
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 px-3 pb-3">
                      {/* what she sent: the post itself */}
                      <div className={`self-end overflow-hidden rounded-[12px] rounded-br-[4px] ring-1 ring-[#ececec] ${on === 6 ? "ism-pop" : ""}`} style={{ width: "58%" }}>
                        <span className="block h-[72px] w-full bg-[#ff1616]">
                          <PostArt i={3} />
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-2 py-1.5">
                          <span className="block h-[3px] w-10 rounded-full bg-[#e4e4e4]" />
                        </span>
                      </div>
                      <span className="self-end text-[7px] uppercase tracking-[0.12em] text-[#c4c4c4]">Sent</span>

                      {/* what came back */}
                      <div
                        className="flex items-end gap-1.5 self-start transition-all duration-500"
                        style={{ transitionDelay: "700ms", opacity: on === 6 ? 1 : 0, transform: `translateY(${on === 6 ? 0 : 8}px)`, maxWidth: "80%" }}
                      >
                        <span className="block h-5 w-5 shrink-0 rounded-full" style={{ background: "linear-gradient(145deg,#c3452f,#f6a98a)" }} />
                        <span className="rounded-[14px] rounded-bl-[4px] bg-[#f1f1f1] px-2.5 py-2 text-[8.5px] leading-[1.45] text-black">
                          That's the one on my desk. Get the small one, it does fine in low light.
                        </span>
                      </div>

                      <div className="mt-1 flex shrink-0 items-center gap-2 rounded-full bg-[#f6f6f6] px-3 py-2">
                        <span className="block h-[3px] w-12 rounded-full bg-[#dcdcdc]" />
                        <span className="ml-auto text-[7.5px] font-semibold uppercase tracking-[0.12em] text-[#bdbdbd]">Send</span>
                      </div>
                    </div>
                  </div>
                </div>

                <TabBar />
              </div>

              {/* light that travels across the glass */}
              <span aria-hidden="true" className="ism-glint pointer-events-none absolute -left-10 top-0 h-full w-14 rotate-[18deg] bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      {/* what is happening */}
      <div className="mt-8 shrink-0">
        <p key={on} className="m-0 min-h-[2.8em] animate-[ismUp_500ms_ease_both] text-center text-[17px] leading-[1.4] tracking-[-0.02em] text-black md:text-[19px]">
          {storyScenes[on].cap}
        </p>
      </div>

      <style>{`
        .ism-float { animation: ismFloat 7s ease-in-out infinite; }
        @keyframes ismFloat { 0%, 100% { transform: translateY(-4px) } 50% { transform: translateY(4px) } }
        .ism-glint { animation: ismGlint 7s ease-in-out 1s infinite; }
        @keyframes ismGlint { 0%, 70%, 100% { transform: translateX(0) rotate(18deg) } 35% { transform: translateX(190px) rotate(18deg) } }
        .ism-tap { animation: ismTap 2.8s ease-out infinite; }
        @keyframes ismTap { 0% { transform: scale(.8); opacity: 0 } 15% { opacity: .9 } 45%, 100% { transform: scale(1.5); opacity: 0 } }
        .ism-launch { animation: ismLaunch 700ms cubic-bezier(.2,.8,.2,1) both; }
        @keyframes ismLaunch { 0% { transform: scale(.55); opacity: 0 } 60% { opacity: 1 } 100% { transform: scale(1); opacity: 1 } }
        .ism-pop { animation: ismPop 700ms ease-out forwards; }
        @keyframes ismPop { 0% { transform: scale(.4); opacity: .8 } 100% { transform: scale(1.6); opacity: 0 } }
        .ism-send { animation: ismSend 1000ms cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes ismSend { 0% { opacity: 0; transform: translate(0,14px) scale(.7) } 20% { opacity: 1 } 60% { opacity: 1 } 100% { opacity: 0; transform: translate(26px,-58px) scale(1.2) } }
        @media (prefers-reduced-motion: reduce) {
          .ism-send, .ism-float, .ism-glint, .ism-pop, .ism-tap, .ism-launch { animation: none }
        }
      `}</style>
    </figure>
  );
};

// Four posts, one at a time, chosen from a strip. Mark the ones worth a stop.
const PhoneDeck = () => {
  const [at, setAt] = useState(0);
  const [kept, setKept] = useState<boolean[]>(deck.map(() => false));
  const [touched, setTouched] = useState(false);
  const media = ["bg-[#f4f4f4]", "bg-[#0d0d0d]", "bg-[#f4f4f4]", "bg-[#ff1616]"];
  const count = kept.filter(Boolean).length;
  const on = kept[at];

  const mark = () => {
    setTouched(true);
    setKept((prev) => prev.map((v, j) => (j === at ? !v : v)));
  };

  return (
    <figure className={`m-0 mx-auto w-full max-w-[480px] overflow-hidden lg:mx-0 lg:ml-auto ${panel}`}>
      {/* whose feed */}
      <div className="flex items-center gap-3 px-6 py-3 md:px-6">
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff1f1] text-[#ff1616] ring-1 ring-[#ffe1e1]">
          <LeafMark className="h-4 w-4" />
        </span>
        <span className="text-[14px] font-semibold tracking-[-0.01em] text-black">Juniper Plant Shop</span>
        <span aria-hidden="true" className="ml-auto flex gap-[3px]">
          <span className="h-[3px] w-[3px] rounded-full bg-[#cfcfcf]" />
          <span className="h-[3px] w-[3px] rounded-full bg-[#cfcfcf]" />
          <span className="h-[3px] w-[3px] rounded-full bg-[#cfcfcf]" />
        </span>
      </div>

      {/* the post in front of you */}
      <div className="relative">
        <div key={at} className={`aspect-[2/1] w-full animate-[ismFade_500ms_ease_both] ${media[at]}`}>
          <PostArt i={at} />
        </div>

        <button
          type="button"
          aria-pressed={on}
          aria-label="Stop"
          onClick={mark}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            on
              ? "bg-[#ff1616] text-white shadow-[0_14px_26px_-14px_rgba(255,22,22,0.9)]"
              : "bg-white/95 text-[#0d0d0d] shadow-[0_14px_26px_-16px_rgba(13,13,13,0.9)] hover:scale-105"
          }`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px]" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
            <path d="M6.5 4h11v16l-5.5-4.3L6.5 20z" />
          </svg>
        </button>
      </div>

      <div key={`t-${at}`} className="animate-[ismFade_500ms_ease_both] px-6 pb-5 pt-4">
        <b className="block text-[18px] font-semibold leading-[1.2] tracking-[-0.025em] text-black md:text-[19px]">{deck[at][0]}</b>
        <span className="mt-1.5 block min-h-[40px] text-[14px] leading-[1.55] text-[#6d6d6d]">{deck[at][1]}</span>
      </div>

      {/* the rest of the feed */}
      <div className="flex gap-2 border-t border-[#f1f1f1] px-6 py-4">
        {deck.map(([title], k) => (
          <button
            key={title}
            type="button"
            aria-label={title}
            aria-current={k === at}
            onClick={() => setAt(k)}
            className={`group relative h-[50px] flex-1 overflow-hidden rounded-[9px] transition-all duration-300 ${media[k]} ${
              k === at ? "ring-2 ring-[#0d0d0d] ring-offset-2 ring-offset-white" : "opacity-50 hover:opacity-90"
            }`}
          >
            <PostArt i={k} />
            {kept[k] && (
              <span aria-hidden="true" className="absolute right-1.5 top-1.5 block h-2 w-2 rounded-full bg-[#ff1616] ring-2 ring-white" />
            )}
          </button>
        ))}
      </div>

      {/* what your thumb just said */}
      <div aria-live="polite" className="border-t border-[#ececec] bg-[#fbfbfb] px-6 py-5">
        <div className="flex items-center gap-4">
          <p className="m-0 text-[17px] font-semibold leading-[1.2] tracking-[-0.03em] text-black md:text-[18px]">
            You stopped on {count} of {deck.length}.
          </p>
          <button
            type="button"
            onClick={() => { setKept(deck.map(() => false)); setTouched(false); setAt(0); }}
            className="ml-auto text-[12px] font-medium text-[#0d0d0d] underline decoration-[#ff1616] decoration-1 underline-offset-4 transition-colors hover:text-[#ff1616]"
          >
            Restart
          </button>
        </div>

        {touched && (
          <p className="m-0 mt-3 animate-[ismUp_400ms_ease_both] text-[13px] leading-[1.7] text-[#555]">
            The posts that earned a stop had a specific thing in them: a crack, a Saturday, a promise. The others could belong to any shop on earth. (A made-up test with made-up posts, so treat it as a mirror and not a measurement.)
          </p>
        )}
      </div>
    </figure>
  );
};

/* ─────────────────────────── presence: the profile ─────────────────────────── */

const profile = {
  name: ["Juniper Plant Shop Official Page", "Juniper Plant Shop | Plants for small apartments"],
  bio: [
    "Welcome to our page! Follow for plants. DM to order.",
    "Houseplants for small apartments. Ships Tuesday and Friday. Ask us what's wrong with yours.",
  ],
  grid: ["Random photos, random filters", "One light, one crop, one color family"],
  hl: [["Misc", "Stuff", "More"], ["Care", "Shipping", "Pots", "Reviews"]],
};

type Part = "name" | "bio" | "grid" | "hl";
const messyTiles = ["#c2a35b", "#5d7f9e", "#a85a4e", "#6f8f72", "#7a6b8f", "#c2855a"];
const messyShape = ["rounded-[2px] rotate-[1.5deg]", "rounded-[14px] -rotate-[3deg]", "rounded-full", "rounded-none rotate-[2.5deg]", "rounded-[18px] -rotate-[2deg]", "rounded-[4px] rotate-[4deg]"];
const tidyTiles = ["#ff1616", "#ffd9d9", "#ff6b6b", "#ffd9d9", "#ff6b6b", "#ff1616"];
const messyScale = [0.78, 0.94, 0.62, 0.88, 0.7, 0.98];
const messyRot = [-5, 3, 0, 6, -7, 2];
const messyRadius = ["2px", "16px", "50%", "0px", "22px", "4px"];

// Each part of the profile is its own switch: tap the name, the bio, the highlights or the grid.
const Flip = ({ on, label, onClick, className = "", children }: {
  on: boolean; label: string; onClick: () => void; className?: string; children: ReactNode;
}) => (
  <button
    type="button"
    aria-pressed={on}
    aria-label={label}
    onClick={onClick}
    className={`group relative w-full text-left transition-colors duration-300 ${className}`}
  >
    <span
      aria-hidden="true"
      className={`absolute right-0 top-1 flex h-[24px] w-[24px] items-center justify-center rounded-full transition-all duration-300 ${
        on ? "bg-[#ff1616] text-white" : "bg-[#f2f2f2] text-[#b4b4b4] opacity-0 group-hover:opacity-100"
      }`}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6.4h9.5l-2.6-2.6M13 9.6H3.5l2.6 2.6" />
      </svg>
    </span>
    {children}
  </button>
);

const ProfileFlip = () => {
  const [on, setOn] = useState<Record<Part, boolean>>({ name: false, bio: false, grid: false, hl: false });
  const flip = (k: Part) => setOn((s) => ({ ...s, [k]: !s[k] }));

  return (
    <figure aria-live="polite" className={`m-0 mx-auto flex w-full max-w-[440px] flex-col overflow-hidden lg:ml-auto lg:mr-0 lg:h-[calc(100%-51px)] ${panel}`}>
      <div className="flex flex-1 flex-col justify-between gap-6 px-6 pb-6 pt-7 md:px-7">
        {/* name */}
        <Flip on={on.name} label="Name" onClick={() => flip("name")} className="flex items-center gap-4 pr-9">
          <span aria-hidden="true" className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#fff1f1] text-[#ff1616] ring-1 ring-[#ffe1e1]">
            <LeafMark className="h-[26px] w-[26px]" />
          </span>
          <span className="text-[16px] font-semibold leading-[1.3] tracking-[-0.015em] text-black">
            {profile.name[on.name ? 1 : 0]}
          </span>
        </Flip>

        {/* bio */}
        <Flip on={on.bio} label="Bio" onClick={() => flip("bio")} className="mt-5 block pr-9">
          <span className="block text-[15px] leading-[1.65] text-[#555]">{profile.bio[on.bio ? 1 : 0]}</span>
        </Flip>

        {/* highlights */}
        <Flip on={on.hl} label="Highlights" onClick={() => flip("hl")} className="mt-6 block pr-9">
          <span className="flex flex-wrap gap-x-5 gap-y-3">
            {profile.hl[on.hl ? 1 : 0].map((h) => (
              <span key={h} className="w-[42px] text-center text-[11px] leading-tight text-[#6d6d6d]">
                <span
                  aria-hidden="true"
                  className={`mx-auto mb-2 block h-[38px] w-[38px] rounded-full transition-colors duration-500 ${
                    on.hl ? "bg-white ring-1 ring-[#ff1616]" : "bg-[#f2f2f2] ring-1 ring-[#e7e7e7]"
                  }`}
                />
                {h}
              </span>
            ))}
          </span>
        </Flip>
      </div>

      {/* grid, edge to edge like a real profile */}
      <Flip on={on.grid} label="Grid" onClick={() => flip("grid")} className="block">
        <span aria-hidden="true" className="grid grid-cols-3 gap-[3px] bg-[#ececec] pt-[3px]">
          {messyTiles.map((c, idx) => (
            <span key={idx} className="block aspect-square overflow-hidden bg-[#f7f7f7]">
              <span
                className="block h-full w-full transition-all duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                style={
                  on.grid
                    ? { background: tidyTiles[idx] }
                    : { background: c, transform: `scale(${messyScale[idx]}) rotate(${messyRot[idx]}deg)`, borderRadius: messyRadius[idx] }
                }
              />
            </span>
          ))}
        </span>
      </Flip>

      <figcaption className="flex items-center gap-3 border-t border-[#f1f1f1] px-6 py-4 md:px-7">
        <span aria-hidden="true" className={`block h-[2px] w-3.5 shrink-0 transition-colors duration-500 ${on.grid ? "bg-[#ff1616]" : "bg-[#d4d4d4]"}`} />
        <span className="text-[13px] text-[#9a9a9a]">{profile.grid[on.grid ? 1 : 0]}</span>
      </figcaption>
    </figure>
  );
};

/* ─────────────────────────── presence: the consistency slider ─────────────────────────── */

const seeds: [number, number, number][] = [
  [12, -9, 40], [200, 7, 0], [310, -4, 50],
  [95, 11, 10], [260, -12, 50], [30, 5, 0],
  [150, -6, 30], [340, 9, 50], [70, -3, 20],
];

const GridSlider = () => {
  const [v, setV] = useState(0);
  const t = v / 100;
  const verdict = v < 15 ? "Yard sale." : v < 60 ? "Getting somewhere." : v < 90 ? "Reads as one shop." : "Reads as one shop. Instantly.";

  return (
    <div className={`${panel} grid grid-cols-1 items-center gap-10 p-6 md:p-9 lg:grid-cols-[minmax(0,330px)_1fr] lg:gap-16`}>
      <div aria-hidden="true" className="grid grid-cols-3" style={{ gap: `${3 + 7 * (1 - t)}px` }}>
        {seeds.map((s, i) => {
          const hue = s[0] * (1 - t) + ((i % 3) * 4) * t;
          const sat = 85 * (1 - t) + 72 * t;
          const light = 48 * (1 - t) + (70 + (i % 2) * 10) * t;
          return (
            <span
              key={i}
              className="block aspect-square"
              style={{
                background: `hsl(${hue},${sat}%,${light}%)`,
                transform: `rotate(${s[1] * (1 - t)}deg)`,
                borderRadius: `${s[2] * (1 - t) + 3 * t}%`,
                transition: "background 160ms linear, transform 160ms linear, border-radius 160ms linear",
              }}
            />
          );
        })}
      </div>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <span className={meta}>Messy</span>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#6d7174]">{v}</span>
          <span className={meta}>Consistent</span>
        </div>
        <div className="relative mt-4 flex h-[26px] items-center">
          <span aria-hidden="true" className="absolute inset-x-0 h-[3px] rounded-full bg-[#e8e8e8]" />
          <span aria-hidden="true" className="absolute left-0 h-[3px] rounded-full bg-[#ff1616] transition-[width] duration-100" style={{ width: `${v}%` }} />
          <input
            id="consistency"
            type="range"
            min={0}
            max={100}
            value={v}
            aria-label="Visual consistency"
            onChange={(e) => setV(Number(e.target.value))}
            className="ism-range relative w-full"
          />
        </div>
        <p aria-live="polite" className="mb-0 mt-8 text-[28px] font-semibold leading-[1.1] tracking-[-0.035em] text-black md:text-[38px]">
          {verdict}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────── the shoot ─────────────────────────── */

const shots: Record<string, [string, string, [string, string][]]> = {
  photo: ["Product Photography", "Job: settle doubts.", [
    ["Hero", "Pot on a plain surface, soft side light. Shows what it looks like."],
    ["Scale", "Next to a hand or a chair. Shows how big it is."],
    ["Detail", "Glaze up close. Shows texture and color."],
    ["In use", "A fern in it, by a window. Shows how it looks at home."],
  ]],
  video: ["Video Production", "Job: show it in motion, in fifteen seconds.", [
    ["0 to 3s", "Gold seam catches the light. One shot, no text."],
    ["3 to 8s", "Hands pressing soil into the pot."],
    ["8 to 12s", "The pot beside a ruler, then on a real windowsill."],
    ["12 to 15s", "One line on screen: ships Tuesday and Friday."],
  ]],
  carousel: ["Carousel", "Job: explain in four swipes.", [
    ["Slide 1", "The promise: cracked pots, repaired."],
    ["Slide 2", "The problem: why we kept this one."],
    ["Slide 3", "The proof: close-ups of the seam."],
    ["Slide 4", "The next step: where to find it."],
  ]],
};

const formatOptions: [string, string][] = [["photo", "Photo set"], ["video", "Fifteen-second video"], ["carousel", "Carousel"]];

const Pot = ({ accent = "#ff1616", crack = true }: { accent?: string; crack?: boolean }) => (
  <g>
    <path d="M26 34h48l-6 46q-1 8-9 8H41q-8 0-9-8z" fill="#ffffff" stroke="#0d0d0d" strokeWidth="1.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    <ellipse cx="50" cy="34" rx="24" ry="7" fill={accent} stroke="#0d0d0d" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    {crack && <path d="M38 52l8 6-5 8 9 6" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />}
  </g>
);

// One leaf, drawn tip-up from its base point.
const Leaf = ({ fill = "#0d0d0d" }: { fill?: string }) => (
  <path d="M0 0C-7-6-8-16 0-25 8-16 7-6 0 0Z" fill={fill} />
);

// The same pot, framed four different ways. Kept deliberately plain.
const Scene = ({ k }: { k: number }) => (
  <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
    {/* hero: one object, one light, one shadow */}
    {k === 0 && (
      <>
        <circle cx="80" cy="56" r="42" fill="#ffffff" />
        <ellipse cx="80" cy="95" rx="32" ry="4.5" fill="#0d0d0d" opacity="0.1" />
        <g transform="translate(43,27) scale(0.74)"><Pot /></g>
      </>
    )}

    {/* scale: the pot beside a chair, both on one floor line */}
    {k === 1 && (
      <>
        <path d="M22 90h116" stroke="#d8d8d8" strokeWidth="1.2" />
        <g transform="translate(34,55) scale(0.4)"><Pot /></g>
        <path d="M112 36v54M90 66h22M90 66v24M112 44h-16" fill="none" stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}

    {/* detail: a macro crop that fills the frame */}
    {k === 2 && (
      <>
        <defs>
          <clipPath id="ism-detail-clip"><rect x="0" y="0" width="160" height="120" /></clipPath>
        </defs>
        <g clipPath="url(#ism-detail-clip)">
          <g transform="translate(-60,-50) scale(2.8)"><Pot /></g>
        </g>
      </>
    )}

    {/* in use: a fern on a windowsill */}
    {k === 3 && (
      <>
        <rect x="40" y="14" width="80" height="54" fill="#ffffff" stroke="#e4e4e4" strokeWidth="1.2" />
        <path d="M80 14v54M40 41h80" stroke="#e4e4e4" strokeWidth="1.2" />
        <path d="M24 88h112" stroke="#0d0d0d" strokeWidth="1.4" />
        <g transform="translate(80,64)">
          <g transform="rotate(-32) translate(0,-2)"><Leaf /></g>
          <g transform="rotate(32) translate(0,-2)"><Leaf /></g>
          <g transform="scale(1.18)"><Leaf fill="#ff1616" /></g>
        </g>
        <g transform="translate(60,52) scale(0.4)"><Pot /></g>
      </>
    )}
  </svg>
);

const ShotList = () => {
  const [k, setK] = useState("photo");
  const S = shots[k];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <Segmented label="Format" options={formatOptions} value={k} onChange={setK} />
        <p aria-live="polite" className="m-0 text-[16px] leading-[1.5] md:text-[18px]">
          <span className="font-semibold tracking-[-0.02em] text-black">{S[0]}.</span>{" "}
          <span className="text-[#6d6d6d]">{S[1]}</span>
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {S[2].map((f, i) => (
          <figure
            key={`${k}-${f[0]}`}
            className={`group m-0 animate-[ismUp_500ms_ease_both] overflow-hidden ${panel} transition-transform duration-500 hover:-translate-y-1`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-[4/3] bg-[#f7f7f7]">
              <Scene k={i} />

              {k === "video" && (
                <span aria-hidden="true" className="absolute inset-x-4 bottom-4 block h-[3px] rounded-full bg-[#e3e3e3]">
                  <span className="block h-full rounded-full bg-[#ff1616]" style={{ width: `${((i + 1) / 4) * 100}%` }} />
                </span>
              )}
              {k === "carousel" && (
                <span aria-hidden="true" className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
                  {[0, 1, 2, 3].map((d) => (
                    <span key={d} className={`block h-1.5 rounded-full transition-all ${d === i ? "w-4 bg-[#ff1616]" : "w-1.5 bg-[#d9d9d9]"}`} />
                  ))}
                </span>
              )}
            </div>

            <figcaption className="border-t border-[#f1f1f1] p-5">
              <span className="block text-[15px] font-semibold tracking-[-0.015em] text-black">{f[0]}</span>
              <span className="mt-2 block text-[14px] leading-[1.6] text-[#555]">{f[1]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────── UGC: the permission request ─────────────────────────── */

const uses = ["Repost it on our feed", "Show it on our website", "Use it in paid ads"];
const terms = ["six months", "twelve months", "until you ask us to stop"];
const credits = ["tag your handle on every post", "credit your first name only", "leave it uncredited"];

const Field = ({ legend, children, first = false }: { legend: string; children: ReactNode; first?: boolean }) => (
  <fieldset className={`m-0 w-full border-0 p-0 ${first ? "" : "mt-7 border-t border-[#ededed] pt-7"}`}>
    <legend className="mb-4 w-full p-0 text-[11px] uppercase tracking-[0.2em] text-[#a2a2a2]">{legend}</legend>
    {children}
  </fieldset>
);

// Shared row for the checkboxes and the radios, so every control sits on one left edge.
const PickRow = ({ type, name, checked, onChange, children }: {
  type: "checkbox" | "radio"; name?: string; checked: boolean; onChange: () => void; children: ReactNode;
}) => (
  <label className="group flex cursor-pointer items-center gap-3.5 py-[7px]">
    <input type={type} name={name} checked={checked} onChange={onChange} className="peer sr-only" />
    <span
      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center text-white ring-1 ring-[#d4d4d4] transition-all duration-200 group-hover:ring-[#9a9a9a] peer-checked:bg-[#ff1616] peer-checked:ring-[#ff1616] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0d0d0d] ${
        type === "radio" ? "rounded-full peer-checked:shadow-[inset_0_0_0_3.5px_#fff]" : "rounded-[7px]"
      }`}
    >
      {type === "checkbox" && <Tick />}
    </span>
    <span className="text-[16px] leading-[1.45] text-[#555] transition-colors duration-200 peer-checked:font-medium peer-checked:text-black md:text-[17px]">
      {children}
    </span>
  </label>
);

const Tick = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 6.2 5 8.5 9.5 3.5" />
  </svg>
);

const Mark = ({ children }: { children: ReactNode }) => (
  <span className="bg-[#fff4f4] font-medium text-[#0d0d0d] shadow-[inset_0_-2px_0_#ffc1c1]">{children}</span>
);

const PermissionBuilder = () => {
  const [name, setName] = useState("");
  const [picked, setPicked] = useState([true, false, false]);
  const [term, setTerm] = useState(0);
  const [credit, setCredit] = useState(0);
  const [status, setStatus] = useState("");

  const who = name.trim() || "there";
  const chosen = uses.filter((_, i) => picked[i]);
  const useLine = (chosen.length ? chosen.join(", ").replace(/, ([^,]*)$/, " and $1") : "(pick at least one use)").toLowerCase();
  const message =
    `Hi ${who},\n\nWe loved your video of the fern. Could we use it? Here is exactly what we mean: we would ${useLine}. We would keep it up for ${terms[term]} and ${credits[credit]}.\n\nSaying no is completely fine, and you can ask us to take it down at any time. Thanks for posting it.`;

  const copy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(
        () => setStatus("Copied. Nothing was sent anywhere."),
        () => setStatus("Select the text and copy it by hand.")
      );
    } else {
      setStatus("Select the text and copy it by hand.");
    }
  };

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[0.88fr_1.12fr] ${panel}`}>
      {/* what you are asking for */}
      <div className="border-b border-[#ececec] bg-[#fbfbfb] p-7 md:p-9 md:pb-10 lg:border-b-0 lg:border-r">
        <div>
          <Field legend="Their first name (optional)" first>
            <input
              type="text"
              maxLength={30}
              placeholder="Maya"
              value={name}
              onChange={(e) => { setStatus(""); setName(e.target.value); }}
              className="w-full border-0 border-b-2 border-[#e0e0e0] bg-transparent px-0 pb-2.5 text-[20px] tracking-[-0.02em] text-black transition-colors placeholder:text-[#cfcfcf] focus:border-[#ff1616] focus:outline-none"
            />
          </Field>

          <Field legend="What you would do with it">
            <div className="-my-[7px]">
              {uses.map((u, i) => (
                <PickRow
                  key={u}
                  type="checkbox"
                  checked={picked[i]}
                  onChange={() => { setStatus(""); setPicked((prev) => prev.map((v, j) => (j === i ? !v : v))); }}
                >
                  {u}
                </PickRow>
              ))}
            </div>
          </Field>

          <Field legend="For how long">
            <div className="-my-[7px]">
              {terms.map((t, i) => (
                <PickRow key={t} type="radio" name="ism-term" checked={term === i} onChange={() => { setStatus(""); setTerm(i); }}>
                  {t}
                </PickRow>
              ))}
            </div>
          </Field>

          <Field legend="Credit">
            <div className="-my-[7px]">
              {credits.map((c, i) => (
                <PickRow key={c} type="radio" name="ism-credit" checked={credit === i} onChange={() => { setStatus(""); setCredit(i); }}>
                  {c}
                </PickRow>
              ))}
            </div>
          </Field>
        </div>
      </div>

      {/* the message it writes */}
      <aside aria-live="polite" className="flex flex-col">
        <div className="flex items-center gap-3 border-b border-[#f1f1f1] px-7 py-5 md:px-10">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1f1] text-[#ff1616] ring-1 ring-[#ffe1e1]">
            <LeafMark className="h-[18px] w-[18px]" />
          </span>
          <span className="text-[14px] font-semibold tracking-[-0.01em] text-black">Juniper Plant Shop</span>
          <span aria-hidden="true" className="ml-auto h-[6px] w-[6px] rounded-full bg-[#ff1616]" />
        </div>

        <div className="flex flex-1 flex-col justify-center px-7 py-9 md:px-10 md:py-11">
          <p className="m-0 text-[16px] leading-[1.95] text-black md:text-[17px]">Hi <Mark>{who}</Mark>,</p>
          <p className="m-0 mt-5 text-[16px] leading-[1.95] text-black md:text-[17px]">
            We loved your video of the fern. Could we use it? Here is exactly what we mean: we would <Mark>{useLine}</Mark>. We would keep it up for <Mark>{terms[term]}</Mark> and <Mark>{credits[credit]}</Mark>.
          </p>
          <p className="m-0 mt-5 text-[16px] leading-[1.95] text-black md:text-[17px]">
            Saying no is completely fine, and you can ask us to take it down at any time. Thanks for posting it.
          </p>

          {picked[2] && (
            <p className="mb-0 mt-8 flex animate-[ismUp_350ms_ease_both] gap-3 border-l-2 border-[#ff1616] bg-[#fff8f8] py-4 pl-4 pr-5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#ff1616]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5M12 16.2v.3" />
              </svg>
              <span className="text-[14px] leading-[1.65] text-[#8a2a2a]">Ads need a clearer yes. Offer a fee or a thank-you gift, and keep the reply in writing.</span>
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#f1f1f1] px-7 py-6 md:px-10">
          <button
            type="button"
            onClick={copy}
            className="group inline-flex items-center gap-3 rounded-full bg-[#0d0d0d] py-2.5 pl-5 pr-2.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#ff1616]"
          >
            Copy this message
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0d0d0d]">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                <rect x="5" y="5" width="8" height="9" rx="1.5" /><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2H4.5A1.5 1.5 0 0 0 3 3.5v7A1.5 1.5 0 0 0 4.5 12H5" />
              </svg>
            </span>
          </button>
          <span role="status" className="text-[13px] text-[#9a9a9a]">{status}</span>
        </div>
      </aside>
    </div>
  );
};

/* ─────────────────────────── the reply: a DM, round by round ─────────────────────────── */

type Option = [string, 0 | 1, string];
const dm: [string, Option[]][] = [
  ["Does the fern come in a bigger size?", [
    ["Check our website.", 0, "Okay, thanks. (She leaves. Nothing was wrong, but nothing was helpful either.)"],
    ["Yes, up to twelve inches. Want to see one next to a chair?", 1, "Yes please!"],
    ["Buy now! Twenty percent off today only!", 0, "Never mind. (Pressure feels like a pitch, not an answer.)"],
  ]],
  ["My place gets weak light though.", [
    ["All our plants thrive anywhere.", 0, "Hmm, really? (An overclaim costs trust you can't easily get back.)"],
    ["Then skip the fern. A snake plant copes with a dim corner. Want that one instead?", 1, "Oh, that's good to know."],
    ["Sorry, can't help with that.", 0, "Okay. (A dead end, politely delivered.)"],
  ]],
  ["Okay. How long does shipping take?", [
    ["Usually fast!", 0, "How fast? (Vague answers make people do your work.)"],
    ["Ships Tuesday and Friday, arrives a few days later. I'll message you when it leaves.", 1, "Perfect. I'll take the snake plant."],
    ["Read our FAQ.", 0, "Fine. (She's now reading a page instead of talking to you.)"],
  ]],
];

type Bubble = ["them" | "me", string];

const DmPractice = () => {
  const [round, setRound] = useState(0);
  const [helped, setHelped] = useState(0);
  const [log, setLog] = useState<Bubble[]>([["them", dm[0][0]]]);
  const [retry, setRetry] = useState(false);
  const done = round >= dm.length;

  const pick = (o: Option) => {
    if (o[1]) {
      const next = round + 1;
      setHelped((h) => h + 1);
      setRound(next);
      setLog((l) => [...l, ["me", o[0]], ["them", o[2]], ...(next < dm.length ? ([["them", dm[next][0]]] as Bubble[]) : [])]);
    } else {
      setLog((l) => [...l, ["me", o[0]], ["them", o[2]]]);
      setRetry(true);
    }
  };

  return (
    <div className={`overflow-hidden ${panel}`}>
      {/* who you are talking to, and how far in you are */}
      <div className="flex items-center gap-3 px-6 py-5 md:px-9">
        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1f1] text-[#ff1616] ring-1 ring-[#ffe1e1]">
          <LeafMark className="h-5 w-5" />
        </span>
        <span className="text-[15px] font-semibold tracking-[-0.015em] text-black">Juniper Plant Shop</span>
        <span aria-live="polite" className="ml-auto flex items-center gap-3">
          <span className="hidden text-[12px] text-[#9a9a9a] sm:block">
            {done ? `Replies that helped: ${helped} of ${dm.length}` : `Round ${round + 1} of ${dm.length}`}
          </span>
          <span aria-hidden="true" className="flex gap-1">
            {dm.map((_, k) => (
              <span
                key={k}
                className={`block h-[3px] w-6 rounded-full transition-colors duration-500 ${
                  k < round || done ? "bg-[#ff1616]" : k === round ? "bg-[#0d0d0d]" : "bg-[#e4e4e4]"
                }`}
              />
            ))}
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 border-t border-[#f1f1f1] lg:grid-cols-[1.05fr_0.95fr]">
        {/* the conversation */}
        <div aria-live="polite" className="flex flex-col justify-end gap-3 bg-[#fafafa] px-6 py-7 md:px-9 md:py-9 lg:min-h-[330px] lg:border-r lg:border-[#f1f1f1]">
          {log.map((b, i) => (
            <div key={`${i}-${b[1]}`} className={`flex animate-[ismUp_350ms_ease_both] items-end gap-2.5 ${b[0] === "me" ? "flex-row-reverse" : ""}`}>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                  b[0] === "me" ? "bg-[#fff1f1] text-[#ff1616]" : "bg-[#e9e9e9] text-[#9a9a9a]"
                }`}
              >
                {b[0] === "me" ? (
                  <LeafMark className="h-3.5 w-3.5" />
                ) : (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c0-4 3.2-6.5 7-6.5s7 2.5 7 6.5" /></svg>
                )}
              </span>
              <p
                className={`m-0 max-w-[82%] px-4 py-3 text-[15px] leading-[1.5] ${
                  b[0] === "me"
                    ? "rounded-[18px_18px_4px_18px] bg-[#0d0d0d] text-white"
                    : "rounded-[18px_18px_18px_4px] bg-white text-black ring-1 ring-[#ececec]"
                }`}
              >
                {b[1]}
              </p>
            </div>
          ))}
        </div>

        {/* your move */}
        <div className="flex flex-col justify-center border-t border-[#f1f1f1] px-6 py-7 md:px-9 md:py-9 lg:border-t-0">
          {done ? (
            <div>
              <p className="m-0 text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-black md:text-[24px]">
                Replies that helped: {helped} of {dm.length} (a made-up chat)
              </p>
              <button
                type="button"
                onClick={() => { setRound(0); setHelped(0); setLog([["them", dm[0][0]]]); setRetry(false); }}
                className="mt-6 rounded-full bg-[#0d0d0d] px-5 py-2.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#ff1616]"
              >
                Play it again
              </button>
            </div>
          ) : retry ? (
            <button
              type="button"
              onClick={() => { setLog((l) => l.slice(0, l.length - 2)); setRetry(false); }}
              className="self-start rounded-full bg-[#ff1616] px-5 py-2.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#0d0d0d]"
            >
              Try a different reply
            </button>
          ) : (
            <div className="grid gap-2.5">
              {dm[round][1].map((o) => (
                <button
                  key={o[0]}
                  type="button"
                  onClick={() => pick(o)}
                  className="group flex items-center gap-4 rounded-[18px] bg-white px-5 py-4 text-left ring-1 ring-[#e6e6e6] transition-all duration-300 hover:-translate-y-0.5 hover:ring-[#0d0d0d] hover:shadow-[0_20px_34px_-28px_rgba(13,13,13,0.9)]"
                >
                  <span className="flex-1 text-[15px] leading-[1.45] text-black md:text-[16px]">{o[0]}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f4f4] text-[#9a9a9a] transition-colors duration-300 group-hover:bg-[#ff1616] group-hover:text-white">
                    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 9h12M9.8 4.2 14.5 9l-4.7 4.8" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── the cast ─────────────────────────── */

const cast: [string, string, string, string][] = [
  ["Founder", "Their job: personal branding, the face people learn to trust.", "The risk: burnout, or oversharing.", "Pick two topics you'll always talk about and two you won't."],
  ["Team", "Their job: showing the work behind the counter.", "The risk: off-brand improvising.", "Give them a one-page do and don't, not a lecture."],
  ["Customers", "Their job: ugc content and honest reviews.", "The risk: reposting without permission.", "Ask first. Credit always."],
  ["Creators", "Their job: brand collaboration with a partner who has their own audience.", "The risk: a poor fit, or missing disclosure.", "Write the brief, the usage terms and the disclosure line down."],
  ["Ads", "Their job: paid media, which pushes a post to more people.", "The risk: paying to amplify something weak.", "Only boost what already earned real reactions."],
];
const castGroup = ["Owned", "Owned", "Earned", "Paid", "Paid"];
const strip = (t: string) => {
  const s = t.replace(/^(Their job|The risk):\s*/, "");
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const icons = [
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-5 4-8 8-8s8 3 8 8" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="3" /><circle cx="17" cy="10" r="2.6" /><path d="M2 20c0-4 3-6 6-6s6 2 6 6M14 20c0-3 2-5 4-5s4 2 4 4" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H10l-5 4v-4H4z" /><path d="M8 10h8" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4h4l7 5V5L7 10z" /><path d="M17 9c1.5 1 1.5 5 0 6" /></svg>,
];

const ROW_H = 68;
const ROW_GAP = 12;
const COLUMN_H = cast.length * ROW_H + (cast.length - 1) * ROW_GAP;

const CastOrbit = () => {
  const [i, setI] = useState(0);
  const c = cast[i];
  const g = castGroup[i];

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
      {/* the brand, and everyone who speaks for it */}
      <div className="flex items-stretch justify-center gap-0">
        {/* hub */}
        <div className="hidden shrink-0 items-center sm:flex">
          <span className="flex h-[132px] w-[132px] items-center justify-center rounded-full bg-[#0d0d0d] px-4 text-center text-[15px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            The brand
          </span>
        </div>

        {/* connectors */}
        <svg
          aria-hidden="true"
          className="hidden shrink-0 sm:block"
          width="62"
          height={COLUMN_H}
          viewBox={`0 0 62 ${COLUMN_H}`}
          fill="none"
        >
          {cast.map((_, k) => {
            const y = k * (ROW_H + ROW_GAP) + ROW_H / 2;
            const mid = COLUMN_H / 2;
            return (
              <path
                key={k}
                d={`M0 ${mid} C 34 ${mid}, 28 ${y}, 62 ${y}`}
                stroke={k === i ? "#ff1616" : "#e4e4e4"}
                strokeWidth={k === i ? 1.6 : 1}
              />
            );
          })}
        </svg>

        {/* the cast */}
        <div role="group" aria-label="Who speaks for the brand" className="flex w-full max-w-[320px] flex-col" style={{ gap: ROW_GAP }}>
          {cast.map((person, k) => {
            const on = k === i;
            return (
              <button
                key={person[0]}
                type="button"
                aria-pressed={on}
                onClick={() => setI(k)}
                style={{ height: ROW_H }}
                className={`flex items-center gap-4 rounded-full pl-3 pr-5 text-left transition-all duration-300 ${
                  on
                    ? "bg-[#0d0d0d] text-white shadow-[0_22px_34px_-24px_rgba(13,13,13,0.9)]"
                    : "bg-white text-[#0d0d0d] ring-1 ring-[#e6e6e6] hover:ring-[#0d0d0d]"
                }`}
              >
                <span
                  className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    on ? "bg-[#ff1616] text-white" : "bg-[#f4f4f4] text-[#0d0d0d]"
                  }`}
                >
                  <span className="block h-[21px] w-[21px]">{icons[k]}</span>
                </span>
                <span className="text-[17px] font-semibold tracking-[-0.02em]">{person[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* the detail */}
      <article aria-live="polite" className={`p-7 md:p-9 ${panel}`}>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-[#fff1f1] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#ff1616] md:text-[11px]">{g} voice</span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#f0f0f0]" />
        </div>
        <h3 className="m-0 mt-5 text-[30px] font-semibold tracking-[-0.035em] text-black md:text-[38px]">{c[0]}</h3>

        <dl className="m-0 mt-7">
          {([["Job", strip(c[1])], ["Risk", strip(c[2])], ["Rule", c[3]]] as [string, string][]).map(([k, v], r) => (
            <div key={k} className="grid grid-cols-[58px_1fr] gap-5 border-t border-[#f1f1f1] py-4">
              <dt className={`text-[10px] uppercase tracking-[0.18em] ${r === 2 ? "text-[#ff1616]" : "text-[#bdbdbd]"} mt-1`}>{k}</dt>
              <dd className={`m-0 text-[15px] leading-[1.65] md:text-[16px] ${r === 2 ? "font-medium text-black" : "text-[#555]"}`}>{v}</dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  );
};

/* ─────────────────────────── the week ─────────────────────────── */

const wtypes: [string, string][] = [
  ["Teach", "A short how-to or a plain answer."],
  ["Show", "The work or the product in use."],
  ["Prove", "A review, a result or a customer post."],
  ["Join", "A reply thread, a poll or a community moment."],
  ["Sell", "A direct offer."],
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const typeStyle = [
  { card: "bg-white text-black ring-1 ring-[#ececec]", bar: "#0d0d0d", sub: "text-[#555]", day: "text-[#9a9a9a]" },
  { card: "bg-[#f4f4f4] text-black", bar: "#9a9a9a", sub: "text-[#555]", day: "text-[#9a9a9a]" },
  { card: "bg-[#fff6f6] text-black ring-1 ring-[#ffe2e2]", bar: "#ff1616", sub: "text-[#7a5555]", day: "text-[#c08a8a]" },
  { card: "bg-[#0d0d0d] text-white", bar: "#ff1616", sub: "text-white/70", day: "text-white/45" },
  { card: "bg-[#ff1616] text-white", bar: "#0d0d0d", sub: "text-white/80", day: "text-white/60" },
];

const WeekPlanner = () => {
  const [plan, setPlan] = useState([0, 1, 2, 3, 4]);
  const count = [0, 0, 0, 0, 0];
  plan.forEach((t) => { count[t] += 1; });
  const kinds = count.filter((c) => c > 0).length;

  const summary =
    count[4] > 2
      ? "That week is mostly selling. People tire of that quickly."
      : kinds < 3
        ? `${kinds === 1 ? "One kind of post all week" : "Only two kinds of post"}. Thin. Add something people might answer.`
        : !count[2]
          ? "Good mix, but no proof. Slot in a review or a customer post."
          : "A mix you could keep up on a tired Thursday. Nice.";

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {days.map((d, i) => {
          const s = typeStyle[plan[i]];
          const t = wtypes[plan[i]];
          return (
            <button
              key={d}
              type="button"
              onClick={() => setPlan((p) => p.map((v, j) => (j === i ? (v + 1) % wtypes.length : v)))}
              className={`group relative min-h-[172px] overflow-hidden rounded-[22px] p-5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-40px_rgba(13,13,13,0.8)] ${s.card}`}
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 block h-[4px]" style={{ background: s.bar }} />
              <span className={`block text-[10px] uppercase tracking-[0.2em] ${s.day}`}>{d}</span>
              <span className="mt-4 block text-[26px] font-semibold leading-none tracking-[-0.035em]">{t[0]}</span>
              <span className={`mt-3 block text-[13px] leading-[1.55] ${s.sub}`}>{t[1]}</span>
              <span aria-hidden="true" className={`absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${plan[i] >= 3 ? "text-white/60" : "text-[#bdbdbd]"}`}>
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.5 7a5.5 5.5 0 1 0-1.3 4.3" /><path d="M13.8 3.5v3.6h-3.6" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="relative mb-0 mt-8 max-w-[44em] border-l-2 border-[#ff1616] pl-6 text-[21px] leading-[1.35] tracking-[-0.02em] text-black md:text-[26px]">
        {summary}
      </p>
    </div>
  );
};

/* ─────────────────────────── the bets ─────────────────────────── */

const bets: Record<"yes" | "no", string[]> = {
  yes: [
    "People checking a business on a phone before they buy.",
    "Short video as a normal way to explain things.",
    "Real faces and real customers beating polished ads.",
    "Replies mattering as much as posts.",
  ],
  no: [
    "Any one platform staying on top.",
    "A posting hack that lasts longer than a season.",
    "Follower count standing in for sales.",
    "Content that only works with the sound on.",
  ],
};

const BetsBoard = () => {
  const [k, setK] = useState<"yes" | "no">("yes");
  const yes = k === "yes";
  return (
    <div>
      <Segmented
        label="Bets"
        options={[["yes", "We would bet on"], ["no", "We would not bet on"]]}
        value={k}
        onChange={(v) => setK(v as "yes" | "no")}
      />

      <ul aria-live="polite" className={`m-0 mt-6 list-none overflow-hidden p-0 ${panel}`}>
        {bets[k].map((t, i) => (
          <li
            key={t}
            className="flex animate-[ismUp_400ms_ease_both] items-center gap-5 border-t border-[#f1f1f1] px-6 py-5 first:border-t-0 md:gap-7 md:px-8"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span
              aria-hidden="true"
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[15px] font-bold leading-none ${
                yes ? "bg-[#0d0d0d] text-white" : "bg-[#fff1f1] text-[#ff1616]"
              }`}
            >
              {yes ? "+" : "−"}
            </span>
            <span className="flex-1 text-[16px] leading-[1.5] tracking-[-0.01em] text-black md:text-[18px]">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ─────────────────────────── the fit ─────────────────────────── */

const fitList = [
  "A profile and grid system that holds together",
  "A shot list for each format you'll really shoot",
  "Photography and video, edited for each platform",
  "A plain rule for ugc content permissions and credit",
  "A weekly calendar and a reply plan with an owner",
];

/* ─────────────────────────── the page ─────────────────────────── */

const ImportanceOfSocialMedia = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">
        <style>{`
          @keyframes ismUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
          @keyframes ismFade{from{opacity:0}to{opacity:1}}
          .ism-range{-webkit-appearance:none;appearance:none;height:26px;margin:0;background:transparent;outline:none;cursor:pointer}
          .ism-range::-webkit-slider-runnable-track{height:26px;background:transparent}
          .ism-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:0;width:26px;height:26px;border-radius:50%;background:#0d0d0d;border:3px solid #fff;box-shadow:0 6px 16px -6px rgba(13,13,13,.8);cursor:pointer;transition:transform .2s}
          .ism-range:active::-webkit-slider-thumb{transform:scale(1.1)}
          .ism-range::-moz-range-track{height:26px;background:transparent}
          .ism-range::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0d0d0d;border:3px solid #fff;box-shadow:0 6px 16px -6px rgba(13,13,13,.8);cursor:pointer}
          @media (prefers-reduced-motion: reduce){.ppp-ism *{animation:none!important;transition:none!important}}
        `}</style>

        <div className="ppp-ism">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 pb-12 md:pt-14 md:pb-16`}>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.97fr_1.03fr] xl:gap-[56px]">
            <Reveal>
              <h1 id="page-title" className="font-semibold leading-[1.04] tracking-[-0.045em] text-black">
                <span className="block text-[34px] sm:text-[44px] md:text-[48px] lg:text-[42px] xl:text-[54px] lg:whitespace-nowrap">The importance of</span>
                <span className="block text-[34px] sm:text-[44px] md:text-[48px] lg:text-[42px] xl:text-[54px] lg:whitespace-nowrap">social media shows up</span>
                <span className="block text-[#909396] text-[36px] sm:text-[46px] md:text-[52px] lg:text-[46px] xl:text-[58px] lg:whitespace-nowrap">in one thumb flick.</span>
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[720px]`}>
                Picture a woman on a train. She opens an app, sees a plant shop's post, keeps scrolling. Gone. That's the importance of social media in miniature (and yes, we made her up). Your brand gets a flick. Maybe two.
              </p>
              <p className={`${bodyClass} mt-4 max-w-[720px]`}>
                The goal is to be part of their day. The product someone saves. The answer they send a friend. The reply that helps them choose. So this page is for poking. Every business in it is invented. Nobody's selling you anything mid-scroll.
              </p>
            </Reveal>
            <Reveal delay={200} className="w-full lg:ml-auto lg:h-full">
              <StoryboardSwap />
            </Reveal>
          </div>
        </section>

        {/* ── PRESENCE ── */}
        <section aria-labelledby="presence-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-16 xl:gap-24">
              <Reveal>
                <h2 id="presence-heading" className={h2Class}>
                  <SplitHeading line="Your feed introduces you." italic="Your behavior" rest="fills in the rest." accent={ACCENT} />
                </h2>
                <p className={`${bodyClass} mt-8`}>
                  Brand Presence is what a stranger sees before they decide to care. You've done it too. Somebody tags a restaurant. You tap the profile. Three seconds later you've decided. Was it the photos? The bio that says nothing? A last post from eleven months ago? Brand Presence is that decision, and the profile makes it for you.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  A pretty grid followed by unanswered questions tells two different stories, and strangers believe the second one.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Meet Juniper Plant Shop. Invented. It sells houseplants to people with tiny apartments and big hopes. Strangers read four things on its page. Name, bio, grid, highlights. That's its online presence, more or less.
                </p>
                <div className="mt-8 space-y-4">
                  <Cap>Flip each part below and compare.</Cap>
                  <Cap>Now the grid. Slide the control and watch nine tiles go from yard sale to shelf.</Cap>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:h-full">
                <ProfileFlip />
              </Reveal>
            </div>

            <Reveal className="mt-16 md:mt-24">
              <p className={`${bodyClass} max-w-none`}>
                Same shop. Same plants. One difference: somebody decided what the profile was for. Call it brand management if you like. It's really one decision, repeated, even on a Thursday when posting whatever's nearest sounds easier. Your films, your replies, the small details? Those are what bring people back.
              </p>
            </Reveal>

            <Reveal className="mt-10 md:mt-12">
              <GridSlider />
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <p className={bodyClass}>
                That's visual consistency. Not a template forever. More a point of view people recognize. A color family. A crop. One type style. Say them on repeat until a stranger thinks oh, that's them, before reading the name. That flash of recognition is what visual marketing runs on, honestly. Cleverness comes second. Think of the last small brand you remembered. You probably couldn't name its slogan. You could probably picture its colors.
              </p>
            </Reveal>

            <TestLine>Cover the name on your last six posts. Still look like siblings?</TestLine>
          </div>
        </section>

        {/* ── THE SHOOT ── */}
        <section aria-labelledby="shoot-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
            <h2 id="shoot-heading" className={h2Class}>
              <SplitHeading line="Make the content." italic="Mind" rest="the context." accent={ACCENT} />
            </h2>
            <div>
              <p className={bodyClass}>
                Thin feeds usually have a boring cause. Nobody decided what to point the camera at. Creative Media Production is the fix, and it's dull in the best way. A shot list. A window with decent light. Three things you want remembered, no more.
              </p>
              <div className="mt-8">
                <Cap>Pick a format for the made-up glazed pot below. Each one tells the same product a different way.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 md:mt-16">
            <ShotList />
          </Reveal>

          <Reveal className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-16">
            <p className={bodyClass}>
              Product Photography first. A clean pot, a plain table, decent light. It can settle a doubt right at checkout. Then Video Production, which adds motion and sound so people can see scale and use. Video storytelling? Same thing with a clock running. Fifteen seconds, tops. Squeeze in a start, a snag and a payoff. The edit will hurt.
            </p>
            <div>
              <p className={bodyClass}>
                Under all three sits visual storytelling. It's the habit of letting the frame do the talking. Show it, don't narrate it. Social media creative made like that works on a muted phone in a noisy train car, because the picture is already making the point.
              </p>
              <p className={`${bodyClass} mt-4`}>
                No ring light? No problem. Our video production and creative production teams handle the shoot, the edit and the platform cutdowns.
              </p>
            </div>
          </Reveal>

          <TestLine>Pause your last video at two seconds. Now ask what a viewer took from that frame. Did you want that?</TestLine>
        </section>

        {/* ── UGC ── */}
        <section aria-labelledby="ugc-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
              <h2 id="ugc-heading" className={h2Class}>
                <SplitHeading line="Their experience." italic="Not" rest="your script." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Your best ad might already be sitting in a customer's camera roll. Plain version: ugc content is whatever customers make about you without being asked. A photo. A review. A clip of them using the thing.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Say a customer of Juniper Plant Shop films herself unboxing a fern. The pot arrives chipped. The replacement shows up in two days. That clip may do more for a nervous buyer than any staged shot. It's also her clip, and brands forget that part. Repost without asking and a fan can become a complaint overnight.
                </p>
                <div className="mt-8">
                  <Cap>So ask first. Build the request below and notice how much of it is about being specific: where you'll use it, for how long and how you'll credit her.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <PermissionBuilder />
            </Reveal>

            <Reveal className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-16">
              <p className={bodyClass}>
                Handle ugc videos like photos, only with more care. They often have faces, voices, somebody's messy living room. Thinking of putting money behind one as paid media? Say so in the request. An ad is a bigger ask than a repost. A decent creator will want to hear it first.
              </p>
              <div>
                <p className={bodyClass}>
                  Paying a creator instead? That's brand collaboration. Write the brief, the usage terms, the disclosure line. A handshake won't cover it. Brief them around real use and never around a glowing opinion.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  One firm line: fake reviews are out. No actors playing customers, no generated faces, no scripted praise passed off as real. And if somebody got paid or gifted, tell people straight.
                </p>
                <p className="mt-6 text-[13px] leading-[1.8] text-[#9a9a9a]">
                  Disclosure guidance: <a href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" target="_blank" rel="noopener noreferrer" className={ismLink}>FTC (US)</a> &middot; <a href="https://competition-bureau.canada.ca/en/deceptive-marketing-practices/types-deceptive-marketing-practices/influencer-marketing-and-competition-act" target="_blank" rel="noopener noreferrer" className={ismLink}>Competition Bureau (Canada)</a>.
                </p>
              </div>
            </Reveal>

            <TestLine>Find one customer post you'd love to reuse. Have you asked?</TestLine>
          </div>
        </section>

        {/* ── THE REPLY ── */}
        <section aria-labelledby="reply-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
            <h2 id="reply-heading" className={h2Class}>
              <SplitHeading line="Someone asked." italic="Stay" rest="for the answer." accent={ACCENT} />
            </h2>
            <div>
              <p className={bodyClass}>
                Posting is the easy half, and most small teams stop there. Then the comments sit unanswered for a week. The other half starts when a stranger types something underneath. Community building is mostly small, quick, human replies from somebody who sounds like they work there.
              </p>
              <p className={`${bodyClass} mt-4`}>
                Social Selling has a reputation problem. Blame the cold DM with a link in it. The good version looks like a helpful shop assistant.
              </p>
              <div className="mt-8">
                <Cap>A stranger asks Juniper Plant Shop a question. You choose the reply.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 md:mt-16">
            <DmPractice />
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <p className={`${bodyClass} max-w-[900px]`}>
              Nobody got pressured and nobody got ignored. That's the whole idea. Answer ordinary product questions in public. Take order details and personal information to private support. A sale can come out of a conversation, but only if the conversation was allowed to be one first.
            </p>
          </Reveal>

          <TestLine>Check your last ten comments. How many got a human reply by the next day?</TestLine>
        </section>

        {/* ── THE CAST ── */}
        <section aria-labelledby="cast-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
              <h2 id="cast-heading" className={h2Class}>
                <SplitHeading line="Leave room" italic="for" rest="a person." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Everyone in the feed is part of the brand, whether you cast them or not. The brand isn't just the account. It's the founder filming from a parking lot. The employee showing off the packing table. The customers tagging you. Personal branding shows up when one real face earns more trust than any logo manages. It should show someone's judgment. It shouldn't invent a persona.
                </p>
                <div className="mt-8">
                  <Cap>Tap each person below. Every one comes with a job and a risk.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <CastOrbit />
            </Reveal>

            <Reveal className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-16">
              <p className={bodyClass}>
                Giving all that some shape is brand management in practice. Who posts what? Who signs off? What never goes out? Our brand strategy work starts there, with one page. Not a binder.
              </p>
              <p className={bodyClass}>
                Paid media comes last. Pay to show more people a post real people already liked. Don't buy reach to learn if anyone cares.
              </p>
            </Reveal>

            <TestLine>Right now, who speaks for your brand online? And who did you forget?</TestLine>
          </div>
        </section>

        {/* ── THE WEEK ── */}
        <section aria-labelledby="week-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-20">
            <h2 id="week-heading" className={h2Class}>
              <SplitHeading line="Build a reason" italic="to" rest="come back." accent={ACCENT} />
            </h2>
            <div className="self-center">
              <Cap>Here's a week for Juniper Plant Shop with five slots. Tap a day to change its job. Try to land on a mix you could keep up when you're tired.</Cap>
            </div>
          </Reveal>

          <Reveal className="mt-12 md:mt-16">
            <WeekPlanner />
          </Reveal>

          <Reveal className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-16">
            <p className={bodyClass}>
              There's no perfect ratio. Anyone selling you one is guessing. Do it on paper. Write down what you posted last month. Count the sales posts, the proof posts and the plain human ones. Most small brands find one pile towering over the others, and it's rarely the pile they expected. Aim for a week where each day has its own task. A feed that only sells wears people out. One that only entertains pays no rent.
            </p>
            <p className={bodyClass}>
              Call that calendar the plain core of social media marketing. Then add one more line: who replies, and by when? That's where most plans quietly fall over.
            </p>
          </Reveal>

          <TestLine>Fill next week the same way. Which day would you skip first?</TestLine>
        </section>

        {/* ── LOOKING AHEAD ── */}
        <section aria-labelledby="ahead-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
              <Reveal>
                <h2 id="ahead-heading" className={h2Class}>
                  <SplitHeading line="The importance of social media in 2027," italic="minus" rest="the crystal ball." accent={ACCENT} />
                </h2>
                <p className={`${bodyClass} mt-8`}>
                  Which app will be on top in 2027? We can't tell you. Neither can anyone else. We'd bet on duller things. People will still check a business before they buy, and they'll still do it on a phone.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  That's opinion, not data. We haven't cited a forecast, because forecasts mostly argue with each other. Build for how people behave. The platform of the year matters less.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mb-7">
                  <Cap>Flip between what we'd bet on and what we wouldn't.</Cap>
                </div>
                <BetsBoard />
              </Reveal>
            </div>

            <TestLine>If your favorite platform vanished next spring, who could still find you?</TestLine>
          </div>
        </section>

        {/* ── THE FIT ── */}
        <section aria-labelledby="fit-heading" className={`${container} ${sectionY}`}>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 id="fit-heading" className={h2Class}>
                <SplitHeading line="Who it fits," italic="and" rest="what you get" accent={ACCENT} />
              </h2>
              <p className={`${bodyClass} mt-8`}>
                You've got a good product and a feed that doesn't show it. Posts go up whenever somebody has a free hour. The style changes with whoever's holding the phone. Comments pile up. That's who this is for. Want overnight followers? Wrong agency.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className={`m-0 list-none overflow-hidden p-0 ${panel}`}>
                {fitList.map((f, i) => (
                  <li key={f} className="flex items-center gap-5 border-t border-[#f1f1f1] px-6 py-5 first:border-t-0 md:gap-6 md:px-8">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${i === 0 ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616]"}`}>
                      <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5 9.5 3.5" /></svg>
                    </span>
                    <span className="text-[16px] font-medium leading-[1.45] tracking-[-0.01em] text-black md:text-[17px]">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <TestLine>Hand your profile to a friend for ten seconds. Can they say what you sell?</TestLine>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading={<SplitHeading line="Good questions." italic="Useful" rest="answers." accent={ACCENT} />} faqs={faqs} accent={ACCENT} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 pb-8 md:pt-44">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold leading-[1.0] tracking-[-0.04em] text-black">
                <HeroTitleLines line="We'll make something worth" italic="answering" rest="back to." plain compact accent="#ff1616" />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[800px]`}>
                Try this tonight. Open your own profile as a stranger. What does the business do? Say it aloud, no peeking at the bio. Wrong guess? That's the importance of social media working against you. Fixable, and quicker than you'd think, mostly. Bring us the questions your audience keeps asking. Our social media marketing team, creative production work and brand strategy can help, or you can <Link to="/contact" className={ismLink}>talk to Perfect Pixel Pro</Link>.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Talk to Perfect Pixel Pro</PillLink>
              </div>
            </Reveal>
          </div>
        </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ImportanceOfSocialMedia;
