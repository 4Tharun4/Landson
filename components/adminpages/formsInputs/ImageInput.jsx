"use client";
 
import {UploadButton,UploadDropzone}  from  '@/lib/uploadthing'
import { Pencil } from "lucide-react";
import Image from "next/image";


import React from "react";
import toast, { Toaster } from "react-hot-toast";
 
export default function ImageInput({
    label,imageUrl,SetImageUrl,className="col-span-full ",
    endpoint
}) 

{

  return (
   <div className={className}>
    <div className="flex  text-sm font-medium  justify-between items-center mb-4 h-20 ">
        <label htmlFor="Category-Image">
            {label}
        </label>
        {
            imageUrl && (
                <button onClick={()=>SetImageUrl("")}
                type="button"
                className="flex space-x-2 py-2 px-4 bg-black items-center rounded-lg shadow-lg text-white ">

                    <Pencil className="w-5 h-5"/>
                    <span>Change Image</span>
                </button>
            )
        }
    </div>
    {
        imageUrl?(
            <Image 
            src={imageUrl}
            alt="Product-Image"
            width={1000}
            height={667}
            className="w-full h-64  object-contain"
            />

        ):(
            <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              SetImageUrl(res[0].url);//imp
              toast.success("Upload Success")
        
            }}
            onUploadError={(error) => {
                console.log(error);
              // Do something with the error.
              toast.error(`ERROR! ${error.message}`,error)

            }}
          />
           
        )
    }
   </div>
  );
}