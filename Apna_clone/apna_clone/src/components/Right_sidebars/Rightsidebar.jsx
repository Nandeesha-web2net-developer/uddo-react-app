import React from 'react'
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import sidebar_right from '../../imagse/sidebar-right.png'

const Rightsidebar = () => {
    return (
        <div className='h-[450px] overflow-hidden relative w-full cursor-pointer rounded-xl  border border-[#C7DAF4] bg-[#F1F6FF] bg-cover bg-center p-[16px] md:h-[412px]'>

            <div className="z-[1] relative flex h-full flex-col justify-between ">
                <div>
                    <h2 className="mb-[16px] text-[20px] font-semibold leading-7 text-[#003C96]">Login with Uddo and experience more !</h2>
                    <ul className="m-0 p-0 text-[14px] leading-5 text-[#190a28]">
                        <li className="mb-1 flex items-center">
                            <span className='text-[#003C96] text-[12px]'> <FaCheckCircle /></span>
                            <p className="ml-1 leading-5 text-[14.5px]">Personalised job matches</p></li>
                        <li className="mb-1 flex items-center ">
                            <span className='text-[#003C96] text-[12px]'> <FaCheckCircle /></span> <p className="ml-1 text-[14.5px] leading-5 ">Direct connect with HRs</p></li>
                        <li className="mb-1 flex items-center"><span className='text-[#003C96] text-[12px]'> <FaCheckCircle /></span>
                            <p className="ml-1 leading-5 text-[14.5px]">Latest updates on the job</p></li></ul></div>
                <button type="button" className="flex mt-[85px] w-full items-center justify-center rounded-[4px] bg-[#1F8368] p-[8px] text-center text-[14px] font-semibold leading-5 text-[#fff] md:p-[7px]">
                    <span>Create profile</span>
                    <span className='mb-[-3px] ml-2'> <FaChevronRight /></span>
                </button>
            </div>
            <img src={sidebar_right} className='z-[0] absolute md:w-[50%] sm:w-[35%] bottom-[-10px] sm:left-[30%] md:left-[25%]' />
        </div>
    )
}

export default Rightsidebar