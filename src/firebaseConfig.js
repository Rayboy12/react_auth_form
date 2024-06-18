import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBm3AJJ5ueA09hw21OAuLrDe16n7eUCE8Y",
    authDomain: "react-auth-form-debf1.firebaseapp.com",
    projectId: "react-auth-form-debf1",
    storageBucket: "react-auth-form-debf1.appspot.com",
    messagingSenderId: "615866039717",
    appId: "1:615866039717:web:7e9ab73726a2d4b443bc4c",
    databaseURL: "https://react-auth-form-debf1-default-rtdb.firebaseio.com/" 
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const database = getDatabase(app);

export { auth };
export const database =  getDatabase(app);
