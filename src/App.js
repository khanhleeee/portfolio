import { Routes, Route } from "react-router-dom";

import FrontendDevPage from "./pages/FrontendDev";
import VideoEditorPage from "./pages/VideoEditor";
import NavBar from "./components/NavBar";

function App() {
   return (
      <div className="app bg-main-bg overflow-hidden">
         <div className="hidden">
            <div className="text-red-500 text-yellow-400 text-purple-500 text-green-500 text-gray-500 text-blue-400 text-blue-500"></div>
         </div>
         <NavBar />
         <Routes>
            <Route
               exact="true"
               path="/"
               element={<FrontendDevPage />}
            />
            <Route
               path="/videoeditor"
               element={<VideoEditorPage />}
            />
         </Routes>
      </div>
   );
}

export default App;
