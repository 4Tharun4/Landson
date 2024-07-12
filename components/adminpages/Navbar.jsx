'use client'
import { Bell, Menu, User, X } from 'lucide-react'
import React, { useState } from 'react'
import CustomUserProfie from './CustomUserProfie'

export default function Navbar({show,isshow}) {

  return (
    <div className=' w-full h-14 mb-3    items-center fixed flex  mobile:flex   justify-between  mobile:ml-0  shadow-xl pr-[1rem] mobile:pr-[1rem]   z-30  bg-[#fff]'>

      {
        show? <button  onClick={()=>isshow(!show)}><Menu /></button>:<button className="" onClick={()=>isshow(!show)}><Menu/></button>
      }



      {
        show?<div className="right-side flex gap-3 items-center justify-end  mobile:flex mobile:justify-end mobile:items-center">
        <div className="search mobile:hidden">
<input type="text" placeholder='Search Anything...' className=' p-1 w-60 bg-gray-200 outline-none rounded-md  px-4 '  />
        </div>
        <div className="notifications">
          <Bell />
        </div>
        <div className="profile">
         <CustomUserProfie/>
        </div>
       </div>:<div className="right-side flex gap-3 items-center justify-end pl-[15rem]  mobile:flex mobile:justify-end mobile:items-center">
        <div className="search mobile:hidden">
        <input type="text" placeholder='Search Anything...' className=' p-1 w-60 bg-gray-200 outline-none rounded-md  px-4 '  />
        </div>
        <div className="notifications">
          <Bell />
        </div>
        <div className="profile">
         <CustomUserProfie/>
        </div>
       </div>
      }
       
      
    </div>
  )
}
