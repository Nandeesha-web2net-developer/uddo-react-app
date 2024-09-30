import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Account from './steps/Account';
import Detail from './steps/Detail'
import Final from './steps/Final'
import { StepperContext } from './contexts/StepperContext';

const MultiLevelMainForm = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);

    const steps = [
        "Job Details",
        "Personal Details",
        "Complete"
    ];

    const displaySteps = (step) => {
        switch (step) {
            case 1:
                return <Account />
            case 2:
                return <Detail />
            case 3:
                return <Final />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction == "next" ? newStep++
            : newStep--;

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return (
        <div className='bg-gray p-10'>
            <h1 className='text-graynav text-[24px] font-semibold'>Post a New Job</h1>
            <div className='w-full max-auto  rounded-2xl pb-2 '>

                {/*Stepeer*/}
                <div className='container '>

                    <div className='bg-white mt-5 h-[80px] rounded-lg shadow-md'>
                        <Stepper
                            steps={steps}
                            currentStep={currentStep}
                        />
                    </div>

                    <div className='my-10 p-10 bg-white rounded-lg shadow-xl'>
                        <StepperContext.Provider
                            value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData
                            }}>

                            {displaySteps(currentStep)}

                        </StepperContext.Provider>

                    </div>




                </div>




                {/*Navigations Controls*/}

                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />

            </div>
        </div>

    )
}

export default MultiLevelMainForm