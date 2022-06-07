import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-3xl p-5 w-[450px] backdrop-blur-xl rounded-lg bg-white/30 uppercase">
        <h1 className="text-center">Welcome To Friendly Chat</h1>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="btn bg-blue-600 hover:bg-blue-500 border-none mx-auto  my-10"
          >
            CONTINUE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
