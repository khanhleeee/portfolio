import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import {
   AiFillInstagram,
   AiFillGithub,
   AiFillLinkedin,
} from 'react-icons/ai';
import { Link } from 'react-scroll';

function Footer() {
   return (
      <div className='bg-main-bg text-center md:text-left px-10 md:px-36 py-4 '>
         <div className='flex flex-col py-10 md:py-0 md:flex-row md:justify-between'>
            <div>
               <h3 className='font-robot font-bold text-3xl mb-4'>
                  Lê Mai Khánh
               </h3>
               <ul>
                  <li className='py-2'>
                     <span>Email: </span>
                     <a
                        className='font-mono transition-opacity hover:opacity-80'
                        href='mailto:khanhleee.itvn@gmail.com'
                     >
                        khanhleee.itvn@gmail.com
                     </a>
                  </li>
               </ul>
            </div>
            <div className='flex justify-center mt-8 md:mt-0'>
               <a
                  className='p-2 hover:opacity-80 transition-opacity'
                  target='_blank'
                  href='https://www.facebook.com/khanhlee.kas/'
               >
                  <FaFacebookSquare size={32} />
               </a>
               <a
                  className='p-2 hover:opacity-80 transition-opacity'
                  target='_blank'
                  href='https://www.instagram.com/__kaslee__/'
               >
                  <AiFillInstagram size={34} />
               </a>
               <a
                  className='p-2 hover:opacity-80 transition-opacity'
                  target='_blank'
                  href='https://github.com/khanhleeee'
               >
                  <AiFillGithub size={34} />
               </a>
               <a
                  className='p-2 hover:opacity-80 transition-opacity'
                  target='_blank'
                  href='https://www.linkedin.com/in/khanh-leee/'
               >
                  <AiFillLinkedin size={32} />
               </a>
            </div>
         </div>

         <span className='flex justify-center pt-16 pb-32 md:pt-28 md:pb-40'>
            Make with
            <BsFillSuitHeartFill
               className='mx-2 text-red-600'
               size={18}
            />
            Powered by Kas
         </span>
      </div>
   );
}

export default Footer;
