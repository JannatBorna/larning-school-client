import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    
    return (
        <div id="header">  
            <Navbar collapseOnSelect expand="lg" variant="black">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-black" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">

                        <Nav defaultActiveKey="/home">
                            <Nav.Link className="nav_bar active mx-5" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav_bar mx-3" as={HashLink} to="/ourServices#ourServices">Our services</Nav.Link>
                            <Nav.Link className="nav_bar mx-5" as={HashLink} to="/dashboard#dashboard">Dashboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;        
                       

                    
                           

                        

                      