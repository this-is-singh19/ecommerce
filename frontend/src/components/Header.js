import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <div>
            <header>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand>Indishop</Navbar.Brand>
                </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <LinkContainer to='/login'>
                    <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                  </LinkContainer>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
            </header>
        </div>
    )
}

export default Header