import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Slug/title/description/image for all seven projects live in one place now;
// this page used to carry its own copy of them.
import { featuredCards as projects, gridCards as gridProjects } from "../data/projectCards";



const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 4;

export default function Work() {
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const shownGrid = gridProjects.slice(0, visible);
  const hasMore = visible < gridProjects.length;

  return (
    <>
      <Navbar />

      <main
        className="w-full mx-auto min-h-screen  bg-white  pt-10 md:pt-14 pb-20 px-6 md:px-12 lg:px-16 2xl:px-56"
      >
        {/* Heading */}
        <h1 className="text-[62px] sm:text-[80px] md:text-[98px] lg:text-[110px] leading-[0.9] tracking-tighter lg:mb-6 sm:mb-0">
              <span className="text-black" style={{ fontWeight: 300 }} >The </span>
              <span className="text-[#ff2a2a]" style={{ fontWeight: 500 }}>Work</span>
            </h1>

        {/* Featured Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">

          {/* Left Large Card */}
          <div className="w-full lg:w-1/2 group">
            <Link to={`/work/${projects[0].slug}`}>
              <div className="relative overflow-hidden rounded-[12px] h-[420px] sm:h-[520px] lg:h-[708px]">
                {/* The page's LCP: largest element, above the fold on every
                    breakpoint. It was marked lazy, which told the browser to
                    deliberately hold back the one image it should rush. */}
                <img loading="eager" decoding="async" fetchPriority="high"
                  src={projects[0].cardImage}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-black font-medium text-[22px] leading-tight">
                  {projects[0].title}
                </h3>

                <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                  {projects[0].description}
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">            {[projects[1], projects[2]].map((p) => (
              <div key={p.id} className="group">
                <Link to={`/work/${p.slug}`}>
                  <div className="relative overflow-hidden rounded-[12px] h-[220px] sm:h-[260px] lg:h-[312px]">
                    {/* Also in the first screen, so not lazy - but without the
                        high priority that belongs to the LCP alone. */}
                    <img loading="eager" decoding="async"
                      src={p.cardImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-black font-medium text-[22px] leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                      {p.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1px 820px" }}
        >
          {shownGrid.map((project) => (
            <div key={project.id} className="group">
              <Link to={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-[12px] h-[250px] sm:h-[320px] lg:h-[360px]">
                  <img loading="lazy" decoding="async"
                    src={project.cardImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-black font-medium text-[22px] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                    {project.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() =>
                setVisible((v) =>
                  Math.min(v + LOAD_MORE_COUNT, gridProjects.length)
                )
              }
              className="
                group
                border
                border-black
                rounded-full
                px-8
                py-3
                bg-white
                transition-all
                duration-300
                hover:bg-black
              "
            >
              <span className="text-black group-hover:text-white transition-colors">
                See more{" "}
              </span>

              <span className="text-[#ff1616]">
                work
              </span>
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
          
