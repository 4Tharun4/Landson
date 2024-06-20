'use client'
import React, { useState } from 'react'



export default function LargeCards({title,sales}) {
 
  return (
    <div className='  justify-between w-[100%] flex gap-2 p-4 h-36 bg-white shadow-lg rounded-lg mt-5'>
      <div className="title  flex flex-col       ">
        <h1 className=' text-sm'>{title}</h1>
        <div className="sales pt-10">
          <h1 className=' text-xl font-bold'>{sales}</h1>
        </div>
      </div>
      <div className="charts w-44 overflow-hidden">
        
      </div>
    </div>
  )
}
