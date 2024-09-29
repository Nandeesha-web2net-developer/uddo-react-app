import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Job = ({ img, title, desc }) => {
    return (
        <div style={{ boxShadow: '0px 2px 8px rgba(216, 216, 216, 0.4)' }} className='mt-4 items-baseline cursor-pointer mx-w-[120px] border-2 items-left border-light flex flex-col bg-white rounded-lg'>
            <img className='w-full h-[146px] rounded-t-lg' src={img} alt="" />
            <div className='p-4'>
            <h1 className='text-[18px]  font-bold'>{title}</h1>
            <p className='text-darklight text-[14px] flex items-center'><span>{desc}</span> <span className='pl-3'><FaChevronRight /></span></p>
            </div>
        </div>
    )
}

export default Job