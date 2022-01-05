import React, { useRef } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Register = () => {
 const{registerCreatePassword,setIsLoading,updateName}=useAuth();
 let navigate = useNavigate();
 let location = useLocation();
 const uri=location?.state?.from||'/'

    const nameRef=useRef();
    const emailRef=useRef()
    const passwordRef=useRef()

   const handelLogin=(e)=>{
        e.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
       
        console.log(name,email,password);
        registerCreatePassword(email,password)
        .then((userCredential) => {
          setIsLoading(true)
          updateName(name)
            // Signed in 
            const user = userCredential.user;
            // ...
            navigate(uri)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(()=>{
            setIsLoading(false)
          })
    }
   
    return (
        <div className='loginCss'>
            <h1 style={{textAlign:"center",padding:"40px"}}>Register Here </h1>
            <div style={{textAlign:"center"}}>
            <form  onClick={handelLogin}>
            <input type="text" ref={nameRef} placeholder='Your Name' /> <br />
            <input type="email" ref={emailRef} placeholder='Your Email' /> <br />
            <input type="password" ref={passwordRef} placeholder='Your Password' /> <br />
            <input style={{fontSize:"20px",fontWeight:"bolder"}} type="Submit" value="submit" />
            </form>
            
          <h4>  Already Have an account!<Link to="/login"> Log In</Link></h4>
      
       
            </div>
        </div>
    );
};

export default Register;