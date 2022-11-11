import React from 'react';
import { Container } from 'react-bootstrap';
import photo1 from '../../../image/Instructors/team-1.png';
import photo2 from '../../../image/Instructors/team-2.png';
import photo3 from '../../../image/Instructors/team-3.png';
import photo4 from '../../../image/Instructors/team-4.png';
import photo5 from '../../../image/Instructors/team-5.png';
import photo6 from '../../../image/Instructors/team-6.png';
import './Instructors.css'


const Instructors = () => {
    return (
        <div>
            <Container>
                <section id="team" className="pb-5">
                    <div className="container">
                        <h5 className="section-title h1">Our Instructor</h5>
                       
                        <div className="row">

                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className="img-fluid w-100" src={photo1} alt="" /></p>
                                                    <h4 className="card-title">Emma Hart Willard</h4>
                                                   
                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className=" title_text">Web Development | Python</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>
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

                                                       
                                                    



                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={photo2} alt="" /></p>
                                                    <h4 className="card-title">Anton Shas</h4>

                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">Web Development | Python</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>
                                                   
                                                       
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

                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={photo3} alt="" /></p>
                                                    <h4 className="card-title">Jin Anne</h4>

                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">Physics | Chemistry</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>
                                                   
                                                        
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


                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={photo4} alt="" /></p>
                                                    <h4 className="card-title">Yaron Schoen</h4>

                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">English</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>


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


                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={photo5} alt="" /></p>
                                                    <h4 className="card-title">Mike Kus</h4>

                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">Database</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>

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


                            <div className="col-lg-4 col-xs-12 col-sm-12 col-md-6">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="main_flip">
                                        <div className="front_side">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid w-100" src={photo6} alt="" /></p>
                                                    <h4 className="card-title">Jeffrey Ze</h4>

                                                    {/* <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="title_text">Digital image processing | Multimedia</h4>
                                                    <p className="card-text">Web developers are generally called programmers. They take the design created by the web designers and convert it into a fully functioning website. They use different software and tools like Javascript, React, Node.</p>
                                                    <small>Id: 12400564</small>


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
                