"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useRouter } from "next/navigation"
import Maintenance from '@/components/footer';


export default function Home() {
  return(
    <Maintenance/>
  )
}


