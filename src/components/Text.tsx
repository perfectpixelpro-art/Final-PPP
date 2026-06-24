import Hydraw from "../assets/hydraw2.jpg";
import Blackw from "../assets/black8.jpg"
import Impre2 from "../assets/Impre4.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Candyw from "../assets/candyw2.jpg";

const slide = {
  brand: "hydracelt",
  tagline: "EXCELLENCE IS A HABIT",
  image: Hydraw,
};

const sideImages = [Blackw, Candyw];

export default function Text() {
  return (
    <section
      className="w-full bg-white px-6 md:px-18 lg:px-20 xl:px-28 lg:py-20 pt-14"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      <div className="pt-4 pb-10">
        {/* Heading */}
       {/* Heading */}
<h2 className="font-bold tracking-[-0.04em] leading-[1.02] text-black mb-10">
  <span className="block text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px]">
    Events That Make a
  </span>

  <div className="flex items-end gap-2 lg:gap-3">
    <span
      className="italic text-black text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px]"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        lineHeight: 1,
      }}
    >
      Lasting
    </span>

    <span className="text-[#FF1616] font-extrabold text-[36px] sm:text-[52px] md:text-[66px] lg:text-[80px] leading-none">
      Impression
    </span>
  </div>
</h2>

        {/* Photo Grid */}
        <div className="relative flex flex-col md:flex-row gap-3">
          {/* View All */}
          <a
            href="/work"
            className="absolute top-0 right-0 -translate-y-12 flex items-center gap-2 text-black text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 mt-6 group hover:text-[#FF1616]"
          >
            View All
            <span className="text-[#FF1616] group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>

          {/* Left Large Image */}
          <div className="relative w-full md:w-[55%] h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-2xl flex-shrink-0 group">
            <img
              src={slide.image}
              alt={slide.brand}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className=" text-[#e00a00]  text-[32px] md:text-[40px]  text-white font-bold text-lg leading-none italic">
                {slide.brand}
              </p>

              <p className="text-[13px] md:text-[15px]  text-white/60  tracking-widest uppercase mt-1">
                {slide.tagline}
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex flex-col gap-3 w-full md:w-[45%] md:h-[520px]">
            {sideImages.map((src, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-2xl flex-1"
              >
                <img
                  src={src}
                  alt={`event-${i}`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                />

                {i === 1 && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-[#3B82F6] pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}