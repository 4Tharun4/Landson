"use client"
import CustumData from '@/components/adminpages/CustunData';
import Header from '@/components/adminpages/Header';
import UsersList from '@/components/Tables/UsersList';
import { Skeleton } from '@/components/ui/skeleton';
import db from '@/lib/db';
import Image from 'next/image';
import NodataImage from '@/Assets/nodatasvg.svg'
import React, { useEffect, useState } from 'react';

export default function Products() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/productupload');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
console.log(users);
  if (loading) {
    return (
      <div>
        <Skeleton />
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4 mobile:gap-16 w-full">
        <div className="">
          <Header title="Customers" linkpage="/dashboard/products/new" headtitle="Add Product" />
        </div>
        <div className="">
        {Array.isArray(users) && users.length > 0 ? (
            <UsersList data={users} />
              // <div key={user.id}>
              //   {/* <img alt='user-image' src={user.imageUrl} /> */}<Image src={user.imageUrl} width={100} height={100} alt='User image'/>
              //   <p>{user.id}</p>
              // </div>
            
          ) : (
            <Image src={NodataImage} alt='Nodata found' width={1000} height={1000}/>
          )}
        </div>
      </div>
    </>
  );
}
