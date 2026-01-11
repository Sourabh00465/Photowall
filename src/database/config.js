// import {initializeApp} from "firebase/app";
// setup is for reatime database //
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAwSiJ5RoIXO6thtQOXWzDKOz1x8RKfxUE",
  authDomain: "photowall-73849.firebaseapp.com",
  databaseURL: "https://photowall-73849-default-rtdb.firebaseio.com",
  projectId: "photowall-73849",
  storageBucket: "photowall-73849.firebasestorage.app",
  messagingSenderId: "354747332016",
  appId: "1:354747332016:web:49737d523246d340ce5275",
  measurementId: "G-XNFZY4Y5KV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export  {db};