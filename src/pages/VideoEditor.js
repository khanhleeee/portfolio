import React from "react";

import NavBar from "../components/NavBar";
import { TypeAnimation } from "react-type-animation";

const VideoEditor = () => {
   return (
      <div>
         <NavBar hiddenItems={true} />
         <div className="container h-screen bg-main-bg flex justify-center items-center">
            <TypeAnimation
               sequence={["COMING SOON..."]}
               wrapper="h1"
               className="text-6xl font-semibold tracking-widest"
               speed={20}
               deletionSpeed={70}
            />
         </div>
      </div>
   );
};

export default VideoEditor;
