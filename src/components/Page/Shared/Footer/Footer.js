import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-responsive mt-5">
            <div className="footer-container">
               <Container>
                 <Row>    
                     <Col md={4}>    
                            <div className="left-container text-start">
                                
                                <span className="footer_name">Learning School </span>

                                <br />
                                <div className="icons-container d-flex text-center mt-3">
                                    <div className="icon icon_instagram">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon icon_twitter">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon icon_youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon icon_facebook">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-4 footer-menu">
                                    <small>
                                        An educational institution providing primary and secondary education, prior to tertiary education. Within a larger educational institution such as a department.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>learning_school &copy; All rights </small>
                                </p>
                            </div>
                       </Col> 

                    <Col md={2}>
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Contact us</li>

                                </ul>
                            </div>
                        </Col> 

                    <Col md={5}> 
                            <div className="right-footer-container">
                              
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="name" placeholder="Your name/Company's name" />
                                    </Form.Group> 
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>   
                                    
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Message" rows={3} />  
                                    </Form.Group>    

                                    <Button className="footer_button" >Submit</Button>
                                    
                                </Form>

                          
                                    <div className="footer_phone">
                                        <div className="phone d-flex align-items-center justify-content-center mt-4">
                                            <div className="footer-phone-icon mx-2">
                                                <FontAwesomeIcon icon={faPhoneVolume} />
                                            </div>
                                           
                                            <div>
                                                 <h5 className='footer_number'>+0 1 7 777 000 22</h5>
                                            </div> 
                                        </div>
                                    <div className="map d-flex align-items-center justify-content-center footer_number">
                                            <div className="footer-phone-icon mx-2">
                                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                            </div>
                                            
                                            <div>
                                                <p>
                                                    www.learning_school.COM.com
                                                    <br />
                                                    learning_school.COM@pride.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </Col> 
                   </Row> 
               </Container>
            </div>
        </div>
    );
};


export default Footer;