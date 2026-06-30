import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogData } from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const article = blogData.find((item) => item.slug === slug);
  if (!article) return null;

  const relatedBlogs = blogData.filter((item) => item.slug !== article.slug).slice(0, 2);
  const sidebarBlogs = blogData.filter((item) => item.slug !== article.slug);

  const contentWords = article.content.split(" ");
  const half = Math.floor(contentWords.length / 3);
  const contentTop = contentWords.slice(0, half).join(" ");
  const contentBottom = contentWords.slice(half).join(" ");

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

              <p className="mt-6 text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2] whitespace-pre-line">
                {contentTop}
              </p>

              <div className="my-8 md:my-10 overflow-hidden rounded-[10px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[220px] 2xl:h-[500px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </div>

              <p className="text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2] whitespace-pre-line">
                {contentBottom}
              </p>
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
                    <div
                      key={blog.slug}
                      onClick={() => navigate(`/blog/${blog.slug}`)}
                      className="group flex gap-4 py-5 cursor-pointer hover:opacity-75 transition-opacity"
                    >
                      <span className="text-[24px] font-black text-[#efefef] leading-none w-6 flex-shrink-0 pt-1">
                        {idx + 1}
                      </span>
                      <div className="flex flex-row gap-3 flex-1 min-w-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-[70px] h-[70px] object-cover rounded-[6px] flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[12px] sm:text-[13px] font-semibold text-black leading-[1.4] line-clamp-2">
                            {blog.title}
                          </h4>
                          <p className="mt-1 text-[11px] sm:text-[12px] text-[#999] leading-[1.6] line-clamp-2">
                            {blog.content.slice(0, 80) + "..."}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#ff2a2a] font-semibold">
                            Read post <span>&rarr;</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#f9f9f9] rounded-[10px] border border-[#efefef]">
                  <p className="text-[12px] text-[#888] leading-relaxed mb-3">
                    Explore all our insights, tips, and stories.
                  </p>
                  <button
                    onClick={() => navigate("/blog")}
                    className="w-full bg-black text-white rounded-full py-2.5 text-[12px] font-semibold tracking-[0.05em] hover:bg-[#ff2a2a] transition-colors duration-300"
                  >
                    View All Posts
                  </button>
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
              <button
                onClick={() => navigate("/blog")}
                className="group flex items-center gap-1 sm:gap-3 cursor-pointer mb-1 sm:mb-3 flex-shrink-0"
              >
                <span className="text-black text-[10px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.08em] sm:tracking-[0.15em]" style={{ fontWeight: 500 }}>
                  View All
                </span>
                <span className="text-[#ff2a2a] text-[18px] sm:text-[28px] md:text-[36px] leading-none transition-transform duration-300 group-hover:translate-x-2">
                  &rarr;
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedBlogs.map((blog) => (
                <div
                  key={blog.slug}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-[10px]">
                    <img
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
                </div>
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