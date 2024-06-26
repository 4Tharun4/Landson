import {  Plus, Search } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
export default function Header({title,linkpage,headtitle}) {
  return (
   
  <div className="main-orders mt-2 px-3   w-full">
    <div className="title font-semibold text-xl">
    <p>{title}</p>
    </div>
    <div className="btns flex justify-between items-center mt-2 h-10 mobile:grid mobile:grid-cols-1 mobile:w-full  mobile:gap-2 ">
      <div className="search-btn   inline-flex items-center justify-center   ">
        
      
       <input type="text"  name="Search" id="Search" placeholder='Search Products...' autoComplete='off' className='p-2 w-full   bg-white px-5  shadow-md rounded-lg outline-none'/>
      </div>
      <div className="addbtn">
      <Link className=' inline-flex bg-[#4e97fd] px-4 mobile:w-full items-center justify-center text-white rounded-lg hover:bg-blue-600 py-2' href={linkpage} ><Plus/><span>{headtitle}</span></Link>
      </div>
    </div>
    
  </div>

  
  )
}
