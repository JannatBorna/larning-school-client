import React from 'react';
import Feedbacks from '../../Dashboard/User/Feedback/Feedbacks/Feedbacks';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
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
        <About></About>
        

        <div>
          <HomeServices></HomeServices>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 2,
              borderColor: "#000000",
            }}
          />
        </div>

        <Instructors></Instructors>
        <GroupStudy></GroupStudy>
        <Feedbacks></Feedbacks>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
};

export default Home;