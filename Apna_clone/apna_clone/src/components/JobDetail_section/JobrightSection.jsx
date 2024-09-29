import React, { useState } from 'react'
import hiresteps from '../../imagse/hiresteps.png'
import SubJobList from '../Job_Listing/SubJobList'
import RightPhonebar from '../Right_sidebars/RightPhonebar'

const JobrightSection = () => {


    return (
        <div>
            <div>
                <img src={hiresteps} alt="" className='rounded-xl border-[1px] border-[#9ADCC8]' />
            </div>
            <div className='cursor-pointer bg-white my-2 w-full p-5 rounded-xl login-card'>
                <h1 className='text-login text-[18px] font-[600]'>Similar Jobs</h1>
                <SubJobList />
            </div>
            <div>
                <RightPhonebar />
            </div>
        </div>
    )
}

export default JobrightSection