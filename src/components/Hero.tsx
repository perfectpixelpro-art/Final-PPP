import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    video: "https://cdn.perfectpixelpro.com/video/HydraceltVideo.webm",
    poster: "/assets/HydraceltVideo.jpg",
    name: "Hydracelt",
    slug: "hydracelt",
    description: "Made to look as good as it performs.",
  },
  {
    video: "https://cdn.perfectpixelpro.com/video/Black3.webm",
    poster: "/assets/Black3.jpg",
    name: "The Black In HR",
    slug: "the-black-in-hr",
    description: "Identity built to carry weight.",
  },

  {
    video: "https://cdn.perfectpixelpro.com/video/StoneV.webm",
    poster: "/assets/StoneV.jpg",
    name: "Stone the Myth",
    slug: "stone-the-myth",
    description: "Jewelry rooted in myth, crafted for those who wear their story.",
  },
  {
    video: "https://cdn.perfectpixelpro.com/video/candyV2.webm",
    poster: "/assets/candyV2.jpg",
    name: "Candy Land",
    slug: "candy-land",
    description: "Cinematic production focused on emotional storytelling and identity.",
  },

  {
    video: "https://cdn.perfectpixelpro.com/video/herovideo3.webm",
    poster: "/assets/herovideo3.jpg",
    name: "The Social 99",
    slug: "the-social-99",
    description: "A visual world people return to.",
  },
  {
    video: "https://cdn.perfectpixelpro.com/video/Smm3.webm",
    poster: "/assets/Smm3.jpg",
    name: "SMM Hiring",
    slug: "smm-hiring",
    description: "Great roles deserve a brand that shows it.",
  },
];

/* ------------------------------------------------------------------ *
 * Tuning
 *
 * The three numbers that govern how much media this section keeps in
 * flight. They are safe to change and need no other edits.
 * ------------------------------------------------------------------ */

/** Hard ceiling on videos buffered at once, whatever the project count. */
const MAX_ACTIVE_VIDEOS = 4;

/** A block must actually reach the viewport before it pulls video bytes. */
const NEAR_MARGIN = "0px";

/**
 * Slack before a video is released again, as a share of viewport height.
 * This is a distance, not an element - nothing is added to the DOM.
 *
 * Note this alone cannot bound memory: at ~1.5 screens either side the box
 * is about 4x the viewport, which on a tall desktop can span most of a
 * six-row grid, so few blocks ever fall outside it. MAX_ACTIVE_VIDEOS is
 * what actually caps the total, which is why the grid can grow to any
 * number of projects without this value needing to be revisited.
 */
const FAR_MARGIN = "150% 0px";

/* ------------------------------------------------------------------ *
 * Shared scroll observers
 *
 * One pair of IntersectionObservers serves every block on the page,
 * instead of each block constructing its own. `near` drives play/pause
 * and video attachment; `far` (a much larger box) drives releasing the
 * video buffer again once the block is well out of the way.
 * ------------------------------------------------------------------ */

type Handlers = {
  onNear: (inView: boolean) => void;
  onFar: (isFar: boolean) => void;
};

const registry = new WeakMap<Element, Handlers>();
let nearObserver: IntersectionObserver | undefined;
let farObserver: IntersectionObserver | undefined;

function observers() {
  if (!nearObserver || !farObserver) {
    nearObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) registry.get(entry.target)?.onNear(entry.isIntersecting);
      },
      { rootMargin: NEAR_MARGIN, threshold: 0.15 }
    );
    farObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) registry.get(entry.target)?.onFar(!entry.isIntersecting);
      },
      { rootMargin: FAR_MARGIN, threshold: 0 }
    );
  }
  return { near: nearObserver, far: farObserver };
}

/* ------------------------------------------------------------------ *
 * Active-video budget
 *
 * Insertion order in this Map is the least-recently-seen order, so the
 * entry at the front is the block the visitor scrolled away from longest
 * ago - the best one to drop when the budget is full. A block that is on
 * screen is never evicted, so the cap can be briefly exceeded rather than
 * tearing down a video somebody is watching.
 * ------------------------------------------------------------------ */

type Slot = { release: () => void; visible: boolean };

const active = new Map<Element, Slot>();

/** Take a slot for `key`, evicting the stalest off-screen video if needed. */
function claimSlot(key: Element, release: () => void) {
  active.delete(key);
  active.set(key, { release, visible: true });

  if (active.size <= MAX_ACTIVE_VIDEOS) return;

  for (const [el, slot] of active) {
    if (el === key || slot.visible) continue;
    active.delete(el);
    slot.release();
    if (active.size <= MAX_ACTIVE_VIDEOS) return;
  }
}

function releaseSlot(key: Element) {
  active.delete(key);
}

/** Mark a slot as most-recently-seen, and whether it is currently on screen. */
function touchSlot(key: Element, visible: boolean) {
  const slot = active.get(key);
  if (!slot) return;
  slot.visible = visible;
  active.delete(key);
  active.set(key, slot);
}

/** Honour the OS "reduce motion" setting: no zoom, and no video fetched at all. */
const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;

function VideoBlock({
  video,
  poster,
  name,
  description,
  slug,
  priority,
}: {
  video: string;
  poster: string;
  name: string;
  description: string;
  slug: string;
  priority: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The poster is the only thing fetched up front: a real file in /public/assets
  // (5-42 KB each). The video itself is attached once the block scrolls into
  // view, so the first screen costs two images instead of six videos.
  const [src, setSrc] = useState<string | null>(null);
  const pending = useRef(false);
  const inView = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (reducedMotion()) return;

    // Attaching the video is held back until the browser is idle, so the poster
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

    // Hand back to the budget: drop this block's video and let it re-attach
    // from scratch the next time it is scrolled to.
    const drop = () => {
      pending.current = false;
      setSrc(null);
    };

    const handlers: Handlers = {
      onNear(visible) {
        const el = videoRef.current;
        inView.current = visible;
        touchSlot(wrap, visible);

        if (visible) {
          // Schedule the fetch once per attach cycle, rather than on every
          // single scroll-in, which used to queue an idle callback each time.
          if (!pending.current) {
            pending.current = true;
            whenIdle(() => {
              if (cancelled) return;
              // The idle wait can run up to 2s late, by which point a fast
              // scroll may have carried this block back off screen. Attaching
              // then would both waste the fetch and claim a slot as "visible",
              // shielding an off-screen video from eviction.
              if (!inView.current) {
                pending.current = false;
                return;
              }
              // Taking a slot may evict the stalest off-screen video, keeping
              // at most MAX_ACTIVE_VIDEOS buffered however many projects exist.
              claimSlot(wrap, drop);
              setSrc(video);
            });
          }
          if (el) {
            // Promote to its own layer only while the block is on screen, so
            // six videos do not hold six GPU layers alive for the whole page.
            el.style.willChange = "transform";
            el.style.transform = "scale(1.10)";
            // Playback starts in the effect below, once a src is attached;
            // calling play() on a src-less <video> is a no-op.
            if (el.src) el.play().catch(() => {});
          }
        } else if (el) {
          el.style.transform = "scale(1)";
          el.style.willChange = "auto";
          el.pause();
        }
      },

      onFar(isFar) {
        // Well out of view: drop the buffered video so multi-MB streams do
        // not sit in memory for the whole session. The poster takes over
        // again, so the block looks exactly as it did before it loaded.
        if (!isFar) return;
        releaseSlot(wrap);
        drop();
      },
    };

    registry.set(wrap, handlers);
    const { near, far } = observers();
    near.observe(wrap);
    far.observe(wrap);

    return () => {
      cancelled = true;
      near.unobserve(wrap);
      far.unobserve(wrap);
      registry.delete(wrap);
      releaseSlot(wrap);
    };
  }, [video]);

  // Attach/detach the media and keep playback in step with `src`.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (src) {
      el.play().catch(() => {});
      return;
    }

    // Releasing the buffer needs the attribute gone *and* a load() call;
    // clearing `src` alone leaves the downloaded data in memory.
    if (el.getAttribute("src")) {
      el.removeAttribute("src");
      el.load();
    }
  }, [src]);

  // Browsers do extra bookkeeping to advertise cast / picture-in-picture
  // targets. These are decorative background clips, so opt out.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.disablePictureInPicture = true;
    el.setAttribute("disableremoteplayback", "");
  }, []);

  return (
    <Link
      to={`/work/${slug}`}
      className="group flex flex-col"
      style={{ textDecoration: "none" }}
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
          width={1280}
          height={720}
          aria-label={`${name} - ${description}`}
          className="w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[320px] xl:h-[360px] object-cover rounded-[10px] bg-neutral-100"
          style={{
            // `transform` is deliberately left out and driven imperatively by
            // the observer above; declaring it here too would let React's
            // style diffing overwrite the zoom mid-animation.
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
            fontSize: "25px",
            fontWeight: 400,
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
          <h1 className="font-medium tracking-[-0.06em] leading-[0.9] text-black">
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
              <span className="ml-2 text-[#FF1616] font-bold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
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
                poster={project.poster}
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
