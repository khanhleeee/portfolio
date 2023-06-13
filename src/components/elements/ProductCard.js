/* eslint-disable react/jsx-no-target-blank */
import { CgWebsite } from "react-icons/cg";
import { BsCode } from "react-icons/bs";

function ProductCard({ product }) {
   const {
      img,
      title,
      duration,
      technologies,
      demo,
      code,
      desc,
   } = product;

   return (
      <div className=" p-4 rounded-md">
         <div
            style={{ backgroundImage: `url(${img})` }}
            className="w-full h-[150px] bg-cover rounded border border-main-white"
         />
         <div className="relative mt-2 py-2 w-full flex flex-col justify-between">
            <div className="border-b-main-white h-[120px] border-b-2 p-2 pb-4 flex flex-col justify-start lg:h-[200px]">
               <div className="mb-1 flex-1">
                  <h4 className="text-lg font-semibold">
                     {title}
                  </h4>
                  <span className="text-sm py-1 hidden lg:block opacity-80 mb-4">
                     {technologies}
                  </span>
                  <span>{desc}</span>
               </div>
               <span className="text-right text-sm font-semibold">
                  {duration}
               </span>
            </div>

            <div className="flex mt-4 font-semibold">
               <a
                  className="bg-main-orange px-4 rounded-r-lg rounded-b-lg hover:scale-105 origin-top-left transition-transform"
                  href={code}
                  target="_blank"
               >
                  Code
               </a>
               {demo && (
                  <a
                     className="bg-main-white text-main-bg px-4 ml-4 rounded-r-lg rounded-b-lg hover:scale-105 origin-top-left transition-transform"
                     href={demo}
                     target="_blank"
                  >
                     Demo
                  </a>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
