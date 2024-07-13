import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client
import bcrypt from 'bcryptjs';

// POST: Register a new user
export async function POST(request) {
    try {
        const { Name, Email, Password, PhoneNumber, Address } = await request.json();
      
        // Check if the user already exists
        const existingUser = await db.UsersData.findUnique({
            where: { Email }
        });
        
        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: "User Already Exists"
            }, { status: 409 });
        }

        // Encrypt the password
        const hashpassword = await bcrypt.hash(Password, 10);

        // Create the new user in the database
        const user = await db.UsersData.create({
            data: {
                Name,
                Email,
                Password: hashpassword,
                PhoneNumber,
                Address
            }
        });

        console.log(user);

        return NextResponse.json({
            data: user,
            message: "Successfully Registered"
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            data: null,
            message: "Failed to create user",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}

// GET: Fetch all users
export async function GET(request) {
    try {
        const users = await db.UsersData.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({
            message: "Failed to fetch users",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}
