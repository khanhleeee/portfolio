import { TypeAnimation } from "react-type-animation";

import Avatar from "../assets/avatar_home.png";

import SmileFace from "../assets/designs/smileface.png";
import Flower from "../assets/designs/flower.png";
import Music from "../assets/designs/music.png";
import NameTag from "../assets/designs/nametags1.png";

function Home() {
   return (
      <div
         name="home"
         className="container mx-auto pt-32 lg:pt-44"
      >
         <div className="h-full flex flex-col justify-center lg:flex-row">
            <div className="text-center lg:text-left xl:mr-20 lg:mr-28 lg:mt-14">
               <h1
                  style={{ whiteSpace: "pre-line" }}
                  className="font-secondFont leading-normal text-[42px] mb-4 md:text-[50px] xl:mb-8 xl:text-6xl xl:leading-normal tracking-wide"
               >
                  <TypeAnimation
                     sequence={["Hi! I am"]}
                     wrapper="span"
                     speed={20}
                     deletionSpeed={70}
                     cursor={false}
                  />
                  <TypeAnimation
                     sequence={[800, " Khánh"]}
                     wrapper="span"
                     className="font-black"
                     speed={20}
                     deletionSpeed={70}
                     cursor={false}
                  />
                  <TypeAnimation
                     sequence={[
                        1600,
                        "\nA Frontend Developer",
                     ]}
                     wrapper="span"
                     speed={20}
                     deletionSpeed={70}
                     cursor={false}
                  />
               </h1>
               <p className="mr-0 mb-8 px-10 text-[12px] leading-loose md:leading-loose md:text-sm lg:max-w-[460px] lg:px-0 md:text-[13px] xl:max-w-[600px] lg:mb-0">
                  My name is Khánh, a graduate of
                  Information Technology with an excellent
                  GPA from the Ho Chi Minh University of
                  Foreign Languages and Information
                  Technology. With a passion for web
                  development and design, I am seeking for
                  an entry-level frontend developer position
                  to learn and utilize my skills for making
                  significant contributions.
               </p>
            </div>

            <div className="flex justify-center align-bottom">
               <div className="relative w-[300px] md:w-[380px] px-4 xl:w-[440px]">
                  <img
                     className=""
                     src={Avatar}
                     alt="avatar"
                  />
                  <img
                     className="w-[150px] absolute top-4 -left-16 animate-bounce-slow lg:w-[180px]"
                     src={SmileFace}
                     alt=""
                  />
                  <img
                     className="w-[100px] absolute -top-12 left-2/4 animate-bounce-slow lg:w-[110px]"
                     src={Flower}
                     alt=""
                  />
                  <img
                     className="w-[100px] absolute top-28 -right-6 animate-bounce-slow lg:w-[110px]"
                     src={Music}
                     alt=""
                  />
                  <img
                     className="hidden w-[110px] absolute bottom-4 -left-24 md:block"
                     src={NameTag}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
