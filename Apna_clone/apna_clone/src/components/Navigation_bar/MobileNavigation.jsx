import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagse/logo.png'
import { FaBriefcase, FaMobileAlt, FaTimesCircle, FaChevronUp } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { TypesofJobs } from '../Includes/Navlist';

import Accordian from '@mui/material/Accordion'
import AccordianSummary from '@mui/material/AccordionSummary'
import AccordianDetails from '@mui/material/AccordionDetails'
import ExpandMore from '@mui/icons-material/ExpandMore'

const MobileNavigation = () => {
  return (
    <>
 
      {/* Mobile menu */}

      <div className='md:hidden sm:block w-[200px] relative  px-4 pb-10 overflow-y-scroll'>
        <img src={logo} alt="" className='w-[80px]' />
        <Accordian>
  <AccordianSummary expandIcon={<ExpandMore />} >
    <span className='flex items-center gap-4 z-[1000]'>
      <FaBriefcase /> Jobs
    </span>
  </AccordianSummary>
  <AccordianDetails>
    <div className="max-h-[400px] overflow-y-scroll"> {/* Set max-height and enable scroll */}
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

      </div>

    </>
  )

}

export default MobileNavigation