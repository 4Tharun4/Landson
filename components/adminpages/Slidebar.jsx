"use client"
import { ArrowLeft, LayoutDashboard, X, icons,ClipboardCheck, ArrowBigDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { usePathname } from 'next/navigation'
import Products from '@/Assets/products.svg'
import categories from '@/Assets/categories.svg'
import Image from 'next/image'


export default function Slidebar({show,isshow}) {
  const pathname = usePathname()
  
  const ProductLink = [
    {
      title:"Product List",
      Link:"/dashboard/products"
    },
    {
      title:"Create Product",
      Link:"/dashboard/products"
    },
  ]
  const CategoryLinks = [
    {
      title:"Product List",
      Link:"/dashboard/products"
    },
    {
      title:"Create Product",
      Link:"/dashboard/products"
    },
  ]
  const OrdersLinks = [
    {
      title:"Product List",
      Link:"/dashboard/products"
    },
    {
      title:"Create Product",
      Link:"/dashboard/products"
    },
  ]

  return (
    
    <div className={
      show?" bg-[#2b3445] w-64  text-white  hidden z-50  h-dvh fixed  overflow-y-auto ":" bg-[#2b3445] w-64 mobile:block    text-white  z-50  h-dvh fixed  overflow-y-auto "
    }>
          <div className="first-logo  flex  justify-between     p-10 text-white">
<h1 className=' font-medium text-xl'><span className='text-green-500 text-3xl'>L</span>andson</h1>
<div className="open-not-btn hover:rounded-full flex justify-center items-center w-10 h-10  hover:bg-slate-400  ">
 <button onClick={()=>isshow(true)}> <ArrowLeft /></button>
</div>
          </div>
          <div className="dashboard-links flex text-xl  items-center flex-col gap-3">
               <div className="dashboard ">
               <Link href="/dashboard" className={pathname == "/dashboard"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> Dashboard</Link>
               </div>
               <div className="dashboard ">
              
               </div>
               <Collapsible>
  <CollapsibleTrigger>Products</CollapsibleTrigger>
  <CollapsibleContent>
  {
    ProductLink.map((items,i)=>{
      <Link href={items.Link} className={pathname == items.Link?" bg-[#373f50] p-2 rounded-lg text-blue-600   inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> {items.title}</Link>

    })
  }
 
  </CollapsibleContent>
</Collapsible>
               
              
</div>          

    </div>
  )
}
