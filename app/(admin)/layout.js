'use client'
import Navbar from "@/components/adminpages/Navbar";
import Slidebar, { SlidebarItem } from "@/components/adminpages/Slidebar";
import { useState } from "react";
import "../globals.css";
import { BaggageClaim, Box, ClipboardList, LayoutDashboard, Settings } from "lucide-react";
export default function RootLayout({ children }) {
  const [show,isshow]=useState(true)
  console.log(show);
    return (
      <>
      <div className=" flex  font-Text">
      
        <Slidebar show={show} isshow={isshow}>
        <SlidebarItem icon={<LayoutDashboard size={30}/>} text="Dashboard" active link="/dashboard"/>
        <SlidebarItem icon={<BaggageClaim  size={30}/>} text="Products"  link="/dashboard/products"/>
        <SlidebarItem icon={<ClipboardList size={30}/>} text="Orders"  link="/dashboard/orders"/>
        <SlidebarItem icon={<Box size={30}/>} text="Categories"  link="/dashboard/categories"/>
        <SlidebarItem icon={<Settings size={30}/>} text="Account"  link="/dashboard/products"/>
        </Slidebar>
        
         <div className={
          show?"w-full ":"w-full  ml-56"
         }>
        <Navbar show={show} isshow={isshow}/>
       
        <main className=" mt-14   ml-56 flex  px-3 py-4 mobile:ml-0  min-h-screen  bg-green-200 " >{children }</main>
        </div>
        </div>


</>
     
    );
  }