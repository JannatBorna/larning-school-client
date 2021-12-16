import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../image/login/login.png';
import './Login.css'
import useAuth from './../../../hook/useAuth';


const Login = () => {
    const { signInWithGoogle, signInWithGithub} = useAuth();

    ///login before private page -- google 
    const location = useLocation();
    const navigate = useNavigate();
    

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const handleGithubSignIn = () => {
        signInWithGithub(location, navigate)
    }



    return (
        <Container >
             <form className="login_container mt-5"> {/* onSubmit={handleLoginSubmit} */} 
                <h2 className="login mt-3 mb-4">Login With</h2>
                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email"
                            name="email"
                            // onChange={handleOnChange}
                            variant="standard" />

                        <TextField

                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            // onChange={handleOnChange}
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
                        {/* {
                            isLoading && <CircularProgress
                                color="secondary" />
                        } */}

                        {/* register  successfully*/}
                        {/* {
                            user?.email && <Alert severity="success">Login successfully!</Alert>
                        } */}

                        {/* error message */}

                        {/* {
                            authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError}
                            </Alert>
                        } */}

                        {/*--------- Google--------- */}
                        <br />
                        <button 
                        onClick={handleGoogleSignIn}
                        className="btn_google mx-2 mb-4"><i className="fab fa-google"></i> Google</button>

                        {/* ---------Github--------- */}
                        <button 
                        onClick={handleGithubSignIn}
                        className="btn_github mx-2 mb-4"><i className="fab fa-github"></i> Github</button>

                    </form>
        </Container>
    );
};

export default Login;
                    
            