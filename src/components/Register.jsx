/* eslint-disable import/first */
import React, { Component } from 'react';
export { Register } from "./Register";
import { Redirect } from "react-router-dom";

import "./styleReg.css";

class Register extends Component {
    state = {
        displayHandle: false,
        redirect: ""
    }
    click = () => {
        this.setState({
            redirect: "/login"
        })
    }

    render() {
        return <div className="App" style={{
            backgroundColor: "gray"
        }}>
            <header className="App-header">
                <p2>Welcome to </p2>
                <p2>BurghyDeals</p2>
                <div className="LoginBox">
                    <div className="FirstName" >
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter your First Name"
                        ></input>
                    </div>
                    <div className="LasttName" >
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your Last Name"
                        ></input>
                    </div>
                    <div className="Email">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your SUNY Plattsburgh email"
                        ></input>
                    </div>
                    <div className="Pass">
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                        ></input>
                    </div>
                    <div className="submit">
                        <button onClick={this.click} label="Action"> Create account </button>

                    </div>
                    {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                    {/* <a
                        className="App-link"
                        href="https://plattsburgh.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb" }}
                    >
                        Dont't have an account? Create a new Account
                    </a> */}
                </div>


            </header>>
        </div>;

    }

}
export default Register;