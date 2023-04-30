import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, TextField, } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../hook/useAuth';
import Footer from '../../Page/Shared/Footer/Footer';
import Navigation from '../../Page/Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState({});


    const location = useLocation();
    const navigate = useNavigate();

    const { user, loginUser, authError, isLoading, signInWithGoogle, signInWithGithub } = useAuth();

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
        loginUser(loginData.email, loginData.password, location, navigate);
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
            <Navigation />
            <Container >
                <form onSubmit={handleLoginSubmit} className="login_container mt-5">
                    <h2 className="login mt-3 mb-4">Login With</h2>
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
                        onChange={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard" />


                    <Button className="login_button" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text" className="login_text">New User?
                            <span className="please_register mx-1">Register Now</span></Button>
                    </NavLink>


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
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;
                    
            