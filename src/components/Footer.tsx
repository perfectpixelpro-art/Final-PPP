import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const heroClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  const barClass = visible ? "opacity-100" : "opacity-0";

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white font-sans"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* Hero text block */}
      <div className="w-full px-6 md:px-12 lg:px-16 2xl:px-44 pt-16 pb-2 md:pt-24 md:pb-10 lg:pt-28 lg:pb-14">
        <div
          className={
            "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 transition-all duration-700 ease-out " +
            heroClass
          }
        >
          <h2
            className="m-0 leading-none tracking-tighter text-gray-300 "
            style={{
              fontSize: "clamp(2.2rem, 9vw, 9rem)",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Get in touch
          </h2>

          <div className="flex flex-col items-start sm:items-end gap-1 pb-4 shrink-0">
            <a
              href="mailto:Info@perfectpixelpro.com"
              className="font-medium text-sm md:text-base text-black hover:text-[#ff1616] transition-colors duration-200"
            >
              Info@perfectpixelpro.com
            </a>
            <p className="m-0 text-gray-500 text-sm sm:text-right">
              Perfect Pixel Pro, Sector 75, Phase 8b, Mohali.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={"border-t border-gray-200 px-4 sm:px-6 py-5 2xl:px-32 transition-all duration-700 ease-out " + barClass}
        style={{ transitionDelay: "500ms" }}
      >
        {/* Mobile only */}
        <div className="flex flex-col gap-4 items-center text-center sm:hidden">
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="/work" className="hover:text-[#ff1616] transition-colors duration-200">Work</a>
            <a href="/about" className="hover:text-[#ff1616] transition-colors duration-200">Life at PPP</a>
            <a href="/news" className="hover:text-[#ff1616] transition-colors duration-200">News</a>
            <a href="/contact" className="hover:text-[#ff1616] transition-colors duration-200">Contact</a>
          </div>
          <p className="m-0 text-[10px] uppercase tracking-widest text-gray-400">
            &copy;{new Date().getFullYear()} Perfect Pixel Pro. All Rights Reserved.
          </p>
        </div>

        {/* Desktop only — completely unchanged */}
        <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center gap-10 text-[16px] uppercase tracking-widest text-gray-500 pl-14">
            <a href="/work" className="hover:text-[#ff1616] transition-colors duration-200">Work</a>
           
            <a href="/news" className="hover:text-[#ff1616] transition-colors duration-200">News</a>
            <a href="/contact" className="hover:text-[#ff1616] transition-colors duration-200">Contact</a>
            <a href="/career" className="hover:text-[#ff1616] transition-colors duration-200">Career</a>
          </div>
          <p className="m-0 text-[16px] uppercase tracking-widest text-gray-500">
            &copy;{new Date().getFullYear()} Perfect Pixel Pro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;