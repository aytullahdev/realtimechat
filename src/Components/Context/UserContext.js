import { createContext,useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const UserContext = createContext();
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
    return(
        <UserContext.Provider value={{globaluser,setGlobaluser,signOut,allUsers,setAllusers}}>{children}</UserContext.Provider>
    )

}
export default UserContext;