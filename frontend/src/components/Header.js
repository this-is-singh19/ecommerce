import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
function Header() {
    return (
        <div>
            <header>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </header>
        </div>
    )
}

export default Header