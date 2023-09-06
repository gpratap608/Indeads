import RegisterForm from "@/components/RegisterForm"
import  redirect from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

const signup= async ()=>{
    const session = await getServerSession(authOptions)

    if (session) redirect("/dashboard")

    return (
        <RegisterForm/>
    ) 

    
}

export default signup