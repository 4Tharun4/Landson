'use client'

import { useState } from "react";
import "../globals.css";
import DealerNav from "./components/DealerNav";
export default function RootLayout({ children }) {
  const [show,isshow]=useState(true)
  console.log(show);
    return (
      <>
      <div className="  flex  font-Text">
        <DealerNav show={show} isshow={isshow}/>
        </div>
        <main className=" mt-14   flex  px-3 py-4   min-h-screen  bg-green-200 " >{children }</main>
        
       


</>
     
    );
  }