import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";
import Hydraw from "../assets/hydraw3.jpg";
import Blackw from "../assets/black18.jpg";
import Socialw from "../assets/social22.jpg";
import Smmw from "../assets/smm6.jpg";
import Giaw from "../assets/gai7.jpg"
import Stonew from "../assets/Stone5.jpg";
import Candyw from "../assets/candyw2.jpg";



const projects = [
  {
    id: 1,
    slug: "hydracelt",
    image: Hydraw,
    title: "hydracelt",
    description:
      "Made to look as good as it performs.",
  },
  {
    id: 2,
    slug: "the-black-in-hr",
    image: Blackw,
    title: "The black in HR",
    description:
      "Identity built to carry weight.",
  },
  {
    id: 3,
    slug: "the-social-99",
    image: Socialw,
    title: "The Social 99",
    description:
      "A visual world people return to.",
  },
   
];

const gridProjects = [
    {
    id: 4,
    slug: "smm-hiring",
    image: Smmw,
    title: "SMM Hiring",
    description:
      "Great roles deserve a brand that shows it.",
  },
  {
    id: 5,
    slug: "stone-the-myth",
    image: Stonew,
    title: "Stone the Myth",
    description:
      "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    id: 6,
    slug: "candy-land",
    image: Candyw,
    title: "Candy Land",
    description:
      "Creative direction and storytelling crafted to elevate brand perception.",
  },
  {
    id: 7,
    slug: "product-launch-2",
    image: Impre4,
    title: "Product Launch",
    description:
      "Motion-driven content designed to capture attention and drive engagement.",
  },
  {
    id: 8,
    slug: "social-campaign",
    image: Impre4,
    title: "Social Campaign",
    description:
      "Strategy and execution for high-impact social media rollouts.",
  },
  {
    id: 9,
    slug: "event-coverage",
    image: Impre4,
    title: "Event Coverage",
    description:
      "Full-scale event production and content capture from start to finish.",
  },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 2;

export default function Work() {
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const shownGrid = gridProjects.slice(0, visible);
  const hasMore = visible < gridProjects.length;

  return (
    <>
      <Navbar />

      <main
        className="w-full mx-auto min-h-screen  bg-white  pt-10 md:pt-14 pb-20 px-6 md:px-12 lg:px-16 2xl:px-56"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {/* Heading */}
        <h1 className="text-[62px] sm:text-[80px] md:text-[98px] lg:text-[110px]  leading-[0.9] tracking-[-5px] lg:mb-6 sm:mb-0 tracking-tighter" >
              <span className="text-black" style={{ fontWeight: 400 }} >The </span>
              <span className="text-[#ff2a2a]" style={{ fontWeight: 900 }}>Work</span>
            </h1>

        {/* Featured Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">

          {/* Left Large Card */}
          <div className="w-full lg:w-1/2 group">
            <Link to={`/work/${projects[0].slug}`}>
              <div className="relative overflow-hidden rounded-[12px] h-[420px] sm:h-[520px] lg:h-[708px]">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-black font-semibold text-[22px] leading-tight">
                  {projects[0].title}
                </h3>

                <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                  {projects[0].description}
                </p>
              </div>

              <Link to={`/work/${projects[0].slug}`}>
               
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">            {[projects[1], projects[2]].map((p) => (
              <div key={p.id} className="group">
                <Link to={`/work/${p.slug}`}>
                  <div className="relative overflow-hidden rounded-[12px] h-[220px] sm:h-[260px] lg:h-[312px]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-black font-semibold text-[22px] leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                      {p.description}
                    </p>
                  </div>

                  <Link to={`/work/${p.slug}`}>
                   
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {shownGrid.map((project) => (
            <div key={project.id} className="group">
              <Link to={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-[12px] h-[250px] sm:h-[320px] lg:h-[360px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-black font-semibold text-[22px] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[#767676] text-[15px] leading-[24px] mt-1">
                    {project.description}
                  </p>
                </div>

                <Link to={`/work/${project.slug}`}>
                 
                </Link>
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
          
