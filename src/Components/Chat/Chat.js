import React from "react";
import Friend from "./Friend";
import Messagebox from "./Messagebox";
import { useState } from "react";

const Chat = ({ flist, allUsers, uid }) => {
    // sender data
    const [sdata,setSdata] = useState(null);
    // change frind handle
    const changeUser = (name,sid)=>{
        setSdata({sid:sid,name:name,uid:uid})
    }
  return (
    <div className="flex flex-row min-h-[600px] px-10 my-5 space-x-2 text-white">
      <div className="bg-white/20 backdrop-blur-lg w-1/3 relative ">
        {/* filtering data */}
        {flist &&
          allUsers &&
          allUsers
            .filter((f) => flist.includes(f.id))
            .map((e) => {
              return <Friend fid={e.id} fname={e.name} changeUser={changeUser} />;
            })}
        <button className="text-3xl text-center bg-white text-black block w-full flex justify-center items-center hover:bg-gray-200 absolute bottom-0 left-0">
          +
        </button>
      </div>
      <div className="w-2/3 bg-white/30 backdrop-blur-lg p-5">
        {flist.length === 0 && <h1>NO INTENT FOUND</h1>}
        {flist.length >= 0 && <div>
            {sdata &&  <Messagebox sdata={sdata}/>}
            
        </div>}
      </div>
    </div>
  );
};

export default Chat;
