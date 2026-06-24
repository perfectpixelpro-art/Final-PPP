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
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div className="w-full h-full bg-[#ff1c1c]" />
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
                    ${isWhiteHover ? "bg-black" : "bg-[#ff1c1c]"}
                  `}
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-end
                    p-3
                    sm:p-4
                    md:p-5
                  "
                >
                  <div
                    className="
                      translate-y-0
                      opacity-100
                      md:translate-y-8
                      md:opacity-0
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  >
                    <h3
                      className={`
                        text-[16px]
                        sm:text-[24px]
                        md:text-[64px]
                        leading-[1.15]
                        md:leading-[1.1]
                        font-medium
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
                        md:text-[20px]
                        mt-1
                        md:mt-2
                        text-white/90
                        ${isWhiteHover ? "md:text-[#ff2a2a]" : "md:text-white/90"}
                      `}
                    >
                      {member.role}
                    </p>
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