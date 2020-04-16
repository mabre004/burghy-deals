/* eslint-disable import/first */
import React, { Component } from "react";
import fireBase from "../config/fire";
import { withRouter, Redirect } from "react-router-dom";
import logo_burghy from "./logo_burghy1.png";
import "./styleHome.css";
import fire from "firebase";
class Home extends Component {
    state = {
        displayHandle: false,
        redirect: "",
        data: null
    }


    logout = () => {
        fireBase.auth().signOut()
        this.setState({
            redirect: "/login"
        })
    }
    sellPage = () => {

        this.setState({
            redirect: "/sell"
        })

    }


    render() {
        const db = fire.firestore();
        db.collection("photos").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                // this.setState({ data: doc.data() })
            });

        });
        let dataUI = this.state.data ? <h1>No Data</h1> : <pre>{JSON.stringify(this.state.data)}</pre>;

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
                    <div>
                        <h1>UI Data</h1>
                        {dataUI}
                    </div>

                    <button onClick={this.logout}
                        style={{ marginLeft: "1200px" }}
                        label="Action"> logout </button>
                    <button onClick={this.sellPage}
                        style={{ marginLeft: "1200px" }}
                        label="Action"> Sellpage </button>
                    {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                </div>

            </div >


        );
    }
}
export default withRouter(Home);