'use client'
import  Link  from "next/link"
import styles from "../page.module.css"

export default function service(){

    return (
        
        <main className={styles.main}>
            <div className={styles.orangeline}></div>
            <div className={styles.fullscreen}>
                <h3 className={styles.normalHeading}> Our  Service  </h3>
                <div className={styles.fullscreencontainer}>
                    <div className={styles.fullscreencontent}>
                        <h1><b> Content Creation </b> </h1>
                        <p> We create a personalized content for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> Video Creation </b> </h1>
                        <p> We create a personalized content for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> Advertising </b> </h1>
                        <p> We create a personalized Ads for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> Listing </b> </h1>
                        <p> We look after google listing for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> App Development </b> </h1>
                        <p> We make a customized App for your business </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> WebSite Development </b> </h1>
                        <p> We make a customized website for your business </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> Social Media Management </b> </h1>
                        <p> We manage your Social Media </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><b> SEM/SEO </b> </h1>
                        <p> Search Engine Monitoring</p>
                    </div>
                    <div className={styles.buttonServices}>
                        <Link className={styles.text} href='/contact'> To Avail Our Services Contact</Link>
                    </div>
                </div>
            </div>

        </main> 
    )

}