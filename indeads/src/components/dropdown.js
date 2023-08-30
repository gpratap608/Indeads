"use client"


import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function DropDown() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          <ul className = "nav">
                <li className='nav-link' >
                  <Link className='link' href="/">Home</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Link</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Link</Link>
                </li>
                <li className='nav-link'>
                  <Link className='link' href="/">Disabled</Link>
                </li>
                
              </ul>
        </div>
      </Collapse>
    </>
  );
}

export default DropDown;