/* eslint-disable import/first */
import React, { Component } from "react";
import storage from "../config/fire";
import firebase from "firebase";
import { withRouter, Redirect } from "react-router-dom";
import "./styleSell.css";

class Sell extends Component {
    state = {
        displayHandle: false,
        redirect: "",
        image: null,
        name: "",
        number: null,
        email: "",
        description: "",
        space: "",
        condition: "",
        location: "",
        price: ""

    }
    handleChange = e => {

    };

    postItem = () => {
        this.setState({
            redirect: "/home"
        })

        const db = firebase.firestore()
        // db.collection("photos").doc("firstPhoto").set({
        db.collection("photos").doc().set({
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
                backgroundColor: "grey",
            }}>
                <div className="App-header">
                    <p1>Sell Page </p1>

                    <div className="Photo">
                        <h6>
                            Choose the photo of your deal
                    </h6>

                        <input style={{ borderRadius: "0px" }}
                            value={this.state.image}
                            type="file"
                            name="image"
                            onChange={(event) => { this.setState({ image: event.target.value }) }}
                        />
                    </div>
                    <div className="name">
                        <input
                            value={this.state.name}
                            name="name"
                            type="text"
                            placeholder="Enter the name of your item"

                            onChange={(event) => {
                                this.setState({
                                    name: event.target.value
                                })
                            }}

                        />
                    </div>
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
                    </div>
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
                    </div>
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
                    </div>
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
                    <div className="Description">
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