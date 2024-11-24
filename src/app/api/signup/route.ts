import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Product from "@/models/productModel";
import { NextRequest,NextResponse } from "next/server";

connectDB();
export async function POST(request: NextRequest) {
  try {
    
    const reqBody= await request.json()
    const {username,email,password}=reqBody;
    //validation
    console.log(reqBody);
    const user = await User.findOne({email});
    if(user){
      return NextResponse.json({error:"User already exists"},{status:400});
    }

    const newUser = new User({
        username,
        email,
        password
    })
    const newProduct = new Product({
        name:"Product 1",
        productId:"1",
        price:100,
        quantity:10
    })

    const savedProduct = await newProduct.save();
    const savedUser=await newUser.save();
    const {password:pass,...rest}=savedUser.toObject();
    console.log(rest);

    return NextResponse.json({message:"User created successfully",success:true,savedUser});

  } catch (error:any) {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
    
  }
}