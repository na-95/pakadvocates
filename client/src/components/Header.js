import { Navbar, Button, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import history from '../history';
import { Link } from 'react-router-dom';
import config from '../config/config';
import ClientLogin from './ClientLogin';
import React, { Component } from 'react'

export default class Header extends Component {

    state = {
        isCLoginOpen: false,
    }

    handleRedirect = () => {
        history.push(`${config.BASENAME}/signup`)
    }

    toggleCLogin = () => {
        this.setState({
            isCLoginOpen: !this.state.isCLoginOpen
        })
    }
    render() {
        return (
            <header className="header-container">
                <Container fluid>
                    <Navbar className="py-3 d-flex" collapseOnSelect expand="lg" bg="white" variant="light">
                        <Navbar.Brand>
                            <Link id='brand-logo' to={`${config.BASENAME}`}>PakAdvocates</Link>
                        </Navbar.Brand>
                        <div className="flex-grow-1"></div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Button onClick={this.handleRedirect} className="mx-1 btn-secondary ">
                                    Register
                                {/* <Nav.Link href="#features">Sign Up</Nav.Link> */}
                                </Button>
                                <Button onClick={this.toggleCLogin} className="mx-1 btn-primary ">
                                    Client Login
                                {/* Login modal: */}
                                </Button>
                                {this.state.isCLoginOpen ? <ClientLogin show={this.state.isCLoginOpen} onHide={this.toggleCLogin} /> : <></>}
                                <Button className="mx-1 btn-primary ">
                                    Lawyer Login
                                {/* {showLawyerLogin ? <ClientLogin show toggleLawyerLogin={toggleLawyerLogin} /> : <></>} */}
                                </Button>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                                {/* <ClientLogin /> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }
}