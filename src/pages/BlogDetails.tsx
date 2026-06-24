import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogData } from "../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  const navigate = useNavigate();

  const article = blogData.find(
    item => item.id === Number(id)
  );

  if (!article) return null;

  const relatedBlogs = blogData
    .filter(item => item.id !== article.id)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <section className="bg-white">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-12 py-16">

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[350px] md:h-[550px] object-cover rounded-[8px]"
          />

          <h1 className="text-black mt-12 text-[32px] md:text-[52px] leading-[1.05] tracking-[-1px]">
            {article.title}
          </h1>

          <div className="mt-6 w-full">
            <p
              className="text-[#666] text-[16px] md:text-[17px] leading-[2] whitespace-pre-line"
            >
              {article.content}
            </p>
          </div>
          <div className="mt-24">
            <div className="flex items-end justify-between gap-2 mb-8">
              {/* Left Side Heading */}
              <h1 className="text-[42px] sm:text-[68px] md:text-[80px] lg:text-[90px] leading-[0.9] tracking-[-3px] sm:tracking-[-5px] tracking-tighter">
                <span className="text-black" style={{ fontWeight: 350 }}>
                  Our{" "}
                </span>
                <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>
                  Blog
                </span>
              </h1>

              {/* Right Side View All */}
              <button
                onClick={() => navigate("/blog")}
                className="group flex items-center gap-1 sm:gap-3 cursor-pointer mb-1 sm:mb-3 flex-shrink-0"
              >
                <span
                  className="text-black text-[10px] sm:text-[16px] uppercase tracking-[0.08em] sm:tracking-[0.15em]"
                  style={{ fontWeight: 500 }}
                >
                  View All
                </span>

                <span
                  className="
                    text-[#ff2a2a]
                    text-[20px]
                    sm:text-[36px]
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              {relatedBlogs.map(item => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/blog/${item.id}`)}
                  className="cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[360px] object-cover rounded-[8px]"
                  />

                  <h3 className="mt-4 text-[22px] text-black">
                    {item.title}
                  </h3>
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