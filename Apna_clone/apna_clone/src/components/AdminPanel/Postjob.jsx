import React, { useState } from 'react';
import axios from 'axios';
import AdminNav from '../Navigation_bar/AdminNav';
import { useNavigate } from 'react-router-dom';

const Postjob = () => {
    const [jobtitle, setjobtitle] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [workmode, setworkmode] = useState('');
    const [salary, setsalary] = useState('');
    const [jobtype, setjobtype] = useState('');
    const [experience, setexperience] = useState('');
    const [englishlevel, setenglishlevel] = useState('');
    const [location, setlocation] = useState('');
  //  const [image, setimage] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/postJob", { jobtitle, companyname, workmode, salary, jobtype, experience, englishlevel, location})
            .then(result => console.log(result))
            .catch(err => console.log(err));
        navigate('/jobDetails')
    };
 

    return (
        <>

            <div className='h-auto  bg-gray'>
                <AdminNav />

                <div className=' flex justify-center items-center flex-col shadow-e3'>
                    <div className='bg-white  login-box  w-[45%] my-10 p-10 rounded'>
                        <h1 className='text-login text-[26px] font-[600] mb-3'>Post a Job</h1>

                        <form onSubmit={Submit}>
                            <div className='flex flex-col'>
                                <label className='text-login text-[15px] font-medium'>Job Title</label>
                                <input type='text' value={jobtitle} onChange={(e) => setjobtitle(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6 py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>Company Name</label>
                                <input type="text" value={companyname} onChange={(e) => setcompanyname(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>WFH / WFO</label>
                                <input type="text" value={workmode} onChange={(e) => setworkmode(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>Salary Range ex: ₹19,000 - ₹29,000 / monthly </label>
                                <input type="text" value={salary} onChange={(e) => setsalary(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>Job Type</label>
                                <input type="text" value={jobtype} onChange={(e) => setjobtype(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>Experience</label>
                                <input type="text" value={experience} onChange={(e) => setexperience(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />

                                <label className='text-login text-[15px] font-medium'>English Level</label>
                                <input type="text" value={englishlevel} onChange={(e) => setenglishlevel(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />
                                
                                <label className='text-login text-[15px] font-medium'>Location</label>
                                <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />
                               
                               {/*  <label className='text-login text-[15px] font-medium'>Uplaod Company Image </label>
                                <input type="file" onChange={handleImageChange} required className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-3 mb-6  py-[8.5px]' />
 */}
                                <input type="submit" value="Submit" className='cursor-pointer flex w-full  justify-center items-center h-[42px]
           text-center px-auto py-[8px] rounded hover:bg-greenhover font-bold bg-green text-white text-[16px]'/>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Postjob;
