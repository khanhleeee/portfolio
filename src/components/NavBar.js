/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { TiHeart } from "react-icons/ti";
import {
   AiFillGithub,
   AiFillInstagram,
   AiFillLinkedin,
} from "react-icons/ai";

import Heart from "../assets/designs/heart.png";
import { useEffect } from "react";

function NavBar() {
   const sides = [
      {
         id: 1,
         name: "Frontend Developer",
         path: "/portfolio",
      },
      // {
      //    id: 2,
      //    name: "Video Editor",
      //    path: "/videoeditor",
      // },
   ];

   const navbarItems = [
      {
         id: 1,
         link: "home",
      },
      {
         id: 2,
         link: "eduction",
      },
      {
         id: 3,
         link: "experience",
      },
      {
         id: 4,
         link: "projects",
      },
      {
         id: 5,
         link: "capabilities",
      },
   ];

   const [nav, setNav] = useState(false);
   const [activeSide, setActiveSide] = useState(
      window.location.pathname
   );
   const [active, setActive] = useState(1);

   useEffect(() => {
      setActiveSide(window.location.pathname);
   }, [window.location.pathname]);

   return (
      <div className="w-full flex fixed z-30 bg-main-bg justify-between items-center ">
         <div className="w-full flex flex-row border-b-[1px] border-b-main-white justify-center items-center md:flex-col md:border-none">
            <ul className="w-full flex justify-center items-center py-4 md:border-b-[1px] md:border-b-main-white">
               {sides.map(({ id, name, path }) => (
                  <li
                     key={id}
                     className="flex text-sm capitalize font-medium text-gray-50 cursor-pointer hover:opacity-80 duration-100 px-10 md:px-8 md:text-md max-[450px]:px-4 lg:text-base"
                  >
                     <TiHeart
                        className={`text-main-orange mr-1 transition-opacity duration-200 ${
                           activeSide === path
                              ? "opacity-100"
                              : "opacity-0"
                        }`}
                     />
                     <NavLink
                        to={path}
                        className="block text-center"
                     >
                        {name}
                     </NavLink>
                  </li>
               ))}
            </ul>

            {activeSide === "/portfolio" && (
               <ul className="hidden md:flex pr-10 pl-8 pb-4 mt-5">
                  {navbarItems.map(({ id, link }) => (
                     <li
                        key={id}
                        className="text-sm capitalize font-medium text-gray-50 "
                     >
                        <LinkScroll
                           to={link}
                           smooth
                           duration={500}
                           className={`inline-block cursor-pointer select-none py-1 px-5 mx-4 rounded-full transition-colors duration-200 ${
                              active === id
                                 ? "bg-main-orange"
                                 : "hover:bg-main-orange/50"
                           }`}
                           onClick={() => setActive(id)}
                        >
                           {link}
                        </LinkScroll>
                     </li>
                  ))}
               </ul>
            )}

            <div
               onClick={() => setNav(!nav)}
               className="block md:hidden cursor-pointer pr-4 z-30"
            >
               {nav ? (
                  <IoIosClose size={40} />
               ) : (
                  <HiBars3BottomRight size={30} />
               )}
            </div>
         </div>

         <ul
            className={`flex flex-col justify-center ${
               nav ? "translate-x-0" : "-translate-x-full"
            } absolute top-0 left-0 w-full h-screen bg-main-bg z-20 transition-transform duration-200`}
         >
            {navbarItems.map(({ id, link }) => (
               <li
                  key={id}
                  className="text-center capitalize font-medium text-gray-50 cursor-pointer hover:-translate-y-1 duration-100 px-4 py-4 text-2xl"
               >
                  <Link
                     onClick={() => setNav(!nav)}
                     to={link}
                     smooth
                     duration={500}
                  >
                     {link}
                  </Link>
               </li>
            ))}
            <div className=" flex flex-col justify-center items-center mt-14">
               <div className="relative">
                  <h3 className="font-robot font-bold text-3xl mb-4">
                     Lê Mai Khánh
                  </h3>
                  <img
                     className="absolute w-14 -top-8 -right-10"
                     src={Heart}
                     alt=""
                  />
               </div>
               <ul>
                  <li className="py-2">
                     <span>Email: </span>
                     <a
                        className="font-mono transition-opacity hover:opacity-80"
                        href="mailto:khanhleee.itvn@gmail.com"
                     >
                        khanhleee.itvn@gmail.com
                     </a>
                  </li>
               </ul>
               <div className="flex mb-6">
                  <a
                     className="p-2 hover:opacity-80 transition-opacity"
                     target="_blank"
                     href="https://www.facebook.com/khanhlee.kas/"
                  >
                     <FaFacebookSquare size={28} />
                  </a>
                  <a
                     className="p-2 hover:opacity-80 transition-opacity"
                     target="_blank"
                     href="https://www.instagram.com/__kaslee__/"
                  >
                     <AiFillInstagram size={30} />
                  </a>
                  <a
                     className="p-2 hover:opacity-80 transition-opacity"
                     target="_blank"
                     href="https://github.com/khanhleeee"
                  >
                     <AiFillGithub size={30} />
                  </a>
                  <a
                     className="p-2 hover:opacity-80 transition-opacity"
                     target="_blank"
                     href="https://www.linkedin.com/in/khanh-leee/"
                  >
                     <AiFillLinkedin size={28} />
                  </a>
               </div>
            </div>
         </ul>
      </div>
   );
}

export default NavBar;
