import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Service from '../Service/Service';
import './Services.css';




const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-oasis-87609.herokuapp.com/services')
           .then(res => res.json())
           .then(data => setServices(data))
    }, [])

    return ( 
       <div>
           <Header></Header>
            <Container className='custom-container mt-5 pt-5'>
                <h2 className='mb-5 services-text'>What We Provider!
                </h2>
                <div className="services_container">

                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
                {/* : <div className="text-center">
                <h1>Loading...</h1>
                <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt="" />
            </div> */}
            </Container>
            <Footer></Footer>
       </div>
    
    );
};

export default Services;