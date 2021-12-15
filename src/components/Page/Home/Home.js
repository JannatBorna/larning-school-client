import React from 'react';
import Feedbacks from '../../Dashboard/User/Feedback/Feedbacks/Feedbacks';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Instructors from '../Instructors/Instructors';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Instructors></Instructors>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;