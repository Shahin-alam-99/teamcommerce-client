import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
const initializeAuthentic=()=>{
     initializeApp(firebaseConfig);
}
export default initializeAuthentic;