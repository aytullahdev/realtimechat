import React from 'react';

const Friend = ({fid,fname}) => {
    return (
        <div>
            <div className='bg-white text-black text-center my-1 py-3 rounded hover:bg-gray-100 cursor-pointer'>
                    <h1>{fname}</h1>
                </div>
        </div>
    );
};

export default Friend;