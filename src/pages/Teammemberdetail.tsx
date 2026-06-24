import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getTeamMemberBySlug } from "../data/teamMembers";

const BackArrow = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5 1.12 1 2.5 1s2.48 1.119 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-.95 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.7V23h-4v-6.5c0-1.55-.03-3.55-2.2-3.55-2.2 0-2.5 1.7-2.5 3.45V23h-4V8.5z" />
  </svg>
);

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // React Router doesn't reset scroll position on navigation — without this,
  // the detail page opens wherever the previous page happened to be scrolled to.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  const member = getTeamMemberBySlug(slug);

  // No matching person for this URL — give a clear way back instead of a blank page
  if (!member) {
    return (
      <>
        <Navbar />
        <section className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-white px-5 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-black">Team member not found</h1>
          <p className="mb-7 max-w-sm text-[#666]">
            The profile you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/team"
            className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#ff2a2a]"
          >
            Back to team
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="w-full bg-white">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 py-10 md:py-14 pb-24">

          {/* Back link */}
          <Link
            to="/team"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#666] transition-colors duration-200 hover:text-black md:mb-12"
          >
            <BackArrow />
            Back to team
          </Link>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Photo */}
            <div className="group aspect-[0.85] w-full overflow-hidden rounded-2xl bg-[#f2f2f2]">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[#ff2a2a]">
                {member.role}
              </p>

              <h1 className="mb-6 text-[44px] font-semibold leading-[0.95] tracking-tight text-black sm:text-[60px] md:text-[72px]">
                {member.name}
              </h1>

              <div className="mb-8 max-w-xl space-y-4 text-[15px] leading-[1.8] text-[#666] md:text-[17px]">
                {member.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                <a
                  href={member.social.linkedin}
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f2f2] text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamMemberDetail;