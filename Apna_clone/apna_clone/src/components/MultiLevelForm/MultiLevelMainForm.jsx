import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Account from './steps/Account';
import Detail from './steps/Detail'
import Final from './steps/Final'

const MultiLevelMainForm = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Account Inforamation",
        "Personal Details",
        "Complete"
    ];

const displaySteps=(step)=>{
    switch(step){
case 1:
    return <Account />
case 2:
    return <Detail />
case 3:
    return <Final />
    default:
    }
}

    return (
        <div className='w-[80%] max-auto shadow-xl rounded-2xl pb-2 bg-white'>
            {/*Stepeer*/}
            <div className='container mt-5'>
                <Stepper 
                steps={steps}
                currentStep={currentStep}
                />
            </div>
            {/*Navigations Controls*/}

            <StepperControl />

        </div>
    )
}

export default MultiLevelMainForm