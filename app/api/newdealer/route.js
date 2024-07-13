import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client
import bcrypt from 'bcryptjs';
import generateRandomId from "@/components/adminpages/generateuserid";
import { WHEREHOUSE,ADMIN } from "@/components/adminpages/generateuserid";

export async function POST(request) {
    try {
        const { Name, Email, Address, PhoneNumber, selectRole } = await request.json();
        const password = "Landson@123";
        const hashPassword = await bcrypt.hash(password, 10);

        // Check if a user with the same email already exists
        const existingUser = await db.Users.findUnique({
            where: { Email },
        });

        if (existingUser) {
            return NextResponse.json({
                message: "User with this email already exists",
            }, { status: 400 });
        }

        const userdata = {
            Name,
            Email,
            Password: hashPassword,
            role: [selectRole], // Ensure role is a single string
            Address,
            PhoneNumber
        };

        if (selectRole === 'DEALER') {
            userdata.DealerId = generateRandomId();
           
        } else if (selectRole === 'WHEREHOUSE') {
            userdata.WhereHouseId = WHEREHOUSE();
           
        }else if(selectRole === 'ADMIN'){
 userdata.AdminId = ADMIN();

        }

        const user = await db.Users.create({
            data: userdata
        });

        console.log(user);
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
        const users = await db.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch Users",
            error
        }, { status: 500 });
    }
}
