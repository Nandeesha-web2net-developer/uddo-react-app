import React from 'react'

const Title = ({ btitle, bsubtitle, blargetitle, underlinetitle, className, headings, footertitles, careersTitles }) => {
  return (
    <>
      <h1 className="text-[20px] font-bold text-green pt-[10px]">{btitle}</h1>
      <h3 className='md:text-[24px] sm:text-[18px] font-[400] mt-3 ' >{bsubtitle}</h3>
      <h1 className="md:text-[52px] sm:text-[32px] font-bold mt-1 sm:leading-[48px] md:leading-[67px] mb-0">{blargetitle}</h1>
      <p className={`font-[500] text-grayw mb-13 relative sm:text-[32px] leading-[48px] md:text-4xl ${className}`}>{underlinetitle}</p>
      <h1 className="px-4 text-center text-[32px] font-bold leading-[48px]">{headings}</h1>
      <h1 className="text-left text-violet text-[16px] font-bold leading-[48px]">{footertitles}</h1>
      <h1 className='text-darkviolet text-[40px] text-center sm:leading-[48px]  md:leading-[10px] font-bold'>{careersTitles}</h1>
    </>
  )
}

export default Title