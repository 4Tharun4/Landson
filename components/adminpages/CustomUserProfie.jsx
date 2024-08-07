import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Image from 'next/image'
import Logo from '@/Assets/profie.jpg'
import Link from 'next/link'

export default function CustomUserProfie() {
  return (
   
      <DropdownMenu>
  <DropdownMenuTrigger >
    <div className=" rounded-full outline-none ">
<Image src={Logo} width={60} height={60} className=' rounded-full w-10 h-10 outline-none hover:outline-none  ' alt='Logo'/>
    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel className=" text-xl ">Tharun 
       </DropdownMenuLabel>
       <p className='text-[10px] pl-3'>Admin</p>
    <DropdownMenuSeparator  className="bg-green-600  h-[2px]" />
    <DropdownMenuItem>
      <Link href="/dashboard/accountsettings">Profile</Link>  
    </DropdownMenuItem>
    <DropdownMenuItem>
      
      <Link href="/dashboard/orders">Orders</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/dashboard/accountsettings">Settings</Link></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

   
  )
}
