import mongoose from "mongoose";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const {productId,price,quantity}= await request.json();
        console.log(productId);
        if(!productId || (!price && !quantity)){
            return NextResponse.json({error:"Please give valid productId and (price || quantity) "},{status:500});
        }
        const updatedata:any={};
        if(price){
            updatedata.$set={price};
        }
        if(quantity){
            updatedata.$inc={quantity};
        }
        if(Object.keys(updatedata).length === 0){
            return NextResponse.json({error:"Please give valid price or quantity to update"},{status:500});
        }
        const updatedProduct = await Product.findOneAndUpdate({productId},updatedata,{ new: true, runValidators: true });
        return NextResponse.json({message:"Product updated successfully",updatedProduct},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:"Something happend while updating product"},{status:500});
    }
}