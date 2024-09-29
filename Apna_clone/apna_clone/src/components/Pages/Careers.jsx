import React from 'react'
import Title from '../Titles/Title'
import logo from '../../imagse/logo.png'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import career1 from '../../imagse/career1.png'
import career2 from '../../imagse/caeer2.png'
import career3 from '../../imagse/career3.png'
import { perks, testimonias, gallery } from '../Includes/Careers'
import { FaFacebookF, FaSearch, FaTwitter, FaLinkedin, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import FooterCareers from './FooterCareers'

const Careers = () => {
  return (
    <div>
      <div className='sm:py-16 md:py-24'>
        <div className='bg-white flex items-center gap-0 flex-col'>
          <img src={logo} alt="" className='mb-[-40px] w-[200px]' />
          <Title careersTitles="Careers at Uddo" />
          <p className='text-graynav text-[22px] leading-10 sm:px-4 md:px-[30%] pt-8 text-center'>
            Join the largest homegrown jobs & professional networking platform for India's
            rising working class. We are on a mission to empower a billion people with better economic opportunities and
            transform the employability narrative for the blue and grey collar segment.
          </p>
          <span className='bg-green text-white py-3 px-6 mt-8 rounded-lg'><Buttons btn_title='View jobs' /></span>
        </div>
      </div>

      <div className='bg-gray md:py-20 sm:py-16 flex md:flex-row sm:flex-col sm:items-center md:items-start gap-10 justify-between sm:px-4 md:px-[10%]'>
        <div>
          <Title careersTitles="2 Crore+" />
          <p className='text-graynav text-[22px] leading-10 pt-8 text-center'>
            Job Seekers
          </p>
        </div>
        <div>
          <Title careersTitles="3.5 Crore+" />
          <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
            Interviews & Professional <br />Conversations Last Month
          </p>
        </div>
        <div>
          <Title careersTitles="50 Lakhs+" />
          <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
            Jobs
          </p>
        </div>
      </div>

      <div className='bg-white sm:py-16 md:py-20 md:flex-row sm:flex-col flex items-start gap-10 justify-between px-[10%]'>
        <div className='bg-gray rounded-lg'><img src={career1} alt="" /></div>
        <div className='bg-gray rounded-lg'><img src={career2} alt="" /></div>
        <div className='bg-gray rounded-lg'><img src={career3} alt="" /></div>

      </div>

      <div className='bg-gray  md:py-20 sm:py-16 sm:px-4 md:px-[10%]'>
        <div>
          <Title careersTitles="Perks" />
          <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
            When we say Employees first, we mean it!
          </p>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-20'>
          {perks.map((item, index) => (
            <div key={index} className='flex gap-8 items-center flex-col'>
              <img src={item.img} alt="" className='w-[50px]' />
              <h1 className='text-darkviolet text-[22px] text-center leading-[10px] font-bold'>{item.title}</h1>
              <p className='text-graynav text-[22px] leading-10 text-center'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white sm:py-16 md:py-20 sm:px-4 md:px-[10%]'>
        <div>
          <Title careersTitles="Testimonials" />
          <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
            <i>     What our employees think about apna!</i>
          </p>
        </div>
        <div className='mt-20 sm:px-4 md:px-[20%] flex flex-col gap-20' >
          {testimonias.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-4'>
              <img src={item.img} alt="" className='w-[50px]' />
              < p className='text-graynav text-[22px] leading-10  text-center'>
                {item.desc}
              </p>
              <img src={item.cimg} alt="" className='rounded-full w-[200px]' />
              < p className='text-graynav text-[22px] leading-10 text-center'>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray md:py-20 sm:py-16 sm:px-4 md:px-[7%]'>
        <div>
          <Title careersTitles="Job Openings" />

        </div>

        <div>
          <div className='w-full mt-20 mb-6 flex justify-center'>
            <div className=' w-full relative border-[1px] border-violet rounded-lg'>
              <span className='absolute top-[14px]  left-5 text-grayw'>
                <FaSearch />
              </span>
              <input
                type='text'
                className='text-violet text-[16px] outline-none rounded-lg w-full py-2 pl-12 pr-12'
                placeholder='Search jobs...'

              />
            </div>
          </div>
        </div>
        <div>
          <div className='w-full mt-0 md:flex-row sm:flex-col flex justify-center gap-6'>
            <div className=' w-full relative border-[1px] border-violet rounded-lg'>


              <select className='text-violet text-[15px] outline-none rounded-lg w-full py-2 pl-2 pr-12'>
                <option>WorkPlace Type</option>
                <option>On-site</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>

            </div>
            <div className=' w-full relative border-[1px] border-violet rounded-lg'>


              <select className='text-violet text-[15px] outline-none rounded-lg w-full py-2 pl-2 pr-12'>
                <option>Location</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Remote</option>
              </select>

            </div>
            <div className=' w-full relative border-[1px] border-violet rounded-lg'>


              <select className='text-violet text-[15px] outline-none rounded-lg w-full py-2 pl-2 pr-12'>
                <option>Department</option>
                <option>On-site</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>

            </div>
            <div className=' w-full relative border-[1px] border-violet rounded-lg'>


              <select className='text-violet text-[15px] outline-none rounded-lg w-full py-2 pl-2 pr-12'>
                <option>Work Type</option>
                <option>On-site</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>

            </div>
          </div>
        </div>
        <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
          Can’t find the right role? Email your resume to <span className='text-green'>career@uddo.in</span>  to be considered for new positions in the future.
        </p>
      </div>
      <div className='bg-white py-20 sm:px-4 md:px-[10%]'>
        <div>
          <Title careersTitles="Our Team - Life at uddo" />
          <p className='text-graynav text-[22px] leading-10  pt-8 text-center'>
            <i>    We work hard and celebrate harder with colleagues-turned-besties - One company, countless happy moments!</i>
          </p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {gallery.map((item, index) => (
            <div key={index}>
              <img src={item.img} />
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray sm:py-16 md:py-20 sm:px-4 md:px-[10%]'>
        <div>
          <Title careersTitles="Follow us on Social Media" />
        </div>
        <div className='mt-16'>
          <div className='flex text-green items-center text-[40px] justify-center gap-10'>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedin /></span>
            <span><FaInstagramSquare /></span>
            <span><FaYoutube /></span>
          </div>
        </div>
      </div>
      <div>
        <FooterCareers />
      </div>
    </div>
  )
}

export default Careers