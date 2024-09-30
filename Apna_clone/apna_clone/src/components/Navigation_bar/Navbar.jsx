import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagse/logo.png'
import { FaBriefcase, FaMobileAlt, FaTimesCircle, FaChevronUp } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa';
import Dropdown from './Dropdown';

const Navabar = () => {

  const [accDrop, setAccDrop] = useState(-1);



  const [isDropdown, setDropdown] = useState(false);

  const toggleDropdownEnter = () => {
    setDropdown(true);
  };

  const toggleDropdownLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className='relative flex h-16 items-center justify-between w-full sm:px-4 md:px-10'>
        <div className='flex w-[40%]'>

          <Link to='/' className='navbar-logo pr-10 w-[33.333%]'>
            <img src={logo} alt="" />
          </Link>

          <div className='flex items-center  space-x-9 w-[50%]' onMouseLeave={toggleDropdownLeave}>

            <div className='relative' onMouseEnter={toggleDropdownEnter} >
              <NavLink to="/jobDetails" className='flex items-center gap-2 text-base font-medium text-dark font-family-roboto hover:text-green'>
                Jobs <span className='text-[14px]'> <FaChevronDown /></span>
              </NavLink>
              {isDropdown && <Dropdown />}
            </div>

            <div className='relative'>
              <NavLink to="/jobDetails" className='flex items-center gap-2 text-base font-medium text-dark font-family-roboto hover:text-green'>
                Career Compass <span className='text-[14px]'> <FaChevronDown /></span>
              </NavLink>

            </div>

          </div>
        </div>
        <div className='w-[60%] flex justify-end'>
          <a href="" className='text-base px-5  text-dark font-medium font-family-roboto flex items-center'><FaMobileAlt className='text-green' /><span className='pl-1'>Download App</span></a>
          <a href="" className='text-base px-5 text-dark font-medium font-family-roboto flex items-center'>English <span className='pl-1'><FaChevronDown className='text-green' /></span></a>
          <Link to='/adminlogin' className='text-base px-5 text-dark font-medium font-family-roboto flex items-center'><FaUser className='text-green' /><span className='pl-1' >Login</span></Link>
          <a href="" className='text-base px-8 py-1  ml-4 bg-[#03ACEE] border-2 font-family-roboto border-[#03ACEE] font-medium
           rounded-full text-white hover:bg-white hover:text-[#03ACEE] flex items-center'>Hire local staff <span className='pl-3'><FaExternalLinkAlt /></span></a>
        </div>
      </nav>

      {/* 
      <nav className='bg-white w-[100%]'>
        <div>
          <div className='flex flex-row items-center justify-between px-4'>
            <Link to='/'><img src={logo} alt="" className='w-[140px]' /></Link>
            <span className='text-[20px] text-darkviolet'><FaTimesCircle /></span>
          </div>
          <div className='px-4 py-2'>
            <div className='acc_faq' onClick={() => toggleAccordion(1)}>
              <NavLink className='flex items-center gap-2 text-base font-medium text-dark hover:text-green'>
                <FaBriefcase />
                <div className='w-full flex justify-between text-[14px]'>
                  <span>Jobs</span>
                  {acc === 1 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </NavLink>
              {acc === 1 && (
                <div className='px-4 py-2'>
                  <div className='flex justify-between' onClick={() => toggleAccordionDrop(1)}>
                    Job Type
                    {accDrop === 1 ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accDrop === 1 && (
                    <div className='pl-4'>
                      <p>Work from home</p>
                      <p>Freelance</p>
                      <p>Full-time</p>
                      <p>Part-time</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className='px-4 py-2'>
            <NavLink to="/jobDetails" className='flex  items-center gap-2 text-base font-medium text-dark font-family-roboto hover:text-green'>
              <span><FaBriefcase /></span>   <div className='w-full flex items-center justify-between text-[14px]'><span>Career Compass </span>    <FaChevronDown /></div>
            </NavLink>
          </div>
          <div className='px-4 py-2'>
            <NavLink to="/jobDetails" className='flex  items-center gap-2 text-base font-medium text-dark font-family-roboto hover:text-green'>
              <span><FaBriefcase /></span>   <div className='w-full flex items-center justify-between text-[14px]'><span>Community </span>    <FaChevronDown /></div>
            </NavLink>
          </div>
        </div>
      </nav> */}


    </>
  )

}

export default Navabar