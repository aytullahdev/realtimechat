import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  //user details
  const [user, setUser] = useState({ name: "", email: "",pwd:"" });
  // from handel login
  const handleLogin = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      {/* Outer main div */}
      <div className="w-[400px] backdrop-blur-lg bg-black/20 p-4 rounded">
        <div>
            <h1 className="text-3xl mb-3 uppercase text-center">LOG IN</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="text-black flex flex-col space-y-5"
        >
          <div>
            <input
              type="text"
              placeholder="Enter username"
              className="py-3 px-2 rounded-md border-none outline-none w-full"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              className="py-3 px-2 rounded-md border-none outline-none w-full"
              onChange={(e) => setUser({ ...user, pwd: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 uppercase rounded w-full h-10 text-white "
            >
              LOG IN
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 uppercase rounded w-full h-10 text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
