import NewsTop from "../assets/NewsTop.jpg";
import VRF from "../assets/VRF.png";
import Whyppp from "../assets/Whyppp.jpg";
import News1 from "../assets/Newsw.jpg";
import News2 from "../assets/News2.jpg";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <section
      className="w-full bg-[#141414] py-12 px-6 md:px-20 mt-14 lg:px-36"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
      {/* Header - unchanged */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-[40px] sm:text-[52px] font-bold tracking-tight">
          News
        </h2>

        <a
          href="/news"
          className="flex items-center gap-2 text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 group hover:text-[#ff1616]"
        >
          View All News
          <span className="text-[#ff1616] group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-6">

       {/* Row 1 */}
       <Link to="/blog/why-choose-us">
       <div className="grid grid-cols-1 md:grid-cols-2  overflow-hidden">

  {/* Image */}
  <div className="relative h-[220px] md:h-[280px]">
    <img
      src={Whyppp}
      alt="news 1"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>

{/* Content */}
<div className="bg-black p-6 md:p-8 h-[220px] md:h-[280px] flex flex-col justify-start">

  <div className="flex items-start justify-between gap-4 mb-4">

    <h3 className="text-white font-black text-[30px] sm:text-[34px] md:text-[38px] leading-[1.05] tracking-[-0.03em] flex-1">
      Why choose 
      <br />
     Perfect Pixel Pro?
    </h3>

   <span className="text-[#ff1616] text-[24px] md:text-[26px] leading-none shrink-0 mt-2">
  ↗
</span>

  </div>

  <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.6] max-w-[430px]">
    Where Strategy Meets Craft and Results Follow.


  </p>

</div>
</div>
       
       </Link>


        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <Link to="/news/1">
          <div className="relative rounded-2xl overflow-hidden h-[420px]  md:h-[520px] group cursor-pointer">
            <img
  src={News1}
  alt="news 2"
  className="absolute inset-0 md:bottom-[10%] md:h-auto w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
/>

            <div className="absolute bottom-0 left-0 right-0 bg-[#ff1616] p-8 md:p-10">
              <div className="flex justify-between items-start gap-4">
     <h3 className="text-white font-black font-extrabold text-[24px] sm:text-[28px] md:text-[32px] leading-[0.95] tracking-[-0.03em] max-w-[380px]">
  <>
    Perfect Pixel Pro Expands
    <br />
    to North America
  </>
</h3>

                <span className="text-white text-xl shrink-0">↗</span>
              </div>

              <p className="text-white/90 text-[13px] md:text-[14px] leading-[1.6] mt-4 max-w-[320px]">
                From Toronto to New York, PPP Brings Precision Creative to North America.
              </p>
            </div>
          </div>      
          </Link>
      

          {/* Right Card */}
          <Link to="/blog/why-ai-hype-doesnt-replace-agency-expertise">
          <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[520px] group cursor-pointer">
            <img
              src={VRF}
              alt="news 3"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex justify-between items-start gap-4">
     <h3 className="text-white font-black font-extrabold text-[24px] sm:text-[28px] md:text-[32px] leading-[0.95] tracking-[-0.03em] max-w-[380px]">
  <>
    Why AI Hype Doesn't 
    <br />
     Replace Agency Expertise.
  </>
</h3>
                <span className="text-white text-xl shrink-0">↗</span>
              </div>

              <p className="text-white/85 text-[13px] md:text-[14px] leading-[1.6] mt-4 max-w-[320px]">
                The Algorithm Has No Gut. That's Why You Still Need Us.
              </p>
            </div>
          </div>
          
          </Link>
          
        </div>
      </div>
    </section>
  );
}