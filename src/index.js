import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// importing firebase here
import * as firebase from 'firebase'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4NoQZswYEbJzl-WqkkNmmGfhDaLoh16M",
  authDomain: "shopping-cart-8147e.firebaseapp.com",
  databaseURL: "https://shopping-cart-8147e.firebaseio.com",
  projectId: "shopping-cart-8147e",
  storageBucket: "shopping-cart-8147e.appspot.com",
  messagingSenderId: "87786423729",
  appId: "1:87786423729:web:84d10c8c3853f53a61e990"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

