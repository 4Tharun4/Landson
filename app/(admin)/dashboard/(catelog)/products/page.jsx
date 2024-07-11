import CustumData from '@/components/adminpages/CustunData'
import Header from '@/components/adminpages/Header'
import React from 'react'

export default function Products() {
  return (
  
      <>
      <div className=" flex flex-col w-full bg-white rounded-md shadow-lg">
      <Header title="Product List" linkpage={"/dashboard/products/new"} headtitle={"Add Product"} />
      <hr className=' mt-10 mb-3  text-green-600 h-1 bg-green-400 ' />
   
        <CustumData  title={"Products"} />
        </div>
        </>
    
  )
}
