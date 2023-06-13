import React from "react";

import Home from "../components/Home";
import SocialLinks from "../components/SocialLinks";
import Education from "../components/Education";
import Tech from "../components/Tech";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const FrontendDev = () => {
   return (
      <div>
         <SocialLinks />
         <Home />
         <Education />
         <Experience />
         <Product />
         <Tech />
         <Footer />
      </div>
   );
};

export default FrontendDev;
