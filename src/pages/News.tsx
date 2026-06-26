import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { newsData } from "../data/newsData";
import { blogData } from "../data/blogData";

type ContentType = "news" | "blog";

interface ContentItem {
  id: number;
  slug?: string;
  image: string;
  title: string;
  description: string;
  content: string;
  type?: ContentType;
}

interface FilterTab {
  key: string;
  label: string;
}

const filterTabs: FilterTab[] = [
  { key: "all",  label: "All"  },
  { key: "blog", label: "Blog" },
  { key: "news", label: "News" },
];

const routePrefix: Record<ContentType, string> = {
  news: "/news",
  blog: "/blog",
};

const headingByFilter: Record<string, { pre: string; accent: string }> = {
  all:  { pre: "All", accent: "Updates" },
  news: { pre: "Top", accent: "News"    },
  blog: { pre: "Our", accent: "Blog"    },
};

const taggedNews: ContentItem[]  = newsData.map((item) => ({ ...item, type: "news" as ContentType }));
const taggedBlogs: ContentItem[] = blogData.map((item) => ({ ...item, type: "blog" as ContentType }));

const interleave = (...arrays: ContentItem[][]): ContentItem[] => {
  const result: ContentItem[] = [];
  const maxLength = Math.max(...arrays.map((a) => a.length));
  for (let i = 0; i < maxLength; i++) {
    arrays.forEach((arr) => { if (arr[i]) result.push(arr[i]); });
  }
  return result;
};

const contentMap: Record<string, ContentItem[]> = {
  all:  interleave(taggedBlogs, taggedNews),
  news: taggedNews,
  blog: taggedBlogs,
};

const News = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll]           = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const activeContent = contentMap[activeFilter] ?? [];
  const visibleItems  = showAll ? activeContent : activeContent.slice(0, 4);
  const heading       = headingByFilter[activeFilter];

  const handleFilterClick = (tab: FilterTab) => {
    setActiveFilter(tab.key);
    setShowAll(false);
  };

  const handleReadMore = (item: ContentItem) => {
    if (!item.type) return;
    navigate(`${routePrefix[item.type]}/${item.slug ?? item.id}`);
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .content-fade-in { animation: contentFadeIn 0.4s ease-out; }
        @media (prefers-reduced-motion: reduce) { .content-fade-in { animation: none; } }
      `}</style>

      <Navbar />

      <section className="w-full min-h-screen bg-white">
        <div className="max-w-[1650px] mx-auto">
          <div className="px-5 md:px-10 lg:px-16 2xl:px-38 pt-10 md:pt-14 pb-20">

            {/* Heading */}
            <h1 className="text-[62px] sm:text-[80px] md:text-[98px] lg:text-[110px] leading-[0.9] tracking-[-3px] md:tracking-[-5px] lg:mb-6 sm:mb-0">
              <span className="text-black" style={{ fontWeight: 350 }}>{heading.pre} </span>
              <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>{heading.accent}</span>
            </h1>

            {/* Filter Tabs */}
            <div className="mt-10 mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-1 max-w-full overflow-x-auto no-scrollbar bg-[#f3f3f3] border border-[#e8e8e8] rounded-full p-1">
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => handleFilterClick(tab)}
                      className={`
                        whitespace-nowrap rounded-full px-5 sm:px-6 py-2 sm:py-2.5
                        text-[13px] sm:text-[14px] font-medium transition-all duration-300
                        ${isActive ? "bg-black text-white shadow-sm" : "text-black/55 hover:text-black"}
                      `}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content List */}
            <div key={activeFilter} className="content-fade-in">
              {visibleItems.length === 0 ? (
                <p className="py-10 text-[#999] text-[16px]">No content available yet.</p>
              ) : (
                visibleItems.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className="flex flex-col lg:flex-row gap-8 lg:gap-16 2xl:gap-36 py-8 border-b border-[#ececec]"
                  >
                    {/* Image */}
                    <div className="w-full lg:w-[420px] xl:w-[490px] 2xl:w-[620px] h-[260px] sm:h-[320px] lg:h-[350px] 2xl:h-[340px] flex-shrink-0 overflow-hidden rounded-[8px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 max-w-[920px] pt-2">
                      {activeFilter === "all" && item.type && (
                        <span className="text-[#ff2a2a] text-[11px] font-semibold uppercase tracking-[0.15em]">
                          {item.type}
                        </span>
                      )}

                      <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium leading-[1.05] tracking-[-1px] text-black max-w-[850px] mt-2">
                        {item.title}
                      </h2>

                      <p className="mt-4 text-[15px] md:text-[16px] leading-[1.9] text-[#7a7a7a] max-w-[760px]">
                        {item.description}
                      </p>

                      <button
                        onClick={() => handleReadMore(item)}
                        className="mt-7 group border border-black rounded-full px-6 py-2.5 text-[15px] bg-white transition-all duration-300 hover:bg-black"
                        style={{ fontWeight: 500 }}
                      >
                        <span className="text-black group-hover:text-white transition-colors">Read </span>
                        <span className="text-[#ff2a2a] group-hover:text-white transition-colors pl-0.5">more</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* See More / Show Less */}
            {activeContent.length > 4 && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="border border-[#d8d8d8] rounded-full px-8 py-3 text-[13px] font-medium text-black bg-white transition-all duration-300 hover:bg-black hover:text-white"
                >
                  {showAll ? "Show Less" : "See More"}
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;