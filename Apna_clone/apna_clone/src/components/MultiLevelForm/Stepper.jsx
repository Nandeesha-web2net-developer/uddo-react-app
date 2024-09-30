import React, { useEffect, useRef, useState } from 'react'

const Stepper = ({steps, currentStep}) => {
const [newStep, setNewstep] = useState([]);
const stepRef = useRef();

const updateStep=(stepNumber, steps) =>{

};

    useEffect(()=>{
        const stepsState = steps.map((step, index)=>
        Object.assign({},{
            description: step,
            competed:false,
            highllighted:index == 0 ? true : false,
            selected : index == 0 ? true : false,
                })
        );
        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current);
    },[steps, currentStep] );


    const displaySteps = (
        <div className='w-full flex items-center'>
            <div className='relative flex flex-col items-center
            text-lightgreen'>
                <div className='rounded-full transition duration-500 ease-in-out
                border-lightgreen border-[2px] h-12 w-12 flex justify-center items-center'>
                    {/*Display Number*/}1
                </div>
    
                <div className='absolute top-0 text-center mt-16 w-32 text-xs
                    font-medium uppercase'>
    
                    {/*Siplay description*/}
    
                    description
    
                </div>
    
            </div>
            <div className='flex-auto border-t-2 transition duration-500 ease-in-out'>
    
                {/*Display line*/}
    
    
            </div>
        </div>
    )
    return (
        <div className='mx-4 p-4 flex justify-between items-center'>
            {displaySteps}
        </div>
    )
}

export default Stepper