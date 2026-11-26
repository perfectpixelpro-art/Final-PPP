import { optimizeMedia } from "../utils/cloudinary";
import { cardBySlug } from "./projectCards";
// Hydracelt and Candy Land stills are served from the Cloudflare CDN as WebP.
const CDN = "https://cdn.perfectpixelpro.com/img";
const CDN_VIDEO = "https://cdn.perfectpixelpro.com/video";

const Hydraw1 = `${CDN}/hydraw1.webp`;
const Hydraw4 = `${CDN}/hydraw4.webp`;
const Hydraw13 = `${CDN}/hydraw13.webp`;


import Blackw1 from "../assets/blackw1.webp";
import Blackw2 from "../assets/blackw2.webp";
import Blackw3 from "../assets/blackw3.webp";
import Blackw4 from "../assets/blackw4.webp";
import Blackw6 from "../assets/blackw6.webp";
import Blackw7 from "../assets/blackw7.webp";


import Impre1 from "../assets/Impre1.webp";
import Impre2 from "../assets/Impre2.webp";
import Impre3 from "../assets/Impre3.webp";
import Impre4 from "../assets/Impre4.webp";



const worksRaw = [
  {
    id: 1,
    slug: "hydracelt",
    title: "Hydracelt",
    gallery: [
      { type: "image", src: `${CDN}/hydraw5.webp`, w: 1420, h: 1439 },
      { type: "image", src: `${CDN}/hydraw2.webp`, w: 1440, h: 1440 },
      { type: "video", src: `${CDN_VIDEO}/HydraceltVideo.webm`, poster: Hydraw1 },
      { type: "image", src: `${CDN}/hydraw3.webp`, w: 1024, h: 1024 },
      { type: "image", src: `${CDN}/hydraw13.webp`, w: 1440, h: 1440 },
      { type: "video", src: `${CDN_VIDEO}/HydraceltVideo2.webm`, poster: Hydraw4 },
      { type: "image", src: `${CDN}/hydraw7.webp`, w: 1440, h: 1440 },
      { type: "image", src: `${CDN}/hydraw12.webp`, w: 512, h: 512 },
      { type: "image", src: `${CDN}/hydraw10.webp`, w: 1440, h: 1440 },
      { type: "image", src: `${CDN}/hydraw9.webp`, w: 1080, h: 1080 },
      { type: "video", src: `${CDN_VIDEO}/Hydracelt3.webm`, poster: Hydraw13 },
    ],
  },

  {
    id: 2,
    slug: "the-black-in-hr",
    title: "The Black in HR",
    gallery: [
      { type: "image", src: "/assets/blackw1.webp", w: 512, h: 512 },
      { type: "video", src: `${CDN_VIDEO}/BlackVideo.webm`, poster: Blackw2 },
      { type: "image", src: "/assets/black14.webp", w: 1600, h: 1066 },
      { type: "image", src: "/assets/black10.webp", w: 1600, h: 900 },
      { type: "video", src: `${CDN_VIDEO}/Black2.webm`, poster: Blackw4 },
      { type: "image", src: `${CDN}/black8.webp`, w: 1280, h: 853 },
      { type: "image", src: "/assets/black11.webp", w: 1600, h: 1200 },
      { type: "video", src: `${CDN_VIDEO}/Black3.webm`, poster: Blackw6 },
      { type: "image", src: "/assets/black9.webp", w: 1600, h: 932 },
      { type: "video", src: `${CDN_VIDEO}/Black4.webm`, poster: Blackw7 },
      { type: "image", src: "/assets/black12.webp", w: 1600, h: 1066 },
      { type: "video", src: `${CDN_VIDEO}/Black5.webm`, poster: Blackw1 },
      { type: "image", src: "/assets/black18.webp", w: 1600, h: 1200 },
      { type: "video", src: `${CDN_VIDEO}/Black6.webm`, poster: Blackw3 },
      { type: "image", src: "/assets/black16.webp", w: 1600, h: 1066 },
      
    ],
  },

  {
    id: 3,
    slug: "the-social-99",
    title: "The Social 99",
    gallery: [
      { type: "image", src: "/assets/social19.webp", w: 1600, h: 1067 },
      { type: "video", src: `${CDN_VIDEO}/Social99_3Video.webm`, poster: Impre1 },
      { type: "image", src: "/assets/social2.webp", w: 512, h: 512 },
      { type: "image", src: `${CDN}/Social22.webp`, w: 1200, h: 801 },
      { type: "image", src: "/assets/social3.webp", w: 512, h: 512 },
      { type: "video", src: `${CDN_VIDEO}/Social99Video.webm`, poster: Impre4 },
      { type: "image", src: "/assets/social14.webp", w: 512, h: 512 },
      { type: "image", src: "/assets/social20.webp", w: 1600, h: 1069 },
      { type: "video", src: `${CDN_VIDEO}/Social99_2Video.webm`, poster: Impre2 },
      { type: "image", src: "/assets/social6.webp", w: 512, h: 512 },
      { type: "video", src: `${CDN_VIDEO}/Social99_4Video.webm`, poster: Impre3 },
      { type: "image", src: "/assets/social7.webp", w: 512, h: 512 },
      { type: "image", src: "/assets/social17.webp", w: 512, h: 911 },
      { type: "image", src: "/assets/social13.webp", w: 512, h: 512 },
      { type: "image", src: "/assets/social18.webp", w: 1600, h: 1200 },
      
   
   
    ],
  },

   {
    id: 4,
    slug: "smm-hiring",
    title: "SMM Hiring",
    gallery: [
      { type: "image", src: `${CDN}/smm11.webp`, w: 4096, h: 2731 },
      { type: "video", src: `${CDN_VIDEO}/Smm3.webm`, poster: Impre1 },
      { type: "image", src: `${CDN}/smm12.webp`, w: 3816, h: 3474 },
      { type: "image", src: `${CDN}/smm13.jpg`, w: 838, h: 1300 },
      { type: "image", src: `${CDN}/smm14.webp`, w: 4096, h: 3072 },
           { type: "video", src: `${CDN_VIDEO}/Smm1.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/smm15.webp`, w: 4501, h: 3001 },
      { type: "image", src: `${CDN}/smm17.jpg`, w: 1200, h: 961 },
      { type: "video", src: `${CDN_VIDEO}/Smm2.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/smm16.webp`, w: 4096, h: 2730 },
      { type: "image", src: `${CDN}/smm3.webp`, w: 3009, h: 3009 }, 
      { type: "image", src: `${CDN}/smm8.jpg`, w: 1300, h: 1300 },  
      { type: "image", src: `${CDN}/smm2.webp`, w: 3009, h: 3009 },         
    ],
  },

  {
    id: 5,
    slug: "stone-the-myth",
    title: "Stone the Myth",
    gallery: [
      { type: "image", src: "/assets/Stone1.webp", w: 1280, h: 1600 },
      { type: "video", src: `${CDN_VIDEO}/StoneV.webm`, poster: Impre1 },
      { type: "image", src: "/assets/Stone2.webp", w: 1440, h: 1440 },
      { type: "image", src: "/assets/Stone3.webp", w: 1243, h: 1600 },
      { type: "video", src: `${CDN_VIDEO}/StoneV.webm`, poster: Impre4 },
      { type: "image", src: "/assets/Stone4.jpg", w: 1440, h: 1440 },
      { type: "image", src: "/assets/Stone5.jpg", w: 1440, h: 1439 },
      { type: "image", src: "/assets/Stone6.webp", w: 1282, h: 1600},
      { type: "image", src: "/assets/Stone7.jpg", w: 1295, h: 1165 },      
    ],
  },

  {
    id: 6,
    slug: "candy-land",
    title: "Candy Land",
    gallery: [
      { type: "image", src: `${CDN}/candyw4.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw7.webp`, w: 2354, h: 1766 },
      { type: "video", src: `${CDN_VIDEO}/candyV1.webm`, poster: Impre1 },
      { type: "image", src: `${CDN}/candyw12.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw8.webp`, w: 1559, h: 2400 },
      { type: "image", src: `${CDN}/candyw5.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw10.webp`, w: 512, h: 401 },
      { type: "video", src: `${CDN_VIDEO}/candyV2.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/candyw1.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw13.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw6.webp`, w: 1402, h: 2103 },
      { type: "image", src: `${CDN}/candyw2.webp`, w: 512, h: 512 },
      { type: "image", src: `${CDN}/candyw3.webp`, w: 1080, h: 1080 },
      { type: "image", src: `${CDN}/candyw9.webp`, w: 1358, h: 1158 },
      { type: "image", src: `${CDN}/candyw11.webp`, w: 815, h: 456 },
          
    ],
  },

  {
    id: 7,
    slug: "bumper-buzz",
    title: "Bumper Buzz",
    gallery: [
        { type: "image", src: `${CDN}/buzzn1.webp`, w: 4000, h: 3000 },
      { type: "image", src: `${CDN}/buzz7.webp`, w: 1817, h: 1817 },
       { type: "video", src: `${CDN_VIDEO}/Buzzv1.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/buzz8.webp`, w: 1817, h: 1817 },
      { type: "image", src: `${CDN}/buzzn3.webp`, w: 3870, h: 2580 },
       { type: "video", src: `${CDN_VIDEO}/Buzzv2.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/buzzn5.webp`, w: 3056, h: 2037 },
      { type: "image", src: `${CDN}/buzz4.webp`, w: 1813, h: 1813 },
      { type: "image", src: `${CDN}/buzzl12.webp`, w: 1080, h: 1920 },
      { type: "image", src: `${CDN}/buzzn2.webp`, w: 2357, h: 1768 },
      { type: "image", src: `${CDN}/buzzn4.webp`, w: 4000, h: 3000 },  
    ],
  },

  // {
  //   id: 8,
  //   slug: "fire-island",
  //   title: "Fire Island",
  //   gallery: [
  //       { type: "image", src: Fire4 },
  //     { type: "image", src: Fire7 },
  //     { type: "video", src: CandyV1, poster: Impre1 },
  //     { type: "image", src: Fire8 },
  //     { type: "image", src: Fire5 },
  //     { type: "image", src: Fire10 },
  //     { type: "video", src: CandyV2, poster: Impre4 }, 
  //     { type: "image", src: Fire1 },
  //     { type: "image", src: Fire6 },
  //     { type: "image", src: Fire2 },
  //     { type: "image", src: Fire5 },
  //     { type: "image", src: Fire3 },
  //     { type: "image", src: Fire9 },
  //     { type: "image", src: Fire11 },
          
  //   ],
  // },

  // {
  //   id: 9,
  //   slug: "long-island",
  //   title: "Long Island",
  //   gallery: [
  //       { type: "image", src: Long4 },
  //     { type: "image", src: Long7 },
  //     { type: "video", src: CandyV1, poster: Impre1 },
  //     { type: "image", src: Long8 },
  //     { type: "image", src: Long5 },
  //     { type: "image", src: Long10 },
  //     { type: "video", src: CandyV2, poster: Impre4 }, 
  //     { type: "image", src: Long1 },
  //     { type: "image", src: Long6 },
  //     { type: "image", src: Long2 },
  //     { type: "image", src: Long5 },
  //     { type: "image", src: Long3 },
  //     { type: "image", src: Long9 },
  //     { type: "image", src: Long11 },
  //     { type: "image", src: Long12 },
  //     { type: "image", src: Long13},
  //     { type: "image", src: Long14 },
          
  //   ],
  // },

  // {
  //   id: 10,
  //   slug: "shopmyblock",
  //   title: "Shopmyblock",
  //   gallery: [
  //       { type: "image", src: Candyw4 },
  //     { type: "image", src: Candyw7 },
  //     { type: "video", src: CandyV1, poster: Impre1 },
  //     { type: "image", src: Candyw8 },
  //     { type: "image", src: Candyw5 },
  //     { type: "image", src: Candyw10 },
  //     { type: "video", src: CandyV2, poster: Impre4 }, 
  //     { type: "image", src: Candyw1 },
  //     { type: "image", src: Candyw6 },
  //     { type: "image", src: Candyw2 },
  //     { type: "image", src: Candyw5 },
  //     { type: "image", src: Candyw3 },
  //     { type: "image", src: Candyw9 },
  //     { type: "image", src: Candyw11 },
          
  //   ],
  // },

  // {
  //   id: 11,
  //   slug: "swirlysips",
  //   title: "Swirlysips",
  //   gallery: [
  //       { type: "image", src: Candyw4 },
  //     { type: "image", src: Candyw7 },
  //     { type: "video", src: CandyV1, poster: Impre1 },
  //     { type: "image", src: Candyw8 },
  //     { type: "image", src: Candyw5 },
  //     { type: "image", src: Candyw10 },
  //     { type: "video", src: CandyV2, poster: Impre4 }, 
  //     { type: "image", src: Candyw1 },
  //     { type: "image", src: Candyw6 },
  //     { type: "image", src: Candyw2 },
  //     { type: "image", src: Candyw5 },
  //     { type: "image", src: Candyw3 },
  //     { type: "image", src: Candyw9 },
  //     { type: "image", src: Candyw11 },
          
  //   ],
  // },
];

// Titles come from projectCards.ts so they are written once. The literal on
// each entry stays as the fallback for any work that has no card yet.
export const works = optimizeMedia(worksRaw).map((w) => ({
  ...w,
  title: cardBySlug[w.slug]?.title ?? w.title,
}));
