import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import banner from '../../../image/banner/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div id="banner">
            <Container>
                <Row className="home_page">
                    <Col md={7} className="banner_text d-flex align-items-center">
                        <div>
                            <p className="tag_p mx-5 text-sm-start">Hard work <br /> is a great tool to <br /> make dreams come true</p>
                           

                            <p className="program mx-5 text-sm-start">

                                <Typewriter

                                    options={{

                                        autoStart: true,
                                        loop: true,
                                    }}

                                    onInit={(typewriter) => {

                                        typewriter
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .typeString('<strong class="typewriter_text">Programmer!</strong>')
                                            .pauseFor(2000)
                                            .deleteChars(11)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .typeString('<strong class="typewriter_text">React Developer!</strong>')
                                            .pauseFor(2000)
                                            .start()
                                            .deleteChars(19)
                                            .typeString('<strong class="typewriter_text">Web Developer!</strong>')
                                            .start()
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .deleteChars(16)
                                            .typeString('<strong class="typewriter_text">Front End Developer!</strong>')
                                            .deleteChars(20)
                                            .pauseFor(2000)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .start();
                                    }}
                                />

                            </p>

                            <p className="tag_small mx-5 text-sm-start">I am an enthusiastic JavaScript with knowing some frameworks for the frontend and the backend.I always focus on learning new technology. </p>


                            <div className="home_button">
                                <Button className="mb-2 mx-2 button_color">Read More</Button>
                    
                            </div>  
                            
                        </div>
                           
                    </Col>

                    <Col md={5} className="image">
                        <Image className="w-75 mt-5" src={banner} roundedCircle />
                    </Col>

                </Row>
            </Container>  

           
        </div>
    );
};

export default Banner;