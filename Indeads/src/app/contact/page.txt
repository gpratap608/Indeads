// 'use client'
// import styles from "../page.module.css"
// import emailjs from "@emailjs/browser"
// import { redirect, useRouter } from "next/navigation";
// import React, { useRef,useState } from 'react';

// export default function Business(){
//     const form = useRef()
//     const router = useRouter()
//     const [message, setMessage] = useState("")


//     const sendEmail = (e) => {
//         e.preventDefault();
        
//         emailjs.sendForm('service_apbecn9', 'template_lmyqvvc', form.current, 'CA2JRFh4xGvJDsv9T')
//           .then((result) => {
//               console.log(result.text)
//               router.push("/")
//               setMessage("We got Your Message! Thankyou😊 ")
//               alert("Message Sent")
//           }, (error) => {
//               console.log(error.text);
//               setMessage("Something Went wrong!")
//               alert("Something went wrong")
//           });
//       };

//     return(
//         <div>
            
//         </div>
//     )
// }