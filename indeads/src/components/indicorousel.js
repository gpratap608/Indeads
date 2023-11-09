"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import  Link from 'next/link'

const Corouselindi = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Link href='/Apply'>
        <Image
          className="d-block w-100 image" 
          src={`/Dhanteras.jpg`}
          alt="First slide"
          height='300'
          width='150'
        />
      </Link>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <Image
          className="d-block w-100 image"
          src={`/Hiring.jpg`}
          alt="Second slide"
          height='300'
          width='150'
        />
        

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <Image
          className="d-block w-100"
          src={`/imageicon.jpg`}
          alt="Third slide"
          height='300'
          width='150'
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Corouselindi;