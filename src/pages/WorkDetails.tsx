import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { works } from "../data/workData";

const LOAD_MORE = 6;

/* ─────────────────────────────────────────
   Distribute items into N columns using
   shortest-column-first so column heights
   stay as balanced as possible.
───────────────────────────────────────── */
function distribute(items: any[], n: number): any[][] {
  const cols: any[][] = Array.from({ length: n }, () => []);
  const heights: number[] = Array(n).fill(0);
  for (const item of items) {
    // estimated height ratio: video = 16:9, image = ~4:3
    const h = item.type === "video" ? 0.5625 : 0.78;
    const idx = heights.indexOf(Math.min(...heights));
    cols[idx].push(item);
    heights[idx] += h + 0.025; // +gap
  }
  return cols;
}

/* ─────────────────────────────────────────
   VideoTile
───────────────────────────────────────── */
function VideoTile({ item, fill = false }: { item: any; fill?: boolean }) {
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

/* ─────────────────────────────────────────
   ImageTile
   fill=true  → h-full + object-cover (last item)
   fill=false → h-auto (natural height, no crop)
───────────────────────────────────────── */
function ImageTile({ item, fill = false }: { item: any; fill?: boolean }) {
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
        draggable={false}
        className={fill
          ? "w-full h-full object-cover block select-none"
          : "w-full h-auto block select-none"
        }
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Column — flex column where the last item
   gets flex:1 so it fills any remaining
   space, making all columns end at the
   exact same bottom line.
───────────────────────────────────────── */
function Column({ items }: { items: any[] }) {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4" style={{ flex: 1, minWidth: 0 }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div
            key={i}
            style={isLast ? { flex: 1, minHeight: 0 } : undefined}
          >
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

/* ─────────────────────────────────────────
   MobileGrid — 2-column layout for mobile
   using the same flex+stretch trick so both
   columns end at the same bottom line.
───────────────────────────────────────── */
function MobileGrid({ items }: { items: any[] }) {
  const cols = distribute(items, 2);
  return (
    <div
      className="flex gap-2.5"
      style={{ alignItems: "stretch" }}
    >
      {cols.map((col, i) => <Column key={i} items={col} />)}
    </div>
  );
}

/* ─────────────────────────────────────────
   GalleryGrid
   Mobile:  2 columns (compact, looks great)
   Tablet:  2 columns (wider gaps)
   Desktop: 3 columns (full masonry)
───────────────────────────────────────── */
function GalleryGrid({ items }: { items: any[] }) {
  const cols2 = distribute(items, 2);
  const cols3 = distribute(items, 3);

  return (
    <>
      {/* Mobile: 2 columns */}
      <div className="sm:hidden">
        <MobileGrid items={items} />
      </div>

      {/* Tablet: 2 columns, wider gaps */}
      <div
        className="hidden sm:flex lg:hidden gap-3"
        style={{ alignItems: "stretch" }}
      >
        {cols2.map((col, i) => <Column key={i} items={col} />)}
      </div>

      {/* Desktop: 3 columns */}
      <div
        className="hidden lg:flex gap-4"
        style={{ alignItems: "stretch" }}
      >
        {cols3.map((col, i) => <Column key={i} items={col} />)}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function WorkDetails() {
  const { slug } = useParams();
  const work = works.find((w) => w.slug === slug);
  const [visible, setVisible] = useState(9);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#666]">
        Work not found
      </div>
    );
  }

  const visibleItems = work.gallery.slice(0, visible);

  return (
    <>
      <Navbar />

      <main
        className="w-full bg-white px-3 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-6 sm:pt-8 pb-20 sm:pb-24"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        <h1 className="text-[28px] sm:text-[40px] md:text-[56px] font-extrabold leading-none tracking-tight mb-6 sm:mb-10 md:mb-12">
          {work.title.startsWith("The ") ? (
            <>
              <span className="text-black">The </span>
              <span className="text-[#ff1616]">{work.title.replace(/^The\s/, "")}</span>
            </>
          ) : (
            <span className="text-black">{work.title}</span>
          )}
        </h1>

        <GalleryGrid items={visibleItems} />

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
      </main>

      <Footer />
    </>
  );
}