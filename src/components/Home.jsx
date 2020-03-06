/* eslint-disable import/first */
import React, { Component } from "react";
import fire from "../config/fire";
import { Redirect } from "react-router-dom";

class Home extends Component {


    state = {
        displayHandle: false,
        redirect: ""
    }
    logout = () => {
        this.setState({
            redirect: "/login"
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome Home</h1>
                <button onClick={this.logout} label="Action"> logout </button>
                {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}

            </div >


        );
    }
}

export default Home;

