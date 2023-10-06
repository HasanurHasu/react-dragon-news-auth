// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPSqiaODi7yqBJHMwAR5We-eqbVNcz40Q",
    authDomain: "react-dragon-news-auth-c8d6e.firebaseapp.com",
    projectId: "react-dragon-news-auth-c8d6e",
    storageBucket: "react-dragon-news-auth-c8d6e.appspot.com",
    messagingSenderId: "724189648305",
    appId: "1:724189648305:web:95f65ca99e5bf550331990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;