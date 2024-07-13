import CustumData from '@/components/adminpages/CustunData';
import Header from '@/components/adminpages/Header';
import React from 'react';
import db from '@/lib/db';

export default async function Dealer() {
  let users = [];

  try {
    users = await db.Users.findMany();
  } catch (error) {
    console.error("Error fetching users:", error);
    // Optionally, you can log this error to an external logging service
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <Header title="Customers" linkpage="/dashboard/customers/new" headtitle="Add Customer" />
        </div>
        <div className="table">
          <CustumData data={users} title="Users List"/>
        </div>
      </div>
    </>
  );
}
