'use client'


import { signOut } from "next-auth/react"
import styles from "../app/page.module.css"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Userinfo(){
    const router = useRouter()
    const {data:session} = useSession()

    const handleClick = async () =>{
        await signOut()
        router.push("/login")
    }

    return(
    <main className={styles.signup}>
            <h1 className={styles.signupHead}> Dashboard </h1>
            <p className={styles.signupPageInput}> {session?.user?.name} </p> 
            <p className={styles.signupPageInput}> {session?.user?.email} </p> 
            <button onClick={handleClick} className={styles.signupButton}> LogOUT </button>

    </main>
    )
}