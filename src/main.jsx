import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfejvmjhwr9cFCt8KfCN27ko1TwgyXBts",
  authDomain: "urbanstore-8ce7a.firebaseapp.com",
  projectId: "urbanstore-8ce7a",
  storageBucket: "urbanstore-8ce7a.appspot.com",
  messagingSenderId: "861568492342",
  appId: "1:861568492342:web:f543be8b24a958e3548997",
  measurementId: "G-30S3PMTDCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
