import { optimizeMedia } from "../utils/cloudinary";
// Hydracelt and Candy Land stills are served from the Cloudflare CDN as WebP.
const CDN = "https://cdn.perfectpixelpro.com/img";
const CDN_VIDEO = "https://cdn.perfectpixelpro.com/video";

const Hydraw1 = `${CDN}/hydraw1.webp`;
const Hydraw4 = `${CDN}/hydraw4.webp`;
const Hydraw13 = `${CDN}/hydraw13.webp`;


import Blackw1 from "../assets/blackw1.jpg";
import Blackw2 from "../assets/blackw2.jpg";
import Blackw3 from "../assets/blackw3.jpg";
import Blackw4 from "../assets/blackw4.jpg";
import Blackw6 from "../assets/blackw6.jpg";
import Blackw7 from "../assets/blackw7.jpg";


import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";



const worksRaw = [
  {
    id: 1,
    slug: "hydracelt",
    title: "Hydracelt",
    gallery: [
      { type: "image", src: `${CDN}/hydraw5.webp` },
      { type: "image", src: `${CDN}/hydraw2.webp` },
      { type: "video", src: `${CDN_VIDEO}/HydraceltVideo.webm`, poster: Hydraw1 },
      { type: "image", src: `${CDN}/hydraw3.webp` },
      { type: "image", src: `${CDN}/hydraw13.webp` },
      { type: "video", src: `${CDN_VIDEO}/HydraceltVideo2.webm`, poster: Hydraw4 },
      { type: "image", src: `${CDN}/hydraw7.webp` },
      { type: "image", src: `${CDN}/hydraw12.webp` },
      { type: "image", src: `${CDN}/hydraw10.webp` },
      { type: "image", src: `${CDN}/hydraw9.webp` },
      { type: "video", src: `${CDN_VIDEO}/Hydracelt3.webm`, poster: Hydraw13 },
    ],
  },

  {
    id: 2,
    slug: "the-black-in-hr",
    title: "The Black in HR",
    gallery: [
      { type: "image", src: "/assets/blackw1.jpg" },
      { type: "video", src: `${CDN_VIDEO}/BlackVideo.webm`, poster: Blackw2 },
      { type: "image", src: "/assets/black14.jpg" },
      { type: "image", src: "/assets/black10.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Black2.webm`, poster: Blackw4 },
      { type: "image", src: "/assets/black8.jpg" },
      { type: "image", src: "/assets/black11.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Black3.webm`, poster: Blackw6 },
      { type: "image", src: "/assets/black9.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Black4.webm`, poster: Blackw7 },
      { type: "image", src: "/assets/black12.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Black5.webm`, poster: Blackw1 },
      { type: "image", src: "/assets/black18.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Black6.webm`, poster: Blackw3 },
      { type: "image", src: "/assets/black16.jpg" },
      
    ],
  },

  {
    id: 3,
    slug: "the-social-99",
    title: "The Social 99",
    gallery: [
      { type: "image", src: "/assets/social19.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Social99_3Video.webm`, poster: Impre1 },
      { type: "image", src: "/assets/social2.jpg" },
      { type: "image", src: "/assets/Social22.jpg" },
      { type: "image", src: "/assets/social3.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Social99Video.webm`, poster: Impre4 },
      { type: "image", src: "/assets/social14.jpg" },
      { type: "image", src: "/assets/social20.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Social99_2Video.webm`, poster: Impre2 },
      { type: "image", src: "/assets/social6.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Social99_4Video.webm`, poster: Impre3 },
      { type: "image", src: "/assets/social7.jpg" },
      { type: "image", src: "/assets/social17.jpg" },
      { type: "image", src: "/assets/social13.jpg" },
      { type: "image", src: "/assets/social18.png" },
      
   
   
    ],
  },

   {
    id: 4,
    slug: "smm-hiring",
    title: "SMM Hiring",
    gallery: [
      { type: "image", src: `${CDN}/smm11.webp` },
      { type: "video", src: `${CDN_VIDEO}/Smm3.webm`, poster: Impre1 },
      { type: "image", src: `${CDN}/smm12.webp` },
      { type: "image", src: "/assets/smm13.jpg" },
      { type: "image", src: `${CDN}/smm14.webp` },
           { type: "video", src: `${CDN_VIDEO}/Smm1.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/smm15.webp` },
      { type: "image", src: "/assets/smm17.jpg" },
      { type: "video", src: `${CDN_VIDEO}/Smm2.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/smm16.webp` },
      { type: "image", src: `${CDN}/smm3.webp` }, 
      { type: "image", src: "/assets/smm8.jpg" },  
      { type: "image", src: `${CDN}/smm2.webp` },         
    ],
  },

  {
    id: 5,
    slug: "stone-the-myth",
    title: "Stone the Myth",
    gallery: [
      { type: "image", src: "/assets/Stone1.jpg" },
      { type: "video", src: `${CDN_VIDEO}/StoneV.webm`, poster: Impre1 },
      { type: "image", src: "/assets/Stone2.jpg" },
      { type: "image", src: "/assets/Stone3.jpg" },
      { type: "video", src: `${CDN_VIDEO}/StoneV.webm`, poster: Impre4 },
      { type: "image", src: "/assets/Stone4.jpg" },
      { type: "image", src: "/assets/Stone5.jpg" },
      { type: "image", src: "/assets/Stone6.jpg"},
      { type: "image", src: "/assets/Stone7.jpg" },      
    ],
  },

  {
    id: 6,
    slug: "candy-land",
    title: "Candy Land",
    gallery: [
      { type: "image", src: `${CDN}/candyw4.webp` },
      { type: "image", src: `${CDN}/candyw7.webp` },
      { type: "video", src: `${CDN_VIDEO}/candyV1.webm`, poster: Impre1 },
      { type: "image", src: `${CDN}/candyw12.webp` },
      { type: "image", src: `${CDN}/candyw8.webp` },
      { type: "image", src: `${CDN}/candyw5.webp` },
      { type: "image", src: `${CDN}/candyw10.webp` },
      { type: "video", src: `${CDN_VIDEO}/candyV2.webm`, poster: Impre4 },
      { type: "image", src: `${CDN}/candyw1.webp` },
      { type: "image", src: `${CDN}/candyw13.webp` },
      { type: "image", src: `${CDN}/candyw6.webp` },
      { type: "image", src: `${CDN}/candyw2.webp` },
      { type: "image", src: `${CDN}/candyw3.webp` },
      { type: "image", src: `${CDN}/candyw9.webp` },
      { type: "image", src: `${CDN}/candyw11.webp` },
          
    ],
  },

  {
    id: 7,
    slug: "bumper-buzz",
    title: "Bumper Buzz",
    gallery: [
        { type: "image", src: "/assets/Buzzn1.jpg" },
      { type: "image", src: "/assets/Buzz7.jpg" },
       { type: "video", src: `${CDN_VIDEO}/Buzzv1.webm`, poster: Impre4 },
      { type: "image", src: "/assets/Buzz8.jpg" },
      { type: "image", src: "/assets/Buzzn3.jpg" },
       { type: "video", src: `${CDN_VIDEO}/Buzzv2.webm`, poster: Impre4 },
      { type: "image", src: "/assets/Buzzn5.jpg" },
      { type: "image", src: "/assets/Buzz4.jpg" },
      { type: "image", src: "/assets/BuzzL12.png" },
      { type: "image", src: "/assets/Buzzn2.jpg" },
      { type: "image", src: "/assets/Buzzn4.jpg" },  
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

export const works = optimizeMedia(worksRaw);
