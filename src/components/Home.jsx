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



    render() {
        const db = fire.firestore();
        db.collection("users").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                const photolist = document.querySelector('#photoList');
                const photolist1 = document.querySelector('#photosData');
                let li = document.createElement('li');
                let span = document.createElement('a');
                let space = document.createElement('div');
                let name = document.createElement('div');
                let condition = document.createElement('div');
                let price = document.createElement('div');
                let location = document.createElement('span');
                let email = document.createElement('span');
                let phone = document.createElement('span');
                let image = document.createElement('a');
                let description = document.createElement('div');
                li.setAttribute('data-id', doc.id);
                space.textContent = doc.data().space;
                name.textContent = doc.data().name;
                condition.textContent = "Current condition: " + doc.data().condition;
                price.textContent = "Expected price: " + doc.data().price;
                location.textContent = "Location: " + doc.data().location;
                email.textContent = "Seller's email: " + doc.data().email;
                phone.textContent = "Seller's Phone number: " + doc.data().phone_number;
                image.textContent = doc.data().image;
                description.textContent = doc.data().description;
                // li.appendChild(space);
                // li.appendChild(name);
                // li.appendChild(location);
                // li.appendChild(condition);
                // li.appendChild(email);
                // li.appendChild(price);
                // li.appendChild(phone);
                // var a = document.createElement('a');
                // var linkText = document.createTextNode("item photo");
                // a.appendChild(linkText);
                // a.title = "item photo";
                // a.href = doc.data().image;
                // li.appendChild(a);


                var img = document.createElement('img');
                var linkText = document.createTextNode("item photo");
                img.appendChild(linkText);
                img.title = "item photo";
                img.src = doc.data().image;

                img.height = 350;
                img.width = 320;
                li.appendChild(space);
                li.appendChild(space);
                li.appendChild(img);
                li.appendChild(name);
                li.appendChild(location);
                li.appendChild(condition);
                li.appendChild(email);
                li.appendChild(price);
                li.appendChild(phone);
                li.appendChild(description);
                span.appendChild(li)

                if (document.querySelector('#photosData')) { photolist1.appendChild(li) }

                // photolist.appendChild(li);

                // this.setState({ data: doc.data() })
            });

        });


        return (


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
                    {/* <button onClick={this.logout}
                            style={{ marginLeft: "1200px" }}
                            label="Action"> logout </button>

                        <button onClick={this.sellPage}
                            style={{ marginLeft: "1200px" }}
                            label="Action"> Sellpage </button>
                        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null} */}

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
                        <li>
                            <a onClick={this.sellPage}>SellPage</a>
                            {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}

                        </li>
                        <li>
                            <a href="/login" onClick={this.logout}>Logout</a>
                        </li>
                        <li>
                            <input type="text" placeholder="search.."></input>
                        </li>
                    </ul>
                </div>

                <div className="items">

                    {/* <div id={"photoList"}>UI Data</div> */}
                    <div style={{
                        // textAlign: "center",
                        display: "inline-flex",
                        flexWrap: "wrap",
                        WebkitBoxOrient: "horizontal",
                        WebkitBoxDirection: "normal",
                        flexDirection: "row",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        justifyContent: "space-between",
                        WebkitBoxAlign: "end",
                        alignItems: "flex-end",
                        fontFamily: "Times New Roman",
                        fontSize: "28px",
                        marginLeft: "50px",
                        marginTop: "110px",
                        wordSpacing: "5px"

                    }} id={"photosData"}></div>
                    {/* {this.state.data} */}

                </div>
                {/* <button onClick={this.logout}
                        style={{ marginLeft: "1200px" }}
                        label="Action"> logout </button>

                    <button onClick={this.sellPage}
                        style={{ marginLeft: "1200px" }}
                        label="Action"> Sellpage </button>
                    {this.state.redirect ? <Redirect to={this.state.redirect} /> : null} */}

            </div>




        );
    }
}
export default withRouter(Home);