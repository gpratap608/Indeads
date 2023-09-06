"use client"

import React,{ useState } from "react"
import styles from "../app/page.module.css"
import Link from "next/link"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"


export default function Loginpage(){


    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await signIn('credentials',{
                email,
                password,
                redirect:false
            }) 

            if(res.error){
                setError("Invalid Email or Password")
                return;
            }

            router.replace("dashboard") 
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <main className={styles.signup}>
            <form onSubmit={handleSubmit} className={styles.signupForm}>
            <h1 className={styles.signupHead}> LogIN </h1>
        
            <input onChange={(e)=>setEmail(e.target.value)} className={styles.signupPageInput} type="email"  placeholder="Email" required></input>
            <input onChange={(e)=>setPassword(e.target.value)} className={styles.signupPageInput} type="password"  placeholder="Password"required></input>
        
            <button className={styles.signupButton} type="submit" >LogIN</button>
            {error && 
                 <p className={styles.signupPageError}> {error} </p>

            }
            <p> Create an account <Link href="/signup"> SignUP </Link> </p>
            </form>
        </main>
    )
}