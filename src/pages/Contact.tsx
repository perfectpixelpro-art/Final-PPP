import { useState, type FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Local images — update the path/extension to match your assets folder
import canadaOfficeImg from "../assets/canada.jpg";
import indiaOfficeImg from "../assets/india.jpg";

const offices = [
  {
     city: "India",
     subline: "Where precision meets scale.",
    address: "340 Fifth Avenue, Suite 1200",
    cityLine: "New York, NY 10001, United States",
    phone: "+1 212 555 0198",
    image: indiaOfficeImg,
  },
  {
    city: "Canada",
    subline: "Where it all began.",
    address: "340 Fifth Avenue, Suite 1200",
    cityLine: "New York, NY 10001, United States",
    phone: "+1 212 555 0198",
    image: canadaOfficeImg,
   
  },
];

type FormType = "project" | "career";

const projectDropdownOptions = ["New Business", "Partnership", "Press", "General Inquiry", "Other"];
const careerDropdownOptions = ["Design", "Engineering", "Marketing", "Sales", "Operations", "Other"];

const Contact = () => {
  const [formType, setFormType] = useState<FormType>("project");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);

  const isProject = formType === "project";
  const dropdownLabel = isProject ? "Inquiry type" : "Department";
  const dropdownOptions = isProject ? projectDropdownOptions : careerDropdownOptions;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with your real submit call (API route, form service, etc.)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const switchFormType = (type: FormType) => {
    setFormType(type);
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#0d0d0d]" style={{ fontFamily: "'Archivo', sans-serif" }}>

        {/* ── HERO ── */}
       <section className="border-b border-[#eee] px-5 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20">
          <p className="mb-2 text-xs uppercase tracking-[0.08em] text-[#7a7a7a] sm:text-sm md:text-base">
            LET'S TALK
          </p>
 
          <div className="max-w-xl">
            <h1 className="m-0 text-[15vw] font-bold leading-[0.95] tracking-[-0.03em] text-[#0d0d0d] sm:text-7xl md:text-8xl lg:text-[110px]">
              Here we <em className="text-[#ff1616] not-italic">are.</em>
            </h1>
 
            <div className="my-6 h-px w-full bg-[#0d0d0d] md:my-8" />
 
            <p className="m-0 w-full text-sm leading-relaxed text-[#888] sm:text-base">
              If you have a brand that deserves to be taken more seriously, this is where it starts. Tell us what you are building and we will tell you what is possible.
We work with businesses in Canada, India, and anywhere a brand needs to look like the obvious choice

            </p>
          </div>
        </section>

        {/* ── OFFICE CARDS (zigzag image / text pattern, 2 columns at every breakpoint) ── */}
        <section className="px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {offices.map((office, i) => {
              const isHovered = hoveredOffice === office.city;

              const imageBlock = (
                <div
                  key={`${office.city}-image`}
                  onMouseEnter={() => setHoveredOffice(office.city)}
                  onMouseLeave={() => setHoveredOffice(null)}
                  className="h-40 w-full overflow-hidden bg-[#d0d0d0] sm:h-64 md:h-80 lg:h-96 xl:h-[420px]"
                >
                  <img
                    src={office.image}
                    alt={office.city}
                    className="h-full w-full object-cover"
                    style={{
                      filter: "grayscale(100%)",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "filter 0.7s ease, transform 0.7s ease",
                      display: "block",
                    }}
                  />
                </div>
              );

              const textBlock = (
                <div
                  key={`${office.city}-text`}
                  className="group flex h-40 w-full flex-col items-center justify-center bg-[#f2f2f2] p-3 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:h-64 sm:p-6 md:h-80 lg:h-96 xl:h-[420px]">
                  <h3 className="mb-1.5 text-sm font-bold text-[#ff1616] mb-2 lg:mb-3 text-[23px] md:text-6xl lg:text-[40px]">
                    {office.city}
                  </h3>
                  <p>{office.subline}</p>
                  <p className="leading-relaxed text-[#777] text-[8px] lg:text-[13px] sm:leading-loose">
                    {office.address}
                    <br />
                    {office.cityLine}
                    <br />
                    {office.phone}
                  </p>
                </div>
              );

              // even index -> image left, text right | odd index -> text left, image right
              return i % 2 === 0 ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              );
            })}
          </div>
        </section>

        {/* ── CONTACT FORM (toggle: Project Inquiry / Career) ── */}
        <section className="border-t border-[#eee] px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-20">
          <div className="w-full">
            <p className="mb-5 text-xl font-semibold text-[#0d0d0d] sm:mb-8 sm:text-2xl md:text-[34px]">
              Tell us about your brand.
            </p>

            {/* Toggle switch */}
            <div className="mb-5 inline-flex rounded-full bg-[#f2f2f2] p-1 sm:mb-6">
              <button
                type="button"
                onClick={() => switchFormType("project")}
                className={`rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-200 sm:px-7 sm:py-3 sm:text-sm ${
                  isProject ? "bg-[#0d0d0d] text-white" : "text-[#666] hover:text-[#0d0d0d]"
                }`}
              >
                Project Inquiry
              </button>
              <button
                type="button"
                onClick={() => switchFormType("career")}
                className={`rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-200 sm:px-7 sm:py-3 sm:text-sm ${
                  !isProject ? "bg-[#0d0d0d] text-white" : "text-[#666] hover:text-[#0d0d0d]"
                }`}
              >
                Career
              </button>
            </div>
            
            {/* Dynamic description */}
<p className="mb-4 md:mb-6 text-[#666]">
  {isProject
    ? "We typically respond within one business day. Every conversation starts with listening."
    : "Looking to join the team? Tell us what you do and what drives you."}
</p><br/>

            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center rounded-2xl bg-[#f7f7f7] px-5 py-10 text-center sm:px-6 sm:py-14 md:py-20">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d0d0d] sm:mb-5 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0d0d0d] sm:text-xl md:text-2xl">
                  {isProject ? "Message sent!" : "Application submitted!"}
                </h3>
                <p className="max-w-sm text-xs text-[#777] sm:text-sm md:text-base">
                  We've received your {isProject ? "project inquiry" : "application"}.
                  We'll get back to you within <strong className="font-semibold text-[#ff1616]">48 hours</strong>. No spam, ever.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-[#0d0d0d] px-6 py-2.5 text-xs font-medium text-[#0d0d0d] transition-colors duration-200 hover:bg-[#0d0d0d] hover:text-white sm:mt-7 sm:px-7 sm:py-3 sm:text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── FORM ── */
              <form onSubmit={handleSubmit}>
                {/* Dropdown (changes options based on form type) */}
                <div className="relative mb-6 max-w-[150px] sm:mb-9 sm:max-w-xs">
                  <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:text-[11px]">
                    {dropdownLabel}
                  </label>
                  <select
                    key={formType}
                    defaultValue={dropdownOptions[0]}
                    className="w-full appearance-none rounded-lg border border-[#e0e0e0] bg-white px-3 py-2 pr-7 text-xs text-[#0d0d0d] outline-none transition-colors focus:border-[#0d0d0d] sm:px-4 sm:py-3 sm:pr-9 sm:text-sm"
                  >
                    {dropdownOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute bottom-[10px] right-2.5 h-2.5 w-2.5 sm:bottom-[14px] sm:right-3 sm:h-3 sm:w-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0d0d0d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-6 sm:gap-8 md:gap-10">
                  <div>
                    <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                      First name
                    </label>
                    <input
                      required
                      placeholder="Alex"
                      className="w-full border-0 border-b border-[#e0e0e0] bg-transparent py-2 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:py-2.5 sm:text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                      Last name
                    </label>
                    <input
                      required
                      placeholder="Johnson"
                      className="w-full border-0 border-b border-[#e0e0e0] bg-transparent py-2 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:py-2.5 sm:text-[15px]"
                    />
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-3 sm:mb-6 sm:gap-8 md:gap-10">
                  <div>
                    <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      className="w-full border-0 border-b border-[#e0e0e0] bg-transparent py-2 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:py-2.5 sm:text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                      {isProject ? "Company" : "Position applying for"}
                    </label>
                    <input
                      placeholder={isProject ? "Your company name" : "e.g. Senior Product Designer"}
                      className="w-full border-0 border-b border-[#e0e0e0] bg-transparent py-2 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:py-2.5 sm:text-[15px]"
                    />
                  </div>
                </div>

                {/* Career-only extra field */}
                {!isProject && (
                  <div className="mb-5 sm:mb-6">
                    <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                      Portfolio / LinkedIn / Resume URL
                    </label>
                    <input
                      placeholder="https://"
                      className="w-full border-0 border-b border-[#e0e0e0] bg-transparent py-2 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:py-2.5 sm:text-[15px]"
                    />
                  </div>
                )}

                <div className="mb-7 sm:mb-8">
                  <label className="mb-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-black sm:mb-1.5 sm:text-[11px]">
                    Message
                  </label>
                  <textarea
                    required
                    placeholder={
                      isProject
                        ? "Tell us about your project..."
                        : "Tell us where your brand is right now and where you want it to be..."
                    }
                    className="h-28 w-full resize-none rounded-xl border border-[#e0e0e0] p-3 text-xs text-[#0d0d0d] outline-none transition-colors placeholder:text-[#bbb] focus:border-[#0d0d0d] sm:h-40 sm:p-4 sm:text-[15px] md:h-44"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0d] px-6 py-3 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#ff1616] disabled:cursor-not-allowed disabled:opacity-60 sm:px-9 sm:py-4 sm:text-[15px]"
                >
                  {submitting && (
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {submitting ? "Sending..." : isProject ? "Send message" : "Submit application"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;















