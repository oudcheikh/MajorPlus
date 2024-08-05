// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT0dpJ3K3vte8luJ7LxA9JqswAfCUM-ig",
    authDomain: "majorplus.firebaseapp.com",
    projectId: "majorplus",
    storageBucket: "majorplus.appspot.com",
    messagingSenderId: "483916795794",
    appId: "1:483916795794:web:dd78de778546005e1bfb4b",
    measurementId: "G-8NK1MSJR2E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
