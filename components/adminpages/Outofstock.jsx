'use client'
import Link from 'next/link'
import React from 'react'

export default function Outofstock() {
    const products = [
        {
            Product: "Tiller",
            Amount: 30000,
            Stock: "00"
        },
        {
            Product: "Tiller",
            Amount: 30000,
            Stock: "00"
        },
        {
            Product: "Tiller",
            Amount: 30000,
            Stock: "00"
        },
        {
            Product: "Tiller",
            Amount: 30000,
            Stock: "00"
        },
        {
            Product: "Tiller",
            Amount: 30000,
            Stock: "00"
        },
    ]

    return (
        <div className='w-full bg-white shadow-lg mobile:mt-10 rounded-lg'>
            <div className="w-[100%] h-[400px]">
                <div className="header w-full p-5 flex justify-between">
                    <div className="title">
                        <h1>Out Of Stock Products</h1>
                    </div>
                    <div className="All-orders bg-transparent">
                        <Link href="/dashboard" className='text-blue-500 rounded-md border-2 border-blue-300 p-1'>All Products</Link>
                    </div>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-center bg-gray-300 rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
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
                                        <td className="px-6 py-4">
                                            {items.Product}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className='text-red-400'>{items.Stock}</p>
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
    )
}
