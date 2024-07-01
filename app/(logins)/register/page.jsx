"use client"
import React, { useState } from 'react'
import TextInput from '@/components/adminpages/formsInputs/TextInput'
import TextArea from '@/components/adminpages/formsInputs/TextArea'
import Submit from '@/components/adminpages/formsInputs/Submit'
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/adminpages/formsInputs/ImageInput'
import {makepostrequest} from '@/lib/apiRequest'
import generateRandomId from '@/components/adminpages/generateuserid'
export default function NewDealer() {
  const{register, reset,handleSubmit,formState:{errors},watch} = useForm();
//   const [imageUrl, SetImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  async function submit(data){
   
makepostrequest(setloading, "api/register", data, "register ", reset);
    // SetImageUrl("");
  }
  return (
  
      <>
      <div className="main w-full  ">
        <div className="title p-3  font-semibold text-xl">
          <p>Registration</p>
        
        <div className="form-inputs bg-white h-full w-full py-3 px-3  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(submit)} className="flex justify-center items-center flex-col h-dvh gap-3 "  >
      <TextInput  name="Name" register={register}  errors={errors} />
      <TextInput  name="Email" register={register} type={"email"} errors={errors} />
      <TextInput  name="Password" register={register} type={"password"} errors={errors} />
      <TextInput  name="PhoneNumber" register={register} errors={errors} type={"number"} />
      <TextInput  name="Address" register={register}  errors={errors} />
      <Submit ButtonTitle="Register" LoadingButtonTitle="Registering"/>
     

      </form>
        </div>
        </div>
      </div>
      
     
      </>
   
  )
}
