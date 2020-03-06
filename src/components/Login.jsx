/* eslint-disable import/first */
import React, { Component } from "react";
export { Login } from "./Login";
import hands from "./hand.png";
import "./styleLogin.css";
import home from "./Home";
import { Redirect } from "react-router-dom";
import fire from "../config/fire";


class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.loginClick = this.loginClick.bind(this);
    //     this.signupClick = this.signupClick.bind(this);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }
    // loginClick(e) {
    //     e.preventDefault();
    //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }
    // signupClick(e) {
    //     e.preventDefault();
    //     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    state = {
        displayHandle: false,
        redirect: ""
    }
    signupClick = () => {
        this.setState({
            redirect: "/register"
        })
    }
    loginClick = () => {
        this.setState({
            redirect: "/home"
        })
    }
    render() {


        return <div className="App" style={{
            backgroundImage: `url(${hands})`, backgroundPosition: "center",
            backgroundSize: "cover",

        }}>
            <header className="App-header">
                <p1>Welcome to </p1>
                <p1>BurghyDeals</p1>
                <div className="LoginBox">

                    <div className="Email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your SUNY Plattsburgh email"
                        ></input>
                    </div>
                    <div className="Password" >

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        ></input>
                    </div>
                    <div className="submit">
                        <button onClick={this.loginClick} label="Action"> LogIn </button>
                        <button onClick={this.signupClick} label="Action"> SignUp </button>

                    </div>
                    {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                    {/* <a
                        className="App-link"
                        href="https://plattsburgh.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb" }}
                    >
                        Go to myPlattsburgh?
        </a> */}
                </div>


            </header>
        </div>;

    }
}

export default Login;

