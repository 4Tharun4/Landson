import React from 'react'

const UsersList = ({data}) => {
  return (
<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-max ">
    
    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    ROLE
                </th>
                <th scope="col" class="px-6 py-3">
                    USERID
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((items,i)=>{
                    return(
                        <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
                            <div class="ps-3">
                                <div class="text-base font-semibold">{items.Name}</div>
                                <div class="font-normal text-gray-500">{items.Email}</div>
                            </div>  
                        </th>
                        <td class="px-6 py-4">
                            {items.role}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {items.UserId}
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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
