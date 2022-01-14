import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../image/studyG/agl.png';
import image2 from '../../../image/studyG/pm.png';
import image3 from '../../../image/studyG/sm.png'
import './GroupStudy.css'

const GroupStudy = () => {
    return (
       <div>
        
            <div className="group_study my-5">
                <h2 className="group_text my-3">Study Group</h2>
                <Container>
                    <Row>
                        <Col md={4} sm={12}>
                            <div className="study mb-4">
                                <img className="w-100" src={image1} alt="" rounded />
                                <h4 className="name_text my-2">Our Assignment guidelines</h4>
                                <button className="join_group">Join Group</button>
                            </div>
                        </Col>

                        <Col md={4} sm={12}>
                            <div className="study my-5">
                                <img className="w-100" src={image2} alt="" rounded />
                                <h4 className="name_text my-2">Project Management</h4>
                                <button className="join_group">Join Group</button>
                            </div>
                        </Col>

                        <Col md={4} sm={12}>
                            <div className="study">
                                <img className="w-100" src={image3} alt="" thumbnail />
                                <h4 className="name_text my-2">motivation to study</h4>
                                <button className="join_group">Join Group</button>
                            </div>

                        </Col>

                    </Row>

                </Container>
               

            </div>   
       </div>
        
    );
};

export default GroupStudy;