import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  HeroTitleLines, SplitHeading, Reveal, PillLink, FaqSection, jumpToFaq, useInView, prefersReducedMotion,
  usePageMeta, faqSchema, subServiceBreadcrumbSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Product Sales | Buyer Questions & Sales Funnel | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product Sales by Perfect Pixel Pro. Sharpen product storytelling, buyer trust, acquisition campaigns and the journey from first interest to purchase.";

const serif = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 } as const;
const ease = "cubic-bezier(.2,.7,.2,1)";

const doubts = [
  { tag: "Fit", question: "Will this work for me?" },
  { tag: "Value", question: "Why choose this one?" },
  { tag: "Risk", question: "What if it doesn't?" },
];

const pathNodes = [
  { stage: "Arrive", title: "Notice", body: "A reason to look twice.", icon: <><circle cx="12" cy="12" r="3" /><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /></> },
  { stage: "Explore", title: "Understand", body: "One clear story. Not a pile of features.", icon: <><path d="M4 5.5h16v10H9l-5 4Z" /></> },
  { stage: "Decide", title: "Believe", body: "Trust signals, specs and straight answers.", icon: <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z" /><path d="m9 12 2 2 4-4" /></> },
  { stage: "Act", title: "Choose", body: "A purchase, inquiry or demo with no hoops.", icon: <><path d="M5 12.5 10 17.5 19.5 7" /></> },
];

// Widths are illustrative, not to scale.
const funnelRows = [
  { label: "Saw", value: "1,000", width: 100 },
  { label: "Clicked", value: "120", width: 76, loss: "−880 before the click" },
  { label: "Cart", value: "30", width: 54, loss: "−90 at the cart" },
  { label: "Paid", value: "9", width: 36, loss: "−21 at checkout", hot: true },
  { label: "Came back", value: "4", width: 24 },
];

const practice = [
  {
    tag: "Find the right buyer",
    title: "Who needs to hear this?",
    body: "Before you spend a cent, split your audience in two. Curious. Ready. A customer acquisition strategy treats them differently. Customer acquisition campaigns then have a real job, and it isn't collecting clicks. Selling to other companies? The goal shifts. With lead generation for businesses, a booked conversation is often the win. Not an instant order.",
  },
  {
    tag: "Make the story usable",
    title: "What's worth believing?",
    body: "Start with a real moment of use. Build the message there. Then choose how to show it. A comparison? A demo? A landing page? A sales presentation? Pick the fastest. Details beat adjectives.",
  },
  {
    tag: "Find the friction",
    title: "Where did the buyer pause?",
    body: "Walk the path yourself. First visit to checkout, on your phone. Bad signal helps. You'll trip over missing answers, muddy offers and dead-end handoffs. Fix those first. A new channel can wait.",
  },
];

const faqs: Faq[] = [
  {
    id: "faq-create-sales-funnel",
    q: "How to create a sales funnel?",
    a: "Start small. One product. One buyer. One action. Now list every choice that buyer makes before saying yes. Expect five parts: 1. Attract: find the people already feeling the pain. 2. Explain: what is it, and why is it different? Use a stranger's words. 3. Prove: show the demo, the details, the evidence. 4. Convert: make the last step quick. Buy, inquire or book a demo. 5. Learn: see what happened after the sale. Use it next time. Give every step a number. One you can measure. In B2B that number might be qualified conversations, not checkouts.",
    body: (
      <>
        <p>Start small. One product. One buyer. One action. Now list every choice that buyer makes before saying yes. Expect five parts:</p>
        <ol className="list-decimal pl-6 space-y-1.5 marker:text-[#ff1616] marker:font-semibold">
          <li><strong className="font-semibold text-black">Attract:</strong> find the people already feeling the pain.</li>
          <li><strong className="font-semibold text-black">Explain:</strong> what is it, and why is it different? Use a stranger's words.</li>
          <li><strong className="font-semibold text-black">Prove:</strong> show the demo, the details, the evidence.</li>
          <li><strong className="font-semibold text-black">Convert:</strong> make the last step quick. Buy, inquire or book a demo.</li>
          <li><strong className="font-semibold text-black">Learn:</strong> see what happened after the sale. Use it next time.</li>
        </ol>
        <p>Give every step a number. One you can measure. In B2B that number might be qualified conversations, not checkouts.</p>
      </>
    ),
  },
  {
    id: "faq-dropoff-reasons",
    q: "Why do people drop off a sales funnel?",
    a: "It's rarely one thing. Maybe the ad pulled in browsers, not buyers. Maybe the page buried the main benefit. Later on, price scares people. Or delivery. Or risk. Or a checkout that wants too much. In B2B, it's often an inquiry nobody answers for two days. An exit tells you something. It doesn't settle anything. Ask what people saw. Ask what stopped them. Then decide whether the campaign needs a rebuild.",
  },
  {
    id: "faq-spot-dropoff",
    q: "Where do buyers drop off, and how can you tell?",
    a: "Line up the steps that matter. Landing-page visits. Product views. Add-to-carts. Checkout starts. Purchases. Considered purchases need different steps: form starts, inquiries, booked calls, follow-ups. Split each one by device and by traffic source. Then set the numbers beside what customers say in support tickets, reviews and usability tests. Analytics points at the room. Customers tell you what's wrong in it.",
  },
  {
    id: "faq-fix-first",
    q: "What should you fix first if traffic is high but Product Sales are low?",
    a: "Check the match between audience, promise and product first. It's cheaper than a redesign. Then run the basics. Can a stranger understand the offer in a few seconds? Can they judge the value? See real proof? Are price and delivery clear? Does the buy button work with one thumb on mobile? Fix the biggest gap you can verify. Measure again. Product Sales rarely rise on traffic alone. A confusing offer stays confusing at any volume.",
  },
  {
    q: "Which trust signals matter most in product sales?",
    a: "What a buyer can check beats what you claim. Think honest photos, specifications, plain policies, documented demos. Genuine reviews, if you have them. What counts most depends on the product. A polished claim never replaces seeing the thing work.",
  },
  {
    q: "Is product promotion different from product marketing?",
    a: "Promotion gets an offer seen. Product marketing does the thinking behind it. It asks who the product is for, what it means, why anyone should believe it and how someone decides. Together they work better. They're still two jobs.",
  },
  {
    q: "When should a product invest in customer acquisition campaigns?",
    a: "Hold off until the offer is clear enough to test. The page should answer the basic buying questions too. Then go narrow. One audience. One message tied to a real use case. One action you can measure. Visitors showing up and not getting it? Not trusting it? Fix that before the budget goes up.",
  },
  {
    q: "Can organic growth and paid acquisition work together?",
    a: "Yes, and often they should. Paid is fast. It puts you in front of the right people. Helpful content gives them a reason to return. So do clear product details and customer recommendations. No extra ad needed. Let the mix follow how your buyers research, compare and buy. Skip whatever channel is trendy.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Product Sales: Find What the Pitch Forgot",
    description: "Product Sales work starts in the space between interest and buying. See where buyers leave, test the numbers yourself and learn from what customers say.",
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    inLanguage: "en-US",
    mainEntityOfPage: "https://perfectpixelpro.com/product-sales",
    author: { "@type": "Organization", name: "Perfect Pixel Pro", url: "https://perfectpixelpro.com/" },
    publisher: { "@type": "Organization", name: "Perfect Pixel Pro", url: "https://perfectpixelpro.com/" },
  },
  faqSchema(faqs),
  subServiceBreadcrumbSchema("Product Sales", "/product-sales"),
];

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

// Hero graphic: interest on one side, buying on the other. Story, proof and the next step fill the gap.
const gapPieces = [
  { label: "Story", icon: <path d="M5 4.5h11l3 3V19.5H5ZM8.5 10h7M8.5 13.5h7M8.5 17h4" /> },
  { label: "Proof", icon: <><path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6Z" /><path d="m9 12 2 2 4-4" /></> },
  { label: "Next step", icon: <path d="M4 12h14M13 6.5 18.5 12 13 17.5" /> },
];

const GapIcon = ({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

// Hero (right column): liked and saved, not bought. Story, proof and a next step close the gap.
const GapStack = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(8px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  return (
    <figure className="m-0">
      <p className="sr-only">Someone likes the product and saves it for later but doesn't buy. Story, proof and a clear next step fill the gap between interest and buying.</p>
      <div ref={ref} aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-4 md:p-6">
        {/* Interest */}
        <div className="rounded-[22px] bg-white p-4 flex items-center gap-4" style={rise(100)}>
          <span className="w-14 h-14 shrink-0 rounded-[14px] flex items-center justify-center text-[#6b5641]" style={{ background: "linear-gradient(160deg, #efe6da, #d6c2aa)" }}>
            <GapIcon className="w-7 h-7"><path d="M6 8h10v6a5 5 0 0 1-5 5 5 5 0 0 1-5-5ZM16 10h1.5a2.5 2.5 0 0 1 0 5H16" /></GapIcon>
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-[12px] text-[#9a9a9a]">Interest</span>
            <span className="block text-[15px] md:text-[16px] font-medium text-black">Liked. Saved for later.</span>
          </span>
          <span className="flex gap-1.5">
            <span className="w-8 h-8 rounded-full bg-[#fff1f1] text-[#ff1616] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></svg>
            </span>
            <span className="w-8 h-8 rounded-full bg-[#0d0d0d] text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M7 3.5h10v17l-5-3.5-5 3.5Z" /></svg>
            </span>
          </span>
        </div>

        {/* The gap */}
        <div className="mt-3 rounded-[22px] border-2 border-dashed border-[#dcdcdc] p-2">
          <span className="block px-3 pt-2 pb-1.5 text-[13px] text-[#8a8a8a]">The gap between interest and buying</span>
          {gapPieces.map((g, i) => (
            <div key={g.label} className="flex items-center gap-3.5 rounded-[14px] bg-white px-3.5 py-3 mt-1.5 first:mt-0" style={rise(350 + i * 160)}>
              <span className={`w-9 h-9 shrink-0 rounded-[10px] flex items-center justify-center ${i === 2 ? "bg-[#ff1616] text-white" : "bg-[#f6f6f6] text-black"}`}>
                <GapIcon className="w-[17px] h-[17px]">{g.icon}</GapIcon>
              </span>
              <span className="flex-1 text-[15px] md:text-[16px] font-medium tracking-[-0.01em] text-black">{g.label}</span>
              <span className="text-[12px] text-[#9a9a9a]">fills it</span>
            </div>
          ))}
        </div>

        {/* Buying */}
        <div className="mt-3 rounded-[22px] bg-[#0d0d0d] text-white px-5 py-4 flex items-center gap-4" style={rise(900)}>
          <span className="w-10 h-10 shrink-0 rounded-full bg-[#ff1616] flex items-center justify-center">
            <svg viewBox="0 0 12 12" className="w-4 h-4" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5 9.5 3.5" /></svg>
          </span>
          <span className="flex-1">
            <span className="block text-[12px] text-white/50">Buying</span>
            <span className="block text-[15px] md:text-[16px] font-medium">Order placed.</span>
          </span>
        </div>
      </div>
    </figure>
  );
};

const DecisionFile = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);

  return (
    <figure className="m-0">
      <p className="sr-only">
        People show interest but don't buy. Product Sales fills the gap between interest and buying with three things: story, proof and the next step.
      </p>
      <div aria-hidden="true" className="rounded-[32px] bg-[#f6f6f6] p-5 md:p-10">
        <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_2.3fr_1fr] gap-3 md:gap-4 items-stretch">
          {/* Path line, turns red once the gap is filled */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-1/2 h-[2px] -translate-y-1/2 bg-[#dcdcdc]">
            <div className="h-full bg-[#ff1616]" style={{ width: visible ? "100%" : "0%", transition: `width 1200ms ${ease} 1500ms` }} />
          </div>

          {/* Interest */}
          <div
            className="relative rounded-[24px] bg-white p-6 md:p-7 flex flex-col justify-between min-h-[170px] shadow-[0_20px_40px_-30px_rgba(0,0,0,0.3)]"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 600ms ease" }}
          >
            <div className="flex gap-2 text-[#9a9a9a]">
              <span className="w-10 h-10 rounded-full bg-[#f6f6f6] flex items-center justify-center">
                <GapIcon><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></GapIcon>
              </span>
              <span className="w-10 h-10 rounded-full bg-[#f6f6f6] flex items-center justify-center">
                <GapIcon><path d="M7 4.5h10v15l-5-3.5-5 3.5Z" /></GapIcon>
              </span>
            </div>
            <div className="mt-6">
              <p className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em] text-black">Interest</p>
              <p className="mt-1 text-[14px] text-[#9a9a9a]">Liked. Saved for later.</p>
            </div>
          </div>

          {/* The gap */}
          <div className="relative rounded-[24px] border-2 border-dashed border-[#d4d4d4] p-4 md:p-5 flex flex-col">
            <p className="text-center text-[13px] text-[#9a9a9a]">The gap between interest and buying</p>
            <div className="mt-3 flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-3">
              {gapPieces.map((g, i) => {
                const last = i === gapPieces.length - 1;
                return (
                  <div
                    key={g.label}
                    className={`relative rounded-[18px] flex flex-col items-center justify-center gap-3 py-5 ${last ? "bg-[#0d0d0d] text-white" : "bg-white text-black"} shadow-[0_16px_32px_-24px_rgba(0,0,0,0.4)]`}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "none" : "translateY(-24px)",
                      transition: `opacity 500ms ease ${500 + i * 300}ms, transform 800ms ${ease} ${500 + i * 300}ms`,
                    }}
                  >
                    <span className={`w-11 h-11 rounded-full flex items-center justify-center ${last ? "bg-[#ff1616] text-white" : "bg-[#fff1f1] text-[#ff1616]"}`}>
                      <GapIcon>{g.icon}</GapIcon>
                    </span>
                    <span className="text-[17px] md:text-[19px] font-semibold tracking-[-0.02em]">{g.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buying */}
          <div
            className="relative rounded-[24px] bg-[#ff1616] text-white p-6 md:p-7 flex flex-col justify-between min-h-[170px] shadow-[0_24px_50px_-28px_rgba(255,22,22,0.7)]"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "scale(0.96)", transition: `opacity 600ms ease 1800ms, transform 800ms ${ease} 1800ms` }}
          >
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <GapIcon><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></GapIcon>
            </span>
            <div className="mt-6">
              <p className="text-[24px] md:text-[28px] font-semibold tracking-[-0.03em]">Buying</p>
              <p className="mt-1 text-[14px] text-white/80">Story. Proof. Next step.</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

// SLEEVE example as a short exchange: the brand claims, the buyer asks, the page shows, the buy is in reach.
// The buyer's question, answered on the product page itself: demo, dimensions, closure, then price and Buy.
const EvidenceExchange = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  const rise = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(10px)",
    transition: `opacity 600ms ease ${delay}ms, transform 800ms ${ease} ${delay}ms`,
  });
  const specs = [
    { k: "Fits", v: "2 chargers, 4 cables" },
    { k: "Size", v: "22 × 12 × 4 cm" },
    { k: "Closes", v: "Magnetic snap" },
  ];

  return (
    <figure className="m-0">
      <div ref={ref} role="group" aria-label="Example of turning a product claim into buying evidence: the buyer asks which cables fit and how it closes, and the product page answers with a capacity demo, dimensions, the closure, and price, delivery and the buy button in plain view." className="rounded-[28px] bg-white p-4 md:p-5 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
        {/* The buyer's question */}
        <div aria-hidden="true" className="flex items-center gap-2.5" style={rise(100)}>
          <span className="w-7 h-7 shrink-0 rounded-full bg-[#fff1f1] text-[#ff1616] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" /></svg>
          </span>
          <span className="rounded-[14px] rounded-tl-[4px] bg-[#f6f6f6] px-3.5 py-2 text-[14px] text-black">Which cables fit, and how is it held together?</span>
        </div>

        {/* The answer, on the page */}
        <div aria-hidden="true" className="mt-3 rounded-[20px] ring-1 ring-[#ececec] p-3 grid grid-cols-[0.9fr_1.1fr] gap-4" style={rise(300)}>
          <div className="relative rounded-[14px] overflow-hidden min-h-[170px] bg-[#1c1c1c] flex items-center justify-center">
            <div className="w-[70%] h-[46%] rounded-[12px] bg-[#3a3a3a] ring-1 ring-white/10 flex items-center justify-around px-2">
              {[0, 1, 2, 3].map((n) => <span key={n} className="w-1.5 h-[60%] rounded-full bg-white/50" />)}
            </div>
            <span className="absolute left-2.5 bottom-2.5 flex items-center gap-1 rounded-full bg-[#ff1616] px-2 py-0.5 text-[10px] font-semibold text-white">▶ Capacity demo</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-black">SLEEVE</span>
            <span className="text-[12px] text-[#9a9a9a]">A better way to carry cables.</span>
            <div className="mt-2.5 space-y-1">
              {specs.map((sp) => (
                <div key={sp.k} className="flex justify-between gap-2 rounded-[8px] bg-[#fff1f1] px-2.5 py-1.5 text-[12px]">
                  <span className="text-[#ff1616] font-medium">{sp.k}</span>
                  <span className="text-black">{sp.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-3 flex items-center justify-between gap-2">
              <span className="leading-tight">
                <span className="block text-[15px] font-semibold text-black">$29</span>
                <span className="block text-[11px] text-[#6d6d6d]">Ships in 2 days</span>
              </span>
              <span className="rounded-full bg-[#0d0d0d] px-4 py-1.5 text-[12px] font-semibold text-white">Buy →</span>
            </div>
          </div>
        </div>

        {/* What each part does */}
        <div aria-hidden="true" className="mt-3 grid grid-cols-3 gap-2 text-[12px]" style={rise(550)}>
          <span className="rounded-[10px] bg-[#f6f6f6] px-3 py-2"><b className="block text-black">The claim</b><span className="text-[#6d6d6d]">says it</span></span>
          <span className="rounded-[10px] bg-[#fff1f1] px-3 py-2"><b className="block text-[#ff1616]">The evidence</b><span className="text-[#6d6d6d]">shows it</span></span>
          <span className="rounded-[10px] bg-[#0d0d0d] px-3 py-2"><b className="block text-white">The next step</b><span className="text-white/60">in plain view</span></span>
        </div>
      </div>
      <p className={`${bodyClass} mt-4`}>Conceptual illustration. No invented sales results or performance data.</p>
    </figure>
  );
};

// The four-step decision path with a loop back after the purchase.
const PathMap = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <figure className="m-0 rounded-[32px] bg-[#f6f6f6] p-6 md:p-10">
      <p className={bodyClass}>Illustrative buyer journey. Not measured data.</p>

      <div ref={ref} className="relative mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
        <div aria-hidden="true" className="hidden md:block absolute left-[12.5%] right-[12.5%] top-[27px] h-[2px] bg-[#e2e2e2]">
          <div className="h-full bg-[#ff1616]" style={{ width: visible ? "100%" : "0%", transition: `width 1600ms ${ease} 200ms` }} />
        </div>
        {pathNodes.map((n, i) => {
          const last = i === pathNodes.length - 1;
          return (
            <div
              key={n.title}
              className="relative flex flex-col items-center text-center"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)", transition: `opacity 600ms ease ${300 + i * 220}ms, transform 800ms ${ease} ${300 + i * 220}ms` }}
            >
              <span className={`w-14 h-14 rounded-full flex items-center justify-center ${last ? "bg-[#ff1616] text-white shadow-[0_0_0_8px_rgba(255,22,22,0.12)]" : "bg-white text-[#ff1616] ring-2 ring-[#ff1616]"}`}>
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {n.icon}
                </svg>
              </span>
              <span className="mt-5 text-[12px] text-[#9a9a9a]">{n.stage}</span>
              <h3 className={`mt-1 text-[24px] md:text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] ${last ? "text-[#ff1616]" : "text-black"}`}>{n.title}</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] mt-2 max-w-[220px]">{n.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-6 border-t border-[#e2e2e2] flex items-start gap-3">
        <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full border border-[#d4d4d4] flex items-center justify-center text-[16px] text-[#ff1616]">↺</span>
        <p className="text-[15px] leading-[1.6] text-[#6d6d6d]">After the purchase, keep listening. Real customers should shape the next version of the message.</p>
      </div>
      <p className="mt-5 rounded-[16px] bg-white px-5 py-4 text-[14px] md:text-[15px] leading-[1.6] text-[#3d3d3d] border-l-[3px] border-[#ff1616]">
        Want the short version?{" "}
        <button type="button" onClick={() => jumpToFaq("faq-create-sales-funnel")} className={inlineLink}>Here is how to create a sales funnel</button>, or{" "}
        <button type="button" onClick={() => jumpToFaq("faq-dropoff-reasons")} className={inlineLink}>why buyers drop off</button>.
      </p>
    </figure>
  );
};

// Top-down funnel: bars narrow as people leave, with the losses called out on the right.
const FunnelStack = () => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <figure className="m-0" aria-labelledby="fn-t">
      <p id="fn-t" className="sr-only">
        A funnel of one thousand visitors narrowing to nine buyers. Five stages: 1,000 saw the page, 120 clicked, 30 reached the cart, 9 paid and 4 came back. The biggest loss is between the cart and the payment stage, where seventy percent leave.
      </p>
      <div ref={ref} aria-hidden="true" className="rounded-[28px] bg-[#f6f6f6] px-5 py-8 md:p-12 space-y-2.5 md:space-y-3">
        {funnelRows.map((r, i) => (
          <div key={r.label} className="grid grid-cols-[72px_1fr] md:grid-cols-[120px_1fr_240px] items-center gap-4 md:gap-8">
            <span className={`text-[10px] md:text-[12px] font-medium uppercase tracking-[0.16em] ${r.hot ? "text-[#ff1616]" : "text-[#6d6d6d]"}`}>{r.label}</span>
            <div className="flex justify-center">
              <div
                className={`h-[52px] md:h-[64px] rounded-full flex items-center justify-center ${r.hot ? "bg-[#ff1616]" : "bg-[#0d0d0d]"}`}
                style={{
                  width: visible ? `${r.width}%` : "8%",
                  opacity: visible ? 1 : 0,
                  transition: `width 1100ms ${ease} ${i * 150}ms, opacity 500ms ease ${i * 150}ms`,
                }}
              >
                <span className="text-[18px] md:text-[24px] font-semibold tracking-[-0.03em] text-white">{r.value}</span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 -mt-1 md:mt-0 text-center md:text-left">
              {r.loss && (
                <span
                  className={`text-[13px] md:text-[15px] ${r.hot ? "text-[#ff1616] font-medium" : "text-[#6d6d6d]"}`}
                  style={{ opacity: visible ? 1 : 0, transition: `opacity 600ms ease ${600 + i * 150}ms` }}
                >
                  {r.loss}
                </span>
              )}
              {r.hot && (
                <span
                  className="block mt-1 text-[24px] md:text-[28px] leading-none text-[#ff1616]"
                  style={{ opacity: visible ? 1 : 0, transition: `opacity 600ms ease 1300ms` }}
                >
                  70% leave here
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

// Feedback loop as a left-to-right flow with a return path back to the start.
// The loop with the page's SLEEVE example: an order, the question, the fix on the page, the next order.
const LoopFlow = () => {
  const card = "h-full rounded-[18px] bg-white p-4 text-[12px] shadow-[0_14px_28px_-24px_rgba(0,0,0,0.45)]";
  const steps = [
    {
      k: "Sell",
      art: (
        <div className={card}>
          <div className="flex justify-between text-[#9a9a9a]"><span>Order #1042</span><span className="text-[#16a34a] font-semibold">Paid</span></div>
          <p className="mt-3 text-[14px] font-semibold text-black">SLEEVE cable organizer</p>
          <p className="mt-1 text-[#6d6d6d]">1 × $29.00</p>
        </div>
      ),
    },
    {
      k: "Ask",
      hot: true,
      art: (
        <div className={card}>
          <p className="text-[#9a9a9a]">Email, two days later</p>
          <p className="mt-2 rounded-[12px] rounded-tl-[4px] bg-[#0d0d0d] px-3 py-2 text-white">Quick one: what almost stopped you?</p>
          <p className="mt-2 ml-auto w-fit max-w-[95%] rounded-[12px] rounded-tr-[4px] bg-[#f3f3f3] px-3 py-2 text-black">Wasn't sure my laptop charger would fit.</p>
        </div>
      ),
    },
    {
      k: "Fix",
      art: (
        <div className={card}>
          <p className="text-[#9a9a9a]">Product page</p>
          <p className="mt-2 text-[14px] font-semibold text-black">SLEEVE</p>
          <p className="mt-1 text-[#6d6d6d]">Folds flat. Closes with a snap.</p>
          <p className="mt-1.5 -mx-1.5 rounded-[6px] bg-[#fff1f1] px-1.5 py-1 font-semibold text-[#ff1616]">+ Fits most laptop chargers.</p>
        </div>
      ),
    },
    {
      k: "Again",
      art: (
        <div className={card}>
          <div className="flex justify-between text-[#9a9a9a]"><span>Order #1088</span><span className="text-[#16a34a] font-semibold">Paid</span></div>
          <p className="mt-3 text-[14px] font-semibold text-black">SLEEVE cable organizer</p>
          <p className="mt-1 text-[#6d6d6d]">Fewer “will it fit?” emails</p>
        </div>
      ),
    },
  ];

  return (
    <div role="img" aria-label="The customer feedback loop with a made-up cable organizer: an order is paid, the buyer is asked what almost stopped them, the answer is added to the product page, and the next order follows.">
      <div aria-hidden="true" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((st, i) => (
          <div key={st.k} className="flex flex-col">
            <div className="flex items-center gap-2 mb-2.5">
              <span className={`text-[14px] font-semibold ${st.hot ? "text-[#ff1616]" : "text-black"}`}>{st.k}</span>
              {i < steps.length - 1 && <span className="hidden lg:block flex-1 h-px bg-[#d9d9d9]" />}
            </div>
            <div className="flex-1">{st.art}</div>
          </div>
        ))}
      </div>
      <p aria-hidden="true" className="mt-4 flex items-center gap-2 text-[14px] text-[#6d6d6d]">
        <span className="text-[#ff1616]">↺</span> Then back to the first step, with one less reason to hesitate.
      </p>
    </div>
  );
};

const LeakCalculator = () => {
  const [visitors, setVisitors] = useState(4000);
  const [cartRate, setCartRate] = useState(3);
  const [payRate, setPayRate] = useState(30);
  const [price, setPrice] = useState(34);

  const carts = visitors * (cartRate / 100);
  const orders = carts * (payRate / 100);
  const revenue = orders * price;
  const gain = carts * (Math.min(1, payRate / 100 + 0.1) - payRate / 100) * price;

  const sliders = [
    { id: "rv", label: "Visitors a month", value: visitors, set: setVisitors, min: 500, max: 20000, step: 100, show: fmt(visitors) },
    { id: "rc", label: "Visitors who add to cart", value: cartRate, set: setCartRate, min: 1, max: 10, step: 1, show: `${cartRate}%` },
    { id: "rp", label: "Carts that reach payment", value: payRate, set: setPayRate, min: 10, max: 90, step: 5, show: `${payRate}%` },
    { id: "rpr", label: "Price of one order", value: price, set: setPrice, min: 10, max: 200, step: 2, show: `$${price}` },
  ];

  return (
    <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-5 items-stretch">
      <Reveal>
        <div className="h-full rounded-[28px] bg-white p-7 md:p-10 lg:p-12 flex flex-col justify-center gap-7 md:gap-8">
          {sliders.map((s) => {
            const pct = ((s.value - s.min) / (s.max - s.min)) * 100;
            return (
              <div key={s.id}>
                <label htmlFor={s.id} className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] md:text-[17px] text-black">{s.label}</span>
                  <b className="text-[18px] md:text-[22px] font-semibold tracking-[-0.02em] text-[#ff1616] tabular-nums">{s.show}</b>
                </label>
                <input
                  id={s.id}
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className="mt-4 w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#ff1616]"
                  style={{ background: `linear-gradient(to right, ${RED} ${pct}%, #e5e5e5 ${pct}%)` }}
                />
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div aria-live="polite" className="h-full rounded-[28px] bg-[#0d0d0d] text-white p-7 md:p-10 flex flex-col">
          <p className={`${noteClass} !text-[#8a8a8a]`}>The month</p>
          <div className="mt-6 space-y-3 text-[15px] md:text-[16px]">
            <div className="flex justify-between gap-4 text-[#bdbdbd]"><span>Carts</span><b className="font-medium text-white tabular-nums">{fmt(carts)}</b></div>
            <div className="flex justify-between gap-4 text-[#bdbdbd]"><span>Orders</span><b className="font-medium text-white tabular-nums">{fmt(orders)}</b></div>
            <div className="flex justify-between gap-4 pt-3 border-t border-white/15 text-white"><span>Revenue</span><b className="font-semibold tabular-nums">${fmt(revenue)}</b></div>
          </div>
          <div className="mt-auto pt-10">
            <p className={`${noteClass} !text-[#8a8a8a]`}>10 points better at checkout adds</p>
            <p className="mt-3 text-[52px] md:text-[72px] font-semibold leading-none tracking-[-0.05em] text-[#ff1616] tabular-nums">${fmt(gain)}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

const ProductSales = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  const practiceStyles = [
    { card: "bg-[#0d0d0d] text-white", tag: "bg-white/10 text-white", body: "text-[#bdbdbd]" },
    { card: "bg-[#ff1616] text-white", tag: "bg-white/20 text-white", body: "text-white/85" },
    { card: "bg-[#f6f6f6] text-black", tag: "bg-white text-[#ff1616]", body: "text-[#6d6d6d]" },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]">

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-10 md:pt-14 pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 xl:gap-16 items-start">
            <Reveal className="lg:pt-10">
              <h1 id="page-title" className="font-semibold tracking-[-0.04em] leading-[1.0] text-black lg:[&>span>span:first-child]:whitespace-nowrap">
                <HeroTitleLines line="Product Sales." italic="Find" rest="what the pitch forgot." compact />
              </h1>
              <p className={`${bodyClass} mt-8 max-w-[580px]`}>
                People like your product, save it for later and still don't buy. Happens all the time. Product Sales work lives in the gap between interest and buying. Three things fill it. Story. Proof. Next step.
              </p>
              <div className="mt-8">
                <PillLink to="/contact">Talk about your product</PillLink>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <GapStack />
            </Reveal>
          </div>
        </section>

        {/* ── OPEN THE FILE ── */}
        <section aria-labelledby="intro-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24 items-start">
            <Reveal>
              <h2 id="intro-heading" className={h2Class}>
                <SplitHeading line="The almost-purchase is" italic="worth" rest="studying." />
              </h2>
            </Reveal>
            <Reveal delay={120} className={`${bodyClass} space-y-6`}>
              <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
                A product page can look great and still make people do all the work. How big is it? Why does it cost more? Does it fit their life?
              </p>
              <p>
                <strong className="font-semibold text-black">Product storytelling</strong> answers all of that. Without sounding like a manual. Product promotion gets you noticed. A good product promotion strategy makes sure the second look tells people what they came to find out.
              </p>
            </Reveal>
          </div>

          <div aria-label="Three examples of real buyer questions" className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {doubts.map((d, i) => (
              <Reveal key={d.tag} delay={i * 120}>
                <article className="group h-full rounded-[28px] bg-[#f6f6f6] p-7 md:p-9 flex flex-col min-h-[220px] transition-all duration-500 hover:bg-white hover:ring-1 hover:ring-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]">
                  <span className="self-start rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#ff1616] transition-colors duration-500 group-hover:bg-[#fff1f1]">{d.tag}</span>
                  <p className="mt-auto pt-10 text-[30px] md:text-[38px] leading-[1.1] text-black">{d.question}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── TURN CLAIMS INTO ANSWERS ── */}
        <section aria-labelledby="proof-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={`${container} grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center`}>
            <Reveal className="space-y-6">
              <h2 id="proof-heading" className={h2Class}>
                <SplitHeading line="Don't just say it." italic="Show" rest="the answer." />
              </h2>
              <p className={bodyClass}>
                Say a fictional cable organizer called SLEEVE promises to tidy your desk. That earns a glance. Fine. But what fits? How does it close? Is it a pain to carry?
              </p>
              <p className={bodyClass}>
                This is where product marketing services earn their keep. Better demos. Clearer comparisons. Exact details right where doubt creeps in. Perfect Pixel Pro's approach to{" "}
                <Link to="/blog/why-choose-us" className={inlineLink}>strategy and creative storytelling</Link> starts with the question, not the asset.
              </p>
              <p className={bodyClass}>SLEEVE is made up and isn't a client project.</p>
            </Reveal>

            <Reveal delay={120}>
              <EvidenceExchange />
            </Reveal>
          </div>
        </section>

        {/* ── DRAW THE DECISION PATH ── */}
        <section aria-labelledby="path-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-24 items-end">
            <h2 id="path-heading" className={h2Class}>
              <SplitHeading line="Draw the path, then mark" italic="where" rest="people quit." />
            </h2>
            <p className={bodyClass}>
              Straight line? Hardly. People open six tabs. They ask a friend. They forget. Then they're back at midnight, on a phone. Still, draw the map. It's rough, sure. But it shows where the message went quiet, or the proof ran out, or the next step vanished. Pick a product. Pick an action. Watch what real people do.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:mt-20">
            <PathMap />
          </Reveal>

          <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24 space-y-6">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">Count an imagined thousand visitors.</h3>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                Sales funnel math sounds dull until you do it. A shop with a thousand visitors and nine sales feels like a flop. Write the steps down and it gets specific. Thirty people filled a cart. Twenty-one walked off at the payment page, maybe after spotting a shipping fee they hadn't expected.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[2] text-[#555] font-normal font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                That payment page is the cheapest hole to fix, and it's a common one. The Baymard Institute did the homework. Fifty studies, 2006 through 2025, pooled together. The answer: roughly 70 abandoned carts out of every 100. The reasons? Of those who left for something other than browsing, 40% blamed extra costs. Shipping, taxes, fees. The unglamorous stuff.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className={`${bodyClass} mb-4`}>An imagined Tuesday. Invented numbers.</p>
              <FunnelStack />
              <p className={`${bodyClass} mt-5`}>One imagined thousand people, as a funnel. Not to scale, not measured data.</p>
              <p className="mt-4 text-[14px] text-[#6d6d6d]">
                Source:{" "}
                <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener" className="underline decoration-[#d9d9d9] underline-offset-4 hover:text-[#ff1616] hover:decoration-[#ff1616]">
                  Baymard Institute, Cart Abandonment Rate Statistics
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── THE LEAK TEST ── */}
        <section aria-labelledby="calc-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
              <h2 id="calc-heading" className={h2Class}>
                <SplitHeading line="Move one number and watch the" italic="month" rest="change." />
              </h2>
              <p className={bodyClass}>
                Rough numbers are loaded. Slide them to yours and watch the last line. It's arithmetic, not a forecast.
              </p>
            </Reveal>
            <LeakCalculator />
            <Reveal className="mt-12 md:mt-16 max-w-[820px]">
              <p className="text-[19px] md:text-[24px] leading-[1.55] tracking-[-0.015em] text-black">
                Loaded numbers give you 120 carts, 36 orders and $1,224 a month. Try 4% for the cart rate. The month jumps by a third. Try 40% at checkout instead. Same jump. Two doors, one total.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── INSIDE THE WORK ── */}
        <section aria-labelledby="practice-heading" className={`${container} ${sectionY}`}>
          <Reveal className="max-w-[1100px]">
            <h2 id="practice-heading" className={h2Class}>
              <SplitHeading line="Three Product Sales problems worth solving" italic="before" rest="buying more traffic." />
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {practice.map((p, i) => {
              const st = practiceStyles[i];
              return (
                <Reveal key={p.tag} delay={i * 120}>
                  <article className={`h-full rounded-[28px] p-7 md:p-9 flex flex-col min-h-[420px] transition-transform duration-500 hover:-translate-y-1.5 ${st.card}`}>
                    <span className={`self-start rounded-full px-4 py-1.5 text-[13px] font-medium ${st.tag}`}>{p.tag}</span>
                    <div className="mt-auto pt-10">
                      <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em]">{p.title}</h3>
                      <p className={`mt-4 text-[15px] md:text-[16px] leading-[1.8] font-light ${st.body}`}>{p.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── THE WORK AFTER THE SALE ── */}
        <section aria-labelledby="loop-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="pt-24 md:pt-36 border-t border-[#ececec]">
            <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-24 items-start">
              <h2 id="loop-heading" className={h2Class}>
                <SplitHeading line="The receipt isn't the end" italic="of" rest="the conversation." />
              </h2>
              <div className="space-y-6">
                <p className={bodyClass}>
                  A Customer feedback loop starts with listening. What do buyers ask before they pay? What do they praise in reviews? What comes back in the post? Feed all of it into product pages, messaging and support. Organic growth follows when people have a real reason to recommend you. Asking them to, in a campaign, rarely counts.
                </p>
                <p className="text-[19px] md:text-[22px] leading-[1.55] tracking-[-0.01em] text-black">
                  The loop has four steps: sell, ask what almost stopped them, fix the answer you hear most, then sell again.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="mt-14 md:mt-20">
              <figure className="m-0 rounded-[28px] bg-[#f6f6f6] p-5 md:p-8">
                <LoopFlow />
              </figure>
              <p className={`${bodyClass} mt-5`}>Conceptual feedback cycle, not a claim about a client result.</p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection
          heading={<SplitHeading line="The questions buyers" italic="leave" rest="behind." />}
          note="The funnel shows where a decision stalled. It can't say why. For that, ask. What was the buyer missing?"
          aside={
            <nav aria-label="Jump to sales funnel answers" className="mt-8 pt-6 border-t border-[#dcdcdc] flex flex-col gap-3">
              {[
                { id: "faq-create-sales-funnel", label: "How to create a sales funnel" },
                { id: "faq-dropoff-reasons", label: "Why buyers drop off" },
                { id: "faq-spot-dropoff", label: "How to spot the weak step" },
              ].map((j) => (
                <button key={j.id} type="button" onClick={() => jumpToFaq(j.id)} className="group self-start text-left inline-flex items-center gap-2 text-[15px] font-medium text-black transition-colors duration-200 hover:text-[#ff1616]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#ff1616]" fill="currentColor">
                    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.5 6.6-.8Z" />
                  </svg>
                  {j.label}
                  <span aria-hidden="true" className="text-[#ff1616] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              ))}
            </nav>
          }
          faqs={faqs}
        />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-medium tracking-[-0.04em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring us the point where" italic="the" rest="buyer hesitates." plain compact />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[760px]`}>
                Get in touch. We'll go through the product, the audience and the questions your Product Sales journey leaves unanswered. For Perfect Pixel Pro, this is the last stop in our{" "}
                <Link to="/product-commercialization" className={inlineLink}>product commercialization</Link> work, after{" "}
                <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link> tests the idea and{" "}
                <Link to="/product-launch" className={inlineLink}>Product Launch</Link> finds the first buyers.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Talk through your brief</PillLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductSales;