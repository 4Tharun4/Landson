import CustumData from '@/components/adminpages/CustunData'
import Header from '@/components/adminpages/Header'
import React from 'react'
import  db from '@/lib/db'



export default async function Dealer() {
const users = await db.Users.findMany();
  return (
    <>
   <div className=" flex flex-col">
    <div className="">
    <Header title="Customers" linkpage="/dashboard/customers/new" headtitle="Add Customer" />
    </div>
    <div className="table">
    <CustumData data={users} title="Users List"/>
    </div>
    </div>

    </>
  )
}

