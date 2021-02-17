import React from 'react';
import { Navbar, Button, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import history from '../history';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutAdmin } from '../actions';
import config from '../config/config';

function HeaderAdmin(props) {

    console.log('header rendered')

    const handleRedirect = (path) => (e) => {
        e.preventDefault();
        history.push(`${config.BASENAME}/admin/${path}`);
    }

    const handeLogout = (e) => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to logout?')) {
            history.push(`${config.BASENAME}/admin`);
            props.logoutAdmin()
        }

    }

    return (
        <header className="header-container">
            <Container fluid>
                <Navbar className="py-3 d-flex" collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="#home">
                        <Link id='brand-logo' to={`${config.BASENAME}/admin/adminpanel`}>PakAdvocates</Link>
                    </Navbar.Brand>
                    <div className="flex-grow-1"></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            {/* {
                                history.location.pathname !== '/admin/adminpanel' && <Nav.Link onClick={handleRedirect('adminpanel')}>Go Back To Admin Panel</Nav.Link>
                            } */}
                            <Nav.Link onClick={handleRedirect('lawyerrequests')}>View Lawyer Requests</Nav.Link>
                            <Nav.Link onClick={handleRedirect('approvedlawyers')}>View Approved Lawyers</Nav.Link>
                            <Nav.Link onClick={handleRedirect('addcourtcategory')}>Add Court Categories</Nav.Link>
                            <Nav.Link onClick={handeLogout}>Logout</Nav.Link>
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

export default connect(null, { logoutAdmin })(HeaderAdmin);

