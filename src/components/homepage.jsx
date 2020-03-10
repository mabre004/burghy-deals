import React, { Component } from "react";
import "./homepage.css";
import logo_burghy from "./logo_burghy.png";
//import marketplace from "./marketplace.jpg";
class Homepage extends Component {
  render() {
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
