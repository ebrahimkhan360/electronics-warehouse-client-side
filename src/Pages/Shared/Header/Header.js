import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo (3).gif';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
     <img className='logo-styel' src={logo} alt=""/> 
        ELECTRO
     </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to="future">Future</Nav.Link>
    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="register">Register</Nav.Link>
    <Nav.Link as={Link} to="login">Log In</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;