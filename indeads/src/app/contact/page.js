import styles from "../page.module.css"

export default function Business() {
    return (
        <main className={styles.main}>
            <div className={styles.contactContainer}>
                <div className={styles.contactTop}>
                    <h1 className={styles.contactIndibus}>InDiBus</h1>
                    <p className={styles.contactP}>Add a little bit of body text</p>
                    <p className={styles.contactBlue}></p>
                </div>

                <div className={styles.contactBox}>
                    <h1 className={styles.contact}> Contact Us</h1>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="your Name" className={styles.contactInput}></input>
                        <input type="text" placeholder="your Email" className={styles.contactInput}></input>
                        <input type="text" placeholder="Subject" className={styles.contactInput}></input>
                        <textarea type="text" placeholder="Your message" className={styles.contactText}></textarea>
                        <button type="submit" className={styles.contactBtn}>Submit</button>
                    </form>

                </div>
            </div>


        </main>
    )
}