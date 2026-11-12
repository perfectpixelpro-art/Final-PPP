import { optimizeMedia } from "../utils/cloudinary";
import Hydraw1 from "../assets/hydraw1.jpg";
import Hydraw4 from "../assets/hydraw4.jpg";
import Hydraw13 from "../assets/hydraw13.jpg";


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
      { type: "image", src: "/assets/hydraw5.jpg" },
      { type: "image", src: "/assets/hydraw2.jpg" },
      { type: "video", src: "/assets/HydraceltVideo.mp4", poster: Hydraw1 },
      { type: "image", src: "/assets/hydraw3.jpg" },
      { type: "image", src: "/assets/hydraw13.jpg" },
      { type: "video", src: "/assets/HydraceltVideo2.mp4", poster: Hydraw4 },
      { type: "image", src: "/assets/hydraw7.jpg" },
      { type: "image", src: "/assets/hydraw12.jpg" },
      { type: "image", src: "/assets/hydraw10.jpg" },
      { type: "image", src: "/assets/hydraw9.jpg" }, 
      { type: "video", src: "/assets/Hydracelt3.mp4", poster: Hydraw13 },
    ],
  },

  {
    id: 2,
    slug: "the-black-in-hr",
    title: "The Black in HR",
    gallery: [
      { type: "image", src: "/assets/blackw1.jpg" },
      { type: "video", src: "/assets/BlackVideo.mp4", poster: Blackw2 },
      { type: "image", src: "/assets/black14.jpg" },
      { type: "image", src: "/assets/black10.jpg" },
      { type: "video", src: "/assets/Black2.mp4", poster: Blackw4 },
      { type: "image", src: "/assets/black8.jpg" },
      { type: "image", src: "/assets/black11.jpg" },
      { type: "video", src: "/assets/Black3.mp4", poster: Blackw6 },
      { type: "image", src: "/assets/black9.jpg" },
      { type: "video", src: "/assets/Black4.mp4", poster: Blackw7 },
      { type: "image", src: "/assets/black12.jpg" },
      { type: "video", src: "/assets/Black5.mp4", poster: Blackw1 },
      { type: "image", src: "/assets/black18.jpg" },
      { type: "video", src: "/assets/Black6.mp4", poster: Blackw3 },
      { type: "image", src: "/assets/black16.jpg" },
      
    ],
  },

  {
    id: 3,
    slug: "the-social-99",
    title: "The Social 99",
    gallery: [
      { type: "image", src: "/assets/social19.jpg" },
      { type: "video", src: "/assets/Social99_3Video.mp4", poster: Impre1 },
      { type: "image", src: "/assets/social2.jpg" },
      { type: "image", src: "/assets/Social22.jpg" },
      { type: "image", src: "/assets/social3.jpg" },
      { type: "video", src: "/assets/Social99Video.mp4", poster: Impre4 },
      { type: "image", src: "/assets/social14.jpg" },
      { type: "image", src: "/assets/social20.jpg" },
      { type: "video", src: "/assets/Social99_2Video.mp4", poster: Impre2 },
      { type: "image", src: "/assets/social6.jpg" },
      { type: "video", src: "/assets/Social99_4Video.mp4", poster: Impre3 },
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
      { type: "image", src: "/assets/smm11.jpg" },
      { type: "video", src: "/assets/Smm3.mp4", poster: Impre1 },
      { type: "image", src: "/assets/smm12.jpg" },
      { type: "image", src: "/assets/smm13.jpg" },
      { type: "image", src: "/assets/smm14.jpg" },
           { type: "video", src: "/assets/Smm1.mp4", poster: Impre4 },
      { type: "image", src: "/assets/smm15.jpg" },
      { type: "image", src: "/assets/smm17.jpg" },
      { type: "video", src: "/assets/Smm2.mp4", poster: Impre4 },
      { type: "image", src: "/assets/smm16.jpg" },
      { type: "image", src: "/assets/smm3.jpg" }, 
      { type: "image", src: "/assets/smm8.jpg" },  
      { type: "image", src: "/assets/smm2.jpg" },         
    ],
  },

  {
    id: 5,
    slug: "stone-the-myth",
    title: "Stone the Myth",
    gallery: [
      { type: "image", src: "/assets/Stone1.jpg" },
      { type: "video", src: "/assets/StoneV.mp4", poster: Impre1 },
      { type: "image", src: "/assets/Stone2.jpg" },
      { type: "image", src: "/assets/Stone3.jpg" },
      { type: "video", src: "/assets/StoneV.mp4", poster: Impre4 },
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
        { type: "image", src: "/assets/candyw4.jpg" },
      { type: "image", src: "/assets/candyw7.jpg" },
      { type: "video", src: "/assets/candyV1.mp4", poster: Impre1 },
      { type: "image", src: "/assets/candyw12.png" },
      { type: "image", src: "/assets/candyw8.jpg" },
      { type: "image", src: "/assets/candyw5.jpg" },
      { type: "image", src: "/assets/candyw10.png" },
      { type: "video", src: "/assets/candyV2.mp4", poster: Impre4 }, 
      { type: "image", src: "/assets/candyw1.jpg" },
      { type: "image", src: "/assets/candyw13.png" },
      { type: "image", src: "/assets/candyw6.jpg" },
      { type: "image", src: "/assets/candyw2.jpg" },
      { type: "image", src: "/assets/candyw3.jpg" },
      { type: "image", src: "/assets/candyw9.png" },
      { type: "image", src: "/assets/candyw11.png" },
          
    ],
  },

  {
    id: 7,
    slug: "bumper-buzz",
    title: "Bumper Buzz",
    gallery: [
        { type: "image", src: "/assets/Buzzn1.jpg" },
      { type: "image", src: "/assets/Buzz7.jpg" },
       { type: "video", src: "/assets/Buzzv1.mp4", poster: Impre4 }, 
      { type: "image", src: "/assets/Buzz8.jpg" },
      { type: "image", src: "/assets/Buzzn3.jpg" },
       { type: "video", src: "/assets/Buzzv2.mp4", poster: Impre4 }, 
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
