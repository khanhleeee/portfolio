import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoIosClose } from 'react-icons/io';

function NavBar() {
   const navbarItems = [
      {
         id: 1,
         link: 'home',
      },
      {
         id: 2,
         link: 'eduction',
      },
      {
         id: 3,
         link: 'products',
      },
      {
         id: 4,
         link: 'capabilities',
      },
   ];

   const [nav, setNav] = useState(false);

   return (
      <div className='flex fixed z-30 bg-main-bg justify-between items-center w-full h-20 text-white px-5'>
         <div className='flex items-center'>
            <h1 className="relative cursor-default text-4xl ml-3 font-bold font-robot border-2 p-2 before:content-[''] before:absolute before:bg-main-bg before:-bottom-1 before:-right-1 before:w-8 before:h-3 after:content-[''] after:absolute after:bg-main-bg after:-top-1 after:-left-1 after:w-8 after:h-3">
               Kas
            </h1>
            <ul className='hidden md:flex pr-10 pl-8'>
               {navbarItems.map(({ id, link }) => (
                  <li
                     key={id}
                     className='capitalize font-medium text-gray-50 cursor-pointer hover:scale-105 duration-100 px-4'
                  >
                     <Link to={link} smooth duration={500}>
                        {link}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <div
            onClick={() => setNav(!nav)}
            className='block md:hidden cursor-pointer pr-4 z-30'
         >
            {nav ? (
               <IoIosClose size={40} />
            ) : (
               <HiBars3BottomRight size={30} />
            )}
         </div>
         <div className='hidden md:flex flex-1 items-center px-6'>
            <span className='flex-1 border-b-2 opacity-50'></span>
            <span className='w-4 h-4 relative -left-2 border-y-2 border-r-2 opacity-90'></span>
         </div>

         {nav && (
            <ul
               className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-main-bg to-main-purple z-20`}
            >
               {navbarItems.map(({ id, link }) => (
                  <li
                     key={id}
                     className='capitalize font-medium text-gray-50 cursor-pointer hover:scale-105 duration-100 px-4 py-6 text-3xl'
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
            </ul>
         )}
      </div>
   );
}

export default NavBar;
