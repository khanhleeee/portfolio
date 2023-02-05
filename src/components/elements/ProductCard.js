import { CgWebsite } from 'react-icons/cg';
import { BsCode } from 'react-icons/bs';

function ProductCard({ product }) {
   const {
      img,
      title,
      duration,
      desc,
      technologies,
      demo,
      code,
   } = product;

   return (
      <div className='bg-slate-700/50 sm:flex h-96 sm:h-auto rounded-md shadow-lg border'>
         <div
            style={{ backgroundImage: `url(${img})` }}
            className='w-full h-2/4 sm:w-72 sm:h-full bg-cover rounded-l-md'
         />
         <div className='relative py-2 w-full flex flex-col justify-between'>
            <div className='flex flex-col h-32 sm:h-auto justify-center px-4'>
               <div className='flex flex-col md:flex-row md:justify-between'>
                  <div className='mb-1'>
                     <h4 className='font-robot font-bold text-lg'>
                        {title}
                     </h4>
                     <span className='font-mono text-sm text-white/40 hidden lg:block'>
                        {technologies}
                     </span>
                  </div>
                  <span className='font-mono text-sm text-white pt-1'>
                     {duration}
                  </span>
               </div>
               <p className='text-sm text-white/70 py-1'>
                  {desc}
               </p>
            </div>
            <div
               className={`flex ${
                  demo
                     ? 'justify-between'
                     : 'justify-center'
               } text-gray-500 items-end w-full mt-4 px-8 lg:px-24 divide-slate-600 border-t border-slate-600`}
            >
               <a
                  className='flex items-center text-sm p-2 transition-all hover:text-white hover:scale-105 cursor-pointer'
                  href={code}
                  target='_blank'
               >
                  Code
                  <BsCode className='ml-2' size={15} />
               </a>
               {demo && (
                  <a
                     className='flex items-center text-sm p-2 transition-all hover:text-white hover:scale-105 cursor-pointer'
                     href={demo}
                     target='_blank'
                  >
                     Demo
                     <CgWebsite
                        className='ml-2'
                        size={15}
                     />
                  </a>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
