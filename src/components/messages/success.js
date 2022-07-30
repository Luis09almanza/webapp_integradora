import React from 'react';

function Success({message}){

    return(
        <div className='w-96 bg-green-900 text-white text-center p-5 rounded-lg'>
            {message}
        </div>
    )
}

export default Success;