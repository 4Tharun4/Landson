import { NextResponse } from "next/server";
import db from "@/lib/db"; // Assuming this correctly imports your Prisma client

export async function POST(request) {
    try {
        const { DealerName, DealerNumber, DealerEmail, DealerAddress } = await request.json();

        const createdDealer = await db.DealersData.create({
            data: {
                DealerName,
                DealerNumber,
                DealerEmail,
                DealerAddress
            }
        });

        return NextResponse.json(createdDealer);
    
    } catch (error) {
        console.error("Error creating dealer:", error);
        return NextResponse.json({
            message: "Failed to create Dealer",
            error: error.message || "Unknown error"
        }, { status: 500 });
    }
}
