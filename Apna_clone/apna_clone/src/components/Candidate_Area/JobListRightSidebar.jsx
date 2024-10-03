import React from 'react'
import ReviewPlaceholder from '../../imagse/reviewImage.webp'
import { FaPencilAlt } from 'react-icons/fa'

const JobListRightSidebar = () => {
    return (
        <>
            <div className='cursor-pointer flex gap-4 items-center flex-col bg-white my-2 w-full p-3 rounded-xl login-card'>
                <img src={ReviewPlaceholder} className='w-[66px] rounded-full' />
                <h1 className='text-[17px] font-semibold'>Placeholder_name</h1>
                <button className='text-lightgreen text-[14px] py-[3px] font-semibold border-[1px] rounded-md border-lightgreen w-[100%]'>Update Profile</button>
            </div>
            <div className='cursor-pointer flex gap-4 items-center flex-col bg-white my-2 w-full p-3 rounded-xl login-card'>
                <div>
                    <h1 className='text-[17px] font-semibold'>Edit your preferences</h1>
                    <p className='text-[12px] text-grayw'>Your personalised job feed is shown based on these preferences</p>
                </div>
                <div>
                    <div className='flex justify-between flex-row gap-6 items-center'>
                        <p className='tet-[11px]'>Preferred title/role</p>
                        <span className='flex items-center gap-1 text-[11px] text-green font-semibold'><FaPencilAlt /> Edit</span>

                    </div>
                    <div className='flex mt-1'>
                        <p className='bg-light px-2 text-[13px] py-[2px] rounded-full'>Back Office</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between flex-row gap-6 items-center'>
                        <p className='tet-[11px]'>Job preferences</p>
                        <span className='flex items-center gap-1 text-[11px] text-green font-semibold'><FaPencilAlt /> Edit</span>

                    </div>
                    <div className='flex flex-wrap gap-2 mt-1'>
                        <p className='bg-light px-2 text-[13px] py-[2px] rounded-full'>Full Time</p>
                        <p className='bg-light px-2 text-[13px] py-[2px] rounded-full'>Night Shift</p>
                        <p className='bg-light px-2 text-[13px] py-[2px] rounded-full'>Work from Office</p>
                    
                    </div>
                </div>
                <div>
               
                </div>
            </div>
        </>
    )
}

export default JobListRightSidebar