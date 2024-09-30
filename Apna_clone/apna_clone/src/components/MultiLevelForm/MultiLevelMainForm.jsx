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
        "Account Inforamation",
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
        <div className='w-[80%] max-auto shadow-xl rounded-2xl pb-2 bg-white'>
            {/*Stepeer*/}
            <div className='container mt-5'>
                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                />

                <div className='my-10 p-10'>
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
    )
}

export default MultiLevelMainForm