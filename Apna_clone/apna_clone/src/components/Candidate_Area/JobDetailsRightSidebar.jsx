import React from 'react'
import hiresteps from '../../imagse/hiresteps.png'
import RightPhonebar from '../Right_sidebars/RightPhonebar'
import RightPhone from './RightPhone'
const JobDetailsRightSidebar = () => {
  return (
    <div>
         <img src={hiresteps} alt="" className='rounded-xl border-[1px] border-[#9ADCC8]' />
         <div>
                <RightPhone />
            </div>
    </div>
  )
}

export default JobDetailsRightSidebar