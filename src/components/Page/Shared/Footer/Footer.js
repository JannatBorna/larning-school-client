import {
    faFacebookSquare, faGoogle, faInstagramSquare,
    faTwitterSquare,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import "./Footer.css";


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

                  <p className="mt-4 footer-menu">
                    <small>
                      An educational institution providing primary and secondary
                      education, prior to tertiary education. Within a larger
                      educational institution such as a department.
                    </small>
                  </p>

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
                </div>
              </Col>

              <Col md={5}>
                <div className="right-footer-container">
                  <div className="footer_phone">
                    <div className="phone d-flex align-items-center justify-content-center mt-4">
                      {/* <div className="footer-phone-icon mx-2">
                         />
                      </div> */}

                      <div>
                        <h5 className="footer_number">
                          <span className="phone_icon">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                          </span>{" "}
                          +0 1 7 777 000 22
                        </h5>
                      </div>
                    </div>
                    <div className="map d-flex align-items-center justify-content-center footer_number">
                      {/* <div className="footer-phone-icon mx-2">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                      </div> */}

                      <div>
                        <p>
                          <span className="email_icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>{" "}
                          learning@school.com
                          <br />
                          <span className="google_icon">
                            <FontAwesomeIcon icon={faGoogle} />
                          </span>{" "}
                          www.learning_school.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <InputGroup className="mb-3 my-5" id="email_input">
                    <FormControl
                      placeholder="Enter Your Email Address"
                      aria-label="email"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="subscribe_button">
                      SUBSCRIBE
                    </Button>
                  </InputGroup>
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
            </Row>
          </Container>

          <p className="mt-5 text-center copy_text">
            <small>learning_school &copy; Jannat Borna </small>
          </p>
        </div>
      </div>
    );
};


export default Footer;