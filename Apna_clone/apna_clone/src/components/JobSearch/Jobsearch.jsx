import React, { useState } from 'react';
import SearchNavbar from './SearchNavbar';
import { FaSearch } from 'react-icons/fa';
import { jobsByCompany, jobsByCities, jobsByDepartment } from '../Includes/Navlist';
import { Link } from 'react-router-dom';

const Jobsearch = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };


    const filteredCompanies = jobsByCompany.filter((item) => 
        item.title.toLowerCase().includes(searchTerm)
    );

    const filteredCities = jobsByCities.filter((item) => 
        item.title.toLowerCase().includes(searchTerm)
    );

    const filteredDepartments = jobsByDepartment.filter((item) => 
        item.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='mb-20'>
            <div className='border-graylight border-b-2 z-50 bg-darkviolet'>
                <SearchNavbar />
            </div>
            <div>
                <div className='w-full my-20 flex justify-center'>
                    <div className='search-box relative w-[60%] rounded-full'>
                        <span className='absolute top-[22px] left-5 text-grayw'>
                            <FaSearch />
                        </span>
                        <input 
                            type='text' 
                            className='text-violet text-[17px] outline-none rounded-full w-full py-4 pl-12 pr-12' 
                            placeholder='Search for city or department or company' 
                            value={searchTerm} 
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>

            <div className='px-[12%]'>
                {/* Jobs By Company */}
                <div>
                    <h1 className='text-serachtitle font-bold text-[22px] mb-4'>Jobs By Company</h1>
                    <div className='grid text-serachtitle gap-3 grid-cols-4 '>
                        {filteredCompanies.length > 0 ? filteredCompanies.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path} className='hover:font-semibold'>{item.title}</Link>
                            </div>
                        )) : <p>No companies found</p>}
                    </div>
                </div>

                {/* Jobs By Cities */}
                <div>
                    <h1 className='text-serachtitle font-bold text-[22px] mb-4 mt-20'>Jobs By Cities</h1>
                    <div className='grid text-serachtitle gap-3 grid-cols-4 '>
                        {filteredCities.length > 0 ? filteredCities.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path} className='hover:font-semibold'>{item.title}</Link>
                            </div>
                        )) : <p>No cities found</p>}
                    </div>
                </div>

                {/* Jobs By Department */}
                <div>
                    <h1 className='text-serachtitle font-bold text-[22px] mb-4 mt-20'>Jobs By Department</h1>
                    <div className='grid text-serachtitle gap-3 grid-cols-4 '>
                        {filteredDepartments.length > 0 ? filteredDepartments.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path} className='hover:font-semibold'>{item.title}</Link>
                            </div>
                        )) : <p>No departments found</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobsearch;
