"use client"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'

function SideNav() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                
                
                  <Nav.Link href='/aboutIndiabus'>InDiBUS</Nav.Link>
                
                
                  <Nav.Link  href='/aboutIndiads'>InDiADS</Nav.Link>
                
                
                  <Nav.Link  href='/Indilearn'>InDiLearn</Nav.Link>
                  
        
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='/business'>Business</NavDropdown.Item>
                    <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
                    <NavDropdown.Item href='/report'>Report</NavDropdown.Item>
                    <NavDropdown.Item href='/serve'>Our Services</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      {/* Another action */}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='/signup'>
                      Sign UP 
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default SideNav;