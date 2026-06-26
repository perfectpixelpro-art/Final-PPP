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
  {
    source: "Business Insider Markets",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Business Insider Markets highlights Perfect Pixel Pro's strategic North America expansion, bringing world-class creative and marketing services to new audiences...",
    url: "https://markets.businessinsider.com/news/stocks/perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries-1034033032",
  },
  {
    source: "Toronto Sun",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "The Toronto Sun covers Perfect Pixel Pro's landmark entry into the North American market, underscoring the agency's commitment to creative excellence...",
    url: "https://torontosun.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Vancouver Sun",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Vancouver Sun spotlights Perfect Pixel Pro's bold North American expansion, marking a new chapter for creative design and strategic marketing...",
    url: "https://vancouversun.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Windsor Star",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Windsor Star features Perfect Pixel Pro's expansion announcement, highlighting the agency's growing footprint across North American creative industries...",
    url: "https://windsorstar.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Barchart",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Barchart covers Perfect Pixel Pro's major expansion into North America, signaling a significant move in the creative design and marketing landscape...",
    url: "https://www.barchart.com/story/news/29643571/perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Insider Tracking",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "Insider Tracking reports on Perfect Pixel Pro's North America debut, noting the agency's reputation for premium branding and innovative marketing strategies...",
    url: "https://www.insidertracking.com/perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
  },
  {
    source: "Prince George Post",
    title: "Perfect Pixel Pro Expands to North America — Setting New Standards in Creative Design and Marketing Across Industries",
    snippet: "The Prince George Post covers Perfect Pixel Pro's expansion milestone, showcasing the agency's vision for redefining creative marketing across North America...",
    url: "https://www.princegeorgepost.com/newsfile/230449-perfect-pixel-pro-expands-to-north-america-setting-new-standards-in-creative-design-and-marketing-across-industries",
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

  // Split content into two halves — image sits between them
  const contentWords = article.content.split(" ");
  const half = Math.floor(contentWords.length / 3);
  const contentTop = contentWords.slice(0, half).join(" ");
  const contentBottom = contentWords.slice(half).join(" ");

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-12 py-10 md:py-16">

          {/* SECTION 1: Two columns — Article (left) + Press (right) */}
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">

            {/* LEFT: Full article content with image in the middle */}
            <div className="flex-1 min-w-0">

              {/* Article Title */}
              <h1 className="text-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] leading-[1.05] tracking-[-1px] font-semibold">
                {article.title}
              </h1>

              {/* Top portion of content */}
              <p className="mt-6 text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2] whitespace-pre-line">
                {contentTop}
              </p>

              {/* Image in the middle of content — same width as article col */}
              <div className="my-8 md:my-10 overflow-hidden rounded-[10px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </div>

              {/* Bottom portion of content */}
              <p className="text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2] whitespace-pre-line">
                {contentBottom}
              </p>
            </div>

            {/* RIGHT: Featured In / Press — sticky */}
            <div className="w-full lg:w-[340px] xl:w-[400px] flex-shrink-0">
              <div className="sticky top-8">

                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-black">
                  <h3 className="text-[16px] sm:text-[18px] font-bold uppercase tracking-[0.1em] text-black">Featured In</h3>
                  <span className="text-[#ff2a2a] text-[14px] sm:text-[16px] font-bold">/ Press</span>
                </div>

                <div className="flex flex-col divide-y divide-[#ececec]">
                  {pressLinks.map((press, idx) => (
                    <a
                      key={idx}
                      href={press.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-4 py-5 hover:opacity-75 transition-opacity"
                    >
                      <span className="text-[24px] font-black text-[#efefef] leading-none w-6 flex-shrink-0 pt-1">
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ff2a2a] mb-1">
                          {press.source}
                        </p>
                        <h4 className="text-[12px] sm:text-[13px] font-semibold text-black leading-[1.4] line-clamp-2">
                          {press.title}
                        </h4>
                        <p className="mt-1 text-[11px] sm:text-[12px] text-[#999] leading-[1.6] line-clamp-2">
                          {press.snippet}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#ff2a2a] font-semibold">
                          Read article <span>&rarr;</span>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#f9f9f9] rounded-[10px] border border-[#efefef]">
                  <p className="text-[12px] text-[#888] leading-relaxed mb-3">
                    Stay updated with everything Perfect Pixel Pro.
                  </p>
                  <button
                    onClick={() => navigate("/news")}
                    className="w-full bg-black text-white rounded-full py-2.5 text-[12px] font-semibold tracking-[0.05em] hover:bg-[#ff2a2a] transition-colors duration-300"
                  >
                    View All News
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-16 md:mt-24 border-t border-[#ececec]" />

          {/* SECTION 2: Top News full width */}
          <div className="mt-12 md:mt-20">
            <div className="flex items-end justify-between gap-2 mb-8 md:mb-10">
              <h2 className="text-[36px] sm:text-[56px] md:text-[75px] lg:text-[90px] leading-[0.9] tracking-[-2px] sm:tracking-[-4px]">
                <span className="text-black" style={{ fontWeight: 350 }}>Top </span>
                <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>News</span>
              </h2>
              <button
                onClick={() => navigate("/news")}
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
              {relatedNews.map((news) => (
                <div
                  key={news.id}
                  onClick={() => navigate("/news/" + news.id)}
                  className="cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-[10px]">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-[220px] sm:h-[290px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="w-[3px] min-h-[44px] bg-[#ff2a2a] rounded-full flex-shrink-0 mt-1" />
                    <h3 className="text-[17px] sm:text-[19px] md:text-[22px] text-black leading-[1.3] font-medium">
                      {news.title}
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

export default NewsDetails;