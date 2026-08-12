import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { works } from "../data/workData";

const LOAD_MORE = 6;

const workCovers: Record<string, { image: string; description: string }> = {
  "hydracelt": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782910990/hydraw13_sjffpf.jpg",
    description: "Made to look as good as it performs.",
  },
  "the-black-in-hr": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782910946/black18_vcywp5.jpg",
    description: "Identity built to carry weight.",
  },
  "the-social-99": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911014/Social22_a64kqq.jpg",
    description: "A visual world people return to.",
  },
  "smm-hiring": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911008/smm14_l7zocm.jpg",
    description: "Great roles deserve a brand that shows it.",
  },
  "stone-the-myth": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782911021/Stone5_qa6zyv.jpg",
    description: "Motion-driven content designed to capture attention and drive engagement.",
  },
  "candy-land": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782910958/candyw11_zyobtv.png",
    description: "Creative direction and storytelling crafted to elevate brand perception.",
  },
  "bumper-buzz": {
    image: "https://res.cloudinary.com/djzqamze6/image/upload/v1782910950/Buzzn1_rbgrpx.jpg",
    description: "Where car culture finds its voice.",
  },
};

function distribute(items: any[], n: number): any[][] {
  const cols: any[][] = Array.from({ length: n }, () => []);
  const heights: number[] = Array(n).fill(0);
  for (const item of items) {
    const h = item.type === "video" ? 0.5625 : 0.78;
    const idx = heights.indexOf(Math.min(...heights));
    cols[idx].push(item);
    heights[idx] += h + 0.025;
  }
  return cols;
}

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

function Column({ items }: { items: any[] }) {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4" style={{ flex: 1, minWidth: 0 }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div key={i} style={isLast ? { flex: 1, minHeight: 0 } : undefined}>
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

function MobileGrid({ items }: { items: any[] }) {
  const cols = distribute(items, 2);
  return (
    <div className="flex gap-2.5" style={{ alignItems: "stretch" }}>
      {cols.map((col, i) => <Column key={i} items={col} />)}
    </div>
  );
}

function GalleryGrid({ items }: { items: any[] }) {
  const cols2 = distribute(items, 2);
  const cols3 = distribute(items, 3);

  return (
    <>
      <div className="sm:hidden">
        <MobileGrid items={items} />
      </div>
      <div className="hidden sm:flex lg:hidden gap-3" style={{ alignItems: "stretch" }}>
        {cols2.map((col, i) => <Column key={i} items={col} />)}
      </div>
      <div className="hidden lg:flex gap-4" style={{ alignItems: "stretch" }}>
        {cols3.map((col, i) => <Column key={i} items={col} />)}
      </div>
    </>
  );
}

export default function WorkDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(9);

  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#666]">
        Work not found
      </div>
    );
  }

  // Next 2 works after current, wrapping around
  const currentIndex = works.findIndex((w) => w.slug === slug);
  const relatedWorks = [
    works[(currentIndex + 1) % works.length],
    works[(currentIndex + 2) % works.length],
  ].filter((w) => w.slug !== slug);

  const visibleItems = work.gallery.slice(0, visible);

  return (
    <>
      <Navbar />

      <main
        className="w-full bg-white px-3 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-6 sm:pt-8 pb-20 sm:pb-24"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {/* Title */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {relatedWorks.map((w) => {
              const cover = workCovers[w.slug];
              return (
                <div
                  key={w.slug}
                  onClick={() => navigate("/work/" + w.slug)}
                  className="cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={cover?.image ?? w.gallery[0]?.src}
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
                        {cover?.description ?? ""}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}