import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  container, sectionY, h2Class, bodyClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Brand Storytelling | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Brand Storytelling from Perfect Pixel Pro. One true story, told the same way across your website, posts, press and product pages.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "why is content marketing important?",
    a: "Because plenty of people ask a search box before they ask a person. A homeowner with a leaky faucet types the problem in and calls whichever plumber's page helped. Content Marketing is how your page becomes the helpful one. Yes, it's slower than an ad. It's also the thing still working in the months you spend nothing.",
  },
  {
    q: "What is Brand Storytelling?",
    a: "Picture a bike shop where three sisters won't let anyone leave with a squeaky chain (Hollis & Daughters, fictional). Nobody wrote that rule for marketing. It's just true, which is why it makes a story. Brand Storytelling is finding your version, then telling it the same way on the website, the van and the invoice.",
  },
  {
    q: "What's the difference between Brand Copywriting and Content Copywriting?",
    a: "Voice first. Brand Copywriting picks it, say warm and a little gruff with zero jargon. Then Content Copywriting uses it on something with a goal, like a booking page that should fill Saturday tune-ups. One job, two stages, and we do both.",
  },
  {
    q: "How do you write Product Descriptions?",
    a: "Start with the person holding the product, usually someone stranded with a flat and a tire lever. Tell them the one thing only this lever does, like nylon that won't gouge the rim. Then quit. We cross out premium and high-quality on sight.",
  },
  {
    q: "How long should Blog Posts be?",
    a: "Honestly, ignore word counts. A reader asking why their chain skips wants a short post and a photo. A reader asking what to check on a used frame wants the long version, with a checklist. Match the post to the question.",
  },
  {
    q: "Do Guest Posts help?",
    a: "A winter commuting column in a local cycling club's newsletter? Probably. Riders read it, trust the advice, a few click through. A link dropped into some random directory? No. We'd never promise rankings, and you shouldn't trust anyone who does.",
  },
  {
    q: "What goes in Press Releases?",
    a: "The news goes first, so open with it: the shop is setting up a second repair stand at the farmers market on Saturday. Then who it helps, when it opens and a quote from one of the sisters. If one sentence can't hold the news, the release isn't ready.",
  },
  {
    q: "What are Content Strategies?",
    a: "A page, and ours usually fit on one. For the bike shop it'd be two rooms (a website with clear repair prices and a monthly newsletter column), three topics (flats, chain care, riding in the rain) and a schedule somebody can survive. Good Content Strategies are boring in the best way.",
  },
];

const structuredData = [articleSchema("Brand Storytelling gives people something to repeat about you.", PAGE_DESCRIPTION), faqSchema(faqs)];

const TestLine = ({ children }: { children: ReactNode }) => (
  <Reveal className="mt-12 md:mt-16">
    <p className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-[22px] bg-white ring-1 ring-[#ececec] px-6 py-5 md:px-8 md:py-6 w-fit max-w-full">
      <span className="self-start sm:self-auto shrink-0 rounded-full bg-[#ff1616] px-4 py-1.5 text-[13px] font-semibold text-white">The test.</span>
      <span className="text-[20px] md:text-[24px] leading-[1.3] text-black">{children}</span>
    </p>
  </Reveal>
);

const Choice = ({ on, onClick, children, dark = false }: { on: boolean; onClick: () => void; children: ReactNode; dark?: boolean }) => (
  <button
    type="button"
    aria-pressed={on}
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-[13px] md:text-[14px] font-medium transition-colors duration-300 ${
      on ? "bg-[#0d0d0d] text-white" : dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-white text-black ring-1 ring-[#e5e5e5] hover:ring-[#0d0d0d]"
    }`}
  >
    {children}
  </button>
);

// ── Hero: the same shop, written two ways. The story voice types itself in.
const story = "Three sisters took over their dad's repair stand and kept his one rule: nobody leaves with a squeaky chain.";

const VoiceEditor = () => {
  const [voice, setVoice] = useState<"bro" | "story">("bro");
  const [touched, setTouched] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (touched) return;
    const t = window.setTimeout(() => setVoice("story"), 2600);
    return () => window.clearTimeout(t);
  }, [touched]);

  useEffect(() => {
    if (voice !== "story") { setTyped(""); return; }
    if (prefersReducedMotion()) { setTyped(story); return; }
    let i = 0;
    const t = window.setInterval(() => {
      i++;
      setTyped(story.slice(0, i));
      if (i >= story.length) window.clearInterval(t);
    }, 26);
    return () => window.clearInterval(t);
  }, [voice]);

  const pick = (v: "bro" | "story") => { setTouched(true); setVoice(v); };
  const weak = "underline decoration-wavy decoration-[#ff1616] underline-offset-[5px]";

  return (
    <figure className="m-0">
      <div className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-6">
        <div className="rounded-[22px] bg-white overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[#f0f0f0]">
            <span className="text-[13px] text-[#9a9a9a]">Hollis &amp; Daughters / About</span>
            <div role="group" aria-label="Voice" className="flex gap-1 rounded-full bg-[#f6f6f6] p-1">
              {([["bro", "Brochure voice"], ["story", "Story voice"]] as const).map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={voice === k}
                  onClick={() => pick(k)}
                  className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors ${voice === k ? (k === "story" ? "bg-[#ff1616] text-white" : "bg-[#0d0d0d] text-white") : "text-[#6d6d6d] hover:text-black"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div aria-live="polite" className="px-5 md:px-7 py-7 min-h-[250px]">
            <p className={`leading-[1.4] transition-all duration-500 ${voice === "story" ? "text-[15px] text-[#9a9a9a] line-through decoration-[#ff1616] decoration-2" : "text-[22px] md:text-[24px] font-medium tracking-[-0.02em] text-black"}`}>
              <span className={voice === "bro" ? weak : ""}>Hollis &amp; Daughters</span> offers <span className={voice === "bro" ? weak : ""}>high-quality</span> bicycle repair <span className={voice === "bro" ? weak : ""}>solutions</span> for <span className={voice === "bro" ? weak : ""}>all of your cycling needs</span>.
            </p>
            {voice === "story" && (
              <p className="mt-4 text-[22px] md:text-[24px] font-medium leading-[1.35] tracking-[-0.02em] text-black">
                {typed}
                {typed.length < story.length && <span className="inline-block w-[2px] h-[1em] -mb-[3px] ml-0.5 bg-[#ff1616] motion-safe:animate-pulse" />}
              </p>
            )}
          </div>
          <div className="px-5 md:px-7 py-3.5 bg-[#fafafa] border-t border-[#f0f0f0] flex items-center justify-between text-[12px] text-[#9a9a9a]">
            <span>{voice === "bro" ? "4 phrases any rival could use" : "1 rule a customer can repeat"}</span>
            <span className={`w-2 h-2 rounded-full ${voice === "bro" ? "bg-[#d4d4d4]" : "bg-[#ff1616]"}`} />
          </div>
        </div>

        {/* What a customer says about the shop afterwards */}
        <div aria-hidden="true" className="mt-3 rounded-[22px] bg-[#0d0d0d] text-white p-5 md:p-6">
          <span className="block text-[12px] text-white/50">What a customer repeats</span>
          <div className="mt-3 flex items-end gap-3">
            <span className="w-8 h-8 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" /></svg>
            </span>
            <span key={voice} className={`rounded-[16px] rounded-bl-[5px] px-4 py-2.5 text-[15px] md:text-[16px] animate-[fadeUp_450ms_ease_both] ${voice === "story" ? "bg-[#ff1616] text-white font-medium" : "bg-white/10 text-white/60"}`}>
              {voice === "story" ? "“The three sisters. Nobody leaves with a squeaky chain.”" : "“Some bike place? Can't remember the name.”"}
            </span>
          </div>
        </div>
      </div>
      <p className={`${bodyClass} mt-4`}>A fictional shop, so no real customer gets used. Tap a voice.</p>
    </figure>
  );
};

// ── The message house: one promise, three proofs, values underneath.
const house = [
  { k: "roof", name: "One promise", what: "What you promise, to whom, in one breath.", ex: "For commuters who can't lose a week: your bike, back on the road fast, and explained to you." },
  { k: "p1", name: "Proof one", what: "Something a skeptic could check.", ex: "Same-week repairs, with the worn part shown to you before it's replaced." },
  { k: "p2", name: "Proof two", what: "A story that shows it happening.", ex: "The Monday-morning rescue, told the way the customer tells it." },
  { k: "p3", name: "Proof three", what: "A habit, not a claim.", ex: "Every repair ends with a test ride and a written note of what was done." },
  { k: "base", name: "Values you'll act on", what: "What you do when nobody's checking.", ex: "Nobody leaves with a squeaky chain. That includes the cheap fixes." },
];

const MessageHouse = () => {
  const [k, setK] = useState("roof");
  const cur = house.find((h) => h.k === k)!;
  const btn = (key: string, extra: string, label: string) => (
    <button
      type="button"
      aria-pressed={k === key}
      onClick={() => setK(key)}
      className={`w-full font-medium transition-all duration-300 ${extra} ${k === key ? "bg-[#ff1616] text-white" : "bg-white text-black hover:-translate-y-0.5"}`}
    >
      {label}
    </button>
  );
  return (
    <figure className="m-0">
      <div className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-6">
        <div role="group" aria-label="Message house" className="mx-auto max-w-[400px]">
          <button
            type="button"
            aria-pressed={k === "roof"}
            onClick={() => setK("roof")}
            className={`block w-full h-[120px] pt-[62px] text-[15px] font-semibold transition-colors duration-300 ${k === "roof" ? "bg-[#ff1616] text-white" : "bg-[#0d0d0d] text-white"}`}
            style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
          >
            One promise
          </button>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {btn("p1", "h-[110px] rounded-t-[10px] text-[14px]", "Proof one")}
            {btn("p2", "h-[110px] rounded-t-[10px] text-[14px]", "Proof two")}
            {btn("p3", "h-[110px] rounded-t-[10px] text-[14px]", "Proof three")}
          </div>
          <div className="mt-2">{btn("base", "h-[52px] rounded-[10px] text-[14px] ring-1 ring-[#e5e5e5]", "Values you will act on")}</div>
        </div>
        <div aria-live="polite" className="mt-5 rounded-[20px] bg-white p-5">
          <span className="block text-[12px] font-semibold text-[#ff1616]">{cur.name}</span>
          <span className="mt-1 block text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-black">{cur.what}</span>
          <span className="mt-3 block pt-3 border-t border-[#f0f0f0] text-[14px] text-[#6d6d6d]">Fictional example: {cur.ex}</span>
        </div>
      </div>
      <p className={`${bodyClass} mt-4`}>Fictional shop. Real principles.</p>
    </figure>
  );
};

// ── Story spine builder.
const biz = {
  bike: {
    n: "Hollis & Daughters Bike Repair",
    label: "Bike repair",
    want: "A commuter needs her bike working by Monday morning.",
    block: "The big chain store quoted two weeks and never said why.",
    turn: {
      rescue: "Hollis & Daughters looked at it that evening and found a bent hanger. Five minutes with a tool.",
      craft: "Hollis & Daughters set it on the stand, trued the wheel by ear and showed her the worn part before swapping it.",
      neighbor: "Someone at Hollis & Daughters asked about her route, then remembered it the next week.",
    },
    after: {
      rescue: "She rode in Monday. She told the whole office where she'd been.",
      craft: "She left knowing her bike better than when she arrived.",
      neighbor: "She stopped saying a bike shop. She started saying hers.",
    },
  },
  dental: {
    n: "Marlow Family Dental",
    label: "Family dentist",
    want: "A parent wants one checkup that doesn't end in tears.",
    block: "Last time the waiting room was loud and nobody explained anything.",
    turn: {
      rescue: "Marlow Family Dental found a quiet slot and walked the child through each tool first.",
      craft: "The hygienist at Marlow Family Dental let the child hold the little mirror and narrated every step.",
      neighbor: "The front desk at Marlow Family Dental knew both kids by name, and which one hated mint.",
    },
    after: {
      rescue: "The child asked when the next visit was.",
      craft: "Fear turned into curiosity. The parent noticed.",
      neighbor: "The parent told two other parents at school pickup.",
    },
  },
  bakery: {
    n: "Pine & Pan Bakery",
    label: "Bakery",
    want: "Someone needs a birthday cake by Saturday.",
    block: "Every shop wants a week's notice and a deposit.",
    turn: {
      rescue: "Pine & Pan Bakery had a spare sponge in the cooler and iced it that morning.",
      craft: "The baker at Pine & Pan Bakery asked who the cake was for, then piped their favorite flower.",
      neighbor: "Pine & Pan Bakery had decorated this family's cakes for years and kept a card with every name.",
    },
    after: {
      rescue: "The cake showed up on time and the candles got lit.",
      craft: "People photographed the cake before they cut it.",
      neighbor: "The card was in the box. Everyone noticed.",
    },
  },
} as const;
type Biz = keyof typeof biz;
type Angle = "rescue" | "craft" | "neighbor";

const SpineBuilder = () => {
  const [b, setB] = useState<Biz>("bike");
  const [a, setA] = useState<Angle>("rescue");
  const B = biz[b];
  const cards = [
    { k: "Wants", v: B.want },
    { k: "Blocked by", v: B.block },
    { k: "The turn", v: B.turn[a] },
    { k: "After", v: B.after[a] },
  ];
  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
        <div role="group" aria-label="Business" className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[13px] text-[#6d6d6d]">Business</span>
          {(Object.keys(biz) as Biz[]).map((k) => (
            <Choice key={k} on={b === k} onClick={() => setB(k)}>{biz[k].label}</Choice>
          ))}
        </div>
        <div role="group" aria-label="Angle" className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[13px] text-[#6d6d6d]">Angle</span>
          {(["rescue", "craft", "neighbor"] as Angle[]).map((k) => (
            <Choice key={k} on={a === k} onClick={() => setA(k)}>{k[0].toUpperCase() + k.slice(1)}</Choice>
          ))}
        </div>
      </div>

      <div aria-live="polite" className="mt-6 rounded-[32px] bg-white p-4 md:p-6">
        <span className="block px-1 text-[13px] text-[#9a9a9a]">{B.n} (fictional)</span>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
          {cards.map((c, i) => (
            <div
              key={`${b}-${a}-${c.k}`}
              className={`rounded-[20px] p-5 flex flex-col animate-[fadeUp_500ms_ease_both] ${i === 2 ? "bg-[#0d0d0d] text-white" : "bg-[#f6f6f6] text-black"}`}
              style={{ minHeight: 150 + i * 22, animationDelay: `${i * 90}ms` }}
            >
              <span className={`text-[12px] font-semibold ${i === 2 ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>{c.k}</span>
              <span className="mt-auto pt-4 text-[15px] md:text-[16px] leading-[1.45]">{c.v}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
};

// ── Same class listing, three doorways.
const routes = [
  {
    k: "company",
    btn: "I don't know anyone.",
    lab: "A way to belong",
    h: "A place at the table. Even if you come alone.",
    p: "You've saved the class page three times (and closed it three times). It isn't the clay that worries you. It's walking into a room where everyone else already knows everyone.",
    real: "So the workshop offers one shared worktable, a small group and a tutor who sits down beside you.",
    inv: "Come alone. You'll leave with a bowl and probably a new acquaintance.",
  },
  {
    k: "confidence",
    btn: "I'm not creative.",
    lab: "Permission to begin",
    h: "Your first bowl can look like your first bowl.",
    p: "Every photo online shows a flawless mug. Meanwhile you're wondering if there's a chair for someone who has never touched a wheel.",
    real: "A beginner session, materials included, with a tutor at your elbow. Nobody promises you'll be good by Thursday.",
    inv: "Start with a lump of clay and see what happens.",
  },
  {
    k: "offline",
    btn: "I need an evening offline.",
    lab: "A different kind of evening",
    h: "Make something that doesn't need a password.",
    p: "Another evening has vanished into a laptop and a phone, and you can't say what you did with it. Something you could hold would be nice.",
    real: "A guided clay session with the tools, the materials and a spot at the shared worktable.",
    inv: "Trade one screen for two hands.",
  },
];

const SteerStory = () => {
  const [k, setK] = useState("company");
  const r = routes.find((x) => x.k === k)!;
  return (
    <div className="mt-12 md:mt-16 rounded-[36px] bg-[#f6f6f6] p-4 md:p-6">
      {/* Who's reading */}
      <div role="group" aria-label="Choose their starting point" className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-[13px] text-[#6d6d6d]">Who's reading?</span>
        {routes.map((x) => <Choice key={x.k} on={k === x.k} onClick={() => setK(x.k)}>{x.btn}</Choice>)}
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-3 items-stretch">
        {/* The listing: only the headline changes */}
        <div aria-hidden="true" className="rounded-[26px] bg-white p-4 md:p-5 flex flex-col">
          <div className="relative rounded-[18px] h-[150px] overflow-hidden text-[#6b5641]" style={{ background: "linear-gradient(160deg, #efe6da, #d6c2aa)" }}>
            <svg viewBox="0 0 24 24" className="absolute left-4 bottom-4 w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9h14l-1.5 9a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7Z" /><path d="M8 9c0-2 1.8-3.5 4-3.5S16 7 16 9" /></svg>
            <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium text-black">Thursday class</span>
          </div>
          <p key={r.k} className="mt-4 text-[20px] md:text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-black animate-[fadeUp_450ms_ease_both]">{r.h}</p>
          <div className="mt-auto pt-4 grid grid-cols-3 gap-2 text-[12px]">
            {[["Class", "Pottery"], ["When", "Thursday"], ["Price", "Same"]].map(([a, b]) => (
              <span key={a} className="rounded-[10px] bg-[#f6f6f6] px-3 py-2"><span className="block text-[#9a9a9a]">{a}</span><span className="block font-medium text-black">{b}</span></span>
            ))}
          </div>
        </div>

        {/* The story behind that doorway */}
        <article aria-live="polite" className="rounded-[26px] bg-[#0d0d0d] text-white p-6 md:p-8 flex flex-col">
          <span className="self-start rounded-full bg-[#ff1616] px-3 py-1 text-[12px] font-semibold">{r.lab}</span>
          <p className="mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.85] text-[#bdbdbd]">{r.p}</p>
          <div className="mt-4 rounded-[16px] bg-white/[0.06] p-4">
            <span className="block text-[12px] text-white/50">Give the feeling something real</span>
            <span className="mt-1 block text-[15px] leading-[1.6] text-white">{r.real}</span>
          </div>
          <p className="mt-auto pt-5 text-[18px] md:text-[20px] font-medium tracking-[-0.02em] text-white">{r.inv}</p>
        </article>
      </div>

      <div className="mt-4 px-2 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-3">
        <p className={bodyClass}>Illustrative story, not client work or performance evidence.</p>
        <p className={bodyClass}>Same class, same price, same Thursday. Only the doorway moved, which is most of what creative storytelling does. (Those are three prewritten routes, by the way, so please don't mistake the buttons for an AI generator.)</p>
      </div>
    </div>
  );
};

// ── Seven rooms on one floor plan.
const rooms = [
  { k: "web", area: "lg:col-span-2 lg:row-span-2", name: "Website Content", nick: "The front hall", who: "A stranger deciding in seconds if you're for them.", job: "Say who it's for and what you promise before anything else.", ex: "Hollis & Daughters. Bikes fixed by people who ride them." },
  { k: "blog", area: "", name: "Blog Posts", nick: "The study", who: "Someone with one specific question.", job: "Answer it fully, then show how you think.", ex: "Why your chain skips under load, and what the fix costs." },
  { k: "social", area: "lg:row-span-2", name: "Social Media Content", nick: "The porch", who: "A passerby with two seconds.", job: "Be friendly and recognizable. One idea per post.", ex: "A rusted cruiser, before and after. Forty seconds, no music." },
  { k: "article", area: "", name: "Article Writing", nick: "The library", who: "A reader with time and a real problem.", job: "Go deep enough that they'd forward it.", ex: "What three sisters learned running a repair stand through four winters." },
  { k: "guest", area: "", name: "Guest Posts", nick: "Somebody else's living room", who: "An audience that doesn't know you yet.", job: "Give them something useful. Keep the pitch light.", ex: "A column for a local cycling club on commuting in the rain." },
  { k: "press", area: "", name: "Press Releases", nick: "The sign on the door", who: "A reporter, an editor, a partner.", job: "State the news, the date and one quotable line.", ex: "Hollis & Daughters opens a second repair stand at the farmers market." },
  { k: "prod", area: "lg:col-span-2", name: "Product Descriptions", nick: "The shelf by the till", who: "A buyer with a card in hand.", job: "Give a picture and a reason. Two sentences.", ex: "Tire levers. Firm enough for a stubborn tire, soft enough to spare the rim." },
];

const FloorPlan = () => {
  const [k, setK] = useState("web");
  const r = rooms.find((x) => x.k === k)!;
  return (
    <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-4 items-stretch">
      <div role="group" aria-label="Floor plan of seven content rooms" className="rounded-[32px] bg-[#f6f6f6] p-3 md:p-4 grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-2 lg:min-h-[420px]">
        {rooms.map((x) => (
          <button
            key={x.k}
            type="button"
            aria-pressed={k === x.k}
            onClick={() => setK(x.k)}
            className={`${x.area} relative min-h-[96px] rounded-[16px] p-4 text-left flex flex-col justify-end transition-all duration-300 ${k === x.k ? "bg-[#0d0d0d] text-white" : "bg-white text-black hover:-translate-y-0.5"}`}
          >
            <span className={`absolute left-4 top-0 w-8 h-1 rounded-b-full ${k === x.k ? "bg-[#ff1616]" : "bg-[#e5e5e5]"}`} />
            <span className={`block text-[12px] ${k === x.k ? "text-white/55" : "text-[#9a9a9a]"}`}>{x.nick}</span>
            <span className="block text-[15px] md:text-[16px] font-semibold leading-tight">{x.name}</span>
          </button>
        ))}
      </div>
      <div aria-live="polite" className="rounded-[32px] bg-white ring-1 ring-[#ececec] p-6 md:p-7 flex flex-col">
        <span className="text-[13px] font-semibold text-[#ff1616]">{r.nick}</span>
        <span className="mt-1 text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-black">{r.name}</span>
        <div className="mt-5 space-y-3 text-[15px] leading-[1.6]">
          <p className="m-0"><b className="block text-[12px] text-[#9a9a9a] font-medium">Who walks in</b><span className="text-black">{r.who}</span></p>
          <p className="m-0"><b className="block text-[12px] text-[#9a9a9a] font-medium">The job</b><span className="text-black">{r.job}</span></p>
        </div>
        <p className="mt-auto pt-5 border-t border-[#f0f0f0] text-[14px] text-[#6d6d6d]">Fictional example: {r.ex}</p>
      </div>
    </div>
  );
};

// ── Red pen: four weak phrases to swap.
const weakPhrases = [
  { from: "premium", to: "nylon" },
  { from: "high-quality materials", to: "a firm nylon that spares your rim" },
  { from: "perfect for all cyclists", to: "built for the roadside flat, two fit in a jersey pocket" },
  { from: "Order now for a great ride.", to: "Keep the walk home short." },
];

const RedPen = () => {
  const [fixed, setFixed] = useState<boolean[]>(weakPhrases.map(() => false));
  const n = fixed.filter(Boolean).length;
  const W = ({ i }: { i: number }) => (
    <button
      type="button"
      onClick={() => setFixed((f) => f.map((v, j) => (j === i ? !v : v)))}
      className={`rounded-[6px] px-1.5 transition-colors duration-300 ${fixed[i] ? "bg-[#0d0d0d] text-white" : "bg-[#fff1f1] text-black underline decoration-wavy decoration-[#ff1616] underline-offset-[6px] hover:bg-[#ffe0e0]"}`}
    >
      {fixed[i] ? weakPhrases[i].to : weakPhrases[i].from}
    </button>
  );
  return (
    <div className="mt-12 md:mt-16 rounded-[32px] bg-white p-5 md:p-8">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#f0f0f0] text-[13px]">
        <span className="text-[#9a9a9a]">Product page draft / Tire levers</span>
        <span aria-live="polite" className={`rounded-full px-3 py-1 font-medium ${n === weakPhrases.length ? "bg-[#0d0d0d] text-white" : "bg-[#f6f6f6] text-black"}`}>
          {n} of {weakPhrases.length} fixed{n === weakPhrases.length ? ". Same product. Now it sounds like a shop." : ""}
        </span>
      </div>
      <p className="mt-5 text-[22px] md:text-[28px] leading-[1.9] tracking-[-0.01em] text-black">
        These <W i={0} /> tire levers are made with <W i={1} /> and are <W i={2} />. <W i={3} />
      </p>
    </div>
  );
};

// ── A search answer page, top to bottom, written for the bike question.
const SearchPage = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  const show = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(8px)",
    transition: `opacity 500ms ease ${200 + i * 160}ms, transform 700ms ${ease} ${200 + i * 160}ms`,
  });
  const Row = ({ i, label, note, children }: { i: number; label: string; note: string; children: ReactNode }) => (
    <div className="relative grid grid-cols-[86px_1fr] gap-4 py-4 border-t border-[#f0f0f0] first:border-t-0" style={show(i)}>
      <span className="pt-0.5">
        <span className={`block text-[12px] font-semibold ${i === 0 ? "text-[#ff1616]" : "text-black"}`}>{label}</span>
        <span className="block text-[11px] text-[#9a9a9a]">{note}</span>
      </span>
      <div>{children}</div>
    </div>
  );
  return (
    <figure className="m-0">
      <div ref={ref} role="img" aria-label="A search for why a bike chain skips, and the answer page built in four parts: the answer first, then proof, then a story, then one next step." className="rounded-[28px] bg-white overflow-hidden shadow-[0_40px_80px_-50px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3 bg-[#0d0d0d] px-4 py-3">
          <span className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ff1616]" /><span className="w-2 h-2 rounded-full bg-white/25" /><span className="w-2 h-2 rounded-full bg-white/25" /></span>
          <span className="flex-1 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] text-white">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>
            why does my bike chain skip?
          </span>
        </div>
        <div className="px-5 md:px-6 pt-4 pb-2">
          <span className="block text-[11px] text-[#9a9a9a]">hollisanddaughters.com / chain-skipping</span>
          <Row i={0} label="Answer" note="no throat clearing">
            <p className="m-0 text-[15px] md:text-[16px] font-semibold leading-[1.4] text-black">Usually a worn chain. It stretches, stops sitting in the teeth and jumps under load.</p>
          </Row>
          <Row i={1} label="Proof" note="show your work">
            <div className="flex items-center gap-3">
              <span className="rounded-[8px] bg-[#f6f6f6] px-2.5 py-1.5 font-mono text-[12px] text-black">wear 0.75%</span>
              <span className="text-[13px] leading-[1.4] text-[#6d6d6d]">Past this, a chain checker says replace.</span>
            </div>
          </Row>
          <Row i={2} label="Story" note="where we come in">
            <p className="m-0 text-[13px] md:text-[14px] leading-[1.5] text-[#6d6d6d]">A commuter came in with this exact skip on a Friday. New chain, test ride, back on the road by Monday.</p>
          </Row>
          <Row i={3} label="Next step" note="don't hide it">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff1616] px-4 py-2 text-[13px] font-semibold text-white">Book a chain check →</span>
          </Row>
        </div>
      </div>
      <p className={`${bodyClass} mt-4`}>The anatomy of a page that answers a question. Illustrative.</p>
    </figure>
  );
};

// ── Four-week campaign board for the bakery.
const CampaignBoard = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  const weeks = [
    { w: "Week 1", beat: "Tease", piece: "Teaser clip" },
    { w: "Week 2", beat: "Tell", piece: "Long telling" },
    { w: "Week 3", beat: "Prove", piece: "Customer proof" },
    { w: "Week 4", beat: "Invite", piece: "Invitation" },
  ];
  return (
    <figure className="m-0">
      <div ref={ref} role="img" aria-label="One story across four weeks for a fictional bakery: tease, tell, prove, invite, each with the piece that belongs to it." className="rounded-[28px] bg-white ring-1 ring-[#ececec] p-4 md:p-5">
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-semibold text-black">Pine &amp; Pan · Saturday cakes</span>
          <span className="text-[#9a9a9a]">4 weeks</span>
        </div>
        <div className="mt-4 h-[230px] grid grid-cols-4 gap-2 items-end">
          {weeks.map((w, i) => (
            <div key={w.w} className="h-full flex flex-col justify-end">
              <span className={`mb-2 text-[14px] md:text-[15px] font-semibold ${i === 3 ? "text-[#ff1616]" : "text-black"}`} style={{ opacity: visible ? 1 : 0, transition: `opacity 500ms ease ${400 + i * 150}ms` }}>{w.beat}</span>
              <div
                className={`rounded-t-[14px] p-2.5 flex flex-col justify-end ${i === 3 ? "bg-[#ff1616] text-white" : i === 2 ? "bg-[#0d0d0d] text-white" : "bg-[#f3f3f3] text-black"}`}
                style={{ height: visible ? `${35 + i * 20}%` : "0%", transition: `height 900ms ${ease} ${i * 150}ms` }}
              >
                <span className="text-[11px] md:text-[12px] leading-tight">{w.piece}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[2px] bg-[#0d0d0d]" />
        <div className="mt-2 grid grid-cols-4 gap-2 text-[12px] text-[#9a9a9a]">
          {weeks.map((w) => <span key={w.w}>{w.w}</span>)}
        </div>
        <p className="mt-4 rounded-[12px] bg-[#f6f6f6] px-4 py-2.5 text-[13px] text-black">Start on the last day: what people believe by then.</p>
      </div>
      <p className={`${bodyClass} mt-4`}>One story across four weeks, for a fictional bakery. Illustrative.</p>
    </figure>
  );
};

// ── Quiz.
const quiz: [string, [string, "A" | "B" | "C" | "D"][]][] = [
  ["A new customer asks what you do. Your team says...", [["Something different every time.", "B"], ["A long list of everything.", "A"], ["A solid line, but customers shrug.", "C"], ["We mostly wait for people to ask.", "D"]]],
  ["Your last three posts were about...", [["Whatever was handy that week.", "A"], ["Three different voices. Looks like three companies.", "B"], ["Big claims with nothing behind them.", "C"], ["Good stuff almost nobody saw.", "D"]]],
  ["Your best customer story is...", [["Only in the founder's head.", "A"], ["Told differently by everyone on the team.", "B"], ["Never written down with real details.", "C"], ["Only told to people who already buy.", "D"]]],
  ["What bugs you most about your website?", [["It says everything and nothing.", "A"], ["It feels like a different company than your social.", "B"], ["There's no proof anywhere.", "C"], ["Hardly anyone visits.", "D"]]],
];
const verdict = {
  A: ["Your promise is fuzzy.", "People can't repeat what they can't summarize. Start with the message house: one promise, three proofs.", "/brand-strategy", "Brand strategy"],
  B: ["Your voice splits.", "Everyone writes in their own accent. A voice sheet with before and after lines fixes that fast.", "/branding-agency", "Branding agency"],
  C: ["Your claims float.", "You say the right things, and nothing shows them. Write down two or three real moments, with details.", "/content-marketing", "Content marketing"],
  D: ["Your story has no rooms.", "The story exists, and nobody's walking in. Pick two rooms to build and keep them lit.", "/seo-services", "SEO services"],
} as const;

const LeakQuiz = ({ onTally }: { onTally?: (t: Record<"A" | "B" | "C" | "D", number>, done: boolean) => void }) => {
  const [qi, setQi] = useState(0);
  const [tally, setTally] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const done = qi >= quiz.length;
  const best = (Object.keys(tally) as (keyof typeof tally)[]).reduce((m, k) => (tally[k] > tally[m] ? k : m), "A" as keyof typeof tally);
  useEffect(() => { onTally?.(tally, done); }, [tally, done, onTally]);
  return (
    <div aria-live="polite" className="rounded-[28px] bg-white text-black p-6 md:p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
      <div className="flex gap-1.5">
        {quiz.map((_, i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i < qi || done ? "bg-[#ff1616]" : i === qi ? "bg-[#0d0d0d]" : "bg-[#ececec]"}`} />)}
      </div>
      {!done ? (
        <>
          <p className="mt-6 text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-0.02em]">{quiz[qi][0]}</p>
          <div className="mt-5 grid gap-2">
            {quiz[qi][1].map(([t, k]) => (
              <button
                key={t}
                type="button"
                onClick={() => { setTally((x) => ({ ...x, [k]: x[k] + 1 })); setQi((q) => q + 1); }}
                className="text-left rounded-[14px] bg-[#f6f6f6] px-5 py-3.5 text-[15px] md:text-[16px] transition-all duration-200 hover:bg-[#0d0d0d] hover:text-white hover:translate-x-1"
              >
                {t}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-6">
          <p className="text-[28px] md:text-[34px] font-semibold tracking-[-0.03em] text-[#ff1616]">{verdict[best][0]}</p>
          <p className={`${bodyClass} mt-3`}>{verdict[best][1]}</p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <Link to={verdict[best][2]} className={`${inlineLink} text-[15px]`}>{verdict[best][3]} at Perfect Pixel Pro</Link>
            <button type="button" onClick={() => { setQi(0); setTally({ A: 0, B: 0, C: 0, D: 0 }); }} className="rounded-full bg-[#0d0d0d] px-5 py-2.5 text-[14px] font-medium text-white">Take it again</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Heading and the four possible leaks on the left, the quiz on the right. The leading leak lights up as you answer.
const QuizBlock = () => {
  const [t, setT] = useState<Record<"A" | "B" | "C" | "D", number>>({ A: 0, B: 0, C: 0, D: 0 });
  const [done, setDone] = useState(false);
  const onTally = useCallback((x: Record<"A" | "B" | "C" | "D", number>, d: boolean) => { setT(x); setDone(d); }, []);
  const total = t.A + t.B + t.C + t.D;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <Reveal>
        <h2 id="quiz-heading" className={`${h2Class} !text-white`}>
          <SplitHeading line="Where does your" italic="story" rest="leak?" dark />
        </h2>
        <p className="mt-8 text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#bdbdbd]">Four questions, no email, nobody keeping score. Answer with whatever's closest to your actual week.</p>
        <ul aria-hidden="true" className="mt-8 list-none m-0 p-0 space-y-2">
          {(["A", "B", "C", "D"] as const).map((k) => {
            const share = total ? t[k] / total : 0;
            return (
              <li key={k} className="rounded-[16px] bg-white/[0.06] px-4 py-3">
                <div className="flex items-center justify-between gap-3 text-[14px]">
                  <span className={share > 0 ? "text-white" : "text-white/50"}>{verdict[k][0]}</span>
                  <span className="font-mono text-[12px] text-white/40">{t[k]}</span>
                </div>
                <span className="mt-2 block h-1 rounded-full bg-white/10 overflow-hidden">
                  <span className="block h-full rounded-full bg-[#ff1616] transition-all duration-500" style={{ width: `${share * 100}%` }} />
                </span>
              </li>
            );
          })}
        </ul>
        {done && <p className="mt-4 text-[13px] text-white/50">Your answers, tallied. Nothing is saved.</p>}
      </Reveal>
      <Reveal delay={120}>
        <LeakQuiz onTally={onTally} />
      </Reveal>
    </div>
  );
};

// ── Formats and the brief.
const formats = [
  { h: "Make the offer clear.", fn: "Brand Copywriting / Website Content / Product Descriptions", p: "Brand Copywriting, Website Content and Product Descriptions handle this one. Tell a stranger who it's for and what changes, then hand over the single detail they'd otherwise email you about.", val: "Make the offer clear: Brand Copywriting, Website Content, Product Descriptions" },
  { h: "Be worth following.", fn: "Social Media Content / Creative Campaigns", p: "Social Media Content and Creative Campaigns handle this one. People follow a point of view, not a posting schedule, and our creative strategy is mostly the hunt for fresh angles that still sound like you.", val: "Be worth following: Social Media Content, Creative Campaigns" },
  { h: "Answer something properly.", fn: "Blog Posts / Article Writing / SEO Content", p: "Blog Posts, Article Writing and SEO Content live here. Bring real knowledge and answer the question the searcher typed, however long or short that turns out to be.", val: "Answer something properly: Blog Posts, Article Writing, SEO Content" },
  { h: "Join a bigger conversation.", fn: "Guest Posts / Press Releases", p: "Guest Posts and Press Releases belong here. We write the material (an editor decides whether it runs, which is the part nobody controls).", val: "Join a bigger conversation: Guest Posts, Press Releases" },
];
const fields = [
  { k: "person", n: "The person", q: "Who needs to hear this?", ph: "Be more specific than everyone.", out: "For", empty: "A person, not a demographic.", head: "WHO WE ARE SPEAKING TO" },
  { k: "tension", n: "Their situation", q: "What's difficult for them?", ph: "A question, hesitation or unmet need.", out: "What they're facing", empty: "The part they want to change.", head: "WHAT THEY ARE FACING" },
  { k: "role", n: "Your part", q: "What can you genuinely change?", ph: "What you do, not what you wish you could claim.", out: "The role your brand can play", empty: "A useful, honest contribution.", head: "THE ROLE THE BRAND CAN PLAY" },
  { k: "proof", n: "The evidence", q: "What gives them reason to believe?", ph: "A demonstration, verified detail or permitted customer story.", out: "Reason to believe", empty: "Something you can substantiate.", head: "REASON TO BELIEVE" },
] as const;
type FieldKey = (typeof fields)[number]["k"];

const BriefBuilder = () => {
  const [picked, setPicked] = useState<string[]>([]);
  const [vals, setVals] = useState<Record<FieldKey, string>>({ person: "", tension: "", role: "", proof: "" });
  const [status, setStatus] = useState("");
  const filled = fields.filter((f) => vals[f.k].trim()).length;
  const toggle = (v: string) => { setStatus(""); setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v])); };

  const download = () => {
    const parts = ["PERFECT PIXEL PRO | STORY STARTER", "Working notes, not a finished brand story.\n"];
    fields.forEach((f) => parts.push(`${f.head}\n${vals[f.k].trim() || "[To decide]"}`));
    parts.push(`WHERE THE STORY GOES\n${picked.join("\n") || "[To decide]"}`);
    parts.push("NEXT CONVERSATION\nVerify the evidence, agree the desired reader action and confirm the scope.\nNo information was sent to Perfect Pixel Pro by this download.");
    const blob = new Blob([parts.join("\n\n") + "\n"], { type: "text/plain;charset=utf-8" });
    const u = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = u;
    a.download = "my-brand-story-brief.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(u), 1000);
    setStatus("Your brief is ready to save. Nothing was sent.");
  };

  return (
    <>
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {formats.map((f) => {
          const on = picked.includes(f.val);
          return (
            <button
              key={f.h}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(f.val)}
              className={`text-left rounded-[28px] p-6 md:p-7 flex flex-col transition-all duration-300 ${on ? "bg-[#0d0d0d] text-white" : "bg-white text-black hover:-translate-y-0.5"}`}
            >
              <span className="text-[22px] md:text-[26px] font-semibold tracking-[-0.03em]">{f.h}</span>
              <span className={`mt-2 text-[12px] font-medium ${on ? "text-[#ff1616]" : "text-[#ff1616]"}`}>{f.fn}</span>
              <span className={`mt-3 text-[15px] leading-[1.75] ${on ? "text-[#bdbdbd]" : "text-[#555]"}`}>{f.p}</span>
              <span className={`mt-5 self-start flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium ${on ? "bg-white text-black" : "bg-[#f6f6f6] text-black"}`}>
                <span className={`w-4 h-4 rounded-[4px] flex items-center justify-center ${on ? "bg-[#ff1616] text-white" : "ring-1 ring-[#bdbdbd]"}`}>{on && "✓"}</span>
                {on ? "In my brief" : "Add to my brief"}
              </span>
            </button>
          );
        })}
      </div>
      <p className={`${bodyClass} mt-10 max-w-[900px]`}>Take the accounting firm again. Its Content Writing and Content Copywriting both need one reader in mind and one next step, and our Content Strategies add a channel, an owner and a review date so the Tuesday newsletter has somebody's name on it.</p>

      <Reveal className="mt-20 md:mt-28">
        <h2 className={h2Class}>
          <SplitHeading line="Before the perfect line," italic="four" rest="honest answers." />
        </h2>
        <p className={`${bodyClass} mt-6 max-w-[900px]`}>Skip the polish. Scribble down what you already know about your customer (a bakery owner might write that regulars always ask about Saturday cakes) and mark the gaps, which we would rather find early.</p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
        <div>
          {fields.map((f) => (
            <label key={f.k} htmlFor={`b-${f.k}`} className="block mb-5">
              <span className="block text-[12px] font-semibold text-[#ff1616]">{f.n}</span>
              <span className="block text-[18px] font-medium text-black">{f.q}</span>
              <textarea
                id={`b-${f.k}`}
                maxLength={220}
                rows={3}
                placeholder={f.ph}
                value={vals[f.k]}
                onChange={(e) => { setStatus(""); setVals((v) => ({ ...v, [f.k]: e.target.value })); }}
                className="mt-2 block w-full rounded-[16px] bg-white ring-1 ring-[#e5e5e5] px-4 py-3 text-[15px] leading-[1.5] text-black resize-y focus:outline-none focus:ring-2 focus:ring-[#0d0d0d]"
              />
            </label>
          ))}
          <p className={bodyClass}>Your notes stay in this page. Nothing is sent or saved. Leave confidential details out.</p>
        </div>
        <aside aria-labelledby="rc-t" className="lg:sticky lg:top-24 rounded-[28px] bg-white ring-1 ring-[#ececec] p-6 md:p-7">
          <div className="flex items-baseline justify-between gap-3 pb-4 border-b border-[#f0f0f0]">
            <h3 id="rc-t" className="text-[20px] md:text-[22px] font-semibold tracking-[-0.02em] text-black">Your story, before the story.</h3>
            <span className="font-mono text-[13px] text-[#ff1616]">{filled} / 4</span>
          </div>
          <dl className="mt-2">
            {fields.map((f) => (
              <div key={f.k} className="py-2.5">
                <dt className="text-[12px] text-[#9a9a9a]">{f.out}</dt>
                <dd className={`m-0 mt-0.5 text-[15px] leading-[1.5] break-words ${vals[f.k].trim() ? "text-black" : "text-[#bdbdbd]"}`}>{vals[f.k].trim() || f.empty}</dd>
              </div>
            ))}
            <div className="py-2.5">
              <dt className="text-[12px] text-[#9a9a9a]">Where the story goes</dt>
              <dd className={`m-0 mt-0.5 text-[15px] leading-[1.5] whitespace-pre-line ${picked.length ? "text-black" : "text-[#bdbdbd]"}`}>{picked.length ? picked.join("\n") : "Choose a job for your content above."}</dd>
            </div>
          </dl>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button type="button" onClick={download} className="rounded-full bg-[#0d0d0d] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#ff1616]">Download my brief</button>
            <button type="button" onClick={() => { setVals({ person: "", tension: "", role: "", proof: "" }); setPicked([]); setStatus(""); }} className={`${inlineLink} text-[14px]`}>Reset</button>
          </div>
          <p role="status" aria-live="polite" className="mt-2 min-h-[1.2em] text-[13px] text-[#16a34a]">{status}</p>
          <p className={`${bodyClass} mt-1`}>Your notes, arranged as a starting brief. Not generated copy. Bring it to a conversation with us.</p>
        </aside>
      </div>
    </>
  );
};

const fitList = [
  "A one-page story brief in plain language.",
  "A message house, built with you.",
  "A voice sheet with real before and after lines.",
  "First drafts for the two rooms you pick.",
  "A simple calendar you can actually keep.",
];

const BrandStorytelling = () => {
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
                <HeroTitleLines line="Brand Storytelling" italic="gives" rest="people something to repeat about you." compact />
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[580px]`}>
                Try this. Ask ten of your customers what you do, and write the answers on a napkin. Ten different answers? Ten shrugs? <span className="whitespace-nowrap">Brand Storytelling</span> fixes that. We hunt for the one true story about your business, then spread it across your website, your posts and your press.
              </p>
              <p className={`${bodyClass} mt-4 max-w-[580px]`}>
                Perfect Pixel Pro is a brand design and marketing agency. Our writers and designers work on the same brand together, and yes, they argue. The brand usually wins.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <VoiceEditor />
            </Reveal>
          </div>
        </section>

        {/* ── THE IDEA ── */}
        <section aria-labelledby="idea-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <h2 id="idea-heading" className={h2Class}>
                <SplitHeading line="Brand Storytelling is whatever people repeat" italic="once" rest="you've left the room." />
              </h2>
              <p className={`${bodyClass} mt-8`}>Nobody quotes a mission statement at dinner. What gets repeated is the story about the shop that stayed open an extra hour (a guy had a race Saturday and a flat tire), or the founder who answered a stranger's email at 9 p.m. with an actual answer, not a template.</p>
              <p className={`${bodyClass} mt-4`}>What we're after is something short and true, the kind of thing a customer can repeat while carrying groceries. <span className="whitespace-nowrap">Brand Storytelling</span> is mostly the job of picking which of your moments gets to be that thing, and then pointing every page you publish at it.</p>
            </Reveal>
            <Reveal delay={120}>
              <MessageHouse />
            </Reveal>
          </div>
          <Reveal className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <p className={bodyClass}>Picking has its own name and it comes first: Brand Messaging &amp; Strategy, which is really three questions in a trench coat. Who's listening? What do you promise them? What proves it? Our <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> team draws the answers as a house (poke at the one above, it won't mind).</p>
            <p className={bodyClass}>Skip that step and your team improvises. The website promises speed, the newsletter promises care, the sales deck promises a discount, and the customer, reasonably, promises nothing. Three promises can't be repeated by anyone.</p>
          </Reveal>
          <TestLine>Time yourself saying your promise. Longer than one breath? Cut it.</TestLine>
        </section>

        {/* ── THE SPINE ── */}
        <section aria-labelledby="spine-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
              <h2 id="spine-heading" className={h2Class}>
                <SplitHeading line="Try it. Build a story spine" italic="in" rest="two taps." />
              </h2>
              <p className={bodyClass}>Stories run on one spine. Somebody wants a thing. Something's in the way. Then a turn. Then life looks different. Pick a fictional business and an angle below, and watch four cards fill in.</p>
            </Reveal>
            <SpineBuilder />
            <Reveal className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
              <p className={bodyClass}>Right, that's bones. The flesh is creative storytelling: the smell of chain oil, the dog the regulars named Gerald (a retriever, apparently), the thing your founder mutters every Friday while locking up. Nobody can generate those for you. Somebody has to go and look.</p>
              <p className={bodyClass}>Flip between the angles and watch what shifts. The business stays put, and so does the customer. What changes is the leftover feeling: speed from rescue, care from craft, and from neighbor the oddly warm sense that somebody knew your name. Choose the feeling you want to leave behind, then keep delivering it.</p>
            </Reveal>
            <TestLine>Which angle would your best customer already hand you? Rescue, craft or neighbor?</TestLine>
          </div>
        </section>

        {/* ── STEER ── */}
        <section aria-labelledby="steer-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            <h2 id="steer-heading" className={h2Class}>
              <SplitHeading line="Same offer." italic="Different" rest="way in." />
            </h2>
            <p className={bodyClass}>Say there is a pottery workshop, invented for this page, with one Thursday class at one price. Three people look at the same listing. Marcus dreads walking into a room full of strangers. Ellie keeps saying she has no creative bone in her body. Joan only wants one evening without her phone buzzing in her pocket.</p>
          </Reveal>
          <SteerStory />
          <Reveal className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
            <h3 className="text-[28px] md:text-[38px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">The sentence is only half <span className="text-[#ff1616]">the promise.</span></h3>
            <div>
              <p className={bodyClass}>There's a catch, of course. If the pitch says come on your own, the studio had better have a chair waiting and somebody holding out an apron. Creative copywriting can't make up for a cold doorway, which is why Brand Messaging &amp; Strategy work at our shop starts with customer questions and facts you can stand behind, not with clever lines.</p>
              <p className={`${bodyClass} mt-4`}><Link to="/blog/why-choose-us" className={inlineLink}>How we connect strategy and creative</Link></p>
            </div>
          </Reveal>
        </section>

        {/* ── ROOMS ── */}
        <section aria-labelledby="rooms-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
              <h2 id="rooms-heading" className={h2Class}>
                <SplitHeading line="Content Marketing gives one story" italic="seven" rest="rooms." />
              </h2>
              <p className={bodyClass}>A story stuck on one page gets lonely. <Link to="/content-marketing" className={inlineLink}>Content Marketing</Link> moves it into more rooms, each for a different visitor on a different day. Click around the plan below.</p>
            </Reveal>
            <FloorPlan />
            <Reveal className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
              <p className={bodyClass}>In plain order. Website Content is the front hall. Blog Posts are the study, where the nerds go. Social Media Content is the porch. Article Writing is the library. Guest Posts are a stranger's living room, and you got invited. Press Releases are the sign on the door. Product Descriptions are the shelf by the till.</p>
              <div>
                <p className={bodyClass}>You don't need all seven by Friday, and honestly nobody does. Start with two rooms (the front hall and the study are a fine pair), keep them clean, and open a third once you've stopped worrying about those. Content Strategies are mostly a list of what you decided to skip.</p>
                <p className={`${bodyClass} mt-4`}>House rule: rooms can tell the story differently, but they can't tell different stories.</p>
              </div>
            </Reveal>
            <TestLine>Think of a stranger on your site late tonight. First room they see? Dusty or tidy?</TestLine>
          </div>
        </section>

        {/* ── COPY ── */}
        <section aria-labelledby="copy-heading" className={`${container} ${sectionY}`}>
          <Reveal>
            <h2 id="copy-heading" className={`${h2Class} max-w-[1100px]`}>
              <SplitHeading line="Brand Copywriting sets the voice." italic="Content" rest="Copywriting puts it to work." />
            </h2>
          </Reveal>
          <Reveal className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            <p className={bodyClass}>People swap these two constantly, so here's the split. Brand Copywriting is the voice you pick, whether that's a tagline, the About page or the hello on your voicemail. Content Copywriting is that voice at work, trying to get one thing done, like a Saturday tune-up booked. Content Writing is the longer, teaching kind of stuff, and it sits beside both.</p>
            <div>
              <p className={bodyClass}>Most copy fails because it plays safe. Premium. High-quality. Tailored to your needs. Paste any of those onto a rival's site and nobody blinks. Good creative copywriting is mostly crossing out the safe word and hunting for the true one.</p>
              <p className={`${bodyClass} mt-4`}>Have a go on the fictional bike shop. Four phrases in this draft are doing no work. Click each one and swap it.</p>
            </div>
          </Reveal>
          <div className="rounded-[36px] bg-[#f6f6f6] p-3 md:p-4 mt-12 md:mt-16 [&>div]:mt-0">
            <RedPen />
          </div>
          <Reveal className="mt-10">
            <p className={`${bodyClass} 2xl:whitespace-nowrap`}>Product Descriptions are maybe forty words each, parked beside the buy button. Oddly important words. Give the buyer a picture and a reason, preferably before they scroll away.</p>
          </Reveal>
          <TestLine>Take your best-selling page and hunt for words a rival could steal. Circle each one. Count them.</TestLine>
        </section>

        {/* ── SEARCH ── */}
        <section aria-labelledby="seo-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <Reveal>
                <h2 id="seo-heading" className={h2Class}>
                  <SplitHeading line="SEO Content answers first," italic="then" rest="tells the story." />
                </h2>
                <p className={`${bodyClass} mt-8`}>Picture a question typed at midnight. Your page gets one screen to answer it, maybe less. So the answer goes first. The proof comes next, then the story that makes it stick, then one next step.</p>
                <p className={`${bodyClass} mt-4`}>Call it manners. Make people dig for the answer and they leave, and the story never gets a turn.</p>
              </Reveal>
              <Reveal delay={120}>
                <SearchPage />
              </Reveal>
            </div>
            <Reveal className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
              <p className={bodyClass}>Guest Posts follow the same manners. Picture being invited to a stranger's dinner party and handing out flyers at the door. Don't. Bring wine. Press Releases need the same restraint, which means actual news, a date, and one quote a reporter can lift.</p>
              <p className={bodyClass}>Start a list of every question customers ask you on calls. Each one is a page waiting to happen. Article Writing and Blog Posts are how most of them get written. Our <Link to="/seo-services" className={inlineLink}>SEO services</Link> team handles the research end, which is less glamorous and more useful.</p>
            </Reveal>
            <TestLine>Search for your best customer question yourself. Whose page shows up?</TestLine>
          </div>
        </section>

        {/* ── CAMPAIGN ── */}
        <section aria-labelledby="camp-heading" className={`${container} ${sectionY}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal delay={120} className="lg:order-2">
              <h2 id="camp-heading" className={h2Class}>
                <SplitHeading line="Creative Campaigns need" italic="a" rest="spine, not just a theme." />
              </h2>
              <p className={`${bodyClass} mt-8`}>A campaign is a story with a calendar. Without a spine it's four weeks of posts that happen to share a color. Good creative strategy starts on the last day. What should people believe by then? Work backward.</p>
              <p className={`${bodyClass} mt-4`}>Take Pine &amp; Pan, our fictional bakery, selling Saturday birthday cakes. Week one teases. Week two tells. Week three proves. Week four invites. Four beats, one story, and every piece belongs to one beat.</p>
            </Reveal>
            <Reveal className="lg:order-1">
              <CampaignBoard />
            </Reveal>
          </div>
          <Reveal className="mt-14 md:mt-20">
            <p className={`${bodyClass} 2xl:whitespace-nowrap`}>Then the pieces slot in. A teaser clip for <Link to="/social-media-marketing" className={inlineLink}>social media marketing</Link>. A longer telling as an article. Proof from a customer who'll go on record. An invitation by email.</p>
          </Reveal>
          <TestLine>Name the last day of your next campaign. What should people believe by then?</TestLine>
        </section>

        {/* ── QUIZ ── */}
        <section aria-labelledby="quiz-heading" className={`bg-[#0d0d0d] text-white ${sectionY}`}>
          <div className={container}>
            <QuizBlock />
          </div>
        </section>

        {/* ── GIVE THE STORY SOMEWHERE TO GO ── */}
        <section aria-labelledby="go-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
              <h2 id="go-heading" className={h2Class}>
                <SplitHeading line="What should the" italic="next" rest="piece do?" />
              </h2>
              <p className={bodyClass}>Picture a three-person accounting firm (fictional, like everything else here) whose website reads like a tax form. Which job would you hand the content first? Tick whatever fits and your picks land in the brief below.</p>
            </Reveal>
            <BriefBuilder />
          </div>
        </section>

        {/* ── FIT ── */}
        <section aria-labelledby="fit-heading" className={`${container} ${sectionY}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <h2 id="fit-heading" className={h2Class}>
                <SplitHeading line="Who it fits," italic="and" rest="what you get" />
              </h2>
              <p className={`${bodyClass} mt-8`}>You sell something good, and your words sell it short. The website sounds like everyone's website. Three different people write the posts, and you can tell.</p>
              <p className={`${bodyClass} mt-4`}>Slogan by Friday and that's it? Wrong agency. We spend the first part listening, because writing before listening is how you get a slogan nobody remembers. Here's what you'd get.</p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="list-none m-0 p-0 rounded-[32px] bg-[#f6f6f6] p-3 md:p-4 space-y-2">
                {fitList.map((f, i) => (
                  <li key={f} className={`flex items-center gap-4 rounded-[20px] px-5 py-4 ${i === 0 ? "bg-[#0d0d0d] text-white" : "bg-white text-black"}`}>
                    <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${i === 0 ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616]"}`}>
                      <svg viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5 9.5 3.5" /></svg>
                    </span>
                    <span className="text-[16px] md:text-[17px] font-medium leading-[1.4]">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <TestLine>Hand your story to someone who started Monday. Could they retell it by lunch?</TestLine>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Questions people" italic="ask" rest="first" />}
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Brand Storytelling that starts with" italic="one" rest="customer's sentence." plain compact />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Try this tonight. Message your best customer, ask why they picked you, and save their exact words, typos and all. That sentence is where <span className="whitespace-nowrap">Brand Storytelling</span> starts, and a story review is how we'd work with it. More reading is waiting on{" "}
                <Link to="/content-marketing" className={inlineLink}>content marketing</Link> and <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link>, or you can start a conversation with Perfect Pixel Pro.
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

export default BrandStorytelling;
