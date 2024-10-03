import React from 'react'
import { Cityjobs } from '../Includes/Navlist';
import { Link } from 'react-router-dom';
import Buttons from '../Buttons/Buttons'
const DropdownCity = () => {
  return (
    <div className='absolute left-[243px] top-[0px] login-card  w-[380px] z-[50] rounded-xl h-auto bg-white'>
      <ul className='grid gap-2 text-[17px]  grid-cols-2 p-6 '>
        {Cityjobs.map((item) => (
          <li key={item.id} className='font-[400] hover:text-green hover:font-semibold text-graynav'>
            <Link target="_blank" to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
     {/* <div className='ml-6 p-4 bg-green'><Buttons btn_title='View all 74 cities' /></div> */}

      </div>
  )
}

export default DropdownCity