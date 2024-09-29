import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import quotes from '../../imagse/quote.png'
import { review } from '../Includes/Navlist';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const CandidateReview = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        centerMode: true,
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
                    slidesToShow: 1.1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex md:flex-row sm:flex-col Reviews sm:mb-[480px] md:mb-[0px] h-[500px]'>
            <div className='px-[6%] sm:w-[100%] py-10  md:w-[40%] flex flex-col justify-center items-start  bg-green'>
                <img src={quotes} alt="" />
                <h1 className='text-white text my-6 text-[32px] font-bold'>Join the community of 5 crore satisfied job seekers...</h1>
                <div className='flex text-white font-semibold text-[18px] items-center gap-3'>Play Store Ratings
                    <span className='flex gap-2 text-[#FFB400]'>
                        <span className=''><FaStar />  </span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                        <span><FaStar />  </span>
                    </span></div>
            </div>
            <div className='md:w-[60%] sm:[100%] bg-[#e0eaff] md:pl-5 sm:pl-0  py-10  items-center'>
                <div className=''>
                    <Slider {...settings}>
                        {review.map((item) => (
                            <div className='bg-white  w-0 sm:h-[auto] md:h-[270px] px-7 py-2  login-card rounded-2xl '>
                                <div className='flex md:flex-row sm:flex-col gap-6 sm:mb-5 md:mb-10'>
                                    <img src={item.img} className=' mt-[-40px] rounded-[17px] w-[80px] h-[90px]' />
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-4'>
                                            <h1 className='text-dark font-semibold text-[20px]'>{item.name}</h1>
                                            <span className='text-green items-center font-semibold px-[3px] flex border-[0.5px] border-green rounded-md text-[13px]
                      '><span className='pr-1 '><FaCheckCircle /></span>PLACED</span> </div>
                                        <div className='flex text-dark font-semibold text-[18px] items-center gap-3'>4.5
                                            <span className='flex gap-2 text-[#FFB400]'>
                                                <span className=''><FaStar />  </span>
                                                <span><FaStar />  </span>
                                                <span><FaStar />  </span>
                                                <span><FaStar />  </span>
                                                <span><FaStar />  </span>
                                            </span></div>
                                    </div>
                                </div>
                                <p className='text-[17px] leading-[28px]'>"{item.desc}"</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CandidateReview