import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaDatabase, FaQuestionCircle, FaSignOutAlt, FaWhatsapp, FaCalendar } from 'react-icons/fa'

const NavbarAdmin = ({ clickevent }) => {
    const [profile, setProfile] = useState(false);
    const [support, setSupport] = useState(false)

    const handleProfile = () => {
        setProfile(!profile)
    }

    const handleSupport = () => {
        setSupport(!support)
    }

    // // Function to close dropdown when clicking outside
    // const handleClickOutside = (event) => {
    //     if (!event.target.closest('.profile-dropdown') && profile) {
    //         setProfile(false);
    //     }
    // };
    // // Function to close dropdown when clicking outside
    // const handleSupportOutside = (event) => {
    //     if (!event.target.closest('.profile-dropdown') && support) {
    //         setSupport(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [profile]);

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleSupportOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleSupportOutside);
    //     };
    // }, [support]);

    

    return (
        <>
            <nav className='relative bg-white flex h-14 border-[2px] border-light items-center justify-between w-full px-7'>
                <div className='flex w-[40%]'>

                    <Link to='/admindashboard' className='pr-10 '>
                        <div className='flex gap-3 items-center'>
                            <div className='flex w-[25px] gap-[5px] flex-col' onClick={clickevent}>
                                <span className='h-[2px] rounded-full bg-violet'></span>
                                <span className='h-[2px] rounded-full bg-violet'></span>
                                <span className='h-[2px] rounded-full bg-violet'></span>
                            </div>
                            <div className='cursor-pointer'>
                                <span className='text-darkviolet font-bold text-[26px] '>uddo</span>
                                <span className='text-lightgreen font-bold text-[26px]'>Hire</span>
                            </div>
                        </div>
                    </Link>


                </div>
                <div className='w-[60%] flex justify-end'>
                    <p className='text-base px-5  text-dark font-medium font-family-roboto flex items-center'>
                        <FaDatabase className='text-grayw' />
                        <span className='pl-2'>Available Credits</span></p>
                    <div className='relative flex items-center'>

                        <p onClick={handleSupport} className='cursor-pointer text-base pr-10 pl-5  text-dark font-medium font-family-roboto flex items-center'>
                            <span className='pr-2'><FaQuestionCircle className='text-grayw' /></span>Support
                        </p>
                        {support && (
                            <div className='z-[10] absolute right-[80px] top-[-150px] w-[280px] bg-white login-box rounded-lg p-4 mt-[200px]'>
                                <div>
                                    <div className='text-grayw hover:bg-light px-2 py-1 items-center rounded-lg flex gap-3 flex-row'>
                                        <FaQuestionCircle />

                                        <p className=' text-[15px] '>FAQ's</p>

                                    </div>
                                </div>
                                <div className='w-full h-[0.4px] bg-grayw my-2'></div>
                                <div>
                                    <div className='text-grayw  px-2 py-1'>

                                        <p className=' text-[15px] font-semibold'>Contact Us</p>
                                        <p className=' text-[15px] '>( Mon to Sun | 9:00 AM - 7:00 PM )</p>

                                    </div>
                                </div>
                                <div className='text-grayw hover:bg-light px-2 py-1 rounded-md my-2 flex gap-4 items-center'>
                                    <FaWhatsapp /> Chat on WhatsApp
                                </div>
                                <div className='text-grayw hover:bg-light px-2 py-1 rounded-md flex gap-4 items-center'>
                                    <FaCalendar /> Schedule Training
                                </div>

                            </div>
                        )}

                    </div>


                    <div className='relative'>
                        <p onClick={handleProfile} className='cursor-pointer text-base px-5 text-white font-medium font-family-roboto flex justify-center items-center rounded-full bg-lightgreen w-[30px] h-[40px]'>W</p>
                        {profile && (
                            <div className='z-[10] absolute right-0 top-[-150px] w-[280px] bg-white login-box rounded-lg p-4 mt-[200px]'>
                                <div>
                                    <div className='flex gap-3 flex-row'>
                                        <p className='text-base px-5 text-white font-medium font-family-roboto flex justify-center items-center rounded-full bg-lightgreen w-[30px] h-[40px]'>W</p>
                                        <div>
                                            <h1 className='text-graynav text-[15px] font-semibold'>Web2net</h1>
                                            <p className='text-grayw text-[15px] '>9972022137</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[0.4px] bg-grayw my-4'></div>
                                <div className='text-grayw hover:bg-light px-2 py-1 rounded-md flex gap-4 items-center'>
                                    <FaUser /> View Profile
                                </div>
                                <Link to='/'>       <div className='text-[#8a1313] mt-3 hover:bg-[#ffafaf5f] cursor-pointer px-2 py-1 flex gap-4 items-center'>
                                    <FaSignOutAlt /> Sign out
                                </div>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </nav>


        </>
    )

}

export default NavbarAdmin