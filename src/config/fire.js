import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBhL8_e0qnZs6uzG1kFTEXXrcsIbtSkRYs",
    authDomain: "signup-burghy.firebaseapp.com",
    databaseURL: "https://signup-burghy.firebaseio.com",
    projectId: "signup-burghy",
    storageBucket: "signup-burghy.appspot.com",
    messagingSenderId: "69801167438",
    appId: "1:69801167438:web:a40a8e52f37c4887ef111f",
    measurementId: "G-EK9P1B93J9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

// class Firebase {
//     constructor() {
//         firebase.initializeApp(firebaseConfig);
//         this.auth = firebase.auth();
//         // this.db = app.firestore();
//     }
// }
//     login = (email, password) =>
//         this.auth.signInWithEmailAndPassword(email, password);
//     register = (email, password) =>
//         this.auth.createUserWithEmailAndPassword(email, password);
//     // return this.auth.currentUser.updateProfile({
//     // 	displayName: name
//     // });

//     logout = () => this.auth.signOut();

//     // login(email, password) {
//     //     return this.auth.signInWithEmailAndPassword(email, password);
//     // }

//     // logout() {
//     //     return this.auth.signOut();
//     // }






//     // isInitialized() {
//     // 	return new Promise(resolve => {
//     // 		this.auth.onAuthStateChanged(resolve);
//     // 	});
//     // }

//     getCurrentUsername() {
//         return this.auth.currentUser && this.auth.currentUser.displayName;
//     }

// }

export default firebase();


