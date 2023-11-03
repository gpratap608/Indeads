"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Corousel from '@/components/corousel';
import Corouselindi from '@/components/indicorousel';
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
        <div className={styles.upper}>
          <div className={styles.flexContainerimage}>
              <div className={styles.flexContentimage}>
                    <div className={styles.Image}>
                      <Corouselindi/>  
                    </div>
              </div>
        </div>
        </div>
        <div>
        <div className={styles.homecontent}>
          <div className={styles.stickcontainer1}>
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
        </div>
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
        <div className={styles.generalbox}>
          <div className={styles.generalboxcontent}><Link href='aboutIndiabus' className={styles.normalHeading}>About Us</Link></div>
          <div className={styles.generalboxcontent}><Link href='aboutIndiads' className={styles.normalHeading}>InDiAds</Link></div>
          <div className={styles.generalboxcontent}><Link href='Indilearn' className={styles.normalHeading}>InDiLearn</Link></div>
        </div>

        <h3 className={styles.normalHeading}>What Our Clients Say</h3>
        <div className={styles.whorwe}>
                  {/* <p>Add some text Here</p> */}
              <div className={styles.testimonials}>
                    {/* <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    /> 
                    <h3 className={styles.blackHeading}>User</h3> */}

                    <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
                    <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    />
                      <div className="card-header">Dr. Arpita Gupta
                            <br/>Dean Incubation and Startup
                            ABES Institute of Technology, Ghaziabad
                      </div>
                      <div className="card-body">
                        <p className="card-text">We have been working with Indibus for over a year now, and we have been consistently impressed with their work. They are a creative and talented team who is always coming up with new and innovative ideas. They are also very responsive to our feedback and are always willing to make changes to ensure that we are happy with the final product. We would highly recommend Indibus to anyone looking for a content creation and advertising agency that can deliver results.</p>
                      </div>
                    </div>


                    <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
                    <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    />
                      <div className="card-header">Mr Ashish Sharma
                          <br/>Onwer MR Enterprises Ghaziabad
                      </div>
                      <div className="card-body">
                        <p className="card-text">We have been working with Indibus for several months now, and we have been very impressed with their work</p>
                      </div>
                    </div>


                    <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
                    <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    />
                      <div className="card-header">Mr. Asgar Khan
                        <br/>Owner Shaheen Di Kitchen
                          Ghaziabad
                      </div>
                      <div className="card-body">
                        {/* <h5 className="card-title">Light card title</h5> */}
                        <p className="card-text">They have  helped us to develop effective advertising campaigns that have  generated leads and sales</p>
                      </div>
                    </div>

                    <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
                    <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    />
                      <div className="card-header">Sheelesh Kumar Sharma
                      </div>
                      <div className="card-body">
                        {/* <h5 className="card-title">Light card title</h5> */}
                        <p className="card-text">They create absolutely stunning content and  helped in making effective online presence of my business</p>
                      </div>
                    </div>
              </div>
        </div>
          
    </main>
  )
}


{/* <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
<img
    src = '/imageicon.jpg'
    height='50'
    width='50'
    alt='Image'
    className={styles.testimonialsimage}
/>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
