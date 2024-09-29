import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Qualification = ({img, title, desc}) => {
  return (
    <div style={{boxShadow:'0px 2px 8px rgba(216, 216, 216, 0.4)'}} className=' items-baseline cursor-pointer mx-w-[120px] border-2 items-left border-light flex flex-col px-[15px] py-[9px] bg-white rounded-md'>
          <img className='h-[46px] mx-w-[56px]' src={img} alt="" />
          <h1 className='mt-[16px] text-[18px] font-bold'>{title}</h1>
          <p className='text-darklight text-[14px] flex items-center'><span>{desc}</span> <span className='pl-3'><FaChevronRight  /></span></p>

    </div>
  )
}

export default Qualification