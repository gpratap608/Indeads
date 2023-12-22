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
      <Maintenance/>
    </main>
  )
}


