"use client"
import { ArrowLeft, LayoutDashboard, X, icons,ClipboardCheck, ArrowBigDown, ChevronFirst, ChevronLast } from 'lucide-react'
import Link from 'next/link'
import React, { createContext, useContext, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { usePathname } from 'next/navigation'
import Products from '@/Assets/products.svg'
import categories from '@/Assets/categories.svg'
import Image from 'next/image'
import Analysischarts from './Analysischarts'



const SlidebarContext = createContext()
export  function SlidebarItem({icon,text,active,alert, link}){
 const{expand} = useContext(SlidebarContext);
 const pathname = usePathname()
return(
  <Link href={link} className={pathname==link?
    `relative flex items-center py-2 px-3 my-1 rounded-md cursor-pointer  transition-colors bg-gradient-to-tr  from-green-100  to-green-300 text-green-800 ${active}`:
 `relative flex items-center py-2 px-3 my-1 rounded-md cursor-pointer  transition-colors  from-indigo-100  to-indigo-200 text-green-800` }>
    {icon}
    <span className={` overflow-hidden transition-all ${expand?"w-52 ml-3":"w-0"}`}>{text}</span>
    {active&&<div className={` absolute right-2 w-2 h-2  rounded  bg-indigo-600 ${expand?"":" top-2"}` }></div>}
  </Link>
)
}


export default function Slidebar({children,show,isshow}) {
  const [expand,setexpand]= useState(true)
  // 
  
  // const ProductLink = [
  //   {
  //     title:"Product List",
  //     Link:"/dashboard/products"
  //   },
  //   {
  //     title:"Create Product",
  //     Link:"/dashboard/products"
  //   },
  // ]
  // const CategoryLinks = [
  //   {
  //     title:"Product List",
  //     Link:"/dashboard/products"
  //   },
  //   {
  //     title:"Create Product",
  //     Link:"/dashboard/products"
  //   },
  // ]
  // const OrdersLinks = [
  //   {
  //     title:"Product List",
  //     Link:"/dashboard/products"
  //   },
  //   {
  //     title:"Create Product",
  //     Link:"/dashboard/products"
  //   },
  // ]

  return (
    <><aside className='h-screen  mobile:hidden   '>
      <nav className=' h-full  flex-col border-r   fixed  bg-white z-50 w-56 shadow-sm'>
        <div className="p-6 pb-2 flex justify-between items-center ">
          <p className={` text-2xl ${expand ? "" : "hidden"}`}><span className=' text-3xl text-green-400'>L</span>andson</p>
          <button onClick={() => setexpand(curr => !curr)} className=' p-1.5   mx-16    rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expand ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SlidebarContext.Provider value={{ expand }}>


          <ul className=' flex-1 px-3'>{children}</ul>
        </SlidebarContext.Provider>

      </nav>
    </aside>
    <div className="">
    
    {
      show?<aside className='h-screen    '>
      <nav className=' h-full  flex-col border-r   fixed  bg-white z-50 w-56 shadow-sm'>
        <div className="p-6 pb-2 flex justify-between items-center ">
          <p className={` text-2xl ${show ? "" : "hidden"}`}><span className=' text-3xl text-green-400'>L</span>andson</p>
          <button onClick={() => isshow(show => !show)} className=' p-1.5   mx-16    rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expand ? <X /> : <X />}
          </button>
        </div>
        <SlidebarContext.Provider value={{ expand }}>


          <ul className=' flex-1 px-3'>{children}</ul>
        </SlidebarContext.Provider>

      </nav>
    </aside>:<aside className='h-screen  mobile:hidden   '>
        <nav className=' h-full  flex-col border-r   fixed  bg-white z-50 w-56 shadow-sm'>
          <div className="p-6 pb-2 flex justify-between items-center ">
            <p className={` text-2xl ${expand ? "" : "hidden"}`}><span className=' text-3xl text-green-400'>L</span>andson</p>
            <button onClick={() => isshow(show => !show)} className=' p-1.5   mx-16    rounded-lg bg-gray-50 hover:bg-gray-100'>
              {show ? <X /> : <X />}
            </button>
          </div>
          <SlidebarContext.Provider value={{ expand }}>


            <ul className=' flex-1 px-3'>{children}</ul>
          </SlidebarContext.Provider>

        </nav>
      </aside>
    }
    </div>
    </>
//     <div className={
//       show?` bg-[#2b3445] w-64  text-white  hidden z-50  h-dvh fixed     mobile:hidden  ${" mobile:block"}   overflow-y-auto `:" bg-[#2b3445] w-64   mobile:block     text-white   mobile:z-0  h-dvh fixed  overflow-y-auto "
//     }>
//       {/* <div className=" ">
//           <div className="first-logo  flex  justify-between     p-10 text-white">
// <h1 className=' font-medium text-xl'><span className='text-green-500 text-3xl'>L</span>andson</h1>
// <div className="open-not-btn hover:rounded-full flex justify-center items-center w-10 h-10  hover:bg-slate-400  ">
//  <button onClick={()=>isshow(true)}> <ArrowLeft /></button>
// </div>
//           </div>
//           <div className="dashboard-links flex text-xl  w-full items-center flex-col gap-3">
//                <div className="dashboard text-[15px]  ">
//                <Link href="/dashboard" className={pathname == "/dashboard"?" bg-[#373f50]  p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> Dashboard</Link>
//                </div>
              
//                <Collapsible>
//   <CollapsibleTrigger>Products</CollapsibleTrigger>
//   <CollapsibleContent>
//   <div className="dashboard  px-3">
//                <Link href="/dashboard/products/new" className={pathname == "/dashboard/products/new"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/>Add Products</Link>
//                <Link href="/dashboard/products" className={pathname == "/dashboard/products"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> Products List</Link>
//                </div>
//   </CollapsibleContent>
// </Collapsible>
// <Collapsible>
//   <CollapsibleTrigger>Products</CollapsibleTrigger>
//   <CollapsibleContent>
//   <div className="dashboard  px-3">
//                <Link href="/dashboard/products/new" className={pathname == "/dashboard/products/new"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/>Add Products</Link>
//                <Link href="/dashboard/products" className={pathname == "/dashboard/products"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> Products List</Link>
//                </div>
//   </CollapsibleContent>
// </Collapsible>
// <Collapsible>
//   <CollapsibleTrigger>Products</CollapsibleTrigger>
//   <CollapsibleContent>
//   <div className="dashboard  px-3">
//                <Link href="/dashboard/products/new" className={pathname == "/dashboard/products/new"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/>Add Products</Link>
//                <Link href="/dashboard/products" className={pathname == "/dashboard/products"?" bg-[#373f50] p-2 rounded-lg text-blue-600    inline-flex gap-3":"inline-flex gap-3"} > <LayoutDashboard/> Products List</Link>
//                </div>
//   </CollapsibleContent>
// </Collapsible>
               

              
              
// </div>          

//     </div> */}
//     </div>
    
  )
}
