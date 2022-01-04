import { GoogleAuthProvider,getAuth ,signInWithPopup,createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentic from "../Firebase/Firebase.init";
import { Password } from '@mui/icons-material';

const googleProvider = new GoogleAuthProvider();
initializeAuthentic();
const useFirebase=()=>{
    const [user,setUser]=useState([])
    const auth = getAuth();

    const signInWithGoogles=()=>{
        signInWithPopup(auth, googleProvider)
  .then((result) => {
  
    const user = result.user;
    setUser(user)
  }).catch((error) => {
    
   
  });
    }

     const registerCreatePassword=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
     }
     const signInPassword=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
     }
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
         
          setUser(user)
          // ...
        } else {
          setUser({})
        }
      });
     },[])
return {
user,
setUser,
signInWithGoogles,
registerCreatePassword,
signInPassword
}

}
export default useFirebase;