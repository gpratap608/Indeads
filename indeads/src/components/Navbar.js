'use client'

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../app/globals.css'
import styles from '../app/page.module.css'


export default function Navbar() {

  return (
    <div className='navbar' >
      {/* <div className='navlogo'>
        <img
        src=''
        alt='IndiBus'/>
      </div> */}

      <ul className='navmenu'>
        <li>Home</li>
        <li>Content</li>
        <li>Services</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};