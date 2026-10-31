// Shared building blocks for the service pages (Product Commercialization and its sub-services),
// so every service page keeps the same type scale, spacing, motion and SEO handling.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

export const RED = "#ff1616";
export const INK = "#0d0d0d";

export const container = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";
export const sectionY = "py-24 md:py-36";
export const h2Class = "text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.04em] font-medium text-black";
export const bodyClass = "text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light";
export const noteClass = "text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-[#9a9a9a]";
export const inlineLink = "underline decoration-[#ff1616] decoration-1 underline-offset-[5px] font-semibold transition-colors duration-200 hover:text-[#ff1616]";

// Hero and closing titles use the About page hero scale.
export const displayLine = "block text-[32px] sm:text-[70px] md:text-[80px] lg:text-[95px]";
export const displayAccent = "block font-normal tracking-[-0.035em] text-[38px] sm:text-[70px] md:text-[80px] lg:text-[104px]";

export type Faq = { q: string; a: string };

// The Home hero heading uses the site's default font stack (from index.css), not Archivo.
const heroSans = "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// Section heading in the Home hero pattern: a plain first line, then a second line that
// starts with one black serif italic word and ends in extra-bold red.
export const SplitHeading = ({ line, italic, rest, dark = false }: { line: string; italic: string; rest: string; dark?: boolean }) => (
  <>
    <span className="block">{line}</span>
    <span className="block">
      <span className={`italic font-normal ${dark ? "text-white" : "text-black"}`} style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.1em" }}>
        {italic}
      </span>{" "}
      <span className="text-[#ff1616] font-extrabold tracking-[-0.05em]" style={{ fontFamily: heroSans }}>{rest}</span>
    </span>
  </>
);

// Main page heading in the Home hero style: a plain first line, then one
// italic serif word followed by the rest of the line in extra-bold red.
export const HeroTitleLines = ({ line, italic, rest }: { line: string; italic: string; rest: string }) => (
  <span className="block leading-[0.9]" style={{ fontFamily: heroSans }}>
    <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">{line}</span>
    <span className="block">
      <span
        className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
      >
        {italic}
      </span>
      <span className="ml-2 text-[#ff1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
        {rest}
      </span>
    </span>
  </span>
);

// Accent words use the same italic serif as the About and Home headings.
export const Accent = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <em
    className={`italic text-[#ff1616] ${className}`}
    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
  >
    {children}
  </em>
);

export const Arrow = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className="w-[17px] flex-none transition-transform duration-300 group-hover:translate-x-1">
    <path d="M2.5 9h12M9.8 4.2 14.5 9l-4.7 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// True once the element has scrolled into view (immediately when reduced motion is on).
export const useInView = <T extends Element>(threshold = 0.12) => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

// Fades its children up the first time they scroll into view.
export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(.2,.7,.2,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Counts up to a number like "12,000" once it scrolls into view.
export const CountUp = ({ value, duration = 1400 }: { value: string; duration?: number }) => {
  const target = Number(value.replace(/[^0-9]/g, ""));
  const { ref, visible } = useInView<HTMLSpanElement>(0.4);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (prefersReducedMotion()) {
      setCurrent(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, duration]);

  return <span ref={ref} className="tabular-nums">{current.toLocaleString("en-US")}</span>;
};

export const PillLink =({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-4 h-[56px] pl-7 pr-2 rounded-full bg-[#0d0d0d] text-white text-[14px] md:text-[15px] font-medium transition-colors duration-300 hover:bg-[#ff1616]"
  >
    {children}
    <span className="w-10 h-10 rounded-full bg-white text-[#0d0d0d] flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
      <Arrow />
    </span>
  </Link>
);

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (headline: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  datePublished: "2026-10-29",
  author: { "@type": "Organization", name: "Perfect Pixel Pro" },
  publisher: { "@type": "Organization", name: "Perfect Pixel Pro", url: "https://perfectpixelpro.com" },
});

// Breadcrumb trail for a sub-service under Product Commercialization.
export const subServiceBreadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Product Commercialization", item: "https://perfectpixelpro.com/product-commercialization" },
    { "@type": "ListItem", position: 2, name, item: `https://perfectpixelpro.com${path}` },
  ],
});

// Sets the title, meta description and JSON-LD for a page, and restores them on leave.
export const usePageMeta = (title: string, description: string, structuredData: object[]) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdMeta = !meta;
    const prevDescription = meta?.content ?? "";
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    const scripts = structuredData.map((data) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      return s;
    });

    return () => {
      document.title = prevTitle;
      if (createdMeta) meta?.remove();
      else if (meta) meta.content = prevDescription;
      scripts.forEach((s) => s.remove());
    };
    // Page metadata is static per page, so this only runs on mount.
  }, []);
};

// Small "Parent / Current" trail shown above a sub-service title.
export const Breadcrumb = ({ parent, parentTo, current }: { parent: string; parentTo: string; current: string }) => (
  <nav aria-label="Breadcrumb" className="flex justify-center">
    <ol className="flex items-center gap-3 list-none m-0 p-0 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em]">
      <li>
        <Link to={parentTo} className="text-[#9a9a9a] transition-colors duration-200 hover:text-[#ff1616]">{parent}</Link>
      </li>
      <li aria-hidden="true" className="w-6 h-px bg-[#d9d9d9]" />
      <li aria-current="page" className="text-[#ff1616]">{current}</li>
    </ol>
  </nav>
);

export const FaqSection = ({ heading, faqs, note }: { heading: ReactNode; faqs: Faq[]; note?: string }) => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section aria-labelledby="faq-heading" className={`bg-[#f6f6f6] ${sectionY}`}>
      <div className={`${container} grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24`}>
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <h2 id="faq-heading" className={h2Class}>
              {heading}
            </h2>
            {note && <p className="mt-6 text-[15px] md:text-[17px] leading-[1.7] text-[#6d6d6d] font-light max-w-[340px]">{note}</p>}
          </div>
        </Reveal>

        <Reveal delay={120} className="border-t border-[#dcdcdc]">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <article key={f.q} className="border-b border-[#dcdcdc]">
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="group w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left"
                  >
                    <span className={`text-[18px] md:text-[23px] font-medium leading-snug tracking-[-0.015em] transition-colors duration-300 ${isOpen ? "text-[#ff1616]" : "text-black group-hover:text-[#ff1616]"}`}>
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative w-4 h-4 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <span className={`absolute left-0 top-1/2 w-4 h-px -translate-y-1/2 ${isOpen ? "bg-[#ff1616]" : "bg-black"}`} />
                      <span className={`absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 ${isOpen ? "bg-[#ff1616]" : "bg-black"}`} />
                    </span>
                  </button>
                </h3>
                {/* Answer stays in the DOM so it is readable by search engines when collapsed. */}
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-10 text-[15px] md:text-[17px] leading-[1.8] text-[#6d6d6d] font-light">{f.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
