import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Company_placeholder from '../../imagse/Company_placeholder.webp'
import fulltime from '../../imagse/fulltime.png'
import experience from '../../imagse/experience.png'
import englishlevel from '../../imagse/english.png'
import { FaHome, FaMoneyBillAlt, FaChevronRight } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

const MainJobList = () => {
    const [job, setJob] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = job.slice(firstIndex, lastIndex);
    const npage = Math.ceil(job.length / recordsPerPage)

    const numbers = [...Array(npage + 1).keys()].slice(1)

    useEffect(() => {
        axios.get('http://localhost:5000/jobDetails')
            .then(result => setJob(result.data))
            .catch(err => console.log(err))
    }, [])

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCpage(n) {
        setCurrentPage(n)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-[100%] '>

            {records.map((item) => (
                <Link to={`/jobdetail/${item._id}`} className='w-[100%]'>
                    <div key={item._id} className='cursor-pointer bg-white mb-2 w-full p-5 rounded-xl login-card'>

                        <div className='flex items-center justify-between gap-3'>
                            <div className='flex items-center gap-3'>  <img src={Company_placeholder} className='w-[45px] h-[45px]' />
                                <div>
                                    <h1 className='text-login text-[18px] font-[600]'>{item.jobtitle}</h1>
                                    <h1 className='text-grayw'
                                    >{item.companyname}</h1>
                                </div>
                            </div>
                            <div>   <FaChevronRight /> </div>

                        </div>


                        <h1 className='text-grayw flex items-center gap-2 pt-2' > <FaHome /> {item.workmode}</h1>
                        <h1 className='text-grayw flex items-center gap-2 pt-0'><FaMoneyBillAlt /> {item.salary}</h1>
                        <div className='flex flex-row mt-3 gap-4 items-center'>
                            <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={fulltime} alt="" className='w-[20px] ' /> {item.jobtype}</h1>
                            <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={experience} alt="" className='w-[20px] ' />{item.experience}</h1>
                            <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={englishlevel} alt="" className='w-[20px] ' /> {item.englishlevel}</h1></div>

                    </div>
                </Link>
            ))}

            <nav>
                <ul className='flex mt-10 gap-4 items-center'>
                    <li>
                        <button className='text-grayw text-[14px]' onClick={prePage} >Prev </button>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`rounded  bg-white ${currentPage === n ? 'border-[1px] border-green text-green' : ''}`} key={i}>
                                <a href='#' className='w-[40px] h-[40px] cursor-pointer justify-center pb-1 flex items-center ' onClick={() => changeCpage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li>
                        <button className='text-grayw text-[14px]' onClick={nextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainJobList