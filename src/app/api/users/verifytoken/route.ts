import { connected } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";



connected()


export async function POST(request:NextRequest){
    try {
        
    } catch (error:any) {
        return NextResponse.json(
            {
                error:error.message,
                status:500
            });
        
    }
}