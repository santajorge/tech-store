import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Logo from './assets/img/Logo.png';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={Logo}
              alt='TechStore Logo'
              width={120}
              height={120}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <Link to="/category">
                <NavDropdown.Item>Equipos y Notebooks</NavDropdown.Item>
              </Link>
              <Link to="/category">
                <NavDropdown.Item>Componentes PC</NavDropdown.Item>
              </Link>
              <Link to="/category">
                <NavDropdown.Item>Consolas de Video Juegos</NavDropdown.Item>
              </Link>
              <Link to="/category">
                <NavDropdown.Item>Accesorios</NavDropdown.Item>
              </Link>
              <Link to="/category">
              <NavDropdown.Item>Streaming</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/category">
              <Nav.Link>Combos</Nav.Link>
            </Link>
            <Link to="/category">
              <Nav.Link href="#outlet">Destacados</Nav.Link>
            </Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar