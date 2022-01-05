
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

import './Login.css'

const Login = () => {
    const{setUser,setIsLoading,signInPassword,signInWithGoogles}=useAuth();
    let navigate = useNavigate();
 let location = useLocation();
 const uri=location?.state?.from||'/checkout'

  
   const emailRef=useRef()
   const passwordRef=useRef()

  const handelLogin=(e)=>{
       e.preventDefault();
     
       const email=emailRef.current.value;
       const password=passwordRef.current.value;
      
       signInPassword(email,password)
       .then((userCredential) => {
         setIsLoading(true)
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        // ...
        navigate(uri)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(()=>{
        setIsLoading(false)
      })


   }
   const handelGoogleSignIn=()=>{
    signInWithGoogles()
    .then((result)=>{
      setIsLoading(true)
      setUser(result.user)
      navigate(uri)
  })
  .catch((err)=>{
      console.log(err)
  })
  .finally(()=>{
      setIsLoading(false)
  })

  }
    return (
        <div className='loginCss'>
            <h1  style={{textAlign:"center",padding:"40px"}}>Login Here</h1>
            <div style={{textAlign:"center"}}>
            <form  onClick={handelLogin}>
          
            <input type="email" ref={emailRef} placeholder='Your Email' /> <br />
            <input type="password" ref={passwordRef} placeholder='Your Password' /> <br />
            <input style={{fontSize:"20px",fontWeight:"bolder"}} type="Submit" value="submit" />
            </form>
            <Button onClick={handelGoogleSignIn}  style={{textAlign:"center",marginTop:"20px",width:"50vw",fontWeight:"bolder",fontSize:"20px"}} variant="outlined">Sign with google</Button><br />
         <h4> If new user pleace <Link to="/register">Register</Link> </h4>
      
       
        </div>
     
        </div>
    );
};

export default Login;