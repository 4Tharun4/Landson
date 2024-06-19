import React from 'react'
import WelcomeImage from '@/Assets/welcome.svg'
import Image from 'next/image'

export default function Admininfocard(){
  return (
    <div className=' flex relative  mobile:w-full  w-[55%]  h-min   rounded-lg bg-white'>
      <div className="admin-name-note flex flex-col p-6">
       <div className="">
        <h2 className=' text-blue-500 text-xl'>Good mornig, Admin Name!</h2>
        <h2 className=' text-[#7d879c]'>Here's what happening with your store today!</h2>
       </div>
       <div className="total-vists py-7">
     <h1 className=' text-2xl font-bold'>15,350.25</h1>
     <h2  className='text-[#7d879c]'>Today's Visit</h2>
       </div>
       <div className="total-vists">
     <h1 className='text-2xl font-bold'>$10,360.66</h1>
     <h2  className='text-[#7d879c]'>Today's total sales</h2>
       </div>
      </div>
      <div className="left-side  mobile:hidden   ">
<Image src={WelcomeImage} priority alt='Welcome-image' className='absolute  top-4 w-44 h-34    mt-24'/>
      </div>
      </div>
    
  )
}
