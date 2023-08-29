"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React,{ useState, useEffect} from 'react'
import "../app/globals.css"
import SideNav from './SideNav'


export default function Navbar (){

    return(
      <nav className='nav-parent'>

          
                  <SideNav/> 

      </nav>
    )
}

