import React from 'react'
import ContactNavbar from '../JobSearch/ContactNavbar'
import { FaEnvelope, FaInfoCircle, FaMapMarked, FaSearchLocation, FaTrash, FaTrashAlt } from 'react-icons/fa'
import ContactFooter from '../Footer/ContactFooter'
import Footer from '../Footer/Footer'


const ContactUs = () => {
    return (
        <div>
            <div className='border-graylight border-b-2 z-50 bg-darkviolet'>
                <ContactNavbar />
            </div>
            <div className='bg-contactbg h-auto sm:p-4 md:p-24'>
                <div className='bg-white login-box rounded-lg py-10'>
                    <div className='md:px-24 sm:px-4'>
                        <h1 className='text-center mb-6 z-[10px] contact-title relative text-[40px] text-darkviolet font-bold'>Get in touch</h1>

                        <div>
                            <h1 className='text-lef  z-[10px] text-[30px] font-Roboto text-darkviolet font-bold'>Conatct details</h1>
                        </div>

                        <div className='py-8 flex flex-col gap-4'>
                            <div className='flex items-center gap-8'>
                                <span className='text-darkviolet mb-[-3px] text-[22px]'><FaEnvelope /></span>
                                <span className='text-darkviolet font-semibold text-[17px]'>contact@uddo.in</span>
                            </div>
                            <div className='flex items-center gap-8'>
                                <span className='text-darkviolet mb-[-3px] text-[22px]'><FaInfoCircle /></span>
                                <span className='text-darkviolet font-semibold text-[17px]'>
                                    For unresolved queries or complaints from first-level support, email contact@uddo.in with your registered phone number, Job ID, and previous interaction details.
                                </span>
                            </div>
                            <div className='flex items-center gap-8'>
                                <span className='text-darkviolet mb-[-3px] text-[22px]'><FaMapMarked /></span>
                                <span className='text-darkviolet font-semibold text-[17px]'>No.10 Old No.236, Bhadrappa Layout, Maruti Nagar, Near Cannara bank Bangalore, KA - 560094</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-light my-12 h-[2px] w-[100%]'></div>

                    <div className='flex items-center gap-8 sm:px-4 md:px-24'>
                        <span className='text-darkviolet mb-[-3px] text-[22px]'><FaTrash /></span>
                        <span className='text-darkviolet font-semibold text-[17px]'>How to delete your Uddo account. <span className='text-blue'>Know more</span><br />
                            If you don't have Apna app in your phone please <span className='text-blue'>Fill This Form</span></span>
                    </div>
                </div>

            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default ContactUs