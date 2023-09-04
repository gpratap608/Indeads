"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../app/page.module.css"


export default function RegisterForm() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword]  = useState("")
  const [confirmpass,setConfirmpass]  = useState("")
  const [error,setError] = useState("")
  
  const router = useRouter()

  const handleSubmit  = async (e)=>{
      e.preventDefault()

      if (!name || !email || !password || !confirmpass){
          setError("All fields are Required")
          return;
      }else if(password !== confirmpass){
          setError("Password Not Matched")
          return;
      }

      try {
          const resUserExists = await fetch('api/userExists',{
              method:'POST',
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify({ email })
          })

          const { user } =await resUserExists.json()

          if(user){
              setError("This User Exists")
              const form = e.target
              form.reset()
              return;
          }

          const res = await fetch('api/signup',{
              method:'POST',
              headers:{
                  "Content-Type":"application/json"    
              },
              body: JSON.stringify({
                  name,
                  email,
                  password
              })
          })
          if( res.ok){
              const form = e.target
              form.reset()
              router.push("/") 
              

          }else{
              console.log("Sign Up failed")
          } 
      } catch (error) {
          console.log("Error During Sign UP: ",error)
      }

  }

  return(
      <main className={styles.signup}>
          <form onSubmit={handleSubmit} className={styles.signupForm}>
          <h1 className={styles.signupHead}> SignUp </h1>
          <input onChange={(e)=> setName(e.target.value)} className={styles.signupPageInput} type="text"  placeholder="Username" required></input>
          <input onChange={(e)=> setEmail(e.target.value)} className={styles.signupPageInput} type="email"  placeholder="Email" required></input>
          <input onChange={(e)=> setPassword(e.target.value)} className={styles.signupPageInput} type="password"  placeholder="Password"required></input>
          <input onChange={(e)=> setConfirmpass(e.target.value)} className={styles.signupPageInput} type="password"  placeholder="Confirm password" required></input>
          <button className={styles.signupButton} type="submit" >SignUp</button>
          {error && (
              <p className={styles.signupPageError}>
                  {error}
              </p>
        )}<p> Already have an account <Link href="/login"> LOGIN </Link> </p>
          </form>
          

      </main>
  )
}
