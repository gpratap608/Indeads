'use client'

import React,{useState} from "react"
import styles from '../page.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Link } from "react-router-dom"
import { redirect,useRouter } from "next/navigation"


export default function signinoption(){
    const session = useSession()
    const router = useRouter()

    if(session.status==='authenticated'){
        redirect("/googleprofile")
    }
    
    return (
    <main className={styles.signup}>
          <button className={styles.signupButton} onClick={()=>signIn("google")} >Sign In With Google</button>
          <p> OR </p>
          <button className={styles.signupButton} onClick={()=>router.push("/signup")} >SignUp with Credentials</button>
    </main>
    )
}