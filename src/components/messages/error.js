import React from 'react';

function Error({message}){

    return(
        <div className='w-96 bg-red-900 text-white text-center p-5 rounded-lg'>
            {message}
        </div>
    )
}

export default Error;