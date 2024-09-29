import React from 'react';

const StartStep = ({ img, title, description }) => {
    return (
        <div className='md:w-[33%] sm:w-[100%] flex items-center flex-col'>
            <img src={img} alt={title} />
            <h1 className='text-2xl text-grayw font-[500] mt-5'>{title}</h1>
            <p className='text-darklight text-center sm:mt-2 md:mt-5 1-5xl:mt-5  opacity-90 font-roboto font-light lg:w-9/12  lg:text-lg'>{description}</p>
        </div>
    );
}

export default StartStep;