'use client'
import styles from "../page.module.css"
import Image from "next/image"
import Link from "next/link"
import Corouselindi from "@/components/indicorousel"
import { useRouter } from "next/navigation"

export default function aboutIndiads() {
    const router = useRouter()
    return (
        <main className={styles.main}>
        <div className={styles.center}> <div className={styles.flexconstent}><h1 className='in'>In</h1><h1 className='di'>Di</h1><h1 className='bus'>Ads</h1></div></div>
        
        <div className={styles.pagecontentbackground}>


        <p>
            <b><i>InDiAds</i></b> is a creative content producing and advertising company that is part of INDIBUS. We specialize in
            creating digital posters, interactive videos, and advertising them to target customer segments.<br></br>
        </p>
        <p>
            Our team of experienced and creative professionals has a deep understanding of the digital marketing landscape.
            We use our knowledge and expertise to create content that is engaging, informative, and relevant
            to your target audience. We also work with influencers to create authentic and impactful marketing campaigns.
            And we use social media to reach your target audience with targeted and personalized messages.<br></br>
        </p>
        <p>
            We believe that every business has a unique story to tell. We help you tell your story in a way
            that will resonate with your target audience and achieve your marketing goals.
        </p>

        <h2>Our Services includes</h2>
                        <p>
                        
                        * Content creation: We create high-quality content that is engaging and informative.<br></br>
                        * Influencer marketing: We work with influencers to create authentic and impactful marketing campaigns.<br></br>
                        * Social media marketing: We use social media to reach your target audience with targeted and personalized messages.<br></br>
                        * Advertising: We place your ads in front of your target audience through a variety of channels, including search engine marketing, 
                            social media advertising, and display advertising.<br></br>
                            
                        
                        
                        We are committed to providing our clients with the best possible service. We offer a free consultation so that you can learn more about what we do and how we can help you.
                        Contact us today to schedule a consultation.
                        

                    </p>
        </div>

        <h3 className={styles.normalHeading}> Our Exciting Service Offerings </h3>

        <div className={styles.fleximageContainer}>
          <div className={styles.fleximage}> 
            <Image
              src='/advertising.png'
              height='100'
              width='170'
              alt='Image'
            /> 
          </div>
          <div className={styles.fleximage}> 
            <Image
              src='/video.png'
              height='100'
              width='170'
              alt='Image'
            /> 
          </div>
          <div className={styles.fleximage}> 
            <Image
              src='/content.jpg'
              height='100'
              width='170'
              alt='Image'
            /> 
          </div>
          <div className={styles.fleximage}> 
            <Image
              src='/listing.png'
              height='100'
              width='170'
              alt='Image'
            /> 
          </div>
        </div>

        <h3 className={styles.normalHeading}> Our Projects </h3>
        <div className={styles.flexContainerimage}>
              <div className={styles.flexContentimage}>
                    <div className={styles.Image}>
                      <Corouselindi/>  
                    </div>
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