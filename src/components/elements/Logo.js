import React from "react";

const Logo = () => {
   return (
      <h1 className="relative cursor-default text-4xl ml-3 font-bold font-robot border-2 p-2 before:content-[''] before:absolute before:bg-main-bg before:-bottom-1 before:-right-1 before:w-8 before:h-3 after:content-[''] after:absolute after:bg-main-bg after:-top-1 after:-left-1 after:w-8 after:h-3">
         Kas
      </h1>
   );
};

export default Logo;
