import { BrowserRouter, Routes, Route } from "react-router-dom";

// components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import WorkDetails from "./pages/WorkDetails";

import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import ArticleDetails from "./pages/ArticleDetails";
import BlogDetails from "./pages/BlogDetails";

import LifeAtPPP from "./pages/LifeAtPPP";
import Career from "./pages/Career";
import Team from "./pages/Team";
import Culture from "./pages/Culture";
import About from "./pages/About-Us";
import TeamMemberDetail from "./pages/Teammemberdetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop />
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
        <Route path="/news/:id" element={<NewsDetails />} />

        {/* Articles */}
        <Route path="/articles" element={<News />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />

        {/* Blogs */}
        <Route path="/blog" element={<News />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* Other Pages */}
        <Route path="/life-at-ppp" element={<LifeAtPPP />} />
        <Route path="/career" element={<Career />} />
        <Route path="/team" element={<Team />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/about-us" element={<About />} />

        <Route path="/team/:slug" element={<TeamMemberDetail />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
