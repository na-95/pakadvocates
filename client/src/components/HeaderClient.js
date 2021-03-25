import React from 'react';
import { Navbar, Button, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import history from '../history';
import { Link } from 'react-router-dom';
import config from '../config/config';


export default function HeaderClient() {

    const handleRedirect = (path) => () => {

        history.push(`${config.BASENAME}/${path}`)
    }

    return (
        <header className="header-container">
            <Container fluid>
                <Navbar className="py-3 d-flex" collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="#home">
                        <Link id='brand-logo' to={`${config.BASENAME}`}>PakAdvocates</Link>
                    </Navbar.Brand>
                    <div className="flex-grow-1"></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Button onClick={handleRedirect('EditClientProfile')} className="mx-1 btn-secondary ">
                                Edit Profile
                                {/* <Nav.Link href="#features">Sign Up</Nav.Link> */}
                            </Button>
                            <Button className="mx-1 btn-primary ">
                                Login
                                {/* <Nav.Link href="#pricing">Login</Nav.Link> */}
                            </Button>
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
