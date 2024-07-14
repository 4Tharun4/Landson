"use client"
import CustumData from '@/components/adminpages/CustunData';
import Header from '@/components/adminpages/Header';
import { Skeleton } from '@/components/ui/skeleton';
import db from '@/lib/db';

import React, { useEffect, useState } from 'react';


export default function Dealer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/register/users');
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

  if (loading) {
    return <div>
      <Skeleton/>
      <p>LOading</p>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
        <Skeleton/>
      </div>
    </>
  );
}
