import styles from "../page.module.css"

export default function Business(){
    return(
        <main className={styles.main}>
            <div className={styles.contactBox}>
            <h1 className={styles.contact}> Contact </h1>
            <form className={styles.contactForm}>
                <input type="text" placeholder="your Name" className={styles.contactInput}></input>
                <input type="text" placeholder="your Email"className={styles.contactInput}></input>
                <input type="text" placeholder="Subject"className={styles.contactInput}></input>
                <textarea type="text" placeholder="Your message"className={styles.contactText}></textarea>
                <button type="button" className={styles.contactBtn}>Send message</button>
            </form>

            </div>


        </main>
    )
}