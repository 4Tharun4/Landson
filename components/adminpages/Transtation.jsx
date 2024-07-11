"use client"
import Link from 'next/link'
import React from 'react'
import { CheckCheck } from 'lucide-react';

export default function Transtation() {
    const products = [
        {
            OrderID: 1,
            Product: "Tiller",
            Amount: 30000,
            Payment: "Success",
            UserType:"User"
        },
        {
            OrderID: 2,
            Product: "Tiller",
            Amount: 30000,
            Payment: "Success",
            UserType:"Dealer"
        },
        {
            OrderID: 3,
            Product: "Tiller",
            Amount: 30000,
            Payment: "Success",
            UserType:"User"
        },
        {
            OrderID: 4,
            Product: "Tiller",
            Amount: 30000,
            Payment: "Success",
            UserType:"Dealer"
        },
        {
            OrderID: 5,
            Product: "Tiller",
            Amount: 30000,
            Payment: "Success",
            UserType:"User"
        },
    ];

    return (
        <div className='w-full bg-white shadow-lg rounded-lg'>
            <div className="w-[100%] h-[400px]">
                <div className="header w-full p-5 flex justify-between">
                    <div className="title">
                        <h1>Recent Orders</h1>
                    </div>
                    <div className="All-orders bg-transparent">
                        <Link href="/dashboard" className='text-blue-500 rounded-md border-2 border-blue-300 p-1'>All Orders</Link>
                    </div>
                </div>

                <div className="relative overflow-x-auto ">
                    <table className="w-full text-sm text-center bg-gray-300 rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase  dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payment
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((items, i) => (
                                    <tr className="bg-white dark:bg-gray-800" key={i}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {items.OrderID}
                                        </th>
                                        <td className="px-6 py-4">
                                            {items.Product}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.UserType}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='bg-green-200 p-1 items-center inline-flex rounded-lg justify-center gap-2'>
                                                {items.Payment}
                                                <CheckCheck color='green' />
                                            </p>
                                        </td>
                                        <td className="px-6 py-4">
                                            ₹{items.Amount}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
