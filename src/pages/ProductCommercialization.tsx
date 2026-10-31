import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RED, INK, container, sectionY, h2Class, bodyClass, noteClass, inlineLink,
  Accent, HeroTitleLines, SplitHeading, Arrow, Reveal, PillLink, FaqSection, usePageMeta, articleSchema, faqSchema, type Faq,
} from "../components/service/ServiceKit";

const PAGE_TITLE = "Product Commercialization: Buyer-First Guide | Perfect Pixel Pro";
const PAGE_DESCRIPTION =
  "Product commercialization from first question to first sale: customer discovery, MVP validation, value proposition and launch, with a Yeri Coffee case.";

const stages = [
  {
    label: "01 / BEFORE THE PRODUCT",
    page: { name: "Pre-Product Assistance", to: "/pre-product-assistance" },
    title: "Meet the buyer first.",
    body: (
      <>
        <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link> is where ten borrowed hours of interviews can save you a pallet of stock.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="One buyer singled out from a grid of dots">
        <g fill="#4a4a4a">
          {Array.from({ length: 36 }, (_, i) => {
            const x = 60 + (i % 9) * 20;
            const y = 34 + Math.floor(i / 9) * 24;
            return x === 160 && y === 58 ? null : <circle key={i} cx={x} cy={y} r="2.2" />;
          })}
        </g>
        <circle cx="160" cy="58" r="20" fill="none" stroke={RED} strokeOpacity=".3" />
        <circle cx="160" cy="58" r="11" fill="none" stroke={RED} strokeOpacity=".6" />
        <circle cx="160" cy="58" r="4.5" fill={RED} />
      </svg>
    ),
  },
  {
    label: "02 / AT THE LAUNCH",
    page: { name: "Product Launch", to: "/product-launch" },
    title: "Settle on the wording.",
    body: (
      <>
        <Link to="/product-launch" className={inlineLink}>Product Launch</Link> is where somebody finally has to pick the name, the pack and the date.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="Three draft lines with the chosen one ticked">
        <rect x="60" y="38" width="120" height="8" rx="4" fill="#3a3a3a" />
        <rect x="60" y="66" width="140" height="10" rx="5" fill="#ffffff" />
        <rect x="60" y="96" width="92" height="8" rx="4" fill="#3a3a3a" />
        <circle cx="222" cy="71" r="12" fill={RED} />
        <path d="M216.5 71.5 220.5 75.5 228 67.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "03 / AFTER THE FIRST ORDER",
    page: { name: "Product Sales", to: "/product-sales" },
    title: "Keep the orders coming.",
    body: (
      <>
        <Link to="/product-sales" className={inlineLink}>Product Sales</Link> takes over when the first stockist calls to ask the price.
      </>
    ),
    art: (
      <svg className="mx-auto block h-[140px] md:h-[160px] w-full" viewBox="0 0 280 140" role="img" aria-label="A calendar of days filling up with orders">
        {[0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2].map((v, i) => (
          <rect
            key={i}
            x={60 + (i % 7) * 24}
            y={38 + Math.floor(i / 7) * 24}
            width="16"
            height="16"
            rx="4"
            fill={v === 2 ? RED : v === 1 ? "#ffffff" : "none"}
            stroke={v === 0 ? "#4a4a4a" : "none"}
          />
        ))}
      </svg>
    ),
  },
];

const steps = [
  {
    word: "PREDICT",
    num: "01",
    title: "Go find the buyer.",
    body: "Imagine handing ten Brooklyn strangers a coffee each and asking what Indian coffee tastes like. Half say chai. One asks if it's even a thing. That's Customer Discovery, and the awkward answers are the useful ones. Then meet Dana, who doesn't exist. She brews on Sundays, owns a gooseneck kettle she's slightly proud of, and will pay for a bag with a story. She's a Buyer Persona. An ideal customer profile, or ICP, zooms out. It's the wider crowd, the independent cafés, grocers and gift shops that would suit a small-batch brand and wouldn't haggle it into a commodity. Target market analysis sounds grander than it is. Honestly it's a pen and a coffee sleeve, and a guess you'll correct later.",
    artifacts: "Buyer Persona / ICP / Market size",
  },
  {
    word: "PENETRATE",
    num: "02",
    title: "Shape the promise.",
    body: "Imagine one coffee, one bag and one page, sold to a few hundred people. That's a Minimum Viable Product (MVP), the version that makes you slightly nervous because it's so small. MVP validation is what follows. A kind remark costs nothing, but a second order costs real effort, so watch what buyers do. Tell a shopper it's small-batch specialty coffee. \"Mm, nice,\" she says, and has forgotten it by lunch. Tell her it's the coffee India has kept to itself and she says, \"Wait, say that again.\" That second version is the Value proposition. Competitive differentiation, then, is mostly crossing things out, every spot where you only feel different. What survives is your unique selling point (USP).",
    artifacts: "MVP / Value proposition / USP",
  },
  {
    word: "PRECISION",
    num: "03",
    title: "Make it hold up.",
    body: "Picture a stockist's new hire on day one asking, \"How do I explain this?\" Product marketing is the page that answers her. The marketing production is the building: bags, cans, a landing page, a photo day. We'll admit the strategy wobbles here, because a line that looked great in the doc goes up in 48-point type and nobody feels a thing. Price comes last, once buyers have told you what they'd pay.",
    artifacts: "Messaging / Assets / Price",
  },
];

const faqs: Faq[] = [
  {
    q: "What are the stages of product commercialization?",
    a: "Ask three founders and you'll get three numbers, because the books can't agree. We use three stages, in this order: Pre-Product Assistance, Product Launch, then Product Sales. Then a customer asks for something you didn't build, and in product commercialization that means you're back at the start by Friday.",
  },
  {
    q: "What is product marketing?",
    a: "Try this. Stand in a company's kitchen and ask five people what the product does. Expect five different answers. Product marketing is the job of fixing that. One person settles the wording, then chases sales and support until they use it too.",
  },
  {
    q: "How to price a new product?",
    a: "A bag costs you $6 to roast, pack and ship, and similar bags sell for $18. Your $6 is the floor. A café owner says she'd pay more for a bag that sells itself, which is your ceiling, so try $16 on five buyers and watch for the wince. (All invented, café owner included.)",
  },
  {
    q: "What is brand awareness?",
    a: "Ask ten shoppers at a food market to name an Indian coffee brand. Most will look at their shoes. If one says yours, buy her a coffee, because zero is the likelier result and it doesn't mean the coffee is bad, only that nobody has told a soul yet.",
  },
  {
    q: "What is the importance of brand awareness?",
    a: "Imagine asking a shopper at a farmers' market how she picked her last bag. \"Somebody mentioned it, I think?\" Then came the reviews, the website and a discount code she nearly missed. Hear a name three times and half of that detour goes away.",
  },
  {
    q: "How to build brand awareness?",
    a: "Mostly by turning up. Pick a Saturday market and one newsletter. Wear the same line, voice and logo in both until a stranger says, \"Oh, you're that Indian coffee.\" Then keep the Value proposition and a sharp USP steady, so the name doesn't fade.",
  },
];

const structuredData = [
  articleSchema("Product commercialization that starts with the buyer", PAGE_DESCRIPTION),
  faqSchema(faqs),
];

const ProductCommercialization = () => {
  usePageMeta(PAGE_TITLE, PAGE_DESCRIPTION, structuredData);

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
        <section aria-labelledby="page-title" className={`${container} pt-16 md:pt-24 pb-24 md:pb-36`}>
          <Reveal className="text-center">
            <h1 id="page-title" className="font-semibold tracking-[-0.06em] leading-[1.0] text-black">
              <HeroTitleLines line="Product commercialization" italic="that" rest="starts with the buyer." />
            </h1>
            <p className={`${bodyClass} mx-auto mt-8 md:mt-10 max-w-[640px]`}>
              Product commercialization is everything that happens after the prototype works and before a stranger pays. Honestly, it's where good products quietly die. We help you find the buyer first, then the promise, then the launch, so nobody is guessing about price or packaging.
            </p>
            <div className="mt-10 flex justify-center">
              <PillLink to="/contact">Talk through your product</PillLink>
            </div>
            <p className={`${noteClass} mt-8`}>NOT A LOUDER LAUNCH. A BETTER ORDER.</p>
          </Reveal>

        </section>

        {/* ── THE THINKING ── */}
        <section aria-labelledby="thesis-heading" className={`${container} pb-24 md:pb-36`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-24 items-end">
            <Reveal>
              <h2 id="thesis-heading" className={h2Class}>
                <SplitHeading line="A product is done when it ships. It's commercial when" italic="strangers" rest="buy it again." />
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6">
              <p className="text-[19px] md:text-[22px] leading-[1.55] text-black tracking-[-0.01em]">
                Here the buyer gets a vote on the product, the price and the pitch, in that order.
              </p>
              <p className={bodyClass}>
                We run it in three stages: <Link to="/pre-product-assistance" className={inlineLink}>Pre-Product Assistance</Link>,{" "}
                <Link to="/product-launch" className={inlineLink}>Product Launch</Link> and{" "}
                <Link to="/product-sales" className={inlineLink}>Product Sales</Link>. Our{" "}
                <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> work sits behind all three.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-24 md:mt-36 text-center">
            <span aria-hidden="true" className="block mx-auto w-px h-16 bg-[#ff1616] mb-10" />
            <p className="mx-auto max-w-[980px] font-medium text-[32px] md:text-[52px] lg:text-[60px] leading-[1.08] tracking-[-0.04em]">
              <SplitHeading line="The look comes last. The" italic="buyer" rest="comes first." />
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[460px] !text-[15px]`}>
              A logo is easy to approve. A buyer is harder to describe, which is why most plans skip her.
            </p>
          </Reveal>
        </section>

        {/* ── THREE STAGES ── */}
        <section aria-labelledby="systems-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
          <div className={container}>
            <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end">
              <h2 id="systems-heading" className={h2Class}>Each stage answers one question.</h2>
              <p className={bodyClass}>
                Three questions come up in the same order every time: who it's for, what to tell them, and whether they'll pay. Skip one and you'll pay for the answer later, usually in reprints.
              </p>
            </Reveal>

            <div aria-label="The three stages" className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
              {stages.map((s, i) => (
                <Reveal key={s.label} delay={i * 120}>
                  <div className="group">
                    <div className="rounded-[24px] bg-[#0d0d0d] px-6 flex items-center h-[220px] md:h-[240px] transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                      {s.art}
                    </div>
                    <h3 className="mt-8 text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#ff1616]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.75] text-[#6d6d6d] font-light">{s.body}</p>
                    <Link
                      to={s.page.to}
                      className="group/cta mt-6 inline-flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-black transition-colors duration-300 hover:text-[#ff1616]"
                    >
                      Explore {s.page.name}
                      <span className="w-9 h-9 rounded-full border border-[#d9d9d9] flex items-center justify-center transition-all duration-300 group-hover/cta:bg-[#ff1616] group-hover/cta:border-[#ff1616] group-hover/cta:text-white group-hover/cta:rotate-[-45deg]">
                        <Arrow />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ── THE PRACTICE ── */}
        <section aria-labelledby="process-heading" className={`${container} ${sectionY}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <h2 id="process-heading" className={h2Class}>
                <SplitHeading line="Product commercialization, from first question" italic="to" rest="first sale." />
              </h2>
              <p className={`${bodyClass} mt-8 max-w-[440px]`}>
                A launch plan is the wrong place to begin. Ten conversations and a pen are better, and what people say becomes the plan.
              </p>
              <div aria-hidden="true" className="hidden lg:flex items-center gap-3 mt-12">
                {steps.map((s, i) => (
                  <span key={s.num} className="flex items-center gap-3">
                    <span className={`text-[11px] font-medium uppercase tracking-[0.18em] ${i === 0 ? "text-[#ff1616]" : "text-[#9a9a9a]"}`}>{s.word}</span>
                    {i < steps.length - 1 && <span className="w-8 h-px bg-[#d9d9d9]" />}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <article className="group rounded-[28px] bg-[#f6f6f6] p-7 md:p-10 lg:p-12 border border-transparent transition-all duration-500 hover:bg-white hover:border-[#ececec] hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[44px] md:text-[56px] font-semibold leading-none tracking-[-0.06em] text-[#ff1616]">{s.num}</span>
                      <span className="px-4 py-2 rounded-full bg-white text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#0d0d0d] transition-colors duration-500 group-hover:bg-[#f6f6f6]">
                        {s.word}
                      </span>
                    </div>
                    <h3 className="mt-8 md:mt-10 text-[28px] md:text-[34px] font-medium leading-[1.08] tracking-[-0.035em] text-black">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] md:text-[17px] leading-[1.85] text-[#6d6d6d] font-light">{s.body}</p>
                    <p className="mt-8 pt-6 border-t border-[#e2e2e2] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
                      {s.artifacts}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── YERI COFFEE ── */}
        <section aria-labelledby="example-heading" className={`${container} ${sectionY}`}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
            <h2 id="example-heading" className={h2Class}>
              <SplitHeading line="Yeri Coffee, and a shopper" italic="who" rest="wasn't looking." />
            </h2>
            <div className={`${bodyClass} space-y-5`}>
              <p>
                Take <strong className="text-black font-semibold">Yeri Coffee</strong>, a New York brand that sells small-batch Indian specialty coffee made from beans grown in Karnataka's Western Ghats. We had a hand in three things: the brand identity and packaging, the social and content, and the launch and product strategy.
              </p>
              <p>
                <em className="not-italic text-[#ff1616] font-medium">Imagined, not a briefing:</em> somebody says, "Nobody searches for Indian coffee." Somebody else says, "So we're not selling coffee. We're introducing a place."
              </p>
            </div>
          </Reveal>

          <div aria-label="Three imagined commercialization challenges for Yeri Coffee" className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <Reveal>
              <article className="group relative h-full overflow-hidden rounded-[24px] bg-[#f6f6f6] text-black p-7 md:p-8 flex flex-col min-h-[440px] md:min-h-[500px]">
                <span className="relative z-10 self-start rounded-full px-4 py-1.5 text-[13px] font-medium bg-white text-black">Nobody searches for it</span>
                <div className="relative z-10 mt-10 text-[46px] md:text-[54px] font-semibold leading-[0.95] tracking-[-0.05em]">
                  Is that<br />even a <Accent className="font-normal">thing?</Accent>
                </div>
                <svg className="absolute -right-16 -bottom-16 w-[300px] origin-bottom-right transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 300 300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke={RED} strokeWidth="1.4">
                    {[34, 66, 98, 130, 162].map((r, i) => (
                      <circle key={r} cx="220" cy="220" r={r} strokeOpacity={1 - i * 0.18} />
                    ))}
                  </g>
                  <circle cx="220" cy="220" r="9" fill={RED} />
                </svg>
                <span className="relative mt-auto text-[19px] italic text-[#6d6d6d]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>An imagined shopper</span>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="group relative h-full overflow-hidden rounded-[24px] bg-[#ff1616] text-white p-7 md:p-8 flex flex-col min-h-[440px] md:min-h-[500px]">
                <span className="relative z-10 self-start rounded-full px-4 py-1.5 text-[13px] font-medium bg-white/15 text-white">One story, many products</span>
                <svg className="absolute left-0 top-[96px] w-full h-[170px] opacity-80 transition-opacity duration-700 group-hover:opacity-100" viewBox="0 0 320 170" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-10 104 330 64" stroke="#ffffff" strokeOpacity=".6" strokeWidth="1.2" />
                  <g fill="none" stroke="#ffffff" strokeWidth="1.4">
                    <circle cx="40" cy="98.1" r="14" />
                    <circle cx="100" cy="91" r="21" />
                    <circle cx="230" cy="75.7" r="18" />
                    <circle cx="285" cy="69.3" r="12" />
                  </g>
                  <circle cx="165" cy="83.4" r="27" fill={INK} />
                </svg>
                <div className="relative mt-auto text-[46px] md:text-[54px] font-semibold leading-[0.98] tracking-[-0.045em]">
                  One story,<br />five<br />products.
                </div>
                <span className="relative mt-6 text-[19px] italic text-white/85" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Beans to brass</span>
              </article>
            </Reveal>

            <Reveal delay={240}>
              <article className="relative h-full overflow-hidden rounded-[24px] bg-[#0d0d0d] text-white p-7 md:p-8 flex flex-col min-h-[440px] md:min-h-[500px]">
                <span className="self-start rounded-full px-4 py-1.5 text-[13px] font-medium bg-white/10 text-white">Trust before taste</span>
                <div className="mt-10 text-[34px] md:text-[40px] font-semibold leading-[1.0] tracking-[-0.04em]">
                  The Coffee India Has Been <span className="text-[#ff1616]">Hiding.</span>
                </div>
                <svg className="mt-8 h-[110px] w-[110px]" viewBox="0 0 110 110" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="55" cy="55" r="50" fill="none" stroke={RED} strokeWidth="1.6" strokeDasharray="2 6" strokeLinecap="round" />
                  <circle cx="55" cy="55" r="38" fill="none" stroke="#3a3a3a" strokeWidth="1.2" />
                  <path d="M40 56 51 67 72 44" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-auto text-[19px] italic text-[#8a8a8a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>Yeri's own headline</span>
              </article>
            </Reveal>
          </div>

          <p className="mt-10 text-[15px] md:text-[17px] leading-[1.8] text-[#7a7a7a] font-light max-w-[900px]">
            Those three challenges are our imagination at work, not a briefing. The facts about the brand come from{" "}
            <a href="https://yericoffee.com/" target="_blank" rel="noopener" className={inlineLink}>yericoffee.com</a>{" "}
            and its Instagram, where the range runs from whole beans to cans, pour-over packs and a brass tumbler. We're not claiming any results.
          </p>
        </section>

        {/* ── BRIDGE ── */}
        <section className={`${container} pb-24 md:pb-36`}>
          <Reveal className="border-t border-[#e5e5e5] pt-16 md:pt-24 text-center">
            <p className="mx-auto max-w-[960px] text-[26px] md:text-[40px] leading-[1.25] tracking-[-0.03em] font-medium">
              A product people understand still needs a face they remember. See how we think about{" "}
              <Link to="/brand-strategy" className={inlineLink}>brand strategy</Link> and{" "}
              <Link to="/branding-agency" className={inlineLink}>branding</Link>.
            </p>
            <p className={`${bodyClass} mx-auto mt-6 max-w-[460px] !text-[15px]`}>
              The look comes last in the order, yet it's the part buyers meet first.
            </p>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <FaqSection heading="Before the first sale." faqs={faqs} />

        {/* ── CLOSE ── */}
        <section aria-labelledby="close-heading" className="bg-white pt-28 md:pt-44 pb-8">
          <div className={`${container} text-center`}>
            <Reveal>
              <h2 id="close-heading" className="mx-auto font-semibold tracking-[-0.06em] leading-[1.0] text-black">
                <HeroTitleLines line="Bring the product." italic="We'll" rest="find the buyer." />
              </h2>
              <p className={`${bodyClass} mx-auto mt-8 max-w-[600px]`}>
                Come with whatever you have, even a half-finished plan or a prototype in a shoebox. Tell us who you hope will buy it, and we'll work out what product commercialization should do next.
              </p>
              <div className="mt-10 flex justify-center">
                <PillLink to="/contact">Start a conversation</PillLink>
              </div>
            </Reveal>
            <div className="mt-28 md:mt-40 pt-6 border-t border-[#e5e5e5] flex items-center justify-between gap-5">
              <span className={`${noteClass} !text-black`}>PERFECT PIXEL PRO<span className="text-[#ff1616]">.</span></span>
              <span className={noteClass}>BUILT, PIXEL BY PIXEL.</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductCommercialization;
