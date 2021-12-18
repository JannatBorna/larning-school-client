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
                    <Col md={7} sm={12} className="banner_text d-flex align-items-center">
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
                                            .typeString('<strong class="typewriter_text">Database!</strong>')
                                            .pauseFor(2000)
                                            .deleteChars(10)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .typeString('<strong class="typewriter_text">Multimedia!</strong>')
                                            .pauseFor(2000)
                                            .start()
                                            .deleteChars(12)
                                            .typeString('<strong class="typewriter_text">Web Developer!</strong>')
                                            .start()
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .deleteChars(16)
                                            .typeString('<strong class="typewriter_text">Artificial Intelligence!</strong>')
                                            .deleteChars(25)
                                            .pauseFor(2000)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .start();
                                    }}
                                />

                            </p>

                            <p className="tag_small mx-5 text-sm-start">Multiple subjects help children learn about all the possibilities. It also enables them to make correct decisions regarding their careers as they have a better understanding. </p>


                            <div className="home_button">
                                <button className="mb-2 mx-2 button_color">Read More</button>
                    
                            </div>  
                            
                        </div>
                           
                    </Col>

                    <Col md={5} sm={12} className="image">
                        <Image className="w-75 mt-5" src={banner} roundedCircle />
                    </Col>

                </Row>
            </Container>  

           
        </div>
    );
};

export default Banner;