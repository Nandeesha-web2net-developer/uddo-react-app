import React from 'react'
import logo from '../../imagse/logo.png'
import { Link, NavLink } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'

const AdminNav = () => {
  return (
   <nav className='relative flex bg-white h-16 items-center justify-between w-full px-10'>
    <div className='flex w-2/5'>

      <Link to='/' className='navbar-logo pr-10 w-4/12'>
        <img src={logo} alt=""/>
      </Link>
      <Link to='/postJob' className='text-base px-5 text-dark font-medium font-family-roboto flex items-center'><FaUser className='text-green'/><span className='pl-1' >Post Job</span></Link>
    </div>

  </nav>
  )
}

export default AdminNav