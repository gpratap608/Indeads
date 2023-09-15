'use client'

import React,{useState} from "react"
import styles from '../page.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Link } from "react-router-dom"
import { redirect,useRouter } from "next/navigation"
import {FcGoogle} from 'react-icons/fc'

export default function signinoption(){
    const session = useSession()
    const router = useRouter()

    if(session.status==='authenticated'){
        redirect("/googleprofile")
    }
    
    return (
    <main className={styles.main}>
        <div className={styles.signupsetup}>
        <div className={styles.orangeline}></div>
          <div className={styles.signin}>   
          <button className={styles.googlesignupButton} onClick={()=>signIn("google")} ><FcGoogle/>  Sign In With Google</button>
          <p> OR </p>
          <button className={styles.signupButton} onClick={()=>router.push("/signup")} >SignUp with Credentials</button>
          </div>  
        </div>
    </main>
    )
}