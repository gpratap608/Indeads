
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import Authprovider from '@/components/AuthProvider/Authproviders'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InDiBUS',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='Container'>  
            <div className='item Navbar'>     
               <div className='extra-nav'> <div className='extra-sidenav'><Link href="/" className='exthe'><h1 className='extra-heading'> InDiBUS </h1></Link></div> </div>
               <Navbar/>
            </div>
            <div className='item Column'> 
            <div className='nav'></div>
                <div className='flexContainer'>
                    <div className='flexContent' ><Link href='/business' className='pagelink'> Business </Link></div>
                    <div className='flexContent' ><Link href='/contact' className='pagelink'> Contact </Link></div>
                    <div className='flexContent' ><Link href='/report' className='pagelink'> Report </Link></div>
                    <div className='flexContent' ><Link href='/serve' className='pagelink'> Our Services </Link></div>
                    <div className='flexContent' ><Link href='/aboutIndiabus' className='pagelink'> About Us </Link></div>
                    <div className='flexContent' ><Link href='/aboutIndiads' className='pagelink'> InDiAds </Link></div>
                    <div className='flexContent' ><Link href='/Indilearn' className='pagelink'> InDiLearn </Link></div>
                    
                    
          

                </div>
            </div>
            <div className='item mainbody'>
              <Authprovider>{children}</Authprovider>
            </div>
            <div className='item Footer'> <Footer/> </div>
        </div>
      
      </body>
    </html>
  )
}
