import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const openings = [
  {
    category: "Creative",
    title: "SMM",
    description:
      "You understand that social media is not posting. It is brand building in real time. You know what stops a scroll, what earns a follow, and what converts a viewer into a client. You think in content systems, not individual posts, and you have the results to show it.",
  },
  {
    category: "Creative",
    title: "Graphic Designer",
    description:
      "You are not just someone who makes things look good. You make things communicate. You understand hierarchy, tension, and restraint. You know when something needs more and when the best move is to take something away.",
  },
  {
    category: "Creative",
    title: "Video Editor",
    description:
      "You feel the edit before you make it. You know that pacing is everything and that the right cut at the right moment is the difference between content people watch and content people skip. You care about the sound as much as the picture.",
  },
];

// Sends the applicant to the Contact page with the Career form pre-selected
// and the role pre-filled — that's the single shared career form for the site.
const getApplyLink = (title: string) =>
  `/contact?type=career&role=${encodeURIComponent(title)}`;

const Career = () => {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white min-h-screen">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 pt-10 md:pt-14 pb-24">
          
          {/* Label */}
          <p className="text-[16px] uppercase tracking-[0.08em] text-[#7a7a7a] mb-2">
            Career
          </p>

          {/* Heading */}
          <h1 className="text-[52px] sm:text-[62px] md:text-[78px] lg:text-[92px] leading-[0.9] tracking-[-4px] mb-4">
            <span
              className="text-black"
              style={{ fontWeight: 400 }}
            >
              Join
            </span>{" "}
            <span
              className="text-[#ff2a2a]"
              style={{ fontWeight: 650 }}
            >
              Us
            </span>
          </h1>

          {/* Description */}
          <p className="w-content text-[13px] md:text-[18px] leading-[1.8] text-[#666666] mb-16">
            <strong>PPP</strong> is not the right fit for everyone. We work fast, we hold high standards, and we care deeply about the quality of everything we put into the world. 
            <br/>If you are someone who notices the kerning on a billboard, loses sleep over a color that is one shade off, or rewatches a video edit because something in the pacing felt wrong, you will feel at home here.We are building a team of people who take craft seriously. Not someday. Right now.
          </p>

          

          {/* ── CURRENT OPENINGS ── */}
          <div className="mb-14  md:mb-20">
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold tracking-[-1px] mb-6 md:mb-9">
              <span className="text-black">Current </span>
              <span className="text-[#ff2a2a]">Openings</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="group flex flex-col justify-between rounded-xl bg-[#f2f2f2] p-5 min-h-[340px] sm:min-h-[380px] md:min-h-[440px] md:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-2 md:mb-6">
                      <span className="inline-block h-2 w-2 rounded-full bg-black" />
                      <span className="text-xs uppercase tracking-[0.1em] text-[#666] md:text-sm">
                        {job.category}
                      </span>
                    </div>
                    <h3 className="text-3xl mb-4 font-semibold leading-[1.25] md:leading-[1.0] text-black sm:text-4xl md:text-[42px] lg:text-[42px]">
                      {job.title}
                    </h3>

                    <p className="mt-5 text-sm leading-relaxed text-[#666] md:mt-8 md:text-[15px]">
                      {job.description}
                    </p>
                  </div>

                  <Link
                    to={getApplyLink(job.title)}
                    className="mt-6 inline-flex w-fit min-w-[150px] items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-base font-medium text-white sm:min-w-[130px]"
                  >
                    Apply
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Form Heading */}
          <h2
            className="text-[28px] md:text-[34px] tracking-[-1px] text-black mb-2"
            style={{ fontWeight: 400 }}
          >
            Ready to build something serious
          </h2>
          <p className="text-black">Tell us who you are and what you do best. We read every submission.</p><br/><br/>

          <form className="max-w-[1200px]">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[16px] text-[#000]  mb-2">
                  Name
                </label>

                <input
                  type="text"
                  className="
                    w-full
                    h-[48px]
                    border
                    border-[#d8d8d8]
                    px-4
                    text-[15px]
                    outline-none
                    focus:border-black
                    transition-colors
                  "
                />
              </div>

              <div>
                <label className="block text-[16px] text-[#000] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  className="
                    w-full
                    h-[48px]
                    border
                    border-[#d8d8d8]
                    px-4
                    text-[15px]
                    outline-none
                    focus:border-black
                    transition-colors
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-[16px] text-[#000] mb-2">
                Message
              </label>

              <textarea
                rows={6}
                className="
                  w-full
                  border
                  border-[#d8d8d8]
                  p-4
                  text-[15px]
                  outline-none
                  resize-none
                  focus:border-black
                  transition-colors
                "
              />
            </div>

            {/* Applying For */}
            <div className="mb-6">
              <label className="block text-[16px] text-[#000] mb-2">
                Applying For
              </label>

              <select
                className="
                  w-full
                  h-[48px]
                  border
                  border-[#d8d8d8]
                  px-4
                  text-[15px]
                  bg-white
                  outline-none
                  focus:border-black
                  transition-colors
                "
              >
                <option>Select</option>
                <option>Graphic Designer</option>
                <option>UI/UX Designer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Social Media Manager</option>
                <option>Content Writer</option>
                <option>SEO Specialist</option>
                <option>Video Editor</option>
              </select>
            </div>

            {/* Portfolio Upload */}
            <div className="mb-8">
              <label className="block text-[16px] text-[#000] mb-2">
                Attach your portfolio
              </label>

              <label
                htmlFor="portfolio"
                className="
                  border
                  border-dashed
                  border-[#d8d8d8]
                  h-[80px]
                  flex
                  items-center
                  justify-center
                  text-[#9a9a9a]
                  text-[13px]
                  cursor-pointer
                  hover:border-black
                  transition-colors
                "
              >
                📄 Upload your portfolio
              </label>

              <input
                id="portfolio"
                type="file"
                className="hidden"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                bg-black
                text-white
                h-[40px]
                px-10
                rounded-full
                text-[16px]
                transition-all
                duration-300
                hover:bg-[#ff2a2a]
              "
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Career;