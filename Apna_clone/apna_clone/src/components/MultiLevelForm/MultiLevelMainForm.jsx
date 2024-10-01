import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MultiLevelMainForm = () => {

    const [jobtitle, setJobTitle] = useState('');
    const [companyname, setCompanyName] = useState('');
    const [workmode, setWorkMode] = useState('');
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [jobtype, setJobType] = useState('');
    const [experience, setExperience] = useState('');
    const [englishlevel, setEnglishLevel] = useState('');
    const [location, setLocation] = useState('');
    const [interviewType, setInterviewType] = useState('');
    const [interviewAddress, setInterviewAddress] = useState('');
    const [description, setDescription] = useState('');
    const [paytype, setPayType] = useState('');
    const [qualification, setQualification] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/posting-new-job", {
            jobtitle,
            companyname,
            workmode,
            salaryFrom,
            salaryTo,
            paytype,
            jobtype,
            experience,
            englishlevel,
            location,
            interviewType,
            interviewAddress,
            description,
            qualification
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
        navigate('/posting-new-job');
    };

    return (
        <div>
            <nav className='bg-white   text-darkviolet font-semibold '>
                <Link to='/admindashboard'>  <span className='flex items-center h-[60px] justify-start pl-4 gap-6 cursor-pointer'> <FaArrowLeft /> Post a New Job</span></Link>
            </nav>
            <div className='bg-light shadow-md p-16'>
                <div className='flex bg-white p-8 rounded-md flex-col'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Job details</h1>
                            <p className='text-grayw'>We use this information to find the best candidates for the job.</p>
                            <div className='my-10'>
                                <label className='font-semibold'>Job title / Designation<span className=''>*</span> </label><br />
                                <input type='text'
                                    value={jobtitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    placeholder='Eg. Softwrae Engeneer' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                            </div>
                            <div className='my-10'>
                                <label className='font-semibold'>Company Name<span className=''>*</span> </label><br />
                                <input type='text'
                                    value={companyname}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    placeholder='Eg. Softwrae Engeneer' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                            </div>

                            <div className='my-10'>
                                <label className='font-semibold'>Type of Job <span className=''>*</span> </label><br />
                                <div className='mt-2 flex items-start gap-8'>
                                    <Button variant="outlined" type='button'
                                        onClick={() => setJobType('part time')}
                                        sx={{
                                            backgroundColor: jobtype === 'part time' ? '#03ACEE' : 'transparent',
                                            color: jobtype === 'part time' ? 'white' : '#1976D2',
                                            px: 3, // Padding X
                                            py: 0.6,
                                        }}
                                        
                                        >Part - Time</Button>


                                    <Button variant="outlined" type='button'
                                        onClick={() => setJobType('full time')}
                                        sx={{
                                        backgroundColor: jobtype === 'full time' ? '#03ACEE' : 'transparent',
                                            color: jobtype === 'full time' ? 'white' : '#1976D2',
                                            px: 3, // Padding X
                                            py: 0.6,
                                        }} >Full - Time</Button>


                                    <Button variant="outlined" type='button'
                                        onClick={() => setJobType('part time & full time')}
                                        sx={{
                                            backgroundColor: jobtype === 'part time & full time' ? '#03ACEE' : 'transparent',
                                                color: jobtype === 'part time & full time' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Both - (part tiem & full time)</Button>
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
                                    <Button variant="outlined" type='button'
                                        onClick={() => setWorkMode('Work from Office')}
                                        sx={{
                                            backgroundColor: workmode === 'Work from Office' ? '#03ACEE' : 'transparent',
                                                color: workmode === 'Work from Office' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Work from Office</Button >

                                    <Button variant="outlined" type='button'
                                        onClick={() => setWorkMode('Work from Home')}
                                        sx={{
                                            backgroundColor: workmode === 'Work from Home' ? '#03ACEE' : 'transparent',
                                                color: workmode === 'Work from Home' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Work from Home</Button >

                                    <Button variant="outlined" type='button'
                                        onClick={() => setWorkMode('Remote')}
                                        sx={{
                                            backgroundColor: workmode === 'Remote' ? '#03ACEE' : 'transparent',
                                                color: workmode === 'Remote' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }}>Remote</Button >
                                </div>

                                <div className='my-10'>
                                    <label className='font-semibold'>Which area will the candidates be working in ? <span className=''>*</span> </label><br />
                                    <input type='text'
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder='Eg. Bangalore' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
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
                                    <Button variant="outlined" type='button'
                                        onClick={() => setPayType('fixed only')}
                                        sx={{
                                            backgroundColor: paytype === 'fixed only' ? '#03ACEE' : 'transparent',
                                                color: paytype === 'fixed only' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }}>Fixed Only</Button >

                                    <Button variant="outlined" type='button'
                                        onClick={() => setPayType('fixed + incentive')}
                                        sx={{
                                            backgroundColor: paytype === 'fixed + incentive' ? '#03ACEE' : 'transparent',
                                                color: paytype === 'fixed + incentive' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Fixed + Incentive</Button >

                                    <Button variant="outlined" type='button'
                                        onClick={() => setPayType('incentive')}
                                        sx={{
                                            backgroundColor: paytype === 'incentive' ? '#03ACEE' : 'transparent',
                                                color: paytype === 'incentive' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Incetive</Button >
                                </div>

                                <div className='my-10'>
                                    <label className='font-semibold'>Salary Range (per month) <span className=''>*</span> </label><br />
                                    <div className='flex gap-4'>
                                        <input type='text'
                                            value={salaryFrom}
                                            onChange={(e) => setSalaryFrom(e.target.value)}
                                            placeholder='From ₹10,000 / Month' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />

                                        <input type='text'
                                            value={salaryTo}
                                            onChange={(e) => setSalaryTo(e.target.value)}
                                            placeholder='To 2,00,000 / Month' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />

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
                                        <Button variant="outlined" type='button'
                                            onClick={() => setQualification('10th or below 10th')}
                                            sx={{
                                                backgroundColor: qualification === '10th or below 10th' ? '#03ACEE' : 'transparent',
                                                    color: qualification === '10th or below 10th' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >10th or below 10th</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setQualification('12th pass')}
                                            sx={{
                                                backgroundColor: qualification === '12th pass' ? '#03ACEE' : 'transparent',
                                                    color: qualification === '12th pass' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >12th pass</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setQualification('Diploma')}
                                            sx={{
                                                backgroundColor: qualification === 'Diploma' ? '#03ACEE' : 'transparent',
                                                    color: qualification === 'Diploma' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Diploma</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setQualification('Graduate')}
                                            sx={{
                                                backgroundColor: qualification === 'Graduate' ? '#03ACEE' : 'transparent',
                                                    color: qualification === 'Graduate' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Graduate</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setQualification('PostGraduate')}
                                            sx={{
                                                backgroundColor: qualification === 'PostGraduate' ? '#03ACEE' : 'transparent',
                                                    color: qualification === 'PostGraduate' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }}>PostGraduate</Button >
                                    </div>
                                </div>
                                <div>    <label className='font-semibold'>English level required <span className=''>*</span> </label><br />
                                    <div className='mt-2 flex items-start gap-8'>
                                        <Button variant="outlined" type='button'
                                            onClick={() => setEnglishLevel('no english')}
                                            sx={{
                                                backgroundColor:  englishlevel === 'no english' ? '#03ACEE' : 'transparent',
                                                    color:  englishlevel === 'no english' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >No English</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setEnglishLevel('basic english')}
                                            sx={{
                                                backgroundColor:  englishlevel === 'basic english' ? '#03ACEE' : 'transparent',
                                                    color:  englishlevel === 'basic english' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }}>Basic English</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setEnglishLevel('good english')}
                                            sx={{
                                                backgroundColor:  englishlevel === 'good english' ? '#03ACEE' : 'transparent',
                                                    color:  englishlevel === 'good english' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Good English</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setEnglishLevel('advanced english')}
                                            sx={{
                                                backgroundColor:  englishlevel === 'advanced english' ? '#03ACEE' : 'transparent',
                                                    color:  englishlevel === 'advanced english' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Advanced English</Button >
                                    </div></div>

                                <div><label className='font-semibold'>Total experience required <span className=''>*</span> </label><br />
                                    <div className='mt-2 flex items-start gap-8'>
                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('Any')}
                                            sx={{
                                                backgroundColor: experience === 'Any' ? '#03ACEE' : 'transparent',
                                                    color: experience === 'Any' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Any</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('1+ year exp')}
                                            sx={{
                                                backgroundColor: experience === '1+ year exp' ? '#03ACEE' : 'transparent',
                                                    color: experience === '1+ year exp' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }}>1+ Year Exp</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('2+ year exp')}
                                            sx={{
                                                backgroundColor: experience === '2+ year exp' ? '#03ACEE' : 'transparent',
                                                    color: experience === '2+ year exp' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >2+ Year Exp</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('4+ year exp')}
                                            sx={{
                                                backgroundColor: experience === '4+ year exp' ? '#03ACEE' : 'transparent',
                                                    color: experience === '4+ year exp' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >4+ Year Exp</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('6+ year exp')}
                                            sx={{
                                                backgroundColor: experience === '6+ year exp' ? '#03ACEE' : 'transparent',
                                                    color: experience === '6+ year exp' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >6+ Year Exp</Button >

                                        <Button variant="outlined" type='button'
                                            onClick={() => setExperience('Any')}
                                            sx={{
                                                backgroundColor: experience === 'Any' ? '#03ACEE' : 'transparent',
                                                    color: experience === 'Any' ? 'white' : '#1976D2',
                                                    px: 3, // Padding X
                                                    py: 0.6,
                                                }} >Freshers Only</Button >
                                    </div></div>


                            </div>
                        </div>

                        <div className='bg-gray h-2'></div>

                        <div>
                            <h1 className='text-graynav text-[20px] font-semibold'>Job Description</h1>
                            <p className='text-grayw'>Describe the responsibilities of this job and other specific requirements here.</p>

                            <div className='my-10'>
                                <label className='font-semibold'>Job Description <span className=''>*</span> </label><br />

                                <textarea rows="4"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter the Job Description, including the main responsibility and tasks..." className='w-full pt-2 mt-2 px-4 border-[1px] border-green rounded-md'>

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
                                    <Button variant="outlined" type='button'
                                        onClick={() => setInterviewType('in-person / walk-in interview')}
                                        sx={{
                                            backgroundColor: interviewType === 'in-person / walk-in interview' ? '#03ACEE' : 'transparent',
                                                color: interviewType === 'in-person / walk-in interview' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >In-Person / Walk-in Interview</Button >

                                    <Button variant="outlined" type='button'
                                        onClick={() => setInterviewType('telephonic/online interview')}
                                        sx={{
                                            backgroundColor: interviewType === 'telephonic/online interview' ? '#03ACEE' : 'transparent',
                                                color: interviewType === 'telephonic/online interview' ? 'white' : '#1976D2',
                                                px: 3, // Padding X
                                                py: 0.6,
                                            }} >Telephonic/Online interview</Button >
                                </div>
                            </div>

                            <div className='my-10'>
                                <label className='font-semibold'>Interview address <span className=''>*</span> </label><br />

                                <input type='text' placeholder='Ex. Bangalore'
                                    value={interviewAddress}
                                    onChange={(e) => setInterviewAddress(e.target.value)}
                                    required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
                            </div>
                        </div>

                        <div className='flex justify-center mt-20'><input type='submit' value="Publish a Job" className='bg-blue text-white px-8 rounded-lg cursor-pointer hover:bg-lightgreen py-3' /></div>

                    </form>

                </div>
            </div>
        </div>


    )
}

export default MultiLevelMainForm