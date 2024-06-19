"use client"
import Link from 'next/link'
import React from 'react'

export default function Outofstock() {
    const products=[
        {
           
            Product:"Tiller",
            Amount:30000,
            Stock:"00"
        },
        {
            
            Product:"Tiller",
            Amount:30000,
            Stock:"00"
        },
        {
         
            Product:"Tiller",
            Amount:30000,
          Stock:"00"
        },
        {
            
            Product:"Tiller",
            Amount:30000,
          Stock:"00"
        },
        {
            
            Product:"Tiller",
            Amount:30000,
            Stock:"00"
        },

        
    ]

        

    
  return (
    <div className='w-full  bg-white shadow-lg rounded-lg'>
        <div className="w-[100%]  h-[400px] ">
        <div className="header w-full p-5   flex justify-between ">
       <div className="title">
        <h1>Out Of Stock Products</h1>
       </div>
       <div className="All-orders bg-transparent ">
    <Link href="/dashboard"  className='text-blue-500  rounded-md border-2 border-blue-300   p-1'>All Products</Link>
          
       </div>
        </div>
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left  bg-gray-300 rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
           
                {
                    products.map((items,i)=>{
                        return(
                            <>
                             <tr class="bg-white  dark:bg-gray-800" key={i}>
                            <td class="px-6 py-4">
                                    {items.Product}
                                </td><td class="px-6 py-4">
                                    {items.Stock}
                                </td><td class="px-6 py-4">
                                    ${items.Amount}
                                </td>
                                </tr>
                                </>

                        )

                    })
                }
                
          
            {/* <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr> */}
        </tbody>
    </table>
</div>

        </div>
        </div>
       
        
  
  )
}
