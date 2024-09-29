import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Whitelogo from '../../imagse/footer-logo.png'
import { FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa'


const SearchNavbar = () => {

    const [isDropdown, setDropdown] = useState(false);

    const toggleDropdownEnter = () => {
        setDropdown(true);  // Open the dropdown when hovering
    };

    const toggleDropdownLeave = () => {
        setDropdown(false); // Close the dropdown when hover ends
    };
    return (
        <>
            <nav className='relative flex h-24 items-center justify-between w-full px-10'>
                <div className='flex w-[60%]'>

                    <Link to='/' className='navbar-logo pr-10 w-[130px] rounded-xl'>
                        <img src={Whitelogo} alt="" className='rounded' />
                    </Link>

                    <div className='flex items-center  space-x-9 w-[50%]' onMouseLeave={toggleDropdownLeave}>

                        <div className='relative' onMouseEnter={toggleDropdownEnter} >
                            <NavLink to="/jobDetails" className='flex text-xl items-center gap-2  font-bold text-white font-family-roboto'>
                                Job By Type <span className='text-[16px]'> <FaChevronDown /></span>
                            </NavLink>
                        </div>

                        <div className='relative'>
                            <NavLink to="/jobDetails" className='flex text-xl items-center gap-2  font-bold text-white font-family-roboto '>
                                Find Jobs <span className='text-[16px]'> <FaChevronDown /></span>
                            </NavLink>

                        </div>

                    </div>
                </div>
                <div className='w-[40%] flex justify-end'>
                    <a href="" className='text-base px-10 py-4  ml-4 bg-white font-family-roboto  font-medium
           rounded-full text-darkviolet hover:bg-darkviolet hover:text-white flex items-center'>Candidate Login</a>
                </div>
            </nav>



        </>
    )

}

export default SearchNavbar