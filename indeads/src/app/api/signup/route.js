
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lib/mongodb"
import User from "../../../../model/user"
import bcrypt from "bcryptjs"

export async function POST(req){
    try {
        const { name,email,password } = await req.json()
        const hashedpassword = await bcrypt.hash(password,10)
        await connectMongoDB()
        await User.create({name,email,password:hashedpassword})

        return NextResponse.json({message:"User Registered"},{status:201})
    } catch (error) {
        return NextResponse.json(
        {message:"An error Occured"},
        {status:501}
        )
    }
}