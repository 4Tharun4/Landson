import Image from 'next/image'
import React from 'react'

const UsersList = ({data}) => {
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-max ">
    
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    ProductName
                </th>
                <th scope="col" className="px-6 py-3">
                    ProductSUK
                </th>
                <th scope="col" className="px-6 py-3">
                   ProductType
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((items,i)=>{
                    return(
                        <tr key={i} className="bg-green-300 border-b text-center  ">
               
                        
                        <td className="px-6 py-4">
                           <Image className="text-base font-semibold rounded-full w-10 h-10" src={items.imageUrl} width={30} height={30} alt="Jese image"/>
                        </td>
                           
                        <td className="px-6 py-4">
                                <div className="text-base font-semibold">{items.ProductName}</div>
                                
                            </td>  
                        
                        <td className="px-6 py-4">
                        {items.ProductStock}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                               
{items.ProductType}

                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href={`/dashboard/products/update/${items.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Product</a>
                        </td>
                    </tr>
                    )
                })
            }
        
            
        </tbody>
    </table>
</div>

  )
}

export default UsersList
