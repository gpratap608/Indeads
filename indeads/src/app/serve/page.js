'use client'
import styles from "../page.module.css"

export default function service(){

    return (
        
        <main className={styles.main}>
            <div className={styles.orangeline}></div>
            <div className={styles.fullscreen}>
                <h3 className={styles.normalHeading}> Our  Service  </h3>
                <div className={styles.fullscreencontainer}>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Content Creation </b> </h4>
                        <p> We create a personalized content for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Video Creation </b> </h4>
                        <p> We create a personalized content for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Advertising </b> </h4>
                        <p> We create a personalized Ads for you </p>
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Listing </b> </h4>
                        <p> We look after google listing for you </p>
                    </div>
                </div>
            </div>

        </main> 
    )

}