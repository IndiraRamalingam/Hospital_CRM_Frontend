import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import logo from "../../assets/Logo.avif"

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navigation'>
      <Container>
        <Navbar.Brand href="/">
              <img src={logo} width={150} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className='nav-links m-3' href="/">HOME</Nav.Link>
            <Nav.Link className='nav-links m-3' href="/aboutus">ABOUT</Nav.Link>
            <Nav.Link className='nav-links m-3' href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar