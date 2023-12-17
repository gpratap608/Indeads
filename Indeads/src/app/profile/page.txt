// 'use client'



// import styles from "../page.module.css"
// import axios from "axios"
// import Link from "next/link"
// import {toast} from "react-hot-toast"
// import { useRouter } from "next/navigation"
// import { useState} from "react"



// export default  function  Userinfo(){

//     const router = useRouter()
//     const [data,setData] = useState("")
//     const [email,setEmail] = useState("")
//     async function logout() {
//         try {
//             await axios.get('/api/users/logout')
//             toast.success('Logout Successful')
//             router.push("/login")
//         } catch (error) {
//             console.log(error.message)
//             toast.error(error.message)
//         }
//     }
//     const getUserDetails = async () => {
//         const res = await axios.get("/api/users/me")
//         console.log(res.data)
//         setData(res.data.data.userName)
//         setEmail(res.data.data.email)
//     }
    
//     return( 
//     <div>
       
//     </div>
//     )
// }