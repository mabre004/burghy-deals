/* eslint-disable import/first */
import React, { Component } from "react";
import fireBase from "../config/fire";
import { withRouter, Redirect } from "react-router-dom";
import logo_burghy from "./logo_burghy1.png";
import "./styleHome.css";
import fire from "firebase";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayHandle: false,
            redirect: "",
            data: [],

        }
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


    // onLoad = (e) => {
    //     const db = fire.firestore();
    //     db.collection("photos").get().then(function (querySnapshot) {
    //         querySnapshot.forEach(function (doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //             const photolist = document.querySelector('#photoList');
    //             const photolist1 = document.querySelector('#photosData');
    //             let li = document.createElement('li');
    //             let space = document.createElement('div');
    //             let name = document.createElement('span');
    //             let email = document.createElement('div');
    //             let phone = document.createElement('div');
    //             let image = document.createElement('div');
    //             let description = document.createElement('div');
    //             li.setAttribute('data-id', doc.id);
    //             space.textContent = doc.data().space;
    //             name.textContent = doc.data().name;
    //             email.textContent = doc.data().email;
    //             phone.textContent = doc.data().phone_number;
    //             image.textContent = doc.data().image;
    //             description.textContent = doc.data().description;
    //             li.appendChild(space);
    //             li.appendChild(name);
    //             li.appendChild(email);
    //             li.appendChild(phone);
    //             // li.appendChild(image);
    //             li.appendChild(description);
    //             // photolist.appendChild(li);
    //             photolist1.appendChild(li)
    //             // this.setState({ data: doc.data() })
    //         });

    //     });


    // }
    // renderPhotos = (doc) => {
    //     const photolist = document.querySelector('#photoList');
    //     let li = document.createElement('li');
    //     let name = document.createElement('span');
    //     li.setAttribute('data-id', doc.id);
    //     name.textContent = doc.data().name;
    //     li.appendChild(name);
    //     photolist.appendChild(li);

    // }

    render() {
        const db = fire.firestore();
        db.collection("photos").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                // const photolist = document.querySelector('#photoList');
                // const photolist1 = document.querySelector('#photosData');
                // let li = document.createElement('li');
                // let space = document.createElement('div');
                // let name = document.createElement('span');
                // let email = document.createElement('div');
                // let phone = document.createElement('div');
                // let image = document.createElement('div');
                // let description = document.createElement('div');
                // li.setAttribute('data-id', doc.id);
                // space.textContent = doc.data().space;
                // name.textContent = doc.data().name;
                // email.textContent = doc.data().email;
                // phone.textContent = doc.data().phone_number;
                // image.textContent = doc.data().image;
                // description.textContent = doc.data().description;
                // li.appendChild(space);
                // li.appendChild(name);
                // li.appendChild(email);
                // li.appendChild(phone);
                // // li.appendChild(image);
                // li.appendChild(description);
                // // photolist.appendChild(li);
                // photolist1.appendChild(li)
                // // this.setState({ data: doc.data() })
            });

        });


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
                        <h1 id={"photoList"}>UI Data</h1>
                        <div style={{
                            fontFamily: "Times New Roman",
                            fontSize: "28px",
                            marginLeft: "50px",
                            wordSpacing: "5px"

                        }} id={"photosData"}></div>
                        {/* {this.state.data} */}

                    </div>
                    {/* <button onClick={this.onLoad}>Load Data</button> */}
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