import React, { useState } from 'react'
import { TypesofJobs } from '../Includes/Navlist'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa';
import DropdownCity from './DropdownCity';
import DropdownDept from './DropdownDept'

const Dropdown = () => {
  const [isDropdown, setDropdown] = useState(false);
  const [isDropdownDept, setDropdownDept] = useState(false);

  const toggleDropdownEnter = () => {
    setDropdown(true);
    // Open the dropdown when hovering
  };

  const toggleDropdownLeave = () => {
    setDropdown(false);
  };

  const DeptDropdownEnter = () => {
    setDropdownDept(true);
  };
  const DeptDropdownLeave = () => {
    setDropdownDept(false);
  };

  return (
    <div className='flex justify-between absolute top-10 left-[-10px]  login-card  w-[480px] z-[40] rounded-xl h-auto bg-white'>
      <ul className='flex gap-2 text-[17px] w-[240px] flex-col p-6'>
        {TypesofJobs.map((item) => (
          <li key={item.id} className=' hover:text-green hover:font-semibold text-graynav'>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className='w-[1px] bg-gray '></div>
      <div >
        <div>
          <ul className='relative flex gap-2 text-[17px] w-[240px] flex-col py-6'>

            <li className=' hover:text-green hover:font-semibold text-graynav px-6' onMouseLeave={toggleDropdownLeave} onMouseEnter={toggleDropdownEnter}  >
              <Link className='flex items-center justify-between'>Jobs By City<span className='mb-[-4px] text-[14px]'> <FaChevronRight /></span> </Link>
              {isDropdown && <DropdownCity />}
            </li>
            <li className=' hover:text-green hover:font-semibold text-graynav px-6' onMouseLeave={DeptDropdownLeave} onMouseEnter={DeptDropdownEnter} >
              <Link className='flex items-center justify-between'>Jobs By Departments<span className='mb-[-4px] text-[14px]'> <FaChevronRight /></span> </Link>
              {isDropdownDept && <DropdownDept />}
            </li>
            <li className=' hover:text-green hover:font-semibold text-graynav px-6'>
              <Link className='flex items-center justify-between'>Jobs By Company<span className='mb-[-4px] text-[14px]'> <FaChevronRight /></span> </Link>
            </li>
            <li className=' hover:text-green hover:font-semibold text-graynav px-6'>
              <Link className='flex items-center justify-between'>Jobs By Qualification<span className='mb-[-4px] text-[14px]'> <FaChevronRight /></span> </Link>
            </li>
            <li className=' hover:text-green hover:font-semibold text-graynav px-6'>
              <Link className='flex items-center justify-between'>Others<span className='mb-[-4px] text-[14px]'> <FaChevronRight /></span> </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown