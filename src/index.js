import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdgJa29KDP6zolVowa9sVesFu16Xu_3uQ",
    authDomain: "fir-react-first-project.firebaseapp.com",
    databaseURL: "https://fir-react-first-project.firebaseio.com",
    projectId: "fir-react-first-project",
    storageBucket: "fir-react-first-project.appspot.com",
    messagingSenderId: "988238844126",
    appId: "1:988238844126:web:c8c98ed2b48a7466cdf24f",
    measurementId: "G-DBJZSJD9SQ"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
