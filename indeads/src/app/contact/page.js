'use client'
import styles from "../page.module.css"

export default function Business(){
    return(
        <main className={styles.main}>
            <div className={styles.contactBox}>
            <div className={styles.orangeline}></div>    
            <h2 className={styles.normalHeading}> Contact Us </h2>
            <form action='mailto:indiads.2023@gmail.com' method="post" encType="text/plain"className={styles.contactForm}>
        
                <input type="text" placeholder="Name" className={styles.contactInput}></input>
                
                <input type="text" placeholder="Email"className={styles.contactInput}></input>
    
                <input type="text" placeholder="Subject"className={styles.contactInput}></input>
            
                <textarea type="text" placeholder="Your message"className={styles.contactText}></textarea>
                
                <input type="submit" className={styles.contactBtn} value="Submit" />
            </form>

            </div>


        </main>
    )
}