import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Chat from "../Chat/Chat";
const Dashboard = () => {
  const { globaluser,allUsers, isValid } = useContext(UserContext);
  
  if (isValid === false || !globaluser) {
    toast.info("User isn't valid");
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {globaluser && (
        <div className="container mx-5 py-5">
          <Navbar />
          <Chat flist={globaluser.friendlist} allUsers={allUsers} uid={globaluser.id}/>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
