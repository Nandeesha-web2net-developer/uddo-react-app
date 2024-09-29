import React from 'react'
import Navabar from '../../Navigation_bar/Navbar'
import Footer from '../../Footer/Footer'
import Loadmore from '../../Loadmore/Loadmore'
import Faq_emp from '../../Faqs/Faq_emp'
import SearchLeftSidebar from '../../Search_left_bar/SearchLeftSidebar'
import PartTimejobs from './PartTimejobs'
import Rightsidebar from '../../Right_sidebars/Rightsidebar'

const PartTimeJobList = () => {
    return (
        <div className='h-auto bg-gray' id="Fresrsjobs">
            <div className='bg-white z-[200] fixed'>
                < Navabar />
            </div>
            <div className='px-[10%] pt-24 text-violet text-[20px] font-bold'><h1>20+ Part Time Jobs</h1></div>

            <div className='sm:px-4 md:px-[10%] justify-between flex sm:flex-col md:flex-row gap-5 py-8'>

                <div className='md:w-[25%] sm:w-[100%] h-full'> <SearchLeftSidebar /></div>

                <div className='md:w-[50%] sm:w-[100%]'> <PartTimejobs /></div>

                <div className='md:w-[25%] sm:w-[100%]'>
                    <Rightsidebar />
                </div>

            </div>
            <div className='md:px-0 sm:px-4'>
                <Faq_emp />
            </div>
            <div>
                <Loadmore />
            </div>

            <Footer />

        </div>
    )
}

export default PartTimeJobList