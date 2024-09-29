import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const FooterCareers = () => {
    return (
        <div>
            <div className='bg-light h-[2px] w-[100%]'></div>

            <div className='flex py-[20px] text-[20px] font-bold gap-10 items-center justify-center text-green'>View website<span className='flex items-center gap-2'>Help <FaExternalLinkAlt /></span> </div>
        </div>
    )
}

export default FooterCareers