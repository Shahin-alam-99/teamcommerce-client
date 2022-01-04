
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

import './Login.css'

const Login = () => {
    const{user,setUser,signInPassword}=useAuth();
   const nameRef=useRef();
   const emailRef=useRef()
   const passwordRef=useRef()

  const handelLogin=(e)=>{
       e.preventDefault();
       const name=nameRef.current.value;
       const email=emailRef.current.value;
       const password=passwordRef.current.value;
      
       console.log(name,email,password);
       signInPassword(email,password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });


   }
    return (
        <div className='loginCss'>
            <h1  style={{textAlign:"center",padding:"40px"}}>Log in here</h1>
            <div style={{textAlign:"center"}}>
            <form  onClick={handelLogin}>
            <input type="text" ref={nameRef} placeholder='Your Name' /> <br />
            <input type="email" ref={emailRef} placeholder='Your Email' /> <br />
            <input type="password" ref={passwordRef} placeholder='Your Password' /> <br />
            <input style={{fontSize:"20px",fontWeight:"bolder"}} type="Submit" value="submit" />
            </form>
         <h4> If new user pleace <Link to="/register">Register</Link> </h4>
         <h4>email: {user.email}</h4>
        </div>
     
        </div>
    );
};

export default Login;