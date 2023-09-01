import styles from "../page.module.css"

export default function Business(){
    return(
        <main className={styles.contact}>
            <center>
    <div >
    <h2 >Contact Us</h2>
    
        <form className={styles.contactform}>
        
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required/>
            

            <label for="message">Message:</label>
            <textarea id="message" name="message" ></textarea>
            <br/>

            <button type="submit">Submit</button>
        </form>
    </div>

    </center>

        </main>
    )
}