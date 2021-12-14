import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Instructors from '../Instructors/Instructors';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;