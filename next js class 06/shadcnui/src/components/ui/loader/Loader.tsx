import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </div>
    )
}

export default Loader