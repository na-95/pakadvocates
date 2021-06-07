import React from 'react';
import { Navbar, Button, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import history from '../history';
import { Link } from 'react-router-dom';
import config from '../config/config';
import { connect } from 'react-redux';
import { logoutLawyer } from '../actions'

function HeaderLawyer(props) {

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
                            <Button onClick={handleRedirect('CurrentCasesList')} className="mx-1 btn-secondary ">
                                View Cases
                            </Button>
                            <Button onClick={handleRedirect('ClientBids')} className="mx-1 btn-secondary ">
                                View Pending Bids
                            </Button>
                            {/* <Button onClick={handleRedirect('EditClientProfile')} className="mx-1 btn-secondary ">
                                Edit Profile
                            </Button> */}
                            <Button onClick={props.logoutLawyer} className="mx-1 btn-primary ">
                                Logout
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

export default connect(null, { logoutLawyer })(HeaderLawyer);
