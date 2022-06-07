import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Navbar = () => {
    const {globaluser,signOut} = useContext(UserContext)
    return (
        <div>
        {/* Navbar */}
           <div className='flex justify-between px-10'>
             <div>
                 <h1 className='text-black bg-white p-2 rounded'>{globaluser.name}</h1>
             </div>
             <div>
                 <button onClick={()=>signOut()} className='btn btn-warning text-white btn-sm'> Sign Out</button>
             </div>
           </div>
        </div>
    );
};

export default Navbar;