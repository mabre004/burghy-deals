/* eslint-disable import/first */
import React, { Component } from "react";
import fireBase from "../config/fire";
import { withRouter, Redirect } from "react-router-dom";
import "./styleSell.css";

class Sell extends Component {
    state = {
        displayHandle: false,
        redirect: ""
    }
    postItem = () => {
        this.setState({
            redirect: "/home"
        })
    }


    render() {
        return (
            <div className="App" style={{
                backgroundColor: "grey",
            }}>
                <div className="App-header">
                    <p1>Sell Page </p1>

                    <div className="Photo">
                        <h6>
                            Choose the photo of your deal
                    </h6>

                        <input style={{ borderRadius: "0px" }}

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

                        <button onClick={this.postItem} label="Action">post item</button>
                        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                    </div>
                </div>


            </div>

        );
    }
}
export default withRouter(Sell);