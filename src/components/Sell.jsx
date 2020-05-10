/* eslint-disable import/first */
import React, { Component } from "react";
import storage from "../config/fire";
import firebase from "firebase";
import { withRouter, Redirect } from "react-router-dom";
import "./styleSell.css";
import logo_burghy from "./logo_burghy1.png";
class Sell extends Component {
    state = {
        displayHandle: false,
        redirect: "",
        image: '',

        name: "",
        number: "",
        email: "",
        description: "",
        space: "",
        condition: "",
        location: "",
        price: ""

    }
    handleClick = () => {
        const file = document.querySelector("#photo").files[0]
        const storageRef = firebase.storage().ref()
        const ref = storageRef.child('images')
        const name = new Date() + '-' + file.name

        var blob = new Blob([file], { type: "image/jpeg" });

        const task = ref.child(name).put(blob)
        task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url)
                this.setState({ image: url })
            })
            .catch(err => console.error('error uploading file', err))
    }
    postItem = () => {
        this.setState({
            redirect: "/home"
        })

        const db = firebase.firestore()
        // db.collection("photos").doc("firstPhoto").set({
        db.collection("users").doc().set({
            space: this.state.space,
            name: this.state.name,
            phone_number: this.state.number,
            email: this.state.email,
            condition: this.state.condition,
            price: this.state.price,
            location: this.state.location,
            image: this.state.image,
            description: this.state.description

        }).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
                window.alert("Error writing document: ", error);
                console.log(error);
            });
    }
    homepage = () => {
        this.setState({
            redirect: "/home"
        })
    }


    render() {
        return (
            <div className="App" style={{
                backgroundColor: "#80d0c7",
            }}>

                <div className="App-header">
                    <div>
                        <img src={logo_burghy} alt="logo" class="logo" />
                    </div>
                    <p1>Sell Here </p1>

                    <div className="Photo">

                        <input style={{ borderRadius: "0px", marginRight: "30" }}
                            // value={this.state.image}
                            type="file"
                            id="photo"
                        // onChange={(event) => { this.setState({ image: event.target.value }) }}

                        />
                        <span>
                            <button onClick={this.handleClick}> uploadImage</button>
                        </span>
                    </div>
                    <div className="inputs">
                        <div className="Title">
                            <input
                                value={this.state.name}
                                name="name"
                                type="text"
                                placeholder="Enter the title of your item"

                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    })
                                }}

                            />
                        </div>.

                    <div className="condition">
                            <input
                                value={this.state.condition}
                                name="condition"
                                type="text"
                                placeholder="Condition"

                                onChange={(event) => {
                                    this.setState({
                                        condition: event.target.value
                                    })
                                }}

                            />
                        </div>
                    .
                    <div className="price">
                            <input
                                value={this.state.Price}
                                name="price"
                                type="number"
                                placeholder="Price"

                                onChange={(event) => {
                                    this.setState({
                                        price: event.target.value
                                    })
                                }}

                            />
                        </div>.
                        <div className="location">
                            <input
                                value={this.state.Location}
                                name="location"
                                type="text"
                                placeholder="Location on campus"

                                onChange={(event) => {
                                    this.setState({
                                        location: event.target.value
                                    })
                                }}

                            />
                        </div>.

                    <div className="Phone">
                            <input
                                value={this.state.number}
                                name="phone"
                                type="tel"
                                placeholder="Enter a number for buyers to reach you"
                                onChange={(event) => {
                                    this.setState({
                                        number: event.target.value
                                    })
                                }}
                            />
                        </div>.

                    <div className="Email">
                            <input
                                value={this.state.email}
                                name="email"
                                type="email"
                                placeholder="Enter your email for buyers to reach you"
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    })
                                }}
                            />
                        </div>
                        {/* <div className="Description">
                        <input
                            style={{ height: "100px", width: "900px" }}
                            value={this.state.description}
                            name="descripltion"
                            type="text"
                            placeholder="Please enter a brief description of your item for buyers. 
                            How old it is? Where it's currently located, and your expected sell price.."
                            onChange={(event) => {
                                this.setState({
                                    description: event.target.value
                                })
                            }}
                        />
                    </div> */}
                    </div>
                    <div>

                        <button onClick={this.postItem} label="Action">post item</button>
                        <button onClick={this.homepage} label="Action"
                            style={{ width: "200px" }}
                        >Back to home</button>
                        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
                    </div>
                </div>


            </div>

        );
    }
}
export default withRouter(Sell);