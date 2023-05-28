import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        fetch('https://larningschool-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])
    return (
        <Container className='custom-container mt-5 pt-5'>
            <h2 className='mb-5 services-text'>What We <span className='provide'>Pr</span><span className='provide_text'>O</span><span className='provide'>vide!</span></h2>
            <div className="services_container">

                {
                    homeServices.slice(0, limit ? limit : homeServices.length).map(homeService => <HomeService
                        key={homeService.name}
                        homeService={homeService}
                        setLimit={setLimit}
                   >
                   </HomeService>)
                }
                
            </div>    
        </Container>
                   
    );
};

export default HomeServices;