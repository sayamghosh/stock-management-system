import { NextRequest,NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";

connectDB();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {name,productId, price,quantity}=reqBody;
        if(productId){
            const foundProduct = await Product.findOne({productId});
            if(foundProduct){
                return NextResponse.json({message:"Product already exists",success:false,foundProduct});
            }else{
                const newProduct = new Product({
                    name,
                    productId,
                    price,
                    quantity
                })
                const savedProduct = await newProduct.save();
                return NextResponse.json({message:"Product created successfully",success:true,savedProduct});
            }    
        }else{
            return NextResponse.json({message:"Please provide a product id",success:false});
        }
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});   
    }
}