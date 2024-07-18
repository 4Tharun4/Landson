import db from '@/lib/db'
import Image from 'next/image';
import React from 'react'

const Update = async ({ params }) => {
  // Fetch the single user data from the database
  const singleUser = await db.Users.findUnique({
    where: { id: params.id } // Assuming `params.id` is the user ID
  });
 

  // Return the component with user data
  return (
    <div>
      {params.id}
      <p>{singleUser?.Name}</p> {/* Use optional chaining in case user is not found */}
      <p>{singleUser?.PhoneNumber}</p> 
      <p>{singleUser?.role}</p> 
      <p>{singleUser?.UserId || 'N/A' }</p>
      <Image src={singleUser?.imageUrl} alt='User Image' width={1000} height={1000}/>
    </div>
  );
};

export default Update;
