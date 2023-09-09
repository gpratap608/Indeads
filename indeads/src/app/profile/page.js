'use client'



import styles from "../page.module.css"
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function Userinfo(){

    const router = useRouter()
    const [data,setData] = useState("")
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
    }
    return(
    <main className={styles.signup}>
            <h1 className={styles.signupHead}> Dashboard </h1>
            <p className={styles.signupPageInput}> {data === 'nothing'? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>} </p> 
            <p className={styles.signupPageInput}>  </p> 
            <button onClick={getUserDetails}  className={styles.signupButton}> Get Info </button>
            <button onClick={logout} className={styles.signupButton}> LogOUT </button>

    </main>
    )
}