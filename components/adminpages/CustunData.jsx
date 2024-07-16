"use client";
import { Eye } from 'lucide-react';
import Link from 'next/link';
import React,{ useState } from 'react'
import Alert from './Alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import nodatasvg from '@/Assets/nodatasvg.svg'
import Image from 'next/image';


export default function CustumData({title,data}) {
    const PAGE_SIZE = 10;
  const [currentpage, setcuttentpage] = useState(1);
  const startindex = (currentpage - 1) * PAGE_SIZE;
  const endindex = startindex + PAGE_SIZE;
  const currentdisplaydata = data.slice(startindex, endindex);
  const numberofpages = Math.ceil(data.length / PAGE_SIZE);
  const pagestart = startindex + 1;
  const pageend = startindex + PAGE_SIZE;
  const datasize = data.length;
  
  const roleColors = {
    ADMIN: 'bg-[#8B0000] text-[#FFFFFF] rounded-lg px-2 py-1',
    USER: ' text-[#00008B] bg-[#ADD8E6] rounded-lg px-2 py-1',
    DEALER: 'text-[#006400] bg-[#90EE90] rounded-lg px-2 py-1',
    WHEREHOUSE: 'text-[#FFF] bg-blue-400 rounded-lg px-2 py-1',//text-white bg-orange
  };
  
  const handledelete=()=>{
    alert("Delete Scussfully")
  }

  return (
    <div className=''>
        <h2 className='text-xl font-bold mb-4'>{title} </h2>
        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
       
        <thead className="text-xs z-[-10]   uppercase bg-green-800 text-white ">
          <tr>
            {/* <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 :focus:ring-blue-600 :ring-offset-gray-800 :focus:ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600"
                />

                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
            {/* <th scope="col" className="px-6 py-3">
              id
            </th> */}
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {
            datasize === 0?(
              <tr>
                <td colSpan="5" className="px-6 py-4">
                  <Image src={nodatasvg} width={500} height={500} alt='nodatasvg'/>
                </td>
              </tr>
            ):   currentdisplaydata.map((items, i) => {
              const roleClass = roleColors[items.role] || 'bg-gray-100 text-gray-800';
              return (
                
                <>
                  <tr
                    key={i}
                    className={` bg-white border-b  hover:bg-gray-50 `}
                  >
                    
                    
                    <td className="px-6 py-4 ">{items.Name}</td>
                    <td className="px-6 py-4">{items.Email}</td>
                    <td className="">
                      <p className={` ${roleClass}  `}>{items.role}</p>
                    </td>
                    
                    <td className="px-6 py-4">{items.UserId || 'N/A'}</td>
                    
                    <td className="px-6 py-4 flex items-center justify-center gap-4">
                      <Link
                        href={`/dashboard/customers/update/${items.id}`}
                        className="font-medium text-green-600  hover:underline"
                      >
                        <Eye/>
                      </Link>
                      <div className=" bg-red-600 text-white rounded-lg px-4 py-2">
                      <AlertDialog>
    <AlertDialogTrigger>Delete</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handledelete}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          
       
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-white  mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-white ">
            {pagestart}-{pageend}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white ">
            {datasize}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => setcuttentpage(currentpage - 1)}
              disabled={currentpage == 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white"
            >
              Previous
            </button>
          </li>

          {Array.from({ length: numberofpages }, (_, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => setcuttentpage(index + 1)}
                  disabled={currentpage == index + 1}
                  className={
                    currentpage == index + 1
                      ? "flex items-center justify-center px-3 h-8 leading-tight  bg-green-500 text-white border border-gray-300  :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white"
                  }
                >
                  {" "}
                  {index + 1}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick={() => setcuttentpage(currentpage + 1)}
              disabled={currentpage == numberofpages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 :bg-gray-800 :border-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      
    </div>
      
    </div>
  )
}
