import { useEffect, useRef, useState } from "react";

interface Slide {
  label: string;
  heading: string;
  body: string;
  image: string;
}

const slides: Slide[] = [
  {
    label: "01 — Design",
    heading: "Precision in every\ndetail matters.",
    body: "A short, punchy description that supports the heading. Keep it under three lines for rhythm and breathing room in the layout.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80",
  },
  {
    label: "02 — Strategy",
    heading: "Vision without\nexecution is noise.",
    body: "Every decision is intentional. Every pixel carries weight. We build with purpose, guided by clarity and backed by research.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    label: "03 — Motion",
    heading: "Movement that\nfeels inevitable.",
    body: "Animation isn't decoration — it's communication. Transitions that guide, reveal, and delight without ever distracting.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  },
  {
    label: "04 — Systems",
    heading: "Scale without\nlosing the soul.",
    body: "Design systems that grow with you. Consistent tokens, flexible components, and a shared language across every surface.",
    image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=900&q=80",
  },
  {
    label: "05 — Launch",
    heading: "Ship fast.\nIterate faster.",
    body: "The best product is the one that reaches real users. We move with urgency and refine with obsession — always in that order.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  },
];

export default function ScrollSection(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = (): void => {
      const { top } = container.getBoundingClientRect();
      // scrollable distance = slides * 50vh (the non-viewport portion)
      const scrollable = slides.length * window.innerHeight * 0.5;
      const scrolled = Math.max(0, -top);
      const progress = Math.min(scrolled / scrollable, 1);
      const index = Math.min(
        Math.floor(progress * slides.length),
        slides.length - 1
      );
      setActiveIndex((prev: number) => {
        if (prev !== index) {
          setAnimating(true);
          setTimeout(() => setAnimating(false), 50);
        }
        return index;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slide: Slide = slides[activeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap');
        .scroll-section * { font-family: 'Archivo', sans-serif; }

        .text-enter {
          animation: textIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .image-enter {
          animation: imageIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes textIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imageIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .corner-tl, .corner-br {
          position: absolute; width: 24px; height: 24px;
        }
        .corner-tl::before, .corner-tl::after,
        .corner-br::before, .corner-br::after {
          content: ''; position: absolute; background: #ff1616;
        }
        .corner-tl { top: 16px; left: 16px; }
        .corner-tl::before { top: 0; left: 0; width: 24px; height: 1px; }
        .corner-tl::after  { top: 0; left: 0; width: 1px; height: 24px; }
        .corner-br { bottom: 16px; right: 16px; }
        .corner-br::before { bottom: 0; right: 0; width: 24px; height: 1px; }
        .corner-br::after  { bottom: 0; right: 0; width: 1px; height: 24px; }

        .scroll-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);  opacity: 0.25; }
          50%       { transform: translateY(5px); opacity: 0.7; }
        }

        /* ── Mobile: stack vertically ── */
        @media (max-width: 767px) {
          .ss-wrapper { flex-direction: column !important; }
          .ss-text {
            width: 100% !important;
            height: 55vh !important;
            border-right: none !important;
            border-bottom: 0.5px solid rgba(255,255,255,0.05);
            padding: 32px 24px 24px !important;
            justify-content: center !important;
          }
          .ss-image {
            width: 100% !important;
            height: 45vh !important;
          }
          .ss-hide { display: none !important; }
          .ss-heading { font-size: 26px !important; line-height: 1.2 !important; }
          .ss-body { font-size: 13px !important; }
          .ss-counter { bottom: 14px !important; right: 16px !important; }
          .ss-hint { bottom: 14px !important; left: 24px !important; }
        }

        /* ── Tablet ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ss-text { padding: 40px 36px !important; }
          .ss-heading { font-size: 30px !important; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="scroll-section bg-black mt-10"
        style={{ height: `calc(100vh + ${slides.length * 50}vh)` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="ss-wrapper flex h-full w-full">

            {/* ── LEFT — Text (55% width, image gets 45%) ── */}
            <div className="ss-text relative flex w-[55%] flex-col justify-center border-r border-white/5 px-14 py-12 xl:px-20">

              {/* Step dots */}
              <div className="mb-8 flex gap-[6px]">
                {slides.map((_: Slide, j: number) => (
                  <div
                    key={j}
                    className="h-[2px] w-5 transition-all duration-500"
                    style={{
                      background:
                        j === activeIndex ? "#ff1616"
                        : j < activeIndex  ? "#2a2a2a"
                        : "#1a1a1a",
                    }}
                  />
                ))}
              </div>

              {/* Animated content */}
              <div key={activeIndex} className={animating ? "" : "text-enter"}>
                {/* Label */}
                <div
                  className="mb-4 text-[11px] font-medium tracking-[0.2em] uppercase"
                  style={{ color: "#ff1616" }}
                >
                  {slide.label}
                </div>

                {/* Heading — bigger than before */}
                <h2
                  className="ss-heading mb-5 font-semibold leading-[1.12] text-white"
                  style={{ whiteSpace: "pre-line", fontSize: "clamp(32px, 3.5vw, 52px)" }}
                >
                  {slide.heading}
                </h2>

                {/* Red divider */}
                <div className="mb-5 h-px w-8" style={{ background: "#ff1616" }} />

                {/* Body */}
                <p
                  className="ss-body max-w-[420px] font-light leading-[1.85] text-white/45"
                  style={{ fontSize: "clamp(14px, 1.1vw, 16px)" }}
                >
                  {slide.body}
                </p>
              </div>

              {/* Scroll hint */}
              {activeIndex < slides.length - 1 && (
                <div className="ss-hint absolute bottom-10 left-14 flex items-center gap-3 xl:left-20">
                  <div className="scroll-bounce flex flex-col items-center gap-[3px]">
                    <div className="h-[14px] w-px bg-white/20" />
                    <div className="h-[6px] w-px bg-white/40" />
                  </div>
                  <span className="text-[10px] tracking-[0.15em] text-white/20 uppercase">
                    Scroll to continue
                  </span>
                </div>
              )}

              {/* Counter */}
              <div className="ss-counter absolute bottom-10 right-6 text-[10px] tracking-[0.12em] text-white/15 uppercase">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>
            </div>

            {/* ── RIGHT — Image (45% width — smaller than before) ── */}
            <div className="ss-image relative w-[45%] overflow-hidden bg-[#080808] ">
              <div className="corner-tl ss-hide" />
              <div className="corner-br ss-hide" />

              <div key={activeIndex} className="image-enter h-full w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="h-full w-full object-cover"
                  style={{ filter: "brightness(0.72) contrast(1.05)" }}
                />
                {/* Subtle left-edge red tint blending into text side */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(247,13,26,0.07) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Vertical label */}
              <div
                className="ss-hide pointer-events-none absolute right-4 top-1/2 z-10 text-[9px] tracking-[0.25em] text-white/15 uppercase"
                style={{ transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center" }}
              >
                {slide.label.split("—")[1]?.trim()}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
