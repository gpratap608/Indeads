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
    <div></div>
    )
}