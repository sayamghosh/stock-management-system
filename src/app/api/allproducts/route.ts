import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const foundProducts = await Product.find();
    return NextResponse.json(foundProducts);
  } catch (error) {
    return NextResponse.json({ message: "Error occured in database" });
  }
}
