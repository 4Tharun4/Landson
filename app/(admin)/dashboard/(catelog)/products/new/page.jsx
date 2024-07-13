"use client"
import React, { useState } from 'react'
import TextInput from '@/components/adminpages/formsInputs/TextInput'
import TextArea from '@/components/adminpages/formsInputs/TextArea'
import Submit from '@/components/adminpages/formsInputs/Submit'
import { useForm } from 'react-hook-form';
import ImageInput from '@/components/adminpages/formsInputs/ImageInput'
import makepostrequest from '@/lib/apiRequest'
import Select from '@/components/adminpages/formsInputs/Select'
export default function NewProduct() {

  const cateregory =  [
    {
      id:"1",
      name:"Battery"
    },
    {
      id:"2",
      name:"Battery"
    },
    {
      id:"3",
      name:"Battery"
    },
  ]
  const{register, reset,handleSubmit,formState:{errors},watch} = useForm();
  const [imageUrl, SetImageUrl] = useState("");
  const [loading, setloading] = useState(false);
  async function submit(data){
    data.imageUrl = imageUrl;
console.log(data);
makepostrequest(setloading, "api/productupload", data, "Product ", reset);
    SetImageUrl("");
  }
  return (
  
      <>
      <div className="main w-full">
        <div className="title p-3  font-semibold text-xl">
          <p>Add Product</p>
        </div>
        <div className="form-inputs bg-white h-full w-full py-3 px-3  rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(submit)} className=" px-4  w- full py-3 grid grid-cols-2 gap-3 mobile:grid mobile:grid-cols-1"  >
      <TextInput  name="ProductTitle" register={register} errors={errors} />
      <TextInput  name="ProductDesciption" register={register} errors={errors} />
      <TextInput  name="ProductModel" register={register} errors={errors} />
      <TextInput  name="ProductMaxpower" register={register} errors={errors} />
      <TextInput  name="ProductFueltankcapacity" register={register} errors={errors} />
      <TextInput  name="ProductEfficiency" register={register} errors={errors} />
      <TextInput  name="ProductRPM" register={register} errors={errors} />
      <TextInput  name="ProductEngineoilcapacity" register={register} errors={errors} />
      <ImageInput imageUrl={imageUrl}
          SetImageUrl={SetImageUrl}
          label="Product Images"
          endpoint="ProductImageUpload"
          />
      <Select name="Category" register={register} errors={errors} objects={cateregory}/>

      <Submit ButtonTitle="Add Product" LoadingButtonTitle="Adding Product"/>
     

      </form>
        </div>
       
      </div>
      
     
      </>
   
  )
}
