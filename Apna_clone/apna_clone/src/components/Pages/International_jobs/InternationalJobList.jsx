import React from 'react'
import Navabar from '../../Navigation_bar/Navbar'
import Footer from '../../Footer/Footer'
import Loadmore from '../../Loadmore/Loadmore'
import International from './International'
import CandidateReview from '../../Candidate_reviews/CandidateReview'
import { FaGlobe } from 'react-icons/fa'

const InternationalJobList = () => {
    return (
        <div className='h-auto bg-gray' id="Fresrsjobs">
            <div className='bg-white fixed z-[200]'>
                < Navabar />
            </div>
            <div className='md:px-[10%] sm:px-4 pt-24 pb-6 text-violet text-[20px] font-semibold'><h1 className='flex items-center gap-4'> <FaGlobe  /> Explore Global job Opportunities and find International Jobs</h1></div>

            <div className='md:px-[10%] sm:px-4 justify-between flex flx-col gap-5  pb-8'>
                <div className='w-[100%]'> <International /></div>

            </div>
            <div>
                <CandidateReview />
            </div>
            <div>
                <Loadmore />
            </div>

            <Footer />

        </div>
    )
}

export default InternationalJobList