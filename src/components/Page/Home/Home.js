import React from 'react';
import Feedbacks from '../../Dashboard/User/Feedback/Feedbacks/Feedbacks';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Instructors from '../Instructors/Instructors';
import GroupStudy from '../GroupStudy/GroupStudy';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Instructors></Instructors>
            <GroupStudy></GroupStudy>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;