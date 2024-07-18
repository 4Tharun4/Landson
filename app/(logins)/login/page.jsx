"use client"
import React, { useState } from 'react'
import TextInput from '@/components/adminpages/formsInputs/TextInput'

import Submit from '@/components/adminpages/formsInputs/Submit'
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/adminpages/formsInputs/ImageInput'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Login() {
  const{register, reset,handleSubmit,formState:{errors},watch} = useForm();
//   const [imageUrl, SetImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  const [Creditional,Creditionalerror] =useState("");
 const router = useRouter();

    
  async function submit(data) {
    
    console.log(data);
  }
  return (
  
      <>
      <div className="main w-full  ">
        <div className="title p-3  font-semibold text-xl">
          <p>Login</p>
        
        <div className="form-inputs bg-white h-full w-full py-3 px-3  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(submit)} className="flex justify-center items-center flex-col h-dvh gap-3 "  >
      <TextInput  name="Enter UserId Or Email" register={register}  errors={errors} />
      {
        <span className='text-sm text-red-800 ' >
          {
            Creditionalerror?"":""
          }
        </span>
      }
      <TextInput  name="Password" register={register} type={"password"} errors={errors} />
      
      <Submit ButtonTitle="Login" LoadingButtonTitle="Logingg"/>
     

      </form>
        </div>
        </div>
      </div>
      
     
      </>
   
  )
}

