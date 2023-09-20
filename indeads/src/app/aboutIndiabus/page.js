'use client'
import Image from "next/image"
import styles from"../page.module.css"

export default function aboutIndibus(){
    return(
        <main className={styles.main}>
            <div className={styles.orangeline}></div>
                <h3 className={styles.normalHeading}> About Us </h3>
                <div className={styles.fullscreencontainer}>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Vision </b> </h4>
                    
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h4><b> Mission </b> </h4>
                    </div>
                </div>
    
            <div>
                <h3 className={styles.normalHeading}> Our Team </h3>
                <div className={styles.teamcontainer}>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/indiads.png'
                            height='100'
                            width='100'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Name </b></h3>
                        <p> Designation </p>
                    </div>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/indiads.png'
                            height='100'
                            width='100'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Name </b></h3>
                        <p> Designation </p>
                    </div>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/indiads.png'
                            height='100'
                            width='100'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Name </b></h3>
                        <p> Designation </p>
                    </div>

                </div>
            </div>
        </main>
    )
}