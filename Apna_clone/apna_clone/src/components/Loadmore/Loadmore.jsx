import React, { useState } from 'react';
import { findJobs, popularJobs, hiring, departmentJobs, fLinks, fLegal, fResources } from './footer';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Title from '../Titles/Title';

const Loadmore = () => {
    const [find, setFind] = useState(12);
    const [isExpanded, setIsExpanded] = useState(false);

    //hire 
    const [findhire, setFindhire] = useState(12);
    const [isExpandedHire, setIsExpandedHire] = useState(false);

    //popular
    const [findpop, setFindpop] = useState(12);
    const [isExpandedpop, setIsExpandedpop] = useState(false);

    //Department
    const [finddep, setFinddep] = useState(12);
    const [isExpandeddep, setIsExpandeddep] = useState(false);

    const toggleLoadMoreJob = () => {
        if (isExpanded) {
            setFind(12);
        } else {
            setFind(findJobs.length);
        }
        setIsExpanded(!isExpanded);
    };

    //Hiring Toogle
    const toggleLoadMoreHire = () => {
        if (isExpandedHire) {
            setFindhire(12);
        } else {
            setFindhire(hiring.length);
        }
        setIsExpandedHire(!isExpandedHire);
    };

    //Popular
    const toggleLoadMorePop = () => {
        if (isExpandedpop) {
            setFindpop(12);
        } else {
            setFindpop(popularJobs.length);
        }
        setIsExpandedpop(!isExpandedpop);
    };


    //Department
    const toggleLoadMoreDep = () => {
        if (isExpandeddep) {
            setFinddep(12);
        } else {
            setFinddep(departmentJobs.length);
        }
        setIsExpandeddep(!isExpandeddep);
    };

    const findind = findJobs.slice(0, find);
    const hiringJob = hiring.slice(0, findhire);
    const popular = popularJobs.slice(0, findpop);
    const department = departmentJobs.slice(0, finddep);

    return (
        <div className='bg-gray py-10'>
            <section className='sm:px-4 md:px-[280px]'>
                <div className=''>
                    <Title footertitles="Find Jobs" />
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-between' >

                        {findind.map((item, index) => (
                            <div key={index} className='text-[14px] text-violet'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='btn text-[14px] font-medium text-grayw mt-6 btn-dark flex items-center gap-3  d-block w-100' onClick={toggleLoadMoreJob}>
                        {isExpanded ? 'View Less' : 'View More'} {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                <div className='w-auto mt-10 h-[1px] bg-footergray'></div>
                <div className=''>
                    <Title footertitles="Start Hiring" />
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-between' >

                        {hiringJob.map((item, index) => (
                            <div key={index} className='text-[14px] text-violet'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='btn text-[14px] font-medium text-grayw mt-6 btn-dark flex items-center gap-3  d-block w-100' onClick={toggleLoadMoreHire}>
                        {isExpandedHire ? 'View Less' : 'View More'} {isExpandedHire ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                <div className='w-auto mt-10 h-[1px] bg-footergray'></div>
                <div className=''>
                    <Title footertitles="Popular Jobs" />
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-between' >

                        {popular.map((item, index) => (
                            <div key={index} className='text-[14px] text-violet'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='btn text-[14px] font-medium text-grayw mt-6 btn-dark flex items-center gap-3  d-block w-100' onClick={toggleLoadMorePop}>
                        {isExpandedpop ? 'View Less' : 'View More'} {isExpandedpop ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                <div className='w-auto mt-10 h-[1px] bg-footergray'></div>
                <div className=''>
                    <Title footertitles="Popular Jobs" />
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-between' >

                        {department.map((item, index) => (
                            <div key={index} className='text-[14px] text-violet'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='btn text-[14px] font-medium text-grayw mt-6 btn-dark flex items-center gap-3  d-block w-100' onClick={toggleLoadMoreDep}>
                        {isExpandeddep ? 'View Less' : 'View More'} {isExpandeddep ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                <div className='w-auto mt-10 h-[1px] bg-footergray'></div>

                <div className='grid grid-cols-3'>
                    <div>
                        <Title footertitles="Links" />

                        <div className='flex flex-col' >

                            {fLinks.map((item, index) => (
                                <div key={index} className='text-[14px] text-violet'>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Title footertitles="Legal" />

                        <div className='flex flex-col' >

                            {fLegal.map((item, index) => (
                                <div key={index} className='text-[14px] text-violet'>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Title footertitles="Resources" />

                        <div className='flex flex-col' >

                            {fResources.map((item, index) => (
                                <div key={index} className='text-[14px] text-violet'>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Loadmore;
