import React, { useState, useEffect } from 'react'
import Navabar from '../Navigation_bar/Navbar'
import Footer from '../Footer/Footer'
import Loadmore from '../Loadmore/Loadmore'
import Faq_emp from '../Faqs/Faq_emp'
import SearchLeftSidebar from '../Search_left_bar/SearchLeftSidebar'
import MainJobList from '../Job_Listing/MainJobList'
import Rightsidebar from '../Right_sidebars/Rightsidebar'
import CandidateReview from '../Candidate_reviews/CandidateReview'

// import fulltime from '../../imagse'
// import experience from '../../imagse/exerience.avif'
// import engLevel from '../../imagse/english.avif '

const JobDetails = () => {
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

    return (
        <div >
            <div className={header ? 'bg-white sticky top-0 border-graylight border-b-2 z-50' : 'bg-gray'}>
                <Navabar />
            </div>

            <div className='sm:px-4 md:px-[10%] justify-between flex sm:flex-col md:flex-row gap-5 py-8'>

                <div className='md:w-[25%] sm:w-[100%] h-full'> <SearchLeftSidebar /></div>

                <div className='md:w-[50%] sm:w-[100%]' > <MainJobList /></div>

                <div className='md:w-[25%] sm:w-[100%]'>
                    <Rightsidebar />
                </div>

            </div>
            <div className='md:px-0 sm:px-4'>
                <Faq_emp />
            </div>
            <div><CandidateReview /></div>
            <div>
                <Loadmore />
            </div>

            <Footer />

        </div>
    )
}

export default JobDetails