import React from 'react'
import { FaBriefcase, FaChartBar, FaDatabase, FaMoneyBillWave, FaPhoneAlt, FaRegCreditCard, FaUserFriends } from 'react-icons/fa'

const AdminLeftIcons = ({changeToggleIcon,tagId}) => {
    return (
        <div className='flex pb-10 h-[90vh] flex-col justify-between border-r-[1px] border-light'  >
            <div className=' bg-white flex flex-col gap-2  py-6 pl-4 pr-2 '>
                <div onClick={() => changeToggleIcon(1)} className={`cursor-pointer flex items-center justify-start pl-4 gap-4 rounded-lg py-2 hover:bg-light ${
  tagId === 1 ? 'bg-light' : ''}`}>
                    <span  className='text-green'><FaBriefcase /> </span>
                 
                </div>
                <div className='cursor-pointer flex items-center justify-start pl-4 gap-4 rounded-lg hover:bg-light py-2'>
                    <span className='text-green'><FaUserFriends /> </span>
                  
                </div>
                <div onClick={() => changeToggleIcon(3)} className={`cursor-pointer flex items-center justify-start pl-4 gap-4 rounded-lg py-2 hover:bg-light ${
  tagId === 3 ? 'bg-light' : ''}`}>
                    <span className='text-green'><FaChartBar /> </span>
                
                </div>
                <div className='cursor-pointer flex items-center justify-start pl-4 gap-4 rounded-lg hover:bg-light py-2'>
                    <span className='text-green'><FaRegCreditCard /> </span>
                
                </div>
                <div className=' cursor-pointer flex items-center justify-start pl-4    gap-4 rounded-lg hover:bg-light py-2'>
                    <span className='text-green'><FaMoneyBillWave /> </span>
                 
                </div>
            </div>
            <div className=''>
                <div className='cursor-pointer flex ml-4 mr-2 items-center justify-start pl-4    gap-4 rounded-lg hover:bg-light py-2'>
                    <span className='text-green'><FaPhoneAlt /> </span>
                 
                </div>
                <div className='h-[1px] my-4 w-full bg-light'></div>
                <div>
                <div className='flex mt-4 ml-6 mr-6 cursor-pointer items-center justify-center border-[1px] border-green   gap-4 rounded-lg hover:bg-light py-2'>
                    <span className='text-green'><FaDatabase /> </span>
                   
                </div>
                </div>
            </div>


        </div>
    )
}

export default AdminLeftIcons