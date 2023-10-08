"use client"
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

export default function Footer() {
  const date = new Date
  const year = date.getFullYear()
  return (
    <div className='footerDiv'>
      <footer className='footer'>
        <div className='flexfooter'>
          <div className='flexContent' id='twitter'> <SocialIcon url="https://twitter.com/indibus23" /> </div>
          <div className='flexContent' id='instagram'> <SocialIcon url="https://instagram.com/indibus23?igshid=NzZhOTFlYzFmZQ==" /> </div>
          <div className='flexContent' id='linkedin'> <SocialIcon url="https://www.linkedin.com/company/indibus23/" /> </div>
          <div className='flexContent' id='facebook'> <SocialIcon url="https://www.facebook.com/indibus23/" /> </div>
        </div>
        <div className='flexfooter'>
          <div className='flexContent'> 	<Link className='link' href='/contact'> Contact Us</Link> </div>
          <div className='flexContent'><Link className='link' href='/report'> Report a Problem </Link></div>
          <div className='flexContent'><Link className='link' href='/'> Home </Link></div>
        </div>
        <div className='flexfooter'>
          <div className='flexContent link'> 	&#169;InDiBus {year}</div>
        </div>
      </footer>
    </div>
  )
}