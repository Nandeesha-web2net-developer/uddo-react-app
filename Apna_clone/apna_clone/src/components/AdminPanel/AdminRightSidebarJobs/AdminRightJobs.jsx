import React, { useState } from 'react'
import { FaBook, FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const AdminRightJobs = () => {
const [jobnnew, setJobnew]=useState(false)

const handlenewJob=()=>{
    setJobnew(!jobnnew)
}

    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <div><h1 className=' font-bold text-violet text-[28px] pb-3'>Jobs</h1> </div>
                <div className='relative'>
                    <div onClick={handlenewJob} className='flex px-4 py-2 my-4 cursor-pointer items-center justify-center bg-green   gap-4 rounded-md hover:bg-graynav'>

                        <span className='text-white font-semibold'>Post a new Job</span>
                        <span className='text-white text-[12px]'><FaChevronDown /> </span>
                    </div>
{jobnnew &&(
                    <div className='w-[450px] absolute right-0 bg-white login-box'>
                        <div className='flex flex-row m-4 p-3 rounded-lg gap-3 justify-center items-center cursor-pointer hover:bg-light'>
                            <div className='bg-light cursor-pointer text-[25px] text-lightgreen p-3 rounded-lg'>
                                <FaPlus />
                            </div>
                          <Link to='/posting-new-job'>  <div>
                                <h1 className='text-left font-semibold text-violet text-[20px] pb-1'>Start with blank form</h1>
                                <p className='text-graynav text-left pr-6'>Use our blank form to create your job</p>
                            </div>
                            </Link>
                         <FaChevronRight />
                        </div>

                    </div>
)}
                </div>
            </div>
            <div className='bg-white rounded-md p-10 login-card'>
                <div><h1 className='text-center mb-10 font-semibold text-violet text-[24px] pb-3'>Post Your First Job</h1> </div>

                <div className='flex flex-row gap-10 items-center justify-between'>
                    <div className='flex flex-col justify-center items-center'>
                    <Link to='/posting-new-job'>          <div className='bg-light cursor-pointer text-[25px] text-lightgreen p-3 rounded-lg'>
                            <FaPlus />
                        </div>
                        </Link>
                        <div>
                            <h1 className='text-center font-semibold text-violet text-[20px] mt-4 pb-1'>Start with blank form</h1>
                            <p className='text-graynav text-center'>Use our blank form to create your job and fill manually</p>
                        </div>
                        <div className='flex mt-10 px-6 cursor-pointer items-center justify-center border-[1px] border-green   gap-4 rounded-lg hover:bg-light py-2'>

                        <Link to='/posting-new-job'>            <span className='text-green text-[15px] font-semibold'>Start with blank form</span>       </Link>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-light cursor-pointer text-[25px] text-violet p-3 rounded-lg'>
                            <FaBook />
                        </div>
                        <div>
                            <h1 className='text-center font-semibold text-violet text-[20px] mt-4 pb-1'>Use a Template</h1>
                            <p className='text-graynav text-center'>Use templates made by apna to save time and hire the right candidates.</p>
                        </div>
                        <div className='flex mt-10 px-6 cursor-pointer items-center justify-center border-[1px] border-green   gap-4 rounded-lg hover:bg-light py-2'>

                            <span className='text-green text-[15px] font-semibold'>Use a Template</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminRightJobs