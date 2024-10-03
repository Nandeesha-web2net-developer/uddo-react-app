import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagse/logo.png'
import { FaBriefcase, FaMobileAlt, FaSignOutAlt, FaChevronUp, FaMobile, FaDownload, FaUserAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa';
import Dropdown from '../Navigation_bar/Dropdown';
import { TypesofJobs } from '../Includes/Navlist';
import Accordian from '@mui/material/Accordion'
import AccordianSummary from '@mui/material/AccordionSummary'
import AccordianDetails from '@mui/material/AccordionDetails'
import CloseIcon from '@mui/icons-material/Close';
import ReviewPlaceholder from '../../imagse/reviewImage.webp'
import ExpandMore from '@mui/icons-material/ExpandMore'

const CandidateNavbar = () => {

    const [profile, setProfile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [isDropdown, setDropdown] = useState(false);

    const handleProfile = () => {
        setProfile(!profile)
    }
    const openMobile = () => {
        setOpenMenu(true)
    }
    const clsoseMobile = () => {
        setOpenMenu(false)
    }
    const toggleDropdownEnter = () => {
        setDropdown(true);
    };

    const toggleDropdownLeave = () => {
        setDropdown(false);
    };


    return (
        <>
            <nav className='relative border-[1px] border-b-light md:flex h-16 items-center justify-between w-full sm:hidden sm:px-4 md:px-10'>
                <div className='flex w-[60%]'>

                    <Link to='/' className='navbar-logo pr-10 w-[146px]'>
                        <img src={logo} alt="" />
                    </Link>

                    <div className='flex items-center  space-x-9 w-[50%]' onMouseLeave={toggleDropdownLeave}>

                        <div className='relative' onMouseEnter={toggleDropdownEnter}  >
                            <NavLink to="/jobDetails" className='flex items-center gap-2 text-[14px] font-medium text-dark font-family-roboto hover:text-green'>
                                Jobs <span className='text-[12px]'> <FaChevronDown /></span>
                            </NavLink>
                            {isDropdown && <Dropdown />}
                        </div>

                        <div className='relative'>
                            <NavLink to="/jobDetails" className='flex items-center gap-2 text-[14px] font-medium text-dark font-family-roboto hover:text-green'>
                                Career Compass <span className='text-[12px]'> <FaChevronDown /></span>
                            </NavLink>

                        </div>

                    </div>
                </div>
                <div onClick={handleProfile} className='select-none flex relative items-center gap-2 cursor-pointer border-[1px] border-grayw rounded-full px-2 py-1'>
                    <img src={ReviewPlaceholder} className='w-[35px] rounded-full' />
                    <span className='text-[13px]'> <FaChevronDown /></span>
                    {profile && (
                        <div className='z-[10] absolute right-0 top-[-150px] w-[200px] bg-white login-box rounded-lg p-4 mt-[200px]'>

                            <Link to="/candidate/profile">  <div className='text-grayw hover:bg-light px-2 py-1 rounded-md flex gap-4 items-center'>
                                <FaUser /> View Profile
                            </div>
                            </Link>
                            <Link to='/'>       <div className='text-[#8a1313] mt-3 hover:bg-[#ffafaf5f] cursor-pointer px-2 py-1 flex gap-4 items-center'>
                                <FaSignOutAlt /> Sign out
                            </div>
                            </Link>
                        </div>

                    )}
                </div>
            </nav>
            {/* Mobile menu */}

            <div className='md:hidden sm:block w-[full] relative bg-white px-4 overflow-y-scroll'>
                <div className='flex items-center gap-4'>
                    <div className='flex w-[25px] gap-[5px] flex-col' onClick={openMobile}>
                        <span className='h-[2px] rounded-full bg-violet'></span>
                        <span className='h-[2px] rounded-full bg-violet'></span>
                        <span className='h-[2px] rounded-full bg-violet'></span>
                    </div>   <img src={logo} alt="" className='w-[80px]' /> </div>
                {openMenu ? (<span className='absolute flex items-center justify-center right-[10px] top-[15px] z-[100] bg-grayw text-white w-[30px] h-[30px] rounded-full' onClick={clsoseMobile}><CloseIcon /></span>
                ) : ''
                }
            </div>

            {openMenu ? (<div className='shadow-xl overflow-x-hidden max-w-[80%] max-h-[600px] overflow-y-scroll absolute top-0 w-[80%] bg-white z-[2000] pt-6 pb-6 pr-6 pl-5'>

                <Accordian>
                    <AccordianSummary expandIcon={<ExpandMore />} >
                        <span className='flex items-center gap-4 z-[1000]'>
                            <FaBriefcase /> Jobs
                        </span>
                    </AccordianSummary>
                    <AccordianDetails>
                        <div className=" "> {/* Set max-height and enable scroll */}
                            <Accordian>
                                <AccordianSummary expandIcon={<ExpandMore />} >
                                    Job By Type
                                </AccordianSummary>
                                <AccordianDetails>
                                    <div className='flex flex-col gap-3'>
                                        {TypesofJobs.map((item, index) => (
                                            <Link to={item.path} key={index}>{item.title}</Link>
                                        ))}
                                    </div>
                                </AccordianDetails>
                            </Accordian>

                            <Accordian>
                                <AccordianSummary expandIcon={<ExpandMore />} >
                                    Job By Cities
                                </AccordianSummary>
                                <AccordianDetails>
                                    <div className='flex flex-col gap-3'>
                                        <Link to='/'>Jobs Agra</Link>
                                        <Link to='/'>Jobs Bangalore</Link>
                                        <Link to='/'>Jobs Mumbai</Link>
                                        <Link to='/'>All Other Cities</Link>
                                    </div>
                                </AccordianDetails>
                            </Accordian>

                            <Accordian>
                                <AccordianSummary expandIcon={<ExpandMore />} >
                                    Job By Department
                                </AccordianSummary>
                                <AccordianDetails>
                                    <div className='flex flex-col gap-3'>
                                        <Link to='/'>Sales</Link>
                                        <Link to='/'>Admin & Back Office</Link>
                                        <Link to='/'>Customer Support</Link>
                                        <Link to='/'>Marketing</Link>
                                        <Link to='/'>Restaurant</Link>
                                        <Link to='/'>All Other Department</Link>
                                    </div>
                                </AccordianDetails>
                            </Accordian>

                            <Accordian>
                                <AccordianSummary expandIcon={<ExpandMore />} >
                                    Job By Company
                                </AccordianSummary>
                                <AccordianDetails>
                                    <div className='flex flex-col gap-3'>
                                        <Link to='/'>Swiggy</Link>
                                        <Link to='/'>Zomoto</Link>
                                        <Link to='/'>Aaruhi Groups</Link>
                                        <Link to='/'>All other Companies</Link>
                                    </div>
                                </AccordianDetails>
                            </Accordian>

                            <Accordian>
                                <AccordianSummary expandIcon={<ExpandMore />} >
                                    Job By Qualification
                                </AccordianSummary>
                                <AccordianDetails>
                                    <div className='flex flex-col gap-3'>
                                        <Link to='/'>10th Pass Jobs</Link>
                                        <Link to='/'>12th Pass Jobs</Link>
                                    </div>
                                </AccordianDetails>
                            </Accordian>
                        </div> {/* End of scrollable section */}
                    </AccordianDetails>
                </Accordian>

                <div className='bg-light h-[2px] w-[full] my-6'></div>
                <span className='flex items-center gap-4 py-4 z-[1000]'>
                    <FaMobileAlt /> Contact Us
                </span>
                <span className='flex items-center gap-4 py-4 z-[1000]'>
                    <FaDownload /> Download Uddo App Now
                </span>
                <span className='flex items-center gap-4 py-4 z-[1000]'>
                    <FaUserAlt /> Login
                </span>

            </div>) : ''}



        </>
    )

}

export default CandidateNavbar