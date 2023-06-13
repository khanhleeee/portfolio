import { AiFillHtml5 } from "react-icons/ai";
import {
   DiCss3,
   DiReact,
   DiJava,
   DiMongodb,
   DiMsqlServer,
   DiJavascript1,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import {
   SiTailwindcss,
   SiFirebase,
   SiOracle,
} from "react-icons/si";

import Card from "./elements/Card";
import Flower from "../assets/designs/flower.png";

function Tech() {
   const technologies = [
      {
         Icon: AiFillHtml5,
         title: "HTML",
         color: "red-500",
      },
      {
         Icon: DiCss3,
         title: "CSS",
         color: "blue-400",
      },
      {
         Icon: DiJavascript1,
         title: "Javascript",
         color: "yellow-400",
      },
      {
         Icon: FaBootstrap,
         title: "Bootstrap",
         color: "purple-500",
      },
      {
         Icon: SiTailwindcss,
         title: "Tailwind",
         color: "blue-400",
      },
      {
         Icon: DiReact,
         title: "ReactJS",
         color: "blue-500",
      },
      {
         Icon: DiJava,
         title: "Java",
      },
      {
         Icon: DiMongodb,
         title: "MongoDB",
         color: "green-500",
      },
      {
         Icon: SiFirebase,
         title: "FireBase",
         color: "yellow-400",
      },
      {
         Icon: SiOracle,
         title: "Oracle",
         color: "red-500",
      },
      // {
      //    Icon: DiMsqlServer,
      //    title: "MSSQL",
      //    color: "gray-500",
      //    position: "top-[30px] left-[54px]",
      // },
   ];

   return (
      <div
         name="capabilities"
         className="container mx-auto max-h-fit flex flex-col justify-center items-center pt-52 pb-48"
      >
         <div className="flex flex-col justify-center items-center mb-10">
            <div className="relative">
               <h3 className="relative z-10 font-secondFont font-semibold text-4xl tracking-wide py-2 uppercase mb-4 lg:text-5xl">
                  capabilities
               </h3>
               <img
                  className="absolute -top-6 -right-6 w-14 lg:w-20 lg:-right-12 lg:-top-10"
                  src={Flower}
                  alt=""
               />
            </div>
            <span className="text-sm text-center mb-4">
               There are technologies I've worked with
            </span>
         </div>

         <div className="grid place-content-center grid-cols-2 gap-x-8 gap-y-10 md:px-4 md:grid-cols-4 md:gap-x-4 xl:grid-cols-5 max-[400px]:grid-cols-1">
            {technologies.map(
               ({ Icon, title, color }, i) => (
                  <Card key={i} title={title} color={color}>
                     <div className={`text-${color}`}>
                        <Icon className="w-10 h-10 text-inherit" />
                     </div>
                  </Card>
               )
            )}
         </div>
      </div>
   );
}

export default Tech;
