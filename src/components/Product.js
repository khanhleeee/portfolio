import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

import ProductCard from "./elements/ProductCard";
import jsFormValid from "../assets/products/form-validation.png";
import jsMusicPlayer from "../assets/products/music-player.png";
import reactOnMovie from "../assets/products/onmovie.png";
import nodeEcommerce from "../assets/products/ecommerce.png";
import androidOnMovrom from "../assets/products/onMovieApp.png";
import nodeHotel from "../assets/products/hotel.png";
import reactPortfolio from "../assets/products/portfolio.png";

import SmileFace from "../assets/designs/smileface.png";

function Product() {
   const products = [
      {
         img: reactPortfolio,
         title: "Khanh Leee's Portfolio",
         technologies: "ReactJS, TailwindCSS",
         duration: "May - June 2022",
         desc: "A personal portfolio",
         code: "https://github.com/khanhleeee/portfolio",
         demo: "https://khanhleeee.github.io/portfolio/",
      },
      {
         img: androidOnMovrom,
         title: "OnMovie Application",
         technologies: "Java, FireBase Database",
         duration: "Sep - Dec 2022",
         desc: "A streaming movies application",
         code: "https://github.com/khanhleeee/android-java-onmovie",
      },
      {
         img: reactOnMovie,
         title: "OnMovie Website",
         technologies: "HTML, SASS, ReactJS, NodeJS, MSSQL",
         duration: "Sep - Dec 2022",
         desc: "A streaming movies website with 2 side (client- admin)",
         code: "https://github.com/khanhleeee/react-onmovie",
      },
      {
         img: nodeEcommerce,
         title: "Glamorous Ecommerce",
         technologies: "HTML, Bootstrap 4, NodeJS, MongoDB",
         duration: "March - May 2022",
         desc: "A jelwery ecommerce website with 2 side (client - admin)",
         code: "https://github.com/khanhleeee/nodejs_ecommerce_website",
      },
      {
         img: nodeHotel,
         title: "Parallel Shine Hotel",
         technologies: "HTML, CSS, NodeJS, MongoDB",
         duration: "March - May 2022",
         desc: "A hotel website with 2 side (client - admin)",
         code: "https://github.com/khanhleeee/nodejs_hotel_website",
      },
      {
         img: jsFormValid,
         title: "Form validation",
         technologies: "HTML, CSS, Javascript",
         roles: "Front-end developer",
         duration: "Jul 2022",
         desc: "A small pratice about sign-up form validation",
         code: "https://github.com/khanhleeee/js-form-validation",
         demo: "https://khanhleeee.github.io/js-form-validation/",
      },
      {
         img: jsMusicPlayer,
         title: "Music player",
         technologies: "HTML, CSS, Javascript",
         duration: "Jun 2022",
         desc: "A small pratice about music player",
         code: "https://github.com/khanhleeee/js_music_player",
         demo: "https://khanhleeee.github.io/js_music_player/",
      },
   ];

   return (
      <div
         name="projects"
         className="container mx-auto flex flex-col justify-center items-center px-14 pt-40"
      >
         <div className="relative flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-center">
               <h3 className="font-secondFont font-semibold text-4xl tracking-wide py-2 xl:text-5xl lg:mb-10">
                  PROJECTS
               </h3>
               <img
                  className="absolute w-28 mt-2 -top-[74px] -right-10 rotate-[26deg] sm:w-32 sm:-top-20 sm:-right-20 xl:-top-8 xl:-right-28"
                  src={SmileFace}
                  alt=""
               />
            </div>
         </div>

         <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {products.map((product, i) => {
               return (
                  <ProductCard key={i} product={product} />
               );
            })}
         </div>
      </div>
   );
}

export default Product;
