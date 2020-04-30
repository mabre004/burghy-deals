import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAFWTl8C_3HeY-Q21FZXP3USTvyJKN2sdk",
    authDomain: "burghydeals-71334.firebaseapp.com",
    databaseURL: "https://burghydeals-71334.firebaseio.com",
    projectId: "burghydeals-71334",
    storageBucket: "burghydeals-71334.appspot.com",
    messagingSenderId: "355898713780",
    appId: "1:355898713780:web:6e09f7fd22ace9202a99e1",
    measurementId: "G-0TFFFM7HT6"
};
const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;