import React from 'react';
import { Navbar, Button, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';


export default function Header() {
    return (
        <header className="header-container">
            <Container  fluid>
                <Navbar className="py-3 d-flex" collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="#home">PakAdvocates</Navbar.Brand>
                    <div className="flex-grow-1"></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#features">Sign Up</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}
