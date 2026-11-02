import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cldPoster, cldVideo } from "../utils/cloudinary";




const projects = [
  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782910060/HydraceltVideo_ducvds.mp4",
    name: "Hydracelt",
    slug: "hydracelt",
    description: "Made to look as good as it performs.",
  },
  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782910937/Black3_gyveda.mp4",
    name: "The Black In HR",
    slug: "the-black-in-hr",
    description: "Identity built to carry weight.",
  },
  
  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782911024/StoneV_tq6ld8.mp4",
    name: "Stone the Myth",
    slug: "stone-the-myth",
    description: "Jewelry rooted in myth, crafted for those who wear their story.",
  },
  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782911016/candyV2_lf2tpu.mp4",
    name: "Candy Land",
    slug: "candy-land",
    description: "Cinematic production focused on emotional storytelling and identity.",
  },

  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782910986/herovideo3_rmhxmt.mp4",
    name: "The Social 99",
    slug: "the-social-99",
    description: "A visual world people return to.",
  },
  {
    video: "https://res.cloudinary.com/djzqamze6/video/upload/v1782911010/Smm3_rfka5f.mp4",
    name: "SMM Hiring",
    slug: "smm-hiring",
    description: "Great roles deserve a brand that shows it.",
  },
];

function VideoBlock({
  video,
  name,
  description,
  slug,
  priority,
}: {
  video: string;
  name: string;
  description: string;
  slug: string;
  priority: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The poster is the only thing fetched up front. The MP4 itself is attached
  // to the <video> once the block scrolls into view, so the first screen costs
  // two images instead of six videos.
  const poster = cldPoster(video);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Attaching the MP4 is held back until the browser is idle, so the poster
    // frames - one of which is the LCP - are never competing with video bytes.
    const whenIdle = (fn: () => void) => {
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
          .requestIdleCallback(fn, { timeout: 2000 });
      } else {
        setTimeout(fn, 600);
      }
    };

    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.current;
        if (entry.isIntersecting) {
          whenIdle(() => {
            if (!cancelled) setSrc(cldVideo(video));
          });
          if (el) {
            el.style.transform = "scale(1.10)";
            el.play().catch(() => {});
          }
        } else if (el) {
          el.style.transform = "scale(1)";
          el.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 }
    );

    observer.observe(wrap);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [video]);

  // Once the source is attached, start playback.
  useEffect(() => {
    if (src) videoRef.current?.play().catch(() => {});
  }, [src]);

  return (
    <Link
      to={`/work/${slug}`}
      className="group flex flex-col"
      style={{ fontFamily: "Archivo, sans-serif", textDecoration: "none" }}
    >
      <div ref={wrapRef} className="relative overflow-hidden rounded-[10px]">
        <video
          ref={videoRef}
          src={src ?? undefined}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${name} - ${description}`}
          className="w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[320px] xl:h-[360px] object-cover rounded-[10px] bg-neutral-100"
          style={{
            transform: "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
            contentVisibility: priority ? "visible" : "auto",
          }}
        />

        <div className="absolute inset-0 rounded-[10px] bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
            <svg
              className="h-5 w-5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-2">
        <h2
          className="leading-[0.95] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-[#FF1616]"
          style={{
            fontFamily: '"Archivo", serif',
            fontSize: "25px",
          }}
        >
          {name}
        </h2>

        <p className="mt-3 max-w-[500px] text-[14px] sm:text-[15px] leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white pt-10 md:pt-14">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12 min-[1280px]:px-[160px] min-[1536px]:px-12">

        <div className="text-center">
          <h1 className="font-semibold tracking-[-0.06em] leading-[0.9] text-black">
            <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Looks like you've
            </span>
            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                already
              </span>
              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                won.
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-10 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 text-black">
            {projects.map((project, index) => (
              <VideoBlock
                key={project.slug}
                priority={index < 2}
                video={project.video}
                name={project.name}
                description={project.description}
                slug={project.slug}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}