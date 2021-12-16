import React from 'react';
import { useLocation, Navigate} from 'react-router-dom';
import useAuth from './../../../hook/useAuth';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    
    const {user, isLoading} = useAuth();
    let location = useLocation();
    if(isLoading){
        return <CircularProgress color="secondary" />
    }
    
    if(user.email){
        return children;
    }
    
    return <Navigate to="/login" state={{
           from: location }} />
   
};

export default PrivateRoute;