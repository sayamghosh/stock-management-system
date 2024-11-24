import mongoose from "mongoose";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { productId, price, quantity} = reqBody;
        if (productId) {
            const foundProduct = await Product.findOne({ productId });

        }
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}