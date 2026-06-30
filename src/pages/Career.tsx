import React, { useRef, useState, type FormEvent } from "react";
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

const roleOptions = [
  "Graphic Designer",
  "UI/UX Designer",
  "Frontend Developer",
  "Backend Developer",
  "Social Media Manager",
  "Content Writer",
  "SEO Specialist",
  "Video Editor",
];

const inputClasses =
  "w-full h-[48px] border border-[#d8d8d8] px-4 text-[15px] text-black placeholder:text-[#9a9a9a] outline-none focus:border-black transition-colors bg-white";

const Career = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedRole, setSelectedRole] = useState("Select");
  const [portfolioMode, setPortfolioMode] = useState<"link" | "file">("link");
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (title: string) => {
    setSelectedRole(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "bce834f6-5b9f-4730-bda9-1d8c9cb5fe49");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setSubmitting(false);
    if (data.success) setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="w-full bg-white min-h-screen">
        <div className="max-w-[1650px] mx-auto px-5 md:px-10 lg:px-16 2xl:px-38 pt-10 md:pt-14 pb-24">

          <p className="text-[16px] uppercase tracking-[0.08em] text-[#7a7a7a] mb-2">
            Career
          </p>

          <h1 className="text-[52px] sm:text-[62px] md:text-[78px] lg:text-[92px] leading-[0.9] tracking-[-4px] mb-4">
            <span className="text-black" style={{ fontWeight: 400 }}>
              Join
            </span>{" "}
            <span className="text-[#ff2a2a]" style={{ fontWeight: 650 }}>
              Us
            </span>
          </h1>

          <p className="w-content text-[13px] md:text-[18px] leading-[1.8] text-[#666666] mb-16">
            <strong>PPP</strong> is not the right fit for everyone. We work fast, we hold high standards, and we care deeply about the quality of everything we put into the world.
            <br />
            If you are someone who notices the kerning on a billboard, loses sleep over a color that is one shade off, or rewatches a video edit because something in the pacing felt wrong, you will feel at home here. We are building a team of people who take craft seriously. Not someday. Right now.
          </p>

          {/* ── CURRENT OPENINGS ── */}
          <div className="mb-14 md:mb-20">
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

                  <button
                    type="button"
                    onClick={() => handleApply(job.title)}
                    className="mt-6 inline-flex w-fit min-w-[150px] items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-base font-medium text-white sm:min-w-[130px] transition-colors duration-300 hover:bg-[#ff2a2a]"
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
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM ── */}
          <div ref={formRef} className="scroll-mt-24">
            <h2
              className="text-[28px] md:text-[34px] tracking-[-1px] text-black mb-2"
              style={{ fontWeight: 400 }}
            >
              Ready to build something serious
            </h2>
            <p className="text-black mb-10">
              Tell us who you are and what you do best. We read every submission.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center rounded-2xl bg-[#f7f7f7] px-6 py-16 text-center max-w-[1200px]">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-black">
                  Application submitted!
                </h3>
                <p className="max-w-sm text-[15px] text-[#777]">
                  We've received your application. We'll get back to you within{" "}
                  <strong className="font-semibold text-[#ff2a2a]">48 hours</strong>. No spam, ever.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-black px-7 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form className="max-w-[1200px]" onSubmit={handleSubmit}>
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[16px] text-black mb-2">Name</label>
                    <input required name="name" type="text" placeholder="Your full name" className={inputClasses} />
                  </div>

                  <div>
                    <label className="block text-[16px] text-black mb-2">Email</label>
                    <input required name="email" type="email" placeholder="you@example.com" className={inputClasses} />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-[16px] text-black mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Tell us about yourself and why you'd be a good fit..."
                    className="w-full border border-[#d8d8d8] p-4 text-[15px] text-black placeholder:text-[#9a9a9a] outline-none resize-none focus:border-black transition-colors bg-white"
                  />
                </div>

                {/* Applying For */}
                <div className="mb-6">
                  <label className="block text-[16px] text-black mb-2">Applying for</label>
                  <select
                    name="applying_for"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option>Select</option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Portfolio — link or file */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[16px] text-black">Portfolio</label>

                    <div className="inline-flex rounded-full bg-[#f2f2f2] p-1">
                      <button
                        type="button"
                        onClick={() => setPortfolioMode("link")}
                        className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors duration-200 ${
                          portfolioMode === "link" ? "bg-black text-white" : "text-[#666] hover:text-black"
                        }`}
                      >
                        Link
                      </button>
                      <button
                        type="button"
                        onClick={() => setPortfolioMode("file")}
                        className={`rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors duration-200 ${
                          portfolioMode === "file" ? "bg-black text-white" : "text-[#666] hover:text-black"
                        }`}
                      >
                        Upload file
                      </button>
                    </div>
                  </div>

                  {portfolioMode === "link" ? (
                    <input
                      type="url"
                      name="portfolio_link"
                      placeholder="https://your-portfolio.com"
                      className={inputClasses}
                    />
                  ) : (
                    <>
                      <label
                        htmlFor="portfolio"
                        className="border border-dashed border-[#d8d8d8] h-[80px] flex items-center justify-center text-[#9a9a9a] text-[13px] cursor-pointer hover:border-black transition-colors px-4 text-center"
                      >
                        {fileName ? (
                          <span className="text-black">{fileName}</span>
                        ) : (
                          "Upload your portfolio (PDF, ZIP, or image)"
                        )}
                      </label>
                      <input
                        id="portfolio"
                        type="file"
                        accept=".pdf,.zip,.png,.jpg,.jpeg"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black text-white h-[44px] px-10 rounded-full text-[16px] transition-all duration-300 hover:bg-[#ff2a2a] disabled:cursor-not-allowed disabled:opacity-60 inline-flex items-center gap-2"
                >
                  {submitting && (
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {submitting ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Career;