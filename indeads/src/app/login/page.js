import styles from"../page.module.css"

export default function login(){
    return(
        <main className={styles.main}>

          
         
    <h1 className={styles.Typewriter}>  Login </h1>

    <form  className={styles.Typewriter}>
    </form>

 <input className={styles.Typewriter}type="text" placeholder="Username or Email address" required ></input> 
  
 <input className={styles.Typewriter} type="password" placeholder="Password" required/>
  <button className={styles.Typewriter} onclick="login()">Login</button>
  
  
  


    </main>
    )
}
