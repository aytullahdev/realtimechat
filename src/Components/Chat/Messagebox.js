import React from 'react';
import {useState} from 'react';
const Messagebox = ({uid,sdata}) => {
    const [message, setMessage] = useState(null)
    const handleMessage=()=>{
        console.log()
    }
    return (
        <div>
           <div className="text-black">{sdata.name}</div>
           <div className='text-black'>
            Message
           </div>
           <div className=' absolute bottom-0  w-full'>
                <form onSubmit={handleMessage} className='flex flex-row'>
                    <div>
                        <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter your message' className='' />
                    </div>
                    <div>
                        <button className="bnt btn-md">Send</button>
                    </div>
                </form>
           </div>
        </div>
    );
};

export default Messagebox;