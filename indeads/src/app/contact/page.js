'use client'
import styles from "../page.module.css"
import emailjs from "@emailjs/browser"
import { redirect, useRouter } from "next/navigation";
import React, { useRef,useState } from 'react';

export default function Business(){
    const form = useRef()
    const router = useRouter()
    const [message, setMessage] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_apbecn9', 'template_lmyqvvc', form.current, 'CA2JRFh4xGvJDsv9T')
          .then((result) => {
              console.log(result.text)
              router.push("/")
              setMessage("We got Your Message! Thankyou😊 ")
              alert("Message Sent")
          }, (error) => {
              console.log(error.text);
              setMessage("Something Went wrong!")
              alert("Something went wrong")
          });
      };

    return(
        <main className={styles.main}>
            <div className={styles.contactBox}>
            <div className={styles.orangeline}></div>    
            <h2 className={styles.normalHeading}> Contact Us </h2>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        
                <input  type="text" name="user_name" placeholder="Name" className={styles.contactInput}></input>
                
                <input  type="text" name="user_email" placeholder="Email"className={styles.contactInput}></input>
    
                <input type="text"  name="subject" placeholder="Subject"className={styles.contactInput}></input>
            
                <textarea type="text" name="message" placeholder="Your message"className={styles.contactText}></textarea>
                
                <input type="submit" className={styles.contactBtn} value="Send" />
                
                <h1 className={styles.text}> {message} </h1>
            </form>
            <div className={styles.addressContainer}>
                <h1 className={styles.text}>Our Workplace</h1> 
                <p className={styles.text}> Office of INDIBUS</p>
                <p className={styles.text}> 1st Floor, B-Block, Incubation Cell, ABES Institute of technology, Ghaziabad, Uttar Pradesh, 201009</p>
            </div>
            </div>
            


        </main>
    )
}