import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBhL8_e0qnZs6uzG1kFTEXXrcsIbtSkRYs",
    authDomain: "signup-burghy.firebaseapp.com",
    databaseURL: "https://signup-burghy.firebaseio.com",
    projectId: "signup-burghy",
    storageBucket: "signup-burghy.appspot.com",
    messagingSenderId: "69801167438",
    appId: "1:69801167438:web:a40a8e52f37c4887ef111f",
    measurementId: "G-EK9P1B93J9"
};
const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;