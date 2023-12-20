import React from 'react'
import { Cstreview } from './cstreview'
import styles from "../app/page.module.css"

export const Reviews = () => {
  return (
    <div className='clientcontainer'>
        <div>
            <h1 className='clientheading'>CLIENT REVIEWS</h1>
            <Cstreview/>
        </div>
    </div>
  )
}
