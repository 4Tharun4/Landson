import React from 'react'

export default function smallcards({title,salesdata,ordersdata}) {
  return ( 
    <div className=' bg-white mx-3 flex shadow-lg rounded-lg gap-4 w-[100%] mobile:mt-3'>
    <div className="p-4 flex flex-col gap-2   h-28" >
      <h2 className=' font-[14px]  text-[#7d879c]'>{title}</h2>
      <h1 className=' text-xl font-bold'>{salesdata}</h1>
      <p className=' text-[#7d879c] text-sm'>{ordersdata}</p>
    </div>
    </div>
  )
}
