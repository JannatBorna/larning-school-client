import React from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import register from '../../../image/login/register.png';
import './Register.css'

const Register = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} className="input-login">
                    <Typography variant="body1" gutterBottom>
                        Login</Typography>
                    <form > {/* onSubmit={handleLoginSubmit} */}

                        <TextField
                            sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Name"
                            name="name"
                            // onBlur={handleOnBlur}
                            variant="standard" /> 

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


                        <Button className="login-button" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text" className="login_text">All Ready Register? please 
                                <span className="please_register mx-1">Login</span></Button>
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
                            className="btn_google mx-2"><i className="fab fa-google"></i> Google</button>

                        {/* ---------Github--------- */}
                        <button className="btn_github mx-2"><i className="fab fa-github"></i> Github</button>

                    </form>




                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', backgroundColor: 'cadetblue' }} src={register} alt="" />
                </Grid>

            </Grid>


        </Container>
    );
};

export default Register;