import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/LOGO.png";
import {
  container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Brand Identity & Design | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Brand Identity & Design that holds together wherever people meet you. Strategy, voice, visuals, guidelines and launch with Perfect Pixel Pro.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const ease = "cubic-bezier(.2,.7,.2,1)";

// The Perfect Pixel Pro logo (same file as the header). It is used as a mask so it can take
// any colour: black on light cards, red as an accent, white on dark ones.
const PPPMark = ({ className = "w-10", color = "#0d0d0d", style, stretch = false }: { className?: string; color?: string; style?: CSSProperties; stretch?: boolean }) => (
  <span
    aria-hidden="true"
    className={`inline-block shrink-0 ${stretch ? "" : "aspect-[196/179]"} ${className}`}
    style={{
      backgroundColor: color,
      WebkitMaskImage: `url(${logo})`,
      maskImage: `url(${logo})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: stretch ? "100% 100%" : "contain",
      maskSize: stretch ? "100% 100%" : "contain",
      ...style,
    }}
  />
);

const faqs: Faq[] = [
  { q: "What is Brand Identity & Design?", a: "Brand Identity & Design is a company's look, voice and manners, written down so they hold still. The dry cleaner with the mint-green door and the bell that sticks. Nobody planned the bell. People remember it." },
  { q: "What is visual identity?", a: "Visual identity is whatever you'd still recognize with the name blacked out. Red awning, checkered box, a cartoon chef with a mustache. Pizza place. Logo, colors, type, pictures and layout all chip in." },
  { q: "How to establish Brand Voice?", a: "To establish Brand Voice, pick three words you want and three you refuse. Then answer your angriest customer using only the first three. Save the reply. It becomes sample number one." },
  { q: "What are brand guidelines?", a: "Brand guidelines are a rulebook you can read before the kettle boils. A food bank volunteer with a box of flyers has three questions. Which logo? Which color? Which font?" },
  { q: "How to create brand guidelines?", a: "To create brand guidelines, finish the strategy first, then make one page. Tape it to a wall. Logo and its space. Colors. Fonts. Three lines in your voice. Hand it to a stranger and ask for a flyer. Wrong flyer? The page is wrong." },
  { q: "How to launch a new brand?", a: "To launch a new brand, get everything people touch ready first. Website, signatures, profiles, signs, one short story. Then reveal it over a few weeks, loved ones first. Taco truck regulars hear before the internet does." },
  { q: "What is a Brand Audit?", a: "A Brand Audit is every public thing a company has made, laid side by side until the mismatches show. A driving school's table holds five blues, and no two match." },
  { q: "What happens in Brand Discovery?", a: "Brand Discovery is the listening you do before design. Interviews. Competitor review. Customer talk. A tutoring center asks parents why they picked it. Same answer each time. Somebody answered the phone." },
];

const structuredData = [articleSchema("Brand Identity & Design", PAGE_DESCRIPTION), faqSchema(faqs)];

// "The test." line used at the end of most sections.
const TestLine = ({ children }: { children: ReactNode }) => (
  <Reveal className="mt-12 md:mt-16">
    <p className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-[22px] bg-white ring-1 ring-[#ececec] px-6 py-5 md:px-8 md:py-6 max-w-[920px]">
      <span className="self-start sm:self-auto shrink-0 rounded-full bg-[#ff1616] px-4 py-1.5 text-[13px] font-semibold text-white">The test.</span>
      <span className="text-[22px] md:text-[26px] italic leading-[1.25] text-black" style={serif}>{children}</span>
    </p>
  </Reveal>
);

const SectionHead = ({ id, heading, children }: { id: string; heading: ReactNode; children: ReactNode }) => (
  <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-20 items-end">
    <h2 id={id} className={h2Class}>{heading}</h2>
    <div className={`${bodyClass} space-y-5`}>{children}</div>
  </Reveal>
);

// ── Hero graphic: four places people meet one brand.
const encounters = [
  {
    where: "In the feed",
    note: "A point of view you notice.",
    surface: (
      <div className="h-full rounded-[18px] bg-[#0d0d0d] text-white p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-extrabold tracking-[-0.05em]">MEND.</span>
          <PPPMark className="w-8" color="#ff1616" />
        </div>
        <span className="text-[26px] italic leading-[1.02]" style={serif}>For things worth keeping.</span>
      </div>
    ),
  },
  {
    where: "On the website",
    note: "An offer you understand.",
    surface: (
      <div className="h-full rounded-[18px] bg-white ring-1 ring-[#e5e5e5] overflow-hidden flex flex-col">
        <div className="h-7 border-b border-[#ececec] flex items-center gap-1.5 px-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff1616]" />
          <span className="ml-2 h-2.5 w-20 rounded-full bg-[#f2f2f2]" />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-extrabold tracking-[-0.05em] text-black">MEND.</span>
            <PPPMark className="w-6" color="#0d0d0d" />
          </div>
          <span className="text-[22px] font-semibold leading-[1.05] tracking-[-0.03em] text-black">Tell us what needs fixing.</span>
          <span className="self-start rounded-full bg-[#ff1616] px-3 py-1.5 text-[11px] font-semibold text-white">Find your repair →</span>
        </div>
      </div>
    ),
  },
  {
    where: "In your hands",
    note: "Care you can see.",
    surface: (
      <div className="h-full rounded-[18px] bg-[#ff1616] p-5 flex items-center justify-center">
        <div className="w-[130px] rounded-[12px] bg-white px-4 pt-6 pb-4 rotate-[-6deg] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] relative">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff1616]" />
          <PPPMark className="w-9" color="#0d0d0d" />
          <span className="mt-3 block text-[20px] italic leading-[1] text-black" style={serif}>Back where it belongs.</span>
        </div>
      </div>
    ),
  },
  {
    where: "In a conversation",
    note: "The same character, in words.",
    surface: (
      <div className="h-full rounded-[18px] bg-[#f2f2f2] p-5 flex flex-col">
        <div className="flex items-center gap-2 pb-3 border-b border-[#dcdcdc]">
          <PPPMark className="w-5" color="#ff1616" />
          <span className="text-[11px] text-[#6d6d6d]">A note from MEND</span>
        </div>
        <span className="mt-4 text-[26px] italic leading-[1] text-black" style={serif}>It's ready.</span>
        <span className="mt-2 text-[12px] leading-[1.5] text-[#6d6d6d]">We've repaired the loose joint. Here's how to keep it in good shape.</span>
      </div>
    ),
  },
];

const EncounterMap = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  return (
    <figure className="m-0" aria-labelledby="encounter-caption">
      <div ref={ref} className="relative rounded-[32px] bg-[#f6f6f6] p-5 md:p-10">
        <svg aria-hidden="true" className="hidden lg:block absolute inset-x-10 top-1/2 -translate-y-1/2 w-[calc(100%-5rem)] h-[120px]" viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path
            d="M0 60C120 0 220 0 250 60S380 120 500 60 630 0 750 60 880 120 1000 60"
            fill="none"
            stroke="#ff1616"
            strokeOpacity=".35"
            strokeWidth="2"
            strokeDasharray="4 8"
            vectorEffect="non-scaling-stroke"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 900ms ease 900ms" }}
          />
        </svg>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {encounters.map((e, i) => (
            <div
              key={e.where}
              className={i % 2 === 0 ? "lg:-translate-y-3" : "lg:translate-y-3"}
              style={{ opacity: visible ? 1 : 0, transition: `opacity 700ms ease ${i * 180}ms` }}
            >
              <span className="block mb-3 text-[13px] font-medium text-[#ff1616]">{e.where}</span>
              <div aria-hidden="true" className="h-[230px] shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] rounded-[18px] transition-transform duration-500 hover:-translate-y-1">
                {e.surface}
              </div>
              <span className="block mt-3 text-[14px] text-[#6d6d6d]">{e.note}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption id="encounter-caption" className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-1 text-[13px] text-[#9a9a9a]">
        <span>MEND / Fictional repair studio. Original concept, not client work.</span>
        <span>Different encounters. Connected meaning.</span>
      </figcaption>
    </figure>
  );
};

// ── Anatomy: idea, look, voice, manners.
const anatomy = [
  {
    tag: "Idea",
    title: "Worth keeping.",
    body: "Why you do anything. Try it in two words.",
    art: <PPPMark className="w-24" color="#ff1616" />,
  },
  {
    tag: "Look",
    title: "A seam, a blue, a lime.",
    body: "Mark, color, type and space. What people see from across the street.",
    art: (
      <div className="flex items-end gap-2">
        <i className="block w-10 h-[70px] rounded-[8px] bg-[#3048d9]" />
        <i className="block w-10 h-[50px] rounded-[8px] bg-[#e0ecae]" />
        <i className="block w-10 h-[34px] rounded-[8px] bg-white ring-1 ring-[#e2e2e2]" />
        <span className="ml-2 text-[52px] leading-none text-black" style={serif}>Aa</span>
      </div>
    ),
  },
  {
    tag: "Voice",
    title: "Calm. Plain.",
    body: "How the idea sounds in a reply, a label or a booking page.",
    art: (
      <div className="relative rounded-[18px] rounded-bl-[4px] bg-[#0d0d0d] text-white px-4 py-3 max-w-[200px]">
        <span className="block text-[22px] italic leading-[1.05]" style={serif}>It's ready.</span>
        <span className="block mt-1 text-[12px] text-[#bdbdbd]">We fixed the loose joint.</span>
      </div>
    ),
  },
  {
    tag: "Manners",
    title: "Care you can see.",
    body: "What you do when nobody is watching. A note in the parcel. A reply within a day.",
    art: (
      <div className="w-[96px] rounded-[10px] bg-white ring-1 ring-[#e2e2e2] px-3 pt-5 pb-3 rotate-[-6deg] relative shadow-[0_16px_30px_-20px_rgba(0,0,0,0.4)]">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff1616]" />
        <span className="block h-1.5 rounded-full bg-[#e5e5e5]" />
        <span className="mt-2 block h-1.5 rounded-full bg-[#e5e5e5]" />
        <span className="mt-2 block h-1.5 w-2/3 rounded-full bg-[#e5e5e5]" />
      </div>
    ),
  },
];

// ── Discovery: a table of mismatched brand items.
const AuditTable = () => (
  <figure className="m-0">
    <div
      role="img"
      aria-label="A table covered in mismatched brand items: five different blues, three business cards in three fonts, a sticker and a note asking if there is a green one."
      className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-10 grid grid-cols-1 md:grid-cols-[0.9fr_1.2fr_0.9fr] gap-5 md:gap-6 items-center"
    >
      <div>
        <div className="grid grid-cols-3 gap-2 max-w-[230px]">
          {["#2a3cff", "#3a5bd9", "#1f3fbf", "#4a63e0", "#2f55c9"].map((c) => (
            <i key={c} className="block aspect-square rounded-[10px]" style={{ background: c }} />
          ))}
        </div>
        <p className="mt-3 text-[13px] italic text-[#6d6d6d]" style={serif}>five blues, zero decisions</p>
      </div>

      <div className="relative h-[220px]">
        <div className="absolute left-0 top-2 w-[78%] rounded-[12px] bg-white ring-1 ring-[#e2e2e2] px-5 py-4 rotate-[-5deg] shadow-[0_16px_30px_-22px_rgba(0,0,0,0.4)]">
          <span className="block text-[22px] font-extrabold tracking-[-0.03em] text-black">THE SHOP</span>
          <span className="block mt-1 text-[11px] text-[#9a9a9a]">555 0142 / hello@</span>
        </div>
        <div className="absolute right-0 top-[70px] w-[74%] rounded-[12px] bg-white ring-1 ring-[#e2e2e2] px-5 py-4 rotate-[4deg] shadow-[0_16px_30px_-22px_rgba(0,0,0,0.4)]">
          <span className="block text-[26px] italic text-black" style={{ fontFamily: "Georgia, serif" }}>The Shop</span>
          <span className="block mt-1 text-[11px] text-[#9a9a9a]" style={{ fontFamily: "Georgia, serif" }}>555 0142</span>
        </div>
        <div className="absolute left-[8%] bottom-0 w-[70%] rounded-[12px] bg-white ring-1 ring-[#e2e2e2] px-5 py-4 rotate-[-2deg] shadow-[0_16px_30px_-22px_rgba(0,0,0,0.4)]">
          <span className="block text-[20px] font-bold text-black" style={{ fontFamily: "'Courier New', monospace" }}>the shop</span>
          <span className="block mt-1 text-[11px] text-[#9a9a9a]" style={{ fontFamily: "'Courier New', monospace" }}>call anytime</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <span className="w-24 h-24 rounded-full bg-[#7fbf6a] flex items-center justify-center text-white text-[20px] font-bold rotate-[-8deg]" style={{ fontFamily: "'Comic Sans MS', cursive" }}>NEW!</span>
        <span className="rounded-[6px] bg-[#f6e58d] px-4 py-3 rotate-[4deg] text-[15px] italic leading-[1.2] text-black shadow-[0_12px_24px_-16px_rgba(0,0,0,0.4)]" style={{ fontFamily: "Georgia, serif" }}>
          wait, we have<br />a green one?
        </span>
      </div>
    </div>
    <p className={`${noteClass} mt-5`}>Illustrative table. Every item is made up.</p>
  </figure>
);

// ── Positioning sentence with highlighted parts.
const Sentence = ({ who, parts, dark = false }: { who: string; parts: (string | { pill: string })[]; dark?: boolean }) => (
  <div className={`rounded-[28px] p-7 md:p-10 ${dark ? "bg-[#0d0d0d] text-white" : "bg-[#f6f6f6] text-black"}`}>
    <span className={`text-[13px] font-medium ${dark ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>{who}</span>
    <p className="mt-3 text-[24px] md:text-[34px] leading-[1.5] tracking-[-0.02em] font-medium">
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <span key={i}>{p}</span>
        ) : (
          <span
            key={i}
            className={`rounded-full px-3 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] ${dark ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-white text-[#ff1616] ring-1 ring-[#ffd0d0]"}`}
          >
            {p.pill}
          </span>
        )
      )}
    </p>
  </div>
);

// ── Launch month: four weeks that fill as you scroll.
const weeks = [
  { week: "Week 1", title: "Tell your team.", body: "Staff hear it first. Somebody will get asked about it at the grocery store.", chips: ["Team brief", "Answer sheet"] },
  { week: "Week 2", title: "Website goes first.", body: "That's where everybody checks. The page should feel like the same company as the business card.", chips: ["Website", "Booking page"] },
  { week: "Week 3", title: "Small things, one by one.", body: "Email signatures. Profile photos. The sign over the door.", chips: ["Signatures", "Profiles", "Signs"] },
  { week: "Week 4", title: "First campaign.", body: "Now say it to everyone. It lands on a business that already looks the part.", chips: ["Campaign", "Press note"] },
];

const LaunchMonth = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  // The black card follows the cursor; with no hover it rests on Week 4.
  const [active, setActive] = useState(3);
  return (
    <div ref={ref} className="mt-16 md:mt-20">
      <div aria-hidden="true" className="hidden md:grid grid-cols-4 gap-2 mb-6">
        {weeks.map((w, i) => (
          <span key={w.week} className="h-1.5 rounded-full bg-[#ececec] overflow-hidden">
            <span
              className="block h-full bg-[#ff1616]"
              style={{ width: visible ? "100%" : "0%", transition: `width 600ms ${ease} ${300 + i * 350}ms` }}
            />
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" onMouseLeave={() => setActive(3)}>
        {weeks.map((w, i) => (
          <Reveal key={w.week} delay={i * 120}>
            <article
              onMouseEnter={() => setActive(i)}
              className={`h-full rounded-[24px] p-6 md:p-7 flex flex-col transition-all duration-500 ${active === i ? "bg-[#0d0d0d] text-white -translate-y-1 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.5)]" : "bg-[#f6f6f6] text-black"}`}
            >
              <span className={`self-start rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors duration-500 ${active === i ? "bg-[#ff1616] text-white" : "bg-white text-[#ff1616]"}`}>{w.week}</span>
              <h3 className="mt-6 text-[24px] md:text-[28px] font-semibold leading-[1.1] tracking-[-0.03em]">{w.title}</h3>
              <p className={`mt-3 text-[15px] leading-[1.7] font-light transition-colors duration-500 ${active === i ? "text-[#bdbdbd]" : "text-[#6d6d6d]"}`}>{w.body}</p>
              <div aria-hidden="true" className="mt-auto pt-6 flex flex-wrap gap-1.5">
                {w.chips.map((c) => (
                  <span key={c} className={`rounded-full px-3 py-1 text-[12px] transition-colors duration-500 ${active === i ? "bg-white/10 text-white" : "bg-white text-black"}`}>{c}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const BrandIdentityDesign = () => {
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
                <HeroTitleLines line="Brand Identity" italic="&" rest="Design" plainItalic />
              </h1>
              <p className="mt-6 md:mt-8 text-[24px] sm:text-[30px] md:text-[38px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
                Different places.{" "}
                <em className="italic font-normal" style={{ ...serif, fontSize: "1.1em" }}>Still</em>{" "}
                <span className="font-extrabold text-[#ff1616]" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                  unmistakably you.
                </span>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[780px]`}>
                A post someone saves. A website they return to. Your team, answering a hard question. Three moments. One business, if you do this right. We connect how you look, sound and act. Every encounter should give people a bit more of you.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                <PillLink to="/contact">Let's connect your brand</PillLink>
                <a href="#the-connections" className={`${inlineLink} text-[15px]`}>See what connects the dots</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-20 md:mt-28">
            <EncounterMap />
          </Reveal>
        </section>

        {/* ── THE VIEW FROM THE OTHER SIDE ── */}
        <section id="the-connections" aria-labelledby="reading-heading" className={`${container} pb-24 md:pb-36 scroll-mt-24`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="reading-heading" className={h2Class}>
                <SplitHeading line="Your customers never see" italic="the" rest="whole presentation." />
              </h2>
              <p className="mt-8 pl-5 border-l-2 border-[#ff1616] text-[20px] md:text-[24px] italic leading-[1.35] text-black max-w-[420px]" style={serif}>
                They meet you mid-day, mid-scroll, mid-everything.
              </p>
            </Reveal>
            <Reveal delay={120} className={`${bodyClass} space-y-6`}>
              <p>Someone hears your name from a colleague. Weeks later they notice a post. Then they visit your website. They won't see those pieces in the order you planned. So the identity has to work wherever they start.</p>
              <p>Recognition is part of it. So is meaning. Words, design and interactions hint at what kind of business you are. And what dealing with you feels like. A thoughtful campaign followed by a careless reply? Matching colors won't fix that.</p>
              <p>
                Our <Link to="/branding-agency" className={inlineLink}>Branding Services</Link> start with the impression you want to earn. Then we connect the parts people actually meet. Not one separate design job after another.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── KEEP THE CHARACTER ── */}
        <section aria-labelledby="meaning-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="meaning-heading" heading={<SplitHeading line="Keep the character." italic="Change" rest="the format." />}>
              <p>In our fictional MEND example, the idea is care for things worth keeping. It gives the identity a reason to look and sound the way it does.</p>
            </SectionHead>

            <div className="mt-20 md:mt-28">
              <SectionHead id="anatomy-heading" heading={<SplitHeading line="Brand Identity & Design is four" italic="things" rest="that agree." />}>
                <p>A brand identity is the way a company looks, sounds and acts, written down so it stays put. The logo? One decision. The rest is the idea underneath, the look around it, the voice over it and the manners behind it.</p>
                <p>Take MEND. Idea: worth keeping. Look: a seam, a blue, a lime. Voice: calm and plain. Manners? Every repair comes home with a care note. Change one of those and the other three notice.</p>
              </SectionHead>
            </div>

            <div role="group" aria-label="Four parts of an identity, shown for MEND" className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {anatomy.map((a, i) => (
                <Reveal key={a.tag} delay={i * 120}>
                  <article className="group h-full rounded-[28px] bg-white p-6 md:p-7 flex flex-col min-h-[360px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                    <span className="self-start rounded-full bg-[#fff1f1] px-3.5 py-1 text-[12px] font-medium text-[#ff1616]">{a.tag}</span>
                    <div aria-hidden="true" className="flex-1 flex items-center justify-center py-8">{a.art}</div>
                    <h3 className="text-[24px] md:text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">{a.title}</h3>
                    <p className="mt-2 text-[14px] md:text-[15px] leading-[1.6] text-[#6d6d6d] font-light">{a.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-1 text-[13px] text-[#9a9a9a]">
              <span>MEND / Fictional repair studio. Original concept, not client work.</span>
              <span>Four parts. One character.</span>
            </div>
            <TestLine>Put your thumb over the logo. Still know whose it is?</TestLine>
          </div>
        </section>

        {/* ── BRAND DISCOVERY ── */}
        <section aria-labelledby="s1-h" className={`${container} ${sectionY}`}>
          <SectionHead id="s1-h" heading={<SplitHeading line="Lay it all" italic="on" rest="one table." />}>
            <p>Brand Discovery starts with a folding table. Everything with your name on it goes on top. Flyers, stickers, a screenshot of the website, the van if you own a van. Then you squint.</p>
            <p>A Brand Audit is that squint on paper. Green here, teal there, a font nobody picked on purpose. We also sit down with your best customer, your newest hire and whoever answers the phone. Three different companies usually show up. Somebody always asks, wait, we have a green one?</p>
          </SectionHead>
          <Reveal delay={120} className="mt-14 md:mt-20">
            <AuditTable />
          </Reveal>
          <TestLine>Could a stranger tell these came from one place? If not, that is the work.</TestLine>
        </section>

        {/* ── POSITIONING ── */}
        <section aria-labelledby="s2-h" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="s2-h" heading={<SplitHeading line="One sentence," italic="said" rest="out loud." />}>
              <p>Brand strategy and positioning is a single sentence you can say with no notes. If a competitor could sign it, it isn't done. Two audiences in it? Pick the one who pays first. The other follows.</p>
              <p>
                Our <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work lives here, before anybody opens a design file.
              </p>
            </SectionHead>
            <div className="mt-14 md:mt-20 space-y-4">
              <Reveal>
                <Sentence
                  who="MEND"
                  parts={["For ", { pill: "people with things worth keeping" }, ", we're the ", { pill: "repair studio" }, " that ", { pill: "hands them back better than they left" }, "."]}
                />
              </Reveal>
              <Reveal delay={120}>
                <Sentence
                  who="A bookkeeper"
                  dark
                  parts={["For ", { pill: "restaurant owners buried in receipts" }, ", we're the ", { pill: "bookkeepers" }, " who ", { pill: "answer on the first ring" }, "."]}
                />
              </Reveal>
            </div>
            <TestLine>Try saying it at a bus stop. If a stranger says huh, rewrite it.</TestLine>
          </div>
        </section>

        {/* ── STORY AND VOICE ── */}
        <section aria-labelledby="s3-h" className={`${container} ${sectionY}`}>
          <SectionHead id="s3-h" heading={<SplitHeading line="Same facts." italic="Three" rest="companies." />}>
            <p>Brand Story is what happened, and why anyone should care. Brand Messaging is three lines you'd want repeated over dinner. Brand Voice is how those lines sound. Take a late delivery.</p>
          </SectionHead>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
            {[
              { tag: "Formal", text: "We apologize for the delay. Your order will arrive on Friday.", box: "bg-white ring-1 ring-[#e2e2e2] rounded-[24px]", font: { fontFamily: "Georgia, serif" }, txt: "text-black text-[22px]" },
              { tag: "Warm", text: "Sorry, your box is running late. It's on a truck and should land Friday.", box: "bg-[#ff1616] text-white rounded-[28px] rounded-bl-[6px] md:mt-8", font: {}, txt: "text-white text-[22px] font-semibold tracking-[-0.02em]" },
              { tag: "Dry", text: "Your order is late. The truck knows. Friday.", box: "bg-[#0d0d0d] text-white rounded-[24px] md:-mt-2", font: { fontFamily: "'Courier New', monospace" }, txt: "text-white text-[20px]" },
            ].map((v, i) => (
              <Reveal key={v.tag} delay={i * 120}>
                <article className={`p-7 md:p-8 min-h-[200px] flex flex-col justify-between ${v.box}`}>
                  <span className={`self-start rounded-full px-3.5 py-1 text-[12px] font-medium ${i === 0 ? "bg-[#f6f6f6] text-black" : "bg-white/15 text-white"}`}>{v.tag}</span>
                  <p className={`mt-8 leading-[1.3] ${v.txt}`} style={v.font}>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black max-w-[620px]">Choose one. Then stay in it, even on a bad Tuesday.</p>
          </Reveal>
          <TestLine>Answer your angriest customer in your voice. Save the reply as sample number one.</TestLine>
        </section>

        {/* ── VISUAL IDENTITY ── */}
        <section aria-labelledby="s4-h" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <SectionHead id="s4-h" heading={<SplitHeading line="The part people" italic="notice" rest="first." />}>
              <p>You can pick out a shop you love from across the street. No sign needed. The awning. The window. How the door hangs. Visual identity is why.</p>
              <p>
                Logo Design covers one piece. Brand Design covers how the pieces behave together. Our <Link to="/logo-design" className={inlineLink}>logo design</Link> team starts with the mark.
              </p>
            </SectionHead>
            <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-5">
              <Reveal>
                <article className="h-full rounded-[28px] bg-white p-6 md:p-7 flex flex-col gap-5">
                  <span className="self-start rounded-full bg-[#fff1f1] px-3.5 py-1 text-[12px] font-medium text-[#ff1616]">Own one color</span>
                  <div aria-hidden="true" className="grid grid-cols-[2.2fr_1fr_1fr] h-[150px] rounded-[18px] overflow-hidden">
                    <i className="block bg-[#ff1616]" /><i className="block bg-[#f2f2f2]" /><i className="block bg-[#0d0d0d]" />
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#6d6d6d] font-light">One color you own. Two helpers. That's the whole palette.</p>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="h-full rounded-[28px] bg-white p-6 md:p-7 flex flex-col gap-5">
                  <span className="self-start rounded-full bg-[#fff1f1] px-3.5 py-1 text-[12px] font-medium text-[#ff1616]">Two typefaces</span>
                  <div aria-hidden="true" className="h-[150px] flex flex-col justify-center gap-1">
                    <b className="text-[64px] leading-none font-normal italic text-black" style={serif}>Aa</b>
                    <span className="text-[22px] text-black">Aa body</span>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#6d6d6d] font-light">One for headlines. One for everything else. Never three.</p>
                </article>
              </Reveal>
              <Reveal delay={240}>
                <article className="h-full rounded-[28px] bg-white p-6 md:p-7 flex flex-col gap-5">
                  <span className="self-start rounded-full bg-[#fff1f1] px-3.5 py-1 text-[12px] font-medium text-[#ff1616]">Room around the mark</span>
                  <div className="h-[150px] flex items-center justify-center">
                    <div role="img" aria-label="A mark with equal clear space on every side" className="relative w-[150px] h-[150px] rounded-[14px] border border-dashed border-[#bdbdbd] flex items-center justify-center">
                      <span className="w-[72px] h-[72px] rounded-[12px] bg-[#0d0d0d] flex items-center justify-center">
                        <PPPMark className="w-11" color="#ff1616" />
                      </span>
                      {["top-2 left-1/2 -translate-x-1/2", "bottom-2 left-1/2 -translate-x-1/2", "left-2 top-1/2 -translate-y-1/2", "right-2 top-1/2 -translate-y-1/2"].map((pos) => (
                        <span key={pos} aria-hidden="true" className={`absolute ${pos} text-[11px] italic text-[#ff1616]`} style={serif}>x</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#6d6d6d] font-light">More room than feels polite.</p>
                </article>
              </Reveal>
            </div>
            <TestLine>Walk to the far side of the room and squint. Color and shape still there?</TestLine>
          </div>
        </section>

        {/* ── CONSISTENCY ── */}
        <section aria-labelledby="s5-h" className={`${container} ${sectionY}`}>
          <SectionHead id="s5-h" heading={<SplitHeading line="Consistent" italic="isn't" rest="identical." />}>
            <p>Consistency means a stranger can tell it's you. It doesn't mean every piece looks the same.</p>
            <p>A poster can shout. A receipt should whisper. The seam, the blue and the voice stay put. The size, the volume and the layout move.</p>
          </SectionHead>

          <Reveal className="mt-14 md:mt-20">
            <p className="flex items-center gap-3 text-[16px] font-semibold text-black">
              <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center text-[13px]">✓</span>What holds
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { cap: "Poster. Loud.", box: "bg-[#0d0d0d] text-white", art: <div className="flex items-center gap-4"><PPPMark className="w-14" color="#ff1616" /><span className="text-[30px] italic leading-[1]" style={serif}>For things worth keeping.</span></div> },
                { cap: "Button. Clear.", box: "bg-[#f6f6f6]", art: <div className="text-center"><div className="text-[15px] font-extrabold tracking-[-0.05em] text-black mb-3">MEND.</div><span className="rounded-full bg-[#ff1616] px-4 py-2 text-[12px] font-semibold text-white">Find your repair →</span></div> },
                { cap: "Receipt. Quiet.", box: "bg-white ring-1 ring-[#e5e5e5]", art: <div className="flex items-center gap-3"><PPPMark className="w-7" color="#ff1616" /><span className="text-[13px] leading-[1.45] text-black" style={{ fontFamily: "'Courier New', monospace" }}>Thanks. It's ready.<br />Keep it dry.</span></div> },
              ].map((t) => (
                <div key={t.cap} className={`rounded-[24px] p-5 min-h-[200px] flex flex-col ${t.box}`}>
                  <div aria-hidden="true" className="flex-1 flex items-center justify-center">{t.art}</div>
                  <span className="mt-3 text-[13px] opacity-70">{t.cap}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="flex items-center gap-3 text-[16px] font-semibold text-black">
              <span aria-hidden="true" className="w-7 h-7 rounded-full bg-[#ff1616] text-white flex items-center justify-center text-[13px]">✕</span>What breaks
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { cap: "Stretched mark", art: <PPPMark className="w-[150px] h-[34px]" color="#0d0d0d" stretch /> },
                { cap: "A fourth color", art: <PPPMark className="w-16" color="#ff2d95" /> },
                { cap: "A third typeface", art: <span className="block rotate-[-4deg] text-[26px] font-bold text-black" style={{ fontFamily: "'Comic Sans MS', cursive" }}>Fixing stuff!!!</span> },
                {
                  cap: "No breathing room",
                  art: (
                    <div className="relative w-full h-[84px] rounded-[10px] bg-white ring-1 ring-[#e2e2e2] overflow-hidden">
                      <PPPMark className="absolute -left-2 -top-1 w-[70px]" color="#0d0d0d" />
                      <span className="absolute left-[54px] top-[24px] text-[11px] leading-[1.2] text-black">Repairs and also other things we do</span>
                    </div>
                  ),
                },
              ].map((t) => (
                <div key={t.cap} className="rounded-[24px] border-2 border-dashed border-[#ffb3b3] bg-[#fff8f8] p-5 min-h-[180px] flex flex-col">
                  <div aria-hidden="true" className="flex-1 flex items-center justify-center">{t.art}</div>
                  <span className="mt-3 text-[13px] text-[#ff1616]">{t.cap}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <TestLine>Line up three pieces from three places. Same character, different jobs?</TestLine>
        </section>

        {/* ── BRAND GUIDELINES ── */}
        <section aria-labelledby="s6-h" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={`${container} grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center`}>
            <Reveal className="space-y-6">
              <h2 id="s6-h" className={h2Class}>
                <SplitHeading line="One page is" italic="the" rest="rulebook." />
              </h2>
              <p className={bodyClass}>Brand guidelines are how ten people make one brand without phoning you. Forty pages nobody opens lose to one page somebody does.</p>
              <p className={bodyClass}>Logo, with its breathing room. Colors, with codes. Fonts, with jobs. Three sentences in your voice. A do and a don't for each. Reread it the week you renew the lease.</p>
              <p className={bodyClass}>
                Our <Link to="/branding-agency" className={inlineLink}>branding agency</Link> team writes them for somebody in a hurry on a Tuesday afternoon.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <figure role="group" aria-label="Sample one-page brand guide for MEND" className="m-0 rounded-[32px] bg-white p-6 md:p-9 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.4)]">
                <div className="flex items-baseline justify-between pb-4 border-b border-[#0d0d0d]">
                  <span className="text-[28px] font-semibold tracking-[-0.04em] text-black">MEND</span>
                  <span className="text-[12px] text-[#9a9a9a]">One page</span>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-6">
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Logo</span>
                    <div className="mt-3 h-[84px] rounded-[14px] border border-dashed border-[#bdbdbd] flex items-center justify-center">
                      <PPPMark className="w-12" color="#0d0d0d" />
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#3d3d3d]">Keep room around it. Never stretch it.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Colors</span>
                    <div className="mt-3 flex gap-3">
                      {[["#3048d9", "#3048D9"], ["#e0ecae", "#E0ECAE"], ["#182820", "#182820"]].map(([c, code]) => (
                        <span key={code} className="text-[10px] text-[#6d6d6d]">
                          <i className="block w-12 h-8 rounded-[8px] mb-1 ring-1 ring-[#e2e2e2]" style={{ background: c }} />
                          {code}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#3d3d3d]">Blue leads. Lime supports. Ink writes.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Fonts</span>
                    <p className="mt-3 text-[13px] leading-[1.6] text-[#3d3d3d]">
                      <b className="font-normal text-[18px]" style={{ fontFamily: "Georgia, serif" }}>Georgia</b> for headlines.<br />
                      <b className="text-[14px]" style={{ fontFamily: "Arial, sans-serif" }}>Arial</b> for everything else.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Voice</span>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#3d3d3d]">Calm. Plain. Never in a hurry.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Do</span>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#3d3d3d]"><span className="text-black font-bold">✓ </span>Use the seam as a divider.</p>
                  </div>
                  <div className="pt-3 border-t border-[#ececec]">
                    <span className="text-[12px] font-medium text-[#ff1616]">Don't</span>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#3d3d3d]"><span className="text-[#ff1616] font-bold">✕ </span>Add a fourth color.</p>
                  </div>
                </div>
              </figure>
            </Reveal>
          </div>
          <div className={container}>
            <TestLine>Can a new hire make a decent flyer without calling you?</TestLine>
          </div>
        </section>

        {/* ── BRAND LAUNCH ── */}
        <section aria-labelledby="s7-h" className={`${container} ${sectionY}`}>
          <SectionHead id="s7-h" heading={<SplitHeading line="Launch it like a month," italic="not" rest="a day." />}>
            <p>
              A Brand Launch is a string of small reveals. The website goes first, because that's where everybody checks. Website Design &amp; Development and UI/UX Design make that page feel like the same company as the business card. Our{" "}
              <Link to="/website-design" className={inlineLink}>website design</Link> and <Link to="/ui-ux-design" className={inlineLink}>UI and UX</Link> teams build it that way.
            </p>
            <p>
              Order matters less than finishing. Our <Link to="/product-launch" className={inlineLink}>product launch</Link> work runs on the same rule.
            </p>
          </SectionHead>
          <LaunchMonth />
          <TestLine>Visit every place your name appears. Does it feel like one visit?</TestLine>
        </section>

        {/* ── BRANDING SERVICES, PLAINLY ── */}
        <section aria-labelledby="svc-h" className={`${container} pb-24 md:pb-36`}>
          <Reveal>
            <div className="rounded-[32px] bg-[#0d0d0d] text-white p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              <h2 id="svc-h" className="text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.04em] font-medium">
                <SplitHeading line="Buy the whole run" italic="or" rest="one stretch." dark />
              </h2>
              <div className="space-y-5 text-[15px] md:text-[18px] leading-[1.8] text-[#bdbdbd] font-light">
                <p>Our Branding Services follow that order. Discovery, then positioning and voice. Then the look, the one page and the launch. Perfect Pixel Pro works best with companies that have a product and a logo that stopped fitting.</p>
                <p className="text-[15px]">
                  See the visual work for <Link to="/work/the-black-in-hr" className={`${inlineLink} text-white`}>The Black in HR</Link>, or read about{" "}
                  <Link to="/blog/why-choose-us" className={`${inlineLink} text-white`}>our approach to strategy and craft</Link>.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Asked at the Brand Identity & Design" italic="desk." rest="" />}
          note="Eight short answers. One small picture each."
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="What brand do people meet" italic="when" rest="they meet yours?" />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[780px]`}>
                Bring your website, a recent campaign and something your team sends to customers. Perfect Pixel Pro will look at what connects them, what contradicts them and what deserves to stay. That's Brand Identity &amp; Design as a short list of decisions you can actually use.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Talk through your brand</PillLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BrandIdentityDesign;
