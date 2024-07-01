import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client

export async function POST(request) {
    try {
        const { DealerName, DealerNumber, DealerEmail, DealerAddress,DealerId } = await request.json();
        
        const createdDealer = await db.DealersData.create({
            data: {
                DealerName,
                DealerNumber,
                DealerEmail,
                DealerAddress,
                DealerId
                
            }
        });
console.log(createdDealer);
        return NextResponse.json(createdDealer);
    
    } catch (error) {
        console.error("Error creating dealer:", error);
        return NextResponse.json({
            message: "Failed to create Dealer",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}

export async function GET(request){
    try {
        const Dealers = await db.DealersData.findMany();
        return NextResponse.json(Dealers)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Featch Dealers",
            error
        },{status:500})
    }
}