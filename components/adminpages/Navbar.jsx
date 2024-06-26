'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export default function Navbar({show,isshow}) {

  return (
    <div className=' w-full h-14 mb-3    items-center fixed flex  mobile:flex   justify-between  mobile:ml-0  shadow-xl pr-[18rem]  z-30  bg-[#fff]'>

      {
        show?<button  onClick={()=>isshow(!show)}><Menu/></button>:<button className="hidden" onClick={()=>isshow(!show)}><Menu/></button>
      }



      
       <div className="right-side flex items-center justify-center">
        <div className="search">
<input type="" />
        </div>
       </div>
      
    </div>
  )
}
