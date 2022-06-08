import { collection , onSnapshot} from "firebase/firestore";
import { createContext,useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../Firebase.init";
const UserContext = createContext();
// firebase


export function UserContextProvider({children}){
    const [globaluser,setGlobaluser] = useState(null);
    const [allUsers,setAllusers] = useState();
    const id = localStorage.getItem("usercred");
    const isValid=()=>{
        if(!id || !globaluser || !(globaluser.id===id)){
            return false;
        }else{
            return true;
        }
        

    }
    const signOut=()=>{
        setGlobaluser(null);
    }
    // firebase collection
    const usercolRef = collection(db,"users");
    
     onSnapshot(usercolRef,(snap)=>{
        const users = [];
        snap.forEach((doc)=>{
             users.push({...doc.data(),id:doc.id,pwd:""})
        });
        setAllusers(users);
        if(globaluser){
            users.forEach((usr)=>{
                if(usr.id===globaluser.id){
                    setGlobaluser(usr);
                    
                    
                }
            })
        }
    })
    return(
        <UserContext.Provider value={{globaluser,setGlobaluser,signOut,allUsers,setAllusers}}>{children}</UserContext.Provider>
    )

}
export default UserContext;