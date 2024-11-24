import { connectDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connectDB();
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Hello, World!" });
}