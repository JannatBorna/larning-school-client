import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import './Service.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Service = ({ service }) => {
    const [props, set] = useSpring(() => ({ 
        xys: [0, 0, 1], 
        config: { mass: 5, tension: 350, friction: 40 
        } }))

    const { _id, name, img, price, describe } = service;

   

    

    return (
        <div className="col-md-4 mb-5" direction="horizontal">
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div style={{ height: '20ch', flexDirection: 'row'}} className="align-items-start">
                    <div className="p-3 service">
                     
                        <Image src={img} className="w-50 mb-3" roundedCircle /> 
                        <h3 className="text-dark">{name}</h3>
                        <p className="describe_text">{describe}</p>
                       
                        <div className="row text-center mt-3 w-95 m-auto">
                            <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
                                <h5 className="service_fee">
                                    Course fees:{" "}
                                    <span style={{ color: "red" }}>${price}</span>
                                </h5>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-6 ">
                                <Link to={`/singleService/${_id}`}>
                                    <button className="app_button mt-3">Apply Now</button>
                                </Link>        
                                        
                            </div>
                        </div>
                        </div>
               
              </div>
                
            </animated.div>
        </div>
    );
};

export default Service;        
                                        
                                    
                                
                            