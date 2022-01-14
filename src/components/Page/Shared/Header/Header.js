import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useAuth from './../../../../hook/useAuth';

const Header = () => {
    const { user, logOut} = useAuth();
    return (
        <div id="header">  
            <Navbar collapseOnSelect expand="lg" variant="black">
                <Container>
                    <Navbar.Brand>
                        <h5 className="website-name"><span className="skill_text mx-3 my-3">LS</span></h5>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-black" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        <Nav defaultActiveKey="/home">
                            <Nav.Link className="nav_bar active" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav_bar" as={HashLink} to="/ourServices#ourServices">Our services</Nav.Link>
                            <Nav.Link className="nav_bar" as={HashLink} to="/about#about">About</Nav.Link>
                           
                            {/* <Nav.Link className="nav_bar" as={HashLink} to="/groupStudy#groupStudy">Grout Study</Nav.Link> */}
                            <Nav.Link className="nav_bar dashboard" as={HashLink} to="/dashboard#dashboard">Dashboard</Nav.Link>

                           

                          {
                              user?.email ?
                                    <NavDropdown className="text" title="Signed in as:" id="basic-nav-dropdown">
                                        <div>
                                            <p className="text-danger mx-4" href="#login">Name- {user?.displayName}</p>

                                            <p className="text-danger mx-4" href="#login">Email- {user?.email}</p>

                                        </div>

                                        <br />

                                        <Button onClick={logOut}
                                            className="btn-logout mx-2" variant="secondary">Logout
                                        </Button>
                                    </NavDropdown>

                                        

                                    :

                                    <Nav.Link className="nav_bar" as={HashLink} to="/login#login">Login</Nav.Link>

                          }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;        
                       

                    