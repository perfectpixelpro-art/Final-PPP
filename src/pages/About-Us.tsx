import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { teamMembersUnique } from "../data/teamMembers";

const teamMembers = teamMembersUnique.slice(0, 3);


const About= () => {



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
      You built something worth being proud of. But when someone lands on your website, scrolls your feed, or encounters your brand for the first time, does that excellence translate? That is the exact question Perfect Pixel Pro was built to answer.<br/>

We are a globally unique brand design and marketing agency, operating from our strategic hubs in <strong>India</strong> and <strong>Edmonton</strong>. We partner with ambitious businesses that are exceptional at what they do but aren't being seen with the prestige they deserve. We bridge that gap through world-class branding, web design, digital content, campaigns, and high-end production that makes your business look exactly as serious, sophisticated, and capable as it truly is.
      </p>
    </div>

    {/* Mission */}
    <div className="mb-10 md:mb-16">
      <h2 className="text-[34px] md:text-[52px] leading-none tracking-tight font-medium mb-4">
        <span className="text-black">Our </span>
        <span className="text-[#ff1616]">Mission</span>
      </h2>

      <p className="w-content w text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
        To make every client the absolute, obvious choice in their market. We don't achieve this through superficial decoration; we achieve it through deep, unwavering intention. We believe that when design and marketing are executed with absolute precision, they cease to be an expense-they become the very reason clients choose you before a single conversation even begins. Every brief we take on is rooted in building absolute trust and is driven by one core question: What makes this brand impossible to ignore?
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
          Perfect Pixel Pro was born from a powerful realization: when the right minds come together, exceptional things happen. We knew that by combining elite strategic thinking with flawless creative execution, we could build an unstoppable force for our clients.

        </p>

        <p className="text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
          We began with a clear vision to bring a rare level of craft and collaborative depth to the market-remaining fiercely precise, selective, and obsessed with quality. That dedication quickly earned the trust of ambitious global clients, allowing us to scale our operations across continents.

        </p>

        <p className="text-[15px] md:text-[21px] leading-[1.8] text-[#6d6d6d] font-light">
          Today, whether we are collaborating from <strong>India</strong> or <strong>Edmonton</strong>, our discipline remains entirely unchanged. We treat every pixel as deliberate, every campaign as strategic, and every client relationship as a partnership built on transparency and elite execution.

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
      <img src="https://res.cloudinary.com/djzqamze6/image/upload/v1782910988/hydraw7_ipkcjt.jpg" alt="Hydracelt" className="w-full h-full object-cover" />
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
      <img src="https://res.cloudinary.com/djzqamze6/image/upload/v1782909080/black7_rfheh2.jpg" alt="The black in HR" className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-3 text-[20px] md:text-[24px] text-black leading-tight">
      The Black in HR
    </h3>
    <p className="mt-1 text-[12px] md:text-[13px] leading-[1.7] text-[#7c7c7c] max-w-[95%]">
      Identity built to carry weight.
    </p>
  </Link>

  {/* Card 3 */}
  <Link to="/work/the-social-99" className="group cursor-pointer block">
    <div className="w-full aspect-[1/1] rounded-[18px] bg-[#f3f3f3] overflow-hidden">
      <img src="https://res.cloudinary.com/djzqamze6/image/upload/v1782911016/social21_dshfhn.jpg" alt="The Social 99" className="w-full h-full object-cover" />
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
              {teamMembers.map((member, index) => {
                const isWhiteHover = Math.floor(index / 3) % 2 === 1;
                return (
                  <Link
                    to={`/team/${member.slug}`}
                    key={`${member.id}-${index}`}
                    className="relative block overflow-hidden aspect-[0.8] group cursor-pointer"
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[1px]"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#ff1616]" />
                    )}

                    {/* Mobile gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:hidden" />

                    {/* Desktop hover overlay */}
                    <div className={`hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${isWhiteHover ? "bg-black" : "bg-[#ff1616]"}`} />

                    {/* Desktop default label (fades out on hover) */}
                    <div className="hidden md:flex absolute inset-0 flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                      <h3 className="text-white text-[20px] lg:text-[24px] font-medium leading-[1.15] tracking-[-0.01em]">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-[13px] lg:text-[14px] mt-1 tracking-[0.01em]">
                        {member.role}
                      </p>
                    </div>

                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-end md:items-center p-3 sm:p-4 md:p-8 lg:p-10">
                      <div className="w-full translate-y-0 opacity-100 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                        <h3 className={`text-[16px] sm:text-[24px] md:text-[40px] lg:text-[46px] leading-[1.15] md:leading-[1.05] font-medium tracking-[-0.01em] text-white ${isWhiteHover ? "md:text-[#ff2a2a]" : "md:text-white"}`}>
                          {member.name}
                        </h3>
                        <p className={`text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-1 md:mt-2.5 tracking-[0.14em] uppercase font-medium text-white/90 ${isWhiteHover ? "md:text-[#ff2a2a]/90" : "md:text-white/90"}`}>
                          {member.role}
                        </p>
                        {member.bio && (
                          <p className={`hidden md:block text-[14px] lg:text-[16px] leading-[1.7] font-light mt-5 lg:mt-6 pt-5 lg:pt-6 border-t ${isWhiteHover ? "border-white/15" : "border-white/25"} opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ${isWhiteHover ? "text-white/75" : "text-white/85"}`}>
                            {member.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
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


