import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { works } from "../data/workData";
// The "More Work" covers and blurbs come from the shared project source;
// this page used to hold its own `workCovers` copy of them.
import { cardBySlug, coverImageFor } from "../data/projectCards";

const LOAD_MORE = 6;

type GalleryItem = {
  type: string;
  src: string;
  poster?: string;
  /** Intrinsic pixel size, from workData.ts. Lets the browser reserve the
      right box before the bytes arrive, so lazy tiles loading in no longer
      shove the rest of the masonry column down the page. */
  w?: number;
  h?: number;
};

/** Greedy shortest-column packing for the masonry layout. */
function distribute(items: GalleryItem[], n: number): GalleryItem[][] {
  const cols: GalleryItem[][] = Array.from({ length: n }, () => []);
  const heights: number[] = Array(n).fill(0);
  for (const item of items) {
    const h = item.type === "video" ? 0.5625 : 0.78;
    const idx = heights.indexOf(Math.min(...heights));
    cols[idx].push(item);
    heights[idx] += h + 0.025;
  }
  return cols;
}

function VideoTile({ item, fill = false }: { item: GalleryItem; fill?: boolean }) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap  = wrapperRef.current;
    if (!video || !wrap) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) video.play().catch(() => {}); else video.pause(); },
      { threshold: 0.15 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden rounded-xl bg-black"
      style={fill ? { height: "100%" } : { aspectRatio: "16/9" }}
    >
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        muted loop playsInline controls={false} preload="none"
        className="w-full h-full object-cover block"
      />
    </div>
  );
}

function ImageTile({ item, fill = false }: { item: GalleryItem; fill?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden rounded-xl"
      style={fill ? { height: "100%" } : undefined}
    >
      <img
        src={item.src}
        alt=""
        loading="lazy"
        decoding="async"
        width={item.w}
        height={item.h}
        draggable={false}
        className={fill
          ? "w-full h-full object-cover block select-none"
          : "w-full h-auto block select-none"
        }
      />
    </div>
  );
}

function Column({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4" style={{ flex: 1, minWidth: 0 }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          // The same src can legitimately appear twice in one gallery, so the
          // index is part of the key rather than the whole key.
          <div key={`${item.src}-${i}`} style={isLast ? { flex: 1, minHeight: 0 } : undefined}>
            {item.type === "image"
              ? <ImageTile item={item} fill={isLast} />
              : <VideoTile item={item} fill={isLast} />
            }
          </div>
        );
      })}
    </div>
  );
}

// The layout is 2 columns below 1024px and 3 columns at or above it. This used
// to be done by rendering all three breakpoint variants and hiding two with
// `sm:hidden` / `hidden lg:flex`, which put every tile in the DOM three times -
// including three <video> elements and three IntersectionObservers per video.
// Asking matchMedia for the column count renders one layout instead.
const DESKTOP_QUERY = "(min-width: 1024px)";

const readColumnCount = (): 2 | 3 =>
  typeof window !== "undefined" && window.matchMedia?.(DESKTOP_QUERY).matches ? 3 : 2;

function useColumnCount(): 2 | 3 {
  // Read synchronously for the first render, so the correct layout is painted
  // straight away with no flash or reflow.
  const [cols, setCols] = useState<2 | 3>(readColumnCount);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setCols(mq.matches ? 3 : 2);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return cols;
}

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const columnCount = useColumnCount();
  // Packing walked the whole gallery three times on every render; now it runs
  // once, and only when the items or the breakpoint actually change.
  const cols = useMemo(() => distribute(items, columnCount), [items, columnCount]);

  return (
    <div className="flex gap-2.5 sm:gap-3 lg:gap-4" style={{ alignItems: "stretch" }}>
      {cols.map((col, i) => <Column key={i} items={col} />)}
    </div>
  );
}

export default function WorkDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(9);

  // One pass over `works` instead of a find() followed by a findIndex().
  const currentIndex = useMemo(() => works.findIndex((w) => w.slug === slug), [slug]);
  const work = currentIndex === -1 ? undefined : works[currentIndex];

  // Next 2 works after the current one, wrapping around.
  const relatedWorks = useMemo(() => {
    if (currentIndex === -1) return [];
    return [
      works[(currentIndex + 1) % works.length],
      works[(currentIndex + 2) % works.length],
    ].filter((w) => w.slug !== slug);
  }, [currentIndex, slug]);

  const visibleItems = useMemo(
    () => (work ? (work.gallery as GalleryItem[]).slice(0, visible) : []),
    [work, visible]
  );

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#666]">
        Work not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main
        className="w-full bg-white px-3 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-6 sm:pt-8 pb-20 sm:pb-24"
      >
        {/* Title */}
        <h1 className="text-[28px] sm:text-[40px] md:text-[56px] font-medium leading-none tracking-tight mb-6 sm:mb-10 md:mb-12">
          {work.title.startsWith("The ") ? (
            <>
              <span className="text-black">The </span>
              <span className="text-[#ff1616]">{work.title.slice(4)}</span>
            </>
          ) : (
            <span className="text-black">{work.title}</span>
          )}
        </h1>

        {/* Gallery */}
        <GalleryGrid items={visibleItems} />

        {/* Load More */}
        {visible < work.gallery.length && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => setVisible((prev) => prev + LOAD_MORE)}
              className="group border border-black rounded-full px-8 py-3 bg-white transition-all duration-300 hover:bg-black"
            >
              <span className="text-black group-hover:text-white transition-colors">See more </span>
              <span className="text-[#ff1616] group-hover:text-white transition-colors">work</span>
            </button>
          </div>
        )}

        {/* DIVIDER */}
        <div className="mt-16 sm:mt-24 border-t border-[#ececec]" />

        {/* More Work Section */}
        <div className="mt-12 sm:mt-20">
          <div className="flex items-end justify-between gap-2 mb-8 sm:mb-10">
            <h2 className="text-[36px] sm:text-[56px] md:text-[75px] lg:text-[90px] leading-[0.9] tracking-[-2px] sm:tracking-[-4px]">
              <span className="text-black" style={{ fontWeight: 350 }}>More </span>
              <span className="text-[#ff1616]" style={{ fontWeight: 550 }}>Work</span>
            </h2>
            <button
              onClick={() => navigate("/work")}
              className="group flex items-center gap-1 sm:gap-3 cursor-pointer mb-1 sm:mb-3 flex-shrink-0"
            >
              <span
                className="text-black text-[10px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.08em] sm:tracking-[0.15em]"
                style={{ fontWeight: 500 }}
              >
                View All
              </span>
              <span className="text-[#ff1616] text-[18px] sm:text-[28px] md:text-[36px] leading-none transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            style={{ contentVisibility: "auto", containIntrinsicSize: "1px 460px" }}
          >
            {relatedWorks.map((w) => {
              const card = cardBySlug[w.slug];
              return (
                <Link
                  key={w.slug}
                  to={`/work/${w.slug}`}
                  className="cursor-pointer group block text-inherit no-underline"
                >
                  <div className="overflow-hidden rounded-[12px]">
                    <img loading="lazy" decoding="async"
                      src={coverImageFor(w.slug) ?? w.gallery[0]?.src}
                      alt={w.title}
                      className="w-full h-[220px] sm:h-[290px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="w-[3px] min-h-[44px] bg-[#ff1616] rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[17px] sm:text-[19px] md:text-[22px] text-black leading-[1.3] font-semibold">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-[13px] sm:text-[14px] text-[#888] leading-[1.6]">
                        {card?.description ?? ""}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
