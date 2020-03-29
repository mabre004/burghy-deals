/* eslint-disable import/first */
import React, { Component } from "react";
import fireBase from "../config/fire";
import { Redirect } from "react-router-dom";
import "./styleSell.css";

class Sell extends Component {
    state = {
        displayHandle: false,
        redirect: ""
    }
    // logout = () => {
    //     fireBase.auth().signOut()
    //     this.setState({
    //         redirect: "/login"
    //     })
    // }
    render() {
        return (
            <div className="SellPage" style={{
                backgroundColor: "lightgrey",
                backgroundSize: "cover", height: "100%"
            }}>
                <h3>Sell Page</h3>
                <div className="Photo">
                    <h1>
                        Choose the photo of your deal
                    </h1>

                    <input

                        type="file"
                        name="image"
                    />
                </div>
                <div className="Name">
                    <input
                        type="text"
                        placeholder="Enter the name of your item"
                    />
                </div>
                <div>
                    <button> Post Item </button>
                </div>

            </div >
        );
    }
}
export default Sell;