"use client";
import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import Corousel from '@/components/corousel';
import Corouselindi from '@/components/indicorousel';
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>

      <div className={styles.upper}>
        <div className={styles.flexContainerimage}>
          <div className={styles.flexContentimage}>
            <div className={styles.Image}>
              <Corouselindi />
            </div>

          </div>
        </div>


        <h3>Our Excited Services Offerings</h3>
        <div className={styles.fleximageContainer}>
          <div className={styles.fleximage}>
            <Image
              src='/advertising.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          <div className={styles.fleximage}>
            <Image
              src='/video.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          <div className={styles.fleximage}>
            <Image
              src='/content.jpg'
              height='200'
              width='200'
              alt='Image'
            />
          </div>
          <div className={styles.fleximage}>
            <Image
              src='/listing.png'
              height='200'
              width='200'
              alt='Image'
            />
          </div>

          <button><img
            src='/arrow right 1.png'
            height='50'
            width='50'
          /></button>


        </div>
      </div>


      {/*     <div>
        <div className={styles.homecontent}>
          <div className={styles.stickcontainer1}>
              <Image
                  src='/group.png'
                  height='300'
                  width='180'
                  alt='Image'
              />
              <div className={styles.openpara}>
                  <h4> Get personalized post advertisement </h4>
                  <button onClick={()=>router.push("/contact")} className={styles.roundbutton} > <b>Contact Us</b> </button>
              </div>
          </div>
        </div>
        </div> */}

      {/*  <h3 className={styles.normalHeading}> Our Exciting Service Offerings </h3>

      <div className={styles.fleximageContainer}>
        <div className={styles.fleximage}>
          <Image
            src='/advertising.png'
            height='100'
            width='170'
            alt='Image'
          />
        </div>
        <div className={styles.fleximage}>
          <Image
            src='/video.png'
            height='100'
            width='170'
            alt='Image'
          />
        </div>
        <div className={styles.fleximage}>
          <Image
            src='/content.jpg'
            height='100'
            width='170'
            alt='Image'
          />
        </div>
        <div className={styles.fleximage}>
          <Image
            src='/listing.png'
            height='100'
            width='170'
            alt='Image'
          />
        </div>
      </div> */}
      {/* <div className={styles.generalbox}>
          <div className={styles.generalboxcontent}><Link href='aboutIndiabus' className={styles.normalHeading}>About Us</Link></div>
          <div className={styles.generalboxcontent}><Link href='aboutIndiads' className={styles.normalHeading}>InDiAds</Link></div>
          <div className={styles.generalboxcontent}><Link href='Indilearn' className={styles.normalHeading}>InDiLearn</Link></div>
        </div> */}
      <div className={styles.container1}>
        <img
          src='/whoarewe1.png'
          height='500'
          width='1100'
        />
        <div className={styles.container12}>
          <h3>WHO ARE WE</h3>
          <p>we envision a future where businesses thrive in the digital landscape with unparalleled success.
            Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital
            business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed
            to delivering excellence in content creation, digital marketing, website development, and digital
            advertising. Our vision is to empower businesses with the tools and strategies they need to not
            only survive but to excel in the ever-evolving digital ecosystem.  </p>
        </div>

      </div>

      <div className={styles.container2}>

        <div className={styles.container21}>
          <h3>ROLE OF SOCIAL MEDIA</h3>
          <p>Creating and developing a website is important for any business. Along with having a website,
            you need to expand your online outreach to social media platforms. Social networking sites such
            as Instagram and Facebook are essential for maintaining a competitive edge. Companies that do
            not have active social media accounts risk missing out on numerous marketing opportunities.Social
            media eases the process of providing and receiving feedback. If your customers have concerns or
            problems with what your business offers, they can let you    </p>
        </div>
        <img
          src='/roleofSM1.png'
          height='500'
          width='1100'
        />

      </div>
      <div className={styles.container3}>
        <h3>Media platforms</h3>

        <div className={styles.slider3}>
          <div className={styles.slidetrack3}>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0gzJfjv4_U/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media1.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0jgWHMpTen/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media3.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0raEW_vOWI/?igshid=MzRlODBiNWFlZA==">
                <img
                  src='/media4.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>

              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>
            <div className={styles.slide3}>
              <a href="https://www.instagram.com/p/C0pDMUloxcn/?igshid=ZWI2YzEzYmMxYg==">
                <img
                  src='/media2.jpg'
                  height='200'
                  width='200'
                />
              </a>
            </div>


            {/*  <button><img
            src='/arrow right 1.png'
            height='50'
            width='50'
          /></button> */}

          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <img
          src='/whyindibus1.png'
          height='500'
          width='1100'
        />
        <div className={styles.container12}>
          <h3>WHY CHOOSE INDIBUS</h3>
          <p>In a world where the digital space is constantly evolving, INDIBUS sees an opportunity to reshape
            the way businesses engage with their target audience. We envision a future where businesses
            harness the full potential of digital platforms to connect, communicate, and convert.
            Our commitment to this vision is unwavering, and we will continue to be at the forefront of digital
            innovation, adapting to the ever-changing landscape to provide cutting-edge solutions. </p>
        </div>

      </div>


      <hr style={{ border: '.2rem solid white' }}></hr>
      <h3 className={styles.normalHeading}>What Our Clients Say</h3>
      <div className={styles.whorwe}>
        {/* <p>Add some text Here</p> */}
        <div className={styles.testimonials}>
          {/* <img
                        src = '/imageicon.jpg'
                        height='50'
                        width='50'
                        alt='Image'
                        className={styles.testimonialsimage}
                    /> 
                    <h3 className={styles.blackHeading}>User</h3> */}

          <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
            <div className={`card-header ${styles.cardHeader}`}>
              <img
                src='https://media.licdn.com/dms/image/C4E03AQHVktHiR4fmIA/profile-displayphoto-shrink_800_800/0/1598531453310?e=1704326400&v=beta&t=NStBcJ3xxsV0NLER7-QRtRiSESCFeIvayqvAuOIi_1E'
                height='50'
                width='50'
                alt='Image'
                className={styles.testimonialsimage}
              />

              <b>Dr. Arpita Gupta </b>
              <br />
              Dean Incubation and Startup
              ABES Institute of Technology, Ghaziabad



            </div>
            <div className="card-body">
              <p className="card-text">We have been working with Indibus for over a year now, and we have been consistently impressed with their work. They are a creative and talented team who is always coming up with new and innovative ideas. They are also very responsive to our feedback and are always willing to make changes to ensure that we are happy with the final product. We would highly recommend Indibus to anyone looking for a content creation and advertising agency that can deliver results.</p>
            </div>
          </div>


          <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
            <div className={`card-header ${styles.cardHeader}`}>
              <img
                src='/imageicon.jpg'
                height='50'
                width='50'
                alt='Image'
                className={styles.testimonialsimage}
              />
              <b>Mr Ashish Sharma</b>
              <br />Onwer MR Enterprises Ghaziabad

            </div>
            <div className="card-body">
              <p className="card-text">We have been working with Indibus for several months now, and we have been very impressed with their work</p>
            </div>
          </div>


          <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
            <div className={`card-header ${styles.cardHeader}`}>
              <img
                src='/imageicon.jpg'
                height='50'
                width='50'
                alt='Image'
                className={styles.testimonialsimage}
              />
              <b>Mr. Asgar Khan</b>
              <br />Owner Shaheen Di Kitchen
              Ghaziabad
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Light card title</h5> */}
              <p className="card-text">They have  helped us to develop effective advertising campaigns that have  generated leads and sales</p>
            </div>
          </div>

          <div className="card text-bg-light mb-3 mx-2" style={{ maxWidth: '18rem' }}>
            <div className={`card-header ${styles.cardHeader}`}>
              <img
                src='https://media.licdn.com/dms/image/C5603AQEQPiHxrYGrLg/profile-displayphoto-shrink_800_800/0/1556599060779?e=1704326400&v=beta&t=VZqUuA6ZNVi7kLK8Mq7OV2dFIvU2XzwlazOT4GN_-4I'
                height='50'
                width='50'
                alt='Image'
                className={styles.testimonialsimage}
              />
              <b>Sheelesh Kumar Sharma</b>
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Light card title</h5> */}
              <p className="card-text">They create absolutely stunning content and  helped in making effective online presence of my business</p>
            </div>
          </div>
          <button><img
            src='/arrow right 1.png'
            height='50'
            width='50'
          /></button>
        </div>
      </div>
      <hr style={{ border: '.2rem solid white' }}></hr>
    </main>
  )
}


{/* <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
<img
    src = '/imageicon.jpg'
    height='50'
    width='50'
    alt='Image'
    className={styles.testimonialsimage}
/>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
