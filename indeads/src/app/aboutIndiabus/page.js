'use client'
import Image from "next/image"
import styles from"../page.module.css"

export default function aboutIndibus(){
    return(
        <main className={styles.main}>
            <div className={styles.orangeline}></div>
                <h3 className={styles.normalHeading}> About Us </h3>
                <div className={styles.fullscreencontainer}>
                    <div className={styles.fullscreencontent}>
                        <h1><u>VISION</u></h1><br/><br/>
                        <h4> At INDIBUS, we envision a future where businesses thrive in the digital landscape with unparalleled success. Our company stands as a beacon of innovation and expertise, leading the way in the realm of digital business solutions. As the trusted partner of choice for businesses worldwide, INDIBUS is committed to delivering excellence in content creation, digital marketing, website development, and digital advertising. Our vision is to empower businesses with the tools and strategies they need to not only survive but to excel in the ever-evolving digital ecosystem.
                        
                        <br/><br/> In a world where the digital space is constantly evolving, INDIBUS sees an opportunity to reshape the way businesses engage with their target audience. We envision a future where businesses harness the full potential of digital platforms to connect, communicate, and convert. Our commitment to this vision is unwavering, and we will continue to be at the forefront of digital innovation, adapting to the ever-changing landscape to provide cutting-edge solutions.

                        <br/> <br/><b>Content Creation Excellence:</b>
                        <br/>  <br/>We envision a world where content is king. INDIBUS is dedicated to revolutionizing content creation, producing compelling and relevant content that captures the hearts and minds of audiences. We see a future where our content not only informs and entertains but also drives meaningful engagement and conversions, helping businesses build lasting connections with their customers.

                        <br/>  <br/><b>Digital Marketing Transformation:</b>
                        <br/>  <br/>Our vision for digital marketing is one where businesses not only reach their target audience but deeply connect with them. We see INDIBUS as the catalyst for this transformation, employing innovative digital marketing strategies that deliver measurable results. We aspire to create a digital marketing landscape where businesses not only survive but thrive, adapting to new challenges and opportunities in real-time.

                        <br/>  <br/><b>Website Development Innovation:</b>
                        <br/>  <br/>In the digital age, a website is often the first point of contact between a business and its audience. We envision a future where websites are more than just an online presence. INDIBUS aims to redefine website development, creating digital storefronts that captivate, convert, and provide an unparalleled user experience. We envision websites as the cornerstone of a business's online success, where creativity meets functionality.

                        <br/>  <br/><b>Digital Advertisement Excellence:</b>
                        <br/>  <br/>Our vision for digital advertising is to make it not just an expense, but a revenue-generating investment. We foresee a future where INDIBUS helps businesses craft compelling digital advertising campaigns that engage, inspire, and convert. Our commitment to this vision is to drive digital advertising ROI to new heights, making every advertising dollar count. </h4>
                    
                    </div>
                    <div className={styles.fullscreencontent}>
                        <h1><u>MISSION</u></h1><br/><br/>
                        <h4>At INDIBUS, we are committed to revolutionizing the digital landscape by providing innovative and comprehensive business solutions to our clients. As a dynamic and forward-thinking company, our mission is to empower businesses with the tools and strategies needed to thrive in the digital age. Our primary focus lies in content creation, digital marketing, website development, and digital advertising.

                        <br/><br/>    Empowering Success through Digital Excellence

                        <br/><br/>    In a world driven by technology and digital communication, INDIBUS aims to be the catalyst for success for businesses of all sizes. Our mission is to empower our clients to harness the full potential of the digital realm, enabling them to connect, engage, and grow in an ever-evolving landscape.

                        <br/><br/>    Content Creation

                        <br/><br/>    We believe that compelling and engaging content is the cornerstone of any successful digital presence. Our dedicated team of content creators is committed to crafting narratives that captivate and resonate with target audiences. Whether it's informative blog posts, attention-grabbing social media updates, or visually stunning videos, we're dedicated to helping businesses tell their unique stories effectively.

                        <br/><br/>    Digital Marketing

                        <br/><br/>    In the fast-paced world of digital marketing, our mission is to provide cutting-edge strategies and tactics that ensure our clients stay ahead of the curve. We're committed to delivering tailored marketing solutions that boost brand visibility, increase leads, and drive conversions. Our team combines data-driven insights with creative thinking to create holistic and effective marketing campaigns.

                        <br/><br/>    Website Development

                        <br/><br/>    A user-friendly and visually appealing website is often the first point of contact between a business and its potential customers. Our mission is to design and develop websites that not only look stunning but also function flawlessly. We understand that a website should be a powerful marketing tool, and we're dedicated to creating online spaces that leave a lasting impression.

                        <br/><br/>    Digital Advertising

                        <br/><br/>    In the vast digital advertising landscape, our mission is to help businesses stand out and make the most of their advertising budgets. We leverage the latest technologies and trends to deliver targeted and cost-effective digital advertising campaigns. Our team ensures that every ad placement and message aligns with the client's goals and reaches the right audience at the right time.

                        <br/><br/>    Our Commitment to Excellence

                        <br/><br/>    At INDIBUS, our mission goes beyond offering services; it's about building lasting relationships. We are driven by a commitment to excellence in everything we do. We aim to be a reliable partner, guiding our clients through the complex digital ecosystem, adapting to their evolving needs, and providing support every step of the way.

                        <br/><br/>    Innovation and Adaptability

                        <br/><br/>    To fulfill our mission, we constantly seek innovation and adaptability. The digital landscape is ever-changing, and we strive to stay at the forefront of new trends and technologies. We invest in continuous learning, research, and development to provide our clients with the most effective and up-to-date solutions.

                        <br/><br/>    Ethical Practices

                        <br/><br/>    We take pride in conducting our business with the utmost ethical integrity. Our mission includes promoting transparency, trust, and respect in all our interactions, both with clients and partners. We are committed to ensuring that the solutions we provide are not only effective but also aligned with responsible and ethical practices.

                        <br/><br/>    Join Us in Shaping the Digital Future

                        <br/><br/>    As we pursue our mission, we invite businesses to join us in shaping the digital future. Together, we can explore new horizons, overcome challenges, and achieve unprecedented success in the digital world. At INDIBUS, our mission is clear: to empower businesses with digital business solutions that drive growth, engage audiences, and lead to enduring success.
                        </h4>
                    </div>
                </div>
    
            <div>
                <h3 className={styles.normalHeading}> Our Team </h3>
                <div className={styles.teamcontainer}>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/Team/Roshan.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Roshan Dubey </b></h3>
                        <p> Co-Founder & CEO  </p>
                        
                    </div>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/Team/Suraj.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Suraj Singh </b></h3>
                        <p> Co-Founder & Creative Director </p>
                    </div>
                    <div className={styles.teamcontent}>
                        <Image
                            src='/Team/Saubhagya.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Saubhagya </b></h3>
                        <p> CFO </p>
                    </div>
                   <div className={styles.teamcontent}>
                        <Image
                            src='/Team/GPS.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Ganesh Pratap Singh </b></h3>
                        <p> CTO </p>
                    </div>         
                    <div className={styles.teamcontent}>
                        <Image
                            src='/Team/Yuvraj.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Yuvraj Singh </b></h3>
                        <p> Technical Head </p>
                    </div>
                    
                    <div className={styles.teamcontent}>
                        <Image
                            src='/Team/Deepak.jpg'
                            height='200'
                            width='200'
                            className={styles.testimonialsimage}
                        />
                        <h3><b> Deepak Chaurasia </b></h3>
                        <p> Marketing </p>
                    </div>

                </div>
            </div>
        </main>
    )
}
