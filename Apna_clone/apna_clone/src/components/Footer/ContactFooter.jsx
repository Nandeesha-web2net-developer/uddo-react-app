import React from 'react'
import footer_logo from '../../imagse/footer-logo.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import playsore from '../../imagse/playstore.svg'
import download_scanner from '../../imagse/download-scanner.webp'

const ContactFooter = () => {
    return (
        <div className='bg-graynav  py-20'>
            <div className='px-10'>
                <div className='w-[100%] flex'>
                    <div className='w-[60%]'>
                        <div className='w-[60%] gap-10 flex items-center'>
                            <div>
                                <img src={footer_logo} alt="" className='w-[120px] rounded-xl' />
                            </div>
                            <div>
                                <h1 className='text-white font-medium text-[22px] pb-3'>Follow us on social media</h1>
                                <span className='text-white flex gap-5 text-[25px]'><FaFacebook /><FaLinkedin /><FaTwitter /><FaInstagram /><FaYoutube /></span>
                            </div>
                        </div>
                        <div className='w-[60%] h-[1px] bg-grayw mt-[22px] mx-3'></div>
                        <div className='w-[60%] text-white pt-8 text-[13px] flex justify-between mx-3'>
                            <span>© 2024 Uddo | All rights reserved</span>
                            <span>Privacy Policy</span>
                            <span>Terms & Conditions</span>
                        </div>
                    </div>
                    <div className='w-[40%] bg-white rounded-xl p-6 flex justify-between'>
                        <div className=''>
                            <h1 className='text-black font-bold text-[22px] pb-2'>Apply on the go</h1>
                            <h1 className='text-[16px] font-[400] text-grayw mb-4'>Get real time job updates on our App</h1>
                            <img src={playsore} alt="" />
                        </div>
                        <div>
                            <img src={download_scanner} alt="" className='w-[140px] rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter