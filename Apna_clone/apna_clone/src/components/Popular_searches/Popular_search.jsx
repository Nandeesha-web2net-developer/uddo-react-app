import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaChevronRight } from 'react-icons/fa';
const Popular_search = ({ title, heading, img, btn, mainHeading, gradient, borderColor, path }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className={`popular_search relative overflow-hidden rounded-[24px] p-6 transition-all hover:shadow-400 md:px-6 md:py-[42px]`}
            style={{
                backgroundImage: isHovered ? gradient : 'linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.04))',
                border: isHovered ? `1px solid ${borderColor}` : '1px solid #e5e7eb',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1 className='m-0 text-md text-[#8C8594]'>{title}</h1>
            <h1 style={{
                color: isHovered ? borderColor : 'black',
            }}
                className='mb-0 mt-3 md:mt-8 font-bold text-[1.5rem]'>{heading}</h1>
            <img className='z-10 absolute bottom-0 right-0 h-full max-h-[130px] w-[100px] object-contain md:max-h-[180px] md:w-[45%]' src={img} />
            <Link to={path}
                style={{
                    backgroundColor: isHovered ? `${borderColor}` : 'transparent',
                    color: isHovered ? 'white' : 'black',
                    display: 'inline-flex'
                }}
                className='mt-[64px] rounded-lg px-4 py-2 font-semibold transition-all md:mt-[100px] flex items-center'>
                <span>  {btn} </span><span className='pl-2'><FaChevronRight /></span>
            </Link>
            <h3 className={`searc-bg stroked absolute whitespace-nowrap text-[28px] font-bold transition-all duration-500 md:left-[75px] md:top-[47%] md:text-[64px] ${isHovered ? 'searc-bg-move' : '.searc-bg-wmove'}`}>{mainHeading}</h3>
        </div>
    );
};

export default Popular_search;
