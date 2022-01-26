import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAfejvmjhwr9cFCt8KfCN27ko1TwgyXBts",
  authDomain: "urbanstore-8ce7a.firebaseapp.com",
  projectId: "urbanstore-8ce7a",
  storageBucket: "urbanstore-8ce7a.appspot.com",
  messagingSenderId: "861568492342",
  appId: "1:861568492342:web:f543be8b24a958e3548997",
  measurementId: "G-30S3PMTDCY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
