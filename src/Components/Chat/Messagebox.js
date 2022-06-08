import React, { useEffect } from 'react';
import {useState} from 'react';
import {collection,query,onSnapshot, where} from 'firebase/firestore';
import {db} from '../../Firebase.init'
const Messagebox = ({sdata}) => {
    const [message, setMessage] = useState(null)
    const handleMessage=(e)=>{
        e.preventDefault();
        if(message.length===0) return ;
        console.log(message)
    }
    // Get the message on snapShot
    const colRef = collection(db,'messages');

    const q = query(colRef,where("from", "==",sdata.uid));
    useEffect(()=>{
        let data = [];
        let unsub = onSnapshot(colRef,(snap)=>{
            data=snap.data;
            console.log(data);
        })   
        
        return unsub();
    },[])
    
   
    return (
        <div>
           <div className="text-black">{sdata.name}</div>
           <div className='text-black overflow-y-scroll h-[480px] bg-white/40 my-2 relative'>
                <div className='bg-white/40 px-2'>
                    <div className=' p-2'>
                        <p className='' >ayatdev</p>
                        <p className="text-xl">Hello How are your?</p>
                        <p className='text-xs'>10.30am</p>
                    </div>
                </div>
                <div className='bg-white/40 px-2 flex flex-row-reverse'>
                    <div className='p-2 inline-block '>
                        <p className='' >ayat</p>
                        <p className="text-xl">I am fine</p>
                        <p className='text-xs'>10.32am</p>
                    </div>
                </div>
            
           </div>
           <div className=' absolute bottom-0  w-full'>
                <form onSubmit={handleMessage} className='flex flex-row text-black'>
                    <div>
                        <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter your message' className=' border-none outline-none rounded w-[400px] h-[50px] px-2 mb-2' />
                    </div>
                    <div>
                        <button className="btn btn-success ml-5 btn-md">Send</button>
                    </div>
                </form>
           </div>
        </div>
    );
};

export default Messagebox;