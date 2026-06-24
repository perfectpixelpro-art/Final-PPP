import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Img1 from "../assets/culture/culture1.png";
import Img2 from "../assets/culture/culture2.png";
import Img3 from "../assets/culture/culture3.png";
import Img4 from "../assets/culture/culture4.png";
import Img5 from "../assets/culture/culture1.png";
import Img6 from "../assets/culture/culture2.png";
import Img7 from "../assets/culture/culture3.png";
import Img8 from "../assets/culture/culture4.png";
import Img9 from "../assets/culture/culture1.png";
import Img10 from "../assets/culture/culture2.png";
import Img11 from "../assets/culture/culture3.png";
import Img12 from "../assets/culture/culture4.png";
import Img13 from "../assets/culture/culture1.png";
import Img14 from "../assets/culture/culture2.png";


const galleryImages = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,
  Img9, Img10, Img11, Img12, Img13, Img14,
];

/* ---------------------------------------- */
/* Size rhythm — mobile cycle of 3,          */
/* desktop/laptop cycle of 7                 */
/* ---------------------------------------- */

const mobilePattern = [
  { span: "col-span-2", aspect: "aspect-[16/9]" }, // hero
  { span: "col-span-1", aspect: "aspect-square" }, // small
  { span: "col-span-1", aspect: "aspect-square" }, // small
];

const desktopPattern = [
  { span: "lg:col-span-3", aspect: "lg:aspect-[4/3]" },  // large
  { span: "lg:col-span-3", aspect: "lg:aspect-[4/3]" },  // large
  { span: "lg:col-span-2", aspect: "lg:aspect-square" }, // small
  { span: "lg:col-span-2", aspect: "lg:aspect-square" }, // small
  { span: "lg:col-span-2", aspect: "lg:aspect-square" }, // small
  { span: "lg:col-span-3", aspect: "lg:aspect-[21/9]" }, // wide
  { span: "lg:col-span-3", aspect: "lg:aspect-[21/9]" }, // wide
];

const getTileClasses = (index: number) => {
  const m = mobilePattern[index % mobilePattern.length];
  const d = desktopPattern[index % desktopPattern.length];
  return `${m.span} ${d.span} ${m.aspect} ${d.aspect}`;
};

/* ---------------------------------------- */
/* Single photo tile                         */
/* ---------------------------------------- */

interface GalleryItemProps {
  image: string;
  index: number;
  onOpen: (index: number) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, index, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), (index % 7) * 70);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [index]);

  return (
    <div
      ref={ref}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(index);
      }}
      aria-label={`Open culture photo ${index + 1}`}
      className={`
        relative
        ${getTileClasses(index)}
        overflow-hidden
        rounded-[10px]
        lg:rounded-[16px]
        cursor-pointer
        group
        transition-all
        duration-500
        ease-out
        motion-reduce:transition-none
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        active:scale-[0.98]
        lg:active:scale-100
        lg:hover:-translate-y-1
        lg:hover:shadow-[0_24px_50px_-18px_rgba(0,0,0,0.4)]
      `}
    >
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.04] to-black/[0.09] animate-pulse" />
      )}

      <img
        src={image}
        alt={`Culture ${index + 1}`}
        onLoad={() => setLoaded(true)}
        className={`
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          ease-out
          lg:group-hover:scale-[1.1]
          select-none
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
        loading="lazy"
      />

      

      {/* Desktop — fade-in frame */}
      <div
        className="
          hidden lg:block
          absolute inset-0
          ring-1 ring-inset ring-white/0
          group-hover:ring-white/15
          rounded-[16px]
          transition-all duration-500
        "
      />

      {/* Desktop — gradient + caption on hover */}
      <div
        className="
          hidden lg:block
          absolute inset-0
          bg-gradient-to-t from-black/55 via-black/0 to-black/0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
      />

      <div
        className="
          hidden lg:flex
          absolute inset-0 items-end justify-between p-4
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500
        "
      >
        <span className="text-white text-[11px] font-mono tracking-[0.15em]">
          
        </span>
        <span className="flex items-center gap-1.5 text-white text-[11px] font-medium uppercase tracking-[0.15em]">
          View
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
};

/* ---------------------------------------- */
/* Thumbnail filmstrip — active = bigger &   */
/* brighter, the rest = smaller & dimmer     */
/* ---------------------------------------- */

interface ThumbnailStripProps {
  images: string[];
  index: number;
  onSelect: (i: number) => void;
}

const ThumbnailStrip: React.FC<ThumbnailStripProps> = ({ images, index, onSelect }) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <div
      className="scrollbar-hide flex max-w-[94vw] items-center gap-2 overflow-x-auto px-2 sm:max-w-[80vw] sm:gap-2.5"
      onClick={(e) => e.stopPropagation()}
    >
      {images.map((img, i) => {
        const isActive = i === index;
        return (
          <button
            key={i}
            ref={isActive ? activeRef : null}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={isActive}
            className={`
              relative flex-shrink-0 overflow-hidden rounded-lg
              transition-all duration-300 ease-out
              ${
                isActive
                  ? "h-14 w-14 opacity-100 ring-2 ring-white sm:h-[68px] sm:w-[68px]"
                  : "h-10 w-10 opacity-40 hover:opacity-70 sm:h-12 sm:w-12"
              }
            `}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        );
      })}
    </div>
  );
};

/* ---------------------------------------- */
/* Lightbox                                  */
/* ---------------------------------------- */

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onNavigate }) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors p-2 z-10"
        aria-label="Close"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
        </svg>
      </button>

      <span className="absolute top-5 left-5 sm:top-6 sm:left-6 text-white/50 text-[11px] font-mono tracking-[0.15em] z-10">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </span>

      {/* Main image area — takes the remaining space above the filmstrip */}
      <div className="relative flex flex-1 items-center justify-center px-3 sm:px-6 min-h-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="hidden sm:flex absolute left-4 lg:left-8 items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors z-10"
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <img
          key={index}
          src={images[index]}
          alt={`Culture ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-[92vw] sm:max-w-[80vw] object-contain rounded-md animate-[lightboxIn_0.3s_cubic-bezier(0.16,1,0.3,1)]"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="hidden sm:flex absolute right-4 lg:right-8 items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors z-10"
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Thumbnail filmstrip — active thumbnail is bigger & brighter, the rest dimmer & smaller */}
      <div className="flex shrink-0 justify-center pb-5 pt-3 sm:pb-7 sm:pt-4">
        <ThumbnailStrip images={images} index={index} onSelect={onNavigate} />
      </div>
    </div>
  );
};

/* ---------------------------------------- */
/* Page                                       */
/* ---------------------------------------- */

const Culture: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <Navbar />

      <section className="w-full bg-white">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 py-16 md:py-20">

          {/* Heading */}
          <h1
            className="
              text-[48px]
              sm:text-[80px]
              md:text-[98px]
              lg:text-[110px]
              leading-[0.9]
              tracking-[-2px]
              md:tracking-[-5px]
              mb-8
              md:mb-12
            "
          >
            <span className="text-black pr-3 md:pr-4" style={{ fontWeight: 350 }}>
              Our
            </span>
            <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>
              Culture
            </span>
          </h1>

          {/* Rhythm Gallery: mobile cycle of 3, desktop/laptop cycle of 7 */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
            {galleryImages.map((image, index) => (
              <GalleryItem key={index} image={image} index={index} onOpen={setActiveIndex} />
            ))}
          </div>

        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}

      <Footer />
    </>
  );
};

export default Culture;