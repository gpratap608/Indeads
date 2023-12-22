"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Corousel from '@/components/corousel';
import Corouseldata from '@/components/corouseldata';
import { useRouter } from "next/navigation"
import Bodycontent from '@/components/bodycontent';
import { Reviews } from '@/components/reviews';
import Footer from '@/components/footer';
import Maintenance from '@/components/footer';


export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
        /*<div className={styles.upper}>
          <div className={styles.flexContainerimage}>
              <div className={styles.flexContentimage}>
                    <div className={styles.Image}>
                      <Corouseldata/>  
                    </div>
              </div>
        </div>

        <h3 className='head'>Our Excited Services Offerings</h3>
        <div className={styles.fleximageContainer}>
          <div className={styles.fleximage}>
            <Image
              src='/indiads1.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          <div className={styles.fleximage}>
            <Image
              src='/indicollab.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          <div className={styles.fleximage}>
            <Image
              src='/indilearn.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          
          
          <button><img
            src='/arrowright.png'
            height='50'
            width='50'

          /></button>


        </div>
      </div>
      <Bodycontent/>
      {/* <Reviews/> */}
{/* <Footer/>*/
      <Maintenance/>
    </main>
  )
}


