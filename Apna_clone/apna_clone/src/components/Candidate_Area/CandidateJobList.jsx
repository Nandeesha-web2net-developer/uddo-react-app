import React, { useState, useEffect } from 'react'
import CandidateNavbar from './CandidateNavbar'
import Loadmore from '../Loadmore/Loadmore';
import CandidateReview from '../Candidate_reviews/CandidateReview';
import Rightsidebar from '../Right_sidebars/Rightsidebar';
import MainJobList from '../Job_Listing/MainJobList';
import SearchLeftSidebar from '../Search_left_bar/SearchLeftSidebar';
import Footer from '../Footer/Footer';
import Faq_emp from '../Faqs/Faq_emp'

const CandidateJobList = () => {
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
        <div>
            <div className={header ? 'bg-white sticky top-0 border-graylight border-b-2 z-50' : 'bg-white'}>
                <CandidateNavbar />
            </div>
            <div>
                <div className='sm:px-4 md:px-[10%] justify-between flex sm:flex-col md:flex-row gap-5 py-8'>

                    <div className='md:w-[25%] sm:w-[100%] h-full'> <SearchLeftSidebar /></div>

                    <div className='md:w-[50%] sm:w-[100%]' > <CandidateJobList /></div>

                    <div className='md:w-[25%] sm:w-[100%]'>
                        
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

        </div>

    )
}

export default CandidateJobList