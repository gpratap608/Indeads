'use client'
import React,{useState,useEffect} from "react"
import { useSession,signIn,signOut } from "next-auth/react"
import { redirect,useRouter } from "next/navigation"
import styles from '../page.module.css'


export default function googleprofile(){
    const session = useSession()
    if(session.status === "unauthenticated"){
        redirect("/signinoptions")
    }
    const router = useRouter()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const handleClick = async ()=>{
        await signOut("google")
        router.push("/signinoptions")
    }
    useEffect(()=>{
        if(session.status='authenticated'){
            setName(session?.data?.user?.name)
            setEmail(session?.data?.user?.email)
        }else{
            router.push("/signinoptions")
        }
    },[])
    
    return(
        <main className={styles.main}>
            <div className={styles.signupsetup}>
            <div className={styles.orangeline}></div>
            <div className={styles.contactForm}>
            <h1 className={styles.normalHeading}> Profile </h1>
            <p className={styles.signupPageInput}> {name} </p> 
            <p className={styles.signupPageInput}> {email} </p> 
            <button onClick={handleClick} className={styles.signupButton}> LogOUT </button>
            </div>
            </div>
    </main>
    )
}