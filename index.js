import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import { initializeApp } from "firebase/app";*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*const firebaseConfig = {
  apiKey: "AIzaSyDR0FqnzyJ4H3k6PaW90yV1zGHH7wRwnks",
  authDomain: "time-helper-268d3.firebaseapp.com",
  projectId: "time-helper-268d3",
  storageBucket: "time-helper-268d3.appspot.com",
  messagingSenderId: "126914856397",
  appId: "1:126914856397:web:601da832157b4bc4e5b084"
};

const app = initializeApp(firebaseConfig);*/

reportWebVitals();
