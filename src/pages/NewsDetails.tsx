import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsData } from "../data/newsData";

const pressLinks = [
  {
    source: "Yahoo Finance",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing",
    snippet: "Perfect Pixel Pro, a rising force in creative design and strategic marketing, has officially announced its expansion into North America...",
    url: "https://ca.finance.yahoo.com/news/perfect-pixel-pro-expands-north-230700415.html",
  },
  {
    source: "The Globe and Mail",
    title: "Perfect Pixel Pro Expands to North America, Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Perfect Pixel Pro is making waves across industries with its bold move into the North American market, bringing premium design and marketing solutions...",
    url: "https://www.theglobeandmail.com/investing/markets/markets-news/Newsfile/29643572/perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries/",
  },
  {
    source: "National Post",
    title: "Perfect Pixel Pro Expands to North America — New Standards in Creative Design and Marketing",
    snippet: "The agency known for its pixel-perfect branding and bold visual storytelling has set its sights on North America, marking a major milestone...",
    url: "https://nationalpost.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Finanznachrichten",
    title: "Brand Featured: Perfect Pixel Pro Expands to North America — Creative Design and Marketing Across Industries",
    snippet: "Perfect Pixel Pro has been featured as a brand redefining creative design standards globally, with its latest North America expansion...",
    url: "https://www.finanznachrichten.de/nachrichten-2024-11/63850241-brand-featured-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries-296.htm",
  },
  {
    source: "LFPress",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing",
    snippet: "LFPress reports on Perfect Pixel Pro landmark expansion into North America, spotlighting the agency commitment to unmatched creative excellence...",
    url: "https://lfpress.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const article = newsData.find((item) => item.id === Number(id));
  if (!article) return null;

  const relatedNews = newsData.filter((item) => item.id !== article.id).slice(0, 2);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-12 py-16">

          {/* SECTION 1: Hero Image full width */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[350px] md:h-[550px] object-cover rounded-[8px]"
          />

          {/* SECTION 2: Article Content (left) + Featured In Press (right) */}
          <div className="mt-12 flex flex-col lg:flex-row gap-12 xl:gap-20">

            {/* LEFT: Article Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-black text-[32px] md:text-[52px] leading-[1.05] tracking-[-1px]">
                {article.title}
              </h1>
              <div className="mt-6 w-full">
                <p className="text-[#666] text-[16px] md:text-[17px] leading-[2] whitespace-pre-line">
                  {article.content}
                </p>
              </div>
            </div>

            {/* RIGHT: Featured In / Press */}
            <div className="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0">
              <div className="sticky top-8">

                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-black">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.1em] text-black">Featured In</h3>
                  <span className="text-[#ff2a2a] text-[16px] font-bold">/ Press</span>
                </div>

                <div className="flex flex-col divide-y divide-[#ececec]">
                  {pressLinks.map((press, idx) => (
                    <a
                      key={idx}
                      href={press.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-4 py-5 hover:opacity-90 transition-opacity"
                    >
                      <span className="text-[28px] font-black text-[#efefef] leading-none w-7 flex-shrink-0 pt-1">
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ff2a2a] mb-1">
                          {press.source}
                        </p>
                        <h4 className="text-[13px] font-semibold text-black leading-[1.4]  transition-colors line-clamp-2">
                          {press.title}
                        </h4>
                        <p className="mt-1 text-[12px] text-[#888] leading-[1.6] line-clamp-2">
                          {press.snippet}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-black font-medium">
                          Read article <span className="text-[#ff2a2a]">&rarr;</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* SECTION 3: Top News full width */}
          <div className="mt-24">
            <div className="flex items-end justify-between gap-2 mb-8">
              <h2 className="text-[42px] sm:text-[68px] md:text-[80px] lg:text-[90px] leading-[0.9] tracking-[-3px] sm:tracking-[-5px]">
                <span className="text-black" style={{ fontWeight: 350 }}>Top </span>
                <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>News</span>
              </h2>
              <button
                onClick={() => navigate("/news")}
                className="group flex items-center gap-1 sm:gap-3 cursor-pointer mb-1 sm:mb-3 flex-shrink-0"
              >
                <span className="text-black text-[10px] sm:text-[16px] uppercase tracking-[0.08em] sm:tracking-[0.15em]" style={{ fontWeight: 500 }}>
                  View All
                </span>
                <span className="text-[#ff2a2a] text-[20px] sm:text-[36px] leading-none transition-transform duration-300 group-hover:translate-x-2">
                  &rarr;
                </span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {relatedNews.map((news) => (
                <div
                  key={news.id}
                  onClick={() => navigate("/news/" + news.id)}
                  className="cursor-pointer"
                >
                  <img src={news.image} alt={news.title} className="w-full h-[360px] object-cover rounded-[8px]" />
                  <h3 className="mt-4 text-[22px] text-black">{news.title}</h3>
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

export default NewsDetails;