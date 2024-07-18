"use client"
import React, { useState } from 'react'
import TextInput from '@/components/adminpages/formsInputs/TextInput'
import TextArea from '@/components/adminpages/formsInputs/TextArea'
import Submit from '@/components/adminpages/formsInputs/Submit'
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/adminpages/formsInputs/ImageInput'
import {makepostrequest} from '@/lib/apiRequest'
import generateRandomId from '@/components/adminpages/generateuserid'
import Select,{SelectRole} from '@/components/adminpages/formsInputs/Select'
import { Loader } from 'lucide'
export default function NewDealer() {
  const{register, reset,handleSubmit,formState:{errors},watch} = useForm();
  const [imageUrl, SetImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  async function submit(data){
    
    // const baseurl= process.env.NEXT_PUBLIC_BASE_URL;
    // // console.log(baseurl);
    // const response = await fetch(`${baseurl}/api/newdealer`,{
    //   method:"GET",
    //   headers:{
    //     "Content-Type": "application/json",

    //   },
    //   body: JSON.stringify(data),
    // });
    // console.log(response);
    // const DealerId = generateRandomId();
    // data.DealerId= DealerId;
    // console.log(DealerId);
  data.imageUrl = imageUrl;
// console.log(data);
makepostrequest(setloading, "api/register/users", data, "Customer ", reset);
    SetImageUrl("");
  }
  return (
  
      <>
      <div className="main w-full">
        <div className="title p-3  font-semibold text-xl">
          <p>Add Dealer</p>
        </div>
        <div className="form-inputs bg-white h-full w-full py-3 px-3  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(submit)} className=" px-4 py-3 grid grid-cols-2 gap-3 mobile:grid mobile:grid-cols-1"  >
      <TextInput  name="Name" register={register}  errors={errors} />
      <TextInput  name="PhoneNumber" register={register} type={"number"} errors={errors} />
      <TextInput  name="Email" register={register} errors={errors} />
      <TextInput  name="Address" register={register} errors={errors} />
      <SelectRole name="selectRole" register={register} errors={errors}/>
      <ImageInput imageUrl={imageUrl}
          SetImageUrl={SetImageUrl}
          label="UserImageImage"
          endpoint="UserImageUpload"
          />
      <Submit  ButtonTitle="Add Customer" LoadingButtonTitle="Adding Customer"/>
      </form>
        </div>
       
      </div>
      
     
      </>
   
  )
}
