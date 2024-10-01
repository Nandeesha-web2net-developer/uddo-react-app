import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation_bar/Navbar';
import Title from '../Titles/Title';
import { data } from '../Started_Steps/start_steps_data';
import StartStep from '../Started_Steps/start_steps';
import Popular_search from '../Popular_searches/Popular_search';
import { popular, gradients, borderColors } from '../Popular_searches/Popular'
import { hiring } from '../Company_hiring/Hiring';
import Company_hiring from '../Company_hiring/Company_hiring';
import { qualification } from '../Qualification/qualification_data'
import Qualification from '../Qualification/Qualification';
import { job_data } from '../Job_roles/job_data'
import Job from '../Job_roles/Job';
import download_scanner from '../../imagse/download-scanner.webp'
import playstore from '../../imagse/playstore.svg'
import download from '../../imagse/download.png'
import Faq_emp from '../Faqs/Faq_emp';
import Faq_jobsek from '../Faqs/Faq_jobsek';
import Footer from '../Footer/Footer'
import Buttons from '../Buttons/Buttons'
import { FaChevronRight, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Loadmore from '../Loadmore/Loadmore';
import banner from '../../imagse/banner.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom';
import CandidateReview from '../Candidate_reviews/CandidateReview';
import axios from 'axios'
import Select from 'react-select'
import MobileNavigation from '../Navigation_bar/MobileNavigation';

const Home = () => {
    const [job, setJob] = useState([])
    const [find, setFind] = useState(10);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleLoadMoreJob = () => {
        if (isExpanded) {
            setFind(12);
        } else {
            setFind(job_data.length);
        }
        setIsExpanded(!isExpanded);
    };
    const findind = job_data.slice(0, find);

    const navigate = useNavigate(); // Use navigate to redirect

    //Slidder
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        setHeader(window.scrollY >= 90);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader); // Clean up the event listener
        };
    }, []);

    //Get database Data
    useEffect(() => {
        axios.get('http://localhost:5000/jobDetails')
            .then(result => setJob(result.data))
            .catch(err => console.log(err))
    }, [])

    const jobOptions = job.map(job => ({ value: job.id, label: job.jobtitle }));
    const jobLocation = job.map(job => ({ value: job.id, label: job.city }));

    //Search filter
    const [selectOption, setSeletOption] = useState(null);
    const [selectOptionCity, setSeletOptionCity] = useState(null);

    const handleSelect = (selectOption) => {
        setSeletOption(selectOption)
    }
    const handleSelectCity = (selectOptionCity) => {
        setSeletOptionCity(selectOptionCity)
    }

    const handleSearcSubmit = (event) => {
        event.preventDefault();

        if (selectOption && selectOptionCity) {
            navigate('/search-filter-jobs-list', {
                state: {
                    jobTitle: selectOption.label,
                    city: selectOptionCity.label
                }
            });
        }
    };

    return (
        <div>
            <div className={header ? 'bg-white sticky top-0 border-graylight border-b-2 z-50' : 'bg-gray'}>
                <Navbar />
            </div>
        

            {/* Banner */}
            <div className='h-screen bg-gray pt-[60px] sm:px-4 md:px-10 relative'>
                <Title btitle={'GIVE NEW DESTINATION TO YOUR CAREER'} />
                <Title blargetitle={'Uddo : Your final destination of job search.'} />
                <div className='z-10 relative'>  <Title bsubtitle={'Get multiple career opportunities'} /></div>
                <div className='sm:w-[100%] md:w-[60%] relative'>
                    <form onSubmit={handleSearcSubmit}>
                        <span className='banner-gradient z-0 absolute top-[90px]'></span>
                        <div className='w-[100%] bg-white relative z-10 mt-14 gap-4 flex md:flex-row sm:flex-col justify-between sm:h-[auto] md:h-[65px] items-center p-3 rounded-xl'>

                            <span className='flex items-center sm:w-[100%] md:w-[50%]'>
                                <span className='text-grayw text-[12px]'><FaSearch /></span>

                                <Select
                                    options={jobOptions}
                                    value={selectOption}
                                    onChange={handleSelect}
                                    autoFocus={false}
                                    className='focus:outline-none pl-0 w-[100%] border-none outline-none'
                                    placeholder="Search jobs by 'title'"
                                />
                            </span>
                            <span className='h-[100%] w-[2px] bg-light'></span>

                            <span className='flex items-center sm:w-[100%] md:w-[50%]'>
                                <span className='text-grayw text-[12px]'><FaMapMarkerAlt /></span>
                                <Select
                                    options={jobLocation}
                                    value={selectOptionCity}
                                    onChange={handleSelectCity}
                                    className='focus:outline-none pl-0 w-[100%] border-none outline-none'
                                    placeholder="All Cities"
                                />  </span>

                            <span className='flex sm:w-[100%] sm:mt-6 md:w-[150px] md:mt-0 justify-center items-center h-[42px] text-center px-auto pt-[8px] pb-[8px] rounded font-bold bg-green text-white text-[16px]'>
                                <button type='submit'>Find Jobs</button>
                            </span>

                        </div>

                    </form>

                </div>
                <img src={banner} alt="" className='sm:w-[60%] md:w-[30%] sm:right-[20%] md:right-0 absolute bottom-0' />

            </div>
            {/* Get started in 3 steps */}
            <div className='bg-white  md:py-20 sm:py-16'>
                <div className='md:px-10 sm:px-4'>
                    <Title underlinetitle={'Get Started in 3 easy steps'} className="under-line-title" />
                    <div className='flex md:flex-row sm:flex-col items-center sm:gap-10 justify-between mt-14'>
                        {data.map((step, index) => (
                            <StartStep key={index} img={step.img} title={step.title} description={step.desc} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'> <div className='flex w-[180px] justify-center items-center h-[49px] text-center px-auto py-[8px] rounded font-bold  text-green border-[1px] border-green text-[16px] hover:text-white hover:bg-green'><Buttons btn_title={'Post a Job'} /></div></div>
                </div>
            </div>
            <div className='bg-gray sm:py-16 sm:px-4 md:py-20 md:px-10'>

                <Title headings={'What kind of a role do you want?'} />
                <div className=' grid gap-4 mt-12 sm:grid-cols-2 md:grid-cols-5' >
                    {findind.map((item, index) => (
                        <div key={index}>
                            <Job img={item.img} title={item.title} desc={item.desc} />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-10'>  <div className='flex w-[190px] justify-center items-center h-[49px] text-center px-auto py-[8px] rounded-full font-bold  text-green border-[1px] border-green text-[16px] hover:text-white hover:bg-green' onClick={toggleLoadMoreJob}><Buttons btn_title={'Show all job roles'} /></div></div>
            </div>
            <div className=' bg-white sm:py-16 sm:px-4 md:py-20 md:px-10'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 h-auto'>
                    <div className='mb-[48px] md:text-left sm:text-center flex items-center md:mb-0'><Title blargetitle={'Popular searches on uddo'} /></div>
                    {popular.map((item, index) => (
                        <div key={index}>
                            <Popular_search
                                title={item.title}
                                heading={item.heading}
                                img={item.img}
                                btn={item.btn}
                                mainHeading={item.mainHeading}
                                gradient={gradients[index % gradients.length]}
                                borderColor={borderColors[index % borderColors.length]}
                                path={item.path}
                            />
                        </div>
                    ))}

                </div>
            </div>
            {/* Top Companies Hring */}
            {/* <div>

                <div className='px-10  text-center bg-gray py-20'><Title headings={'Top companies hirng with us'} />

                    <div className='slider-container gap-6 w-full  mt-12 flex pb-20'>

                        {hiring.map((item) => (
                            <div className='w-[33.33%]' key={item.id}>
                                <Company_hiring img={item.img} title={item.title} desc={item.desc} btn={item.btn} />
                            </div>
                        ))}

                    </div>

                </div>
            </div> */}

            <div>

                <div className='text-center bg-gray sm:py-16 sm:px-6 md:py-20 md:px-10'>
                    <Title headings={'Top companies hirng with us'} />

                    <div>
                        <Slider {...settings}>
                            {hiring.map((item) => (
                                <div className='' key={item.id}>
                                    <Company_hiring img={item.img} title={item.title} desc={item.desc} btn={item.btn} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className='flex justify-center mt-10'> <Link to='/job-search'><div className='flex w-[190px] justify-center items-center h-[49px] text-center px-auto py-[8px] rounded font-bold  text-green border-[1px] border-green text-[16px] hover:text-white hover:bg-green'><Buttons btn_title={'View all'} /><span className='pl-2 mb-[-3px]'><FaChevronRight /></span></div></Link> </div>

                </div>
            </div>


            <div className='bg-white sm:py-16 sm:px-4 md:py-20 md:px-8'>
                <div className='bg-gray py-10 rounded-xl'>
                    <Title headings={'What is your Qualification'} />
                    <div className=' grid sm:grid-cols-2 md:grid-cols-6 gap-2 px-4  mt-12 pb-10' >
                        {qualification.map((item) => (
                            <div key={item.id}>
                                <Qualification img={item.img} title={item.title} desc={item.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-gray sm:py-16 md:py-20'>
                <div className='md:px-10 sm:px-4'>
                    <Title underlinetitle={'Dwonload the Uddo App'} className="under-line-title" />
                    <div className='flex md:flex-row sm:flex-col justify-between sm:items-start md:items-center gap-9 mt-14 relative'>
                        <div className='md:w-[15%] sm:w-[80%]'>
                            <h1 className='text-[16px] font-medium text-grayw'>Scan this QR code</h1>
                            <img src={download_scanner} alt="" />
                        </div>
                        <div className='md:w-[60%] sm:w-[100%]'>
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-[16px] font-medium text-grayw mb-4'>or tell us your phone number, we’ll send you an SMS link</h1>
                                <div className='flex md:flex-row sm:flex-col sm:items-start md:gap-0 sm:gap-6 md:items-center'>
                                    <span className='md:w-[67%] sm:w-[100%] bg-white py-[0px] rounded border-[1px] flex border-grayw shadow'>
                                        <span className=' text-[17px] font-medium py-[11px] text-grayw px-3 border-grayw'>+91</span>
                                        <input type='tel'
                                            placeholder='987 654 3210'
                                            className='w-[99%] py-[7px] focus:outline-none focus:ring text-[18px] pl-[15px]  border-l-[1px] p-[10px]' />
                                    </span>  <a href='#' className='px-6 rounded py-2 sm:ml-0 md:ml-3 border-2 border-grayw'> Download App </a>


                                </div>
                                <div className='mt-4'><img src={playstore} alt="" /></div>
                            </div>

                        </div>
                        <div className='w-[25%] sm:hidden md:block'>
                            <img src={download} alt="" className='md:w-[30%]  md:top-[-120px] sm:bottom-0 absolute right-0' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:px-10 sm:px-4'>   <Faq_emp />
            </div>



            <div className='bg-white sm:py-10 md:py-20'>
                <div className='md:px-10 sm:px-4'>
                    <Title underlinetitle={'Frequently Asked Questions (Employer)'} className="mb-[60px] under-line-title" />
                    <div className='md:px-10 sm:px-0'>
                        <Faq_jobsek /></div>
                </div>
            </div>
            <div> <CandidateReview /></div>

            <div>
                <Loadmore />
            </div>

            <Footer />

        </div>
    );
}

export default Home;