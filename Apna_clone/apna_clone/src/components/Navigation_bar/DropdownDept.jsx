import React from 'react'
import { Deptjobs } from '../Includes/Navlist';
import { Link } from 'react-router-dom';
const DropdownCity = () => {
  return (
    <div className='absolute left-[243px] top-[0px] login-card  w-[380px] z-[50] rounded-xl h-auto bg-white'>
      <ul className='grid gap-2 text-[17px]  grid-cols-2 p-6 '>
        {Deptjobs.map((item) => (
          <li key={item.id} className='font-[400] hover:text-green hover:font-semibold text-graynav'>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>

      </div>
  )
}

export default DropdownCity