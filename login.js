import fireBase from "./src/config/fire";

function logIn(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;

}


fireBase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    window.alert("Error : " + errorMessage);
});