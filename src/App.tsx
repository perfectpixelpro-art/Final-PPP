import { BrowserRouter, Routes, Route } from "react-router-dom";

// components/ScrollToTop.tsx
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));

const News = lazy(() => import("./pages/News"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const ArticleDetails = lazy(() => import("./pages/ArticleDetails"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));

const LifeAtPPP = lazy(() => import("./pages/LifeAtPPP"));
const Career = lazy(() => import("./pages/Career"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About-Us"));
const TeamMemberDetail = lazy(() => import("./pages/Teammemberdetail"));

const SITE_URL = "https://perfectpixelpro.com";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    // Keep the canonical URL in sync with the current route.
    const href = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Work */}
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkDetails />} />

        {/* News */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetails />} />

        {/* Articles */}
        <Route path="/articles" element={<News />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />

        {/* Blogs */}
        <Route path="/blog" element={<News />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Other Pages */}
        <Route path="/life-at-ppp" element={<LifeAtPPP />} />
        <Route path="/career" element={<Career />} />
        <Route path="/team" element={<Team />} />
        {/* Culture page is disabled: src/assets/culture/* images are missing. */}
        <Route path="/about-us" element={<About />} />

        <Route path="/team/:slug" element={<TeamMemberDetail />} />

      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
