import React, { useState } from 'react'
import { faq_emp } from './faq_data'
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const Faq_job = () => {
    const [acc, setAcc] = useState(-1)

    const chnageAcc = (index_val) => {
        if (index_val === acc) {
            setAcc(-1)
            return
        }
        setAcc(index_val)
    }
    return (

        <div className='bg-white'>

            <div class="text-[20px] font-bold mb-[30px]">FAQs about this job</div>

            <div className='acc_faq'>
                {
                    faq_emp.map((item, index) => (
                        <div key={index} className='cursor-pointer rounded relative acc-section border-[1px] border-graylight p-4 mb-3' onClick={() => chnageAcc(index)}>
                            <div>
                                <h1 className={`text-[17px] font-medium pr-[30px]  text-grayw ${acc === index ? 'active' : ''}`} >{item.ques}</h1>
                            </div>
                            <div className='absolute right-[20px] top-[20px] text-green'>
                                {acc === index ? (<><span className='vertcal'>< FaChevronUp /></span></>) : (<><span className='vertcal'>< FaChevronDown /></span></>)}
                            </div>
                            <div className='pt-1'>
                                <p className={acc === index ? 'active' : 'inactive'}>{item.ans}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Faq_job