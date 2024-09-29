import React from 'react'
import { Link } from 'react-router-dom';
import Whitelogo from '../../imagse/footer-logo.png'


const ContactNavbar = () => {

    return (
        <>
            <nav className='relative flex h-20 items-center justify-between w-full sm:px-4 md:px-10'>
                <div className='flex w-[60%]'>

                    <Link to='/' className='navbar-logo pr-10 sm:w-[100px] md:w-[120px] rounded-xl'>
                        <img src={Whitelogo} alt="" className='rounded' />
                    </Link>

                </div>
                <div className='md:w-[40%] sm:w-[60%] flex justify-end'>
                    <a href="" className='sm:text-[12px] md:text-[17px]  sm:px-3 md:px-8 py-3  ml-4 bg-green font-family-roboto  font-bold
           rounded   text-white flex items-center'>Employer Website Login</a>
                </div>
            </nav>



        </>
    )

}

export default ContactNavbar