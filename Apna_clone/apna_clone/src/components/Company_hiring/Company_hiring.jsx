import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';



const Company_hiring = ({ img, title, desc, btn }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} className={`flex cursor-pointer h-[350px] border border-[#e5e7eb]  flex-col rounded-xl bg-[#FAFAFA] p-6 text-left transition-all ${isHovered ? 'comp-hiring' : ''} `}>

            <div className='h-[64px] w-auto max-w-[120px] pt-3'>
                <img className='relative h-auto w-auto' src={img} alt="" />
            </div>
            <h1 className='mb-0 mt-6 text-md font-semibold md:mt-[40px] md:text-[20px] md:font-bold'>{title}</h1>
            <p className='mb-10 mt-3 text-md'>{desc}</p>
            <a href="#" className='btn-hover text-[19px] mt-auto inline-block self-start rounded-lg px-[14px] py-[11px] font-semibold text-green transition-all  hover:bg-green hover:text-white md:mt-auto'><span>  {btn} </span><span className='pl-2'><FaChevronRight /></span></a>
        </div >
    )
}

export default Company_hiring