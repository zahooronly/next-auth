import { connected } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connected();


export default async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        console.log(reqBody);
        
        const {name,email,password}=reqBody;
        // if(!name || !email || !password){
            const user=await User.findOne({email})
            if(user){
                return NextResponse.json({error:"User already exists"},{status: 400})
            }
            // hash password
            const salt=await bcryptjs.genSalt(10);
            const hashedPassword=await bcryptjs.hash(password,salt);

            // add new users
            const newUser=new User({
                name,
                email,
                password:hashedPassword
            })
            const savedUser=await newUser.save();
            console.log("SavedUser",savedUser);
            
            return NextResponse.json(
                {
                    message:"User created successfully",
                    user:savedUser
                },
                {status: 201}
                
            )
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500});
        
    }
}

