'use client'
import React from 'react'
import WelcomeImage from '@/Assets/welcome.svg'
import Image from 'next/image'
import { useEffect,useState } from 'react'




export default function Admininfocard(){
  function getGreeting() {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else if (currentHour < 22) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  }
  
    const [greeting, setGreeting] = useState('');
  
    useEffect(() => {
      setGreeting(getGreeting());
    }, []);
  
  return (
    <div className=' flex relative  mobile:w-full  w-[55%]  h-min   rounded-lg bg-white'>
      <div className="admin-name-note flex flex-col p-6">
       <div className="">
        <h2 className=' text-blue-500 text-xl'>{greeting},AdminName</h2>
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
<Image src={WelcomeImage}   priority alt='Welcome-image' className='absolute  top-4 w-44 h-34    mt-24'/>
      </div>
      </div>
    
  )
}
