import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client

export async function POST(request) {
    try {
        const { Name, Email, Password, PhoneNumber,Address } = await request.json();
      

        
        const Users = await db.UsersData.create({
            data: {
                Name,
                Email,
                Password,
                PhoneNumber,
                Address
                
            }
        });
console.log(Users);
        return NextResponse.json(Users);
    
    } catch (error) {
        console.error("Error creating dealer:", error);
        return NextResponse.json({
            message: "Failed to create Dealer",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}
