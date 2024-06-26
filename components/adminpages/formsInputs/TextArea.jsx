import React from 'react'

export default function TextArea() {
  return (
    <label className='relative'>
  <textarea  type='TextArea' className='px-4 py-2  text-lg  outline-none  border-2   border-gray-200   rounded  hover:border-black  duration-200  peer focus:border-blue-600 bg-inherit  ' />
<span className=' absolute  left-0 top-2 px-1  text-lg  uppercase  tracking-wide  peer-focus:text-indigo-600 pointer-events-none duration-200  peer-focus:text-sm  peer-focus:-translate-y-4   peer-focus:bg-white  ml-2 '>Product Title</span>


</label>
  )
}
