"use client"

import styles from '../app/page.module.css'
import { useState } from 'react';

const Squarebox = () => {
    
    return(
        <div className = {styles.rectcard}>
            <div className={styles.innercard}>
                <h10 className={styles.contactHeading}>Our main address</h10>
            </div>
        </div>
    )
}

export default Squarebox;
