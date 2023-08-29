"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React,{ useState, useEffect} from 'react'
import "../app/globals.css"
import SideNav from './SideNav'
import Image from 'next/image'


export default function Navbar (){

    return(<>
              
              <div className='sidenav'>
                <SideNav/>
              </div>
    </>
    )
}

