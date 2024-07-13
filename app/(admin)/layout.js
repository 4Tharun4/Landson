'use client'
import Navbar from "@/components/adminpages/Navbar";
import Slidebar, { SlidebarItem } from "@/components/adminpages/Slidebar";
import { useState } from "react";
import "../globals.css";
import { BaggageClaim, BookOpen, Box, ClipboardList, Home , LayoutDashboard, Settings, User } from "lucide-react";
import Wherehouse from '@/Assets/warehouse.png'
import Image from "next/image";
export default function RootLayout({ children }) {
  const [show,isshow]=useState(false);
  console.log(show);
    return (
      <>
      <div className=" flex  font-Text">
      
        <Slidebar show={show} isshow={isshow}>
        <SlidebarItem icon={<LayoutDashboard size={30}/>} text="Dashboard"  link="/dashboard"/>
        <SlidebarItem icon={<BaggageClaim  size={30}/>} text="Products"  link="/dashboard/products"/>
        <SlidebarItem icon={<User  size={30}/>} text="Customers"  link="/dashboard/dealer"/>
        <SlidebarItem icon={<ClipboardList size={30}/>} text="Orders"  link="/dashboard/orders"/>
        <SlidebarItem icon={<Box size={30}/>} text="Categories"  link="/dashboard/categories"/>
        <SlidebarItem icon={<Settings size={30}/>} text="Account"  link="/dashboard/accountsettings"/>
        <SlidebarItem icon={<Home size={30}/>} text="WhereHouse"  link="/dashboard/wherehouse"/>
        <SlidebarItem icon={<BookOpen size={30}/>} text="Blogs"  link="/dashboard/blogs"/>
        </Slidebar>
        
         <div className={
          show?"w-full ":"w-full  "
         }>
        <Navbar show={show} isshow={isshow}/>
       
        <main className=" mt-14   ml-56 flex  px-3 py-4 mobile:ml-0  min-h-screen  bg-green-200 " >{children }</main>
        </div>
        </div>


</>
     
    );
  }