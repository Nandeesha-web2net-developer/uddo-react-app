import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Whitelogo from '../../imagse/footer-logo.png'
import uddoApp from '../../imagse/uddoApp.webp'
import ContactFooter from '../Footer/ContactFooter';
import download_scanner from '../../imagse/download-scanner.webp'
import playsore from '../../imagse/playstore.svg'
import Footer from '../Footer/Footer'

const DownLoadApp = () => {
    return (
        <div>
            <div className='border-graylight border-b-2 z-50 bg-darkviolet'>
                <nav className=' relative flex h-20 items-center justify-between w-full sm:px-4 md:px-20'>
                    <div className='flex w-[60%]'>

                        <Link to='/' className='navbar-logo pr-10 w-[110px] rounded-xl'>
                            <img src={Whitelogo} alt="" className='rounded' />
                        </Link>

                    </div>

                </nav>
            </div>
            <div className='md:px-20 sm:px-4 py-6 w-full gap-20 items-center flex md:flex-row sm:flex-col-reverse'>
                <div className='w-[60%]'>
                 <img src={uddoApp} />
                </div>
                <div className='flex items-start flex-col'>
                  <h1 className='text-darkviolet sm:text-[28px] sm:text-center  md:text-[50px] text-left font-bold'>Download the Uddo App!</h1>
                <p className='text-darkviolet  text-[22px] pb-4 text-left font-[500]'>Get your dream job today only on Uddo app</p>
                  <img src={download_scanner} alt="" className='ml-[-23px] w-[240px]' />
                  <img src={playsore} className='pt-6 w-[200px]'/>
                 </div>
            </div>

            <div>
               <Footer />
            </div>

        </div>
    )
}

export default DownLoadApp