'use client'
                
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import '../app/globals.css'
import styles from '../app/page.module.css'


export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);


  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <div className={`navbar ${navbarVisible ? 'active' : ''}`}>
      <button onClick={toggleNavbar} className="toggle-button">
        {navbarVisible ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </button>
      <div className='afternav'>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutIndiabus">About</a></li>
          <li><a href="/serve">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/aboutIndiads">InDiAds</a></li>
          <li><a href="/Indilearn">InDiLearn</a></li>
          <li><a href="/signinoptions">Your Account</a></li>
        </ul>
      </nav>
      </div>
    </div>
  );
};


