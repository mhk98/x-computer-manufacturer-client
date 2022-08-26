// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlE2ZDFS6tHjgjlIg7ppWfhXcY9Ism5xQ",
  authDomain: "x-computer-manufacturer-house.firebaseapp.com",
  projectId: "x-computer-manufacturer-house",
  storageBucket: "x-computer-manufacturer-house.appspot.com",
  messagingSenderId: "1752513711",
  appId: "1:1752513711:web:4c4ab8589d3a71ac7ae85a"
};

// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_API_KEY ,
//     authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
//     projectId:process.env.REACT_APP_PROJECTID,
//     storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
//     messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
//     appId:process.env.REACT_APP_APP_ID 
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;