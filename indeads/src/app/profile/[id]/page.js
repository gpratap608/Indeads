'use client'



import styles from "../../page.module.css"



export default function Userinfo(params){

    
    return(
    <main className={styles.signup}>
            <h1 className={styles.signupHead}> Dashboard </h1>
            <p className={styles.signupPageInput}> Profile  </p> 
            <p className={styles.signupPageInput}> {params.id} </p> 
            <button  className={styles.signupButton}> LogOUT </button>

    </main>
    )
}