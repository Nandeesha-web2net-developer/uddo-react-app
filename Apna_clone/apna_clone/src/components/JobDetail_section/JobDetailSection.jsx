import React, { useState, useEffect } from 'react'
import Navabar from '../Navigation_bar/Navbar'
import Footer from '../Footer/Footer'
import JobrightSection from './JobrightSection'
import Loadmore from '../Loadmore/Loadmore'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Company_placeholder from '../../imagse/Company_placeholder.webp'
import fulltime from '../../imagse/fulltime.png'
import experience from '../../imagse/experience.png'
import englishlevel from '../../imagse/english.png'
import Address_placeholder from '../../imagse/address_placeholder.webp'
import Faq_job from '../Faqs/Faq_job'
import {
    FaHome, FaMoneyBillAlt, FaShareAlt, FaFire, FaUserFriends, FaCheck,
    FaFileAlt,
    FaClock,
    FaNetworkWired,
    FaSun,
    FaBriefcase,
    FaGraduationCap,
    FaAward,
    FaUser,
} from 'react-icons/fa'
import Buttons from '../Buttons/Buttons'

const JobDetailSection = () => {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/jobDetails/${id}`)
            .then(result => setJobDetails(result.data))
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!jobDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>

            <div className='h-auto bg-gray'  >
                <div className='bg-white fixed z-50'>
                    < Navabar />
                </div>

                <div className='sm:px-4 md:px-[8.4%] justify-between flex sm:flex-col md:flex-row pt-24 flx-col gap-5 pb-8'>

                    <div className='md:w-[65%] sm:w-[100%]'>
                        <div>
                            <div className='flex flex-col justify-center items-center w-[100%] '>
                                <div className='cursor-pointer bg-white mb-2 w-full p-5 rounded-xl login-card'>

                                    <div className='flex items-center justify-between gap-3'>
                                        <div className='flex items-center gap-3'>  <img src={Company_placeholder} className='w-[45px] h-[45px]' />
                                            <div>
                                                <h1 className='text-login text-[18px] font-[600]'>{jobDetails.jobtitle}</h1>
                                                <h1 className='text-grayw'
                                                >{jobDetails.companyname}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className='text-grayw flex items-center gap-2 pt-4' > <FaHome /> {jobDetails.workmode} </h1>
                                    <h1 className='text-grayw flex items-center gap-2 pt-3 pb-3'><FaMoneyBillAlt /> {jobDetails.salary}</h1>

                                    <div className="rounded-lg bg-[#edebee80] px-[16px] py-[12px]">
                                        <div className="md:grid md:grid-cols-3">
                                            <div className="flex justify-between md:flex-col md:gap-[8px]">
                                                <p className="m-0 text-medium text-[#8C8594]">Fixed</p>
                                                <p className="m-0 py-1 flex items-center text-xs font-semibold text-[#8C8594]">₹30000 - ₹149998</p></div>
                                            <div className="my-[12px] h-[1px] w-full bg-[#8C8594] opacity-20 md:hidden"></div>
                                            <div className="flex justify-between md:flex-col md:gap-[8px]">
                                                <p className="m-0 text-medium text-[#8C8594]">Earning Potential</p>
                                                <p className="m-0 text-xs font-semibold text-[#8C8594]">₹149,998</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-row mt-3 gap-4 items-center'>
                                        <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={fulltime} alt="" className='w-[20px] mb-[0px]' />  {jobDetails.jobtype}</h1>
                                        <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={experience} alt="" className='w-[20px] mb-[0px]' /> {jobDetails.experience}</h1>
                                        <h1 className='bg-gray px-[10px] py-[3px] text-[14px] text-grayw rounded flex flex-row gap-1 pb-[7px] items-center'><img src={englishlevel} alt="" className='w-[20px] mb-[0px]' /> {jobDetails.englishlevel}</h1></div>

                                    <div className='mt-4 w-full flex md:flex-row sm:flex-col gap-3'>
                                        <div className='flex sm:w-[100%] md:w-[85%] justify-center items-center h-[42px] text-center px-auto pt-[8px] pb-[10px] rounded font-semibold bg-green text-white text-[16px]'>   <Buttons btn_title="Apply for Job" />
                                        </div>
                                        <div className='flex sm:w-[100%] md:w-[15%] justify-center items-center h-[42px] text-center px-auto pt-[8px] pb-[10px] rounded border-[1px] border-green font-semibold text-green text-[16px] gap-2'> <span><FaShareAlt /></span>  <Buttons btn_title="Share" /></div>
                                    </div>
                                </div>


                            </div >

                            <div className='flex flex-col justify-center items-center w-[100%] '>
                                <div className='cursor-pointer bg-white my-2 w-full p-5 rounded-xl login-card'>
                                    <div className="rounded-lg border border-solid border-[#C1DBFB] bg-[#F5F9FE] p-[12px] md:p-[16px]">
                                        <p className="mb-[16px] text-md font-semibold">Job highlights</p>
                                        <div className="space-y-[8px] md:space-y-[16px]">
                                            <div className="flex gap-[6px]">
                                                <div className="h-[24px] text-[#E9611E] w-[24px] md:mt-[1px]">
                                                    <FaFire />
                                                </div>
                                                <div className="flex flex-1 flex-col">
                                                    <p className="m-0 text-sm">Urgently hiring</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-[6px]">
                                                <div className="h-[24px] text-blue w-[24px] md:mt-[1px]">
                                                    <FaUserFriends />
                                                </div>
                                                <div className="flex flex-1 flex-col">
                                                    <p className="m-0 text-sm">500+ applicants</p>
                                                </div>

                                            </div>
                                            <div className="flex gap-[6px]">
                                                <div className="h-[24px] w-[24px] md:mt-[1px]">
                                                    <FaCheck />
                                                </div>

                                                <div className="flex flex-1 flex-col">
                                                    <p className="m-0 text-sm">Benefits include:  PF, Flexible Working Hours, Health Insurance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mx-auto my-[24px] hidden h-[1px] w-[95%] bg-[#E8E7EA] md:block"></div>

                                    <div className="mb-[8px] bg-white p-[16px] md:py-0">
                                        <p className="mb-[4px] text-md font-semibold md:mb-[8px]">Job role</p>


                                        <div className="grid grid-cols-1 gap-[12px]
										md:grid-cols-2">
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[10px] text-[#8C8594] text-[18px] md:mt-[8px]">
                                                    <FaFileAlt />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Department</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Software Engineering</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px]  text-[#8C8594] text-[20px]">
                                                    <FaNetworkWired />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Role / Category</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Software Development</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaClock />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Employment type</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Full Time</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaSun />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Shift</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Day Shift</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block">
                                        </div>
                                    </div>

                                    <div className="mb-[8px] bg-white p-[16px] md:py-0">
                                        <p className="mb-[4px] text-md font-semibold md:mb-[8px]">Job requirements</p>
                                        <div className="grid grid-cols-1 gap-[12px]
										md:grid-cols-2">
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaBriefcase />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Experience</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Any experience</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaGraduationCap />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Education</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Graduate</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaNetworkWired />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Past role/category experience</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Software Development, Software Quality Assurance and Testing</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <img src={englishlevel} className='w-[23px]' />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">English level</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Basic English</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaAward />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Degree/ Specialisation</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Any BE/B.Tech</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px] text-[#8C8594] text-[18px]">
                                                    <FaUser />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Gender</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Any gender</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block">


                                        </div>
                                    </div>

                                    <div className="mb-[8px] bg-white p-[16px] md:py-0">
                                        <p className="mb-[4px] text-md font-semibold md:mb-[8px]">About company</p>
                                        <p className="mb-[16px] text-[12px] leading-[16px] text-[#8C8594] md:mb-[12px] md:text-[14px] md:leading-[20px]"></p>
                                        <div className="grid grid-cols-1 gap-[12px]
										md:grid-cols-1">
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px]">
                                                    <img src={Company_placeholder} alt="" className='w-[30px]' />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Name</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Layertech It Solutions Private Limited</p>
                                                </div>
                                            </div>
                                            <div className="flex w-full space-x-[12px]">
                                                <div className="mt-[2px] md:mt-[8px]">
                                                    <img src={Address_placeholder} className='w-[30px]' alt="" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="m-0 text-sm leading-[20px] text-[#8C8594] md:leading-[24px]">Address</p>
                                                    <p className="m-0 text-sm leading-[20px] text-[#190A28] md:leading-[24px]">Awfis Hitech City N Heights, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana, India</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-[24px] hidden h-[1px] w-full bg-[#E8E7EA] md:block">

                                        </div>
                                        <p className="md:font-md m-0 text-sm text-[#8C8594] md:leading-[24px]">Job posted by
                                            <span className="font-semibold text-[#190A28]"> Aaruhi Group private limited</span></p>
                                    </div>

                                </div>
                                <div className='cursor-pointer bg-white my-2 w-full p-5 rounded-xl login-card'>
                                    <div className="mb-[8px] bg-white p-[16px] md:py-0">
                                        <Faq_job />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='md:w-[35%] sm:w-[100%]'>
                        <JobrightSection />
                    </div>
                </div>


                <div className='w-full bg-graylight h-[2px]'></div>
                <Loadmore />
                <Footer />

            </div>
        </div>
    )
}

export default JobDetailSection