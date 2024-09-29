import React, { useState } from 'react'
import { FaFilter, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const SearchLeftSidebar = () => {
    const [data, SetData] = useState(0);

    //Acordian
    const [isDatePostedOpen, setIsDatePostedOpen] = useState(true);
    const [isSalaryOpen, setIsSalaryOpen] = useState(true);
    const [isWorkModeOpen, setIsWorkModeOpen] = useState(true);
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(true);
    const [isSortByOpen, setIsSortByOpen] = useState(true);

    const toggleDatePostedAccordion = () => {
        setIsDatePostedOpen(!isDatePostedOpen);
    };
    const toggleSalaryAccordion = () => {
        setIsSalaryOpen(!isSalaryOpen);
    };
    const toggleWorkModeAccordion = () => {
        setIsWorkModeOpen(!isWorkModeOpen);
    };
    const toggleDepartmentAccordion = () => {
        setIsDepartmentOpen(!isDepartmentOpen);
    };
    const toggleSortByAccordion = () => {
        setIsSortByOpen(!isSortByOpen);
    };
    return (
        <div className='bg-white h-full login-card rounded-xl p-5 w-[100%]' >
            <div>
                <div className='flex items-center gap-2 text-[15px] text-violet'>
                    <FaFilter /> <h4 className='font-semibold'>Filters</h4>
                </div>
                <div>

                </div>

            </div>
            <div className="my-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>

            {/* Date Posted */}

            <div>
                <div onClick={toggleDatePostedAccordion} className='cursor-pointer flex justify-between items-center  mb-[10px] text-sm'>
                    <h4 className='font-semibold text-violet  text-[15px]'>Date posted</h4> <span className='text-grayw text-[12px]'> {isDatePostedOpen ?  <FaChevronUp /> : <FaChevronDown />}</span>

                </div>
                {isDatePostedOpen && (
                    <div className='flex flex-col gap-1'>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='all' name="postedIn" className="accent-[#1F8268]" value="-1" />
                            <label htmlFor="all" className=" text-[14.5px] cursor-pointer">All</label>
                        </div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='24h' name="postedIn" className="accent-[#1F8268]" value="24" />
                            <label htmlFor="24h" className=" text-[14.5px] cursor-pointer">Last 24 hours</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='3d' name="postedIn" className="accent-[#1F8268]" value="72" />
                            <label htmlFor="3d" className=" text-[14.5px] cursor-pointer">Last 3 days</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='7d' name="postedIn" className="accent-[#1F8268]" value="168" />
                            <label htmlFor="7d" className=" text-[14.5px] cursor-pointer">Last 7 days</label></div>
                    </div>)}
            </div>
            <div className="my-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>

            {/* Salary */}

            <div>
                <div onClick={toggleSalaryAccordion} className='cursor-pointer flex justify-between items-center  mb-[10px] text-sm'>
                    <h4 className='font-semibold text-violet  text-[15px]'>Salary</h4> <span className='text-grayw text-[12px]'> {isSalaryOpen ? <FaChevronUp />:  <FaChevronDown />}</span>
                </div>
               

                {isSalaryOpen && (
                    <div>
                         <p className="m-0 mb-7 text-[#8C8594]">Minimum monthly salary</p>
                        <span className='bg-darkgreen text-light px-2 rounded-full '>₹{data}</span> <br/>
                        <input type='range' min='0' className='mt-3 rangeColor cursor-pointer w-full' step='10000' max='120000' value={data} onChange={(e)=>SetData(e.target.value)}/>
                        <div className='flex justify-between text-[#8C8594] text-[14px]'><span>0</span> <span>1.2 Lakhs</span></div>
                    </div>)}
            </div>
            <div className="my-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>

            {/* Work mode */}

            <div>
                <div onClick={toggleWorkModeAccordion} className='cursor-pointer flex justify-between items-center  mb-[10px] text-sm'>
                    <h4 className='font-semibold text-violet  text-[15px]'>Work Mode</h4> <span className='text-grayw text-[12px]'> {isWorkModeOpen ? <FaChevronUp /> :  <FaChevronDown />}</span>

                </div>
                {isWorkModeOpen && (
                    <div className='flex flex-col gap-1'>

                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="checkbox" id='24h' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="24h" className=" text-[14.5px] cursor-pointer">Work from home</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="checkbox" id='3d' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="3d" className=" text-[14.5px] cursor-pointer">Work from office</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="checkbox" id='7d' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="7d" className=" text-[14.5px] cursor-pointer">Work from field</label></div>
                    </div>
                )}
            </div>
            <div className="my-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>

            {/* Department */}

            <div>
                <div onClick={toggleDepartmentAccordion} className='cursor-pointer flex justify-between items-center  mb-[10px] text-sm'>
                    <h4 className='font-semibold text-violet  text-[15px]'>Department</h4> <span className='text-grayw text-[12px]'>{isDepartmentOpen ? <FaChevronUp /> :  <FaChevronDown />}</span>

                </div>
                {isDepartmentOpen && (
                    <div></div>)}
            </div>
            <div className="my-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>

            {/* Sort By */}

            <div>
                <div onClick={toggleSortByAccordion} className='cursor-pointer flex justify-between items-center  mb-[10px] text-sm'>
                    <h4 className='font-semibold text-violet  text-[15px]'>Sort By</h4> <span className='text-grayw text-[12px]'> {isSortByOpen ? <FaChevronUp /> :  <FaChevronDown />}</span>

                </div>
                {isSortByOpen && (
                    <div className='flex flex-col gap-1'>

                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='24h' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="24h" className=" text-[14.5px] cursor-pointer">
                                Relevant</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='3d' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="3d" className=" text-[14.5px] cursor-pointer">Salary - High to low</label></div>
                        <div className="flex cursor-pointer items-center space-x-[8px]">
                            <input type="radio" id='7d' name="postedIn" className="accent-[#1F8268]" />
                            <label htmlFor="7d" className=" text-[14.5px] cursor-pointer">Date posted - New to Old</label></div>
                    </div>)}
            </div>
            <div className="mt-[16px] h-[1px] w-full bg-[#E8E7EA]"></div>
            {/* </div> */}
        </div>
    )
}

export default SearchLeftSidebar