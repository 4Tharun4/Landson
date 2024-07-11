'use client'
import Navbar from "@/components/adminpages/Navbar";
import Slidebar from "@/components/adminpages/Slidebar";
import { useState } from "react";
import "../globals.css";
export default function RootLayout({ children }) {
  const [show,isshow]=useState(true)
  console.log(show);
    return (
      <>
      <div className=" flex  font-Text">
        <Slidebar show={show} isshow={isshow}/>
        
         <div className={
          show?"w-full ":"w-full ml-64"
         }>
        <Navbar show={show} isshow={isshow}/>
       
        <main className=" mt-14   flex  px-3 py-4 mobile:ml-0  min-h-screen  bg-green-200 " >{children }</main>
        </div>
        </div>


</>
     
    );
  }