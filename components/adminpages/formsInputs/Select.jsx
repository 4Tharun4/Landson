import React from 'react'

export default function Select({
   name,type,register,errors,}) 
{
    const optios =[
        {
            id:"1",
            "categoteryname":"Battery"
        },
        {
            id:"2",
            "categoteryname":"Spares"
        },
        {
            id:"3",
            "categoteryname":"Stikers"
        },
    ]
  return (
    
    <label  className=' relative   '>
  <select  {...register(`${name}`,{require})}  autoComplete='off'  type={type}  required={true} className='px-4 py-2   w-full text-lg  outline-none  border-2  border-gray-200  rounded  hover:border-blue-600  duration-200  peer focus:border-indigo-600 bg-inherit ' >
  {
    optios.map((opt,i)=>{
        return(
            <option key={i} > 
       {opt.categoteryname}
            </option>
        )
    })
}
  </select>
<span className=' absolute  left-0 top-2 px-1  text-lg  uppercase  tracking-wide  peer-focus:text-indigo-600 pointer-events-none duration-200  peer-focus:text-sm  peer-focus:-translate-y-4  peer-valid:bg-white  peer-valid:-translate-y-5   peer-focus:bg-white   ml-2 '>{name}</span>

{
    errors[`${name}`]&&(
      <span className=' text-sm text-red-600'>{name} is Required</span>
    )
  }
</label>

  )
}
export  function SelectRole({
  name,type,register,errors,}) 
{
   const Roles =[
       {
           id:"1",
           "Role":"USER"
       },
       {
           id:"2",
           "Role":"DEALER"
       },
       {
           id:"3",
           "Role":"WHEREHOUSE"
       },
       {
        id:"4",
        "Role":"ADMIN"
    },
   ]
 return (
   
   <label  className=' relative   '>
 <select  {...register(`${name}`,{require})}  autoComplete='off'  type={type}  required={true} className='px-4 py-2   w-full text-lg  outline-none  border-2  border-gray-200  rounded  hover:border-blue-600  duration-200  peer focus:border-indigo-600 bg-inherit ' >
 {
   Roles.map((role,i)=>{
       return(
           <option key={i} > 
      {role.Role}
           </option>
       )
   })
}
 </select>
<span className=' absolute  left-0 top-2 px-1  text-lg  uppercase  tracking-wide  peer-focus:text-indigo-600 pointer-events-none duration-200  peer-focus:text-sm  peer-focus:-translate-y-4  peer-valid:bg-white  peer-valid:-translate-y-5   peer-focus:bg-white   ml-2 '>{name}</span>

{
   errors[`${name}`]&&(
     <span className=' text-sm text-red-600'>{name} is Required</span>
   )
 }
</label>

 )
}
