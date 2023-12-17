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
        <div>
            

        </div>
    )
}
