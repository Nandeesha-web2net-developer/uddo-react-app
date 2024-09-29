import React from 'react'
import { FaArrowAltCircleRight, FaChevronDown, FaUserFriends } from 'react-icons/fa'

const AdminRightJobsReport = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <div><h1 className=' font-bold text-violet text-[28px] pb-3'>Reports</h1> </div>

      </div>
      <div className='bg-white border-light border-[2px] hover:border-[2px] hover:border-lightgreen hover rounded-md p-8 w-[fit-content]'>
        <div>
          <div className='text-violet text-[30px]'>
            <FaUserFriends />
            <h1 className='text-left mt-6 font-semibold text-violet text-[24px] pb-1'>Applicants</h1> </div>
          <p className='text-graynav text-center'>Get all applications received in a single report</p>

          <div className='text-lightgreen mt-8 flex font-semibold items-center gap-4'>
            View Report <FaArrowAltCircleRight />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminRightJobsReport