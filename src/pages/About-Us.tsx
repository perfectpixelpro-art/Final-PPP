import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";
import T1 from "../assets/T1.jpg";
import Hydraceltw from "../assets/hydraw7.jpg";
import Blackw from "../assets/black7.jpg";
import Socialw from "../assets/social21.jpg";
import TMM from "../assets/TMM.png";
import TC from "../assets/TC.png";


const teamMembers = [
  {
    id: 1,
    name: "Deepak Khatri",
    role: "Founder & Managing Director",
    image: T1,
  },
  {
    id: 2,
    name: "Manik Goyal",
    role: "CEO & OM",
    image: TMM ,
  },
  {
    id: 3,
    name: "Chirag Goyal",
    role: "BDE (Canada)",
    image: TC,
  },

];


const About= () => {

    const visibleMembers =
  typeof window !== "undefined" && window.innerWidth < 768
    ? teamMembers.slice(0, 4) // Mobile = 4 members
    : teamMembers.slice(0, 3); // Desktop = 3 members

 


  return (
    <>
    <Navbar/>

        {/* Hero Heading */}
        <div className=" text-center pt-10 md:pt-14 ">
          <h1 className="font-semibold tracking-[-0.06em] leading-[1.0] text-black">
            <span className="block text-[32px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Transforming Ideas Into
            </span>

            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[104px]"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                }}
              >
                Digital
              </span>

              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                Excellence
              </span>
            </span>
          </h1>
        </div>

        <section className="w-full bg-white mt-4 md:mt-12">
  <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 py-12 md:py-20">

    {/* Who We Are */}
    <div className="mb-10 md:mb-16">
      <h2 className="text-[34px] md:text-[52px] leading-none tracking-tight font-medium mb-4">
        <span className="text-black">Who </span>
        <span className="text-[#ff1616]">We Are</span>
      </h2>

      <p className="max-content text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
      You built something worth being proud of. But when someone lands on your website, scrolls your feed, or sees your brand for the first time, does it show? That's the question <strong>Perfect Pixel Pro</strong>  was built to answer.<br/> We are a Toronto-based brand design and marketing agency. We work with businesses that are good at what they do but aren't being seen the way they deserve. We fix that through branding, web design, social content, campaigns, and production that makes your business look exactly as serious as it is."
      </p>
    </div>

    {/* Mission */}
    <div className="mb-10 md:mb-16">
      <h2 className="text-[34px] md:text-[52px] leading-none tracking-tight font-medium mb-4">
        <span className="text-black">Our </span>
        <span className="text-[#ff1616]">Mission</span>
      </h2>

      <p className="w-content w text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
        To make every client the obvious choice in their market. Not through decoration. Through intention.  We believe that design done right is not an expense. It is the reason clients choose you before a single conversation happens. Every brief we take on starts with one question: what would make this brand impossible to ignore?
      </p>
    </div>

    {/* History */}
    <div>
      <h2 className="text-[34px] md:text-[52px] leading-none tracking-tight font-medium mb-4">
        <span className="text-black">Our </span>
        <span className="text-[#ff1616]">History</span>
      </h2>

      <div className="w-content space-y-5">
        <p className="text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
          Perfect Pixel Pro was built on a simple observation: the best products were losing to the best-looking brands. That wasn't fair. And it was completely fixable.

        </p>

        <p className="text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
          We started as a small design studio in Toronto. We were precise, selective, and obsessed with craft. Over time that reputation attracted more ambitious clients and more complex briefs across branding, web, motion, campaigns, and production.

        </p>

        <p className="text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
          Today we work across industries. The discipline has never changed. Every pixel is still deliberate. Every detail is still strategic."

        </p>
      </div>
    </div>

    <section className="w-full bg-white">
  <div className="max-w-[1650px] mx-auto px-0 md:px-0 lg:px-0 2xl:px-0 py-12 md:py-16">

    {/* Heading */}
    <h2
      className=" text-[38px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[0.95] tracking-[-2px] mb-6 md:mb-6
      "
    >
      <span
        className="text-black"
        style={{ fontWeight: 350 }}
      >
        Work That Speaks for{" "}
      </span>

      <span
        className="text-[#ff2a2a]"
        style={{ fontWeight: 550 }}
      >
        Itself
      </span>
    </h2>

    <p className="text-black">Explore a selection of projects that showcase our creativity, strategy, and results-driven approach. Every piece reflects our commitment to delivering impactful digital experiences.
</p><br/>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">

  {/* Card 1 */}
  <Link to="/work/hydracelt" className="group cursor-pointer block">
    <div className="w-full aspect-[1/1] rounded-[18px] bg-[#f3f3f3] overflow-hidden">
      <img src={Hydraceltw} alt="Hydracelt" className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-3 text-[20px] md:text-[24px] text-black leading-tight">
      Hydracelt
    </h3>
    <p className="mt-1 text-[12px] md:text-[13px] leading-[1.7] text-[#7c7c7c] max-w-[95%]">
      Made to look as good as it performs.
    </p>
  </Link>

  {/* Card 2 */}
  <Link to="/work/the-black-in-hr" className="group cursor-pointer block">
    <div className="w-full aspect-[1/1] rounded-[18px] bg-[#f3f3f3] overflow-hidden">
      <img src={Blackw} alt="The black in HR" className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-3 text-[20px] md:text-[24px] text-black leading-tight">
      The black in HR
    </h3>
    <p className="mt-1 text-[12px] md:text-[13px] leading-[1.7] text-[#7c7c7c] max-w-[95%]">
      Identity built to carry weight.
    </p>
  </Link>

  {/* Card 3 */}
  <Link to="/work/the-social-99" className="group cursor-pointer block">
    <div className="w-full aspect-[1/1] rounded-[18px] bg-[#f3f3f3] overflow-hidden">
      <img src={Socialw} alt="The Social 99" className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-3 text-[20px] md:text-[24px] text-black leading-tight">
      The Social 99
    </h3>
    <p className="mt-1 text-[12px] md:text-[13px] leading-[1.7] text-[#7c7c7c] max-w-[95%]">
      A visual world people return to.
    </p>
  </Link>

</div>
  </div>
</section>

  </div>
        </section>

         <section className="w-full bg-white">
              <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 py-0 sm:py-6 md:py-6 2xl:py-2">
    
            {/* Heading */}
            <h1 className="text-[44px] sm:text-[80px] md:text-[98px] lg:text-[110px] leading-[0.95] sm:leading-[0.9] tracking-tight sm:tracking-[-3px] lg:tracking-[-5px] mb-4 sm:mb-0 lg:mb-6">
              <span className="text-black pr-3 sm:pr-4" style={{ fontWeight: 350 }}>The People</span>
              <span className="text-[#ff1616]" style={{ fontWeight: 550 }}>Behind the Pixels</span>
            </h1>
    
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8">
  {visibleMembers.map((member, index) => {
    const isWhiteHover = Math.floor(index / 3) % 2 === 1;

    return (
      <div
        key={`${member.id}-${index}`}
        className=" relative overflow-hidden aspect-[0.8] group cursor-pointer
        "
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="  w-full  h-full  object-cover  transition-all  duration-500  group-hover:scale-105
            "
          />
        ) : (
          <div className="w-full h-full bg-[#ff1c1c]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:hidden" />

        <div
          className={`  hidden md:block  absolute  inset-0  opacity-0  group-hover:opacity-100  transition-all  duration-500  ${isWhiteHover ? "bg-black" : "bg-[#ff1c1c]"}
          `}
        />

        <div
          className="  absolute  inset-0  flex  items-end  p-3  sm:p-4  md:p-5
          "
        >
          <div
            className="  translate-y-0  opacity-100  md:translate-y-8  md:opacity-0  md:group-hover:translate-y-0  md:group-hover:opacity-100  transition-all  duration-500
            "
          >
            <h3
              className={`  text-[16px]  sm:text-[24px]  md:text-[64px]  leading-[1.15]  md:leading-[1.1]  font-medium  text-white  ${isWhiteHover ? "md:text-[#ff1616]" : "md:text-white"}
              `}
            >
              {member.name}
            </h3>

            <p
              className={`  text-[11px]  sm:text-[14px]  md:text-[20px]  mt-1  md:mt-2  text-white/90  ${isWhiteHover ? "md:text-[#ff1616]" : "md:text-white/90"}
              `}
            >
              {member.role}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>

{/* View All Button */}
<div className="flex justify-center mt-8 md:mt-12">
  <a
    href="/team"
    className="  h-[52px]  min-w-[140px]  px-10  border  border-[#cfcfcf]  text-[#444]  text-[14px]  md:text-[15px]  font-medium  transition-all  duration-300  hover:bg-[#ff1616]  hover:border-[#ff1616]  hover:text-white  flex  items-center  justify-center
    "
  >
    View All
  </a>
</div>
      </div>
    </section>

<Footer/>
    </>
  )
}

export default About;


