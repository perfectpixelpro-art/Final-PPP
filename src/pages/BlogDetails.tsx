import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogMeta, findBlogMeta, loadBlogContent } from "../data/blogData";

function splitContent(text: string) {
  const lines = text.split('\n');
  // Place the image right after the 5th non-empty paragraph/line.
  const PARAS_BEFORE_IMAGE = 5;
  let count = 0;
  let splitAt = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() !== '') {
      count++;
      if (count === PARAS_BEFORE_IMAGE) {
        splitAt = i + 1;
        break;
      }
    }
  }
  return {
    contentTop: lines.slice(0, splitAt).join('\n'),
    contentBottom: lines.slice(splitAt).join('\n'),
  };
}

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={i} className="h-3" />;

    // Numbered heading: "1. ..." or "2. ..."
    if (/^\d+[\.)]\s+\S/.test(trimmed)) {
      return <p key={i} className="font-bold text-black text-[15px] sm:text-[16px] md:text-[17px] leading-[2] mt-2">{trimmed}</p>;
    }

    // "Label: longer sentence" — bold only the label part
    const colonMatch = trimmed.match(/^([^:]{1,50}):\s(.{20,})$/);
    if (colonMatch) {
      const labelWords = colonMatch[1].trim().split(/\s+/).length;
      if (labelWords <= 6) {
        return (
          <p key={i} className="text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2]">
            <strong className="text-black font-semibold">{colonMatch[1]}:</strong>{' '}{colonMatch[2]}
          </p>
        );
      }
    }

    // Subheading: short line, starts uppercase, not a full sentence
    if (trimmed.length <= 80 && /^[A-Z]/.test(trimmed) && !trimmed.endsWith('.') && trimmed.split(' ').length <= 10) {
      return <p key={i} className="font-bold text-black text-[15px] sm:text-[16px] md:text-[17px] leading-[2] mt-4">{trimmed}</p>;
    }

    return <p key={i} className="text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2]">{trimmed}</p>;
  });
}

const BlogDetails = () => {
  const { slug } = useParams();

  // ScrollToTop in App.tsx already jumps to the top on every route change.
  // This used to smooth-scroll on top of that, so the two fought each other.
  // It now only runs when the page is deep-linked mid-scroll.
  useEffect(() => {
    if (window.scrollY !== 0) window.scrollTo(0, 0);
  }, [slug]);

  // Metadata is tiny and already loaded; only the body is fetched per post.
  const article = findBlogMeta(slug);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setContent(null);
    loadBlogContent(slug).then((text) => {
      if (!cancelled) setContent(text);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Parsing runs three regexes over every line of a ~9,000 character article,
  // so keep the result until the article actually changes.
  const parsed = useMemo(
    () => (content ? splitContent(content) : null),
    [content]
  );
  const rendered = useMemo(
    () =>
      parsed
        ? { top: renderContent(parsed.contentTop), bottom: renderContent(parsed.contentBottom) }
        : null,
    [parsed]
  );

  // An unknown slug used to render nothing at all - a blank white page that
  // reads as a broken site to visitors and as a soft 404 to crawlers.
  if (!article) {
    return (
      <>
        <Navbar />
        <section className="bg-white">
          <div className="max-w-[1650px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-24 md:py-32 text-center">
            <h1 className="text-black text-[28px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-1px] font-semibold">
              That post isn&rsquo;t here
            </h1>
            <p className="mt-4 text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2]">
              It may have been moved or renamed.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-block bg-black text-white rounded-full px-8 py-3 text-[13px] font-semibold tracking-[0.05em] hover:bg-[#ff2a2a] transition-colors duration-300"
            >
              View All Posts
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const relatedBlogs = blogMeta.filter((item) => item.slug !== article.slug).slice(0, 2);
  const sidebarBlogs = blogMeta.filter((item) => item.slug !== article.slug);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-12 py-10 md:py-16">

          {/* SECTION 1: Two columns — Article (left) + Sidebar (right) */}
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">

            {/* LEFT: Article content */}
            <div className="flex-1 min-w-0">

              <h1 className="text-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] leading-[1.05] tracking-[-1px] font-semibold">
                {article.title}
              </h1>

              <div className="mt-6 space-y-1">
                {rendered?.top}
              </div>

              <div className="my-8 md:my-10 overflow-hidden rounded-[10px]">
                <img loading="lazy" decoding="async"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[220px] 2xl:h-[500px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </div>

              <div className="space-y-1">
                {rendered?.bottom}
              </div>
            </div>

            {/* RIGHT: Sidebar — all blogs */}
            <div className="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0">
              <div className="sticky top-8">

                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-black">
                  <h3 className="text-[16px] sm:text-[18px] font-bold uppercase tracking-[0.1em] text-black">Our</h3>
                  <span className="text-[#ff2a2a] text-[14px] sm:text-[16px] font-bold">/ Blog</span>
                </div>

                <div className="flex flex-col divide-y divide-[#ececec]">
                  {sidebarBlogs.map((blog, idx) => (
                    <Link
                      key={blog.slug}
                      to={`/blog/${blog.slug}`}
                      className="group flex gap-4 py-5 cursor-pointer hover:opacity-75 transition-opacity"
                    >
                      <span className="text-[24px] font-black text-[#efefef] leading-none w-6 flex-shrink-0 pt-1">
                        {idx + 1}
                      </span>
                      <div className="flex flex-row gap-3 flex-1 min-w-0">
                        <img loading="lazy" decoding="async"
                          src={blog.image}
                          alt={blog.title}
                          className="w-[70px] h-[70px] object-cover rounded-[6px] flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[12px] sm:text-[13px] font-semibold text-black leading-[1.4] line-clamp-2">
                            {blog.title}
                          </h4>
                          <p className="mt-1 text-[11px] sm:text-[12px] text-[#999] leading-[1.6] line-clamp-2">
                            {blog.description}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#ff2a2a] font-semibold">
                            Read post <span>&rarr;</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#f9f9f9] rounded-[10px] border border-[#efefef]">
                  <p className="text-[12px] text-[#888] leading-relaxed mb-3">
                    Explore all our insights, tips, and stories.
                  </p>
                  <Link
                    to="/blog"
                    className="block text-center w-full bg-black text-white rounded-full py-2.5 text-[12px] font-semibold tracking-[0.05em] hover:bg-[#ff2a2a] transition-colors duration-300"
                  >
                    View All Posts
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-16 md:mt-24 border-t border-[#ececec]" />

          {/* SECTION 2: Related blogs full width */}
          <div className="mt-12 md:mt-20">
            <div className="flex items-end justify-between gap-2 mb-8 md:mb-10">
              <h2 className="text-[36px] sm:text-[56px] md:text-[75px] lg:text-[90px] leading-[0.9] tracking-[-2px] sm:tracking-[-4px]">
                <span className="text-black" style={{ fontWeight: 350 }}>Our </span>
                <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>Blog</span>
              </h2>
              <Link
                to="/blog"
                className="group flex items-center gap-1 sm:gap-3 cursor-pointer mb-1 sm:mb-3 flex-shrink-0"
              >
                <span className="text-black text-[10px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.08em] sm:tracking-[0.15em]" style={{ fontWeight: 500 }}>
                  View All
                </span>
                <span className="text-[#ff2a2a] text-[18px] sm:text-[28px] md:text-[36px] leading-none transition-transform duration-300 group-hover:translate-x-2">
                  &rarr;
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="cursor-pointer group block"
                >
                  <div className="overflow-hidden rounded-[10px]">
                    <img loading="lazy" decoding="async"
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[220px] sm:h-[290px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="w-[3px] min-h-[44px] bg-[#ff2a2a] rounded-full flex-shrink-0 mt-1" />
                    <h3 className="text-[17px] sm:text-[19px] md:text-[22px] text-black leading-[1.3] font-medium">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;