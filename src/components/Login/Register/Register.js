import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation,  } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import Footer from '../../Page/Shared/Footer/Footer';
import Header from '../../Page/Shared/Header/Header';

const Register = () => {
          
    const [loginData, setLoginData] = useState({});

   
    const location = useLocation();
    const navigate = useNavigate();
    
    const { user, registerUser, authError, isLoading, signInWithGoogle, signInWithGithub } = useAuth();

   

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

 
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSign = () => {
        signInWithGoogle(location, navigate)
    }

    const handleGithubSign = () => {
        signInWithGithub(location, navigate)
    }

    return (
       <div>
           <Header></Header>
            <Container><h2 className="register mt-3 mb-4">Register With</h2>
                {
                    !isLoading &&
                    <form onSubmit={handleLoginSubmit} className="login_container mt-5"> {/*  */}

                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email"
                            name="email"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Retype Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard" />


                        <Button className="register_button" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text" className="login_text">All Ready Register?
                                <span className="please_register mx-1">Login</span></Button>
                        </NavLink>


                        {/*--------- Google--------- */}
                        <br />
                        <button
                            onClick={handleGoogleSign}
                            className="btn_google mx-2 mb-4"><i className="fab fa-google"></i> Google</button>

                        {/* ---------Github--------- */}
                        <button
                            onClick={handleGithubSign}
                            className="btn_github mx-2 mb-4"><i className="fab fa-github"></i> Github</button>

                    </form>

                }


                {/* loading */}
                {
                    isLoading && <CircularProgress
                        color="secondary" />
                }

                {/* register  successfully*/}
                {
                    user?.email && <Alert severity="success">Login successfully!</Alert>
                }

                {/* error message */}

                {
                    authError && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {authError}
                    </Alert>
                }

            </Container>

            <Footer></Footer>
       </div>
    );
};

export default Register;