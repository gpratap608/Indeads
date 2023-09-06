'use client'


import { signOut } from "next-auth/react"
import styles from "../app/page.module.css"
import { useSession } from "next-auth/react"


export default function Userinfo(){

    const {data:session} = useSession()
    return(
    <main className={styles.signup}>
            <h1 className={styles.signupHead}> Dashboard </h1>
            <p className={styles.signupPageInput}> {session?.user?.name} </p> 
            <p className={styles.signupPageInput}> {session?.user?.email} </p> 
            <button onClick={()=>signOut()} className={styles.signupButton}> LogOUT </button>

    </main>
    )
}