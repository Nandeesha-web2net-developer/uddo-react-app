import React, { useState } from 'react'
import AdminNav from '../Navigation_bar/AdminNav'
import OtpInput from './OtpInput';


const Admin_login = () => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //Phone Validations
    const regx = /[^0-9]/g;
    if (phoneNumber.length < 10 || regx.test(phoneNumber)) {
      alert("Inavalid Phone Number");
      return
    }
    else {

      //call by api
      //show otp field

      setShowOtpInput(true)

    }
  }

  const onOtpSubmit = () => {
    console("Login successfull")
  }

  return (
    <>
      <div className='h-[100vh] bg-gray'>
        <AdminNav />

        <div className=' flex justify-center items-center flex-col shadow-e3'>
          {!showOtpInput ? (<div className='bg-white  login-box  w-[35%] mt-10 p-10 rounded'>
            <h1 className='text-login text-[26px] font-[600]'>Let's get started</h1>
            <p className='text-login text-[15px] mb-[1.5rem]'>Hire top talent faster with uddo</p>
            <form onSubmit={handlePhoneSubmit}>
              <label className='text-login text-[15px] font-medium'>
                Mobile Number
              </label>
              <div className='relative pt-[5px] mb-[1.5rem]'><span className='absolute left-[8px] top-[14px]'>+91</span>
                <input value={phoneNumber}
                  onChange={handlePhoneNumber}
                  type="text" placeholder='Enter your mobile number' className='focus:outline-blue rounded border-[1px] border-login w-[100%] pl-12 py-[8.5px]' />
              </div>
              <input type="submit" className='hover:bg-greenhover flex w-full cursor-pointer  justify-center items-center h-[42px]
           text-center px-auto py-[8px] rounded font-bold bg-green text-white text-[16px]' value='Send OTP' />
            </form>

          </div>

          ) : (<div className='bg-white  login-box  w-[35%] mt-10 p-10 rounded'>
            <h1 className='text-login text-[26px] font-[600]'>Let's get started</h1>
            <p className='text-login text-[15px] mb-[1.5rem]'>Hire top talent faster with uddo</p>

            <label className='text-login text-[15px] font-medium'>
              Enter OTP sent to {phoneNumber}
            </label>
            <div className='relative pt-[5px] mb-[1.5rem]'>

              <OtpInput length={4} onOtpSubmit={onOtpSubmit} />

            </div>


          </div>)}

          <p className='pt-3'>By clicking continue, you agree to the apna  <a href='#' className='text-blue'> Terms of service</a>  & <br />
            <a href='#' className='text-blue'> Privacy policy </a></p>
        </div>
      </div>
    </>



  )
}

export default Admin_login