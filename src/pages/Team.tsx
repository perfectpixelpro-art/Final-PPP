import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { teamMembers } from "../data/teamMembers";

const Team = () => {
  return (
    <>
    <Navbar />

    <section className="w-full bg-white">
      <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 py-12 sm:py-16 md:py-20">

        {/* Heading */}
        <h1 className="text-[44px] sm:text-[80px] md:text-[98px] lg:text-[110px] leading-[0.95] sm:leading-[0.9] tracking-tight sm:tracking-[-3px] lg:tracking-[-5px] mb-4 sm:mb-0 lg:mb-6">
          <span className="text-black pr-3 sm:pr-4" style={{ fontWeight: 350 }}>Our</span>
          <span className="text-[#ff2a2a]" style={{ fontWeight: 550 }}>Team</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8">
          {teamMembers.map((member, index) => {
            // First 3 = Red hover
            // Next 3 = White hover
            // Repeat continuously
            const isWhiteHover = Math.floor(index / 3) % 2 === 1;

            return (
              <Link
                to={`/team/${member.slug}`}
                key={`${member.id}-${index}`}
                className="
                  relative
                  block
                  overflow-hidden
                  aspect-[0.8]
                  group
                  cursor-pointer
                "
              >
                {/* Image */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-110
                      group-hover:blur-[1px]
                    "
                  />
                ) : (
                  <div className="w-full h-full bg-[#ff1616]" />
                )}

                {/* Mobile-only readable backdrop — always on since touch devices have no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:hidden" />

                {/* Desktop/tablet hover overlay — only active where hover actually exists */}
                <div
                  className={`
                    hidden md:block
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    ${isWhiteHover ? "bg-black" : "bg-[#ff1616]"}
                  `}
                />

                {/* Desktop default-state label — bottom gradient + name/role, fades out on hover */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    inset-0
                    flex-col
                    justify-end
                    bg-gradient-to-t
                    from-black/85
                    via-black/25
                    to-transparent
                    p-5
                    opacity-100
                    group-hover:opacity-0
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                >
                  <h3 className="text-white text-[20px] lg:text-[24px] font-medium leading-[1.15] tracking-[-0.01em]">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-[13px] lg:text-[14px] mt-1 tracking-[0.01em]">
                    {member.role}
                  </p>
                </div>

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-end
                    md:items-center
                    p-3
                    sm:p-4
                    md:p-8
                    lg:p-10
                  "
                >
                  <div
                    className="
                      w-full
                      translate-y-0
                      opacity-100
                      md:translate-y-6
                      md:opacity-0
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                      transition-all
                      duration-500
                      ease-out
                    "
                  >
                    <h3
                      className={`
                        text-[16px]
                        sm:text-[24px]
                        md:text-[40px]
                        lg:text-[46px]
                        leading-[1.15]
                        md:leading-[1.05]
                        font-medium
                        tracking-[-0.01em]
                        text-white
                        ${isWhiteHover ? "md:text-[#ff2a2a]" : "md:text-white"}
                      `}
                    >
                      {member.name}
                    </h3>

                    <p
                      className={`
                        text-[11px]
                        sm:text-[14px]
                        md:text-[15px]
                        lg:text-[16px]
                        mt-1
                        md:mt-2.5
                        tracking-[0.14em]
                        uppercase
                        font-medium
                        text-white/90
                        ${isWhiteHover ? "md:text-[#ff2a2a]/90" : "md:text-white/90"}
                      `}
                    >
                      {member.role}
                    </p>

                    {/* Description — desktop hover only, staggered reveal */}
                    {member.bio && (
                      <p
                        className={`
                          hidden md:block
                          text-[14px]
                          lg:text-[16px]
                          leading-[1.7]
                          font-light
                          mt-5
                          lg:mt-6
                          pt-5
                          lg:pt-6
                          border-t
                          ${isWhiteHover ? "border-white/15" : "border-white/25"}
                          opacity-0
                          translate-y-3
                          group-hover:opacity-100
                          group-hover:translate-y-0
                          transition-all
                          duration-500
                          delay-100
                          ${isWhiteHover ? "text-white/75" : "text-white/85"}
                        `}
                      >
                        {member.bio}
                      </p>
                    )}
                  </div>

                  {/* Default Content for Red Card */}
                  {!member.image && (
                    <div>
                      <h3 className="text-white text-[20px] sm:text-[24px] leading-[1.1] font-medium">
                        Laurent
                        <br />
                        Ezekiel
                      </h3>

                      <p className="text-white/90 text-[11px] sm:text-[12px] mt-2">
                        Global Chief Executive Officer
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
    </>

  );
};

export default Team;