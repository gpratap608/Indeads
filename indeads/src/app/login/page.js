import styles from"../page.module.css"
import Link from "next/link"

export default function login(){
    return(
        <main className={styles.signup}>
             <form className={styles.signupForm}>
            <h1 className={styles.signupHead}> LogIN </h1>
        
            <input  className={styles.signupPageInput} type="email"  placeholder="Email" required></input>
            <input  className={styles.signupPageInput} type="password"  placeholder="Password"required></input>
        
            <button className={styles.signupButton} type="submit" >LogIN</button>
            <p> Create an account <Link href="/signup"> SignUP </Link> </p>
            </form>
        </main>
    )
}