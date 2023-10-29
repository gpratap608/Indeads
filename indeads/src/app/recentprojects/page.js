'use client'
import styles from "../page.module.css"
import Image from "next/image"
import Corouselindi from "@/components/indicorousel"
import { useRouter } from "next/navigation"

export default function recentProjects() {
    const router = useRouter()
    return (
        <main className={styles.main}>
        <div className={styles.orangeline}></div>

        <h3 className={styles.normalHeading}> Our Projects </h3>
        <div className={styles.flexContainerimg}>
              <div className={styles.flexconstentimg}>
              <Image
                src='/group.png'
                height='300'
                width='180'
                alt='Image'
            />
            <Image
                src='/group.png'
                height='300'
                width='180'
                alt='Image'
            />
            <Image
                src='/group.png'
                height='300'
                width='180'
                alt='Image'
            />
            <Image
                src='/group.png'
                height='300'
                width='180'
                alt='Image'
            />
             
              </div>
        </div>

        <div className={styles.stickcontainer}>
            <Image
                src='/group.png'
                height='300'
                width='180'
                alt='Image'
            />
            <div className={styles.openpara}>
                <h4> Get personalized post advertisement </h4>
                <button onClick={()=>router.push("/contact")} className={styles.roundbutton} > <b>Contact Us</b> </button>
            </div>
        </div>

        </main>
    )
}