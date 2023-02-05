import Fade from 'react-reveal/Fade';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-scroll';

import MyImg from '../assets/kaslee4.jpg';

function Home() {
   return (
      <div
         name='home'
         className='md:h-screen w-full pt-20 bg-gradient-to-b from-main-bg to-[#0e0822]'
      >
         <div className='mx-auto flex flex-col items-center justify-center pt-10 md:pt-0 md:flex-row h-full px-7'>
            <Fade left>
               <div className='max-w-screen-sm px-2'>
                  <h2 className='text-3xl sm:text-4xl font-robot font-medium mb-5'>
                     Front-end Developer
                  </h2>
                  <p className='text-gray-500 text-sm text-justify max-w-md'>
                     My name is Khánh and my preferred name
                     is Khánh Lê or Kas. I am a final year
                     student in Ho Chi Minh university of
                     foreign languages and information
                     technology (HUFLIT). I am passionate
                     about software development and visual
                     identity. Therefore, becoming a
                     front-end developer is what I would
                     love to be. I am now ready to kick
                     start my career.
                  </p>
                  <div className='flex w-full justify-center md:justify-start'>
                     <Link
                        to='eduction'
                        smooth
                        duration={300}
                        className='group flex items-center text-sm font-robot font-medium mt-6 p-3 rounded bg-gradient-to-br from-main-pink to-main-pink via-main-blue transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 select-none'
                     >
                        Let's start
                        <IoIosArrowDropright
                           size={20}
                           className='ml-2 group-hover:rotate-90 duration-300'
                        />
                     </Link>
                  </div>
               </div>
            </Fade>
            <Fade right>
               <div className='flex justify-center items-center mt-8 md:mt-0 ml-0 md:ml-20 mb-8'>
                  <div className='flex relative items-center justify-center bg-transparent border-2 w-72 h-72 md:w-96 md:h-96 rounded-full before:content-[""] before:border-2 hover:before:animate-spin before:w-64 before:h-64 md:before:w-80 md:before:h-80 before:rounded-full before:border-dashed'>
                     <div className='absolute rounded-full w-60 h-60 md:w-72 md:h-72 overflow-hidden'>
                        <img
                           className='object-contain'
                           src={MyImg}
                           alt='me'
                        />
                     </div>
                  </div>
               </div>
            </Fade>
         </div>
      </div>
   );
}

export default Home;
