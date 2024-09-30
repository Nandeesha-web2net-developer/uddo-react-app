import React from 'react'
import Accordian from '@mui/material/Accordion'
import AccordianSummary from '@mui/material/AccordionSummary'
import AccordianDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcom from '@mui/icons-material/ExpandMore'
import ExpandMore from '@mui/icons-material/ExpandMore'
import logo from '../imagse/logo.png'
import { TypesofJobs } from './Includes/Navlist'
import { Link } from 'react-router-dom'

const Trial = () => {
    return (
        <div>
            <img src={logo} alt="" className='w-[80px]' />
            <Accordian>
                <AccordianSummary expandIcon={<ExpandMore />} >
                    Jobs
                </AccordianSummary>
                <AccordianDetails>
                    <Accordian>
                        <AccordianSummary expandIcon={<ExpandMore />} >
                            Job By Type
                        </AccordianSummary>
                        <AccordianDetails>

                            <div className='flex flex-col gap-3'>
                                {TypesofJobs.map((item, index) => (
                                    <Link to={item.path} >{item.title}</Link>
                                ))}
                            </div>

                        </AccordianDetails>
                    </Accordian>

                
                    <Accordian>
                        <AccordianSummary expandIcon={<ExpandMore />} >
                            Job By Cities
                        </AccordianSummary>
                        <AccordianDetails>

                            <div className='flex flex-col gap-3'>
                           
                                    <Link to='/' >Jobs Agra</Link>
                                    <Link to='/' >Jobs Bangalore</Link>
                                    <Link to='/' >Jobs Mumbai</Link>
                                    <Link to='/' >All Other Cities</Link>
                               
                            </div>

                        </AccordianDetails>
                    </Accordian>

                    <Accordian>
                        <AccordianSummary expandIcon={<ExpandMore />} >
                            Job By Department
                        </AccordianSummary>
                        <AccordianDetails>

                            <div className='flex flex-col gap-3'>  
                                    <Link to='/'>Sales</Link>
                                    <Link to='/'>Admin & Back Office</Link>
                                    <Link to='/'>Customer Support</Link>
                                    <Link to='/'>Marketing</Link>
                                    <Link to='/'>Restaurant</Link>
                                    <Link to='/'>All Other Department</Link>
                            </div>

                        </AccordianDetails>
                    </Accordian>

                    <Accordian>
                        <AccordianSummary expandIcon={<ExpandMore />} >
                            Job By Company
                        </AccordianSummary>
                        <AccordianDetails>

                            <div className='flex flex-col gap-3'>  
                                    <Link to='/'>Swiggy</Link>
                                    <Link to='/'>Zomoto</Link>
                                    <Link to='/'>Aaruhi Groups</Link>
                                    <Link to='/'>All other Companies</Link>
                            </div>

                        </AccordianDetails>
                    </Accordian>

                    <Accordian>
                        <AccordianSummary expandIcon={<ExpandMore />} >
                            Job By Qualification
                        </AccordianSummary>
                        <AccordianDetails>

                            <div className='flex flex-col gap-3'>  
                                    <Link to='/'>10th Pass Jobs</Link>
                                    <Link to='/'>12th Pass Jobs</Link>
                            </div>
                        </AccordianDetails>
                    </Accordian>



                </AccordianDetails>
            </Accordian>
        </div>
    )
}

export default Trial