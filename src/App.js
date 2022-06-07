import { Route, Routes } from "react-router-dom";
import Notfound from "./Components/Error/Notfound";
import Home from "./Components/Home";

function App() {
  return (
    <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 text-white min-w-screen min-h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
    </div>
  );
}

export default App;
