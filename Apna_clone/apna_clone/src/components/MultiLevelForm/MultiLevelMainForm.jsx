import React from 'react'
import Button from '@mui/material/Button'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MultiLevelMainForm = () => {
    return (
        <div>
            <nav className='bg-white   text-darkviolet font-semibold '>
                <Link to='/admindashboard'>  <span className='flex items-center h-[60px] justify-start pl-4 gap-6 cursor-pointer'> <FaArrowLeft /> Post a New Job</span></Link>
            </nav>
            <div className='bg-light shadow-md p-16'>


                <div className='flex bg-white p-8 rounded-md flex-col'>
                    <form>
                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Job details</h1>
                            <p className='text-grayw'>We use this information to find the best candidates for the job.</p>
                            <div className='my-10'>
                                <label className='font-semibold'>Job title / Designation<span className=''>*</span> </label><br />
                                <input type='text' placeholder='Eg. Softwrae Engeneer' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                            </div>

                            <div className='my-10'>
                                <label className='font-semibold'>Type of Job <span className=''>*</span> </label><br />
                                <div className='mt-2 flex items-start gap-8'>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Part - Time</Button>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Full - Time</Button>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Both - (part tiem & full time)</Button>
                                </div>

                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Location</h1>
                            <p className='text-grayw'>Let candidates know where they will be working from.</p>


                            <div className='my-10'>
                                <label className='font-semibold'>Work location type  <span className=''>*</span> </label><br />
                                <div className='mt-2 flex items-start gap-8'>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Work from Office</Button >
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Work from Home</Button >
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Remote</Button >
                                </div>

                                <div className='my-10'>
                                    <label className='font-semibold'>Which area will the candidates be working in ? <span className=''>*</span> </label><br />
                                    <input type='text' placeholder='Eg. Bangalore' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                                </div>

                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Compensation</h1>
                            <p className='text-grayw'>Job postings with right salary & incentives will help you find the right candidates.</p>


                            <div className='my-10'>
                                <label className='font-semibold'>What is the pay type?  <span className=''>*</span> </label><br />
                                <div className='mt-2 flex items-start gap-8'>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Fixed Only</Button >
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Fixed + Incentive</Button >
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Incetive</Button >
                                </div>

                                <div className='my-10'>
                                    <label className='font-semibold'>Salary Range (per month) <span className=''>*</span> </label><br />
                                    <div className='flex gap-4'>
                                        <input type='text' placeholder='From ₹10,000 / Month' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                                        <input type='text' placeholder='To 2,00,000 / Month' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Candidate Requirements</h1>
                            <p className='text-grayw'>We’ll use these requirement details to make your job visible to the right candidates.</p>


                            <div className='my-10 flex flex-col gap-8' >

                                <div>
                                    <label className='font-semibold'>Minimum Education * <span className=''>*</span> </label><br />
                                    <div className='mt-2 flex items-start gap-8'>
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >10th or below 10th</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >12th pass</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Diploma</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Graduate</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >PostGraduate</Button >
                                    </div>
                                </div>
                                <div>    <label className='font-semibold'>English level required <span className=''>*</span> </label><br />
                                    <div className='mt-2 flex items-start gap-8'>
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >No English</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Basic English</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Good English</Button >
                                    </div></div>

                                <div><label className='font-semibold'>Total experience required <span className=''>*</span> </label><br />
                                    <div className='mt-2 flex items-start gap-8'>
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Any</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Experienced Only</Button >
                                        <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Freshers Only</Button >
                                    </div></div>


                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Job Description</h1>
                            <p className='text-grayw'>Describe the responsibilities of this job and other specific requirements here.</p>



                            <div className='my-10'>
                                <label className='font-semibold'>Job Description <span className=''>*</span> </label><br />

                                <textarea rows="4" placeholder="Enter the Job Description, including the main responsibility and tasks..." className='w-full pt-2 mt-2 px-4 border-[1px] border-green rounded-md'>

                                </textarea>
                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Interview method and address</h1>
                            <p className='text-grayw'>Let candidates know how interview will be conducted for this job.</p>



                            <div className='my-10'>
                                <label className='font-semibold'>Type of Interview <span className=''>*</span> </label><br />

                                <div className='mt-2 flex items-start gap-8'>
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >In-Person / Walk-in Interview</Button >
                                    <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Telephonic/Online interview</Button >
                                </div>
                            </div>

                            <div className='my-10'>
                                <label className='font-semibold'>Interview address <span className=''>*</span> </label><br />

                                <input type='text' placeholder='Ex. Bangalore' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />


                            </div>
                        </div>

<div className='flex justify-center mt-20'><input type='submit' value="Publish a Job" className='bg-blue text-white px-8 rounded-lg cursor-pointer hover:bg-lightgreen py-3'/></div>
       

                    </form>

                </div>
            </div>
        </div>


    )
}

export default MultiLevelMainForm