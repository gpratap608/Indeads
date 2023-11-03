'use client'
import styles from "../page.module.css"
import emailjs from "@emailjs/browser"
import { redirect, useRouter } from "next/navigation";
import React, { useRef,useState } from 'react';

export default function Business(){
    const form = useRef()
    const router = useRouter()


    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_apbecn9', 'template_lmyqvvc', form.current, 'CA2JRFh4xGvJDsv9T')
          .then((result) => {
              console.log(result.text);
              alert(`Thank You for Application.`)
              router.push("/")
          }, (error) => {
              console.log(error.text);
              alert(`Something Went Wrong try again`)
          });
      };

    return(
        <main className={styles.main}>
            <div className={styles.contactBox}>
            <div className={styles.orangeline}></div>    
            <h2 className={styles.normalHeading}> Apply Here!!! </h2>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        
                <input  type="text" name="user_name" placeholder="Name" className={styles.contactInput}></input>
                
                <input  type="text" name="user_email" placeholder="Email"className={styles.contactInput}></input>
                <input  type="number" name="user_number" placeholder="Phone Number"className={styles.contactInput}></input>
    
                <input type="text"  name="subject" placeholder="Applying for?"className={styles.contactInput}></input>
            
                <textarea type="text" name="message" placeholder="Your Description!"className={styles.contactText}></textarea>
                
                <input type="submit" className={styles.contactBtn} value="Apply now" />
            </form>

            </div>


        </main>
    )
}
