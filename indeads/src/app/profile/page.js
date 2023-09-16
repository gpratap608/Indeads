'use client'



import styles from "../page.module.css"
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState,useEffect } from "react"



export default  function  Userinfo(){

    const router = useRouter()
    const [data,setData] = useState("")
    const [email,setEmail] = useState("")
    async function logout() {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
            router.push("/login")
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data)
        setData(res.data.data.userName)
        setEmail(res.data.data.email)
    }
    
    return( 
    <main className={styles.main}>
        <div className={styles.signupsetup}>
        <div className={styles.orangeline}></div>
        <div className={styles.contactForm}>
            <h1 className={styles.normalHeading}> Dashboard </h1>
            <p className={styles.signupPageInput}> {data} </p> 
            <p className={styles.signupPageInput}> {email}  </p> 
            <button onClick={logout} className={styles.signupButton}> LogOUT </button>
            <button onClick={getUserDetails} className={styles.signupButton}> Get Detailes </button>
        </div>
        </div>
    </main>
    )
}