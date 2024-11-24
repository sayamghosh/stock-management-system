import { NextRequest,NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";

connectDB();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {productId}=reqBody;
        if(productId){
            const foundProduct = await Product.findOne({productId});
            if(foundProduct){
                return NextResponse.json({message:"Product already exists",success:true,foundProduct});
            }else{
                return NextResponse.json({message:"Product not found",success:false});
            }
        }
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}