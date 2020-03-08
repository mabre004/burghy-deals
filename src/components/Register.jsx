

    
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "./actions";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// /* eslint-disable import/first */
// import React, { Component } from 'react';
// // export { Register } from "./Register";
// import { Redirect } from "react-router-dom";
// import "./styleReg.css";
// import Firebase from "../config/fire";
// import { connect } from "react-redux";
// import { signUp } from "./actions";



// class Register extends Component {
//     state = {
//         displayHandle: false,
//         email: '',
//         password: '',
//         redirect: ""
//     }


//     // handleSignUp = () => {


//     //     const { email, password } = this.state;
//     //     Firebase.auth()
//     //         .createUserWithEmailAndPassword(email, password)

//     //         .catch(error => console.log(error));
//     // }


//     click = event => {
//         this.setState({ redirect: "/home" });
        
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.signUp(this.state);
//         return (dispatch, getState, { getFirebase, getFirestore }) => {
//             const firebase = getFirebase();
//             const firestore = getFirestore();

//             Firebase.auth().createUserWithEmailAndPassword(
//                 this.email,
//                 this.password
//             ).catch((err) => {
//                 dispatch({ type: "SIGNUP_ERROR", err });
//             });
//         };
//     }



//     render() {
//         // const { auth, authError } = this.props;
//         // if (auth.uid) return <Redirect to='/' />
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="App" style={{
//                     backgroundColor: "gray"
//                 }}>
//                     <header className="App-header">
//                         <p2>Welcome to </p2>
//                         <p2>BurghyDeals</p2>
//                         <div className="LoginBox">

//                             <div className="Email">
//                                 <input
//                                     name="email"
//                                     type="email" id='email' onChange={this.handleChange}
                                    
//                                     placeholder="Enter your SUNY Plattsburgh email"
//                                 ></input>
//                             </div>
//                             <div className="Pass">
//                                 <input
//                                     name="password"
//                                     type="password" id='password' onChange={this.handleChange}
                                    
//                                     placeholder="Create a password"
//                                 ></input>
//                             </div>
//                             <div className="submit">
//                                 <button type="submit" onClick={this.click} onPress={this.handleSignUp}>Sign Up</button>

//                             </div>
//                             {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
//                             {/* <a
//                         className="App-link"
//                         href="https://plattsburgh.edu"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#61dafb" }}
//                     >
//                         Dont't have an account? Create a new Account
//                     </a> */}
//                         </div>


//                     </header>>
//         </div>
//             </form>
//         );

//     }

// }
// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth,
//         authError: state.auth.authError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (creds) => dispatch(signUp(creds))
//     }
// }

// //export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;
// // export { Register };