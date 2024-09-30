import React, { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep }) => {
    const [newSteps, setNewSteps] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const updatedSteps = steps.map((step, index) => {
            if (index === stepNumber) {
                return {
                    ...step,
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
            } else if (index < stepNumber) {
                return {
                    ...step,
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
            } else {
                return {
                    ...step,
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
            }
        });

        return updatedSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) => ({
            description: step,
            completed: false,
            highlighted: index === 0,
            selected: index === 0,
        }));
        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewSteps(current);
    }, [steps, currentStep]);

    return (
        <div className='mx-4 p-4 flex justify-between items-center'>
            {newSteps.map((step, index) => (
                <div key={index} className={index !== newSteps.length - 1 ? "w-full flex items-center" : "flex items-center"}>
                    <div className='relative flex flex-col items-center text-lightgreen'>
                        <div className={`rounded-full transition duration-500 ease-in-out border-lightgreen border-2 h-12 w-12 flex justify-center items-center ${step.selected ? "bg-lightgreen text-white font-bold border border-lightgreen" : ""}  `}>
                            
{step.completed ? (<span className='text-white font-bold text-xl'>&#10003;</span>) : (
    index +1 
)}

                        </div>
                        <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-dark" : "text-grayw"}` }>
                            {step.description}
                        </div>
                    </div>
                    <div className={`flex-auto border-t-2 transition duration-500 ease-in-out
                        ${step.completed ? "border-lightgreen" : "border-light" }`}> </div>
                </div>
            ))}
        </div>
    );
};

export default Stepper;
