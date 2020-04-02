/* eslint-disable import/first */
import React, { Component } from "react";
import fireBase from "../config/fire";
import { withRouter, Redirect } from "react-router-dom";
import logo_burghy from "./logo_burghy1.png";
import "./styleHome.css";

class Home extends Component {
    state = {
        displayHandle: false,
        redirect: ""
    }
    logout = () => {
        fireBase.auth().signOut()
        this.setState({
            redirect: "/login"
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome Home</h1>

                <div className="container">
                    <div className="nav">
                        <div className="nav-side">
                            <span class="open-slide">
                                <a href="." onclick="openSlideMenu()">
                                    <svg width="30" height="30">
                                        <path d="M0,5 30,5" stroke="#000" stroke-width="5" />
                                        <path d="M0,14 30,14" stroke="#000" stroke-width="5" />
                                        <path d="M0,23 30,23" stroke="#000" stroke-width="5" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <img src={logo_burghy} alt="logo" class="logo" />
                        <ul>
                            <li>
                                <a href=".">Home</a>
                            </li>
                            <li>
                                <a href=".">About</a>
                            </li>
                            <li>
                                <a href=".">FAQ</a>
                            </li>
                            <li>
                                <a href=".">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={this.logout} label="Action"> logout </button>
                    {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                </div>

            </div >


        );
    }
}
export default withRouter(Home);