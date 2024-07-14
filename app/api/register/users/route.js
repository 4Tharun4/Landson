import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client
import bcrypt from 'bcryptjs';
import { WHEREHOUSE,ADMIN,USER,DEALER } from "@/components/adminpages/generateuserid";
import { v4 as uuidv4 } from 'uuid';
import base64url from "base64url";

export async function POST(request) {
    try {
        const { Name, Email, Address, PhoneNumber, selectRole,Password } = await request.json();
        const passwordtohash = Password || "Landson@123";
        
         const password = await bcrypt.hash(passwordtohash, 10);

        // Check if a user with the same email already exists
        const existingUser = await db.Users.findUnique({
            where: { Email },
        });

        if (existingUser) {
            return NextResponse.json({
                message: "User with this email already exists",
            }, { status: 400 });
        }

        const rawtoken =  uuidv4()
      
        const token = base64url.encode(rawtoken)
        const userdata = {
            Name,
            Email,
            Password: password,
            role: [selectRole || 'USER'], // Ensure role is a single string
            Address,
            PhoneNumber,
            verficationtoken:token
           
        };

        if (selectRole === 'DEALER') {
            userdata.UserId = DEALER();
           
        } else if (selectRole === 'WHEREHOUSE') {
            userdata.UserId = WHEREHOUSE();
           
        }else if(selectRole === 'ADMIN'){
 userdata.UserId = ADMIN();

        }else if(selectRole === 'USER'){
            userdata.UserId = USER();
           
                   }

        const user = await db.Users.create({
            data: userdata
        });

       
        return NextResponse.json(user);
    
    } catch (error) {
        console.error("Error creating User:", error);
        return NextResponse.json({
            message: "Failed to create User",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const users = await db.Users.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch Users",
            error
        }, { status: 500 });
    }
}
