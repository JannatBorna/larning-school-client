import React from 'react';
import Feedbacks from '../../Dashboard/User/Feedback/Feedbacks/Feedbacks';
import Banner from '../Banner/Banner';
import GroupStudy from '../GroupStudy/GroupStudy';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Instructors from '../Instructors/Instructors';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Navigation from '../Shared/Navigation/Navigation';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Header></Header>
            <HomeServices></HomeServices>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />

            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />

            <Instructors></Instructors>
            <GroupStudy></GroupStudy>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000'
            }} />

            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;