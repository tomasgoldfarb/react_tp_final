import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1i3xwBYOhaqDw0_8SGJ5iiZt4JIHmts",
  authDomain: "curso-react-bc525.firebaseapp.com",
  projectId: "curso-react-bc525",
  storageBucket: "curso-react-bc525.appspot.com",
  messagingSenderId: "205757305455",
  appId: "1:205757305455:web:627e885151156510c3739a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)