import { Route, Routes } from "react-router-dom";
import Notfound from "./Components/Error/Notfound";
import Home from "./Components/Home";
import Login from "./Components/User/Login";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
    <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 text-white min-w-screen min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
      
    </div>
    <ToastContainer/>
    </div>
  );
}

export default App;
