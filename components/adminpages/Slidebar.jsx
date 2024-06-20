"use client"
import { ArrowLeft, LayoutDashboard, X, icons } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Slidebar() {
  const links=[
    {
      title:"Dashboard",
      icon:LayoutDashboard,
      href:"/dashboard"
    },
    {
      title:"Orders",
      icon:LayoutDashboard,
      href:"/dashboard"
    },
    {
      title:"categories",
      icon:LayoutDashboard,
      href:"/dashboard"
    },
    {
      title:"Brands",
      icon:LayoutDashboard,
      href:"/dashboard"
    },
    
  ]
  return (
    <div className=' bg-[#2b3445] w-64  mobile:hidden z-50  h-dvh fixed  overflow-y-auto    '>
          <div className="first-logo  flex  justify-between     p-10 text-white">
<h1 className=' font-medium text-xl'><span className='text-green-500 text-3xl'>L</span>andson</h1>
<div className="open-not-btn hover:rounded-full flex justify-center items-center  hover:bg-slate-400  ">
  <ArrowLeft/>
</div>
          </div>
          <div className="links flex flex-col  text-white justify-center px-6">
            <div className="main flex  flex-col gap-4">
            <Collapsible>
  <CollapsibleTrigger>Orders</CollapsibleTrigger>
  <CollapsibleContent>
  Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
             {
              links.map((items,i)=>{
               
                return(
                  // activestate
               <div className="   " key={i}> 
              
               <Link href={items.href} className=' flex gap-4 px-4 bg-red-800 h-10 items-center rounded-lg'> <LayoutDashboard/>{items.title}</Link>
             
                
               </div>
                )
              })
             }
        
              
            </div>
            
          </div>

    </div>
  )
}
