import React from 'react'
import AdminNav from '../Navigation_bar/AdminNav'


const Admin_login = () => {
  return (
    <>
      <div className='h-[100vh] bg-gray'>
        <AdminNav />

        <div className=' flex justify-center items-center flex-col shadow-e3'>
          <div className='bg-white  login-box  w-[35%] mt-10 p-10 rounded'>
            <h1 className='text-login text-[26px] font-[600]'>Let's get started</h1>
            <p className='text-login text-[15px] mb-[1.5rem]'>Hire top talent faster with uddo</p>
            <form action="">
              <label className='text-login text-[15px] font-medium'>
                Mobile Number
              </label>
              <div className='relative pt-[5px] mb-[1.5rem]'><span className='absolute left-[8px] top-[14px]'>+91</span>
                <input type="tel" placeholder='Enter your mobile number' className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-12 py-[8.5px]' />
              </div>
              <input type="submit" className='hover:bg-greenhover flex w-full  justify-center items-center h-[42px]
           text-center px-auto py-[8px] rounded font-bold bg-green text-white text-[16px]' value='Send OTP' />
            </form>

          </div>
          <p className='pt-3'>By clicking continue, you agree to the apna  <a href='#' className='text-blue'> Terms of service</a>  & <br />
            <a href='#' className='text-blue'> Privacy policy </a></p>
        </div>
      </div>
    </>



  )
}

export default Admin_login