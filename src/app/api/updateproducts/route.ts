import mongoose from "mongoose";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {productId,name,price,quantity} = reqBody;
        if(productId){
            const product = await Product.findOne({productId});
            if(!product){
                return NextResponse.json({message:"Product not found"},{status:404});
            }
        }
        const updatedProduct = await Product.findOneAndUpdate({productId},{name,price,quantity},{new:true});
        return NextResponse.json({message:"Product updated successfully",updatedProduct},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:"Something happend while updating product"},{status:500});
    }
}