import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../../image/Instructors/team-1.png';
import image2 from '../../../image/Instructors/team-2.png';
import image3 from '../../../image/Instructors/team-3.png';
import image4 from '../../../image/Instructors/team-4.png';
import image5 from '../../../image/Instructors/team-5.png';
import image6 from '../../../image/Instructors/team-6.png';
import './Instructors.css'


const Instructors = () => {
    return (
        <div>
            <Container>

                <section id="team" className="pb-5">
                    <div className="container">
                        <h5 className="section-title h1">Our Instructor</h5>
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image1} alt="card image" /></p>
                                                    <h4 className="card-title">Stack Developer</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className=" title_text">MERN Stack Developer</h4>
                                                    <p className="card-text">I am a stack web developer. I use MongoDB for database.</p>
                                                   
                                                   <div className="contact_link text-sm-middle">     
                                                       <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                       

                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image2} alt="card image" /></p>
                                                    <h4 className="card-title">Web Designing</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">Web Designing</h4>
                                                    <p className="card-text">I am expert in web designing. I can add functionality besides designing a webpage. </p>
                                                   
                                                       
                                                   <div className="contact_link text-sm-middle">
                                                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image3} alt="card image" /></p>
                                                    <h4 className="card-title">PSD To HTML</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">PSD To HTML</h4>
                                                    <p className="card-text">I can covert any PSD design to a responsive webpage.</p>
                                                   
                                                        
                                                <div className="profile_link text-sm-middle">
                                                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   


                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image4} alt="card image" /></p>
                                                    <h4 className="card-title">PSD To HTML</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">PSD To HTML</h4>
                                                    <p className="card-text">I can covert any PSD design to a responsive webpage.</p>


                                                    <div className="profile_link text-sm-middle">
                                                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image5} alt="card image" /></p>
                                                    <h4 className="card-title">PSD To HTML</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">PSD To HTML</h4>
                                                    <p className="card-text">I can covert any PSD design to a responsive webpage.</p>


                                                    <div className="profile_link text-sm-middle">
                                                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={image6} alt="card image" /></p>
                                                    <h4 className="card-title">PSD To HTML</h4>

                                                    <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">PSD To HTML</h4>
                                                    <p className="card-text">I can covert any PSD design to a responsive webpage.</p>


                                                    <div className="profile_link text-sm-middle">
                                                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div> 
                                   
                                    
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Instructors;