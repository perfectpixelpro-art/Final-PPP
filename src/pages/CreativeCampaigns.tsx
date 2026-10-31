import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, useInView, prefersReducedMotion,
  usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Creative Campaigns and Campaign Strategy | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Creative campaigns built around one idea: campaign strategy, creative concept development and concept ads that work on a wall, a phone and a page.";

const ease = "cubic-bezier(.2,.7,.2,1)";

const faqs: Faq[] = [
  {
    q: "What is a brand campaign?",
    a: "A brand campaign is one idea told through words, design and media until people see a business differently. Corner coffee shop. Same warm voice on the cup, the chalkboard, the Monday email. A promotion sells a latte. A campaign makes you a regular.",
  },
  {
    q: "What is a brand awareness campaign?",
    a: "A brand awareness campaign is how a business gets known by people who've never walked in. Not a sales push, just name recognition. Think of the new bakery with the cheerful sign, the one you've now seen on a bus bench and a tote bag and can't stop noticing. You'd measure it with reach, branded searches or a recall survey, depending on what's possible.",
  },
  {
    q: "What are creative campaigns?",
    a: "Creative campaigns are one big idea spread over several places. Friday slice night. It's on the pizza box, in the window paint, in a text at 4 p.m. See one, think of the rest.",
  },
  {
    q: "What is campaign strategy?",
    a: "Campaign strategy is the plan behind the idea. Who's it for? What should change in their head? Where will it run? How will you know it worked? Skip those questions and you're driving with the playlist on and no destination.",
  },
  {
    q: "What is creative concept development?",
    a: "Creative concept development is how a messy problem turns into one idea you can say out loud. Start with what's bugging the audience. End with a single thought. Try the dinner table test. If you can't explain it between bites, it isn't done yet.",
  },
  {
    q: "What is a concept ad?",
    a: "A concept ad is one mocked-up ad that shows where a campaign idea could go before anybody pays for production. Think of the model home with the fake fruit bowl. You wander through, poke at the corners, then decide whether to build the real one.",
  },
  {
    q: "What are viral marketing campaigns?",
    a: "Viral marketing campaigns are the ones strangers pass along without being asked. A joke lands in a group chat at lunch. By dinner, eleven people have forwarded it. Nobody gets to order that off a menu. What goes in the pot is up to you: something relevant, easy to forward and good to look at.",
  },
  {
    q: "What makes the best marketing campaigns?",
    a: "The best marketing campaigns have one idea, one audience and one job. Lemonade stand sign. Product, price, corner. A driver gets it in two seconds and brakes or doesn't. Big campaigns do the same, with more channels.",
  },
];

const structuredData = [articleSchema("Creative Campaigns with a point", PAGE_DESCRIPTION), faqSchema(faqs)];

// ── Hero graphic: scattered noise sends lines into one point, which fires a single signal.
const noiseDots = (() => {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: 46 }, () => ({
    x: 40 + rand() * 380,
    y: 34 + rand() * 252,
    r: 2 + rand() * 4,
    dark: rand() > 0.82,
  }));
})();
const POINT = { x: 580, y: 160 };

const SignalGraphic = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);

  return (
    <figure className="m-0">
      <div ref={ref} className="rounded-[32px] bg-[#f6f6f6] p-5 md:p-10 overflow-x-auto">
        <svg className="block w-full min-w-[620px] h-auto" viewBox="0 0 1000 340" role="img" aria-labelledby="hs-t hs-d" xmlns="http://www.w3.org/2000/svg">
          <title id="hs-t">Noise becoming a single clear signal</title>
          <desc id="hs-d">Many scattered dots on the left send thin lines into one point, which continues as a single bold arrow to the right.</desc>

          {noiseDots.map((d, i) =>
            i % 3 === 0 ? (
              <path
                key={`ray-${i}`}
                d={`M${d.x} ${d.y}L${POINT.x} ${POINT.y}`}
                stroke="#cfcfcf"
                strokeWidth="1"
                fill="none"
                pathLength={1}
                strokeDasharray="1"
                style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1200ms ${ease} ${300 + i * 20}ms` }}
              />
            ) : null
          )}

          {noiseDots.map((d, i) => (
            <circle
              key={`dot-${i}`}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill={d.dark ? INK : "#bdbdbd"}
              style={{ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${i * 15}ms` }}
            />
          ))}

          <circle cx={POINT.x} cy={POINT.y} r="34" fill={RED} fillOpacity=".1" style={{ opacity: visible ? 1 : 0, transition: "opacity 800ms ease 1100ms" }} />
          <circle cx={POINT.x} cy={POINT.y} r="14" fill={RED} style={{ opacity: visible ? 1 : 0, transition: "opacity 600ms ease 1000ms" }} />

          <path
            d={`M${POINT.x + 22} ${POINT.y}H930`}
            stroke={INK}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            pathLength={1}
            strokeDasharray="1"
            style={{ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 1000ms ${ease} 1300ms` }}
          />
          <path
            d="M904 134 932 160 904 186"
            stroke={INK}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease 2100ms" }}
          />

          <g fontFamily="Archivo, sans-serif" fontSize="15" fill="#6d6d6d">
            <text x="40" y="328">Noise</text>
            <text x={POINT.x} y="328" textAnchor="middle" fill={RED}>The point</text>
            <text x="932" y="328" textAnchor="end">Signal</text>
          </g>
        </svg>
      </div>
      <p className={`${noteClass} mt-5 text-center`}>Not more noise. A clearer signal. Conceptual illustration, not performance data.</p>
    </figure>
  );
};

// ── One idea, many canvases: a single frame that reshapes between formats.
const canvases = [
  {
    caption: "Out of home",
    w: 300,
    h: 400,
    radius: 10,
    frame: "bg-[#ff1616] text-white",
    kicker: "Poster study",
    line: "Find a different way home.",
    pill: null as string | null,
    pillClass: "",
  },
  {
    caption: "Social",
    w: 250,
    h: 444,
    radius: 38,
    frame: "bg-[#0d0d0d] text-white",
    kicker: "The weekend detour",
    line: "Take the unexpected turn.",
    pill: "Share a route",
    pillClass: "bg-white text-black",
  },
  {
    caption: "Web",
    w: 560,
    h: 385,
    radius: 18,
    frame: "bg-white text-black ring-1 ring-[#e5e5e5]",
    kicker: null as string | null,
    line: "Your next story starts outside.",
    pill: "Plan a detour",
    pillClass: "bg-[#ff1616] text-white",
  },
];

const FormatIcon = ({ index }: { index: number }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    {index === 0 && <rect x="6" y="3" width="12" height="18" rx="1" />}
    {index === 1 && (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10.5 5h3" strokeLinecap="round" />
      </>
    )}
    {index === 2 && (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M2.5 8.5h19" />
      </>
    )}
  </svg>
);

const CanvasSwitcher = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % canvases.length), 3800);
    return () => window.clearInterval(id);
  }, [auto]);

  const current = canvases[active];

  return (
    <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[0.42fr_1fr] gap-4 md:gap-5 items-stretch">
      <div className="flex lg:flex-col gap-2" role="tablist" aria-label="Canvas">
        {canvases.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.caption}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => {
                setActive(i);
                setAuto(false);
              }}
              className={`group relative overflow-hidden flex-1 lg:flex-none flex items-center gap-4 text-left rounded-[22px] px-4 py-4 md:px-6 md:py-6 transition-all duration-300 ${
                on ? "bg-[#0d0d0d] text-white shadow-[0_20px_40px_-25px_rgba(0,0,0,0.6)]" : "bg-white text-black hover:bg-[#ececec]"
              }`}
            >
              <span
                className={`hidden sm:flex w-11 h-11 shrink-0 rounded-full items-center justify-center transition-colors duration-300 ${
                  on ? "bg-[#ff1616] text-white" : "bg-[#f6f6f6] text-black"
                }`}
              >
                <FormatIcon index={i} />
              </span>
              <span className="min-w-0">
                <span className="block text-[16px] md:text-[20px] font-semibold tracking-[-0.02em]">{c.caption}</span>
                <span className={`hidden md:block mt-1 text-[14px] truncate ${on ? "text-[#bdbdbd]" : "text-[#8a8a8a]"}`}>{c.line}</span>
              </span>
              {on && auto && (
                <span
                  key={`bar-${active}`}
                  aria-hidden="true"
                  className="absolute left-0 bottom-0 h-[3px] bg-[#ff1616]"
                  style={{ animation: "cc-progress 3.8s linear forwards" }}
                />
              )}
            </button>
          );
        })}
        <style>{`@keyframes cc-progress { from { width: 0% } to { width: 100% } }`}</style>
      </div>

      <div
        className="relative rounded-[32px] bg-white overflow-hidden flex items-center justify-center h-[460px] md:h-[600px]"
        style={{ backgroundImage: "radial-gradient(circle, #e5e5e5 1px, transparent 1.2px)", backgroundSize: "22px 22px" }}
      >
        <div className="scale-[0.62] sm:scale-[0.85] lg:scale-100 -mt-6">
          <div
            className={`relative overflow-hidden shadow-[0_50px_90px_-45px_rgba(0,0,0,0.5)] transition-all duration-700 ${current.frame}`}
            style={{ width: current.w, height: current.h, borderRadius: current.radius, transitionTimingFunction: ease }}
          >
            {/* Small format cues: a speaker slot on the phone, an address bar on the web page */}
            <span
              aria-hidden="true"
              className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-full bg-white/25 transition-opacity duration-300"
              style={{ opacity: active === 1 ? 1 : 0 }}
            />
            <span
              aria-hidden="true"
              className="absolute top-0 inset-x-0 h-9 border-b border-[#ececec] flex items-center gap-1.5 px-4 transition-opacity duration-300"
              style={{ opacity: active === 2 ? 1 : 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff1616]" />
              <span className="ml-3 h-4 w-40 rounded-full bg-[#f2f2f2]" />
            </span>

            {canvases.map((c, i) => (
              <div
                key={c.caption}
                aria-hidden={i !== active}
                className={`absolute inset-0 px-7 md:px-8 pb-7 md:pb-8 flex flex-col justify-between transition-opacity duration-500 ${i === 2 ? "pt-14" : "pt-8"}`}
                style={{ opacity: i === active ? 1 : 0, transitionDelay: i === active ? "250ms" : "0ms" }}
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-70">{c.kicker ?? ""}</span>
                <b className="block text-[34px] md:text-[40px] font-semibold leading-[0.98] tracking-[-0.04em]">{c.line}</b>
                {c.pill ? (
                  <span className={`self-start rounded-full px-5 py-3 text-[13px] font-semibold ${c.pillClass}`}>{c.pill}</span>
                ) : (
                  <svg viewBox="0 0 240 40" className="w-full h-10" aria-hidden="true">
                    <path d="M4 30C50 30 60 8 110 14S170 34 200 22 230 10 236 12" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 inset-x-0 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] ring-1 ring-[#ececec]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1616]" />
            <span className="text-[#6d6d6d]">Same idea</span>
            <span className="text-black font-medium">{current.caption}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// ── The practice as a film strip of three frames.
const practiceFrames = [
  {
    word: "Predict",
    title: "Find the tension.",
    body: "Who are we talking to, and what's in their way? What's everybody else shouting at them? What do they believe that has to change? Winning gets written down before anyone opens a design file.",
    tags: ["Audience insight", "Message hierarchy", "Brief"],
  },
  {
    word: "Penetrate",
    title: "Give it a face.",
    body: "Now the idea gets a face and a voice. That's our creative concept design, with words and pictures learning to work as a pair, like a couple that finishes each other's sentences. A concept ad then puts it out in the world so you can react to something real.",
    tags: ["Key visual", "Copy platform", "Concept ad"],
  },
  {
    word: "Precision",
    title: "Make it hold up.",
    body: "Next we fit the idea to the places you picked and kick the tires. Is it clear from across a room? Is the craft there? Any early numbers? You want one campaign that feels like itself everywhere. Not forty near-identical files.",
    tags: ["Assets", "Adaptations", "Review"],
  },
];

const Sprockets = () => (
  <div aria-hidden="true" className="hidden md:flex justify-between px-2">
    {Array.from({ length: 26 }, (_, i) => (
      <span key={i} className="w-5 h-3 rounded-[4px] bg-white/15" />
    ))}
  </div>
);

// "Viral" card graphic: one red source passes the idea on, and each share passes it further.
const shareNetwork = (() => {
  const cx = 160, cy = 70;
  const at = (deg: number, r: number) => ({
    x: cx + Math.cos((deg * Math.PI) / 180) * r * 1.6,
    y: cy + Math.sin((deg * Math.PI) / 180) * r * 0.7,
  });
  const first = [0, 60, 120, 180, 240, 300].map((deg) => ({ deg, ...at(deg, 48) }));
  const second = first.flatMap((n, i) =>
    (i % 2 === 0 ? [-14, 14] : [0]).map((off) => ({ from: n, ...at(n.deg + off, 90) }))
  );
  return { cx, cy, first, second };
})();

const ShareNetwork = () => {
  const { ref, visible } = useInView<SVGSVGElement>(0.4);
  const { cx, cy, first, second } = shareNetwork;
  const draw = (delay: number) => ({ strokeDashoffset: visible ? 0 : 1, transition: `stroke-dashoffset 800ms ${ease} ${delay}ms` });
  const fade = (delay: number) => ({ opacity: visible ? 1 : 0, transition: `opacity 500ms ease ${delay}ms` });

  return (
    <svg ref={ref} viewBox="0 0 320 140" className="block w-full h-auto" aria-hidden="true">
      {first.map((n, i) => (
        <path key={`a${i}`} d={`M${cx} ${cy}L${n.x} ${n.y}`} stroke="#cfcfcf" strokeWidth="1.2" pathLength={1} strokeDasharray="1" style={draw(150 + i * 60)} />
      ))}
      {second.map((n, i) => (
        <path key={`b${i}`} d={`M${n.from.x} ${n.from.y}L${n.x} ${n.y}`} stroke="#e2e2e2" strokeWidth="1" pathLength={1} strokeDasharray="1" style={draw(700 + i * 50)} />
      ))}
      {second.map((n, i) => (
        <circle key={`c${i}`} cx={n.x} cy={n.y} r="3" fill="#bdbdbd" style={fade(1100 + i * 50)} />
      ))}
      {first.map((n, i) => (
        <circle key={`d${i}`} cx={n.x} cy={n.y} r="4.5" fill={INK} style={fade(550 + i * 60)} />
      ))}
      <circle cx={cx} cy={cy} r="16" fill={RED} fillOpacity=".12" />
      <circle cx={cx} cy={cy} r="7" fill={RED} />
    </svg>
  );
};

const CreativeCampaigns = () => {
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
                <HeroTitleLines line="Creative Campaigns" italic="with" rest="a point." />
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[760px]`}>
                A coffee shop owner shows you her new slogan. Clever, sure. By lunch, nobody can repeat it, including her. That's the gap we work in. We build creative campaigns to close it. First, get noticed. Then get remembered. Then get somebody to act. Pitch rooms are easy. The street is the real test.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Talk through your campaign</PillLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-20 md:mt-28">
            <SignalGraphic />
          </Reveal>
        </section>

        {/* ── THE THINKING ── */}
        <section aria-labelledby="think-heading" className={`${container} pb-24 md:pb-36`}>
          <Reveal>
            <h2 id="think-heading" className={`${h2Class} max-w-[1100px]`}>
              <SplitHeading line="A good ad gets noticed. A good campaign" italic="gives" rest="people something to notice again." />
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-start">
            <Reveal className="space-y-6">
              <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
                Most people picture brand campaigns as a stack of matching posters. Then they walk past a good one. A bus shelter says something, the pizza place texts something similar, a cup in somebody's hand says it a third way. Different looks, same thought. Same song, three cover bands.
              </p>
              <p className={bodyClass}>
                Campaign strategy and creative concept development both begin the same way. Nosiness. Why don't these people care yet? Maybe they think you're pricey. Maybe they've never heard of you. Maybe your name sounds like a dentist. We build the idea to answer that one thing, then hand every format a job. Why first, how second. Our{" "}
                <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work runs the same way.
              </p>
              <p className={bodyClass}>
                Collecting marketing campaign examples is fun. We keep a folder too. Most make lousy templates, though. Somebody else's crowd laughed at that joke, and yours might not even get it.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:sticky lg:top-24">
              <aside className="rounded-[32px] bg-[#f6f6f6] p-6 md:p-8">
                <div className="rounded-[22px] bg-white px-4 py-5">
                  <ShareNetwork />
                </div>
                <h3 className="mt-8 px-2 text-[30px] md:text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-black">
                  <SplitHeading line="Viral is an outcome." italic="Not" rest="a brief." />
                </h3>
                <p className="mt-5 px-2 text-[15px] md:text-[17px] leading-[1.75] text-[#6d6d6d] font-light">
                  Nobody can promise viral marketing campaigns, and a person who does is selling a lottery ticket. Here's what can be planned. A relevant idea, something easy to pass along and a look that sticks.
                </p>
                <ul aria-hidden="true" className="mt-6 px-2 list-none m-0 p-0">
                  {["A relevant idea", "Something easy to pass along", "A look that sticks"].map((t) => (
                    <li key={t} className="flex items-center gap-3 py-3.5 border-t border-[#e5e5e5] text-[15px] md:text-[16px] text-black">
                      <span className="w-6 h-6 shrink-0 rounded-full bg-[#ff1616] flex items-center justify-center">
                        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 6.2 5 8.5 9.5 3.5" />
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* ── ONE IDEA, MANY CANVASES ── */}
        <section aria-labelledby="canvas-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-24 items-start">
              <Reveal>
                <h2 id="canvas-heading" className={h2Class}>
                  <SplitHeading line="The idea should survive a" italic="change" rest="of canvas." />
                </h2>
              </Reveal>
              <Reveal delay={120} className="space-y-6">
                <p className={bodyClass}>
                  Take one idea and put it on a poster by the train station, in a feed between a dog video and somebody's lunch, and in a six-second film. It has to work in all three places, and it can look totally different in each.
                </p>
                <p className={bodyClass}>
                  Here's a made-up bookstore, nothing real. Saturday browsing has dried up, and the owner's first instinct is a new-arrivals list. We'd skip that. The campaign says find a different way home instead. Taped up as a poster, it's a gentle dare. In a feed, it's a weekend detour. On the website, it's a reason to stop by after work, past the bakery, before the 6:40 bus.
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <CanvasSwitcher />
            </Reveal>
            <p className={`${noteClass} mt-6`}>Fictional concept. The bookstore and every line above are invented, not client work and not measured results.</p>

            <Reveal className="mt-16 md:mt-20 text-center">
              <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
              <p className="mx-auto max-w-[900px] font-medium text-[28px] md:text-[44px] leading-[1.12] tracking-[-0.035em]">
                <SplitHeading line="Same thought, three jobs. We test our creative campaign ideas this way, and the wobbly ones go back to the" italic="drawing" rest="board." />
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE PRACTICE ── */}
        <section aria-labelledby="practice-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
            <h2 id="practice-heading" className={h2Class}>
              <SplitHeading line="From first question" italic="to" rest="final frame." />
            </h2>
            <p className={bodyClass}>
              We don't show up with twenty creative campaign ideas on a slide and ask you to pick a favorite, like choosing paint swatches. We start with what's broken. A launch. A name nobody knows. A reputation ten years stale. Where it runs comes later.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:mt-24">
            <div className="rounded-[32px] bg-[#0d0d0d] p-3 md:p-5 space-y-4">
              <Sprockets />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {practiceFrames.map((f) => (
                  <article key={f.word} className="group rounded-[22px] bg-white p-7 md:p-9 flex flex-col min-h-[420px] transition-transform duration-500 hover:-translate-y-1">
                    <span className="self-start rounded-full bg-[#fff1f1] px-4 py-1.5 text-[13px] font-medium text-[#ff1616]">{f.word}</span>
                    <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black transition-colors duration-300 group-hover:text-[#ff1616]">
                      {f.title}
                    </h3>
                    <p className="mt-4 text-[15px] md:text-[16px] leading-[1.8] text-[#6d6d6d] font-light">{f.body}</p>
                    <div className="mt-auto pt-8 flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span key={t} className="rounded-full bg-[#f6f6f6] px-3.5 py-1.5 text-[12px] md:text-[13px] text-[#3d3d3d]">{t}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <Sprockets />
            </div>
          </Reveal>

          <Reveal className="mt-14 md:mt-20 max-w-[900px]">
            <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
              Every campaign needs a home too. That's where a good{" "}
              <Link to="/branding-agency" className={inlineLink}>branding agency</Link> starts. Get the visual world right and the posters, the posts and the packaging end up looking like relatives.
            </p>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="Creative campaigns, answered before the" italic="first" rest="frame." />}
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the challenge." italic="We'll" rest="find the thought." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[680px]`}>
                You don't need a finished brief. A hunch will do, or a rough list. Perfect Pixel Pro will talk through who you're after, how bold you want to be and what your creative campaigns need to do.
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

export default CreativeCampaigns;
