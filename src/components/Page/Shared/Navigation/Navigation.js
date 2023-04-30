import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../../hook/useAuth";
import "./Navigation.css";



const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div id="navigation">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
             <Navbar.Brand href="#">
       <Nav className="justify-content-start">
       <Nav.Link className="instagram" href="https://www.instagram.com/borna_jannat">
         <FontAwesomeIcon icon={faInstagramSquare} /> 
       </Nav.Link>  
      
       <Nav.Link className="twitter" href="https://twitter.com/jannat_borna">
         <FontAwesomeIcon icon={faTwitterSquare} />
       </Nav.Link>  
     
       <Nav.Link className="youtube" href="https://www.youtube.com">
         <FontAwesomeIcon icon={faYoutube} />
       </Nav.Link> 
      
       <Nav.Link className="facebook" href="https://www.facebook.com/Bornabaset">
         <FontAwesomeIcon icon={faFacebookSquare} />
       </Nav.Link>
     </Nav> 
   </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="nav_bar active mx-5" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="nav_bar mx-3" as={HashLink} to="/ourServices#ourServices">Our services</Nav.Link>
            <Nav.Link className="nav_bar mx-5" as={HashLink} to="/dashboard#dashboard">Dashboard</Nav.Link>
          </Nav>
                        
           {user?.email ? (   
              
            <Navbar.Collapse className="justify-content-end ">
              <NavDropdown className="text justify-content-end " title="Signed in as:" id="basic-nav-dropdown">
                <div>
                    <p className="text-dark fw-bolder mx-4" href="#login">
                      Name- {user?.displayName}
                    </p>

                    <p className="text-dark fw-bolder mx-4" href="#login">
                      Email- {user?.email}
                    </p>
                </div>
                
                <br />  
                   
                <button onClick={logOut} className="logout_button mx-2">
                  Logout
                </button>  
              </NavDropdown>       
            </Navbar.Collapse>          

        ) : (
                    
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav_login" as={HashLink} to="/login#login">
              Login  
            </Nav.Link> 
          </Navbar.Collapse>       
            
    )}             
                     
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;                  