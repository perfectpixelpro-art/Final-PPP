import { useState } from "react";



const items = [
  {
    id: "01",
    title: <>Built for <span className="text-[#ff1616]">Predict</span></>,
    body: "Most brands fail before a single asset is made. We start where others skip: deep in your market, your competitors' weaknesses, and your audience's unspoken preferences. What we find shapes every decision that follows. Nothing is assumed. Everything is deliberate.",
  },
  {
    id: "02",
    title: <>Built for <span className="text-[#ff1616]">Penetrate.</span></>,
    body: "Strategy is invisible until it moves. We translate every insight into a visual system that works across every surface your audience touches. Web, social, print, video, physical space. Your brand becomes consistent, recognizable, and impossible to scroll past.",
    
  },
  {
    id: "03",
    title: <>Built for <span className="text-[#ff1616]">Precision.</span></>,
    body: "The details most designers leave to chance are the details we obsess over. Kerning. Color temperature. Spacing. Timing. The difference between a brand that looks expensive and one that merely looks finished lives in this work. We do not ship until it is right.",
  
  },
];

export default function Framework() {
  const [open, setOpen] = useState<string>("01");

  return (
    <div
      className="w-full bg-white px-4 md:px-12 lg:px-24 py-0"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[65px] tracking-tight mb-6 md:mb-8 leading-none">
        <span className="font-black text-black tracking-[-0.08em]">PPP</span>
        <span className="font-extrabold text-black tracking-[-0.05em]">{" "}frame</span>
        <span className="font-black text-[#ff1616] tracking-[-0.05em]">work</span>
      </h2>

      {/* Grid */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-stretch">

        {/* Image — compact on mobile */}
        <div className="hidden md:block md:w-[42%] flex-shrink-0 rounded-2xl overflow-hidden md:min-h-[340px] md:h-auto">
          <img
            src="https://res.cloudinary.com/djzqamze6/image/upload/v1782913791/PPP_kzfmme.png"
            alt="Framework"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion */}
        <div className="w-full md:w-[58%] flex flex-col border border-[#D9D9D9] rounded-2xl overflow-hidden mt-4 md:mt-0">
          {items.map((item, idx) => {
            const isOpen = open === item.id;

            return (
              <div
                key={item.id}
                className={`flex flex-col ${
                  idx !== items.length - 1 ? "border-b border-[#D9D9D9]" : ""
                }`}
              >
                {/* Header */}
                <button
                  className="w-full flex items-center justify-between px-4 py-5 md:px-8 md:py-8 text-left"
                  onClick={() => setOpen(isOpen ? "" : item.id)}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Number */}
                    <span className="w-8 md:w-12 shrink-0 text-[20px] md:text-[38px] font-medium text-black leading-none">
                      {item.id}
                    </span>

                    {/* Title */}
                    <span className="text-[18px] md:text-[38px] font-semibold text-black leading-tight">
                      {item.title}
                    </span>
                  </div>

                  {isOpen ? (
                    <span className="text-[#ff1616] text-[28px] md:text-[34px] font-extralight leading-none ml-3 shrink-0">
                      ×
                    </span>
                  ) : (
                    <svg
                      className="w-5 h-5 md:w-7 md:h-7 text-black shrink-0 ml-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-4 pb-5 md:px-8 md:pb-8 flex gap-4 md:gap-8">
                    <div className="w-8 md:w-12 shrink-0" />

                    <div>
                      <p className="text-[#6B7280] text-[14px] md:text-[16px] leading-[1.8] mb-4 md:mb-6 max-w-[520px]">
                        {item.body}
                      </p>

                      
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
