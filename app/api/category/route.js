import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request){
    try {
        const {Name,imageUrl,Description,slug} = await request.json();

        const Categories = await db.Category.create({
            data:{
                Name,imageUrl,Description,slug
            }
          })
        
        return NextResponse.json(Categories)

    
    } catch (error) {
        console.log(error);
      return  NextResponse.json(
        {
            message:"Failed to crate Product",
            error
        },{status:500}
      )
    }
}   

export async function GET(request){
  try {
      const Categories = await db.Category.findMany();
      return NextResponse.json(Categories)
  } catch (error) {
      console.log(error);
      return NextResponse.json({
          message:"Failed To Featch Dealers",
          error
      },{status:500})
  }
}