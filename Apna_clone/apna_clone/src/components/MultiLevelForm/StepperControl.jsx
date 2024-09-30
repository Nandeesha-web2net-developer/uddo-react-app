import React from 'react'

const StepperControl = () => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>

            {/*back button */}

            <button className='bg-white text-green uppercase py-2
        px-4 rounded-xl font-semibold cursor-pointer border-2 border-light
        hover:bg-green hover:text-white transition duration-200 ease-in-out'>Back</button>

            {/*Next button*/}

            <button className='bg-lightgreen text-white uppercase py-2
        px-4 rounded-xl font-semibold cursor-pointer border-2 border-light
        hover:bg-green hover:text-white transition duration-200 ease-in-out'>Next</button>
    
    
    
    
        </div>
    )
}

export default StepperControl