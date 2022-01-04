import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../UseFirebase/useFirebase';

const Register = () => {
 
    const nameRef=useRef();
    const emailRef=useRef()
    const passwordRef=useRef()
 
   const handelLogin=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
       
        console.log(name,email,password);
 
 
    }
    return (
        <div className='loginCss'>
            <h1 style={{textAlign:"center",padding:"40px"}}>register here </h1>
            <div style={{textAlign:"center"}}>
            <form  onClick={handelLogin}>
            <input type="text" ref={nameRef} placeholder='Your Name' /> <br />
            <input type="email" ref={emailRef} placeholder='Your Email' /> <br />
            <input type="password" ref={passwordRef} placeholder='Your Password' /> <br />
            <input style={{fontSize:"20px",fontWeight:"bolder"}} type="Submit" value="submit" />
            </form>
            <Button  style={{textAlign:"center",width:"50vw",fontWeight:"bolder",fontSize:"20px"}} variant="outlined">Sign with google</Button><br />
          <h5>  Already Have an account!<Link to="/login"> Log In</Link></h5>
       
            </div>
        </div>
    );
};

export default Register;