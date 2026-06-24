import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "@fontsource/archivo/300.css";
import "@fontsource/archivo/300-italic.css";
import heroVideo from "../assets/herovideo.mp4";
import heroVideo2 from "../assets/herovideo2.mp4";
import heroVideo3 from "../assets/herovideo3.mp4";
import heroVideo4 from "../assets/herovideo4.mp4";
import heroVideo5 from "../assets/herovideo.mp4";

import Hydracelt from "../assets/HydraceltVideo.mp4";
import Black from "../assets/Black3.mp4";
import GAI from "../assets/GIA_Video.mp4";

// ── Update slugs to match your actual work slugs in workData.js ──
const projects = [
  {
    video: Hydracelt,
    name: "Hydracelt",
    slug: "hydracelt",
    description:
      "Made to look as good as it performs.",
  },
  {
    video: Black,
    name: "The Black In HR",
    slug: "the-black-in-hr",
    description:
      "Identity built to carry weight.",
  },
  {
    video: heroVideo3,
    name: "The Social 99",
    slug: "the-social-99",
    description:
      "A visual world people return to.",
  },
  {
    video: heroVideo4,
    name: "SMM Hiring",
    slug: "smmhiring",
    description:
      "Great roles deserve a brand that shows it.",
  },
 
  {
    video: GAI,
    name: "Stone the Myth",
    slug: "stone-the-myth",
    description:
      "Performance-focused creative built to convert attention into action.",
  },
   {
    video: heroVideo5,
    name: "Candy Land",
    slug: "candy-land",
    description:
      "Cinematic production focused on emotional storytelling and identity.",
  },
];

function VideoBlock({
  video,
  name,
  description,
  slug,
}: {
  video: string;
  name: string;
  description: string;
  slug: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scale(1.10)";
        } else {
          el.style.transform = "scale(1)";
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // Entire card is a Link — click anywhere (video or text) navigates
    <Link
      to={`/work/${slug}`}
      className="group flex flex-col"
      style={{ fontFamily: "Archivo, sans-serif", textDecoration: "none" }}
    >
      {/* Video */}
      <div className="relative overflow-hidden rounded-[10px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[320px] xl:h-[360px] object-cover rounded-[10px]"
          style={{
            transform: "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Hover overlay — dark tint + arrow icon */}
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
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4 pt-2">
        <h3
          className="leading-[0.95] tracking-[-0.04em] text-black transition-colors duration-300 group-hover:text-[#FF1616]"
          style={{
            fontFamily: '"Archivo", serif',
            fontSize: "25px",
          }}
        >
          {name}
        </h3>

        <p className="mt-3 max-w-[500px] text-[14px] sm:text-[15px] leading-relaxed text-neutral-500">
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

        {/* Hero Heading */}
        <div className="text-center">
          <h1 className="font-semibold tracking-[-0.06em] leading-[0.9] text-black">
            <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Look like you've
            </span>

            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                already
              </span>

              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                won.
              </span>
            </span>
          </h1>
        </div>

        {/* Video Grid */}
        <div className="mt-10 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 text-black">
            {projects.map((project, index) => (
              <VideoBlock
                key={index}
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