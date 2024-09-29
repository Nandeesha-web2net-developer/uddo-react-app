import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Company_placeholder from '../../imagse/Company_placeholder.webp'
import { FaHome, FaMoneyBillAlt, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SubJobList = () => {
    const [job, setJob] = useState([])
    const [find, setFind] = useState(3);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleLoadMoreJob = () => {
        if (isExpanded) {
            setFind(12);
        } else {
            setFind(job.length);
        }
        setIsExpanded(!isExpanded);
    };
    const findind = job.slice(0, find);


    useEffect(() => {
        axios.get('http://localhost:5000/jobDetails')
            .then(result => setJob(result.data))
            .catch(err => console.log(err))
    })

    return (
        <div className='flex flex-col justify-center w-[100%] '>

            {findind.map((item) => (
                <Link to={`/jobdetail/${item._id}`} className='w-[100%]'>
                    <div key={item._id} className='cursor-pointer bg-white my-2 w-full '>

                        <div className='flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-3'>  <img src={Company_placeholder} className='w-[35px] h-[35px]' />
                                <div>
                                    <h1 className='text-login text-[18px] font-[600]'>{item.jobtitle}</h1>
                                    <h1 className='text-grayw '
                                    >{item.companyname}</h1>
                                </div>
                            </div>
                            <div className='pb-[20px] text-green'>   <FaChevronRight /> </div>

                        </div>


                        <h1 className='text-grayw flex items-center gap-2 pt-2' > <FaHome /> {item.workmode}</h1>
                        <h1 className='text-grayw flex items-center gap-2 pt-0'><FaMoneyBillAlt /> {item.salary}</h1>
                        <div className="my-[24px] hidden h-[2px] w-full bg-[#E8E7EA] md:block"> </div>


                    </div>

                </Link>
            ))}

            <button className={`btn text-[14px] justify-center rounded-xl text-green bg-[#EAF8F4] py-4 font-medium mt-6 btn-dark flex ${isExpanded ? 'hidden' : 'block'} items-center gap-3  d-block w-100`} onClick={toggleLoadMoreJob}>
                Show More   <FaChevronDown />
            </button>
        </div>
    )
}

export default SubJobList