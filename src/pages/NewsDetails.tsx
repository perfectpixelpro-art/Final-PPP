import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
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




/* Hoisted out of the render path: these are compiled once per chunk instead of
   on every pass over every line of the article. */
const NUMBERED_HEADING = /^\d+[.)]\s+\S/;
const LABELLED_LINE = /^([^:]{1,50}):\s(.{20,})$/;
const WHITESPACE = /\s+/;

const PARA_CLASS = "text-[#555] text-[15px] sm:text-[16px] md:text-[17px] leading-[2]";
const HEADING_CLASS = "font-bold text-black text-[15px] sm:text-[16px] md:text-[17px] leading-[2]";

// Place the image right after the 5th non-empty paragraph/line.
const PARAS_BEFORE_IMAGE = 5;

/**
 * Split the article into the lines above and below the inline image at a clean
 * paragraph boundary, so the image never cuts between a heading and its body.
 * The text is split on newlines exactly once and both halves stay as arrays -
 * the old version re-joined them only for `renderContent` to split them again.
 */
function splitContent(text: string) {
  const lines = text.split('\n');
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
    topLines: lines.slice(0, splitAt),
    bottomLines: lines.slice(splitAt),
  };
}

function renderLines(lines: string[], keyPrefix: string) {
  return lines.map((line, i) => {
    const key = `${keyPrefix}-${i}`;
    const trimmed = line.trim();
    if (!trimmed) return <div key={key} className="h-3" />;

    // Numbered heading: "1. ..." or "2. ..."
    if (NUMBERED_HEADING.test(trimmed)) {
      return <p key={key} className={`${HEADING_CLASS} mt-2`}>{trimmed}</p>;
    }

    // "Label: longer sentence" — bold only the label part
    const colonMatch = trimmed.match(LABELLED_LINE);
    if (colonMatch) {
      const labelWords = colonMatch[1].trim().split(WHITESPACE).length;
      if (labelWords <= 6) {
        return (
          <p key={key} className={PARA_CLASS}>
            <strong className="text-black font-semibold">{colonMatch[1]}:</strong>{' '}{colonMatch[2]}
          </p>
        );
      }
    }

    // Subheading: short line, starts uppercase, not a full sentence
    if (trimmed.length <= 80 && trimmed.charCodeAt(0) >= 65 && trimmed.charCodeAt(0) <= 90 && !trimmed.endsWith('.') && trimmed.split(' ').length <= 10) {
      return <p key={key} className={`${HEADING_CLASS} mt-4`}>{trimmed}</p>;
    }

    return <p key={key} className={PARA_CLASS}>{trimmed}</p>;
  });
}

const NewsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ScrollToTop in src/App.tsx already resets the scroll position on every
  // route change; a second, smooth scroll here fought with it.

  const article = useMemo(
    () => newsData.find((item) => item.slug === slug || item.id === Number(slug)),
    [slug]
  );

  // The whole article body is re-parsed line by line and turned into elements.
  // Keyed on the article so it happens once per article instead of once per
  // render (every parent state change used to redo the full pass).
  const body = useMemo(() => {
    if (!article) return null;
    const { topLines, bottomLines } = splitContent(article.content);
    return {
      top: renderLines(topLines, 't'),
      bottom: renderLines(bottomLines, 'b'),
    };
  }, [article]);

  if (!article || !body) return null;

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
              <div className="mt-6 space-y-1">
                {body.top}
              </div>

              {/* Image in the middle of content — same width as article col */}
              <div className="my-8 md:my-10 overflow-hidden rounded-[10px]">
                <img loading="lazy" decoding="async"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </div>

              {/* Bottom portion of content */}
              <div className="space-y-1">
                {body.bottom}
              </div>
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

        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsDetails;