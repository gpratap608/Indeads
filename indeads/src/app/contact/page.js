'use client'
import Link from "next/link"
import styles from "../page.module.css"
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";



export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.contactcontainerBig}>

         

            <div className={styles.contactcontainer}>
                <h1>CONTACT US</h1>

                <div className={styles.contactcontent}>

                    <div className={styles.contactcontainerleft}>
                        <div className={styles.contactcontentleft}>
                            <div className={styles.contactcontentleft1}>
                                <p>Call us on : 123456789<br></br>
                                    Email us at: text@gmail.com</p>
                            </div>
                            <div className={styles.contactcontentleft2}>
                                <p>
                                    11 out of 10 ltd<br></br>
                                    ABES institute of technology, Ghaziabad<br></br> Up,201009
                                </p>

                            </div>


                        </div>
                        <div className={styles.contacticon}>

                            <FiInstagram />
                            <FiFacebook />
                            <FiTwitter />
                            <FiLinkedin />
                        </div>



                    </div>
                    <form>
                        <div className={styles.contactcontainerright}>
                            <div className={styles.contactcontainerrightinput1}>
                                <input type="text" placeholder="Name:" />
                                <input type="text" placeholder="Company:" />

                            </div>
                            <div className={styles.contactcontainerrightinput2}>
                                <input type="email" placeholder="Email:" />
                                <input type="text" placeholder="Contact no::" />
                            </div>
                            <div className={styles.contactcontainerrighttext}>
                                <textarea placeholder="Questions and comments..." name="description" rows="15" cols="56"></textarea>

                            </div>

                            <button type="submit">Send Me</button>

                        </div>
                    </form>


                </div>
            </div>
            </div>
        </main>
    )
}