import React, { Component } from "react";
import "./homepage.css";
import logo_burghy from "./logo_burghy.png";
//import marketplace from "./marketplace.jpg";
class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav">
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
      </div>
    );
  }
}

export default Homepage;
