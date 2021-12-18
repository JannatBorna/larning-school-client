import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import notfound from '../../../image/notfound/404.png';
import './NotFound.css';


const NotFound = () => {
    return (
        <Col>
            <div className="container not-found">
                <img src={notfound} alt="" />
                <h1>Page Not Found - S<i className="fas fa-sad-tear"></i>RRY</h1>
                <Link as={HashLink} to="/"><button className="found_button my-5"><i className="fas fa-arrow-left"></i> Go Back</button></Link>

            </div>
        </Col>
    );
};

export default NotFound;