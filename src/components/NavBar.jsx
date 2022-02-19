import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Logo from './assets/img/Logo.png';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt='TechStore Logo'
            width={120}
            height={120}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Componentes PC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Periféricos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Streaming</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#combos">Combos</Nav.Link>
            <Nav.Link href="#outlet">Outlet</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar