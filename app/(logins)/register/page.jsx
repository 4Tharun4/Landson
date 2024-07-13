"use client"
import React, { useState } from 'react'
import TextInput from '@/components/adminpages/formsInputs/TextInput'

import Submit from '@/components/adminpages/formsInputs/Submit'
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/adminpages/formsInputs/ImageInput'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Register() {
  const{register, reset,handleSubmit,formState:{errors},watch} = useForm();
//   const [imageUrl, SetImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  const [emailerror,setemailerror] =useState("");
 const router = useRouter();

    
  async function submit(data) {
    try {
      setloading(true);
      const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
      
      const response = await fetch(`${baseurl}/api/register/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
      });

      const Responsedata = await response.json();

      if (response.ok) {
        setloading(false);
        toast.success("User Created Successfully");
        reset();
        router.push("/login")

      } else {
        setloading(false);
        if (response.status === 400) {
          setemailerror("User Email Already Exists");
          toast.error("User Email Already Exists");
        } else {
          console.error("Server Error:", Responsedata.message);
          console.log(Responsedata.message);
          toast.error("Oops, Something went wrong");
        }
      }
    } catch (error) {
      setloading(false);
      console.log("Network Error", error);
      toast.error("Something Went Wrong, Please Try Again");
    }
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
      {
        <span className='text-sm text-red-800 ' >
          {
            emailerror?"Email Alerady Exists":""
          }
        </span>
      }
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

