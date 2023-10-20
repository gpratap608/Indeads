"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Corousel from '@/components/corousel';
import Corouselindi from '@/components/indicorousel';


export default function Home() {
  
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
        <div className={styles.whorwe}>
          <h2 className={styles.whorwehead}>who are we?</h2>
          <div className={styles.vmflexContainer}>
              <div className={styles.vmflexContent}><h3>Vision</h3></div>
              <div className={styles.vmflexContent}><h3>Mission</h3></div>
              <div className={styles.butta}>
                <p className={styles.p1}> Take your business to the next level <button className={styles.button}>Read More</button></p>
                
              </div>
          </div>
        </div>      
        </div>
        <div className={styles.applyimagecontainer}>
        <Link href='/Apply'>
          <img src='Hiring.jpg' className={styles.applyimage}></img>
        </Link>
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
          <div className={styles.generalboxcontent}><Link href='aboutIndiads' className={styles.normalHeading}>InDiAds</Link></div>
          <div className={styles.generalboxcontent}><Link href='Indilearn' className={styles.normalHeading}>InDiLearn</Link></div>
          
        </div>

        <h3 className={styles.normalHeading}>What Our Clients Say</h3>
        <div className={styles.whorwe}>
                  <p>Add some text Here</p>
              <div className={styles.testimonials}>
                    <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    />
                    <h3 className={styles.blackHeading}>User</h3>

              </div>
        </div>
          
    </main>
  )
}
