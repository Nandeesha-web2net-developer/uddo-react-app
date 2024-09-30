import React, { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'
import {Button} from '@mui/material'
const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  return (
    <div className='flex flex-col'>
      <form>
        <div>
          <h1 className='text-graynav text-[20px] font-semibold'>Job details</h1>
          <p className='text-grayw'>We use this information to find the best candidates for the job.</p>
          <div className='my-10'>
            <label className='font-semibold'>Job title / Designation<span className=''>*</span> </label><br />
            <input type='text' placeholder='Eg. Softwrae Engeneer' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
          </div>

          <div className='my-10'>
            <label className='font-semibold'>Type of Job <span className=''>*</span> </label><br />
            <div className='mt-2 flex items-start gap-8'>
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Part - Time</Button>
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Full - Time</Button>
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Both - (part tiem & full time)</Button>
            </div>

          </div>
        </div>

<div className='bg-gray h-2'></div>

        <div>
          <h1 className='text-graynav text-[20px] font-semibold'>Location</h1>
          <p className='text-grayw'>Let candidates know where they will be working from.</p>


          <div className='my-10'>
            <label className='font-semibold'>Work location type  <span className=''>*</span> </label><br />
            <div className='mt-2 flex items-start gap-8'>
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Work from Office</Button >
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Work from Home</Button >
              <Button variant="outlined" type='button' className='border-[1px] border-grayw rounded-full px-4 py-1' >Remote</Button >
            </div>

            <div className='my-10'>
              <label className='font-semibold'>Which area will the candidates be working in ? <span className=''>*</span> </label><br />
              <input type='text' placeholder='Eg. Bangalore' required className='w-full h-10 mt-2 px-4 border-[1px] border-green rounded-md' />
            </div>

          </div>
        </div>



      </form>

    </div>
  )
}

export default Account