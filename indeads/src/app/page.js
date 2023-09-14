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
          <h3 className={styles.Typewriter}>
             <Typewriter
              options={{
                strings: ['InDiAds', 'Show', 'Earn', 'Grow', 'With...'],
                autoStart: true,
                loop: true,
              }} /> 
              
          </h3>


      <div className={styles.flexContainer}>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link className={styles.link} href='/business'>Business</Link></p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}> <Link className={styles.link} href='/Users'> Happy Clients</Link> </p>
        </div>
        <div className={styles.flexContent}>
          <p className={styles.para}>  <Link className={styles.link} href='Pendings'> Upcoming Projects </Link> </p>
        </div>
      </div>
          
    </main>
  )
}
