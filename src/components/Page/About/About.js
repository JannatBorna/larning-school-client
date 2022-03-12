import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../image/about/about.png';
import './About.css';

const About = () => {
    return (
        <div>
            <Container className="mt-2">

                <div className="container_banner my-3">
                    <div className="picture">
                        <img className="w-100" src={about} alt="" rounded />
                    </div>
                    <div className="container_header">
                        <h1 className="color_text">Hello!! Everyone</h1>
                        <span className="health_care">Hard work is a great tool to make dreams come true</span>
                        <p className="p_tag">This website is Learning School related only. School learning is the acquisition of knowledge, subject matter, information, understanding, and skill from teaching. Research on learning and memory provides teachers with essential scientific knowledge that is useful for understanding and improving school learning.</p>

                        <Link to="/"><button className="about_button">Read More</button></Link>
                    </div>
                </div>

            </Container>
        </div>
        
    );
};

export default About;