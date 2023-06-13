function Card({ title, color = "white", children }) {
   return (
      <div
         className={`flex justify-center items-center text-${color} border rounded-lg hover:shadow-md hover:shadow-white/50 hover:-translate-y-2 transition-all duration-300`}
      >
         <div
            className={`w-44 h-36 flex flex-col items-center justify-center rounded-sm md:shadow transition-shadow`}
         >
            {children}
            <h3 className="text-sm cursor-default text-white mt-4">
               {title}
            </h3>
         </div>
      </div>
   );
}

export default Card;
