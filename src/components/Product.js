import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';

import ProductCard from './elements/ProductCard';
import jsFormValid from '../assets/products/form-validation.png';
import jsMusicPlayer from '../assets/products/music-player.png';
import reactOnMovie from '../assets/products/onmovie.png';
import nodeEcommerce from '../assets/products/ecommerce.png';
import androidOnMovrom from '../assets/products/onMovieApp.png';
import nodeHotel from '../assets/products/hotel.png';

function Product() {
   const products = [
      {
         img: androidOnMovrom,
         title: 'OnMovie Application',
         technologies: 'Java, FireBase Database',
         duration: '09-12/2022',
         desc: 'A streaming movies application',
         code: 'https://github.com/khanhleeee/android-java-onmovie',
      },
      {
         img: reactOnMovie,
         title: 'OnMovie Website',
         technologies: 'HTML, SASS, ReactJS, NodeJS, MSSQL',
         duration: '09-12/2022',
         desc: 'A streaming movies website with 2 side (client- admin)',
         code: 'https://github.com/khanhleeee/react-onmovie',
      },
      {
         img: nodeEcommerce,
         title: 'Glamorous Ecommerce',
         technologies: 'HTML, Bootstrap 4, NodeJS, MongoDB',
         duration: '03-05/2022',
         desc: 'A jelwery ecommerce website with 2 side (client - admin)',
         code: 'https://github.com/khanhleeee/nodejs_ecommerce_website',
      },
      {
         img: nodeHotel,
         title: 'Parallel Shine Hotel',
         technologies: 'HTML, CSS, NodeJS, MongoDB',
         duration: '03-05/2022',
         desc: 'A hotel website with 2 side (client - admin)',
         code: 'https://github.com/khanhleeee/nodejs_hotel_website',
      },
      {
         img: jsFormValid,
         title: 'Form validation',
         technologies: 'HTML, CSS, Javascript',
         roles: 'Front-end developer',
         duration: '07/2022',
         desc: 'A small pratice about sign-up form validation',
         code: 'https://github.com/khanhleeee/js-form-validation',
         demo: 'https://khanhleeee.github.io/js-form-validation/',
      },
      {
         img: jsMusicPlayer,
         title: 'Music player',
         technologies: 'HTML, CSS, Javascript',
         duration: '06/2022',
         desc: 'A small pratice about music player',
         code: 'https://github.com/khanhleeee/js_music_player',
         demo: 'https://khanhleeee.github.io/js_music_player/',
      },
   ];

   return (
      <div
         name='products'
         className='bg-gradient-to-b from-[#0e0822] to-main-purple min-h-screen px-20 pb-24 pt-24'
      >
         <Zoom>
            <div className='flex flex-col items-center'>
               <h3 className='relative font-robot inline-block text-2xl font-bold mb-8 before:content-[""] before:absolute before:-bottom-2 before:right-1/2 before:translate-x-1/2 before:w-4/5 before:h-1 before:bg-gradient-to-r before:from-main-blue before:to-main-pink before:rounded-3xl'>
                  PRODUCTS
               </h3>
               <h4 className='mb-12'>
                  Check out some of my work here
               </h4>
            </div>
         </Zoom>
         <Fade top delay={1000}>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
               {products.map((product, i) => {
                  return (
                     <ProductCard
                        key={i}
                        product={product}
                     />
                  );
               })}
            </div>
         </Fade>
      </div>
   );
}

export default Product;
