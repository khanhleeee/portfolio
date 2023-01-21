function Card({ title, color = 'white', children }) {
   return (
      <div
         className={`flex justify-center items-center text-${color}`}
      >
         <div
            className={`w-44 h-36 flex flex-col items-center justify-center rounded-sm md:shadow transition-shadow hover:shadow-md hover:shadow-current md:shadow-current bg-transparent`}
         >
            {children}
            <h3 className='text-sm cursor-default text-white'>
               {title}
            </h3>
         </div>
      </div>
   );
}

export default Card;
