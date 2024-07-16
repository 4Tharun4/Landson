import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request){
    try {
        const {Category,ProductModel,ProductName, ProductPriceDealer,
            ProductPriceUser,
            ProductStock,
            ProductType,
            Productslug,
            imageUrl} = await request.json();

        const Product = await db.Products.create({
            data:{
                Category,ProductModel,ProductName, ProductPriceDealer,
            ProductPriceUser,
            ProductStock,
            ProductType,
            Productslug,
            imageUrl
            }
          })
        
        return NextResponse.json(Product)

    
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
      const Products = await db.Products.findMany();
      return NextResponse.json(Products)
  } catch (error) {
      console.log(error);
      return NextResponse.json({
          message:"Failed To Featch Dealers",
          error
      },{status:500})
  }
}