import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhL8_e0qnZs6uzG1kFTEXXrcsIbtSkRYs",
    authDomain: "signup-burghy.firebaseapp.com",
    databaseURL: "https://signup-burghy.firebaseio.com",
    projectId: "signup-burghy",
    storageBucket: "signup-burghy.appspot.com",
    messagingSenderId: "69801167438",
    appId: "1:69801167438:web:240695b236463991ef111f",
    measurementId: "G-2237WKQ8HH"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;