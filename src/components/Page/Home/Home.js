import React from 'react';
import Feedbacks from '../../Dashboard/User/Feedback/Feedbacks/Feedbacks';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import GroupStudy from '../GroupStudy/GroupStudy';
import HomeServices from '../HomeServices/HomeServices/HomeServices';
import Instructors from '../Instructors/Instructors';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';



const Home = () => {
    return (
      <div>
        <Navigation />
        <Banner />
        <About />
        <HomeServices />
        <Instructors />
        <GroupStudy />
        <Feedbacks />
        <Contact />
        <Footer />
      </div>
    );
};

export default Home;