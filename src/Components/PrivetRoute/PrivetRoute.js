import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Pages/Context/useAuth';

const PrivetRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    const location=useLocation();
  if(isLoading){
    return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
  }
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
 
};

export default PrivetRoute;