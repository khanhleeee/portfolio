function Card({ title, color = 'white', children }) {
   return (
      <div className='flex justify-center items-center'>
         <div
            className={`w-44 h-36 flex flex-col items-center justify-center rounded-sm md:shadow transition-shadow hover:shadow-md hover:shadow-${color} md:shadow-${color} bg-transparent`}
         >
            {children}
            <h3 className='text-sm cursor-default'>
               {title}
            </h3>
         </div>
      </div>
   );
}

export default Card;
