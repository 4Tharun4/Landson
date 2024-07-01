import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client
import bcrypt from 'bcryptjs'

export async function POST(request) {
    try {
        const { Name, Email, Password, PhoneNumber,Address } = await request.json();
      
//check the user exist

const existingUser = await db.UsersData.findUnique({
    where:{
        Email
    }
})
        
if(existingUser){
    return NextResponse.json({
        data:null,
        Message:"User Already Exists"
    },{status:409})
}
//Encrypt the Hash password
const hashpassword = await bcrypt.hash(Password,10);
        const Users = await db.UsersData.create({
            data: {
                Name,
                Email,
                Password:hashpassword,
                PhoneNumber,
                Address
                
            }
        });
console.log(Users);
        return NextResponse.json(Users);
    
    } catch (error) {
        console.error("Error creating User:", error);
        return NextResponse.json({
            message: "Failed to create User",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}

export async function GET(request){
    try {
        const Users = await db.UsersData.findMany();
        return NextResponse.json(Users)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Featch Users",
            error
        },{status:500})
    }
}