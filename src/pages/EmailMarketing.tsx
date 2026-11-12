// Service page: Email Marketing.
// Copy is taken verbatim from the supplied interactive guide; the layout, type scale and every
// interactive piece are rebuilt on the shared ServiceKit so the page matches the other service pages.
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  container, sectionY, h2Class, bodyClass,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const ACCENT = "#909396";
// Inline links follow this page's accent rather than the site red.
const emLink = "underline decoration-[#909396] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#6d7174]";

const PAGE_TITLE = "Email Marketing That Gets Opened | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Email marketing that earns the open. Play with a subject line lab, a welcome series, an A/B luck test and a cost builder. Perfect Pixel Pro, Toronto.";

const faqs: Faq[] = [
  {
    q: "How much does email marketing cost?",
    a: "Picture two shops. One has 800 subscribers and sends twice a month from a template. The other has 40,000, six automations and custom design. Very different bills. (Both are invented.) Software is the cheapest line, oddly. The rest is list care, automations, design and whoever does the work. Honestly? We'd need your list and your goal before naming a number.",
  },
  {
    q: "Drip campaign or Nurture sequence: which one do you need?",
    a: "Bus or taxi? A Drip campaign is the bus. It runs a fixed route, whoever's aboard. A Nurture sequence is the taxi. The taxi goes where the passenger points. A click changes the route. So does a purchase. So does silence.",
  },
  {
    q: "Can we hand this off?",
    a: "Sometimes. Newsletter keeps slipping because nobody owns it? Hire that part out. Out of ideas? Keep it, because those live inside your shop. And email marketing goes best when someone who knows your customers signs off on every send.",
  },
  {
    q: "How often is too often?",
    a: "Depends what you've got. A fresh story every week? Weekly. Scraping for content? Every other week, or monthly. A steady monthly beats a messy weekly. Put your pick on the sign-up form.",
  },
  {
    q: "Is it working?",
    a: "Start with the goal. Replies and clicks show interest. Purchases and booked calls show business. Opens? Take them with salt, since some mail apps preload images.",
  },
];

const structuredData = [
  articleSchema("Good email marketing feels like a letter, not a flyer.", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

/* ─────────────────────────── shared bits ─────────────────────────── */

const label = "text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#9a9a9a]";
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

const Segmented = ({ name, options, value, onChange, size = "md" }: {
  name: string;
  options: [string, string][];
  value: string;
  onChange: (v: string) => void;
  size?: "sm" | "md";
}) => (
  <div role="group" aria-label={name} className="inline-flex flex-wrap gap-1 rounded-full bg-[#efefef] p-1">
    {options.map(([k, t]) => (
      <button
        key={k}
        type="button"
        aria-pressed={value === k}
        onClick={() => onChange(k)}
        className={`rounded-full font-medium transition-all duration-300 ${size === "sm" ? "px-3.5 py-1.5 text-[12.5px]" : "px-4 py-2 text-[13px] md:text-[14px]"} ${
          value === k ? "bg-[#0d0d0d] text-white shadow-[0_8px_20px_-12px_rgba(13,13,13,0.9)]" : "text-[#6d6d6d] hover:text-black"
        }`}
      >
        {t}
      </button>
    ))}
  </div>
);

const Slider = ({ id, min, max, step = 1, value, onChange, aria }: {
  id: string; min: number; max: number; step?: number; value: number; onChange: (v: number) => void; aria: string;
}) => (
  <div className="relative flex h-[26px] flex-1 items-center">
    <span aria-hidden="true" className="absolute inset-x-0 h-[3px] rounded-full bg-[#e8e8e8]" />
    <span
      aria-hidden="true"
      className="absolute left-0 h-[3px] rounded-full bg-[#ff1616]"
      style={{ width: `${((value - min) / (max - min)) * 100}%` }}
    />
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label={aria}
      onChange={(e) => onChange(Number(e.target.value))}
      className="em-range relative w-full"
    />
  </div>
);


const Tick = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 6.2 5 8.5 9.5 3.5" />
  </svg>
);

/* ─────────────────────────── hero: Dana's inbox ─────────────────────────── */

type Mail = { s: string; t: string; p: string; y: number; b: string; w: string };

const inbox: Mail[] = [
  { s: "Tidewater Tea Co.", t: "Your oolong ships Thursday", p: "Tracking inside, plus how to brew it so it doesn't turn bitter.", y: 1, b: "Hi Dana, your order's packed. Tracking's below. One tip: cooler water and a shorter steep.", w: "Specific, expected and useful. The sender is a brand she already bought from." },
  { s: "Pinecone Cycle Works", t: "NEWSLETTER: March Update", p: "Hi there, we hope this email finds you well. This month we...", y: 0, b: "Hi there, we hope this email finds you well. This month we have a few updates to share...", w: "Nothing in the subject says why now. The preview is filler." },
  { s: "Larch Street Books", t: "The book you set aside in June", p: "Still on your wishlist. Two copies left, and a note from the shop.", y: 1, b: "Still on your wishlist, Dana. Two copies left. Ruth from the shop left a note inside the first one.", w: "It knows something about her, and the preview adds a reason to act." },
  { s: "Brightside Dental", t: "!!! LAST CHANCE !!! 50% OFF !!!", p: "View this email in your browser", y: 0, b: "A wall of capital letters and a countdown clock.", w: "Shouting in the subject. A browser link where the preview should be." },
  { s: "Harbor Lane Candles", t: "Re: your question about wicks", p: "Dana, short answer: trim to a quarter inch. Longer answer below.", y: 1, b: "Dana, short answer: trim to a quarter inch before each burn. Longer answer below, with a photo.", w: "A human reply to a real question. The preview answers first." },
];

const lens: Record<string, string> = {
  snd: "Sender. Dana scans names first. A person, or a brand she already knows, gets the benefit of the doubt.",
  sbj: "Subject. Specific beats clever. Shouting never wins.",
  pre: "Preview. A second chance to earn the open. Don't waste it on a view in browser link.",
};

const InboxPeek = () => {
  // One message is open from the start, so the hero lands on something to read.
  const [open, setOpen] = useState(0);
  const [L, setL] = useState("");

  const dim = (k: string) => (L && L !== k ? "opacity-20" : "");
  const hit = (k: string) => (L === k ? "bg-[#fff1f1] shadow-[inset_0_-2px_0_#ffc1c1]" : "");

  return (
    <figure className={`m-0 w-full overflow-hidden ${panel}`}>
      <div className="flex flex-wrap items-center gap-3 px-6 py-[13px]">
        <span className="text-[14px] font-semibold tracking-[-0.015em] text-black">Dana's inbox</span>
        <span className={`${label} ml-auto`}>Lens</span>
        <span role="group" aria-label="Lens" className="flex flex-wrap gap-1 rounded-full bg-[#efefef] p-1">
          {([["snd", "Sender"], ["sbj", "Subject"], ["pre", "Preview"]] as [string, string][]).map(([k, t]) => (
            <button
              key={k}
              type="button"
              aria-pressed={L === k}
              onClick={() => setL(L === k ? "" : k)}
              className={`rounded-full px-3 py-1 text-[12px] font-medium transition-all duration-300 ${
                L === k ? "bg-[#0d0d0d] text-white shadow-[0_8px_20px_-12px_rgba(13,13,13,0.9)]" : "text-[#6d6d6d] hover:text-black"
              }`}
            >
              {t}
            </button>
          ))}
        </span>
      </div>

      {/* the closed messages stay on one line each, so opening one costs almost no height */}
      <ul className="m-0 list-none border-t border-[#f1f1f1] p-0">
        {inbox.map((m, i) => {
          const on = open === i;
          return (
            <li key={m.s} className={`border-b border-[#f1f1f1] last:border-b-0 ${on ? "bg-[#fbfbfb]" : ""}`}>
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setOpen(on ? -1 : i)}
                className={`relative block w-full px-5 text-left transition-colors duration-300 md:px-6 ${on ? "py-3.5" : "py-[11px] hover:bg-[#fafafa]"}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] origin-top rounded-r-full bg-[#ff1616] transition-transform duration-500 ease-out"
                  style={{ transform: `scaleY(${on ? 1 : 0})` }}
                />

                {on ? (
                  <>
                    <span className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="block h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff1616]" />
                      <span className={`block text-[10.5px] font-semibold uppercase tracking-[0.12em] leading-none text-[#9a9a9a] transition-opacity duration-300 ${dim("snd")}`}>
                        <span className={`rounded-[3px] ${hit("snd")}`}>{m.s}</span>
                      </span>
                    </span>
                    <span className={`mt-2 block text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-black transition-opacity duration-300 ${dim("sbj")}`}>
                      <span className={`rounded-[3px] ${hit("sbj")}`}>{m.t}</span>
                    </span>
                    <span className={`mt-1.5 block text-[13px] leading-[1.4] text-[#aeaeae] transition-opacity duration-300 ${dim("pre")}`}>
                      <span className={`rounded-[3px] ${hit("pre")}`}>{m.p}</span>
                    </span>
                  </>
                ) : (
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="block h-[6px] w-[6px] shrink-0 rounded-full bg-[#dcdcdc]" />
                    <span className={`hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b4b4b4] transition-opacity duration-300 sm:block ${dim("snd")}`}>
                      <span className={`rounded-[3px] ${hit("snd")}`}>{m.s}</span>
                    </span>
                    <span aria-hidden="true" className="hidden h-px w-4 shrink-0 bg-[#ececec] sm:block" />
                    <span className={`min-w-0 flex-1 truncate text-[14px] leading-[1.4] text-[#3d3d3d] transition-opacity duration-300 ${dim("sbj")}`}>
                      <span className={`rounded-[3px] ${hit("sbj")}`}>{m.t}</span>
                    </span>
                  </span>
                )}
              </button>

              {on && (
                <div className="animate-[emUp_350ms_ease_both] px-5 pb-4 md:px-6">
                  <span
                    className={`inline-block rounded-full px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] ${
                      m.y ? "bg-[#0d0d0d] text-white" : "bg-[#fff1f1] text-[#ff1616]"
                    }`}
                  >
                    {m.y ? "Dana opens it" : "Dana skips it"}
                  </span>
                  <p className="m-0 mt-3.5 text-[13px] leading-[1.65] text-[#6d6d6d]">{m.w}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <p
        aria-live="polite"
        className={`m-0 flex h-[76px] items-center border-t border-[#ececec] bg-[#fbfbfb] px-6 text-[11.5px] leading-[1.6] transition-colors duration-300 ${
          L ? "text-[#555]" : "text-[#9a9a9a]"
        }`}
      >
        <span key={L} className="block overflow-hidden animate-[emUp_300ms_ease_both]">
          {L ? lens[L] : "Tap a row to open it. Then try a lens to see where Dana's eye lands first."}
        </span>
      </p>
    </figure>
  );
};

/* ─────────────────────────── the subject line lab ─────────────────────────── */

const presets = [
  "Our March newsletter is here",
  "Three teas that survive a second steep",
  "Your teapot needs a filter. Here's ours.",
  "NEWS FROM TIDEWATER!!!",
  "Re: your question about brewing",
];

const VAGUE = /\b(newsletter|update|updates|news|issue|edition|digest|monthly|weekly)\b/i;

const SubjectLab = () => {
  const [v, setV] = useState(presets[0]);
  const n = v.length;

  const checks: [boolean, string][] = [
    [n > 0 && n <= 60, "Short enough for a glance, about 60 characters or fewer"],
    [n > 0 && !VAGUE.test(v), "Says something specific, not just newsletter or update"],
    [!/\b[A-Z]{4,}\b/.test(v), "No shouting in capital letters"],
    [(v.match(/!/g) || []).length <= 1, "Calm punctuation, one exclamation mark at most"],
    [/\d|\?|\b(you|your|how|why|what)\b/i.test(v), "A reason to open: a number, a question or a benefit"],
  ];
  const ok = checks.filter((c) => c[0]).length;
  const over = n > 60;
  const shown = n ? (n > 34 ? v.slice(0, 34).replace(/\s+\S*$/, "") + "..." : v) : "Type something above";

  return (
    <div className={`overflow-hidden ${panel}`}>
      {/* the line itself, given the room it deserves */}
      <div className="border-b border-[#ececec] px-7 py-8 md:px-10 md:py-10">
        <label htmlFor="em-subject" className={label}>Your subject line</label>
        <input
          id="em-subject"
          type="text"
          maxLength={90}
          value={v}
          onChange={(e) => setV(e.target.value)}
          className="mt-4 w-full border-0 bg-transparent px-0 py-0 text-[24px] leading-[1.25] tracking-[-0.03em] text-black transition-colors placeholder:text-[#cfcfcf] focus:outline-none md:text-[32px]"
        />

        <div className="mt-6">
          <div className="relative h-[6px] overflow-hidden rounded-full bg-[#f0f0f0]">
            <span
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${over ? "bg-[#ff1616]" : "bg-[#0d0d0d]"}`}
              style={{ width: `${Math.min(100, (n / 90) * 100)}%` }}
            />
            <span aria-hidden="true" className="absolute inset-y-0 w-px bg-white" style={{ left: `${(60 / 90) * 100}%` }} />
          </div>
          <div className="relative mt-2 h-4">
            <span className={`${label} absolute left-0 top-0`}>{n} characters</span>
            <span
              aria-hidden="true"
              className={`absolute top-0 -translate-x-1/2 text-[10px] tracking-[0.12em] transition-colors duration-300 ${over ? "text-[#ff1616]" : "text-[#bdbdbd]"}`}
              style={{ left: `${(60 / 90) * 100}%` }}
            >
              60
            </span>
            <span aria-live="polite" className={`${label} absolute right-0 top-0`}>{ok} of 5</span>
          </div>
        </div>
      </div>

      {/* what it passes, and how it lands */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-[#ececec] px-7 py-8 md:px-10 md:py-9 lg:border-b-0 lg:border-r">
          <ul className="m-0 list-none space-y-4 p-0">
            {checks.map(([pass, text]) => (
              <li key={text} className="flex items-start gap-3.5">
                <span
                  className={`mt-[2px] flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    pass ? "bg-[#0d0d0d] text-white" : "bg-[#f3f3f3] text-[#c4c4c4]"
                  }`}
                >
                  {pass ? <Tick /> : <span aria-hidden="true" className="block h-[2px] w-2.5 rounded-full bg-current" />}
                </span>
                <span className={`text-[14.5px] leading-[1.55] ${pass ? "text-black" : "text-[#9a9a9a]"}`}>{text}</span>
              </li>
            ))}
          </ul>
          <p className="m-0 mt-7 border-t border-[#f1f1f1] pt-5 text-[13px] text-[#9a9a9a]">
            {ok} of 5 boxes ticked. A rough checklist, not a spam filter.
          </p>
        </div>

        <div className="bg-[#fbfbfb] px-7 py-8 md:px-10 md:py-9">
          <span className={label}>What a narrow phone may show</span>

          <div className="mt-4 rounded-[20px] bg-white p-5 shadow-[0_20px_34px_-30px_rgba(13,13,13,0.7)]">
            <span className="flex items-center gap-2.5">
              <span aria-hidden="true" className="block h-[7px] w-[7px] shrink-0 rounded-full bg-[#ff1616]" />
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#9a9a9a]">Tidewater Tea Co.</span>
            </span>
            <span className="mt-2.5 block text-[15px] font-medium leading-[1.3] tracking-[-0.015em] text-black">{shown}</span>
            <span className="mt-1.5 block text-[13px] leading-[1.35] text-[#aeaeae]">The preview text goes here, and it matters.</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-[#ededed] pt-7">
            {presets.map((x) => (
              <button
                key={x}
                type="button"
                onClick={() => setV(x)}
                className={`rounded-full px-3.5 py-2 text-left text-[12.5px] leading-[1.35] transition-all duration-300 ${
                  v === x ? "bg-[#0d0d0d] text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:-translate-y-0.5 hover:text-black hover:ring-[#0d0d0d]"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── the road, stage by stage ─────────────────────────── */

const funnel = [
  { n: "Attract", tag: "Find", q: "Who are you, and why should I hand over my address?", j: "Offer one useful thing in exchange for an address.", t: "A sign-up form with a lead magnet.", w: "Sign-ups from people you'd actually want as customers.", s: "The brewing cheat sheet, free" },
  { n: "Welcome", tag: "Join", q: "Did that work? What happens now?", j: "Deliver the promise and set expectations.", t: "Sign-up confirmed.", w: "Do people open the first email? Do any reply?", s: "Here's your cheat sheet. Here's what's next." },
  { n: "Nurture", tag: "Know", q: "Are you any good?", j: "Build trust with specific, useful emails.", t: "Time passing, plus clicks and replies.", w: "Clicks that go somewhere that matters.", s: "Three teas that survive a second steep" },
  { n: "Convert", tag: "Buy", q: "Is this for me, and is it safe to buy?", j: "Make one clear offer with proof beside it.", t: "A product page visit, or a click on a guide.", w: "Purchases you can trace.", s: "The sampler, and how to start" },
  { n: "Retain", tag: "Return", q: "Was it worth it? What now?", j: "Help them use what they bought, then show what fits next.", t: "A purchase.", w: "Second purchases, replies and reviews.", s: "How was the first cup?" },
  { n: "Win back", tag: "Return again", q: "Should I leave?", j: "Ask. Offer a reason to stay, or let them go gracefully.", t: "Quiet for a stretch you define.", w: "Replies, and clean unsubscribes.", s: "Still want these? One click to say." },
];

const FunnelRoad = () => {
  const [i, setI] = useState(0);
  const f = funnel[i];

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[0.33fr_0.67fr] ${panel}`}>
      {/* the road, read top to bottom */}
      <div role="group" aria-label="Stages" className="border-b border-[#ececec] bg-[#fbfbfb] p-3 md:p-4 lg:border-b-0 lg:border-r">
        <ul className="m-0 grid list-none gap-1.5 p-0">
          {funnel.map((x, k) => {
            const on = k === i;
            return (
              <li key={x.n}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setI(k)}
                  className={`relative flex w-full items-center gap-3.5 rounded-[16px] px-4 py-3.5 text-left transition-all duration-300 ${
                    on ? "bg-[#0d0d0d] text-white shadow-[0_20px_30px_-24px_rgba(13,13,13,0.95)]" : "text-black hover:bg-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`block h-[9px] w-[9px] shrink-0 rounded-full transition-colors duration-300 ${
                      on ? "bg-[#ff1616]" : k < i ? "bg-[#ffc1c1]" : "bg-[#dcdcdc]"
                    }`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[10px] uppercase tracking-[0.18em] ${on ? "text-white/45" : "text-[#b4b4b4]"}`}>{x.tag}</span>
                    <span className="mt-1 block text-[15px] font-semibold tracking-[-0.02em]">{x.n}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* the stage */}
      <div aria-live="polite" className="px-7 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="m-0 text-[32px] font-semibold tracking-[-0.038em] text-black md:text-[42px]">{f.n}</h3>
          <span className="rounded-full bg-[#fff1f1] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#ff1616]">{f.tag}</span>
        </div>

        {/* the example, as the email it would be */}
        <div className="mt-7 flex items-center gap-4 rounded-[20px] bg-[#fbfbfb] px-5 py-4 ring-1 ring-[#ececec]">
          <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff1f1] text-[13px] font-semibold text-[#ff1616]">T</span>
          <span className="min-w-0">
            <span className="block text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#9a9a9a]">Tidewater Tea Co.</span>
            <span className="mt-1 block text-[16px] font-medium leading-[1.35] tracking-[-0.018em] text-black md:text-[18px]">{f.s}</span>
          </span>
        </div>

        <dl className="m-0 mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {([["They think", f.q], ["Your job", f.j], ["Trigger", f.t], ["Watch", f.w]] as [string, string][]).map(([k, val]) => (
            <div key={k} className="border-t border-[#f1f1f1] py-5">
              <dt className={label}>{k}</dt>
              <dd className="m-0 mt-2 text-[15px] leading-[1.6] text-[#555] md:text-[16px]">{val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

/* ─────────────────────────── the welcome series ─────────────────────────── */

type Beat = { d: number; t: string; j: string; c?: string };

const drip: Beat[] = [
  { d: 0, t: "Welcome. Here's your brewing guide.", j: "Deliver the promise" },
  { d: 2, t: "How Tidewater started", j: "Say who you are" },
  { d: 5, t: "Three teas people reorder", j: "Show your best work" },
  { d: 9, t: "A small first-order offer", j: "One gentle ask" },
  { d: 14, t: "Quick question: what do you drink?", j: "Learn something" },
  { d: 19, t: "A story from a customer", j: "Proof" },
];

const nbase: Beat[] = [
  { d: 0, t: "Welcome. Here's your brewing guide.", j: "Deliver the promise", c: "Contact added. Source: sign-up form." },
];

const nur: Beat[][] = [
  [
    { d: 2, t: "How Tidewater started", j: "Say who you are" },
    { d: 6, t: "One link. Pick what you like.", j: "Ask for a preference with a single click", c: "Tag added: no clicks yet." },
    { d: 12, t: "Should we keep writing?", j: "Check interest before it fades", c: "Flag added: at risk of going quiet." },
  ],
  [
    { d: 2, t: "Your next brew: cold steeping", j: "Follow the click", c: "Tag added: brewing guide reader." },
    { d: 5, t: "The kettle people actually keep", j: "Show something useful", c: "Interest score raised." },
    { d: 9, t: "Samples matched to what you read", j: "A relevant offer", c: "Task created: warm lead." },
  ],
  [
    { d: 3, t: "Your sampler's on its way. Brew it this way.", j: "Set up a good first cup", c: "Lifecycle stage changed to customer." },
    { d: 8, t: "How was the first cup?", j: "Invite a reply", c: "Reply logged on the record." },
    { d: 15, t: "Ready for a full tin?", j: "The second purchase", c: "Task created: next order." },
  ],
];

const SeriesTimeline = () => {
  const [mode, setMode] = useState("drip");
  const [b, setB] = useState(0);
  const [day, setDay] = useState(2);

  const list = mode === "drip" ? drip : nbase.concat(nur[b]).sort((x, y) => x.d - y.d);
  const sent = list.filter((e) => e.d <= day);
  const later = list.filter((e) => e.d > day);
  const next = later[0];

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[0.8fr_1.2fr] ${panel}`}>
      {/* controls */}
      <div className="border-b border-[#ececec] bg-[#fbfbfb] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div>
          <Segmented
            name="System"
            options={[["drip", "Drip campaign"], ["nur", "Nurture sequence"]]}
            value={mode}
            onChange={setMode}
          />
        </div>

        {mode === "nur" && (
          <div role="group" aria-label="What the subscriber does" className="mt-6 grid animate-[emUp_350ms_ease_both] gap-2">
            {["Ignores the emails", "Clicks the brewing guide", "Buys the sampler"].map((t, k) => (
              <button
                key={t}
                type="button"
                aria-pressed={b === k}
                onClick={() => setB(k)}
                className={`rounded-full px-4 py-2.5 text-left text-[14px] font-medium transition-all duration-300 ${
                  b === k ? "bg-[#0d0d0d] text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:text-black hover:ring-[#0d0d0d]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        <div className="mt-9">
          <div className="flex items-baseline justify-between">
            <span className={label}>Day 0</span>
            <span className="text-[13px] font-semibold text-[#6d7174]">Day {day}</span>
          </div>
          <div className="mt-3 flex">
            <Slider id="em-day" min={0} max={21} value={day} onChange={setDay} aria="Day" />
          </div>
        </div>
      </div>

      {/* the thread of sends */}
      <div aria-live="polite" className="p-7 md:p-10">
        <div className="relative pl-8">
          <span aria-hidden="true" className="absolute left-[5px] top-2 h-[calc(100%-18px)] w-px bg-[#ececec]" />

          {!sent.length && (
            <div className="relative pb-7">
              <span aria-hidden="true" className="absolute -left-8 top-1.5 block h-[11px] w-[11px] rounded-full bg-[#e0e0e0] ring-4 ring-white" />
              <span className={label}>Nothing sent yet</span>
              <p className="m-0 mt-1.5 text-[15px] text-[#555]">Slide forward to the first email.</p>
            </div>
          )}

          {sent.map((e) => (
            <div key={`${mode}-${b}-${e.d}-${e.t}`} className="relative animate-[emUp_350ms_ease_both] pb-7">
              <span aria-hidden="true" className="absolute -left-8 top-1.5 block h-[11px] w-[11px] rounded-full bg-[#ff1616] ring-4 ring-white" />
              <span className={label}>Day {e.d} sent</span>
              <p className="m-0 mt-1.5 text-[16px] font-semibold leading-[1.3] tracking-[-0.015em] text-black md:text-[17px]">{e.t}</p>
              <p className="m-0 mt-1 text-[14px] text-[#6d6d6d]">{e.j}</p>
              {mode === "nur" && e.c && (
                <p className="m-0 mt-3.5 rounded-[16px] bg-[#fbfbfb] px-4 py-3.5 text-[13px] leading-[1.6] text-[#555] ring-1 ring-[#f0f0f0]">
                  <span className={`${label} block`}>Record updated</span>
                  <span className="mt-1.5 block">{e.c}</span>
                </p>
              )}
            </div>
          ))}

          <div className="relative">
            <span aria-hidden="true" className="absolute -left-8 top-1.5 block h-[11px] w-[11px] rounded-full bg-white ring-1 ring-[#d4d4d4]" />
            <span className={label}>Up next</span>
            <p className="m-0 mt-1.5 text-[15px] leading-[1.6] text-[#9a9a9a]">
              {next ? `Day ${next.d}: ${next.t}` : "The series is complete. Everyone is now on the regular newsletter."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── personalization ─────────────────────────── */

const fields = [
  "First name",
  "Last purchase: a teapot, in February",
  "City: Portland",
  "Browsing: looked at paper filters",
  "Customer stage: repeat buyer",
];

const dialText = [
  "Generic. This could land in anyone's inbox.",
  "A start. Warm, but still thin.",
  "Getting useful.",
  "Useful, and still polite.",
  "Careful now. Is every fact helping?",
  "Too much. Some of this should stay in your head.",
];
const creep = "Location plus browsing history can feel like being watched.";

const PersonalDial = () => {
  const [on, setOn] = useState([false, false, false, false, false]);
  const [nm, pu, ci, br, st] = on;
  const n = on.filter(Boolean).length;

  const core = pu ? "refills for your teapot" : br ? "the filters you looked at" : "spring at Tidewater Tea";
  const sub = nm ? `Dana, ${core}` : core.charAt(0).toUpperCase() + core.slice(1);

  const lines = [
    nm ? "Hi Dana," : "Hi there,",
    pu ? "You picked up a teapot in February. Here is what keeps it brewing well." : "Our spring teas are in.",
  ];
  if (br) lines.push("The paper filters you looked at are back in stock.");
  if (ci) lines.push("A Saturday pickup point in Portland is open if you would rather skip shipping.");
  if (st) lines.push("As a repeat customer, you see the new blends first.");

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
      {/* what you know, and how far it has gone */}
      <div className={`flex flex-col p-7 md:p-9 ${panel}`}>
        <div className="grid gap-2.5">
          {fields.map((f, i) => (
            <label key={f} className="group flex cursor-pointer items-center gap-3.5">
              <input
                type="checkbox"
                checked={on[i]}
                onChange={() => setOn((p) => p.map((v, j) => (j === i ? !v : v)))}
                className="peer sr-only"
              />
              <span className="relative flex h-[26px] w-[46px] shrink-0 items-center rounded-full bg-[#e4e4e4] px-[3px] transition-colors duration-300 peer-checked:bg-[#ff1616] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0d0d0d]">
                <span className="block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-5" />
              </span>
              <span className="text-[15px] leading-[1.45] text-[#555] transition-colors peer-checked:font-medium peer-checked:text-black">{f}</span>
            </label>
          ))}
        </div>

        {/* how far the knowing has gone */}
        <div className="mt-auto border-t border-[#f1f1f1] pt-8">
          <div aria-hidden="true" className="flex items-end gap-2">
            {[0, 1, 2, 3, 4].map((k) => (
              <span
                key={k}
                className={`block flex-1 rounded-[5px] transition-all duration-500 ${
                  k < n ? (k >= 3 ? "bg-[#ff1616]" : "bg-[#0d0d0d]") : "bg-[#efefef]"
                }`}
                style={{ height: `${18 + k * 11}px` }}
              />
            ))}
          </div>
          <p aria-live="polite" className="m-0 mt-5 min-h-[3.2em] text-[16px] leading-[1.65] text-black md:text-[17px]">
            {dialText[n]}{ci && br ? ` ${creep}` : ""}
          </p>
        </div>
      </div>

      {/* the letter it writes */}
      <div aria-live="polite" className={`flex flex-col overflow-hidden ${panel}`}>
        <div className="border-b border-[#f1f1f1] px-7 py-6 md:px-10">
          <p className="m-0 text-[21px] font-semibold leading-[1.25] tracking-[-0.028em] text-black md:text-[25px]">{sub}</p>
          <p className={`${label} m-0 mt-2.5`}>From Tidewater Tea Co. (invented)</p>
        </div>
        <div className="flex flex-1 flex-col justify-center px-7 py-8 md:px-10 md:py-9">
          {lines.map((l) => (
            <p key={l} className="m-0 mb-4 text-[15.5px] leading-[1.8] text-black last:mb-0 md:text-[16px]">{l}</p>
          ))}
          <span className="mt-7 w-fit rounded-full bg-[#0d0d0d] px-6 py-3 text-[14px] font-medium text-white">See the refills</span>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── newsletter ideas ─────────────────────────── */

const ideas: Record<string, string[]> = {
  teach: [
    "Why water temperature changes how a tea tastes",
    "A one-minute guide to reading a tea label",
    "Why the second steep is often the best one",
    "How to store tea so it stays fresh",
  ],
  show: [
    "A photo of today's packing table",
    "The shelf where new teas wait for tasting",
    "A close-up of the tin before it's sealed",
    "The tasting notes, handwritten and crossed out",
  ],
  ask: [
    "Reply with the mug you drink from. We'll feature three.",
    "Which tea should we bring back? Vote by reply.",
    "What's the worst cup you've ever brewed?",
  ],
  share: [
    "A customer's morning ritual, with permission",
    "A mistake we made this month, and what we changed",
    "The person who blends the sampler",
  ],
  curate: [
    "Three small shops we're reading this month",
    "A podcast we played in the packing room",
    "A recipe that uses leftover leaves",
  ],
};

const IdeaShuffler = () => {
  const [cat, setCat] = useState("teach");
  const [idea, setIdea] = useState(ideas.teach[0]);

  const shuffle = () => {
    const pool = ideas[cat].filter((x) => x !== idea);
    setIdea(pool[Math.floor(Math.random() * pool.length)] ?? ideas[cat][0]);
  };

  return (
    <div className="relative">
      <span aria-hidden="true" className="absolute inset-x-10 -bottom-4 h-full rounded-[30px] bg-white ring-1 ring-[#f1f1f1]" />
      <span aria-hidden="true" className="absolute inset-x-5 -bottom-2 h-full rounded-[30px] bg-white ring-1 ring-[#ececec]" />

      <div className={`relative overflow-hidden ${panel}`}>
        <div className="border-b border-[#f1f1f1] px-7 py-5 md:px-10">
          <Segmented
            name="Idea type"
            options={[["teach", "Teach"], ["show", "Show"], ["ask", "Ask"], ["share", "Share"], ["curate", "Curate"]]}
            value={cat}
            onChange={(c) => { setCat(c); setIdea(ideas[c][0]); }}
          />
        </div>

        <div className="flex flex-col gap-8 px-7 py-10 md:flex-row md:items-end md:px-10 md:py-12">
          <p key={idea} aria-live="polite" className="m-0 flex-1 animate-[emUp_400ms_ease_both] text-[25px] font-semibold leading-[1.22] tracking-[-0.032em] text-black md:text-[32px]">
            {idea}
          </p>
          <button
            type="button"
            onClick={shuffle}
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#0d0d0d] py-2.5 pl-6 pr-2.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#ff1616] md:self-auto"
          >
            Shuffle
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d0d0d] transition-transform duration-500 group-hover:rotate-180">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 7a5.5 5.5 0 1 0-1.3 4.3" /><path d="M13.8 3.5v3.6h-3.6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── the month ─────────────────────────── */

const ctypes = ["Rest", "Newsletter", "Story", "Promo", "Reminder"];
const cinit = [1, 2, 3, 0, 1, 2, 4, 0];
const csum = {
  none: "An empty month. Tap a few cells.",
  many: "Mostly asks. People tire of that fast. Swap a few for stories.",
  run: "Two promos in a row. Put a story between them.",
  anchor: "No steady newsletter to anchor the month. Add one.",
  good: "A month you could keep up on a tired Thursday. Nice.",
};
const barTone = ["bg-[#e8e8e8]", "bg-[#0d0d0d]", "bg-[#c9c9c9]", "bg-[#ff1616]", "bg-[#ffb3b3]"];
const cellTone = [
  "bg-[#fbfbfb] text-[#b4b4b4] ring-1 ring-[#efefef]",
  "bg-[#0d0d0d] text-white",
  "bg-[#f3f3f3] text-[#3d3d3d]",
  "bg-[#ff1616] text-white",
  "bg-[#fff1f1] text-[#ff1616] ring-1 ring-[#ffdcdc]",
];

const MonthGrid = () => {
  const [cells, setCells] = useState(cinit);

  const counts = ctypes.map((_, t) => cells.filter((c) => c === t).length);
  const promo = counts[3];
  const news = counts[1];
  let run = false;
  for (let i = 1; i < cells.length; i++) if (cells[i] === 3 && cells[i - 1] === 3) run = true;

  const summary = !cells.filter((c) => c).length
    ? csum.none
    : promo >= cells.length / 2
      ? csum.many
      : run
        ? csum.run
        : !news
          ? csum.anchor
          : csum.good;

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[1.25fr_0.75fr] ${panel}`}>
      <div className="border-b border-[#ececec] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div className="grid grid-cols-[52px_1fr_1fr] gap-3 md:grid-cols-[76px_1fr_1fr]">
          <span />
          <span className={`${label} text-center`}>Tuesday</span>
          <span className={`${label} text-center`}>Thursday</span>

          {[0, 1, 2, 3].map((w) => (
            <div key={w} className="contents">
              <span className={`${label} self-center`}>Week {w + 1}</span>
              {[0, 1].map((d) => {
                const i = w * 2 + d;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCells((p) => p.map((v, j) => (j === i ? (v + 1) % ctypes.length : v)))}
                    className={`min-h-[66px] rounded-[18px] px-4 py-3 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:-translate-y-0.5 md:text-[15px] ${cellTone[cells[i]]}`}
                  >
                    {ctypes[cells[i]]}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* the mix those taps add up to */}
      <div aria-live="polite" className="flex flex-col justify-center bg-[#fbfbfb] p-7 md:p-10">
        <span aria-hidden="true" className="flex gap-1">
          {cells.map((c, k) => (
            <span key={k} className={`block h-[34px] flex-1 rounded-[6px] transition-colors duration-500 ${barTone[c]}`} />
          ))}
        </span>

        <div className="mt-7 grid gap-3">
          {ctypes.map((t, k) => (
            <span key={t} className="flex items-center gap-3.5 border-b border-[#f0f0f0] pb-3 text-[14px] last:border-b-0 last:pb-0">
              <span aria-hidden="true" className={`block h-2.5 w-2.5 shrink-0 rounded-full ${barTone[k]}`} />
              <span className={counts[k] ? "font-medium text-black" : "text-[#c4c4c4]"}>{t}</span>
              <span className={`ml-auto tabular-nums ${counts[k] ? "text-[#555]" : "text-[#d4d4d4]"}`}>{counts[k]}</span>
            </span>
          ))}
        </div>

        <p className="m-0 mt-8 border-l-2 border-[#ff1616] pl-5 text-[18px] leading-[1.45] tracking-[-0.02em] text-black md:text-[20px]">
          {summary}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────── responsive design ─────────────────────────── */

// A drawn stand-in for the photo the newsletter would carry: a tin, a cup and a little steam.
const TeaStill = () => (
  <svg viewBox="0 0 240 150" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="240" height="150" fill="#f6efe7" />
    <circle cx="176" cy="40" r="46" fill="#ffffff" opacity="0.55" />
    <path d="M24 118h192" stroke="#d8cabb" strokeWidth="1.5" />

    {/* the tin */}
    <g>
      <rect x="62" y="44" width="54" height="74" rx="5" fill="#ffffff" stroke="#0d0d0d" strokeWidth="1.5" />
      <rect x="58" y="36" width="62" height="12" rx="4" fill="#0d0d0d" />
      <rect x="62" y="74" width="54" height="13" fill="#ff1616" />
      <circle cx="89" cy="62" r="6.5" fill="none" stroke="#0d0d0d" strokeWidth="1.4" />
      <path d="M72 98h34M72 105h22" stroke="#d2d2d2" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* the cup */}
    <g>
      <path d="M134 80h40l-5 30a7 7 0 0 1-7 6h-16a7 7 0 0 1-7-6Z" fill="#ffffff" stroke="#0d0d0d" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="154" cy="80" rx="20" ry="5.5" fill="#ff1616" stroke="#0d0d0d" strokeWidth="1.5" />
      <path d="M176 88c7 0 10 4 10 8s-4 8-11 8" fill="none" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="154" cy="119" rx="30" ry="5" fill="#0d0d0d" opacity="0.08" />
    </g>

    {/* steam */}
    <g stroke="#0d0d0d" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.45">
      <path d="M147 68c-5-6 4-9-1-15" />
      <path d="M160 66c-5-7 4-10-1-16" />
    </g>
  </svg>
);

const NewsletterCard = ({ stacked, imgOff }: { stacked: boolean; imgOff: boolean }) => (
  <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_30px_60px_-48px_rgba(13,13,13,0.8)] ring-1 ring-[#ececec]">
    <div className="bg-[#0d0d0d] px-5 py-4 text-[17px] font-semibold tracking-[-0.025em] text-white">Tidewater Notes</div>

    <div className={`grid ${stacked ? "grid-cols-1" : "grid-cols-2"}`}>
      {imgOff ? (
        <div className="flex min-h-[132px] flex-col items-center justify-center gap-2.5 border border-dashed border-[#d9d9d9] bg-white p-4 text-center text-[11.5px] leading-[1.55] text-[#a2a2a2]">
          <span aria-hidden="true" className="text-[#c4c4c4]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
              <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
              <path d="m5 16 4.5-4.5 3.5 3.5 2.5-2.5L19 16" />
              <path d="m4 4 16 16" />
            </svg>
          </span>
          Alt text: a tin of spring oolong beside a small white cup
        </div>
      ) : (
        <figure className="relative m-0 min-h-[132px] overflow-hidden">
          <TeaStill />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 pb-2 pt-6 text-[10.5px] leading-[1.4] text-white">
            spring oolong, tin and cup (invented photo)
          </figcaption>
        </figure>
      )}
      <div className="p-5">
        <b className="block text-[15.5px] font-semibold tracking-[-0.02em] text-black">The second steep, explained</b>
        <p className="m-0 mt-2 text-[13px] leading-[1.6] text-[#555]">Why it often tastes better than the first, and how to get it right.</p>
        <span className={`mt-4 rounded-full bg-[#0d0d0d] px-5 py-2.5 text-[12.5px] font-medium text-white ${stacked ? "block text-center" : "inline-block"}`}>
          Read the guide
        </span>
      </div>
    </div>

    <div className="border-t border-[#f1f1f1] px-5 py-3.5 text-[10.5px] leading-[1.5] text-[#a2a2a2]">
      You are getting this because you signed up. Unsubscribe anytime. Tidewater Tea Co. is invented.
    </div>
  </div>
);

const ResponsiveMock = () => {
  const [imgOff, setImgOff] = useState(false);

  return (
    <div className={`overflow-hidden ${panel}`}>
      <div className="flex flex-wrap items-center gap-4 border-b border-[#f1f1f1] px-7 py-5 md:px-10">
        <span className={label}>One newsletter, two widths</span>
        <button
          type="button"
          aria-pressed={imgOff}
          onClick={() => setImgOff((v) => !v)}
          className={`ml-auto rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
            imgOff ? "bg-[#0d0d0d] text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:text-black hover:ring-[#0d0d0d]"
          }`}
        >
          Images off
        </button>
      </div>

      <div className="grid grid-cols-1 items-center bg-[#fbfbfb] lg:grid-cols-[1.3fr_0.7fr]">
        {/* the room it has on a desk */}
        <div className="border-b border-[#ececec] p-7 md:p-9 lg:border-b-0 lg:border-r">
          <div className="mx-auto max-w-[520px]">
            <NewsletterCard stacked={false} imgOff={imgOff} />
          </div>
        </div>

        {/* the room it has in a coffee line */}
        <div className="p-7 md:p-9">
          <div className="mx-auto max-w-[286px]">
            <NewsletterCard stacked imgOff={imgOff} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── outreach checklist ─────────────────────────── */

const coldList = [
  "I can say why I picked this person in one line.",
  "My From name and subject line are honest.",
  "There's one ask, and it's small.",
  "My real mailing address is in the footer.",
  "The unsubscribe link works, and I'll honor it fast. The US and Canada both say within ten business days.",
  "I've checked the consent rules where this person lives. Canada leans on consent.",
  "I'm sending a small batch first.",
  "I've decided when I'll stop following up.",
];

const ColdChecklist = () => {
  const [on, setOn] = useState(coldList.map(() => false));
  const n = on.filter(Boolean).length;
  const all = n === coldList.length;
  const C = 2 * Math.PI * 52;

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[1.2fr_0.8fr] ${panel}`}>
      <div className="border-b border-[#ececec] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div className="grid gap-4">
          {coldList.map((t, i) => (
            <label key={t} className="group flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                checked={on[i]}
                onChange={() => setOn((p) => p.map((v, j) => (j === i ? !v : v)))}
                className="peer sr-only"
              />
              <span className="mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-white text-white ring-1 ring-[#d4d4d4] transition-all duration-200 group-hover:ring-[#9a9a9a] peer-checked:bg-[#ff1616] peer-checked:ring-[#ff1616] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0d0d0d]">
                <Tick />
              </span>
              <span className="text-[15px] leading-[1.6] text-[#555] transition-colors peer-checked:text-black md:text-[16px]">{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div
        aria-live="polite"
        className={`flex flex-col items-center justify-center p-7 text-center transition-colors duration-500 md:p-10 ${all ? "bg-[#0d0d0d]" : "bg-[#fbfbfb]"}`}
      >
        <span aria-hidden="true" className="relative block h-[132px] w-[132px]">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" stroke={all ? "rgba(255,255,255,0.18)" : "#ececec"} />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              stroke={all ? "#ffffff" : "#ff1616"}
              strokeDasharray={C}
              strokeDashoffset={C * (1 - n / coldList.length)}
              style={{ transition: "stroke-dashoffset 500ms cubic-bezier(.2,.7,.2,1), stroke 400ms ease" }}
            />
          </svg>
          <span className={`absolute inset-0 flex items-center justify-center ${all ? "text-white" : "text-[#0d0d0d]"}`}>
            {all ? (
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            ) : (
              <span className="text-[30px] font-semibold tracking-[-0.04em] tabular-nums">{n}</span>
            )}
          </span>
        </span>

        <p className={`m-0 mt-7 text-[26px] font-semibold leading-[1.15] tracking-[-0.035em] md:text-[30px] ${all ? "text-white" : "text-black"}`}>
          {all ? "Cleared to send." : "Not yet."}
        </p>
        <p className={`m-0 mt-3 text-[15px] leading-[1.65] ${all ? "text-white/70" : "text-[#6d6d6d]"}`}>
          {all ? "Small batch first. Then read the replies." : `${coldList.length - n} to go.`}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────── the A/B luck test ─────────────────────────── */

const abIntro = "Pick a group size and press send. Both emails are identical. The true open rate is set to 25%, and that number is invented.";

const AbSimulator = () => {
  const [n, setN] = useState(200);
  const [res, setRes] = useState<[number, number] | null>(null);
  const [gaps, setGaps] = useState<number[]>([]);
  const [verdict, setVerdict] = useState(abIntro);

  const bin = (size: number) => {
    let k = 0;
    for (let i = 0; i < size; i++) if (Math.random() < 0.25) k++;
    return k;
  };

  const send = () => {
    const a = (bin(n) / n) * 100;
    const b = (bin(n) / n) * 100;
    const gap = Math.abs(a - b);
    setRes([a, b]);
    setGaps((g) => [...g, gap]);
    setVerdict(
      gap < 0.05
        ? "A dead heat. Same email, same result."
        : `Version ${a > b ? "A" : "B"} takes it by ${gap.toFixed(1)} points. It is the same email. That gap is luck.`
    );
  };

  const reset = () => {
    setRes(null);
    setGaps([]);
    setVerdict(abIntro);
  };

  const big = gaps.filter((g) => g >= 2).length;

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[0.78fr_1.22fr] ${panel}`}>
      <div className="border-b border-[#ececec] bg-[#fbfbfb] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div className="flex items-baseline justify-between">
          <span className={label}>Group</span>
          <span className="text-[13px] font-semibold text-[#6d7174]">{n} people each</span>
        </div>
        <div className="mt-3 flex">
          <Slider id="em-group" min={50} max={5000} step={50} value={n} onChange={setN} aria="Group size" />
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={send}
            className="rounded-full bg-[#0d0d0d] px-6 py-3 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#ff1616]"
          >
            Send both
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-white px-5 py-3 text-[14px] font-medium text-[#555] ring-1 ring-[#e4e4e4] transition-colors duration-300 hover:text-black hover:ring-[#0d0d0d]"
          >
            Reset
          </button>
        </div>

        {/* every send so far, and which ones showed a gap */}
        {gaps.length > 0 && (
          <div className="mt-8">
            <span aria-hidden="true" className="flex flex-wrap gap-1.5">
              {gaps.slice(-28).map((g, k) => (
                <span key={k} className={`block h-2 w-2 rounded-full ${g >= 2 ? "bg-[#ff1616]" : "bg-[#d4d4d4]"}`} />
              ))}
            </span>
            <p className="m-0 mt-4 text-[13px] text-[#9a9a9a]">
              Sends: {gaps.length}. Gaps of 2 points or more: {big}.
            </p>
          </div>
        )}
      </div>

      <div className="p-7 md:p-10">
        <div className="relative">
          <div className="grid gap-5">
            {(["A", "B"] as const).map((k, i) => {
              const val = res ? res[i] : 0;
              return (
                <div key={k} className="grid grid-cols-[22px_1fr_60px] items-center gap-4">
                  <span className="text-[15px] font-semibold text-black">{k}</span>
                  <span aria-hidden="true" className="relative block h-[34px] overflow-hidden rounded-[10px] bg-[#f3f3f3]">
                    <span
                      className={`block h-full rounded-[10px] transition-all duration-500 ${i === 0 ? "bg-[#0d0d0d]" : "bg-[#ff1616]"}`}
                      style={{ width: `${Math.min(100, val * 2)}%` }}
                    />
                    <span className="absolute inset-y-0 left-1/2 w-px bg-white/70" />
                  </span>
                  <span className="text-right text-[14px] font-semibold tabular-nums text-[#555]">{res ? `${val.toFixed(1)}%` : ""}</span>
                </div>
              );
            })}
          </div>

          {/* the mark that says where the truth sits */}
          <div aria-hidden="true" className="mt-2 grid grid-cols-[22px_1fr_60px] gap-4">
            <span />
            <span className="relative block h-4">
              <span className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center">
                <span className="block h-2 w-px bg-[#c4c4c4]" />
                <span className="mt-1 text-[10px] tracking-[0.1em] text-[#9a9a9a]">25%</span>
              </span>
            </span>
            <span />
          </div>
        </div>

        <p aria-live="polite" className="m-0 mt-9 min-h-[3.2em] border-t border-[#f1f1f1] pt-7 text-[17px] leading-[1.5] tracking-[-0.015em] text-black md:text-[19px]">
          {verdict}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────── the tool matcher ─────────────────────────── */

const mt1: Record<string, { h: string; p: string }> = {
  sheet: { h: "Start with Mailchimp or Brevo", p: "Your list lives in a spreadsheet or a store. An all-in-one platform with forms, templates and simple automation fits. Pick the one your team finds easier to use." },
  crm: { h: "Start with the CRM you already use", p: "Hubspot or Salesforce, whichever sales already lives in. The customer record exists, so sending from the same system means emails follow what sales and service know." },
  app: { h: "Start with resend, plus a marketing tool", p: "Emails your product triggers, like receipts and password resets, are a developer job. resend is an email API built for that. Newsletters can live in a separate platform." },
};

const mt2: Record<string, string> = {
  news: "You mostly send newsletters and promos, so templates, forms and a calendar matter most.",
  deals: "You mostly follow up on deals, so sequences tied to deal stage matter most. Check what your CRM already does before buying anything.",
  app: "You mostly send emails triggered by what users do. Reliability and a clean API matter more than drag-and-drop design.",
};

const mtEnd = "Whatever you choose, keep one list. Two copies of the truth will disagree by Friday.";

const ToolMatcher = () => {
  const [q1, setQ1] = useState("sheet");
  const [q2, setQ2] = useState("news");
  const r = mt1[q1];

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
      <div className={`flex flex-col justify-center p-7 md:p-10 ${panel}`}>
        <fieldset className="m-0 border-0 p-0">
          <legend className={`${label} mb-4 p-0`}>Where does your customer list live?</legend>
          <div className="grid gap-2">
            {([["sheet", "A spreadsheet or my store"], ["crm", "A CRM my sales team uses"], ["app", "My own app database"]] as [string, string][]).map(([k, t]) => (
              <button
                key={k}
                type="button"
                aria-pressed={q1 === k}
                onClick={() => setQ1(k)}
                className={`flex items-center gap-3 rounded-full py-3 pl-4 pr-5 text-left text-[15px] transition-all duration-300 ${
                  q1 === k ? "bg-[#0d0d0d] font-medium text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:text-black hover:ring-[#0d0d0d]"
                }`}
              >
                <span aria-hidden="true" className={`block h-2 w-2 shrink-0 rounded-full ${q1 === k ? "bg-[#ff1616]" : "bg-[#dcdcdc]"}`} />
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="m-0 mt-8 border-0 p-0">
          <legend className={`${label} mb-4 p-0`}>What do you mostly send?</legend>
          <div className="grid gap-2">
            {([["news", "Newsletters and promos"], ["deals", "Follow-ups tied to deals"], ["app", "Emails triggered by app activity"]] as [string, string][]).map(([k, t]) => (
              <button
                key={k}
                type="button"
                aria-pressed={q2 === k}
                onClick={() => setQ2(k)}
                className={`flex items-center gap-3 rounded-full py-3 pl-4 pr-5 text-left text-[15px] transition-all duration-300 ${
                  q2 === k ? "bg-[#0d0d0d] font-medium text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:text-black hover:ring-[#0d0d0d]"
                }`}
              >
                <span aria-hidden="true" className={`block h-2 w-2 shrink-0 rounded-full ${q2 === k ? "bg-[#ff1616]" : "bg-[#dcdcdc]"}`} />
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite" className="flex flex-col justify-center rounded-[30px] bg-[#0d0d0d] p-7 text-white shadow-[0_40px_70px_-50px_rgba(13,13,13,0.9)] md:p-10">
        <span aria-hidden="true" className="block h-[2px] w-12 bg-[#ff1616]" />
        <h3 className="m-0 mt-7 text-[27px] font-semibold leading-[1.12] tracking-[-0.035em] md:text-[34px]">{r.h}</h3>
        <p className="m-0 mt-7 text-[15px] leading-[1.85] text-white/70 md:text-[16px]">{r.p}</p>
        <p className="m-0 mt-5 text-[15px] leading-[1.85] text-white/70 md:text-[16px]">{mt2[q2]}</p>
        <p className="m-0 mt-8 border-l-2 border-[#ff1616] pl-5 text-[15px] leading-[1.7] text-white md:text-[16px]">{mtEnd}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────── cost: scope and return ─────────────────────────── */

const scopeQs: [string, string[]][] = [
  ["List size", ["Under 1,000", "1,000 to 10,000", "Over 10,000"]],
  ["Sends a month", ["1 to 2", "4 to 8", "More than 8"]],
  ["Automations live", ["None yet", "A few", "Many"]],
  ["Design", ["Plain template", "Custom design"]],
  ["CRM link", ["Not needed", "Connected"]],
];

const grow = [
  ["List care and clean-up grow.", "Deliverability and list care need steady attention."],
  ["More copy, design and review hours.", "A real production calendar, with approvals."],
  ["Each automation needs mapping, copy and testing.", "Many flows need an owner and a regular audit."],
  ["Template building and cross-inbox testing grow."],
  ["Data mapping and sync checks grow."],
];

const ScopeBuilder = () => {
  const [v, setV] = useState([0, 0, 0, 0, 0]);
  const pts = v.reduce((a, b) => a + b, 0);
  const tier = pts <= 2 ? "Light" : pts <= 5 ? "Standard" : "Heavy";
  const grows = v.map((x, i) => (x > 0 ? grow[i][Math.min(x, 2) - 1] || grow[i][0] : null)).filter(Boolean) as string[];

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[1.02fr_0.98fr] ${panel}`}>
      <div className="border-b border-[#ececec] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div className="grid gap-7">
          {scopeQs.map(([q, opts], i) => (
            <div key={q} className={i ? "border-t border-[#f1f1f1] pt-7" : ""}>
              <span className={label}>{q}</span>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {opts.map((o, k) => (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={v[i] === k}
                    onClick={() => setV((p) => p.map((x, j) => (j === i ? k : x)))}
                    className={`rounded-full px-4 py-2.5 text-[14px] transition-all duration-300 ${
                      v[i] === k ? "bg-[#0d0d0d] font-medium text-white" : "bg-white text-[#555] ring-1 ring-[#e4e4e4] hover:text-black hover:ring-[#0d0d0d]"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="flex flex-col justify-center bg-[#fbfbfb] p-7 md:p-10">
        {/* the scale, and where these answers land on it */}
        <div className="relative">
          <span aria-hidden="true" className="block h-[10px] overflow-hidden rounded-full bg-[#ececec]">
            <span
              className="block h-full rounded-full bg-[#0d0d0d] transition-all duration-500"
              style={{ width: `${(pts / 8) * 100}%` }}
            />
          </span>
          <span aria-hidden="true" className="absolute -top-1 block h-[18px] w-[3px] rounded-full bg-[#ff1616] transition-all duration-500" style={{ left: `calc(${(pts / 8) * 100}% - 1.5px)` }} />
          <div aria-hidden="true" className="mt-3 flex justify-between">
            {["Light", "Standard", "Heavy"].map((t) => (
              <span key={t} className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${t === tier ? "text-[#6d7174]" : "text-[#c4c4c4]"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="m-0 mt-8 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-black md:text-[36px]">{tier} scope</p>
        <p className="m-0 mt-5 text-[15px] leading-[1.8] text-[#555]">
          {grows.length ? `Grows with your choices: ${grows.join(" ")}` : "Nothing grows yet. Try a bigger list, more automations or a CRM link."}
        </p>
      </div>
    </div>
  );
};

const roiFields: [string, number][] = [
  ["List size", 5000],
  ["Sends a month", 4],
  ["Click rate, %", 2],
  ["Buy rate of clickers, %", 4],
  ["Average order, $", 40],
  ["Monthly spend, $", 600],
];

const RoiBuilder = () => {
  const [v, setV] = useState(roiFields.map((f) => String(f[1])));
  const num = v.map((x) => Math.max(0, parseFloat(x) || 0));
  const orders = ((num[0] * num[1] * num[2]) / 100) * num[3] / 100;
  const rev = orders * num[4];
  const sp = num[5];
  const r = sp ? ((rev - sp) / sp) * 100 : 0;
  const top = Math.max(rev, sp, 1);

  const note = !sp
    ? "Add a spend figure to see the ratio."
    : r < 0
      ? "Below break-even this month. That is information, not failure."
      : r < 50
        ? "A thin positive. Small gains in click rate or order value move it fast."
        : "Comfortably positive on these toy numbers. Check attribution before you cheer.";

  return (
    <div className={`grid grid-cols-1 overflow-hidden lg:grid-cols-[1.02fr_0.98fr] ${panel}`}>
      <div className="border-b border-[#ececec] p-7 md:p-10 lg:border-b-0 lg:border-r">
        <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {roiFields.map(([name], i) => (
            <label key={name} className="block">
              <span className={label}>{name}</span>
              <input
                type="number"
                min={0}
                step="any"
                value={v[i]}
                onChange={(e) => setV((p) => p.map((x, j) => (j === i ? e.target.value : x)))}
                className="mt-2.5 w-full border-0 border-b-2 border-[#e4e4e4] bg-transparent px-0 pb-2 text-[20px] tracking-[-0.02em] text-black transition-colors focus:border-[#ff1616] focus:outline-none"
              />
            </label>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="flex flex-col justify-center bg-[#fbfbfb] p-7 md:p-10">
        <p className="m-0 text-[54px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#909396] md:text-[68px]">
          {sp ? `${Math.round(r)}%` : "n/a"}
        </p>

        {/* what came in against what went out */}
        <div aria-hidden="true" className="mt-8 grid gap-3">
          {([["revenue", rev, "bg-[#ff1616]"], ["spent", sp, "bg-[#0d0d0d]"]] as [string, number, string][]).map(([name, val, tone]) => (
            <div key={name} className="grid grid-cols-[70px_1fr] items-center gap-4">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{name}</span>
              <span className="block h-[22px] overflow-hidden rounded-[7px] bg-[#ececec]">
                <span className={`block h-full rounded-[7px] transition-all duration-500 ${tone}`} style={{ width: `${(val / top) * 100}%` }} />
              </span>
            </div>
          ))}
        </div>

        <p className="m-0 mt-7 text-[15px] leading-[1.8] text-[#555]">
          About {Math.round(orders)} orders and ${Math.round(rev).toLocaleString("en-US")} in revenue against ${Math.round(sp).toLocaleString("en-US")} spent.
        </p>
        <p className="m-0 mt-3 text-[15px] leading-[1.8] text-black">{note}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────── the page ─────────────────────────── */

const EmailMarketing = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">
        <style>{`
          @keyframes emUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
          .em-range{-webkit-appearance:none;appearance:none;height:26px;margin:0;background:transparent;outline:none;cursor:pointer}
          .em-range::-webkit-slider-runnable-track{height:26px;background:transparent}
          .em-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:24px;height:24px;border-radius:50%;background:#0d0d0d;border:3px solid #fff;box-shadow:0 6px 16px -6px rgba(13,13,13,.8);cursor:pointer}
          .em-range::-moz-range-track{height:26px;background:transparent}
          .em-range::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#0d0d0d;border:3px solid #fff;box-shadow:0 6px 16px -6px rgba(13,13,13,.8);cursor:pointer}
          @media (prefers-reduced-motion: reduce){.ppp-em-page *{animation:none!important;transition:none!important}}
        `}</style>

        <div className="ppp-em-page">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 pb-24 md:pt-14 md:pb-36`}>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[60%_minmax(0,1fr)] lg:gap-10 xl:gap-14">
            <Reveal>
              <h1 id="page-title" className="font-semibold leading-[1.04] tracking-[-0.045em] text-black">
                <span className="block text-[34px] sm:text-[44px] md:text-[48px] lg:text-[44px] xl:text-[54px] lg:whitespace-nowrap">Good email marketing feels</span>
                <span className="block text-[34px] sm:text-[44px] md:text-[48px] lg:text-[44px] xl:text-[54px] lg:whitespace-nowrap">like a letter, <span className="text-[#909396]">not a flyer.</span></span>
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[680px]`}>
                Email marketing is one of the few places you own the audience. Feeds change their rules overnight. An address someone handed you on purpose stays put.
              </p>
              <p className={`${bodyClass} mt-4 max-w-[680px]`}>
                Picture Dana, standing in a coffee line, thumbing through forty-one emails. She opens two. Which two, and why? That's this whole page. (Dana's invented. So are the forty-one.)
              </p>
              <p className={`${bodyClass} mt-4 max-w-[680px]`}>
                Tap around. Open the emails, break the subject lines, drag the sliders. Every brand here is made up and every number is a toy. You'll leave knowing what to send and when. Maybe who should send it, too.
              </p>
            </Reveal>

            <Reveal delay={200} className="w-full lg:ml-auto lg:h-full">
              <InboxPeek />
            </Reveal>
          </div>
        </section>

        {/* ── SUBJECT LINES ── */}
        <section aria-labelledby="open-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <h2 id="open-heading" className={`${h2Class} lg:sticky lg:top-28`}>
                <SplitHeading line="Three lines" italic="decide" rest="the open." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Before anyone reads your email, they read three small things. The sender. The subject. The preview text. That's the whole audition.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Email subject lines do the heavy lifting, and most of them are limp. <em>March update.</em> <em>News from us.</em> Who got excited? Nobody. Say what's inside, the way a customer would say it. Email copywriting starts there. One idea. One person. Then stop.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Keep the sender human. A name beats a department. Then let the preview text finish the thought the subject started.
                </p>
                <div className="mt-8">
                  <Cap>Subject line lab. Type your own, or steal one of ours. Try cutting one word at a time and watch which checks flip.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <SubjectLab />
            </Reveal>

            <TestLine>Pull up your last three promotional emails. Would you open them yourself?</TestLine>
          </div>
        </section>

        {/* ── STRATEGY ── */}
        <section aria-labelledby="strategy-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 xl:gap-20">
            <h2 id="strategy-heading" className="font-medium leading-[1.14] tracking-[-0.04em] text-black lg:sticky lg:top-28">
              <span className="block text-[28px] sm:text-[36px] lg:text-[32px] xl:text-[40px] 2xl:text-[46px]">Email marketing strategy first.</span>
              <span className="block text-[28px] sm:text-[36px] lg:text-[32px] xl:text-[40px] 2xl:text-[46px]">
                The send button <span style={{ color: ACCENT }}>can wait.</span>
              </span>
            </h2>
            <div>
              <p className={bodyClass}>
                Picture the usual Tuesday. Somebody logs in, grabs a template, clicks send. Silence. So the platform gets blamed. A strategy fixes that, and it's shorter than you'd think. Three answers on a sticky note. Who's reading? What should they do next? How will you know it worked?
              </p>
              <p className={`${bodyClass} mt-4`}>
                Some people like the funnel picture. Fine. An Email marketing funnel runs stranger, subscriber, buyer, repeat buyer. Lifecycle email marketing is the view from the other side, the subscriber's, and it asks different questions. What do they need right now? What's next for them?
              </p>
              <p className={`${bodyClass} mt-4`}>
                Your front door is a Lead magnet, something small that's worth an email address. A checklist. A sample. (Not a forty-page PDF nobody opens.) Ask what your best customers wished they'd had on day one. Then hand that over.
              </p>
              <div className="mt-8">
                <Cap>The road, stage by stage. Tap one. Each stage asks a different question, so each needs a different email.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <FunnelRoad />
          </Reveal>

          <TestLine>Stick your goal on your monitor. Does it still make sense on Friday?</TestLine>
        </section>

        {/* ── WELCOME ── */}
        <section aria-labelledby="welcome-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <h2 id="welcome-heading" className={`${h2Class} lg:sticky lg:top-28`}>
                <span className="block">The welcome</span>
                <span className="block" style={{ color: ACCENT }}>mat.</span>
              </h2>
              <div>
                <p className={bodyClass}>
                  Someone just joined. They still remember why. That window closes fast. A Welcome email series makes use of it. Hand over what you promised. Say who you are. Show a bit of your best work. Ask one small question. Four emails, five at most. No rush.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Now the two systems people mix up. A Drip campaign is a timetable. Day one, day three, day seven, same emails for everyone. Fine for onboarding. A Nurture sequence pays attention. Click the guide? You get one email. Ignore it? You get another. Flip between the two below.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  That paying attention is Email automation. A click on the brewing guide tags Dana as curious, and the next email follows. Marketing automation is the bigger cousin, reaching into forms, ads and sales. Begin with one rule you could explain to Dana without blushing.
                </p>
                <div className="mt-8">
                  <Cap>Same subscriber, two kinds of system. Slide through the first three weeks. Switch to the nurture side and pick what the subscriber does. The path changes and so do the records behind it.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <SeriesTimeline />
            </Reveal>

            <TestLine>Sign up to your own list tonight. Stopwatch optional.</TestLine>
          </div>
        </section>

        {/* ── PERSONALIZATION ── */}
        <section aria-labelledby="personal-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            <h2 id="personal-heading" className={`${h2Class} lg:sticky lg:top-28`}>
              <SplitHeading line="Email personalization" italic="beyond" rest="the first name." accent={ACCENT} />
            </h2>
            <div>
              <p className={bodyClass}>
                Dana bought a teapot in February. In March, Tidewater sends her a teapot promo. Ouch. Email personalization works when the message fits her instead. Filter refills, say. Or a note about the second steep.
              </p>
              <p className={`${bodyClass} mt-4`}>
                Tidewater knows more. Her city. The paper filters she browsed at midnight. Mention the filters? Fine. Mention the midnight? Creepy. The line sits between useful and watched, so stay on the useful side.
              </p>
              <div className="mt-8">
                <Cap>Switch on what you know about Dana. Watch the email change. Switch on everything and see where useful turns into a little too much.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <PersonalDial />
          </Reveal>

          <TestLine>Take one customer. List three facts you know about them. Cross out the creepy one.</TestLine>
        </section>

        {/* ── NEWSLETTER ── */}
        <section aria-labelledby="newsletter-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <h2 id="newsletter-heading" className={`${h2Class} lg:sticky lg:top-28`}>
                <SplitHeading line="A newsletter has" italic="to" rest="earn its slot." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Say Tidewater starts a newsletter. First draft, a coupon. Second draft, another coupon. Nobody would miss it. Newsletter strategy starts when someone asks why anyone would open it over the next email. A discount expires. A point of view lasts. So does a regular treat, like a one-minute brewing tip.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  Newsletter content ideas come easier from customers than from a calendar. Dana keeps asking about the second steep. That's an issue. A photo of the packing table is another. So is a customer's story (with permission). Shuffle a few below.
                </p>
                <div className="mt-8">
                  <Cap>Newsletter idea shuffler, for an invented tea shop. Pick a type, press shuffle, and keep the ones you could really shoot this week.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <IdeaShuffler />
            </Reveal>

            <Reveal className="mt-16 grid grid-cols-1 items-start gap-8 md:mt-24 lg:grid-cols-2 lg:gap-20">
              <p className={bodyClass}>
                Then comes the Email calendar. Could Tidewater keep two sends a week on a rotten week? No. So fewer, done well. Email campaigns need a rhythm, and the newsletter keeps the beat. Slot Email marketing campaigns around it. A launch here. A seasonal note there. Don't stack the asks. Dana notices.
              </p>
              <div className="self-center">
                <Cap>Fill a month. Two sends a week, tap to change each one. Aim for a month you could keep up on a bad week, with the asks spread out.</Cap>
              </div>
            </Reveal>

            <Reveal className="mt-10 md:mt-12">
              <MonthGrid />
            </Reveal>

            <TestLine>Write down the one reason to open your newsletter. Is it a reason or a hope?</TestLine>
          </div>
        </section>

        {/* ── DESIGN ── */}
        <section aria-labelledby="design-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            <h2 id="design-heading" className={`${h2Class} lg:sticky lg:top-28`}>
              <span className="block">Design for the</span>
              <span className="block" style={{ color: ACCENT }}>thumb first.</span>
            </h2>
            <div>
              <p className={bodyClass}>
                Tidewater's newsletter has one column, big type and a single button. It looks a bit plain. That's the point. Email newsletter design has one job, and it's getting out of the way. Newsletter designs like that read fast on a bus. Our <Link to="/graphic-design" className={emLink}>graphic design</Link> team builds them that way.
              </p>
              <p className={`${bodyClass} mt-4`}>
                Dana opens it on her phone, in the coffee line. Two columns would crush it. Responsive email design is the reason it stacks. Go on, drag the slider. Watch it bend. Then switch the images off (some inboxes hide pictures until you ask). That's what alt text is for.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <ResponsiveMock />
          </Reveal>

          <TestLine>Open last week's email on your phone, at arm's length. Can you find the button?</TestLine>
        </section>

        {/* ── OUTREACH ── */}
        <section aria-labelledby="outreach-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <h2 id="outreach-heading" className={`${h2Class} lg:sticky lg:top-28`}>
                <SplitHeading line="Outreach" italic="with" rest="manners." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Cold Email outreach isn't a newsletter. Imagine a candle maker emailing a hundred cafes the same paragraph. Mostly deletes. Now imagine she writes to one cafe, mentions the chalkboard sign out front and offers a sample. Different game. Outreach Campaigns live or die on one thing: does each message say why this person, today?
                </p>
                <p className={`${bodyClass} mt-4`}>
                  The law cares too. The US has CAN-SPAM. It wants an honest sender, an honest subject line, a physical address and a working opt-out, honored within ten business days. Canada's CASL leans harder on consent, and that usually comes before message one. Not legal advice. Ask someone who gives it.
                </p>
                <div className="mt-8">
                  <Cap>Before you hit send, tick them all. It's a checklist, so be strict with yourself.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <ColdChecklist />
            </Reveal>

            <Reveal className="mt-8">
              <p className="text-[13px] leading-[1.8] text-[#9a9a9a]">
                Read the rules: <a href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" target="_blank" rel="noopener noreferrer" className={emLink}>FTC: CAN-SPAM compliance guide</a> &middot; <a href="https://crtc.gc.ca/eng/com500/faq500.htm" target="_blank" rel="noopener noreferrer" className={emLink}>CRTC: CASL frequently asked questions</a>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── TESTING ── */}
        <section aria-labelledby="testing-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            <h2 id="testing-heading" className={`${h2Class} lg:sticky lg:top-28`}>
              <SplitHeading line="Test one thing." italic="Ignore" rest="the luck." accent={ACCENT} />
            </h2>
            <div>
              <p className={bodyClass}>
                Email A/B testing is two versions, two slices of your list, one change. A new subject. A new button. Never both, or you won't know which one mattered.
              </p>
              <p className={`${bodyClass} mt-4`}>
                Now the catch. Small lists lie. Send two identical emails and the results can still differ. Pure chance. Try the simulator below and watch a fake winner show up. Can't beat the luck? Then no winner yet. So try again. Or resend to a different slice of the list. Does the gap come back?
              </p>
              <div className="mt-8">
                <Cap>Both versions below are the same email. Send them and look at the gap. Press send several times. Notice how often a gap appears even though nothing differs.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <AbSimulator />
          </Reveal>

          <TestLine>Name one thing you'd test this month. Now name what you'd do if it won.</TestLine>
        </section>

        {/* ── TOOLS ── */}
        <section aria-labelledby="tools-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
              <h2 id="tools-heading" className={`${h2Class} lg:sticky lg:top-28`}>
                <SplitHeading line="Tools, and where" italic="your" rest="data lives." accent={ACCENT} />
              </h2>
              <div>
                <p className={bodyClass}>
                  Take Tidewater. Its list lives in a spreadsheet and a shop platform, which points to Mailchimp or Brevo (forms, templates, a little automation, all in one place). A software company tracking every deal would lean toward Hubspot or Salesforce, where emails use what sales has learned. And a developer sending receipts from inside an app? That's resend, an email API.
                </p>
                <p className={`${bodyClass} mt-4`}>
                  That's CRM and email integration, in a nutshell. The list and the customer record must agree. Someone unsubscribes in one tool, the other should hear by morning. And pick whatever your team will actually open on a Monday.
                </p>
                <div className="mt-8">
                  <Cap>Answer two questions. Get a starting point, not a verdict. Change the answers and read how the advice shifts.</Cap>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-14 md:mt-20">
              <ToolMatcher />
            </Reveal>

            <TestLine>Count the copies of your customer list. One? Four? Be brave.</TestLine>
          </div>
        </section>

        {/* ── COST ── */}
        <section aria-labelledby="cost-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            <h2 id="cost-heading" className={`${h2Class} lg:sticky lg:top-28`}>
              <SplitHeading line="What it costs." italic="What it" rest="earns." accent={ACCENT} />
            </h2>
            <div>
              <p className={bodyClass}>
                What does it cost? Depends. Tool fees are the small bit. List size, automations, design depth, copy and who does the work all push the number around. Build a scope below. We won't quote a price on a page, because a number without your list in front of us is a guess.
              </p>
              <div className="mt-8">
                <Cap>Scope builder. It shows what grows, not a price. Change the choices and see which parts of the work get heavier.</Cap>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <ScopeBuilder />
          </Reveal>

          <Reveal className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-2 md:gap-16">
            <p className={bodyClass}>
              Email marketing ROI sounds fancier than it is. What came in, minus what you spent, divided by what you spent. Attribution is the hard bit. Count sales you can trace to a click or a code. Leave out the ones you can't. Plug in your own numbers below. Ours are made up.
            </p>
            <p className={bodyClass}>
              Email marketing specialist work is the hands-on side. Platform, lists, sends, reports. Email marketing expert help is the head side. Strategy, tests, the story behind the sends. A small brand often needs a bit of each long before it needs a hire.
            </p>
          </Reveal>

          <Reveal className="mt-10 md:mt-12">
            <RoiBuilder />
          </Reveal>

          <TestLine>Open last month's sales. Which ones came from email? Be strict.</TestLine>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading={<SplitHeading line="Good questions." italic="Plain" rest="answers." accent={ACCENT} />} faqs={faqs} accent={ACCENT} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 pb-8 md:pt-44">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold leading-[1.0] tracking-[-0.04em] text-black">
                <HeroTitleLines line="Write something" italic="worth" rest="opening." plain compact />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[800px]`}>
                Open your inbox. Find the last email you were glad to get. Now find the last one you deleted unread. The gap between them is your brief. Outsource email marketing, or keep it in-house and borrow our eyes. Our <Link to="/content-marketing" className={emLink}>content marketing</Link> and <Link to="/brand-strategy" className={emLink}>brand strategy</Link> teams can help, or you can <Link to="/contact" className={emLink}>talk to Perfect Pixel Pro</Link>.
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

export default EmailMarketing;
