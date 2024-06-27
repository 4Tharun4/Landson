import React from 'react'

export default function TextInput({
   name,type,register,errors,
}) {
  return (
    
    <label  className=' relative   '>
  <input  {...register(`${name}`,{require})}  autoComplete='off'  type={type}  required={true} className='px-4 py-2   w-full text-lg  outline-none  border-2  border-gray-200  rounded  hover:border-blue-600  duration-200  peer focus:border-indigo-600 bg-inherit   ' />
 

<span className=' absolute  left-0 top-2 px-1  text-sm  uppercase  tracking-wide  peer-focus:text-indigo-600 pointer-events-none duration-200  peer-focus:text-[10px]   peer-focus:-translate-y-4  peer-valid:bg-white  peer-valid:-translate-y-4   peer-focus:bg-white    peer-valid:text-sm   ml-2 '>{name}</span>
{
    errors[`${name}`]&&(
      <span className=' text-sm text-red-600'>{name} is Required</span>
    )
  }
</label>

  )
}
