import { GoogleAuthProvider,getAuth ,signInWithPopup } from "firebase/auth";
import { useState } from "react";
const googleProvider = new GoogleAuthProvider();
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

return {
user,
signInWithGoogles
}

}
export default useFirebase;