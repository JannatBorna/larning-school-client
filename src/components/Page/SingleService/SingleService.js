import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Apply from '../Apply/Apply';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './SingleService.css';

const SingleService = () => {
    const [ singleService, setSingleService ] = useState({})

    const { servicesId } = useParams()

    useEffect(() => {
        fetch(`https://warm-oasis-87609.herokuapp.com/services/${servicesId}`)
        .then(res => res.json())
            .then(data => setSingleService(data))
    }, [servicesId])


    return (
        <div className="my-5">
            <Header></Header>
            <h2 className="my-5">Your Apply Services</h2>

            <Container>
                <Row>
                    <div className=" booking">
                        <Col className="booking-card ">
                            <h6><span className="dote-design">Booking Id:</span> {servicesId}</h6>
                            <div className=" dote-design">
                                --------------------------------
                                <h2>Details of</h2>
                            </div>
                            <img className="w-25" src={singleService.img} alt="" />
                            <h4 className="name-text">{singleService.name}</h4>
                            <small className="description-text">{singleService.describe}</small>
                            <h6 className="price-text"><p>${singleService.price}</p></h6>

                        </Col>

                        <div>
                          <Apply></Apply>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleService;