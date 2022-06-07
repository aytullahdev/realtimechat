import React,{ useContext } from "react";
import Friend from "./Friend";
import Messagebox from "./Messagebox";
import { useState } from "react";
import { collection , onSnapshot, doc, getDoc, updateDoc} from "firebase/firestore";
import { db  } from "../../Firebase.init";
import UserContext from "../Context/UserContext";
const Chat = ({ uid }) => {
    const { globaluser,allUsers } = useContext(UserContext);
    // sender data
    const [sdata,setSdata] = useState(null);
    //Not friend
    const [notFriend, setNotFriend] = useState()
    // change frind handle
    const changeUser = (name,sid)=>{
        setSdata({sid:sid,name:name,uid:uid})
    }
    // Handle add Friedn
    const handleAddFriend=async (uid,fid)=>{
        console.log(uid,fid);
        const docref = doc(db,'users',fid);
        const docref2 = doc(db,'users',uid);
        let fuflist  = [];
        let suflist = [];
        getDoc(docref).then((doc)=>{
            const data = {...doc.data()};
            
           fuflist = [...data.friendlist]
           if(!fuflist.includes(uid)){
            fuflist = [...data.friendlist,uid]
            updateDoc(docref,{friendlist:fuflist});
           }
           
        })
        getDoc(docref2).then((doc)=>{
          const data = {...doc.data()};
          
         suflist = [...data.friendlist]
         if(!suflist.includes(fid)){
          suflist = [...data.friendlist,fid]
          updateDoc(docref2,{friendlist:suflist});
         }
         
      })
        
        
    }
    // Make a snapShot in user data
    const usercolRef = collection(db,"users");
    
    onSnapshot(usercolRef,(snap)=>{
        const users = [];
        snap.forEach((doc)=>{
             users.push({...doc.data(),id:doc.id,pwd:""})
        });
        if(globaluser){
            users.forEach((usr)=>{
                if(usr.id===globaluser.id){
                    setNotFriend(allUsers
                        .filter((f) => !(f.id===uid) && !usr.friendlist.includes(f.id)));
                    
                }
            })
        }
    })
  return (
    <div className="flex flex-row min-h-[600px] px-10 my-5 space-x-2 text-white">
      <div className="bg-white/20 backdrop-blur-lg w-1/3 relative ">
        {/* filtering data */}
        {globaluser.friendlist &&
          allUsers &&
          allUsers
            .filter((f) => globaluser.friendlist.includes(f.id))
            .map((e) => {
              return <Friend fid={e.id} fname={e.name} changeUser={changeUser} />;
            })}
        <label for="addFriednModal" class="btn modal-button" className="text-3xl text-center bg-white text-black block w-full flex justify-center items-center hover:bg-gray-200 absolute bottom-0 left-0">
          +
        </label>
      </div>
      <div className="w-2/3 bg-white/30 backdrop-blur-lg p-5 relative">
        {globaluser.friendlist.length === 0 && <h1>NO INTENT FOUND</h1>}
        {globaluser.friendlist.length >= 0 && <div>
            {sdata &&  <Messagebox sdata={sdata}/>}
            
        </div>}
      </div>
    



<input type="checkbox" id="addFriednModal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="addFriednModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <div className="py-4 flex flex-col space-y-2">
           {notFriend && notFriend.map((e)=>{
               return( <div onClick={()=>handleAddFriend(uid,e.id)} className="text-white bg-green-400 py-2 text-center rounded text-2xl cursor-pointer hover:bg-green-600">{e.name}</div>)
           })}
     </div>
  </div>
</div>
    </div>
  );
};

export default Chat;
