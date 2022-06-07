import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../Firebase.init";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Login = () => {
  //user details from form
  const [user, setUser] = useState({ name: "", email: "",pwd:"" });
  const { setGlobaluser } = useContext(UserContext);
  const navigate = useNavigate();
  // from handel login
  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle username validaing
    if(!user.name || user.name.length<=0){
        toast.error("Please Enter username");
        return
    }
    if(!user.pwd || user.pwd.length<=5){
        toast.error("Check your password");
        return;
    }
    // Everything is fine
    //Getting the user data from firebase
    const tempdata = await getUser();
    
    const userdata = tempdata[0];
   
    if(!userdata)   {
        toast.error("User not found");
        return;
    }
    
    
    
    if(userdata.pwd===user.pwd && userdata.name===user.name){
        toast.success("Login sucessfull");
        localStorage.setItem("usercred",userdata.id);
        //Navigate to dashboard
        
        setGlobaluser({name:userdata.name,id:userdata.id,friendlist:userdata.friendlist})
        navigate('/dashboard');
       
    }else{
        toast.error("Crdentials not matched");
    }
    

  };
  //Gating the users;
  const getUser = async ()=>{
    const usercolRef = collection(db,"users");
    const q = query(usercolRef,where("name","==",user.name));
    const data = await getDocs(q,usercolRef);
   return data.docs.map((doc)=>{
        return {...doc.data(),id:doc.id};
    });
}

  
   
  return (
    <div className="min-w-screen min-h-screen  flex justify-center items-center">
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
            type="button"
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
